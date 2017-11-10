/**
 * See the full source: https://github.com/james-gould/TabQueue
 * Handles logic contained within the popup window
 */

document.getElementById('GetNextTab').addEventListener('click', GetNextTab);
document.getElementById('DeleteAllTabs').addEventListener('click', SwitchToConfirmButton)
document.getElementById('ConfirmDelete').addEventListener('click', DeleteAllTabs);

function OpenSavedTab(tab) {
  chrome.tabs.create({ url: tab.tabUrl}, _ => {

  });
}

function GetNextTab() {
  chrome.storage.sync.get((items) => {
    const nextTabInfo = items.data[0]; // Temp store the tab info
    items.data.splice(0, 1) // Remove it from items
    chrome.storage.sync.set(items, _ => { // Remove from storage
      OpenSavedTab(nextTabInfo); // Process it
    });
  });
}

function DeleteAllTabs() {
  chrome.storage.sync.clear(_ => {
    // Nothing to see here, left just in case I need it in the future :)
  })
}

function SwitchToConfirmButton() {
  document.getElementById('DeleteAllTabs').style.display = 'none';
  document.getElementById('ConfirmDelete').style.display = 'block';
}