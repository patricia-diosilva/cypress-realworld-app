import userData from '../../fixtures/userData.json';
import SignUpPage from '../../pages/signUpPage'; 
import SignInPage from '../../pages/signInPage'; 

const signUpPage = new SignUpPage();
const signInPage = new SignInPage();

describe('Test Real World App', () => {

  it('Sign Up', () => {
    signUpPage.accessSignUpPage();
    signUpPage.registerForm(userData.signUpUser.firstName, userData.signUpUser.lastName, userData.signUpUser.username, userData.signUpUser.password, userData.signUpUser.password);
    signInPage.accessSignInPage();
  })

    it('Fail - Sign In', () => {
    signInPage.accessSignInPage();
    signInPage.fillForm(userData.loginFail.username, userData.loginFail.password);
    signInPage.checkAccessInvalid();
  })

  it('Success - Sign In', () => {
    signInPage.accessSignInPage();
    signInPage.fillForm(userData.loginUser.username, userData.loginUser.password);
    signInPage.checkAccessValid();
  })

});