window.onload = DisableAdTag;

function DisableAdTag() {
    console.log('run DisableAdTag');
    var sideAd = document.getElementById('pagelet_side_ads');
    if(sideAd && sideAd.parentNode) sideAd.parentNode.removeChild(sideAd);

    var mainAd = document.getElementById('pagelet_ego_pane');
    if(mainAd && mainAd.parentNode) mainAd.parentNode.removeChild(mainAd);
}

