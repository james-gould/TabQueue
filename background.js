/**
 * Handles logic within the background script
 */

const contextProps = { 
  "title": "Add Tab to Queue",
  "enabled": true
}

chrome.contextMenus.onClicked.addListener((info, tab) => {
  
});

chrome.contextMenus.create(contextProps);