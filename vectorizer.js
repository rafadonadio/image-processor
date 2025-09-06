// vectorizer.js
import { Potrace } from 'potrace';

/**
 * Converts an image buffer into an SVG string.
 * @param {Buffer} imageBuffer - The image data to vectorize.
 * @returns {Promise<string>} The resulting SVG code as a string.
 */
export function vectorizeImage(imageBuffer) {
    console.log("Vectorizing image...");
    return new Promise((resolve, reject) => {
        const trace = new Potrace();
        trace.loadImage(imageBuffer, (err) => {
            if (err) {
                console.error("Potrace Error:", err);
                return reject(new Error("Failed to load image for vectorization."));
            }
            console.log("Image vectorized successfully.");
            resolve(trace.getSVG());
        });
    });
}