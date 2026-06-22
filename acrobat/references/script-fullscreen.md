# Fullscreen, Global, Hostcontainer, Icon ...

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: FullScreen; global; HostContainer; Icon; Icon Stream; identity; Index.

## FullScreen

### JavaScript APIs — FullScreen

Your gateway to fullscreen (presentation mode) preferences and properties. Reach a fullScreen object by way of app.fs.

### FullScreen properties

### backgroundColor

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

P

No

All

Color Array

R/W

| --- | --- | --- | --- | --- | --- |

Whatever color fills the screen behind everything while full screen mode is active. Color arrays carry the details.

Example:

```
app.fs.backgroundColor = color.ltGray;
```

### clickAdvances

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

P

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Controls whether clicking the mouse anywhere over the page moves it forward.

### cursor

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

P

No

All

Number

R/W

| --- | --- | --- | --- | --- | --- |

Governs how the pointer acts once full screen mode is on. Every legal pointer behavior is spelled out by the handy cursor object:

Cursor Behavior

Keyword

Always hidden

cursor.hidden

Hidden after delay

cursor.delay

Visible

cursor.visible

| --- | --- |

Example:

```
app.fs.cursor = cursor.visible;
```

### defaultTransition

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

P

No

All

String

R/W

| --- | --- | --- | --- | --- | --- |

Which transition fires by default as pages advance under full screen mode. Pull the roster of transition names the viewer supports from transitions.

“No Transition” is equivalent to app.fs.defaultTransition = "";

Example: Switch the document over to presentation mode.

```
app.fs.defaultTransition = "WipeDown";
app.fs.isFullScreen = true;
```

### escapeExits

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

P

Yes

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

A Boolean saying whether pressing escape leaves full screen mode.

Note

(Version 8.0) Setting this property to false is only possible during batch and console events. Refer to Privileged context. A treatment of JavaScript events lives in the event object.

### isFullScreen

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

When true, the viewer sits in full screen mode rather than ordinary viewing — something attainable only while at least one document is open for viewing.

Note

You cannot push a PDF document that is being viewed inside a web browser into full screen mode.

Example:

```
app.fs.isFullScreen = true;
```

The snippet above flips the viewer into full screen mode. Had isFullScreen been false beforehand, the default viewing mode kicks in. (That default is simply whichever mode Acrobat occupied right before full screen mode began.)

### loop

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

P

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Dictates whether a page advance — triggered by a mouse click, the keyboard, or a timer — wraps the document back to its first page while full screen mode is on.

### timeDelay

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

P

No

All

Number

R/W

| --- | --- | --- | --- | --- | --- |

How many seconds elapse, by default, before a page turns on its own under full screen mode. Toggle automatic page turning on or off via useTimer.

Example: Set full screen properties, then go into full screen mode.

```
app.fs.timeDelay = 5;          // Delay 5 seconds
app.fs.useTimer = true;        // Activate automatic page turning
app.fs.usePageTiming = true;   // Allow page override
app.fs.isFullScreen = true;    // Go into full screen
```

### transitions

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

No

All

Array

R

| --- | --- | --- | --- | --- | --- |

A list of strings naming every transition the viewer implements. Setting defaultTransition to an empty string is the same as choosing No Transition:

```
app.fs.defaultTransition = "";
```

Example: Print out the transition names the viewer currently supports.

```
console.println("[" + app.fs.transitions + "]");
```

### usePageTiming

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

P

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Decides whether automatic page turning honors the per-page timing values set for full screen mode. Assign individual pages their transition properties with setPageTransitions.

### useTimer

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

P

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Toggles whether pages turn automatically in full screen mode. The default interval before the next page shows up comes from timeDelay.

## global

### JavaScript APIs — global

A static JavaScript object that lets you pass data between documents and keep it alive from one session to the next. Data of that kind is termed persistent global data. A subscription mechanism handles sharing and change notification for global data across documents, letting you watch global variables and broadcast their value changes from one document to another.

Note

Starting at version 8.0, how global variables are reached shifted a bit; here is what changed:

Inside the Preferences dialog box (Ctrl + K), the JavaScript category gained a fresh security checkbox: Enable Global Object Security Policy.

While it is checked — which is the default — every write to a global variable records the origin that performed the write. From then on, only matching origins may touch that variable.

With files, that restricts access to the very file that set it, at the same path it held when the variable was set.

For documents served from URLs, it restricts access to the host that set it.

One notable exception loosens those restrictions: global variables may be declared and reached inside a privileged context — the console, a batch sequence, and folder JavaScript all qualify. Privileged context covers more on this.

