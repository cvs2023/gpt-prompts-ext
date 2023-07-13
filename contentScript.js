chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "setTextArea") {
    let textarea = document.querySelector("textarea");
    textarea.innerText = request.promptText;
  }
});
