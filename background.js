 
function searchYoutube () {
	chrome.tabs.executeScript(null, {file:"script.js"});
}

function search(request, sender, sendResponse) {
	console.log(request.viewsource);
	var selectedText = removeHTMLTags(request.viewsource);
	var urlString = "https://www.youtube.com/results?search_query=" + selectedText;
	chrome.tabs.create({url: urlString});
	console.log("executed");
	
}

function removeHTMLTags(string){
	var div = document.createElement("div");
	div.innerHTML = string;
	console.log(div.innerText);
	return div.innerText;
}

chrome.extension.onRequest.addListener(search);
chrome.contextMenus.create({title: "Search Youtube for \'%s\'", contexts:["selection"], onclick: searchYoutube});
