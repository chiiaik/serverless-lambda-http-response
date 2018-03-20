const azure = require('../azure');
const data = 'This is a test data';
const clientError = 'This is a client error';
const serverError = 'This is a server error';

test ('ok response is valid', () => {
    let response = new azure().ok(data);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(data);
})

test ('clientError response is valid', () => {
    let response = new azure().clientError(clientError);
    expect(response.status).toBe(400);
    expect(response.body).toEqual(clientError);
})

test ('serverError response is valid', () => {
    let response = new azure().serverError(serverError);
    expect(response.status).toBe(500);
    expect(response.body).toEqual(serverError);
})
