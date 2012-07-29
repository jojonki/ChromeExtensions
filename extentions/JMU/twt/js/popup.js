$(function() {  

MATCH_URL = "https://music.sonyentertainmentnetwork.com/*";
TWEET_BASE_URL = "https://twitter.com/share?text=";

chrome.tabs.query( //check if mu tab exists
    {url: MATCH_URL}, // url pattern
    function(response){
		if(response.length > 0) { // find mu tabs
			var tabId = response[0].id; // use first mu tab id
			var tabUrl = response[0].url;
			var command = "\
				var href = document.location.href; \
				var tags = document.getElementsByClassName('gwt-Anchor '); \
				var artist = tags[0].title; \
				var song = tags[2].title; \
				var tweet = song + ' - ' + artist + ' ' + href + ' #MusicUnlimited #nowplaying #JMU '; \
				var tweet_url = 'https://twitter.com/share?url=&text=' + encodeURIComponent(tweet); \
				console.log(tweet); \
			";
			chrome.tabs.executeScript(tabId, {code: command}, function() {
				chrome.tabs.executeScript(tabId, { code: "window.open(tweet_url);"});
				window.close();
			}); // execute command with tabId
		}
	}
);

})
