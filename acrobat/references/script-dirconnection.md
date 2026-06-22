# Dirconnection, Directory, Embedded Pdf, Error

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: DirConnection; Directory; Embedded PDF; Error.

## DirConnection

### JavaScript APIs — DirConnection

Version (Key)

Save-Prefs

Security

Product

6.0

No

Yes

All

| --- | --- | --- | --- |

A live connection to a directory — a store of user information that includes public-key certificates — is what this object represents. You open such connections through the connect method on the Directory object. One named directory may hold several connections open simultaneously. Every DirConnection object is required to support all the properties and methods documented here, except where noted otherwise.

Note

Since this object comes only from a Directory object, it inherits that object's security restrictions. That makes the DirConnection object reachable solely during batch, console, and application initialization, Adobe Reader included. See also Privileged context.

### DirConnection properties

### canList

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

Yes

All

Boolean

R

| --- | --- | --- | --- | --- | --- |

Reports whether the directory connection can enumerate every one of its entries. In practice some directories carry so many entries that doing so isn't feasible.

Example: Listing the local trusted identity list is something the AAB directory permits.

```
var sh = security.getHandler( "Adobe.AAB" );
var dc = sh.directories[0].connect();
console.println( "CanList = " + dc.canList );
```

### canDoCustomSearch

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

Yes

All

Boolean

R

| --- | --- | --- | --- | --- | --- |

Tells you whether the directory connection can search by directory-specific search parameter attributes. For an LDAP directory, say, such attributes run to o (organization), c (country), cn (common name), givenname, sn (surname), uid, st, postalcode, mail, and telephonenumber.

### canDoCustomUISearch

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

Yes

All

Boolean

R

| --- | --- | --- | --- | --- | --- |

Tells you whether the directory connection can run searches through its own custom user interface for gathering the search parameters.

### canDoStandardSearch

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

Yes

All

Boolean

R

| --- | --- | --- | --- | --- | --- |

Tells you whether the directory connection can search by the standard search parameter attributes. Those standard attributes are

```
firstName
lastName
fullName
email
certificates
```

Not every directory database implementation will support these attributes, yet directory handlers are at liberty to map them onto names the directory recognizes.

### groups

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

Yes

All

Array

R

| --- | --- | --- | --- | --- | --- |

An array holding the language-dependent names of the groups reachable over this connection.

### name

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

Yes

All

String

R

| --- | --- | --- | --- | --- | --- |

The language-independent name of the directory to which this object is connected. Adobe.PPKMS.ADSI.dir0 would be one example. Every DirConnection object must support this property.

### uiName

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

Yes

All

String

R

| --- | --- | --- | --- | --- | --- |

The language-dependent string for the directory this object connects to, fit for display in user interfaces. Every DirConnection object must support this property.

### DirConnection methods

### search

Version (Key)

Save-Prefs

Security

Product

6.0

No

Yes

All

| --- | --- | --- | --- |

Runs a search of the directory and returns an array of UserEntity objects matching the search parameters. A UserEntity object is a generic object holding properties for every attribute that the setOutputFields method asked for. Run a search without first calling setOutputFields and the UserEntity object comes back with no entries in it.

Parameters

Parameter

Description

oParams

(optional) A generic object holding an array of key-value pairs, each pairing a search attribute name with its string. Leave oParams out while canList is true for the directory, and every entry comes back; leave it out while canList is false, and an exception is thrown.

cGroupName

(optional) A group's name (don't confuse this with Group objects). Supply it and the search stays confined to that group.

bCustom

(optional) When false (the default), oParams carries standard search attributes; when true, it carries directory-specific ones. An exception is thrown unless the canDoCustomSearch property is true.

bUI

(optional) When true, the handler shows the user interface for gathering search parameters, and this method hands back the search results. For bUI to be true, canDoCustomUISearch has to be true as well, or an exception results. Whenever bUI is given, bCustom must be given too, though what it is set to makes no difference.

| --- | --- |

Returns

An array of UserEntity objects.

Example 1: Directory search.

```
var sh = security.getHandler( "Adobe.PPKMS" );
var dc= sh.directories[0].connect();
dc.setOutputFields( {oFields:["certificates","email"]} )
var retVal = dc.search({oParams:{lastName:"Smith"}});
if( retVal.length )
console.println( retVal[0].email );
```

Example 2: Enumerate every entry held in a local Acrobat Address Book. Searching the directory, the script yields an array of users together with their certificate details.

