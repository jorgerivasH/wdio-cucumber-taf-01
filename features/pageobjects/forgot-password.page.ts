import { $ } from '@wdio/globals'
import Page from './page';

class ForgotPasswordPage extends Page {
    public get inputEmail() {
        return $('#email');
    }

    public get btnRetrievePassword() {
        return $('button[type="submit"]');
    }

    public get confirmationMessage() {
        return $('#content');
    }

    public async requestReset(email: string) {
        await this.inputEmail.setValue(email);
        await this.btnRetrievePassword.click();
    }

    public async open() {
        return super.open('forgot_password');
    }
}

export default new ForgotPasswordPage();