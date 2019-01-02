function Azure() {
    this.statusCode = 200;
}

Azure.prototype.ok = function(data) {
    return {
        status: this.statusCode,
        body: data,
    };
};

Azure.prototype.redirect = function(isPermenant, location) {
    return {
        status: isPermenant ? 301 : 302,
        headers: {
            Location: location,
        },
        body: null,
    };
};

Azure.prototype.clientError = function(error) {
    return {
        status: 400,
        body: error,
    };
};

Azure.prototype.serverError = function(error) {
    return {
        status: 500,
        body: error,
    };
};

module.exports = Azure;
