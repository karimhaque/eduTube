const API_KEY = "";

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.videoId) {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${request.videoId}&key=${API_KEY}`
    )
      .then(response => response.json())
      .then(data => {
        if (data.items.length > 0) {
          const title = data.items[0].snippet.title;
          chrome.storage.local.set({ videoTitle: title });
        }
      })
      .catch(error => console.error("Error fetching YouTube title:", error));
  }
});
