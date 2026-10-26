import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import ForgotPasswordPage from '../pageobjects/forgot-password.page';


Given(/^I am on the forgot password page$/, async () => {
    await ForgotPasswordPage.open();
});

When(/^I request a password reset for "([^"]*)"$/, async (email: string) => {
    await ForgotPasswordPage.requestReset(email);
});

Then(/^I should see a confirmation message$/, async () => {
    await expect(ForgotPasswordPage.confirmationMessage).toBeDisplayed();
});