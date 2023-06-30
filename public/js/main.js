import Version from './version.js';

class App {
  static init() {
    this.updateVersionText();
  }

  static updateVersionText() {
    let ver = new Version();
    let version = ver.getVersion();
    let span = document.getElementById("version");
    span.textContent = version;
    this.setPageTitle(version);
  }

  static setPageTitle(version) {
    document.title = "Version " + version;
  }
}

document.addEventListener("readystatechange", function (event) {
  if (document.readyState === "complete") {
    App.init();
  }
});