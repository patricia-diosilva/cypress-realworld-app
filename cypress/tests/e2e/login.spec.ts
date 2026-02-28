import userData from '../../fixtures/userData.json';
import SignUpPage from '../../pages/signUpPage'; 
import SignInPage from '../../pages/signInPage'; 
import MenuPage from '../../pages/menuPage';

const signUpPage = new SignUpPage();
const signInPage = new SignInPage();
const menuPage = new MenuPage();

describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    signUpPage.accessSignUpPage();
    signUpPage.registerForm(userData.signUpUser.firstName, userData.signUpUser.lastName, userData.signUpUser.username, userData.signUpUser.password, userData.signUpUser.password);
    signUpPage.SignUpPageSuccess();
  })
})

describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    signUpPage.accessSignUpPage();
    signUpPage.registerForm(userData.incompleteSignUpUser.firstName, userData.signUpUser.lastName, userData.signUpUser.username, userData.signUpUser.password, userData.signUpUser.password);
    cy.get('.css-yff4jp-MuiFormHelperText-root').should('be.visible');
  })

})

describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    signInPage.accessSignInPage();
    signInPage.fillForm(userData.loginFail.username, userData.loginFail.password);
    cy.get("[role='alert']").contains('Username or password is invalid').should('be.visible');
  })
})

describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    signInPage.accessSignInPage();
    signInPage.fillForm(userData.loginUser.username, userData.loginUser.password);
  })
});

