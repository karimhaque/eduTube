// content.js
const videoId = window.location.search.split('v=')[1].split('&')[0];
console.log(videoId);  // Debugging line

const apiKey = 'AIzaSyB6mVkJ6WOXF7WDlJY0HlrC4x1dd8EvKWg'; // Replace with your API Key

// Request to YouTube API to fetch video details
fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    if (data.items.length > 0) {
      const videoTitle = data.items[0].snippet.title;
      // Send the title to popup.js
      chrome.runtime.sendMessage({ title: videoTitle });
    }
  })
  .catch(err => console.error('Error fetching video title:', err));