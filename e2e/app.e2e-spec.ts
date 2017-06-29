import { ExpenseManagementUIPage } from './app.po';

describe('expense-management-ui App', () => {
  let page: ExpenseManagementUIPage;

  beforeEach(() => {
    page = new ExpenseManagementUIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
