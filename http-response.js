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

    this.clientError = function(error) {
        return {
            statusCode: 400,
            headers: this.headers,
            body: JSON.stringify({
                error: error
            }),
        };
    };

    this.serverError = function(error) {
        return {
            statusCode: 500,
            headers: this.headers,
            body: JSON.stringify({
                error: error
            }),
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
