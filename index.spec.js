/* jshint esversion: 6, node: true */

const chai = require('chai');
const expect = chai.expect;

const rewire = require('rewire');
const handler = rewire('./index');

describe('eventProcessor', () => {

    describe('buildResponse', () => {

        it('should build a response', () => {
            const buildResponse = handler.__get__('buildResponse');
            const body = {
                key: "value"
            };

            expect(JSON.stringify(buildResponse(200, body))).to
                .equal('{"statusCode":200,"body":"{\\"key\\":\\"value\\"}"}');
        });

        it('should build an empty response', () => {
            const buildResponse = handler.__get__('buildResponse');
            const body = {};

            expect(JSON.stringify(buildResponse(200, body))).to
                .equal('{"statusCode":200,"body":"{}"}');
        });
    });

});