# SOAP.request

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | F |

Kicks off a remote procedure call (RPC) or pushes an XML message to a SOAP HTTP endpoint. Either it blocks waiting for the endpoint's reply (synchronous processing) or it invokes a method on the notification object (asynchronous processing).

Note

As of Acrobat 8.0 this method is deprecated; build new services on Net.SOAP.request instead. Acrobat Reader does not support it.

Parameters

| Parameter | Description |
| --- | --- |
| cURL | The URL for a SOAP HTTP endpoint. Its method has to be one of:<br><br>http : Reaches a server at some URI on a given port. For example, http://serverName:portNumber/URI<br><br>https : Reaches an SSL-secured server at some URI on a given port. For example, https://serverName:portNumber/URI |
| oRequest | An object that either names the remote procedure plus its parameters or holds the XML message bound for transmission. See Additional notes on the oRequest parameter. |
| oAsync | (optional) An object stating that the call runs asynchronously. By default the request goes out synchronously. Acrobat 7.0 reworked this object. (Acrobat 6.0) The oAsync object literal has to carry a function named response, called with two parameters (oResult and cURI) once the response arrives. oResult is exactly the result object a synchronous request call would have returned. cURI is the URI of the endpoint the request went to. (Acrobat 7.0) The oAsync object's response callback takes these parameters:<br><br>response: Whatever response object the SOAP request yielded.<br><br>uri: The endpoint URI this SOAP request targeted.<br><br>exception: On error, an exception object (see the exceptions below); otherwise null.<br><br>header: Either a returned SOAP header (described under the oRespHeader parameter) or, absent any response headers, null. |
| cAction | (optional) Under SOAP 1.1 this rides along as the SOAPAction header; under SOAP 1.2 it rides as the action parameter inside the Content-Type header. By default the action is an empty string. The SOAPAction is a URN written into an HTTP header that firewalls and servers use to screen SOAP requests. Whatever SOAPAction header is needed (if any) is normally spelled out by the SOAP service's WSDL file or service description. |
| bEncoded | (optional) Encodes the request with the SOAP Encoding from the SOAP Specification; otherwise literal encoding applies. It defaults to true. |
| cNamespace | (optional) A namespace for the message schema whenever the request skips the SOAP Encoding. By default the schema declaration is left out. |
| oReqHeader | (optional, Acrobat 7.0) An object specifying a SOAP header to ship with the request. By default a request goes out carrying only a SOAP Body. You specify the object just as you do oRequest, save for two extra properties allowed in the request description:<br><br>soapActor: The recipient (or actor, given as a URI) meant to process the SOAP header. By default that is whichever recipient processes the request first.<br><br>soapMustUnderstand: A Boolean stating that the request body is uninterpretable should the recipient fail to understand this header type. By default, understanding the header is optional. |
| oRespHeader | (optional, Acrobat 7.0) An object to be filled with the SOAP headers that come back once the method finishes, provided the call is synchronous (otherwise the header reaches the oAsync callback method). By default the headers are not returned. For the object's layout, see the description of the cResponseStyle parameter. |
| cVersion | (optional, Acrobat 7.0) Which SOAP protocol version — 1.1 or 1.2 — to use when generating the XML Message. The default is "SOAPVersion.version_1_1". |
| oAuthenticate | (optional, Acrobat 7.0) An object dictating how to handle HTTP authentication, or which credentials to use for Web Service Security. By default a user interface is shown to handle BASIC and DIGEST HTTP authentication challenges. The oAuthenticate object accepts these properties:<br><br>Username: A string carrying the account name authentication should use.<br><br>Password: A string carrying the matching credential.<br><br>UsePlatformAuth: A Boolean asking for platform authentication. When true, Username and Password are disregarded and the underlying platform networking code takes over. This can pop an authentication UI for the user and/or reuse the currently logged-in user's credentials. It defaults to false and works on the Windows platform only. |
| cResponseStyle | (optional, Acrobat 7.0) An enumerated type setting how the return value (for the SOAP Body) and the oRespHeader object (for a SOAP header) get structured:<br><br>SOAPMessageStyle.JS: (Default) The response comes back as an object describing the returned message's SOAP Body (or SOAP Header) — the very result Acrobat 6.0 yielded. Recommended alongside the SOAP encoding for the request, but a poor fit for literal encoding, where the XML or Message style serves better.<br><br>SOAPMessageStyle.XML: The response comes back as a stream object holding the SOAP Body (or SOAP Header) as an XMLfragment. Should the response carry attachments, the Stream object gains an oAttachments object property. Its keys are the attachment parts' unique names, and each value must be a Stream object holding that attachment's contents.<br><br>SOAPMessageStyle.Message: The response comes back as an object describing the SOAP Body (or SOAP Header) that matches the XML Message.<br><br>Here is how it diverges from the JavaScript response style:<br><br>To keep ordering intact and permit duplicate element names, XML Elements arrive as an array of objects instead of a single object.<br><br>The soapAttributes property is where XML Attributes are retained.<br><br>Namespaces get resolved and surfaced through the soapName and soapQName properties.<br><br>Whatever an element contains lands in the soapValue property. |
| cRequestStyle | (optional, Acrobat 7.0.5) Lets you change how oRequest is read. The permitted values are:<br><br>SOAPRequestStyle.SOAP: (the default) The request follows the SOAP messaging model.<br><br>SOAPRequestStyle.RawPost: oRequest serves as the request body of an HTTP Post and must be a ReadStream object. Calling this within a document's context requires that the document be open in the browser. The document's origination URL (scheme, server, and port) must additionally match the origination of the cURL parameter. What comes back is a ReadStream object holding the request's response. |
| cContentType | (optional, Acrobat 7.0.5) Lets you set the HTTP content-type header. By default the SOAP messaging HTTP content-type is used. |

Returns

A response object when the call was synchronous (that is, no oAsync parameter), or nothing when it was asynchronous. For the object's description, see cResponseStyle above.

Result SOAP types map onto JavaScript types this way:

| SOAP type | JavaScript type |
| --- | --- |
| xsd:string | String |
| xsd:integer | Number |
| xsd:float | <br>Number |
| xsd:dateTime | Date |
| xsd:boolean | Boolean |
| xsd:hexBinary | ReadStream object |
| xsd:base64Binary | ReadStream object |
| SOAP-ENC:base64 | ReadStream object |
| SOAP-ENC:Array | Array |
| No Type Information | String |

Exceptions

When the SOAP endpoint hands back a SOAPFault, a SOAPError is raised. That SOAPError Exception object carries these properties:

| Property | Description |
| --- | --- |
| faultCode | A string holding the SOAP Fault Code tied to this particular fault. |
| faultActor | A string naming the SOAP Actor responsible for raising the fault. |
| faultDetail | A string carrying detail that accompanies the fault. |

Should the underlying HTTP transport layer fail, or should a network connection prove impossible to obtain, a NetworkError is raised. Its Exception object exposes the statusCode property — an HTTP Status code, or –1 when no network connection could be established.

Acrobat's standard exceptions may surface here as well.

Note

Where the call was issued asynchronously, the response callback method may receive the exception object.

Related references:

- [SOAP request-object contract](request-object-contract.md)
- [SOAP echo-value request example](echo-value-request-example.md)
- [SOAP echo-header request example](echo-header-request-example.md)
- [Authenticated SOAP request example](authenticated-request-example.md)
