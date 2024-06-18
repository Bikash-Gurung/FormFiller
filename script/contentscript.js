chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.command == "fill"){
        console.log("Message recived.");
    }
});
