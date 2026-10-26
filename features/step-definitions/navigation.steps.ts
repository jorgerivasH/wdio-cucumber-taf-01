import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';

Given('I am on the home page', async () => {
    await browser.url('https://www.google.com');
});

Then('the page title should be {string}', async (expectedTitle: string) => {
    await expect(browser).toHaveTitle(expectedTitle);
});

When('I type {string} in the search field', async (text: string) => {
    const searchInput = await $('[name="q"]');
    await searchInput.setValue(text);
});

When('I press the Enter key', async () => {
    await browser.keys('Enter');
});

Then('I should see results related to {string}', async (text: string) => {
    const bodyText = await browser.getPageText();
    await expect(bodyText).toContain(text);
});

Then('the search button should be visible on the screen', async () => {
    const searchButton = await $('input[name="btnK"]');
    await expect(searchButton).toBeDisplayed();
});