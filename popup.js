/**
 * Handles logic contained within the popup window
 */

 const contextProps = { 
     title: "Queue this tab",
     enabled: true,
     onclick: HandleContextClick,
 }

 function HandleContextClick() {

 }

 chrome.contextMenus.create(contextProps)