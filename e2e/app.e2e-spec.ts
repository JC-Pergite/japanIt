import { JapanItPage } from './app.po';

describe('japan-it App', function() {
  let page: JapanItPage;

  beforeEach(() => {
    page = new JapanItPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
