chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request.message);
  sendResponse({ response: "Response from Contentscript" });
});
