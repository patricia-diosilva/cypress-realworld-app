import userData from '../../fixtures/userData.json';
import SignUpPage from '../../pages/signUpPage'; 
import SignInPage from '../../pages/signInPage'; 

const signUpPage = new SignUpPage();
const signInPage = new SignInPage();

describe('Test RWA Login', () => {

  it('Sign Up - Success', () => {
    signUpPage.accessSignUpPage();
    signUpPage.registerForm(userData.signUpUser.firstName, userData.signUpUser.lastName, userData.signUpUser.username, userData.signUpUser.password, userData.signUpUser.password);
    signUpPage.SignUpPageSuccess();

    cy.location('pathname').should('eq', '/signin');
    cy.get('[type="submit"]').should('contain', 'Sign In');
  })

    it('Fail - Sign In', () => {
    signInPage.accessSignInPage();
    signInPage.fillForm(userData.loginFail.username, userData.loginFail.password);
    
    cy.get("[role='alert']").contains('Username or password is invalid').should('be.visible');
  })

  it('Success - Sign In', () => {
    signInPage.accessSignInPage();
    signInPage.fillForm(userData.loginUser.username, userData.loginUser.password);
    
    cy.location('pathname').should('eq', '/');
  })

  it('Sign Up - Incomplete', () => {
    signUpPage.accessSignUpPage();
    signUpPage.registerForm(userData.incompleteSignUpUser.firstName, userData.signUpUser.lastName, userData.signUpUser.username, userData.signUpUser.password, userData.signUpUser.password);
    
    cy.get('.css-yff4jp-MuiFormHelperText-root').should('be.visible');
  })

});