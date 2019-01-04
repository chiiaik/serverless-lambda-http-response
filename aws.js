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

AWS.prototype.serverError = function(error) {
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

module.exports = AWS;
