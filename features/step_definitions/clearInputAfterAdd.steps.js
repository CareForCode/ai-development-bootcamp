import { Then } from '@cucumber/cucumber';
import assert from 'assert';

Then('the text field is empty', async function () {
  const value = await this.page.locator('#todo-input').inputValue();
  assert.strictEqual(value, '', `Expected empty input but got "${value}"`);
});
