/**
 * HTTP CODES DEFINITIONS AT
 * @url http://en.wikipedia.org/wiki/List_of_HTTP_status_codes
 */
module.exports = {

    ALL:{

        /**
         * 1xx Informational
         * Request received, continuing process.
         */

        100: 'Continue', // This means that the server has received the request headers, and that the client should proceed to send the request body
        101: 'Switching Protocols', // This means the requester has asked the server to switch protocols and the server is acknowledging that it will do so.

        /**
         *  2xx Success
         *  This class of status codes indicates the action requested by the client was received, understood, accepted and processed successfully.
         */

        200: 'OK', // Standard response for successful HTTP requests.
        201: 'Created', // The request has been fulfilled and resulted in a new resource being created.
        202: 'Accepted', // The request has been accepted for processing, but the processing has not been completed.
        203: 'Non-Authoritative Information', // The server successfully processed the request, but is returning information that may be from another source.
        204: 'No Content', // The server successfully processed the request, but is not returning any content. Usually used as a response to a successful delete request.
        205: 'Reset Content', // The server successfully processed the request, but is not returning any content.
        206: 'Partial Content', // The server is delivering only part of the resource (byte serving) due to a range header sent by the client.

        /**
         * 3xx Redirection
         * The client must take additional action to complete the request.
         */
        300: 'Multiple Choices', // Indicates multiple options for the resource that the client may follow.
        301: 'Moved Permanently', // This and all future requests should be directed to the given
        302: 'Found', // This is an example of industry practice contradicting the standard.
        303: 'See Other', // The response to the request can be found under another URI using a GET method.
        304: 'Not Modified', // Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match.
        305: 'Use Proxy', // The requested resource is only available through a proxy, whose address is provided in the response.
        307: 'Temporary Redirect', // In this case, the request should be repeated with another URI

        /**
         * 4xx Client Error
         * For cases in which the client seems to have errored.
         */
        400: 'Bad Request', // The server cannot or will not process the request due to something that is perceived to be a client error.
        401: 'Unauthorized', // For use when authentication is required and has failed or has not yet been provided.
        403: 'Forbidden', // The request was a valid request, but the server is refusing to respond to it.
        404: 'Not Found', // The requested resource could not be found but may be available again in the future.
        405: 'Method Not Allowed', // A request was made of a resource using a request method not supported by that resource.
        406: 'Not Acceptable', // The requested resource is only capable of generating content not acceptable according to the Accept headers sent in the request.
        407: 'Proxy Authentication Required', // The client must first authenticate itself with the proxy.
        408: 'Request Time-out', // The server timed out waiting for the request.
        409: 'Conflict', // Indicates that the request could not be processed because of conflict in the request.
        410: 'Gone', // Indicates that the resource requested is no longer available and will not be available again.
        411: 'Length Required', // The request did not specify the length of its content, which is required by the requested resource.
        412: 'Precondition Failed', // The server does not meet one of the preconditions that the requester put on the request.
        413: 'Request Entity Too Large', // The request is larger than the server is willing or able to process.
        414: 'Request-URI Too Large', // The URI provided was too long for the server to process.
        415: 'Unsupported Media Type', // The request entity has a media type which the server or resource does not support.
        416: 'Requested Range not Satisfiable', // The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.
        417: 'Expectation Failed', // The server cannot meet the requirements of the Expect request-header field.
        422: 'Unprocessable Entity', // The request was well-formed but was unable to be followed due to semantic errors.
        429: 'Too Many Requests', // The user has sent too many requests in a given amount of time.

        /**
         * 5xx Server Error
         * The server failed to fulfill an apparently valid request.
         */
        500: 'Internal Server Error', // A generic error message
        501: 'Not Implemented', // The server either does not recognize the request method, or it lacks the ability to fulfil the request.
        502: 'Bad Gateway', // The server was acting as a gateway or proxy and received an invalid response from the upstream server.
        503: 'Service Unavailable', // The server is currently unavailable (because it is overloaded or down for maintenance).
        504: 'Gateway Time-out', // The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.
        505: 'HTTP Version not Supported', // The server does not support the HTTP protocol version used in the request.


        C100_CONTINUE: 100,
        C101_SWITCHING_PROTOCOLS: 101,

        C200_OK: 200,
        C201_CREATED: 201,
        C202_ACCEPTED: 202,
        C203_NON_AUTHORITATIVE_INFORMATION: 203,
        C204_NO_CONTENT: 204,
        C205_RESET_CONTENT: 205,
        C206_PARTIAL_CONTENT: 206,

        C300_MULTIPLE_CHOICES: 300,
        C301_MOVED_PERMANENTLY: 301,
        C302_FOUND: 302,
        C303_SEE_OTHER: 303,
        C304_NOT_MODIFIED: 304,
        C305_USE_PROXY: 305,
        C307_TEMPORARY_REDIRECT: 307,

        C400_BAD_REQUEST: 400,
        C401_UNAUTHORIZED: 401,
        C402_PAYMENT_REQUIRED: 402,
        C403_FORBIDDEN: 403,
        C404_NOT_FOUND: 404,
        C405_METHOD_NOT_ALLOWED: 405,
        C406_NOT_ACCEPTABLE: 406,
        C407_PROXY_AUTHENTICATION_REQUIRED: 407,
        C408_REQUEST_TIMEOUT: 408,
        C409_CONFLICT: 409,
        C410_GONE: 410,
        C411_LENGTH_REQUIRED: 411,
        C412_PRECONDITION_FAILED: 412,
        C413_REQUEST_ENTITY_TOO_LARGE: 413,
        C414_REQUEST_URI_TOO_LONG: 414,
        C415_UNSUPPORTED_MEDIA_TYPE: 415,
        C416_REQUESTED_RANGE_NOT_SATISFIABLE: 416,
        C417_EXPECTATION_FAILED: 417,
        C422_UNPROCESSABLE_ENTITY: 422,
        C429_TOO_MANY_REQUESTS: 429,

        C500_INTERNAL_SERVER_ERROR: 500,
        C501_NOT_IMPLEMENTED: 501,
        C502_BAD_GATEWAY: 502,
        C503_SERVICE_UNAVAILABLE: 503,
        C504_GATEWAY_TIMEOUT: 504,
        C505_HTTP_VERSION_NOT_SUPPORTED: 505
    },

    /**
     * 1xx Informational
     * Request received, continuing process.
     */
    INFO: {
        100: 'Continue', // This means that the server has received the request headers, and that the client should proceed to send the request body
        101: 'Switching Protocols', // This means the requester has asked the server to switch protocols and the server is acknowledging that it will do so.

        C100_CONTINUE: 100,
        C101_SWITCHING_PROTOCOLS: 101
    },

    /**
     *  2xx Success
     *  This class of status codes indicates the action requested by the client was received, understood, accepted and processed successfully.
     */
    SUCCESS: {
        200: 'OK', // Standard response for successful HTTP requests.
        201: 'Created', // The request has been fulfilled and resulted in a new resource being created.
        202: 'Accepted', // The request has been accepted for processing, but the processing has not been completed.
        203: 'Non-Authoritative Information', // The server successfully processed the request, but is returning information that may be from another source.
        204: 'No Content', // The server successfully processed the request, but is not returning any content. Usually used as a response to a successful delete request.
        205: 'Reset Content', // The server successfully processed the request, but is not returning any content.
        206: 'Partial Content', // The server is delivering only part of the resource (byte serving) due to a range header sent by the client.

        C200_OK: 200,
        C201_CREATED: 201,
        C202_ACCEPTED: 202,
        C203_NON_AUTHORITATIVE_INFORMATION: 203,
        C204_NO_CONTENT: 204,
        C205_RESET_CONTENT: 205,
        C206_PARTIAL_CONTENT: 206
    },

    /**
     * 3xx Redirection
     * The client must take additional action to complete the request.
     */
    REDIRECT: {
        300: 'Multiple Choices', // Indicates multiple options for the resource that the client may follow.
        301: 'Moved Permanently', // This and all future requests should be directed to the given
        302: 'Found', // This is an example of industry practice contradicting the standard.
        303: 'See Other', // The response to the request can be found under another URI using a GET method.
        304: 'Not Modified', // Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match.
        305: 'Use Proxy', // The requested resource is only available through a proxy, whose address is provided in the response.
        307: 'Temporary Redirect', // In this case, the request should be repeated with another URI

        C300_MULTIPLE_CHOICES: 300,
        C301_MOVED_PERMANENTLY: 301,
        C302_FOUND: 302,
        C303_SEE_OTHER: 303,
        C304_NOT_MODIFIED: 304,
        C305_USE_PROXY: 305,
        C307_TEMPORARY_REDIRECT: 307
    },

    /**
     * 4xx Client Error
     * For cases in which the client seems to have errored.
     */
    ERROR_CLIENT: {
        400: 'Bad Request', // The server cannot or will not process the request due to something that is perceived to be a client error.
        401: 'Unauthorized', // For use when authentication is required and has failed or has not yet been provided.
        403: 'Forbidden', // The request was a valid request, but the server is refusing to respond to it.
        404: 'Not Found', // The requested resource could not be found but may be available again in the future.
        405: 'Method Not Allowed', // A request was made of a resource using a request method not supported by that resource.
        406: 'Not Acceptable', // The requested resource is only capable of generating content not acceptable according to the Accept headers sent in the request.
        407: 'Proxy Authentication Required', // The client must first authenticate itself with the proxy.
        408: 'Request Time-out', // The server timed out waiting for the request.
        409: 'Conflict', // Indicates that the request could not be processed because of conflict in the request.
        410: 'Gone', // Indicates that the resource requested is no longer available and will not be available again.
        411: 'Length Required', // The request did not specify the length of its content, which is required by the requested resource.
        412: 'Precondition Failed', // The server does not meet one of the preconditions that the requester put on the request.
        413: 'Request Entity Too Large', // The request is larger than the server is willing or able to process.
        414: 'Request-URI Too Large', // The URI provided was too long for the server to process.
        415: 'Unsupported Media Type', // The request entity has a media type which the server or resource does not support.
        416: 'Requested Range not Satisfiable', // The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.
        417: 'Expectation Failed', // The server cannot meet the requirements of the Expect request-header field.
        422: 'Unprocessable Entity', // The request was well-formed but was unable to be followed due to semantic errors.
        429: 'Too Many Requests', // The user has sent too many requests in a given amount of time.

        C400_BAD_REQUEST: 400,
        C401_UNAUTHORIZED: 401,
        C402_PAYMENT_REQUIRED: 402,
        C403_FORBIDDEN: 403,
        C404_NOT_FOUND: 404,
        C405_METHOD_NOT_ALLOWED: 405,
        C406_NOT_ACCEPTABLE: 406,
        C407_PROXY_AUTHENTICATION_REQUIRED: 407,
        C408_REQUEST_TIMEOUT: 408,
        C409_CONFLICT: 409,
        C410_GONE: 410,
        C411_LENGTH_REQUIRED: 411,
        C412_PRECONDITION_FAILED: 412,
        C413_REQUEST_ENTITY_TOO_LARGE: 413,
        C414_REQUEST_URI_TOO_LONG: 414,
        C415_UNSUPPORTED_MEDIA_TYPE: 415,
        C416_REQUESTED_RANGE_NOT_SATISFIABLE: 416,
        C417_EXPECTATION_FAILED: 417,
        C422_UNPROCESSABLE_ENTITY: 422,
        C429_TOO_MANY_REQUESTS: 429
    },

    /**
     * 5xx Server Error
     * The server failed to fulfill an apparently valid request.
     */
    ERROR_SERVER: {
        500: 'Internal Server Error', // A generic error message
        501: 'Not Implemented', // The server either does not recognize the request method, or it lacks the ability to fulfil the request.
        502: 'Bad Gateway', // The server was acting as a gateway or proxy and received an invalid response from the upstream server.
        503: 'Service Unavailable', // The server is currently unavailable (because it is overloaded or down for maintenance).
        504: 'Gateway Time-out', // The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.
        505: 'HTTP Version not Supported', // The server does not support the HTTP protocol version used in the request.

        C500_INTERNAL_SERVER_ERROR: 500,
        C501_NOT_IMPLEMENTED: 501,
        C502_BAD_GATEWAY: 502,
        C503_SERVICE_UNAVAILABLE: 503,
        C504_GATEWAY_TIMEOUT: 504,
        C505_HTTP_VERSION_NOT_SUPPORTED: 505
    },

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
};
