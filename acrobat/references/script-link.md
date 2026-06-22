# Link, Monitor, Monitors, Net ...

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Link; Monitor; Monitors; Net; Net.HTTP.

## Link

### JavaScript APIs — Link

This object handles getting and setting a link’s properties and assigning its JavaScript action.

You obtain Link objects from the Doc methods addLink or getLinks. (removeLinks is also worth a look.)

### Link properties

### borderColor

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

D

Yes

Not available in Reader

Array

R/W

| --- | --- | --- | --- | --- | --- |

A Link object’s border color. For how to define color arrays and how this property uses colors, see Color arrays.

### borderWidth

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

D

No

Not available in Reader

Integer

R/W

| --- | --- | --- | --- | --- | --- |

The border width of the Link object.

### highlightMode

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

D

No

Not available in Reader

String

R/W

| --- | --- | --- | --- | --- | --- |

The visual effect shown when the mouse button is pressed or held down over a link’s active area. Acceptable values are:

```
None
Invert
Outline
Push
```

The default is Invert.

### rect

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

D

No

Not available in Reader

Array

R/W

| --- | --- | --- | --- | --- | --- |

Where on the page the link sits, as a rectangle. It holds four numbers — the rotated-user-space coordinates of the bounding rectangle — given in this order: upper-left x, upper-left y, lower-right x and lower-right y .

### Link methods

### setAction

Version (Key)

Save-Prefs

Security

Product

6.0

D

No

Not available in Reader

| --- | --- | --- | --- |

Attaches the JavaScript action you specify to the Link object’s MouseUp trigger.

Note

Whatever action this link already had defined gets overwritten by this method.

Parameters

cScript

The JavaScript action to use.

| --- | --- |

## Monitor

### JavaScript APIs — Monitor

A Monitor object stands for one physical display. You pull a Monitor object out of app.monitors, which returns an array covering every monitor attached to the system. Since app.monitors is a Monitors object, you can apply the Monitors object’s methods to pick or weed out monitors in a multi-monitor setup against various criteria. The Monitors object covers the specifics.

In the MediaSettings monitor property, both the Monitor object and the Monitors object come into play.

### Monitor properties

### colorDepth

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

Number

R

| --- | --- | --- | --- | --- | --- |

The monitor’s color depth — in other words, its bits per pixel.

Example: Grab the primary monitor and inspect its color depth, picking that monitor out with the Monitors.primary method.

```
var monitors = app.monitors.primary();
console.println( "Color depth of primary monitor is "

     + monitors[0].colorDepth );
```

### isPrimary

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

R

| --- | --- | --- | --- | --- | --- |

A Boolean that reads true on the primary monitor and false on every other one.

Example: Grab the widest monitor and work out whether it happens to be the primary one.

```
var monitors = app.monitors.widest();
var isIsNot = (monitors[0].isPrimary) ? "is" : "is not";
console.println("The widest monitor "+isIsNot+" the primary monitor.");
```

### rect

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

Rectangle

R

| --- | --- | --- | --- | --- | --- |

A rectangle marking the monitor’s edges in virtual desktop coordinates:

That virtual desktop takes its origin from the top left corner of the primary monitor. The primary monitor’s bounds therefore always look like [ 0, 0, right, bottom ].

Where a secondary monitor sits relative to the primary one decides whether its bounds arrays carry positive or negative values.

### workRect

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

Rectangle

R

| --- | --- | --- | --- | --- | --- |

A rectangle giving a monitor’s usable workspace edges in virtual desktop coordinates. Those coordinates are explained under rect.

A monitor’s workspace is the stretch ordinarily handed to applications once you subtract things like docked toolbars or taskbars. Take Windows on one 800x600 display: rect comes to [ 0, 0, 800, 600 ]. Add a typical 30-pixel-high Windows taskbar parked permanently along the bottom, and workRect becomes [ 0, 0, 800, 570 ].

## Monitors

### JavaScript APIs — Monitors

Think of a Monitors object as a read-only list whose members are individual Monitor objects, one per attached display. You reach those members with standard array indexing plus the length property.

Querying app.monitors hands back a Monitors object covering all displays wired to the current machine. From there, script can iterate the list to inspect each available display and pick one to host a full-screen or pop-up media player.

Note

What app.monitors gives you arrives in no guaranteed sequence (the displays appear unsorted).

A set of filter methods lives on the Monitors object; each narrows the list down to one or more displays according to some test. Every monitor-selection option exposed in the PDF file format ultimately routes through one of these filter methods.

The original Monitors object is left untouched by any filter method. Instead, each produces a fresh Monitors object that typically holds one or more Monitor objects. When one display beats all the rest on the test, that single display fills the returned object. When the test ties across several displays (say, with bestColor, multiple displays sharing the same maximum color depth), every tied display ends up in the result.

