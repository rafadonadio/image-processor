// scaler.js
import sharp from 'sharp';

/**
 * Enhances an image by increasing its size and sharpening it.
 * @param {Buffer} imageBuffer - The image data from the upload.
 * @returns {Promise<Buffer>} A new Buffer with the enhanced image.
 */
export async function enhanceImage(imageBuffer) {
    console.log("Enhancing image quality...");
    try {
        const image = sharp(imageBuffer);
        const metadata = await image.metadata();

        // Double the image size and apply sharpening
        const enhancedBuffer = await image
            .resize(metadata.width * 2)
            .sharpen()
            .toBuffer();

        console.log("Image enhanced successfully.");
        return enhancedBuffer;
    } catch (error) {
        console.error("Error enhancing image:", error);
        throw new Error("Failed to enhance image.");
    }
}