import { When, Then } from '@cucumber/cucumber';

When('I click the checkbox for {string}', async function (title) {
  await this.page
    .locator('#todo-list li')
    .filter({ hasText: title })
    .locator('input[type="checkbox"]')
    .click();
});

Then('the TODO {string} appears with strikethrough', async function (title) {
  await this.page
    .locator('#todo-list li')
    .filter({ hasText: title })
    .and(this.page.locator('.completed'))
    .locator('span')
    .waitFor({ state: 'visible', timeout: 2000 });
});

Then('the TODO {string} does not appear with strikethrough', async function (title) {
  await this.page
    .locator('#todo-list li')
    .filter({ hasText: title })
    .and(this.page.locator(':not(.completed)'))
    .locator('span')
    .waitFor({ state: 'visible', timeout: 2000 });
});