While it is unchecked, documents from differing origins are free to reach the variable, matching how things behaved prior to version 8.0.

The section Global object security policy holds examples.

### Creating global properties

Attaching properties to the global object is how you declare global data. A property may hold a String, a Boolean value, or a Number.

Say you want to introduce a variable named radius and let every document script reach it (assuming “Enable global object security policy” stays unchecked); the script declares the property like so:

```
global.radius = 8;
```

From here on, the global variable radius is recognized across documents for the rest of the current viewer session. Picture two open files, A.pdf and B.pdf, with the global declaration made inside A.pdf. Drawing on global.radius, either file — A.pdf or B.pdf — can compute the volume of a sphere.

```
var V = (4/3) * Math.PI * Math.pow(global.radius, 3);
```

Both files return one and the same answer, 2144.66058. Change the value of global.radius and rerun the script, and V shifts to match.

### Deleting global properties

Removing a variable or property from the global object is a matter of applying the delete operator to strip out the property you defined. The JavaScript 1.5 documentation explains the reserved delete keyword.

For instance, this script clears away the global.radius property:

```
delete global.radius
```

### Global object security policy

Document access to global variables is reined in by the new global security policy. The Note in global lays out further details and the exceptions.

Within a document called docA.pdf, run the script below in a non-privileged context (a mouse-up button):

```
global.x = 1
global.setPersistent("x", true);
```

Because the path for docA.pdf becomes the origin stored alongside the global.x variable, docA.pdf is cleared to reach that variable:

```
console.println("global.x = " + global.x);
```

Setting this global from docA.pdf is done with global.x = 3, say, in any context.

For a document on a different path to read and write this global variable, both the read and the write have to happen in a trusted context at a raised privilege level. Written as folder JavaScript, here are the scripts.

```
myTrustedGetGlobal = app.trustedFunction ( function()
{
    app.beginPriv();
    var y = global.x;
    return y
    app.endPriv();
});
myTrustedSetGlobal = app.trustedFunction ( function(value)
{
    app.beginPriv();
    global.x=value;
    app.endPriv();
});
```

By way of those trusted functions, a second document, docB.pdf, gains access to the global.x variable:

```
// Mouse up button action from doc B
console.println("The value of global.x is " + myTrustedGetGlobal());
```

docB.pdf can set the global too:

```
// Set global.x from docB.pdf
myTrustedSetGlobal(2);
```

The moment global.x is set from docB.pdf, its origin flips; a trusted function becomes the only route by which docA.pdf can still reach global.x directly:

```
// Execute a mouse up button action from docA.pdf
console.println("The value of global.x is " + myTrustedGetGlobal());
```

### global methods

### setPersistent

3.01

| --- | --- | --- | --- |

Determines whether a given variable survives from one launch of Acrobat to the next.

Only Boolean, Number, or String variables qualify as persistent global data.

When the application quits, persistent global variables are written out to the glob.js file in the user’s folder-level scripts directory, then read back in at the next start. From Acrobat 6.0 onward, that file is capped at 2-4 KB; anything beyond the limit appended to the string gets discarded.

A naming convention is wise whenever you set persistent global variables. Shaping them as myCompany_variableName, for example, guards against clashing with other persistent global variable names spread across the documents.

Parameters

Parameter

Description

cVariable

Names the global property whose persistence you are setting.

bPersist

When true, the property lives on across Acrobat viewer sessions. When false (the default), the property stays reachable across documents yet does not survive between Acrobat viewer sessions.

| --- | --- |

Example: Turn radius into a persistent property that other documents can reach.

```
global.radius = 8;                      // Declare radius to be global
global.setPersistent("radius", true);   // Now say it's persistent
```

The volume figure worked out earlier will hold steady from one viewer session to the next, right up until global.radius is given a new value.

### subscribe

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Lets fields refresh on their own whenever a global variable’s value shifts. Should the named property cVariable change — even from inside another document — the named function fCallback fires. A published property can carry several subscribers at once.

Parameters

cVariable

The global property in question.

fCallback

The function fired once that property changes.

| --- | --- |

Here is how the callback function’s syntax looks:

```
function fCallback(newval) {
// newval is the new value of the global variable you
// have subscribed to.
    < code to process the new value of the global variable >
}
```

Closing the document that first registered the script, or deleting the (global) property, shuts the callback down.

Example: This example assumes Enable Global Object Security Policy is left unchecked. Two files, setRadius.pdf and calcVolume.pdf, sit open in Acrobat or Adobe Reader:

