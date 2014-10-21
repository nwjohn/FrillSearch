//Searches Lolibrary for the desired text on click. 
function lolibrarySearch(info, tab) {
  window.open('http://lolibrary.org/search/node/'+encodeURIComponent(info.selectionText));
}

var title = "Search Lolibrary."; 
var id = chrome.contextMenus.create({"title": title, "contexts":["selection"],
                                     "onclick": lolibrarySearch});