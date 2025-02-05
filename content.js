function getVideoId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("v");
}

function sendVideoId() {
  const videoId = getVideoId();
  if (videoId) {
    chrome.runtime.sendMessage({ videoId: videoId });
  }
}

// Detect URL changes using MutationObserver
let lastUrl = location.href;
const observer = new MutationObserver(() => {
  if (location.href !== lastUrl) {
    lastUrl = location.href;
    sendVideoId();
  }
});

observer.observe(document, { childList: true, subtree: true });

// Initial check in case the script loads late
sendVideoId();
