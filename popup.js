document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get("videoTitle", (data) => {
    document.getElementById("title").innerText = data.videoTitle || "No video detected";
  });
});