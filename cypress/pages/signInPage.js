class SignInPage {
    
    selectorsList() {
        const selectors = {
            usernameField: '[name="username"]',
            passwordField: '[name="password"]',
            submitButton: '[type="submit"]',
            nextButton: '[data-test="user-onboarding-next"]',
            wrongCredentialAlert: "[role='alert']",
            bankNameField: '[name="bankName"]',
            routingNumberField: '[name="routingNumber"]',
            accountNumberField: '[name="accountNumber"]',
        }
        return selectors
    };
    accessSignInPage() {
        cy.visit('http://localhost:3000/signin/');
    };
    fillForm(username, password) {
        cy.get(this.selectorsList().usernameField).type(username);
        cy.get(this.selectorsList().passwordField).type(password);
        cy.get(this.selectorsList().submitButton).click();
    };
    createBankForm(bank, routing, account) {
        cy.get(this.selectorsList().nextButton).click();
        cy.get(this.selectorsList().bankNameField).type(bank);
        cy.get(this.selectorsList().routingNumberField).type(routing);
        cy.get(this.selectorsList().accountNumberField).type(account);
    };

}

export default SignInPage;