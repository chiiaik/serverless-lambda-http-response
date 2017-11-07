function HttpResponse() {
    this.statusCode = 200;
    this.headers = {
        'Access-Control-Allow-Origin': '*',
    };

    this.ok = function(data) {
        return {
            statusCode: this.statusCode,
            headers: this.headers,
            body: JSON.stringify({data: data}),
        };
    };

    this.clientError = function(error) {
        return {
            statusCode: 400,
            headers: this.headers,
            body: JSON.stringify({error: error}),
        };
    };

    this.serverError = function(error) {
        return {
            statusCode: 500,
            headers: this.headers,
            body: JSON.stringify({error: error}),
        };
    };
}
module.exports = HttpResponse;
