# Soap (part 1)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## JavaScript APIs — SOAP

Through the SOAP object, JavaScript can issue remote procedure calls to a remote server or push an XML Message to one.

Marshalling JavaScript parameters into a remote procedure call — synchronously or asynchronously — and unmarshalling the outcome back into a JavaScript object is handled via the SOAP 1.1 protocol (see http://www.w3.org/TR/SOAP/ ). On top of that, the SOAP object can talk to web services described through the Web Services Description Language (WSDL—see http://www.w3.org/TR/wsdl ).

Note

Only documents opened in Acrobat Pro and Acrobat Standard expose the SOAP methods connect, request and response.

### SOAP properties

### wireDump

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Set this to true and synchronous SOAP requests dump both the XML request and response into the JavaScript Console — handy when debugging SOAP trouble.

Note

As of Acrobat 8.0 this property is deprecated; build new services on Net.SOAP.wireDump instead.

### SOAP methods

### connect

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

Requires forms right

| --- | --- | --- | --- |

Turns a WSDL document's URL (cURL) into a JavaScript object whose callable methods map to the web service.

Both the arguments you pass these methods and the values they hand back follow the same rules the SOAP.request method lays out.

Note

As of Acrobat 8.0 this method is deprecated; build new services on Net.SOAP.connect instead. Acrobat Reader does not support it.

Parameters

cURL

A WSDL document's URL, which has to use either HTTP or HTTPS.

| --- | --- |

Returns

A WSDL Service Proxy object carrying one JavaScript method for each operation defined in the WSDL document at the supplied URL.

Which parameters a method needs depends on the WSDL operation being invoked and on how that operation encodes its parameters:

When the WSDL operation uses the SOAP RPC encoding (described in Section 7 of the SOAP 1.1 Specification), you pass the service method its arguments in the same order the WSDL document lists the parameters.

When the WSDL service uses the SOAP document/literal encoding, the function takes one argument standing for the request message. That argument can be a JavaScript object literal that describes the message, or else a string or a ReadStream object holding an XML fragment that describes it. Whatever the WSDL operation returns becomes the service method's return value.

These properties, when set, are honored by the JavaScript function objects that map to each web service method. By default not one of them is set.

Property

Description

asyncHandler

Marks the web service method for asynchronous execution. It lines up with the oAsync parameter of SOAP.request.

requestHeader

Tells the web service method to attach a SOAP Header to the request. It lines up with the oReqHeader parameter of SOAP.request.

responseHeader

Tells the web service method to pull a SOAP Header out of the response. It lines up with the oRespHeader parameter of SOAP.request.

authenticator

Dictates how authentication is managed for the web service method. It lines up with the oAuthenticate parameter of SOAP.request.

| --- | --- |

Exceptions

A SOAP Fault throws a SOAPError exception. Trouble at the networking level — an endpoint that cannot be reached, say — throws a NetworkError instead. The request method covers this in more detail.

Example: Echo a string and an integer using an echo service WSDL document.

You will need a service WSDL Document URL. Grab one from the "Round 2 Interop Services - using SOAP 1.2" section at this address: http://www.whitemesa.com/interop.htm .

```
   var cURL =
<get a URL for this service from
            http://www.whitemesa.com/interop.htm>;

   // Connect to the test service
   var service = SOAP.connect(cURL);

   // Print out the methods this service supports to the console
   for(var i in service) console.println(i);

var cTestString = "This is my test string";

   // Call the echoString service -- it is an RPC Encoded method
   var result = service.echoString(cTestString);

   // This should be the same as cTestString
   console.println(result + " == " + cTestString);

   // Call the echoInteger service -- JavaScript doesn't support integers
   // so we make our own integer object.
   var oTestInt =
   {
       soapType: "xsd:int",
       soapValue: "10"
   };
   var result = service.echoInteger(oTestInt);

   // This should be the same as oTestInt.soapValue
   console.println(result + " == " + oTestInt.soapValue);
```

This produces the following output:

```
echoBase64
echoBoolean
echoDate
echoDecimal
echoFloat
echoFloatArray
echoHexBinary
echoInteger
echoIntegerArray
echoPolyMorph
echoPolyMorphArray
echoPolyMorphStruct
echoString
echoStringArray
echoStruct
echoStructArray
echoVoid
This is my test string == This is my test string
10 == 10
```

### queryServices

Version (Key)

Save-Prefs

Security

Product

7.0

No

Yes

All

|  |  |  |  |
| --- | --- | --- | --- |
|  |  |  |  |

Finds network services advertised through DNS Service Discovery (DNS-SD). Such services may be discovered whether they registered via Multicast DNS (mDNS) for a local networking link or via unicast DNS for enterprise-wide reach. Location results always arrive asynchronously, and the query keeps running — signaling as services appear or disappear — until you stop it.

What a service query yields is a collection of service names, each bindable on demand through resolveService.

To be found on the local network link a service can lean on a third-party mDNS responder; to be found across an enterprise networking environment it can register itself, statically or dynamically, with a DNS server.

Note

As of Acrobat 8.0 this method is deprecated; build new services on Net.Discovery.queryServices instead.

Parameters

Parameter

Description

cType

Which DNS SRV Service Name to look for. A couple of examples: "http" : Locate web servers "ftp" : Locate FTP servers Consult the DNS SRV Service Name Registry for further examples

oAsync

A notification object that fires whenever services turn up on the network or whenever services reported earlier drop off. These notification methods stay quiet until queryServices has returned, then run during idle processing. Have the oAsync parameter supply the methods below:

addServices: Fires once available services matching the query are found. Its parameter is an array of Service Description objects describing the added services.

removeServices: Fires once services that addServices had previously introduced stop being available. Its parameter is an array of Service Description objects describing the removed services. - Under Acrobat 7.0, only services found through mDNS (that is, within the "local." domain) refresh dynamically.

aDomains

(optional) A list of domains the query should target. These are the only domains allowed:

ServiceDiscovery.local: Hunt for services across the local networking link using Multicast DNS (mDNS). Handy for turning up network services in an ad hoc setup, though only services within reach of the current network router will be found.

ServiceDiscovery.DNS: Hunt for services in the default DNS domain using unicast DNS. Handy for finding network services backed by a DNS server, though registering a service usually calls for IS help and is less dynamic.

|  |  |
| --- | --- |
|  |  |
|  |  |
|  |  |

Returns

A service query object that controls how long the query lasts. Querying carries on until any one of these holds:

The service query object handed back from queryServices gets garbage collected.

The stop method on the service query object handed back from queryServices runs.

Method

Description

stop

Brings the query to a halt. You may call it from inside a notification callback, but the actual stop waits for idle processing time.

|  |  |
| --- | --- |

Exceptions

Standard Acrobat exceptions.

Service Description Object

addServices and removeServices each receive a service description object carrying these properties:

Property

Description

name

The Unicode display name of the service.

domain

Which DNS domain held the service. A service found on the local networking link reports "local" as its domain name.

type

The DNS SRV Service Name of the located service — identical to the cType parameter handed to queryServices. That comes in handy whenever one notification callback serves several queries at once.

| --- | --- |

Example: Locates network services that have published themselves using DNS Service Discovery.

Where you run this example code changes what it prints.

```
var oNotifications =
{
    addServices: function(services)
    {
        for(var i = 0; i < services.length; i++)
        console.println("ADD: "+ services[i].name + " in domain "
            + services[i].domain);
    },
    removeServices: function(services)
    {
        for(var i = 0; i < services.length; i++)
        console.println("DEL: " + services[i].name + " in domain "

             + services[i].domain);
    }
};
SOAP.queryServices({
    cType:"http",
    oAsync:oNotifications,
    aDomains:[ServiceDiscovery.local, ServiceDiscovery.DNS]
});
```

What prints hinges on the current network environment; with nothing advertised over DNS Service Discovery, the example prints nothing at all. Here is one representative run:

```
ADD: My Web Server in domain local.
ADD: Joe's Web Server in domain local.
ADD: Example.org Web Server in domain example.org.
```

### resolveService

Version (Key)

Save-Prefs

Security

Product

7.0

No

Yes

All

| --- | --- | --- | --- |

Ties a service name to a network address and port so a connection can be established. Because a service's network location can shift over time — a DHCP lease lapsing or the service migrating to another server, for example — the connection details come back asynchronously and ought to be treated as temporary.

Note

As of Acrobat 8.0 this method is deprecated; build new services on Net.Discovery.resolveService instead.

Parameters

Parameter

Description

cType

The DNS SRV Service Name to resolve.

cDomain

The domain that the service was located in.

cService

The service name to resolve.

oResult

An object that will be called when the service is resolved. See oResult parameter.

| --- | --- |

Returns

A service query object that controls how long the resolve lasts. Resolving carries on until any one of these holds:

The service query object handed back from resolveService gets garbage collected.

The resolve method on the oResult object runs, signaling that the operation finished (whether by resolving the service, hitting an error, or timing out).

The stop method on the service query object handed back from resolveService runs.

Method

Description

stop

Brings the resolve to a halt. You may call it from inside a notification callback, but the actual stop waits for idle time.

| --- | --- |

Exceptions

Standard Acrobat exceptions.

Additional notes on the

### oResult parameter

oResult is a notification object invoked once the service resolves. Its notification methods stay quiet until resolveService has returned, then run during idle processing. Have the oResult parameter supply this method:

Method

Description

resolve

Invoked with two parameters (nStatus and oInfo) when the service either resolves or fails to. nStatus reports whether resolution succeeded (see below). On success, oInfo — an instance of the ServiceInfo object (see below) — carries the connection details.

| --- | --- |

nStatus, passed to the resolve method, can take any of these values:

Value

Description

0

The service was successfully resolved.

1

The service timed out before being resolved. The default timeout in Acrobat 7 or later is 60 seconds.

-1

There was an networking error trying to resolve the service.

| --- | --- |

The resolve method's oInfo, a ServiceInfo object, exposes these properties:

Property

Description

target

Whichever IP address or DNS name belongs to the host that provides the service.

port

Whichever port the service is offered on at that host.

info

A bag of name-value pairs the service has provided. With an HTTP service, for instance, the path property holds the path on the web service, making the service URL http://<target>:<port>/<info["path"]>).

| --- | --- |

Example: Where you run this example code changes what it prints. With nothing advertised over DNS Service Discovery, this example prints nothing.

```
var oNotifications =
{
    resolve: function(status, info)
    {
        if(status == 0)
            console.println("RESOLVE: http://"
                + info.target + ":" + info.port + "/"
                + info.info.path);
        else console.println("ERROR: " + status);
    }
};
SOAP.resolveService({
    cType: "http",
    cDomain: "local.",
    cService: "Joe's Web Server",
    oResult: oNotifications
});
```

What prints hinges on the current network environment; here is one representative run:

```
RESOLVE: http://172.16.0.0:80/index.html
```

### request

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

F

| --- | --- | --- | --- |

Kicks off a remote procedure call (RPC) or pushes an XML message to a SOAP HTTP endpoint. Either it blocks waiting for the endpoint's reply (synchronous processing) or it invokes a method on the notification object (asynchronous processing).

Note

As of Acrobat 8.0 this method is deprecated; build new services on Net.SOAP.request instead. Acrobat Reader does not support it.

Parameters

Parameter

Description

cURL

The URL for a SOAP HTTP endpoint. Its method has to be one of:

http : Reaches a server at some URI on a given port. For example, http://serverName:portNumber/URI

https : Reaches an SSL-secured server at some URI on a given port. For example, https://serverName:portNumber/URI

oRequest

An object that either names the remote procedure plus its parameters or holds the XML message bound for transmission. See Additional notes on the oRequest parameter.

oAsync

(optional) An object stating that the call runs asynchronously. By default the request goes out synchronously. Acrobat 7.0 reworked this object. (Acrobat 6.0) The oAsync object literal has to carry a function named response, called with two parameters (oResult and cURI) once the response arrives. oResult is exactly the result object a synchronous request call would have returned. cURI is the URI of the endpoint the request went to. (Acrobat 7.0) The oAsync object's response callback takes these parameters:

response: Whatever response object the SOAP request yielded.

uri: The endpoint URI this SOAP request targeted.

exception: On error, an exception object (see the exceptions below); otherwise null.

header: Either a returned SOAP header (described under the oRespHeader parameter) or, absent any response headers, null.

cAction

(optional) Under SOAP 1.1 this rides along as the SOAPAction header; under SOAP 1.2 it rides as the action parameter inside the Content-Type header. By default the action is an empty string. The SOAPAction is a URN written into an HTTP header that firewalls and servers use to screen SOAP requests. Whatever SOAPAction header is needed (if any) is normally spelled out by the SOAP service's WSDL file or service description.

bEncoded

(optional) Encodes the request with the SOAP Encoding from the SOAP Specification; otherwise literal encoding applies. It defaults to true.

cNamespace

(optional) A namespace for the message schema whenever the request skips the SOAP Encoding. By default the schema declaration is left out.

oReqHeader

(optional, Acrobat 7.0) An object specifying a SOAP header to ship with the request. By default a request goes out carrying only a SOAP Body. You specify the object just as you do oRequest, save for two extra properties allowed in the request description:

soapActor: The recipient (or actor, given as a URI) meant to process the SOAP header. By default that is whichever recipient processes the request first.

soapMustUnderstand: A Boolean stating that the request body is uninterpretable should the recipient fail to understand this header type. By default, understanding the header is optional.

oRespHeader

(optional, Acrobat 7.0) An object to be filled with the SOAP headers that come back once the method finishes, provided the call is synchronous (otherwise the header reaches the oAsync callback method). By default the headers are not returned. For the object's layout, see the description of the cResponseStyle parameter.

cVersion

(optional, Acrobat 7.0) Which SOAP protocol version — 1.1 or 1.2 — to use when generating the XML Message. The default is "SOAPVersion.version_1_1".

oAuthenticate

(optional, Acrobat 7.0) An object dictating how to handle HTTP authentication, or which credentials to use for Web Service Security. By default a user interface is shown to handle BASIC and DIGEST HTTP authentication challenges. The oAuthenticate object accepts these properties:

Username: A string carrying the account name authentication should use.

Password: A string carrying the matching credential.

UsePlatformAuth: A Boolean asking for platform authentication. When true, Username and Password are disregarded and the underlying platform networking code takes over. This can pop an authentication UI for the user and/or reuse the currently logged-in user's credentials. It defaults to false and works on the Windows platform only.

cResponseStyle

(optional, Acrobat 7.0) An enumerated type setting how the return value (for the SOAP Body) and the oRespHeader object (for a SOAP header) get structured:

SOAPMessageStyle.JS: (Default) The response comes back as an object describing the returned message's SOAP Body (or SOAP Header) — the very result Acrobat 6.0 yielded. Recommended alongside the SOAP encoding for the request, but a poor fit for literal encoding, where the XML or Message style serves better.

SOAPMessageStyle.XML: The response comes back as a stream object holding the SOAP Body (or SOAP Header) as an XMLfragment. Should the response carry attachments, the Stream object gains an oAttachments object property. Its keys are the attachment parts' unique names, and each value must be a Stream object holding that attachment's contents.

SOAPMessageStyle.Message: The response comes back as an object describing the SOAP Body (or SOAP Header) that matches the XML Message.

Here is how it diverges from the JavaScript response style:

To keep ordering intact and permit duplicate element names, XML Elements arrive as an array of objects instead of a single object.

The soapAttributes property is where XML Attributes are retained.

Namespaces get resolved and surfaced through the soapName and soapQName properties.

Whatever an element contains lands in the soapValue property.

cRequestStyle

(optional, Acrobat 7.0.5) Lets you change how oRequest is read. The permitted values are:

SOAPRequestStyle.SOAP: (the default) The request follows the SOAP messaging model.

SOAPRequestStyle.RawPost: oRequest serves as the request body of an HTTP Post and must be a ReadStream object. Calling this within a document's context requires that the document be open in the browser. The document's origination URL (scheme, server, and port) must additionally match the origination of the cURL parameter. What comes back is a ReadStream object holding the request's response.

cContentType

(optional, Acrobat 7.0.5) Lets you set the HTTP content-type header. By default the SOAP messaging HTTP content-type is used.

| --- | --- |

Returns

A response object when the call was synchronous (that is, no oAsync parameter), or nothing when it was asynchronous. For the object's description, see cResponseStyle above.

Result SOAP types map onto JavaScript types this way:

SOAP type

JavaScript type

xsd:string

String

xsd:integer

Number

xsd:float
