import { Given, When, Then } from '@cucumber/cucumber';

Given('I am on the TODO main page', async function () {
  await this.page.goto(this.baseUrl);
  await this.page.waitForSelector('#todo-input');
});

When('I click on the text field', async function () {
  await this.page.evaluate(() => document.querySelector('#todo-input').focus());
});

When('I type {string}', async function (text) {
  await this.page.evaluate((t) => { document.querySelector('#todo-input').value = t; }, text);
});

When('I press the Enter key', async function () {
  await this.page.evaluate(() => {
    document.querySelector('#todo-input').dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Enter', bubbles: true })
    );
  });
});

Then('a TODO with the title {string} appears in the list', async function (expectedTitle) {
  await this.page.waitForFunction(
    (title) => [...document.querySelectorAll('#todo-list li span')].some(s => s.textContent === title),
    expectedTitle
  );
});
