function Azure() {
    this.statusCode = 200;
}

Azure.prototype.ok = function(data) {
    return {
        status: this.statusCode,
        body: data,
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
