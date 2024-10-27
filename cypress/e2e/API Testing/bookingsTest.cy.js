import environments from "../../config/environments"
import bookingsData from "../../config/bookingsData"

describe('Testing booking ids', () => {
    
    it('Should return all booking ids', () => {
        cy.request({
            method: 'GET', 
            url: `${environments.baseURL}/booking`
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length.greaterThan(334); //the result may change because the database records are not persistent
            expect(response.duration).to.be.lessThan(500);
        })
    })
    it('Should not return any booking ids with POST method', () => {
        cy.request({
            method: 'POST', 
            url: `${environments.baseURL}/booking`,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(500);
            expect(response.body).to.eq('Internal Server Error');
        })
    })
    
    it('Should return a booking Id by username', () => {
        cy.request({
            method: 'GET', 
            url: `${environments.baseURL}/booking`,
            body: {
                'firstname': bookingsData.bookingsUser.firstName, 
                'lastname':bookingsData.bookingsUser.lastName
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            //expect(response.body[0].bookingid).to.eq(226); //the result may change because the database records are not persistent
            expect(response.duration).to.be.lessThan(500);
        })
    })
    it('Should return a booking Id by checkin date', () => {
        cy.request({
            method: 'GET', 
            url: `${environments.baseURL}/booking`,
            body: {
                'checkin':bookingsData.checkin.date
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            //expect(response.body[0].bookingid).to.eq(226); //the result may change because the database records are not persistent
            expect(response.duration).to.be.lessThan(500);
        })
    })
    it('Should return a booking Id by checkout date', () => {
        cy.request({
            method: 'GET', 
            url: `${environments.baseURL}/booking`,
            body: {
                'checkout':bookingsData.checkout.date
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            //expect(response.body[0].bookingid).to.eq(226); //the result may change because the database records are not persistent
            expect(response.duration).to.be.lessThan(500);
        })
    })
    
})