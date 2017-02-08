// background.js

if (localStorage['h264ify-paused'] === undefined) {
  localStorage['h264ify-paused'] = false;
}

chrome.storage.local.get({
  paused: false
 }, function(options) {
    localStorage['h264ify-paused'] = options.paused;
 }
);

chrome.browserAction.onClicked.addListener(function(tab) {
  var tab_id = tab.id;
  localStorage['h264ify-paused'] ^= true;
  chrome.storage.local.set({
    paused: localStorage['h264ify-paused']
  });
  chrome.tabs.reload(tab_id)
  console.log("h264ify has updated, reloading page - " + localStorage['h264ify-paused'])
});
