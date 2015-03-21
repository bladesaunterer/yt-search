 
function searchYoutube () {
	chrome.tabs.executeScript(null, {file:"script.js"});
}

function search(request, sender, sendResponse) {
	console.log(request.viewsource);
	var selectedText = request.viewsource;
	var urlString = "https://www.youtube.com/results?search_query=" + selectedText;
	chrome.tabs.create({url: urlString});
	console.log("executed");
}

chrome.extension.onRequest.addListener(search);
chrome.contextMenus.create({title: "Search Youtube for selection", contexts:["selection"], onclick: searchYoutube});
