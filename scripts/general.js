// Internet Explorer disclaimer
function internetExplorerDisclaimer() {

    var browser = window.navigator.userAgent.indexOf("MSIE ");

    if (browser > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
        alert("Ce site n'est pas pris en charge par Internet Explorer. Nous vous conseillons d'utiliser un navigateur plus récent tel que Mozilla Firefox, Brave ou Chromium.");
    }
}

window.addEventListener("load", internetExplorerDisclaimer);