```
var sh = security.getHandler( "Adobe.AAB" );
var dc = sh.directories[0].connect();
if( dc.canList ) {
    var x = dc.search();
    for( j=0; j<x.length; ++j ) {
        console.println("Entry[" + j + "] = " + x[j].fullName + ":");
        for(i in x[j]) console.println("  " + i + " = " + x[j][i]);
    }
}
```

UserEntity object

A generic JavaScript object describing one user in a directory together with the certificates that belong to that user. Its standard properties carry a fixed meaning across all directory handlers, which map these entries onto their own equivalents whenever that is needed. The DirConnection object's search method returns an array of these objects.

Its properties are these

Property

Type

Access

Description

firstName

String

R/W

The user's given name.

lastName

String

R/W

The user's family name.

fullName

String

R/W

The user's complete name.

certificates

Array of Certificate objects

R/W

The certificates held by this user, as an array. To pin down a certificate meant for a given purpose, the caller ought to check each certificate's keyUsage property.

defaultEncryptCert

Array of Certificate objects

R/W

Which certificate is favored when documents are encrypted for this user entity. Code handling user entity objects consults this property first when it needs an encryption certificate, and only if it is unset does the first valid match from certificates get used.

| --- | --- | --- | --- |

### setOutputFields

Version (Key)

Save-Prefs

Security

Product

6.0

No

Yes

Not available in Reader

| --- | --- | --- | --- |

Sets out which attributes are to come back when the search method runs.

Note

The Adobe.AAB directory handler does not support this method. The Adobe.PPKMS.ADSI directory handler does not support custom options.

Parameters

Parameter

Description

oFields

A list of attribute-name strings telling the directory which fields to hand back when the search method runs. Every entry here has to be either a standard attribute available to all directory handlers or a custom attribute set up for one specific directory. Those standard attributes correspond to the property names that the UserEntity object defines. Where it is appropriate, a directory handler may map a standard attribute name onto whatever name it actually recognizes.

bCustom

(optional) A Boolean flag marking whether the entries in oFields are standard output attribute names. When set to true, the entries instead refer to directory-specific attributes belonging to one particular directory handler. It defaults to false.

| --- | --- |

Returns

A string list naming whichever entries from oFields this directory cannot support. Should oFields come in empty, the result is an empty array as well.

Example: Here, dc.setOutputFields hands back the string array ["x", "y"].

```
var sh = security.getHandler("Adobe.PPKMS");
var dc = sh.directories[0].connect();
var w = dc.setOutputFields( [ "certificates", "email", "x", "y"] );
console.println( w );
```

See also the examples that follow the DirConnection.search method.

## Directory

### JavaScript APIs — Directory

Version (Key)

Save-Prefs

Security

Product

6.0

No

Yes

All

| --- | --- | --- | --- |

Think of a directory as a store of user information, public-key certificates among it. You reach one through a Directory object, which you get either from the SecurityHandler object's directories property or via its newDirectory method.

From Acrobat 6.0 onward, multiple directories ship. A lone directory called Adobe.AAB.AAB belongs to the Adobe.AAB Security Handler, reaching the local Acrobat Address Book — the trusted identity store. Under Windows, the Adobe.PPKMS Security Handler reaches, by way of the Microsoft Active Directory Script Interface (ADSI), however many directories the user has set up. Each is built in turn and named in sequence: Adobe.PPKMS.ADSI.dir0, then Adobe.PPKMS.ADSI.dir1, and onward.

Note

Because a SecurityHandler object is the only source for this object, the SecurityHandler object's security restrictions apply to it too. That confines the Directory object to batch, console and application initialization, Adobe Reader included. See also Privileged context.

### Directory properties

### info

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

Yes

All

Object

R/W

| --- | --- | --- | --- | --- | --- |

What this property holds is a DirectoryInformation object — a generic object you use to read and write this Directory object's properties.

Example:

```
// Create and activate a new directory
var oDirInfo = { dirStdEntryID: "dir0",
    dirStdEntryName: "Employee LDAP Directory",
    dirStdEntryPrefDirHandlerID: "Adobe.PPKMS.ADSI",
    dirStdEntryDirType: "LDAP",
    server: "ldap0.example.com",
    port: 389 };
var sh = security.getHandler( "Adobe.PPKMS" );
var newDir = sh.newDirectory();
newDir.info = oDirInfo;
```

DirectoryInformation object

Standing for a directory's properties, a directory information object is generic and carries the standard properties below.

Property

Type

Access

Required

Description

dirStdEntryID

String

R/W

Yes

A language-independent identifier, unique to the directory. Only alphanumerics plus underscores, periods and hyphens are permitted. When creating directory objects it is best to omit the ID; leaving it out triggers automatic generation of a fresh unique name.

