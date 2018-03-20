const aws = require('../aws');
const data = 'This is a test data';
const clientError = 'This is a client error';
const serverError = 'This is a server error';

test ('ok response is valid', () => {
    let response = new aws().ok(data);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual('"This is a test data"');
})

test ('clientError response is valid', () => {
    let response = new aws().clientError(clientError);
    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual('"This is a client error"');
})

test ('serverError response is valid', () => {
    let response = new aws().serverError(serverError);
    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual('"This is a server error"');
})
