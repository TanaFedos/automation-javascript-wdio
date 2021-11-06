import {username, password} from './fixtures.js'

describe('Czechitas Login Page', () => {

    it('should open login page', () => {
        
        browser.reloadSession();
        
        browser.url('/prihlaseni');

        const emailField = $('#email');
        const passwordField = $('#password');
        const button = $('button[type="submit"]');
        const link = $('a[class="btn btn-link"]');
        
        /*console.log ('Email field je displayed:' + emailField.isDisplayed());
        console.log ('Password field je displayed:' + passwordField.isDisplayed());
        console.log ('Email field je enabled:' + emailField.isEnabled());
        console.log ('Password field je enabled:' + passwordField.isEnabled());
        console.log( 'Text tlacitko je ' + button.getText());
        console.log ('Odkaz je' + link.getAttribute('href'));*/

        emailField.setValue ('Lenka123@gmail.com');
        passwordField.setValue('Lenka123');
        button.click();

        /*const prihlaskyLink = $('.navbar-nav').$('=Přihlášky');*/
        const prihlaskyLink = $('a[href="https://czechitas-luna.herokuapp.com/zaci"]');

        prihlaskyLink.click();

        const allRowsInTable = $$('tbody tr');
        allRowsInTable.forEach(element => {
            console.log(element.getText())
        });

        console.log('There are ' + allRowsInTable.length + ' rows in table.');
        allRowsInTable.forEach(row => {
            console.log(row.getText())
        });

        $('input[type="search"]').setValue('Novák');
        const filteredRows = $('.dataTable').$('tbody').$$('tr')
        console.log('There are ' + filteredRows.length + ' filtered rows in the table');
        allRowsInTable.forEach(row => {
            console.log(row.getText());
        });


        browser.pause(5000);
        
    });
    
});