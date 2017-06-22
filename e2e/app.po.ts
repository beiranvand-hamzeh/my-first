import { browser, by, element } from 'protractor';

export class MyFirstPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hbro-root h1')).getText();
  }
}
