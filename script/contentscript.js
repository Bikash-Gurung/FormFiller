chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.command.toLowerCase() == "fill"){
        console.log("message recived.");
    }
});
