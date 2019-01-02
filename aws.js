function AWS() {
    this.statusCode = 200;
    this.headers = {
        'Access-Control-Allow-Origin': '*',
    };
}

AWS.prototype.ok = function(data) {
    return {
        statusCode: this.statusCode,
        headers: this.headers,
        body: JSON.stringify(data),
    };
};

AWS.prototype.redirect = function(isPermenant, location) {
    this.headers.Location = location;
    return {
        statusCode: isPermenant ? 301 : 302,
        headers: this.headers,
        body: '',
    };
}

AWS.prototype.clientError = function(error) {
    return {
        statusCode: 400,
        headers: this.headers,
        body: JSON.stringify({
            error: error
        }),
    };
};

AWS.prototype.serverError = function(error) {
    return {
        statusCode: 500,
        headers: this.headers,
        body: JSON.stringify({
            error: error
        }),
    };
};

module.exports = AWS;