A handful of the filter methods accept an optional floor or required argument. Supply that argument and have no display clear the bar, and the resulting Monitors object comes back empty. Skip it, and as long as the starting Monitors object held something, the result is never empty.

Any height, width, or area a filter method talks about is measured in pixels.

Example:

```
var monitors = app.monitors;
for ( var i = 0; i< monitors.length; i++)
console.println("monitors["+i+"].colorDepth = "+monitors[i].colorDepth);
```

The element count of the Monitors object lives in Monitors.length. With the object from app.monitors, that count equals how many displays the machine has. With an object handed back by a filter method, expect a possibly smaller count.

### Monitors methods

### bestColor

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Hands back a duplicate of the Monitors object trimmed to whichever display or displays carry the deepest color depth.

Pass nMinColor, and the call yields an empty Monitors array whenever the top color depth falls below nMinColor.

Parameters

Parameter

Description

nMinColor

(optional) Sets the smallest color depth a display must reach.

| --- | --- |

Returns

A Monitors object

Example:

```
var monitors = app.monitors.bestColor(32);
if (monitors.length == 0 )
    console.println("Cannot find the required monitor.");
else
    console.println("Found at least one monitor.");
```

### bestFit

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Hands back a duplicate of the Monitors object trimmed to the smallest display or displays that still meet or exceed the given nWidth and nHeight, both in pixels.

Parameters

Parameter

Description

nWidth

The least width the best-fit display may have.

nHeight

The least height the best-fit display may have.

bRequire

(optional) Governs the outcome when no display reaches the requested width and height. Set it true and an empty Monitors array comes back; leave it false or unset and you instead get a Monitors array holding the largest display or displays.

| --- | --- |

Returns

A Monitors object

### desktop

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Builds a fresh Monitors object holding a single Monitor object that stands for the whole virtual desktop. Its rect property merges every rect from the source Monitors object, its workRect property merges every workRect from that source, and colorDepth takes the lowest colorDepth present across the source.

Returns

A Monitors object

Note

You normally invoke the desktop method straight on whatever app.monitors returns. Run any of the object's other filters first, though, and desktop performs the same unions and minimum described above, but only over that filtered subset.

### document

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Hands back a duplicate of the Monitors object trimmed to whichever display or displays show the most of the document named by the Doc parameter doc.

Should the document land on none of the displays in the starting Monitors object, the call returns an empty Monitors array when bRequire is true, or — when bRequire is false or left out — a Monitors array carrying at least one display picked arbitrarily from the original.

Parameters

doc

The document's Doc.

bRequire

(optional) A Boolean; refer to the explanation given earlier.

| --- | --- |

Returns

A Monitors object

### filter

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Hands back a duplicate of the Monitors object, narrowed by running a ranker function against every display in the list. That ranker accepts a Monitor argument and gives back a numeric rank. Whatever filter returns is a Monitors array holding the top-ranked displays — one display, or several if they tie.

Parameters

Parameter

Description

fnRanker

A ranker function — one that is handed a Monitor and yields a numeric rank.

nMinRank

(optional) Leave nMinRank undefined and filter always keeps at least one display from the source list (assuming that list held anything). Provide nMinRank and filter yields an empty Monitors array when the ranker scored no display at or above that threshold.

| --- | --- |

Returns

A Monitors object

Note

Under the hood, most of the remaining Monitors filtering functions are built on filter calls.

Example: a sample implementation of Monitors.bestColor( minColor). What it gives back is a Monitors object holding whichever display or displays carry the deepest color depth; pass minColor and it instead returns an empty Monitors array should that top depth fall short of minColor.

```
bestColor: function( minColor )
{
    return this.filter(
        function( m ) { return m.colorDepth; }, minColor );
}
```

### largest

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Hands back a duplicate of the Monitors object trimmed to whichever display or displays span the most area, counted in pixels.

Parameters

Parameter

Description

nMinArea

(optional) Supply the optional number nMinArea and largest() yields an empty Monitors array whenever that top area comes in under the given value.

| --- | --- |

Returns

A Monitors object

### leastOverlap

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Hands back a duplicate of the Monitors object trimmed to whichever display or displays cover the least of the rectangle given by the rect parameter.

Parameters

Parameter

Description

rect

Four numbers expressed in screen coordinates, forming a rectangle.

maxOverlapArea

(optional) When you set maxOverlapArea, the resulting Monitors array keeps only displays covering at least that much of the rectangle, returning an empty Monitors array if none reach that coverage.

| --- | --- |

Returns

