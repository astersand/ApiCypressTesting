import environments from "../../config/environments"
import bookingsData from "../../config/bookingsData"

describe('Create bookings tests', () => {
    it('Should create new booking record', () => {
        cy.request({
            method: 'POST',
            url: `${environments.baseURL}/booking`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: {
                "firstname": bookingsData.createNewBooking.firstname,
                "lastname": bookingsData.createNewBooking.lastname,
                "totalprice": bookingsData.createNewBooking.totalprice,
                "depositpaid": bookingsData.createNewBooking.depositpaid,
                "bookingdates": {
                    "checkin": bookingsData.createNewBooking.bookingdates.checkin,
                    "checkout": bookingsData.createNewBooking.bookingdates.checkout
                },
                "additionalneeds": bookingsData.createNewBooking.additionalneeds
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.booking).to.deep.eq({
                "firstname": bookingsData.createNewBooking.firstname,
                "lastname": bookingsData.createNewBooking.lastname,
                "totalprice": bookingsData.createNewBooking.totalprice,
                "depositpaid": bookingsData.createNewBooking.depositpaid,
                "bookingdates": {
                    "checkin": bookingsData.createNewBooking.bookingdates.checkin,
                    "checkout": bookingsData.createNewBooking.bookingdates.checkout
                },
                "additionalneeds": bookingsData.createNewBooking.additionalneeds
            });
            expect(response.body.bookingid).to.exist;
        })
    })
    it('Should not create new booking record without firstName', () => {
        cy.request({
            method: 'POST',
            url: `${environments.baseURL}/booking`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: {
                "firstname": null,
                "lastname": bookingsData.createNewBooking.lastname,
                "totalprice": bookingsData.createNewBooking.totalprice,
                "depositpaid": bookingsData.createNewBooking.depositpaid,
                "bookingdates": {
                    "checkin": bookingsData.createNewBooking.bookingdates.checkin,
                    "checkout": bookingsData.createNewBooking.bookingdates.checkout
                },
                "additionalneeds": bookingsData.createNewBooking.additionalneeds
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(500);
            expect(response.body).to.eq('Internal Server Error');
            expect(response.body.bookingid).not.to.exist;
        })
    })
    it('Should not create new booking record without lastName', () => {
        cy.request({
            method: 'POST',
            url: `${environments.baseURL}/booking`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: {
                "firstname": bookingsData.createNewBooking.firstname,
                "lastname": null,
                "totalprice": bookingsData.createNewBooking.totalprice,
                "depositpaid": bookingsData.createNewBooking.depositpaid,
                "bookingdates": {
                    "checkin": bookingsData.createNewBooking.bookingdates.checkin,
                    "checkout": bookingsData.createNewBooking.bookingdates.checkout
                },
                "additionalneeds": bookingsData.createNewBooking.additionalneeds
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(500);
            expect(response.body).to.eq('Internal Server Error');
            expect(response.body.bookingid).not.to.exist;
        })
    })
    it('Should not create new booking record without totalPrice', () => {
        cy.request({
            method: 'POST',
            url: `${environments.baseURL}/booking`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: {
                "firstname": bookingsData.createNewBooking.firstname,
                "lastname": bookingsData.createNewBooking.lastname,
                "totalprice": null,
                "depositpaid": bookingsData.createNewBooking.depositpaid,
                "bookingdates": {
                    "checkin": bookingsData.createNewBooking.bookingdates.checkin,
                    "checkout": bookingsData.createNewBooking.bookingdates.checkout
                },
                "additionalneeds": bookingsData.createNewBooking.additionalneeds
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(500);
            expect(response.body).to.eq('Internal Server Error');
            expect(response.body.bookingid).not.to.exist;
        })
    })
    it('Should not create new booking record without depositPaid', () => {
        cy.request({
            method: 'POST',
            url: `${environments.baseURL}/booking`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: {
                "firstname": bookingsData.createNewBooking.firstname,
                "lastname": bookingsData.createNewBooking.lastname,
                "totalprice": bookingsData.createNewBooking.totalprice,
                "depositpaid": null,
                "bookingdates": {
                    "checkin": bookingsData.createNewBooking.bookingdates.checkin,
                    "checkout": bookingsData.createNewBooking.bookingdates.checkout
                },
                "additionalneeds": bookingsData.createNewBooking.additionalneeds
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(500);
            expect(response.body).to.eq('Internal Server Error');
            expect(response.body.bookingid).not.to.exist;
        })
    })
    it('Should not create new booking record without checkin date', () => {
        cy.request({
            method: 'POST',
            url: `${environments.baseURL}/booking`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: {
                "firstname": bookingsData.createNewBooking.firstname,
                "lastname": bookingsData.createNewBooking.lastname,
                "totalprice": bookingsData.createNewBooking.totalprice,
                "depositpaid": bookingsData.createNewBooking.depositpaid,
                "bookingdates": {
                    "checkin": null,
                    "checkout": bookingsData.createNewBooking.bookingdates.checkout
                },
                "additionalneeds": bookingsData.createNewBooking.additionalneeds
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(500);
            expect(response.body).to.eq('Internal Server Error');
            expect(response.body.bookingid).not.to.exist;
        })
    })
    it('Should not create new booking record without checkout date', () => {
        cy.request({
            method: 'POST',
            url: `${environments.baseURL}/booking`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: {
                "firstname": bookingsData.createNewBooking.firstname,
                "lastname": bookingsData.createNewBooking.lastname,
                "totalprice": bookingsData.createNewBooking.totalprice,
                "depositpaid": bookingsData.createNewBooking.depositpaid,
                "bookingdates": {
                    "checkin": bookingsData.createNewBooking.bookingdates.checkin,
                    "checkout": null
                },
                "additionalneeds": bookingsData.createNewBooking.additionalneeds
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(500);
            expect(response.body).to.eq('Internal Server Error');
            expect(response.body.bookingid).not.to.exist;
        })
    })
    //Additional needs are not marked in the documentation as optional so this test will fail
    it('Should not create new booking record without additionalNeeds', () => {
        cy.request({
            method: 'POST',
            url: `${environments.baseURL}/booking`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: {
                "firstname": bookingsData.createNewBooking.firstname,
                "lastname": bookingsData.createNewBooking.lastname,
                "totalprice": bookingsData.createNewBooking.totalprice,
                "depositpaid": bookingsData.createNewBooking.depositpaid,
                "bookingdates": {
                    "checkin": bookingsData.createNewBooking.bookingdates.checkin,
                    "checkout": bookingsData.createNewBooking.bookingdates.checkout
                },
                "additionalneeds": null
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(500);
            expect(response.body).to.eq('Internal Server Error');
            expect(response.body.bookingid).not.to.exist;
        })
    })
    
})