

function createPostUrl(url, title) {
	return "http://www.tumblr.com/share?v=3&u="+encodeURIComponent(url)+"&t="+encodeURIComponent(title)+"&s=";
}

function loadTumblr(url, title){
	var obj = document.createElement('object');
	obj.width = '450px';
	obj.height = '430px';
	var data = createPostUrl(url, title);
	obj.data = data;
	obj.standby = "no";
//	obj.onload = function() {	
//		console.log('onload');
//		activate_nav_tab('photo');
//	};
	document.getElementById("container").appendChild(obj);
}

chrome.tabs.getSelected(function(tab) {
    chrome.tabs.sendRequest(tab.id, {method: "getSelection"}, function (response) {
		var selection = response.data;
		if(selection.length > 0) {
			var title = selection + " (via " + tab.title;
			loadTumblr(tab.url, title);
		} else {
			loadTumblr(tab.url, tab.title);
    	}
	 });
});