A Monitors object

### mostOverlap

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Hands back a duplicate of the Monitors object trimmed to whichever display or displays cover the most of the rectangle given by the rect parameter.

When no display reaches that overlap, the call returns an empty Monitors array if minOverlapArea was supplied, or — if minOverlapArea was left out — a Monitors array carrying at least one display chosen arbitrarily from the original.

Parameters

Parameter

Description

rect

An array of four screen-coordinate numbers that defines a rectangle.

minOverlapArea

(optional) A Boolean; consult the explanation above.

| --- | --- |

Returns

A Monitors object

### nonDocument

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Hands back a duplicate of the Monitors object trimmed to whichever display or displays show none of the document, or the least of it.

Parameters

Parameter

Description

doc

The target document's Doc.

bRequire

(optional) A Boolean that picks the return value when every display still shows some of the document. Set it true and nonDocument comes back empty; leave it false or unset and nonDocument hands back a Monitors array carrying at least one display chosen arbitrarily from the original Monitors array.

| --- | --- |

Returns

A Monitors object

### primary

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Hands back a duplicate of the Monitors object with every secondary display stripped out, keeping just the primary display when it was part of the starting list.

Should the primary display be absent from the starting list, the call returns a Monitors array carrying at least one display chosen arbitrarily from that list.

Returns

A Monitors object

Example: fetch the primary display and read off its color depth.

```
var monitors = app.monitors.primary();
// Recall that each element in a monitors object is a monitor object
// This code uses monitor.colorDepth
console.println( "Color depth of primary monitor is "

     + monitors[0].colorDepth );
```

### secondary

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Hands back a duplicate of the Monitors object with the primary display removed, so only secondary displays remain.

When the starting Monitors object carried nothing but the primary display and no secondaries, the original list comes back unchanged.

Returns

A Monitors object

### select

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Hands back a duplicate of the Monitors object, filtered by nMonitor — a monitor selection value of the kind used in PDF and listed under app.media.monitorType.

You must pass doc whenever nMonitor is app.media.monitorType.document or app.media.monitorType.nonDocument; for every other nMonitor value it is ignored.

Each of these selection values lines up directly with one of the Monitors filter methods. select runs the matching filter method and then, in most situations, also applies primary as a tie-breaker should more than one display satisfy the main filter.

Parameters

Parameter

Description

nMonitor

A number drawn from app.media.monitorType that names the monitor type.

doc

A Doc. You must supply it when nMonitor equals app.media.monitorType.document or app.media.monitorType.nonDocument; otherwise it is disregarded.

| --- | --- |

Returns

A Monitors object.

Example: two interchangeable ways to filter the monitors.

```
settings.monitor =
app.monitors().select( app.media.monitorType.document, doc );
settings.monitor = app.monitors().document(doc).primary();
```

### tallest

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Hands back a duplicate of the Monitors object trimmed to only the display or displays with the greatest height, in pixels.

Parameters

Parameter

Description

nMinHeight

(optional) When nMinHeight is supplied and no display reaches that height, what comes back is an empty Monitors array.

| --- | --- |

Returns

A Monitors object

### widest

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Hands back a duplicate of the Monitors object trimmed to only the display or displays with the greatest width, in pixels.

Parameters

Parameter

Description

nMinWidth

(optional) When nMinWidth is supplied and no display reaches that width, what comes back is an empty Monitors array.

| --- | --- |

Returns

A Monitors object

## Net

### JavaScript APIs — Net

Through the Net object you can discover and reach networking services over several different protocols.

The Net object gathers the networking services into one namespace; those that already sit in the global namespace (SOAP) stay there. Earlier objects are kept for backwards-compatibility, yet anything new ought to live under the new namespace.

### Net properties

### SOAP

Version (Key)

Save-Prefs

Security

Product

Type

Access

8.0

No

No

All

Object

R

| --- | --- | --- | --- | --- | --- |

Use the Net.SOAP object to talk to network services running the SOAP Messaging Protocol. It exposes one property alongside three methods. The linked reference carries the complete documentation.

Name

Short Description

Net.SOAP properties

wireDump

When set true, the XML Request and Response of synchronous SOAP requests get dumped into the JavaScript Console — handy when tracking down SOAP issues.

Net.SOAP methods

connect

Turns a WSDL document's URL into a JavaScript object whose callable methods map to the web service.

request

Fires off a remote procedure call (RPC), or pushes an XML message to a SOAP HTTP endpoint. It either blocks until the endpoint answers (synchronous processing) or invokes a method on the notification object (asynchronous processing).

response

Fires off a remote procedure call (RPC), or pushes an XML message to a SOAP HTTP endpoint, without waiting on any reply.