A lone button on setRadius.pdf carries this code

```
global.radius = 2;
```

Over on calcVolume.pdf sits a document-level JavaScript called subscribe :

```
global.subscribe("radius", RadiusChanged);
function RadiusChanged(x)  // callback function
{
    var V = (4/3) * Math.PI * Math.pow(x,3);
    this.getField("MyVolume").value = V;  // Put value in text field
}
```

With the two files both open, a click on the button inside setRadius.pdf instantly refreshes the text field “MyVolume” in calcVolume.pdf to 33.51032 (the figure that global.radius = 2 produces).

## HostContainer

### JavaScript APIs — HostContainer

Communication between a PDF document and the host container wrapping it — an HTML page, for instance — is handled by this object. Which host container holds a document is named by the Doc hostContainer property.

For the container application’s object model, the matching API arrives via the Embedded PDF object.

### HostContainer properties

### messageHandler

Version (Key)

Save-Prefs

Security

Product

Type

Access

7.05

No

No

All

Object

R/W

| --- | --- | --- | --- | --- | --- |

A notification object invoked whenever a script in the host container fires the postMessage method. The methods and properties this object may surface include:

Method/Property

Description

onMessage

(Optional) A method invoked in answer to postMessage. Delivery of the message is asynchronous. A single array parameter — the same array handed to postMessage — is passed to the method.

onError

(Optional) A method invoked in answer to an error. It receives an Error object plus an array of strings matching the message that triggered the error. On that Error object, the name property holds one of these:

"MessageGeneralError": Some general failure took place.

"MessageNotAllowedError": Security grounds blocked the operation. Should an error arise while this property remains undefined, that error never reaches you — errors, unlike messages, get no queue.

onDisclose

A mandatory method invoked to settle whether the host application may send messages to the document. This hands the PDF document author control over the security conditions under which messaging is allowed. Set the method during the Doc/Open event. Two parameters reach the method:

cURL: The URL pointing at where the host container lives (say, the URL of an HTML page that uses an <OBJECT> tag).

cDocumentURL: The URL of the PDF document whose disclosure is under review. Return true from the method, and the host container may post messages to the message handler.

allowDeliverWhileDocIsModal

A Boolean marking whether messages and errors reach their handlers while the document sits in a modal state. By default (false), messages and errors are held in a queue and kept from the onMessage and onError handlers whenever the application has a modal dialog up. Detect that situation with the app.isModal property.

| --- | --- |

Note

Rather than a method, onDisclose can instead carry the value HostContainerDisclosurePolicy.SameOriginPolicy, by which the document is disclosed to the host container only when the two share an origin. Origin here is judged by scheme, server, and port together. For disclosure to occur, the scheme has to be http, https, or ftp.

Whenever these methods run, this resolves to the messageHandler instance the method is being called on.

You may bolt additional methods and properties onto messageHandler so long as none of their names start with on.

Set messageHandler to null, or to an object lacking an onMessage method, and any messages posted by postMessage stack up in a queue until the property holds a valid messageHandler instance.

Delivery order is guaranteed: messages arrive in the order posted, and errors arrive in the order they occurred. Across the two streams, though, no ordering relationship exists between messages and errors.

Any exception thrown inside the handler methods is thrown away. An exception escaping onDisclose is read as a failure of that function. No messages or errors get delivered while execution sits inside an onMessage / onError / onDisclose handler.

Example: A catch-all message handler for the host container.

```
this.hostContainer.messageHandler =
{
    onMessage: function(aMessage)
    {
        for(var i = 0; i < aMessage.length; i++)
         console.println("Recv'd Msg[ " + i + "]: " + aMessage[i]);
    },
    onError: function(error, aMessage){ },
    onDisclose: HostContainerDisclosurePolicy.SameOriginPolicy
};
```

### HostContainer methods

### postMessage

7.0.5

| --- | --- | --- | --- |

Fires a message off asynchronously to the message handler belonging to the PDF document’s host container. Delivery hinges on that host container — an <OBJECT> element on an HTML page, say — having signed up for notification by setting its messageHandler property. The onMessage method of the messageHandler receives the message.

Until they go out, messages wait in a queue. Once that queue tops its maximum message count, a parameter error keeps getting thrown until the queue drains some of its backlog.

Parameters

Parameter

Description

aMessage

An array of at least one string; the messageHandler property’s onMessage method receives it.

| --- | --- |

Example:

```
var aMessage = ["MyMessageName", "Message Body"];
this.hostContainer.postMessage(aMessage);
```

