// background.js

if (localStorage['h264ify-paused'] === undefined) {
  localStorage['h264ify-paused'] = false;
}

chrome.storage.local.get({
    paused: false
  },
  function (options) {
    localStorage['h264ify-paused'] = options.paused;
});

chrome.browserAction.onClicked.addListener(function (tab) {
  var tab_id = tab.id;
  localStorage['h264ify-paused'] ^= true;
  chrome.storage.local.set({
    paused: localStorage['h264ify-paused']
  });

  var iconPaths = localStorage['h264ify-paused'] === '1' ? {
    "16": "icons/icon16.png",
    "19": "icons/icon19.png",
    "24": "icons/icon24.png",
    "32": "icons/icon32.png",
    "48": "icons/icon48.png"
  } : {
    "16": "icons/icon16-off.png",
    "19": "icons/icon19-off.png",
    "24": "icons/icon24-off.png",
    "32": "icons/icon32-off.png",
    "48": "icons/icon48-off.png"
  };
  chrome.browserAction.setIcon({
    path: iconPaths
  });
  chrome.tabs.reload(tab_id);
  console.log("h264ify has updated, reloading page - " + localStorage['h264ify-paused']);
});
