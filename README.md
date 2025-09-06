# image-processor
# Custom Creations Florida - Image Vectorizer PWA

A powerful Progressive Web App (PWA) designed to instantly enhance, clean, and vectorize your images and logos. This tool provides a seamless workflow to convert any raster image (like PNG, JPG) into a crisp, scalable SVG vector file, perfect for professional use.

---

## Features

- **AI Quality Enhancement:** Upscale and sharpen your images to improve resolution and detail before processing.
- **Background Removal:** Instantly remove the background from any photo with a single click.
- **Image Vectorization:** Convert the prepared image into a clean, scalable SVG file with control over the number of colors.
- **Fully Responsive:** Works flawlessly on any device—desktop, tablet, or mobile.
- **Client-Side Processing:** All operations run directly in your browser, ensuring your images remain private and secure.

---

## How to Use

The process is designed to be simple and guide you step-by-step:

1.  **Upload Image:** Click the "Upload Image" button and select a logo or picture from your device.
2.  **Enhance Quality:** Click the "Enhance Quality" button. The tool will use AI to improve the image, which will appear in the "Result" preview panel.
3.  **Vectorize:** After enhancement, the "Vectorize" button will appear. Here you can choose whether to remove the background before vectorizing. Click the button to generate the final SVG.
4.  **Download:** Once the process is complete, a "Download SVG" link will appear for you to save your professional-grade vector file.

---

## Tech Stack

This application is built with modern, browser-native technologies to ensure speed and reliability without needing a backend server for processing.

-   **Frontend:** HTML5, CSS3, Modern JavaScript (ESM)
-   **Image Enhancement:** [Super-Resolution.js](https://github.com/cortex-js/super-resolution-js)
-   **Background Removal:** [IMGLY Background Removal](https://img.ly/docs/background-removal/)
-   **Vectorization:** [ImageTracerJS](https://github.com/jankovicsandras/imagetracerjs)
