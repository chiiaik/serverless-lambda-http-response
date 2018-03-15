function Azure() {
    this.statusCode = 200;
    this.headers = {
        'Access-Control-Allow-Origin': '*',
    };
}

Azure.prototype.ok = function(data) {
    return {
        // statusCode: this.statusCode,
        // headers: this.headers,
        body: data,
    };
};

Azure.prototype.clientError = function(error) {
    return {
        // statusCode: 400,
        // headers: this.headers,
        body: error,
    };
};

Azure.prototype.serverError = function(error) {
    return {
        // statusCode: 500,
        // headers: this.headers,
        body: error,
    };
};

module.exports = Azure;
