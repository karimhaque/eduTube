// popup.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.title) {
      // Update the popup with the video title
      document.getElementById("video-title").innerText = request.title;
    }
  });