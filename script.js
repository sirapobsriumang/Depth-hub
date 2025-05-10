document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.getElementById('copy-button');
    const scriptContent = document.getElementById('script-content').innerText;
    const buttonTextSpan = copyButton.querySelector('span');

    if (copyButton && scriptContent) {
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(scriptContent).then(() => {
                // Success!
                const originalText = buttonTextSpan.innerText;
                buttonTextSpan.innerText = 'Copied!';
                copyButton.classList.add('copied');
                copyButton.disabled = true; // Prevent multiple clicks

                // Revert after a short delay
                setTimeout(() => {
                    buttonTextSpan.innerText = originalText;
                    copyButton.classList.remove('copied');
                    copyButton.disabled = false;
                }, 2000);

            }).catch(err => {
                // Error (less common with modern browsers, but good to have)
                console.error('Failed to copy: ', err);
                buttonTextSpan.innerText = 'Error Copying';
                setTimeout(() => {
                    buttonTextSpan.innerText = 'Copy Script';
                }, 2000);
            });
        });
    }

    // Optional: Add a little interactive sparkle on mouse move for the background
    // This is a bit more advanced and can be performance-intensive if not careful
    // For simplicity, I've kept the background purely CSS animated for now.
    // If you want more interaction, we could add particle.js or similar.
});
