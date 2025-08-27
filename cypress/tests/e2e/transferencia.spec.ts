import { signIn } from 'aws-amplify/auth';
import userData from '../../fixtures/userData.json';
import SignInPage from '../../pages/signInPage'; 
import TransferPage from '../../pages/transferPage';

const signInPage = new SignInPage();
const transferPage = new TransferPage();

describe('Test RWA Transfer', () => {
    it('Success Transfer', () => {
        signInPage.accessSignInPage();
        signInPage.fillForm(userData.loginUser.username, userData.loginUser.password);
        transferPage.accessTransferPage();
        transferPage.fillTransferForm(userData.transferSuccess.transferTo, userData.transferSuccess.amount, userData.transferSuccess.description);
        transferPage.transferSubmitted();

  });

//    it('Fail Transfer - Insufficient Funds', () => {
//        signInPage.accessSignInPage();
//        signInPage.fillForm(userData.loginUser.username, userData.loginUser.password);
//        transferPage.accessTransferPage();
//        transferPage.fillTransferForm(userData.transferFail.transferTo, userData.transferFail.amount, userData.transferFail.description);
//   });
// });