import environments from "../../config/environments";
import credentials from "../../config/credentials";

describe('Authentication tests', () => {
    it('Should Authenticate successfully with username', () => {
        cy.request({
            method: 'POST',
            url: `${environments.baseURL}/auth`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "username": credentials.validUsername,
                "password": credentials.validPassword
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.token).to.exist;
            expect(response.duration).to.be.lessThan(500);
        });
    })
    it('Should not Authenticate with wrong content type', () => {
        cy.request({
            method: 'POST',
            url: `${environments.baseURL}/auth`,
            headers: {
                'Content-Type': 'application/txt'
            },
            body: {
                "username": credentials.validUsername,
                "password": credentials.validPassword
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.reason).to.eq('Bad credentials');
        });
    })
    it('Should not Authenticate without content type', () => {
        cy.request({
            method: 'POST',
            url: `${environments.baseURL}/auth`,
            body: {
                "username": credentials.validUsername,
                "password": credentials.validPassword
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.reason).to.eq('Bad credentials');
        });
    })
    
    it('Should not Authenticate with wrong username', () => {
        cy.request({
            method: 'POST',
            url: `${environments.baseURL}/auth`,
            headers: {
                'Content-Type': 'application/txt'
            },
            body: {
                "username": credentials.invalidUsername,
                "password": credentials.validPassword
            }
        }).then((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.reason).to.eq('Bad credentials');
        });
    })
    it('Should not Authenticate with wrong password', () => {
        cy.request({
            method: 'POST',
            url: `${environments.baseURL}/auth`,
            headers: {
                'Content-Type': 'application/txt'
            },
            body: {
                "username": credentials.validUsername,
                "password": credentials.invalidPassword
            }
        }).then((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.reason).to.eq('Bad credentials');
        });
    })
    
})