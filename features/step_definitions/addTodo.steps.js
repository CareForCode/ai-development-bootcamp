import { Given, When, Then } from '@cucumber/cucumber';

Given('I am on the TODO main page', async function () {
  await this.page.goto(this.baseUrl);
  await this.page.waitForSelector('#todo-input');
});

When('I click on the text field', async function () {
  await this.page.click('#todo-input');
});

When('I type {string}', async function (text) {
  await this.page.fill('#todo-input', text);
});

When('I press the Enter key', async function () {
  await this.page.press('#todo-input', 'Enter');
});

Then('a TODO with the title {string} appears in the list', async function (expectedTitle) {
  await this.page.waitForFunction(
    (title) => [...document.querySelectorAll('#todo-list li span')].some(s => s.textContent === title),
    expectedTitle,
    { timeout: 2000 }
  );
});
