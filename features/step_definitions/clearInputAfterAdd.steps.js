import { Then } from '@cucumber/cucumber';

Then('the text field is empty', async function () {
  const value = await this.page.locator('#todo-input').inputValue();
  if (value !== '') throw new Error(`Expected empty input but got "${value}"`);
});
