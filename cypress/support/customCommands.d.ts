declare namespace Cypress {
    interface Chainable<Subject> {
        getToken(): Chainable<any>
  }
}