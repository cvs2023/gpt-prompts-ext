document.addEventListener("DOMContentLoaded", function () {
  var promptCards = document.getElementsByClassName("promptCard");

  for (var i = 0; i < promptCards.length; i++) {
    promptCards[i].addEventListener("click", async function () {
      var promptText = this.querySelector("p").textContent;

      chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
        chrome.tabs.sendMessage(tab.id, {
          action: "setTextArea",
          promptText: promptText,
        });
      });
    });
  }
});
