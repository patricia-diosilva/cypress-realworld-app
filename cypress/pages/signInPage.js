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
        cy.visit('/signin/');
    }
    fillForm(username, password) {
        cy.get(this.selectorsList().usernameField).type(username);
        cy.get(this.selectorsList().passwordField).type(password);
        cy.get(this.selectorsList().submitButton).click();
    }

    checkAccessValid() {
        cy.url().should('include', '/dashboard');
        cy.get('[data-test="user-avatar"]').should('be.visible');
    }
    checkAccessInvalid() {
        cy.get('[data-test="signin-error"]').should('be.visible');
        cy.contains('Username or password is invalid').should('exist');
    }
}


export default SignInPage;