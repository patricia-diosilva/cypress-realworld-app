import database from '../../../data/database-seed.json';
import SignUpPage from '../../pages/signUpPage'; 
import SignInPage from '../../pages/signInPage'; 

const user = database.users[3];
const signUpPage = new SignUpPage();
const signInPage = new SignInPage();

describe('Test Real World App', () => {

});

  it('Sign Up', () => {
    signUpPage.accessSignUpPage();
    signUpPage.registerForm(user.firstName, user.lastName, user.username, user.password, user.password);
    signInPage.accessSignInPage();
  })

  it('Success - Sign In', () => {
    signInPage.accessSignInPage();
    signInPage.fillForm(user.username, user.password);
  })

  it('Fail - Sign In', () => {
    signInPage.accessSignInPage();
    signInPage.fillForm(user.username, user.password);
    signInPage.checkAccessInvalid();
  })