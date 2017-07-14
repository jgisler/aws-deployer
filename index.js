/* jshint esversion: 6, node: true */
const AWS = require('aws-sdk');

const ProxyResponse = require('./lib/ProxyResponse');
const DeploymentListener = require('./lib/DeploymentListener');

exports.handler = processEvent;

function processEvent(event, context, callback) {
    console.log(`processEvent: event=${JSON.stringify(event, null, 2)}`);
    console.log(`processEvent: context=${JSON.stringify(context, null, 2)}`);

    const responseJson = {
        "message": "Success"
    };

    callback(null, buildResponse(200, responseJson));
}

function buildResponse(statusCode, responseJson) {
    return {
        statusCode: statusCode,
        body: JSON.stringify(responseJson)
    }
}