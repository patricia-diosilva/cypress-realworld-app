import { signIn } from 'aws-amplify/auth';
import userData from '../../fixtures/userData.json';
import SignInPage from '../../pages/signInPage'; 
import MenuPage from '../../pages/menuPage';
import TransferPage from '../../pages/transferPage';

const signInPage = new SignInPage();
const transferPage = new TransferPage();
const menuPage = new MenuPage();

describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {
        signInPage.accessSignInPage();
        signInPage.fillForm(userData.loginUser.username, userData.loginUser.password);
        transferPage.newTransactionPage();
        transferPage.fillTransferForm(userData.transferSuccess.transferTo, userData.transferSuccess.amount, userData.transferSuccess.description);
        transferPage.transferSubmitted();
  })
});

describe('Enviar dinheiro com saldo insuficiente', () => {
  it.only('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
       signInPage.accessSignInPage();
       signInPage.fillForm(userData.loginUser.username, userData.loginUser.password);
       transferPage.newTransactionPage();
       transferPage.fillTransferForm(userData.transferFail.transferTo, userData.transferFail.amount, userData.transferFail.description);
       cy.contains('Insufficient Balance').should('be.visible');
  });
});