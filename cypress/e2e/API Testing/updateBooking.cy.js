import bookingsData from "../../config/bookingsData";
import environments from "../../config/environments";

describe('Update bookings test', () => {
    let token;
    let randomId = Math.floor(Math.random() * 90000) + 10000;
    beforeEach('Get token for authentication', () => {
        cy.getToken().then((tokenValue) => {
            token = tokenValue;
        });
    })
    it('Should update booking', () => {
        cy.request({
            method: 'PUT',
            url: `${environments.baseURL}/booking/1`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie': `token=${token}`
            },
            body: {
                "firstname": bookingsData.updateBooking.firstname,
                "lastname": bookingsData.updateBooking.lastname,
                "totalprice": bookingsData.updateBooking.totalprice,
                "depositpaid": bookingsData.updateBooking.depositpaid,
                "bookingdates": {
                    "checkin": bookingsData.updateBooking.bookingdates.checkin,
                    "checkout": bookingsData.updateBooking.bookingdates.checkout
                },
                "additionalneeds": bookingsData.updateBooking.additionalneeds
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.eq({
                "firstname": bookingsData.updateBooking.firstname,
                "lastname": bookingsData.updateBooking.lastname,
                "totalprice": bookingsData.updateBooking.totalprice,
                "depositpaid": bookingsData.updateBooking.depositpaid,
                "bookingdates": {
                    "checkin": bookingsData.updateBooking.bookingdates.checkin,
                    "checkout": bookingsData.updateBooking.bookingdates.checkout
                },
                "additionalneeds": bookingsData.updateBooking.additionalneeds
            });
        })
    })
    it('Should not update booking with wrong Id', () => {
        cy.request({
            method: 'PUT',
            url: `${environments.baseURL}/booking/${randomId}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie': `token=${token}`
            },
            body: {
                "firstname": bookingsData.updateBooking.firstname,
                "lastname": bookingsData.updateBooking.lastname,
                "totalprice": bookingsData.updateBooking.totalprice,
                "depositpaid": bookingsData.updateBooking.depositpaid,
                "bookingdates": {
                    "checkin": bookingsData.updateBooking.bookingdates.checkin,
                    "checkout": bookingsData.updateBooking.bookingdates.checkout
                },
                "additionalneeds": bookingsData.updateBooking.additionalneeds
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
            expect(response.body).to.eq('Not Found');
        })
    })
    it('Should not update booking with invalid token', () => {
        cy.request({
            method: 'PUT',
            url: `${environments.baseURL}/booking/${randomId}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie': `token=123456`
            },
            body: {
                "firstname": bookingsData.updateBooking.firstname,
                "lastname": bookingsData.updateBooking.lastname,
                "totalprice": bookingsData.updateBooking.totalprice,
                "depositpaid": bookingsData.updateBooking.depositpaid,
                "bookingdates": {
                    "checkin": bookingsData.updateBooking.bookingdates.checkin,
                    "checkout": bookingsData.updateBooking.bookingdates.checkout
                },
                "additionalneeds": bookingsData.updateBooking.additionalneeds
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(403);
            expect(response.body).to.eq('Forbidden');
        })
    })
    it('Should not update booking with null first name', () => {
        cy.request({
            method: 'PUT',
            url: `${environments.baseURL}/booking/1`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie': `token=${token}`
            },
            body: {
                "firstname": null,
                "lastname": bookingsData.updateBooking.lastname,
                "totalprice": bookingsData.updateBooking.totalprice,
                "depositpaid": bookingsData.updateBooking.depositpaid,
                "bookingdates": {
                    "checkin": bookingsData.updateBooking.bookingdates.checkin,
                    "checkout": bookingsData.updateBooking.bookingdates.checkout
                },
                "additionalneeds": bookingsData.updateBooking.additionalneeds
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.deep.eq('Bad Request');
        })
    })
    it('Should not update booking with null last name', () => {
        cy.request({
            method: 'PUT',
            url: `${environments.baseURL}/booking/1`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie': `token=${token}`
            },
            body: {
                "firstname": bookingsData.updateBooking.firstname,
                "lastname": null,
                "totalprice": bookingsData.updateBooking.totalprice,
                "depositpaid": bookingsData.updateBooking.depositpaid,
                "bookingdates": {
                    "checkin": bookingsData.updateBooking.bookingdates.checkin,
                    "checkout": bookingsData.updateBooking.bookingdates.checkout
                },
                "additionalneeds": bookingsData.updateBooking.additionalneeds
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.deep.eq('Bad Request');
        })
    })
    it('Should not update booking with null total price', () => {
        cy.request({
            method: 'PUT',
            url: `${environments.baseURL}/booking/1`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie': `token=${token}`
            },
            body: {
                "firstname": bookingsData.updateBooking.firstname,
                "lastname": bookingsData.updateBooking.lastname,
                "totalprice": null,
                "depositpaid": bookingsData.updateBooking.depositpaid,
                "bookingdates": {
                    "checkin": bookingsData.updateBooking.bookingdates.checkin,
                    "checkout": bookingsData.updateBooking.bookingdates.checkout
                },
                "additionalneeds": bookingsData.updateBooking.additionalneeds
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.deep.eq('Bad Request');
        })
    })
    it('Should not update booking with null deposit paid', () => {
        cy.request({
            method: 'PUT',
            url: `${environments.baseURL}/booking/1`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie': `token=${token}`
            },
            body: {
                "firstname": bookingsData.updateBooking.firstname,
                "lastname": bookingsData.updateBooking.lastname,
                "totalprice": bookingsData.updateBooking.totalprice,
                "depositpaid": null,
                "bookingdates": {
                    "checkin": bookingsData.updateBooking.bookingdates.checkin,
                    "checkout": bookingsData.updateBooking.bookingdates.checkout
                },
                "additionalneeds": bookingsData.updateBooking.additionalneeds
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.deep.eq('Bad Request');
        })
    })
    it('Should not update booking without checkin and checkout dates', () => {
        cy.request({
            method: 'PUT',
            url: `${environments.baseURL}/booking/1`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie': `token=${token}`
            },
            body: {
                "firstname": bookingsData.updateBooking.firstname,
                "lastname": bookingsData.updateBooking.lastname,
                "totalprice": bookingsData.updateBooking.totalprice,
                "depositpaid": bookingsData.updateBooking.depositpaid,
                "additionalneeds": bookingsData.updateBooking.additionalneeds
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.deep.eq('Bad Request');
        })
    })
})