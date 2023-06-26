const version = 1;

class App {
  static init() {
    this.updateVersionText();
  }

  static updateVersionText() {
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
