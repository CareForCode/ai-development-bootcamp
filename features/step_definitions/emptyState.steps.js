import { Then } from '@cucumber/cucumber';

Then('the empty state is visible', async function () {
  await this.page.locator('#empty-state').waitFor({ state: 'visible', timeout: 2000 });
});

Then('the empty state is not visible', async function () {
  await this.page.locator('#empty-state').waitFor({ state: 'hidden', timeout: 2000 });
});
