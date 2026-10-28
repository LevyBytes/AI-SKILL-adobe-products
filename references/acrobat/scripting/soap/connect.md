# SOAP.connect

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | Requires forms right |

Turns a WSDL document's URL (cURL) into a JavaScript object whose callable methods map to the web service.

Both the arguments you pass these methods and the values they hand back follow the same rules the SOAP.request method lays out.

Note

As of Acrobat 8.0 this method is deprecated; build new services on Net.SOAP.connect instead. Acrobat Reader does not support it.

Parameters

| Parameter | Description |
| --- | --- |
| cURL | A WSDL document's URL, which has to use either HTTP or HTTPS. |

Returns

A WSDL Service Proxy object carrying one JavaScript method for each operation defined in the WSDL document at the supplied URL.

Which parameters a method needs depends on the WSDL operation being invoked and on how that operation encodes its parameters:

When the WSDL operation uses the SOAP RPC encoding (described in Section 7 of the SOAP 1.1 Specification), you pass the service method its arguments in the same order the WSDL document lists the parameters.

When the WSDL service uses the SOAP document/literal encoding, the function takes one argument standing for the request message. That argument can be a JavaScript object literal that describes the message, or else a string or a ReadStream object holding an XML fragment that describes it. Whatever the WSDL operation returns becomes the service method's return value.

These properties, when set, are honored by the JavaScript function objects that map to each web service method. By default not one of them is set.

| Property | Description |
| --- | --- |
| asyncHandler | Marks the web service method for asynchronous execution. It lines up with the oAsync parameter of SOAP.request. |
| requestHeader | Tells the web service method to attach a SOAP Header to the request. It lines up with the oReqHeader parameter of SOAP.request. |
| responseHeader | Tells the web service method to pull a SOAP Header out of the response. It lines up with the oRespHeader parameter of SOAP.request. |
| authenticator | Dictates how authentication is managed for the web service method. It lines up with the oAuthenticate parameter of SOAP.request. |

Exceptions

A SOAP Fault throws a SOAPError exception. Trouble at the networking level — an endpoint that cannot be reached, say — throws a NetworkError instead. The request method covers this in more detail.

Related references:

- [SOAP echo-service connection example](connect-echo-service-example.md)