dirStdEntryName

String

R/W

Yes

A user-friendly name for the directory.

dirStdEntryPrefDirHandlerID

String

R/W

No

Which directory handler this directory will rely on. A single security handler may back several directory handlers covering different directory types — local and LDAP directories, say.

dirStdEntryDirType

String

R/W

No

Which kind of directory it is. LDAP, ADSI, and WINNT are examples.

dirStdEntryVersion

String

R

No

How the data is versioned. Absent a value set by the directory, it defaults to 0. For Acrobat 6.0 directories under the Adobe.AAB and Adobe.PPKMS.ADSI directory handlers the value is 0x00010000.

| --- | --- | --- | --- | --- |

Beyond these, a directory information object may carry extra properties tied to one specific directory handler. These further properties come with the Adobe.PPKMS.ADSI directory handler:

Property

Type

Access

Description

server

String

R/W

Whichever server holds the data — addresses.employees.example.com, for instance.

port

String

R/W

Which port the server listens on. For LDAP the usual port is 389.

searchBase

String

R/W

Confines the search to one slice of the directory. For instance,

o=XYZ Systems,c=US.

maxNumEntries

Number

R/W

How many entries at most a single search may pull back.

timeout

Number

R/W

The longest a search is permitted to run.

| --- | --- | --- | --- |

Example 1: Create and activate a new directory.

```
var oDirInfo = { dirStdEntryID: "dir0",
    dirStdEntryName: "Employee LDAP Directory",
    dirStdEntryPrefDirHandlerID: "Adobe.PPKMS.ADSI",
    dirStdEntryDirType: "LDAP",
    server: "ldap0.example.com",
    port: 389
};
var sh = security.getHandler( "Adobe.PPKMS" );
var newDir = sh.newDirectory();
newDir.info = oDirInfo;
```

Example 2: Get information for an existing directory.

```
var sh = security.getHandler("Adobe.PPKMS");
var dir0 = sh.directories[0];
// Get directory info object just once for efficiency
var dir0Info = dir0.info;
console.println( "Directory " + dir0Info.dirStdEntryName );
console.println( "address " + dir0Info.server + ":" + dir0Info.port );
```

### Directory methods

### connect

Version (Key)

Save-Prefs

Security

Product

6.0

No

Yes

All

| --- | --- | --- | --- |

Hands back a DirConnection object representing a live connection to the named directory. A single directory can sustain several simultaneous connections.

See also the DirConnection object and the SecurityHandler object's directories property.

Parameters

Parameter

Description

oParams

(optional) A generic object holding whatever parameters the connection needs. Which properties apply depends on the directory handler in play, and userid and password are among the possibilities.

bUI

(optional) A Boolean, false by default. It controls whether the directory handler may surface its UI should that be needed to set up the connection.

| --- | --- |

Returns

Either a DirConnection object or, when no directory carries the given name, null.

Example: Enumerate available directories and connect.

```
var sh = security.getHandler( "Adobe.PPKMS" );
var dirList = sh.directories;
for ( var i=0; i< dirList.length; i++)
    for ( var o in dirList[i].info )
        console.println( o + " = " + dirList[i].info[o]);
var dirConnection = dirList[0].connect();
```

## Embedded PDF

### JavaScript APIs — Embedded PDF

What this object lays out is an API surfaced to a container application's object model, letting that application trade messages with an embedded PDF document. Take a PDF embedded inside an HTML document via the <OBJECT> tag: the PDF object then gets scripted within the browser's scripting context.

On the PDF side of the scripting model, the HostContainer object supplies the matching interface. For security's sake, both the container and the PDF document have to grant permission before any such exchange can take place.

### Embedded PDF properties

### messageHandler

Version (Key)

Save-Prefs

Security

Product

Type

Access

7.0.5

No

No

All

Object

R/W

| --- | --- | --- | --- | --- | --- |

Through this property, a script in the web browser's scripting context can register a notification object to be invoked whenever a script inside the PDF calls the Doc hostContainer.postMessage method.

The object held here may expose the methods below.

Method

Description

onMessage

When present, this gets invoked as a response to the Doc hostContainer.postMessage method. Delivery of the message happens asynchronously. A single array parameter is handed to the method, carrying the array that went to the postMessage method.

onError

