import { signIn } from "aws-amplify/auth";
import userData from '../../fixtures/userData.json';
import SignInPage from '../../pages/signInPage';
import MenuPage from '../../pages/menuPage';

const signInPage = new SignInPage();
const menuPage = new MenuPage();

describe('Visualizar histórico de transações com sucesso', () => {
  it.only('Deve exibir o histórico de transações de um usuário corretamente', () => {
    signInPage.accessSignInPage();
    signInPage.fillForm(userData.loginUser.username, userData.loginUser.password);
    menuPage.accessTransferPage();
  });
});

describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
  it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    signInPage.accessSignInPage();
    signInPage.fillForm(userData.loginUser.username, userData.loginUser.password);
    menuPage.accessTransferPage();
  });
});