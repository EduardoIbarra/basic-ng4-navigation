import { NavNg4Page } from './app.po';

describe('nav-ng4 App', () => {
  let page: NavNg4Page;

  beforeEach(() => {
    page = new NavNg4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
