import database from '../../fixtures/database.json'

const user = database.users[0];

describe('Test Real World App', () => {
  it('Sign Up', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-test="signup"]').click();
    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#username').type(user.username);
    cy.get('#password').type(user.password);
    cy.get('#confirmPassword').type(user.password);
    cy.get('[data-test="signup-submit"]').click();

  })
})

  it('Log In', () => {
    cy.visit('http://localhost:3000/signin');
    cy.get('#username').type(user.username);
    cy.get('#password').type(user.password);
    cy.get('[data-test="signin-submit"]').click();

  })