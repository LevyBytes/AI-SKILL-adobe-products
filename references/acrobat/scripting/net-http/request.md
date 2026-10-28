# request

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 8.0 | No | Yes | F |

Calling request invokes an HTTP Web Service asynchronously. Compared with Net.SOAP.request (SOAP.request), it reaches a broader range of web services and hands you tighter control over the HTTP method, the headers, and the body. That control is what makes richer networking protocols such as WebDAV or the Atom Publishing Protocol possible.

Note

You may invoke this method only from outside any document context — folder-level JavaScript, for instance.

Parameters

| Parameter | Description |
| --- | --- |
| cVerb | A string naming the HTTP verb to apply. It has to be one of the following (Messaging protocol > Parameter value):<br><br>HTTP (RFC 1945, 2616): GET, POST, PUT, DELETE, OPTIONS, HEAD<br><br>WebDAV (RFC 2518): PROPFIND, PROPPATCH, MKCOL, LOCK, UNLOCK, COPY, MOVE, ACL, SEARCH<br><br>WebDAV Versioning Extensions (RFC 3253): CHECKIN, CHECKOUT, UNCHECKOUT, MERGE, VERSION-CONTROL, REPORT, KWORKSPACE, UPDATE, LABEL, MERGE, MKACTIVITY<br><br>CalDAV Calendaring Extensions: MKCALENDAR |
| cURL | A string giving the network endpoint of the web service you want to reach. Its URL scheme has to be either HTTP or HTTPS. |
| aHeaders | (optional) An array naming HTTP headers to ship with the request. A few, Content-length among them, cannot be set by hand. Every array entry is an object describing one header through these properties:<br><br>name: Which header to set; it has to be a legitimate HTTP Header name.<br><br>value: What the HTTP header carries; it has to be a legitimate HTTP Header value string. |
| oRequest | (optional) A Stream object carrying the request body for the method. The message body goes out exactly as-is, with no encoding applied first. |
| oHandler | (optional) An object that deals with the service's response. On the oHandler object, the response method gets invoked, receiving these parameters:<br><br>oRequest: On success, a stream object holding the response body.<br><br>cURL: Whichever request URL drove this particular invocation.<br><br>oException: Present when the call failed — an exception object bearing these properties:<br><br>error: Whatever HTTP status code came back.<br><br>msg: Text describing why it failed.<br><br>aHeaders: The server's response headers as an array. Its format matches the aHeaders parameter documented for the Net.HTTP.request method. |
| oAuthenticate | (optional) An object that either dictates how HTTP authentication is handled or hands over the credentials to use. By default a user interface is shown so the user can answer BASIC and DIGEST authentication challenges. These properties may appear on the oAuthenticate object:<br><br>Username: A string holding the account name for authentication.<br><br>Password: A string holding the secret credential for authentication.<br><br>UsePlatformAuth: A Boolean signaling that platform authentication ought to be used. With platform authentication turned on, Username and Password are disregarded and the platform's own networking code takes over. That can surface an authentication UI to the user and/or reuse the credentials of whoever is currently signed in. It defaults to false and works on the Windows platform only. |

Exceptions

An exception is raised should the URL be invalid or the same-origin requirement go unmet.

Example: Create a collection at the URL specified.

```javascript
CreateWebDAVCollection = function(cURL)
{
   var params =
   {
       cVerb: "MKCOL",
       cURL: cURL,
       oHandler:
       {
           response: function(msg, uri, e)
               {
                   // HTTP 405 - Can't MKCOL if it exists!
                   if(e != undefined && e.error != 405) {
                       app.alert("Failed to MKCOL: "+ e);
                   } else app.alert("Created collection");
               }
           }
       };
       Net.HTTP.request(params);
} // CreateWebDAVCollection
```
