# Soap (part 2)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## JavaScript APIs — SOAP

Number

xsd:dateTime

Date

xsd:boolean

Boolean

xsd:hexBinary

ReadStream object

xsd:base64Binary

ReadStream object

SOAP-ENC:base64

ReadStream object

SOAP-ENC:Array

Array

No Type Information

String

| --- | --- |

Exceptions

When the SOAP endpoint hands back a SOAPFault, a SOAPError is raised. That SOAPError Exception object carries these properties:

Property

Description

faultCode

A string holding the SOAP Fault Code tied to this particular fault.

faultActor

A string naming the SOAP Actor responsible for raising the fault.

faultDetail

A string carrying detail that accompanies the fault.

| --- | --- |

Should the underlying HTTP transport layer fail, or should a network connection prove impossible to obtain, a NetworkError is raised. Its Exception object exposes the statusCode property — an HTTP Status code, or –1 when no network connection could be established.

Acrobat's standard exceptions may surface here as well.

Note

Where the call was issued asynchronously, the response callback method may receive the exception object.

Additional notes on the oRequest parameter

For the oRequest parameter you pass an object literal naming the remote procedure together with the parameters to invoke. Keyed by the remote procedure's fully qualified method name, the literal expects a colon to divide the namespace from the method name.

To illustrate: with a method namespace of http://mydomain/methods and a method name of echoString, the fully qualified form becomes http://mydomain/methods:echoString. That key maps to a nested object literal whose keys are the method's parameters and whose values supply each parameter's value. For example:

```
oRequest: {
    "http://soapinterop.org/:echoString":{inputString: "Echo!"}
}
```

As parameters travel to a remote procedure, the runtime maps JavaScript types onto SOAP types on its own, following this table:

JavaScript type

SOAP type

String

xsd:string

Number

xsd:float

Date

xsd:dateTime

Boolean

xsd:boolean

ReadStream object

SOAP-ENC:base64

Array

SOAP-ENC:Array

Other

No type information

| --- | --- |

Note

Here the xsd namespace points at the XML Schema Datatypes namespace http://www.w3.org/2001/XMLSchema, while SOAP-ENC points at the SOAP Encoding namespace http://schemas.xmlsoap.org/soap/encoding/.

These properties are recognized on the oRequest object:

Property

Description

soapType

Selects the SOAP type applied to the value as the SOAP message is built. This helps whenever you need a datatype other than the automatic binding covered above. Qualify the type with a namespace using the <namespace>:<type> form — for instance http://mydomain/types:myType. Because the xsd (XMLSchema Datatypes), xsi (XMLSchema Instance), and SOAP-ENC (SOAP Encoding) namespaces are already implicit in the SOAP message, soapType may reference them directly, as with xsd:int for the XMLSchema Datatype Integer type.

soapValue

(Acrobat 6.0) Supplies the value placed into the generated SOAP message; it may be a string or a ReadStream object. Note that soapValue goes in unescaped — it is not XML Entity escaped — so a “<” stays “<” rather than becoming “<” in the XML Message. That means you can hand soapValue a raw XML fragment to drop straight into the XML Message. (Acrobat 7.0) soapValue may additionally take an array of nodes — these become, in order, the child nodes belonging to the request message's node.

soapName

