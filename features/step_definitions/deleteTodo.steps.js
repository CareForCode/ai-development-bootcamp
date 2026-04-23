import { Given, When, Then } from '@cucumber/cucumber';

Given('a TODO with the title {string} exists in the list', async function (title) {
  await this.page.fill('#todo-input', title);
  await this.page.press('#todo-input', 'Enter');
  await this.page.locator('#todo-list li span', { hasText: title }).waitFor({ timeout: 2000 });
});

When('I click the delete button for {string}', async function (title) {
  await this.page
    .locator('#todo-list li')
    .filter({ has: this.page.locator('span', { hasText: title }) })
    .locator('.delete-btn')
    .click();
});

Then('{string} is no longer in the list', async function (title) {
  await this.page.locator('#todo-list li span', { hasText: title }).waitFor({ state: 'detached', timeout: 2000 });
});
