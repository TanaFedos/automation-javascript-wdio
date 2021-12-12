import { password, userFullName, username } from "./fixtures";


class PrihlaskyPage {

    getTableRows() {
        const tableRows = [];
        $('.dataTable').$('tbody').$$('tr').forEach(row => {
            const cols = row.$$('td');
            tableRows.push(
                {
                    name: cols[0].getText(),
                    category: cols[1].getText(),
                    date: cols[2].getText(),
                    price: cols[3].getText(),
                }
            );
        });
        return tableRows;
    }



    /*get allRowsInTable () { return $$('tbody tr') }
    get cols () {return row.$$('td') }*/



open () {

    $('.navbar-nav').$('=Přihlášky').click();

}
/*isDisplayed () {
    return this.allRowsInTable.isDisplayed();*/


}

module.exports = new PrihlaskyPage();