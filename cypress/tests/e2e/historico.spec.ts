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
    cy.get('[data-test="transaction-list"]').should('be.visible').and('have.length.at.least', 1);
  });
});

describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
  it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    signInPage.accessSignInPage();
    signInPage.fillForm(userData.loginNewUser.username, userData.loginNewUser.password);
    menuPage.transactionEmpty();
    cy.get('[data-test="empty-list-header"]').should('be.visible').and('contain', 'No Transactions');
  });
});