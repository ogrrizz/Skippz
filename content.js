function clickSkipAdButton() {
    // Look for buttons or elements containing the text "Skip ad"
    const skipButtons = Array.from(document.querySelectorAll('button, div, span'))
        .filter(element => element.textContent.toLowerCase().includes('skip ad'));

    if (skipButtons.length > 0) {
        skipButtons[0].click();
        console.log('Ad skipped');
    }
}

function observeAdChanges() {
    const videoPlayer = document.querySelector('#movie_player');
    if (videoPlayer) {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList' || mutation.type === 'subtree') {
                    clickSkipAdButton();
                }
            });
        });

        observer.observe(videoPlayer, {
            childList: true,
            subtree: true
        });
    }
}

// Initial check when the script loads
clickSkipAdButton();

// Set up the observer to watch for changes
observeAdChanges();

// Also check periodically, just in case
setInterval(clickSkipAdButton, 1000);