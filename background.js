/**
 * See the full source: https://github.com/james-gould/TabQueue
 * Handles logic within the background script
 */

const contextProps = { 
  "title": "Add Tab to Queue",
  "enabled": true
}

chrome.contextMenus.onClicked.addListener((info, tab) => {
  ParseTab(tab);
});

function ParseTab(tab) {
  chrome.storage.sync.get((items) => {
    Object.keys(items).length > 0 && items.data
      ? items.data.push({ iconUrl: tab.favIconUrl, tabUrl: tab.url})
      : items.data = [{ iconUrl: tab.favIconUrl, tabUrl: tab.url}]

      chrome.storage.sync.set(items, _ => {
        // Item saved, nothing to see here!
      })
  });
}

chrome.contextMenus.create(contextProps);