When present, this fires in response to an error. It receives both an Error object and a string array matching the message behind the error. Should an error arise while this property is undefined, that error goes undelivered — errors, unlike messages, are not queued. On the Error object the name property is set to one of these strings: - "MessageGeneralError": Some general error happened. - "MessageNotAllowedError": Security reasons caused the operation to fail. - "MessageDocNotDisclosedError": Disclosure to the host container was never configured on the document. The Doc's hostContainer.messageHandler.onDisclose property has to be set up correctly. - "MessageDocRefusedDisclosureError": Going by the URL, the document declined to disclose itself to the host container, since the hostContainer.messageHandler.onDisclose method came back false.

| --- | --- |

Whenever these methods run, this resolves to the messageHandler instance on which the method was called. For later use as notification methods, any properties on the messageHandler property whose names start with on are held in reserve.

Should postMessage have already been called on the PDF document before this method got registered, every queued message then flows to the messageHandler object the moment it is set.

Posting order is preserved for message delivery, and occurrence order is preserved for error delivery. Between the two, though — messages versus errors — delivery order bears no relationship.

Any exception a handler method throws is thrown away. While execution sits inside an onMessage or onError handler, neither messages nor errors get delivered.

Note

On the Mac OS platform this property is not implemented.

### Embedded PDF methods

### postMessage

Version (Key)

Save-Prefs

Security

Product

7.0.5

No

No

All

| --- | --- | --- | --- |

Fires a message asynchronously at the PDF document's message handler — but only once the PDF has revealed itself, which it does when the onDisclosed method on the messageHandler property of its HostContainer object yields true.

That message reaches the onMessage method of the messageHandler.

Where the PDF document withholds disclosure to the host container, an error reaches the onError method of the messageHandler property at some point once postMessage has already returned. And if the PDF has not yet registered for events by setting the Doc hostContainer.messageHandler property, those events wait in a queue until the PDF sets it.

Messages land in a queue and stay there until delivered. Once the queue grows past a ceiling, an error keeps being thrown until enough queued messages have gone out.

Parameters

Parameter

Description

aMessage

A string array, one or more entries, destined for onMessage.

| --- | --- |

Note

On the Mac OS platform this method is not implemented.

## Error

### JavaScript APIs — Error

Any time an exception gets thrown from a method or property written in JavaScript, an Error object is created on the fly. Core JavaScript itself can raise several Error subclasses — EvalError, RangeError, SyntaxError, TypeError, ReferenceError, URLError — all of which take the Error object as their prototype. JavaScript may raise some of these directly or, as it sees fit, derive its own subclasses of the Error object. Where your scripts lean on try/catch handling, expect the thrown object to be one of the types in the table that follows.

Error object

Brief description

RangeError

Argument value is out of valid range.

TypeError

Wrong type of argument value.

ReferenceError

Reading a variable that does not exist.

MissingArgError

Missing required argument.

NumberOfArgsError

Invalid number of arguments to a method.

InvalidSetError

A property set is not valid or possible.

InvalidGetError

A property get is not valid or possible.

OutOfMemoryError

Out of memory condition occurred.

NotSupportedError

Functionality not supported in this configuration (for example, Adobe Reader).

NotSupportedHFTError

HFT is not available (a plug-in may be missing).

NotAllowedError

Method or property is not allowed for security reasons.

GeneralError

Unspecified error cause.

RaiseError

Acrobat internal error.

DeadObjectError

Object is dead.

HelpError

User requested for help with a method.

| --- | --- |

Whatever Error object types JavaScript implements pick up their properties and methods from the core Error object. Certain JavaScript objects might define exception types all their own. When an Error subclass adds methods or properties of its own, that belongs in the documentation for the specific object.

Example: Print all properties of the Error object to the console.

```
try {
    app.alert(); // one argument is required for alert
} catch(e) {
    for (var i in e)
    console.println( i + ": " + e[i])
}
```

### Error properties

### fileName

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

String

R

| --- | --- | --- | --- | --- | --- |

Which script triggered the thrown exception, by name.

### lineNumber

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

Integer

R

| --- | --- | --- | --- | --- | --- |

Within the JavaScript code, the line that the exception was thrown from.

### extMessage

Version (Key)

Save-Prefs

Security

Product

Type

Access

7.0

No

No

All

String

R

| --- | --- | --- | --- | --- | --- |

Extra detail about the exception, conveyed as a message.

### message

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

String

R

| --- | --- | --- | --- | --- | --- |

The message spelling out details of the exception.

### name

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

String

R/W

| --- | --- | --- | --- | --- | --- |

Which Error object subclass this is — in other words, the type of the Error object instance.

### Error methods

### toString

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Fetches the exception's detail message.

Returns

The string holding the error message. (Refer to the message property.)
