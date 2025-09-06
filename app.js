// In your PWA's app.js file

// ... (keep all the element references)

vectorizeBtn.addEventListener('click', async () => {
    if (!originalBlob) return;

    statusEl.textContent = 'Processing image on server, please wait...';
    vectorizeBtn.disabled = true;

    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append('image', originalBlob);

    try {
        // Your Hostinger domain and the correct action
        const response = await fetch('https://your-domain.com/process-image?action=vectorize', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Server responded with an error.');
        }

        // Get the SVG text from the response
        const svgString = await response.text();

        processedPreview.innerHTML = `<h3>Resultado</h3>${svgString}`;
        statusEl.textContent = '¡Proceso completado!';

        const svgBlob = new Blob([svgString], { type: 'image/svg+xml' });
        downloadLink.href = URL.createObjectURL(svgBlob);
        
        // Update UI
        finalActions.style.display = 'none';
        downloadLink.style.display = 'block';

    } catch (error) {
        statusEl.textContent = 'An error occurred while communicating with the server.';
        console.error(error);
    } finally {
        vectorizeBtn.disabled = false;
    }
});

// You can now remove the old 'enhanceBtn' and its event listener,
// as the server handles everything in one step.