| --- | --- |

### Discovery

Version (Key)

Save-Prefs

Security

Product

Type

Access

8.0

No

No

All

Object

R

| --- | --- | --- | --- | --- | --- |

The Discovery object exists for finding network services on the fly. Two methods hang off the Net.Discovery object. The linked reference carries the complete documentation.

Net.Discovery method

Short Description

queryServices

Finds network services that have advertised themselves via DNS Service Discovery (DNS-SD).

resolveService

Lets a service name be tied to a network address and port so that a connection can happen.

| --- | --- |

### HTTP

Version (Key)

Save-Prefs

Security

Product

Type

Access

8.0

No

No

All

Object

R

| --- | --- | --- | --- | --- | --- |

The Net.HTTP object opens up web services that run over HTTP, reaching a broader range of services than the Net.SOAP object can. You can lean on the HTTP object to build any HTTP-based messaging protocol — WebDAV or the ATOM Publishing Protocol, for instance.

Full method documentation for the HTTP object lives under Net.HTTP.

### Net methods

Three methods belong to the Net object. The linked reference carries the complete documentation.

Net method

Short Description

streamDecode

Lets a stream object be decoded under the encoding type you name.

streamDigest

Lets a stream object be digested under the encoding type you name.

streamEncode

Encodes a stream object.

| --- | --- |

## Net.HTTP

### JavaScript APIs — Net.HTTP

Web services delivered over HTTP are reachable via the Net.HTTP object, which spans a wider set of services than Net.SOAP. Because it works at the HTTP level, the object can back essentially any HTTP-based messaging protocol — think WebDAV or the ATOM Publishing Protocol.

### Net.HTTP methods

### request

Version (Key)

Save-Prefs

Security

Product

8.0

No

Yes

F

| --- | --- | --- | --- |

Calling request invokes an HTTP Web Service asynchronously. Compared with Net.SOAP.request (SOAP.request), it reaches a broader range of web services and hands you tighter control over the HTTP method, the headers, and the body. That control is what makes richer networking protocols such as WebDAV or the Atom Publishing Protocol possible.

Note

You may invoke this method only from outside any document context — folder-level JavaScript, for instance.

Parameters

Parameter

Description

cVerb

A string naming the HTTP verb to apply. It has to be one of the following (Messaging protocol > Parameter value):

HTTP (RFC 1945, 2616): GET, POST, PUT, DELETE, OPTIONS, HEAD

WebDAV (RFC 2518): PROPFIND, PROPPATCH, MKCOL, LOCK, UNLOCK, COPY, MOVE, ACL, SEARCH

WebDAV Versioning Extensions (RFC 3253): CHECKIN, CHECKOUT, UNCHECKOUT, MERGE, VERSION-CONTROL, REPORT, KWORKSPACE, UPDATE, LABEL, MERGE, MKACTIVITY

CalDAV Calendaring Extensions: MKCALENDAR

cURL

A string giving the network endpoint of the web service you want to reach. Its URL scheme has to be either HTTP or HTTPS.

aHeaders

(optional) An array naming HTTP headers to ship with the request. A few, Content-length among them, cannot be set by hand. Every array entry is an object describing one header through these properties:

name: Which header to set; it has to be a legitimate HTTP Header name.

value: What the HTTP header carries; it has to be a legitimate HTTP Header value string.

oRequest

(optional) A Stream object carrying the request body for the method. The message body goes out exactly as-is, with no encoding applied first.

oHandler

(optional) An object that deals with the service's response. On the oHandler object, the response method gets invoked, receiving these parameters:

oRequest: On success, a stream object holding the response body.

cURL: Whichever request URL drove this particular invocation.

oException: Present when the call failed — an exception object bearing these properties:

error: Whatever HTTP status code came back.

msg: Text describing why it failed.

aHeaders: The server's response headers as an array. Its format matches the aHeaders parameter documented for the Net.HTTP.request method.

oAuthenticate

(optional) An object that either dictates how HTTP authentication is handled or hands over the credentials to use. By default a user interface is shown so the user can answer BASIC and DIGEST authentication challenges. These properties may appear on the oAuthenticate object:

Username: A string holding the account name for authentication.

Password: A string holding the secret credential for authentication.

UsePlatformAuth: A Boolean signaling that platform authentication ought to be used. With platform authentication turned on, Username and Password are disregarded and the platform's own networking code takes over. That can surface an authentication UI to the user and/or reuse the credentials of whoever is currently signed in. It defaults to false and works on the Windows platform only.

| --- | --- |

Exceptions

An exception is raised should the URL be invalid or the same-origin requirement go unmet.

Example: Create a collection at the URL specified.

```
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
