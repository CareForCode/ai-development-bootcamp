import { When, Then } from '@cucumber/cucumber';
import assert from 'assert';

When('I set the due date to {string}', async function (date) {
  await this.page.fill('#due-date-input', date);
});

Then('the TODO {string} shows the due date {string}', async function (title, expectedDate) {
  const dueDateText = await this.page
    .locator('#todo-list li')
    .filter({ has: this.page.locator('span', { hasText: title }) })
    .first()
    .locator('.due-date')
    .textContent();
  assert.strictEqual(dueDateText, expectedDate);
});

Then('the TODO {string} shows no due date', async function (title) {
  const count = await this.page
    .locator('#todo-list li')
    .filter({ has: this.page.locator('span', { hasText: title }) })
    .first()
    .locator('.due-date')
    .count();
  assert.strictEqual(count, 0);
});
