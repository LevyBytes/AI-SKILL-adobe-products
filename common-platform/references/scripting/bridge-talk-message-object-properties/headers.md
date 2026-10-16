# headers

bridgeTalkObj.headers

### Description

JavaScript object that stores script-defined headers.

Use this property for custom header data when supplementary information must travel between applications. You may add any number of headers. Headers are name/value pairs and can be read with JavaScript dot notation (msgObj.headers.propName) or bracket notation (msgObj.headers[propName]). Use dot notation when the header name follows JavaScript symbol syntax; otherwise, use bracket notation.

The predefined ["Error-Code"] header carries error details back. Messaging error codes covers those values.

### Type

Object

### Example

Header assignment examples:

```javascript
bt.headers.info = "Additional Information";
bt.headers ["Error-Code"] = 8;
```

Examples of getting header values:

```javascript
var info = bt.headers.info;
var error = bt.headers ["Error-Code"];
```
