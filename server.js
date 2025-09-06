// server.js
import express from 'express';
import multer from 'multer';
import { enhanceImage } from './scaler.js';
import { vectorizeImage } from './vectorizer.js';

const app = express();
const port = 3000; // Hostinger will likely assign a different port

// Configure Multer to handle file uploads in memory
const upload = multer({ storage: multer.memoryStorage() });

// -- The Main API Endpoint --
// It accepts a file upload and an optional 'action' query parameter
app.post('/process-image', upload.single('image'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No image file uploaded.' });
    }

    console.log("Received new image for processing.");
    const { action } = req.query; // e.g., ?action=vectorize

    try {
        // --- Step 1: Always enhance the image first ---
        const enhancedBuffer = await enhanceImage(req.file.buffer);

        // --- Step 2: Decide the final action ---
        // For now, we only have vectorization, but you could add more actions here.
        if (action === 'vectorize') {
            const svgOutput = await vectorizeImage(enhancedBuffer);
            // Send the SVG back as the response
            res.header('Content-Type', 'image/svg+xml');
            res.send(svgOutput);
        } else {
            // If no action or an unknown action is specified,
            // just send back the enhanced image.
            res.header('Content-Type', 'image/png'); // or the original format
            res.send(enhancedBuffer);
        }

    } catch (error) {
        console.error("Processing failed:", error);
        res.status(500).json({ error: 'An error occurred during image processing.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Image processing API listening on port ${port}`);
});// JavaScript Document