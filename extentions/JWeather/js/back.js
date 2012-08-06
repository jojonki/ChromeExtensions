icon = '';

window.onload = setWeatherIcon;

//!< set weather icon as page action
function setIcon(tabId) {
	if(icon != '' & tabId != null) {
		chrome.pageAction.setIcon({
			'tabId': tabId,
			'path': icon
		});
		chrome.pageAction.setTitle({
			'tabId': tabId,
			'title': icon
		});
	}
}

//!< call GoogleWeather api and set weather icon. 
function setWeatherIcon() {
	var url = "http://www.google.com/ig/api?weather=osaki,tokyo&hl=en";
	$.ajax({
 		url: url,
 		cache:false,
 		dataType:"xml",
  		success:function(xml){
			$(xml).find("weather > current_conditions").each(function() {
				icon = 'http://www.google.com' + $(this).find('icon').attr('data');
				var tabId = null;
				chrome.tabs.getSelected(null, function(tab){
					tabId = tab.id;
				});
				chrome.pageAction.setIcon({
					'tabId': tabId,
					'path': icon
				});
			});
 		} // end success callback
	}); //end $.ajax
//});
}

chrome.tabs.onCreated.addListener(function(tab){
	setIcon(tab.id);
});

chrome.tabs.onActivated.addListener(function(inf){
	setIcon(inf.tabId);
});

chrome.pageAction.onClicked.addListener(function(tab) {
	setIcon(tab.id);
});

chrome.tabs.onUpdated.addListener(function(tabId, inf){
	chrome.pageAction.show(tabId);
});
