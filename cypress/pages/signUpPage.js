class SignUpPage {
    
    selectorsList() {
        const selectors = {
            firstNameField: '[name="firstName"]',
            lastNameField: '[name="lastName"]',
            usernameField: '[name="username"]',
            passwordField: '[name="password"]',
            confirmPasswordField: '[name="confirmPassword"]',
            incompleteAlert: '.css-yff4jp-MuiFormHelperText-root',
            submitButton: '[type="submit"]',
        }
        return selectors
    }

    accessSignUpPage() {
        cy.visit('/signup/');
    }

    registerForm(firstName, lastName, username, password, confirmPassword) {
        cy.get(this.selectorsList().firstNameField).type(firstName);
        cy.get(this.selectorsList().lastNameField).type(lastName);
        cy.get(this.selectorsList().usernameField).type(username);
        cy.get(this.selectorsList().passwordField).type(password);
        cy.get(this.selectorsList().confirmPasswordField).type(confirmPassword);
    }
    SignUpPageSuccess() {
        cy.get(this.selectorsList().submitButton).click();
    }
}

export default SignUpPage;
