import { Then } from '@cucumber/cucumber';

Then('{int} TODOs appear in the list', async function (expectedCount) {
  const count = await this.page.locator('#todo-list li').count();
  if (count !== expectedCount) throw new Error(`Expected ${expectedCount} item(s) but found ${count}`);
});
