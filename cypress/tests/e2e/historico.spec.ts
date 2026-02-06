import { signIn } from "aws-amplify/auth";
import userData from '../../fixtures/userData.json';
import SignInPage from '../../pages/signInPage';
import MenuPage from '../../pages/menuPage';

const signInPage = new SignInPage();
const menuPage = new MenuPage();

describe('Visualizar histórico de transações com sucesso', () => {
  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
    signInPage.accessSignInPage();
    signInPage.fillForm(userData.loginUser.username, userData.loginUser.password);
  });
});