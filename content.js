// find the btn
function tryClickProceedButton() {
    const container = document.getElementById('player-error-message-container');
    if (!container) return false;

    const proceedRenderer = container.querySelector('yt-button-renderer#button');
    if (!proceedRenderer) return false;

    const button = proceedRenderer.querySelector('button');
    if (!button) return false;

    if (button.dataset.autoClicked) return false;
    button.dataset.autoClicked = 'true';

    button.click();
    return true;
}

// check DOM change of entire page
const observer = new MutationObserver(() => {
    tryClickProceedButton();
});

observer.observe(document.documentElement, {
    childList: true,
    subtree: true
});

tryClickProceedButton();