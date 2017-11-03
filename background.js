/**
 * Handles logic within the background script
 */

const contextProps = { 
    "title": "Queue this tab",
    "enabled": true,
    "onclick": HandleContextClick,
}

function HandleContextClick() {
    alert('Finished!')
}

chrome.contextMenus.create(contextProps);