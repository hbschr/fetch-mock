'use strict';

const FetchMock = require('./fetch-mock');
const statusTextMap = require('./status-text');
const theGlobal = (1, eval)('this')

FetchMock.global = theGlobal;
FetchMock.statusTextMap = statusTextMap;

FetchMock.setImplementations({
	Promise: theGlobal.Promise,
	Request: theGlobal.Request,
	Response: theGlobal.Response,
	Headers: theGlobal.Headers
});

module.exports = new FetchMock()
