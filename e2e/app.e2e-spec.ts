import { MyMetroPage } from './app.po';

describe('my-metro App', () => {
  let page: MyMetroPage;

  beforeEach(() => {
    page = new MyMetroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
