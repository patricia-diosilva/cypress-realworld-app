class MenuPage {

    selectorsList() {
        const selectors = {
            homeButton: '[href="/"]',
            transferButton: '[href="/transaction/new]',
            accountButton: '[href=/user/settings]',
            bankButton: '[href=/bankaccounts]',
            notificationButton: '[href=/notifications]',
            transactionButton: '[data-test="transaction-list-filter-date-range-button"]',
            dateOne: '[data-date="2026-02-20"]',
            dateTwo: '[data-date="2026-02-25"]',
        };
        
        return selectors;
    };

    accessHomePage() {
        cy.get(this.selectorsList().homeButton).click();

    };

    accessTransferPage() {
        cy.get(this.selectorsList().transferButton).click();

    };

    accessAccountPage() {
        cy.get(this.selectorsList().accountButton).click();

    };

    accessBankPage() {
        cy.get(this.selectorsList().bankButton).click();

    };

    accessNotificationPage() {
        cy.get(this.selectorsList().notificationButton).click();

    };

    transactionEmpty(){
        cy.get(this.selectorsList().transactionButton).click();
        cy.get(this.selectorsList().dateOne).click();
        cy.get(this.selectorsList().dateTwo).click();
    }
}

export default MenuPage;