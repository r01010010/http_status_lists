var HTTPStatus = require('http_status_lists');

// Print "Internal Server Error"
console.log(HTTPStatus.ALL[500]);

// Print 500
console.log(HTTPStatus.ALL.C500_INTERNAL_SERVER_ERROR);

// Print 201 with using the REST commonly used group
console.log(HTTPStatus.REST.C201_CREATED);