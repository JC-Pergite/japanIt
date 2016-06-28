export class JapanItPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('oreNo-root h1')).getText();
  }
}
