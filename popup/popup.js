let button = document.getElementById("button");

button.addEventListener("click", sendMessageToContentscript);

function sendMessageToContentscript() {
  console.log("button clicked");
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      {
        command: "fill",
      }
    );
  });
}
