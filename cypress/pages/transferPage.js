import { transferableAbortController } from "util";

class TransferPage {
    
    selectorsList() {
        const selectors = {
            transferButton: '[href="/transaction/new"]',
            newTransaction: '[type="button"]',
            searchField: '[type="text"]',
            selectUser: '[src="https://avatars.dicebear.com/api/human/M1ty1gR8B3.svg"]',
            amountField: '[name="amount"]',
            descriptionField: '[placeholder="Add a note"]',
            submitButton: '[type="submit"]',
            transferConfirmation: '[role="alert"]'

        };
        return selectors;
    }
    
    
    newTransactionPage() {
        cy.get(this.selectorsList().transferButton).click()
    }

    fillTransferForm(transferTo, amount, description) {
        cy.get(this.selectorsList().searchField).type(transferTo, { force: true });
        cy.get(this.selectorsList().selectUser).click();
        cy.get(this.selectorsList().amountField).type(amount);
        cy.get(this.selectorsList().descriptionField).type(description);
        cy.get(this.selectorsList().submitButton).contains('Pay').click();
    }

    transferSubmitted() {
        cy.get(this.selectorsList().transferConfirmation).should('contain', 'Transaction Submitted!');
    }

    insufficientFunds() {
        cy.get(this.selectorsList().transferConfirmation).should('contain', 'Insufficient funds');
    }
}

export default TransferPage;
