import environments from "../../config/environments";

describe('Delete bookings test', () => {
    let token;
    let randomId = Math.floor(Math.random() * 100);
    beforeEach('Get token for authentication', () => {
        cy.getToken().then((tokenValue) => {
            token = tokenValue;
        });
    })
    it('Should delete booking', () => {
        cy.request({
            method: 'DELETE',
            url: `${environments.baseURL}/booking/${randomId}`,
            headers: {
                'Content-Type': 'application/json',
                'Cookie': `token=${token}`
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.eq('Created');
        })
    })
    it('Should not delete a booking with invalid id', () => {
        cy.request({
            method: 'DELETE',
            url: `${environments.baseURL}/booking/${randomId + 100000}`,
            headers: {
                'Content-Type': 'application/json',
                'Cookie': `token=${token}`
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
            expect(response.body).to.eq('Not Found');
        })
    })
    it('Should not delete booking with invalid token', () => {
        cy.request({
            method: 'DELETE',
            url: `${environments.baseURL}/booking/${randomId}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie': `token=123456`
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(403);
            expect(response.body).to.eq('Forbidden');
        })
    })

})