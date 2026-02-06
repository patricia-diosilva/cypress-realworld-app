class MenuPage {

    selectorsList() {
        const selectors = {
    transferButton: '[href="/transaction]'
        };
        
        return selectors;
    }

accessTransferPage() {
        cy.get(this.selectorsList().transferButton).click();

}

}


export default MenuPage;