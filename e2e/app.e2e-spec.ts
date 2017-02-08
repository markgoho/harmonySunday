import { HarmonySundayPage } from './app.po';

describe('harmony-sunday App', function() {
  let page: HarmonySundayPage;

  beforeEach(() => {
    page = new HarmonySundayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
