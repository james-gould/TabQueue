/**
 * Handles logic within the background script
 */

const contextProps = { 
  "title": "Add Tab to Queue",
  "enabled": true
}

chrome.contextMenus.onClicked.addListener((info, tab) => {
  ParseTab(tab);

  /**
   * Used if we fuck shit up by accident and need to clear storage, just uncomment and it'll wipe sync storage.
   */

  // chrome.storage.sync.clear(_ => {
  // })
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