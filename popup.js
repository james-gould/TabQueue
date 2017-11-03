/**
 * Handles logic contained within the popup window
 */

document.getElementById('GetNextTab').addEventListener('click', GetNextTab)

function OpenSavedTab(tab) {
  
}

function GetNextTab() {
  chrome.storage.sync.get((items) => {
    const allTabs = items.data;
    OpenSavedTab(allTabs[0]);
  })
}

function DeleteAllTabs() {
  chrome.storage.sync.clear(_ => {
    
  })
}