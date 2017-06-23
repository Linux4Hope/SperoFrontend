import { L4hAppPage } from './app.po';

describe('l4h-app App', () => {
  let page: L4hAppPage;

  beforeEach(() => {
    page = new L4hAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
