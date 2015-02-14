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

Contributors
------------

*   Paloma Jiménez: r01010010@gmail.com
