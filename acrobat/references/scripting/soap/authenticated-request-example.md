# Authenticated SOAP request example

Example 3: A request for echo services with HTTP Authentication.

```javascript
var oAuthenticator =
{
    Username: "myUserName",
    Password: "myPassword"
};
var response = SOAP.request(
{
    cURL: cURL,
    oRequest: {
        "http://soapinterop.org/:echoString":
        {
            inputString: cTestString
        }
    },
    cAction: "http://soapinterop.org/",
    oAuthenticate: oAuthenticator
});
```

Related: [SOAP.request](request.md).
