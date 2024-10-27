# ApiCypressTesting

This is part of https://qa-essentials.com Quality assurance challenges for aspiring QA engineers. It is a testing exercise for improving your API test automation skills. You can use any testing framework for your practice. The bugs in the API are still present and the tests fail when they catch the bug. You can clone the repo and run the tests to see all the failed ones. 

It is created for page https://restful-booker.herokuapp.com/apidoc/index.html which is a hotel booking API and the tests are written in Javascript and Cypress v13.15.0. It covers several basic test cases:

- API authentication
- View all bookings
- Create booking
- Delete booking
- Update booking

The test run should generate the HTML report if you run it via npx cypress run. The report and screenshots should be stored in cypress\reports folder.
