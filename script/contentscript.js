function handelMessages (e){
    chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
        console.log("Input from js " + message);
    });
}