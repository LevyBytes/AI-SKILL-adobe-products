# response

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | F |

Fires off a remote procedure call (RPC), or pushes an XML message to a SOAP HTTP endpoint, without blocking for any reply.

Note

From Acrobat 8.0 onward this method is deprecated; fresh services ought to adopt Net.SOAP.response. Acrobat Reader does not support it.

Parameters

| Parameter | Description |
| --- | --- |
| cURL | The URL for a SOAP HTTP endpoint. Its URL method has to be one of:<br><br>http: reaches a plain server through a URI on some port — e.g. http://serverName:portNumber/URI<br><br>https: reaches an SSL-secured server through a URI on some port — e.g. https://serverName:portNumber/URI See the cURL parameter of SOAP. request. |
| oRequest | An object naming the remote procedure and its parameters, or else the XML message to dispatch. See the oRequest parameter of SOAP. request. |
| cAction | (optional) This request's SOAP Action header, as laid out by the SOAP Specification. By default the SOAP Action stays empty. See the cAction parameter of SOAP. request. |
| bEncoded | (optional) A Boolean recording whether the request used the SOAP Encoding from the SOAP Specification. It defaults to true. |
| cNamespace | (optional) A schema namespace for the message in cases where the request skips the SOAP Encoding (the bEncoded flag reads false). The default leaves it with no namespace. |
| oReqHeader | (optional, Acrobat 7.0) An object carrying a SOAP header to ship alongside the request. By default the request goes out with nothing but a SOAP Body. See the oReqHeader parameter of der SOAP. request. |
| cVersion | (optional, Acrobat 7.0) Which version of the SOAP protocol to apply. The default falls back to “SOAPVersion.version_1_1”. See the cVersion parameter of SOAP. request. |
| oAuthenticate | (optional, Acrobat 7.0) An object naming the authentication scheme to apply and furnishing credentials. By default, an interactive UI appears whenever HTTP authentication comes up. See the oAuthenticate parameter of SOAP. request. |
| cRequestStyle | (optional, Acrobat 7.0.5) Behaves like cRequestStyle on SOAP. request, the difference being that the server sends nothing back. |
| cContentType | (optional, Acrobat 7.0.5) Behaves like cContentType on SOAP. request, the difference being that the server sends nothing back. |

Returns

Boolean

Exceptions

A networking-level problem — an unreachable endpoint, say — triggers a NetworkError.

Example: See request.
