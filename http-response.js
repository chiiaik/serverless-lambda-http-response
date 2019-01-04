const AWS = require('./aws');
const Azure = require('./azure');

function HttpResponse() {
    this.statusCode = 200;
    this.headers = {
        'Access-Control-Allow-Origin': '*',
    };

    this.ok = function(data) {
        return {
            statusCode: this.statusCode,
            headers: this.headers,
            body: JSON.stringify(data),
        };
    };

    this.redirect = function(isPermenant, location) {
        this.headers.Location = location;
        return {
            statusCode: isPermenant ? 301 : 302,
            headers: this.headers,
            body: '',
        };
    };

    this.clientError = function(error) {
        let message = 'error shall be of type Error or String';
        if (typeof error === 'string') {
            message = error;
        }
        if (error instanceof Error) {
            message = error.message;
        }
        return {
            statusCode: 400,
            headers: this.headers,
            body: JSON.stringify({ error: message }),
        };
    };

    this.serverError = function(error) {
        let message = 'error shall be of type Error or String';
        if (typeof error === 'string') {
            message = error;
        }
        if (error instanceof Error) {
            message = error.message;
        }
        return {
            statusCode: 500,
            headers: this.headers,
            body: JSON.stringify({ error: message }),
        };
    };
}

HttpResponse.prototype.aws = function () {
    return new AWS();
}

HttpResponse.prototype.azure = function () {
    return new Azure();
}

module.exports = HttpResponse;
