import { password, userFullName, username } from "./fixtures";

class loginPage {

    get emailField() { return $('#email') }
    get passwordField() { return $('#password') }
    get button() { return $('button[type="submit"]') }
    get prihlas() { return $('.navbar-right').$('[data-toggle="dropdown"]') }
    get odhlas() { return $('#logout-link') }
    get loginLink() { return $('#login') }


    open() {

        browser.reloadSession();
        browser.url('/prihlaseni');
    }

    isEnabled() {
        return this.emailField.isEnabled() && this.passwordField.isEnabled();
    }

    isDisplayed() {
        return this.emailField.isDisplayed() && this.passwordField.isDisplayed();
    }

    login(username, password) {
        this.emailField.setValue(username);
        this.passwordField.setValue(password);
        this.button.click();

    }

}


module.exports = new loginPage();