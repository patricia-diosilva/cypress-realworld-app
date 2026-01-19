class SignInPage {
    
    selectorsList() {
        const selectors = {
            usernameField: '[name="username"]',
            passwordField: '[name="password"]',
            submitButton: '[type="submit"]',
            wrongCredentialAlert: "[role='alert']",
        }
        return selectors
    }
    accessSignInPage() {
        cy.visit('http://localhost:3000/signin/');
    }
    fillForm(username, password) {
        cy.get(this.selectorsList().usernameField).type(username);
        cy.get(this.selectorsList().passwordField).type(password);
        cy.get(this.selectorsList().submitButton).click();
    }

}


export default SignInPage;