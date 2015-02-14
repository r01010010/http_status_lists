# HTTP Status codes for node

Utility to interact with HTTP status codes grouped by categories (All, REST, Successful, Errors, etc)

## This module is based on
This module is based on https://github.com/wdavidw/node-http-status

## Usage

Once you require this module, you may call it with either an HTTP code or a message name. With an HTTP code, you will get the message name while with a message name you will get an HTTP code. Simple.

## API

This module is extremely simple.

### API sample

```javascript
    var HTTPStatus = require('http-status-lists');

    // Print "Internal Server Error"
    console.log(HTTPStatus.ALL[500]);

    // Print 500
    console.log(HTTPStatus.ALL.C500_INTERNAL_SERVER_ERROR);

    // Print 201 with using the REST commonly used group
    console.log(HTTPStatus.REST.C201_CREATED);
```

### Code example

```javascript
	/**
     * Commonly used for REST Apis
     */
    REST: {
        200: 'OK', // When a successful GET, PUT, PATCH or DELETE. Can also be used for a POST that doesn't result in a creation.
        201: 'Created', // When a POST that results in a creation. Should be combined with a Location header pointing to the location of the new resource
        204: 'No Content', // When a successful request won't be returning a body (like a DELETE request)
        302: 'Found', // When a successful request as a query returns results
        304: 'Not Modified', // When HTTP caching headers are in play
        400: 'Bad Request', // When request is malformed, such as if the body does not parse
        401: 'Unauthorized', // When no or invalid authentication details are provided. Also useful to trigger an auth popup if the API is used from a browser
        403: 'Forbidden', // When authentication succeeded but authenticated user doesn't have access to the resource
        404: 'Not Found', // When a non-existent resource is requested
        405: 'Method Not Allowed', // When an HTTP method is being requested that isn't allowed for the authenticated user
        410: 'Gone', // When the resource at this end point is no longer available. Useful as a blanket response for old API versions
        415: 'Unsupported Media Type', // When an incorrect content type was provided as part of the request
        422: 'Unprocessable Entity', // When there's  validation errors
        429: 'Too Many Requests', // When a request is rejected due to rate limiting
        500: 'Internal Server Error', // When there's unknown technical errors

        C200_OK: 200,
        C201_CREATED: 201,
        C204_NO_CONTENT: 204,
        C302_FOUND: 302,
        C304_NOT_MODIFIED: 304,
        C400_BAD_REQUEST: 400,
        C401_UNAUTHORIZED: 401,
        C403_FORBIDDEN: 403,
        C404_NOT_FOUND: 404,
        C405_METHOD_NOT_ALLOWED: 405,
        C410_GONE: 410,
        C415_UNSUPPORTED_MEDIA_TYPE: 415,
        C422_UNPROCESSABLE_ENTITY: 422,
        C429_TOO_MANY_REQUESTS: 429,
        C500_INTERNAL_SERVER_ERROR: 500
    }
```

Contributors
------------

*   Paloma Jiménez: r01010010@gmail.com