Overrides the key name from the object literal with the element name used when the SOAP message is generated. As an example, JavaScript has no integers, yet you can build an integer parameter for a SOAP method like so: var oIntParameter = { soapType: “xsd:int”, soapValue: “1” }; The oRequest parameter handed to SOAP.request could then read: oRequest: { “http://soapinterop.org/:echoInteger”: { inputInteger: oIntParameter } } This approach is demonstrated in Example 1 below.

soapAttributes

(Acrobat 7.0) An object listing XML attributes to attach when the element for the request node is constructed. Each object key is an attribute name and its value is that attribute's value.

soapQName

(Acrobat 7.0) An object giving the namespace qualified name (QName) for the request node. Take the element <ns:local xmlns:ns="urn:example.org">: its name is a QName built from a local name ("local") plus a namespace ("urn:example.org"). Two properties live on this object:

localName: A string giving the QName's local name.

nameSpace: A string giving the QName's namespace.

soapAttachment

(Acrobat 7.0) A Boolean flag declaring that the node's soapValue contents are to be encoded as an attachment per the SwA specification. Whenever soapAttachment is true the matching soapValue has to be a stream; if it is not, an exception results.

soapParamOrder

(Acrobat 7.0) An array fixing the sequence in which RPC parameters reach the server. It holds strings naming the parameters. This setting only takes effect while bEncoding is true.

| --- | --- |

Example 1: Kick off an RPC against echo services by way of request.

You will need a service WSDL Document URL; pull one from the “Round 2 Interop Services - using SOAP 1.2” section over at http://www.whitemesa.com/interop.htm .

```
   var cURL =
<get a URL for this service from
            http://www.whitemesa.com/interop.htm>;

   var cTestString = "This is my test string";

   // Call the echoString SOAP method -- it is an RPC Encoded method
   var response = SOAP.request(
   {
       cURL: cURL,
       oRequest: {
           "http://soapinterop.org/:echoString": {
               inputString: cTestString
           }
       },
       cAction: "http://soapinterop.org/"
   });

   var result =

    response["http://soapinterop.org/:echoStringResponse"]["return"];

   // This should be the same as cTestString
   console.println(result + " == " + cTestString);

   // Call the echoInteger SOAP method -- JavaScript doesn't support
   // integers so we make our own integer object.
   var oTestInt =
   {
       soapType: "xsd:int",
       soapValue: "10"
   };

   var response = SOAP.request(
   {
       cURL: cURL,
       oRequest: {
           "http://soapinterop.org/:echoInteger": {
               inputInteger: oTestInt
           }
       },
       cAction: "http://soapinterop.org/"
   });

   var result =

    response["http://soapinterop.org/:echoIntegerResponse"]["return"];

   // This should be the same as oTestInt.soapValue
   console.println(result + " == " + oTestInt.soapValue);
```

This produces the following output:

```
This is my test string == This is my test string
10 == 10
```

Example 2: Set a SOAP Header and gets it back.

```
var cURL = <URL of a Service>;
var NS = "http://www.example.com/soap/:";
var oHeader = {};
oHeader[NS + "testSession"] =
{
    soapType: "xsd:string",
    soapValue: "Header Test String"
};
var oResultHeader = {};
var oRequest = {};
oRequest[NS + "echoHeader"] = {};
var response = SOAP.request(
{
    cURL: cURL,
    oRequest: oRequest,
    cAction: "http://soapinterop.org/",
    oReqHeader: oHeader,
    oRespHeader: oResultHeader
});
```

Example 3: A request for echo services with HTTP Authentication.

```
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

### response

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

F

| --- | --- | --- | --- |

Fires off a remote procedure call (RPC), or pushes an XML message to a SOAP HTTP endpoint, without blocking for any reply.

Note

From Acrobat 8.0 onward this method is deprecated; fresh services ought to adopt Net.SOAP.response. Acrobat Reader does not support it.

Parameters

Parameter

Description

cURL

The URL for a SOAP HTTP endpoint. Its URL method has to be one of:

http: reaches a plain server through a URI on some port — e.g. http://serverName:portNumber/URI

https: reaches an SSL-secured server through a URI on some port — e.g. https://serverName:portNumber/URI See the cURL parameter of SOAP. request.

oRequest

An object naming the remote procedure and its parameters, or else the XML message to dispatch. See the oRequest parameter of SOAP. request.

cAction

(optional) This request's SOAP Action header, as laid out by the SOAP Specification. By default the SOAP Action stays empty. See the cAction parameter of SOAP. request.

bEncoded

(optional) A Boolean recording whether the request used the SOAP Encoding from the SOAP Specification. It defaults to true.

cNamespace

(optional) A schema namespace for the message in cases where the request skips the SOAP Encoding (the bEncoded flag reads false). The default leaves it with no namespace.

oReqHeader

(optional, Acrobat 7.0) An object carrying a SOAP header to ship alongside the request. By default the request goes out with nothing but a SOAP Body. See the oReqHeader parameter of der SOAP. request.

cVersion

(optional, Acrobat 7.0) Which version of the SOAP protocol to apply. The default falls back to “SOAPVersion.version_1_1”. See the cVersion parameter of SOAP. request.

oAuthenticate

(optional, Acrobat 7.0) An object naming the authentication scheme to apply and furnishing credentials. By default, an interactive UI appears whenever HTTP authentication comes up. See the oAuthenticate parameter of SOAP. request.

cRequestStyle

(optional, Acrobat 7.0.5) Behaves like cRequestStyle on SOAP. request, the difference being that the server sends nothing back.

cContentType

(optional, Acrobat 7.0.5) Behaves like cContentType on SOAP. request, the difference being that the server sends nothing back.

| --- | --- |

Returns

Boolean

Exceptions

A networking-level problem — an unreachable endpoint, say — triggers a NetworkError.

Example: See request.

### streamDecode

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Decodes the oStream object under the encoding type named by cEncoder, handing back a decoded ReadStream object. Its common use is reaching data that came back from a SOAP method already encoded in Base64 or hex.

Note

From Acrobat 8.0 onward this method is deprecated; fresh services ought to adopt Net.streamDecode (see Net methods).

Parameters

Parameter

Description

oStream

A stream object to decode with the named encoding type.

cEncoder

Allowed values for this string are “hex” (hex-encoded) and “base64” (Base 64-encoded).

| --- | --- |

Returns

ReadStream object

### streamDigest

Version (Key)

Save-Prefs

Security

Product

7.0

No

No

All

| --- | --- | --- | --- |

Digests the oStream object under the encoding type named by cEncoder, returning a ReadStream object that holds the computed digest of oStream. It typically serves to compute a digest that confirms the original data stream's integrity, or that feeds a web service's authentication scheme.

Note

From Acrobat 8.0 onward this method is deprecated; fresh services ought to adopt Net.streamDigest (see Net methods).

Parameters

Parameter

Description

oStream

A stream object whose digest is to be computed with the named message digest algorithm.

cEncoder

The digest algorithm to apply. cEncoder has to take one of these values:

StreamDigest.MD5: Digest the content using the MD5 Digest Algorithm (see RFC 1321).

StreamDigest.SHA1: Digest the content using the SHA-1 Digest Algorithm (see RFC 3174).

| --- | --- |

Returns

A ReadStream object holding the stream's binary digest. Before it can serve as a string, convert the result into a text form such as Base64 or hex via SOAP.streamEncode.

Example: Turn a string into a stream first, then run streamDigest over it.

```
var srcStm = SOAP.streamFromString("This is a string I want to digest");
var digest = SOAP.streamDigest(srcStm, StreamDigest.SHA1);
```

### streamEncode

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

This function applies encoding to a stream object. It typically serves to ship data within a SOAP method when Base 64 or hex encoding is required.

Note

From Acrobat 8.0 onward this method is deprecated; fresh services ought to adopt Net.streamEncode (see Net methods).

Parameters

Parameter

Description

oStream

A stream object to encode with the named encoding type.

cEncoder

A string naming the encoding type. Allowed values are “hex” (for hex-encoded) and “base64” (base 64-encoded).

| --- | --- |

Returns

A ReadStream object carrying the chosen encoding.

### streamFromString

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

This function turns a string into a ReadStream object. The usual purpose is shipping data within a SOAP method.

Parameters

cString

The string to be converted.

| --- | --- |

Returns

ReadStream object

### stringFromStream

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

This function turns a ReadStream object back into a string. The usual purpose is inspecting what a stream object held when it came back as the response to a SOAP method.

Parameters

oStream

The ReadStream object to be converted.

| --- | --- |

Returns

String
