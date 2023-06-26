
const version = 1;

var App = {
	init: function () {
        App.updateVersionText();
    },
    updateVersionText: function () {        
        let span = document.getElementById("version");
        span.textContent = version;
        App.setPageTitle(version);
    },
    setPageTitle: function(version) {
        document.title = "Version " + version;
    }
}

document.addEventListener('readystatechange', function(event) {
    if (document.readyState === "complete") {
        App.init();
    }
});