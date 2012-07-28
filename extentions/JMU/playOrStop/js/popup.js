$(function() {  

MATCH_URL = "https://music.sonyentertainmentnetwork.com/*";

//var cmd = 1; // play_back
var cmd = 2; // play or stop
//var cmd = 3; // play_forward:
var command = "var btn = document.getElementsByTagName('img')[" + cmd + "]; btn.click();";

chrome.tabs.query( //check if mu tab exists
    {url: MATCH_URL}, // url pattern
    function(response){
		if(response.length > 0) { // find mu tabs
			var tabId = response[0].id; // use first mu tab id
			chrome.tabs.executeScript(tabId, {code: command}, function() { }); // execute command with tabId
		}
	}
);

})
