/* jshint esversion: 6, node: true */

class ProxyResponse {

    constructor(statusCode, headers, body) {
        this.statusCode = statusCode;
        this.headers = headers;
        this.body = body;
    }
    
}

module.exports = ProxyResponse;