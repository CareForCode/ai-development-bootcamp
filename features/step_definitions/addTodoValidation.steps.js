import { Then } from '@cucumber/cucumber';
import assert from 'assert';

Then('{int} TODOs appear in the list', async function (expectedCount) {
  const count = await this.page.locator('#todo-list li').count();
  assert.strictEqual(count, expectedCount, `Expected ${expectedCount} item(s) but found ${count}`);
});
