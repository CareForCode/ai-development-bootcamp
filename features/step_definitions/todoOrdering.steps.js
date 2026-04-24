import { Then } from '@cucumber/cucumber';

Then('{string} appears as the last TODO in the list', async function (title) {
  await this.page
    .locator('#todo-list li')
    .last()
    .locator('span', { hasText: title })
    .waitFor({ state: 'visible', timeout: 2000 });
});
