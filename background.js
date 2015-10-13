chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === 'injectLibs') {
    inject(request.tab, request.selectedLibs);
  }
});

function inject(tab, libraries) {
  chrome.tabs.executeScript(tab, {
    file: 'inject.js'
  }, function() {
    sendInjectEvent(tab, libraries);
  });
}

function sendInjectEvent(tab, libraries) {
  chrome.tabs.executeScript(tab, {
    code: "document.dispatchEvent(new CustomEvent('injecta_injected', {"
      + "detail: { libraries: " + JSON.stringify(libraries) + " }"
    + "}));"
  });
}