## Icon

### JavaScript APIs — Icon

An opaque stand-in for a Form XObject appearance kept in the Doc icons property, this generic JavaScript object pairs with Field objects of the button type. One property lives on the icon object:

Property

Type

Access

Description

name

string

R

The icon’s name. An icon carries a name when it appears in the document-level named icons tree.

| --- | --- | --- | --- |

## Icon Stream

### JavaScript APIs — Icon Stream

Standing in for an icon stream, this generic JavaScript object serves app.addToolButton and collab.addStateModel. Its properties are:

Property

Description

read(nBytes)

A function that, given how many bytes to read, hands back a hex-encoded string. That data ought to be the icon laid out as 32 bits per pixel across 4 channels (ARGB), or 8 bits per channel with the channels interleaved. When the icon spans several layers, the function may yield the pixels of the frontmost layer first, then the layer behind it, and onward.

width

The icon width in pixels.

height

The icon height in pixels.

| --- | --- |

Turning an Icon object into an Icon Stream object is the job of the util.iconStreamFromIcon method.

## identity

### JavaScript APIs — identity

Version (Key)

Save-Prefs

Security

Product

5.0

No

Yes

All

| --- | --- | --- | --- |

A static object that pins down who is currently using the application.

Note

To safeguard the user’s privacy, the identity object properties open up only during batch, console, and application initialization events. Refer to Privileged context.

### identity properties

### corporation

Type

Access

String

R/W

| --- | --- |

Whatever corporation name the user typed into the Identity preferences panel.

### email

Type

Access

String

R/W

| --- | --- |

Whatever email address the user typed into the Identity preferences panel.

### loginName

Type

Access

String

R

| --- | --- |

The login name the operating system has on record.

### name

Type

Access

String

R/W

| --- | --- |

Whatever user name the user typed into the Identity preferences panel.

Example: Run the lines below from the console, or maybe from a folder-level JavaScript.

```
console.println("Your name is " + identity.name);
console.println("Your e-mail is " + identity.email);
```

## Index

### JavaScript APIs — Index

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Stands for an index produced by Catalog. You cannot create it yourself; assorted methods on the search object and catalog object return it. Through this object you drive a range of indexing operations by way of Catalog. A search lets you learn the index’s status.

### Index properties

### available

Type

Access

Boolean

R

| --- | --- |

Reports whether the index can be selected and searched. An index might be out of reach when a network link drops, a CD-ROM sits out of the drive, or the index administrator has taken it offline for maintenance.

### name

Type

Access

String

R

| --- | --- |

The name the index administrator gave the index at indexing time.

See search. indexes, which returns an array of the Index objects currently accessed by the search engine.

Example: This example enumerates all of the indexes and writes their names to the console.

```
for (var i = 0; i < search.indexes.length; i++) {
    console.println("Index[" + i + "] = " + search.indexes[i].name);
}
```

### path

Type

Access

String

R

| --- | --- |

The device-dependent path at which the index lives. Turn to the PDF Reference for the path’s precise syntax.

### selected

Type

Access

Boolean

R/W

| --- | --- |

Reports whether the index takes part in the search. When true, the query searches the index; when false, it skips it. Toggling this property amounts to ticking or unticking the selection in the index list dialog box.

### Index methods

### build

Version (Key)

Save-Prefs

Security

Product

6.0

No

Yes

Acrobat Pro only

| --- | --- | --- | --- |

Uses the Catalog plug-in to build the index tied to the Index object. A brand-new index is not what this method produces.

The index is assembled in the same spot as the index file. Where the index already exists, its included directories get rescanned for changes and the index is refreshed. Where it does not yet exist, the user interface lets you define and build a fresh one.

When Catalog sits idle, the index build kicks off right away; otherwise it joins Catalog’s queue.

Note

(Acrobat 7.0) Running this method is confined to a batch or console event. Refer to Privileged context. A treatment of JavaScript events lives in the event object.

Parameters

Parameter

Description

cExpr

(optional) An expression evaluated once the index build wraps up. By default there is no expression. The PDF Reference holds more detail.

bRebuildAll

(optional) When true, a clean build runs: the index is deleted first, then rebuilt. It defaults to false.

| --- | --- |

Returns

A CatalogJob object that can be used to check the job parameters and status.

Example:

```
/* Building an index */
if (typeof catalog != "undefined")  {
    var idx = catalog.getIndex("/c/mydocuments/index.pdx");
    var job = idx.build("Done()", true);
    console.println("Status : ", job.status);
}
```
