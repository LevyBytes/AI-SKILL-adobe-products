# Security

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## JavaScript APIs — security

As a static JavaScript object, security surfaces PDF security operations such as encryption and digital signatures. Those operations run through a SecurityHandler object, which the security object yields by way of its getHandler method.

Note

Use of the security object carries no restriction and extends to Adobe Reader as well. Apart from cases noted otherwise, its methods and properties run only during batch, console, or application-initialization events — Adobe Reader included. Refer as well to Privileged context. A treatment of JavaScript events lives in the event object.

### security constants

From Acrobat 7.0 onward, the security object defines a handful of convenience strings. These constants live as properties on the wrapper objects named below.

HandlerName object

Use these constants to pick which handler applies.

Property

Type

Access

Description

StandardHandler

String

R

Specify this value in the handler property of a SecurityPolicy object built on the Standard (password-based) security handler.

PPKLiteHandler

String

R

Specify this value in the handler property of a SecurityPolicy object built on the PPKLite (certificate-based) security handler. You may also pass it to security.getHandler to spin up a fresh security context.

APSHandler

String

R

This is the value named in the handler property of a SecurityPolicy object built on the Adobe Policy Server security handler. You may also pass it to security.getHandler to spin up a fresh security context.

| --- | --- | --- | --- |

Example: The string constant security.StandardHandler names the handler property on the SecurityPolicy object.

```
security.getHandler(security.PPKLiteHandler, true);
```

EncryptTarget Object

Reach for these constants to declare what data a policy encrypts. They belong in the target property of the SecurityPolicy object.

Property

Type

Access

Description

EncryptTargetDocument

String

R

Applied, the Security Policy encrypts the whole document.

EncryptTargetAttachments

String

R

Here the Security Policy encrypts solely the file attachments held inside the document. The document itself stays openable, yet the attachments will not open until the right security authentication is given. eEnvelope workflows put it to use.

| --- | --- | --- | --- |

Example:

```
var filterOptions = { target: security.EncryptTargetAttachments };
security.chooseSecurityPolicy( { oOptions: filterOptions } );
```

### security properties

### handlers

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

Holds an array of the language-independent names for the security handlers on hand for encryption or signatures.

See also getSecurityPolicies.

What follows applies across different Acrobat versions:

From Acrobat 6.0 onward, this property may be read without restriction, so you can query which handlers exist.

Under Acrobat 6.0, the call came back with three handlers: Adobe.PPKLite, Adobe.PPKMS, and Adobe.AAB. From Acrobat 7.0 on, everything Adobe.PPKMS did was folded into Adobe.PPKLite, and Adobe.PPKMS no longer stands on its own as a handler.

From Acrobat 7.0 onward, one more handler exists, Adobe.APS. Its job is authentication ahead of any call to encryptUsingPolicy, getSecurityPolicies, or chooseSecurityPolicy. At present it serves no other purpose.

From Acrobat 7.0 onward, security constants are set for each handler. (The exception is Adobe.AAB; no constant was introduced for it, since the handler is likely headed for deprecation soon.) Use these constants when you spin up a new handler instance via getHandler or when you compare against the handlers list.

Example: Pull the roster of security handlers present on this system:

```
for ( var i=0; i < security.handlers.length; i++ )

     console.println(security.handlers[i])
```

What prints to the console might read

```
Adobe.APS
Adobe.PPKLite
Adobe.PPKMS
Adobe.AAB
```

### validateSignaturesOnOpen

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

P

Yes

Not allowed in Reader: Only available in Acrobat products

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Reads or writes the user-level preference that makes signatures validate on their own each time a document opens.

Note

Reading the property works in every situation, but writing a new value is allowed only during a batch, console, or application-initialization event. Refer to Privileged context.

### security methods

### chooseRecipientsDialog

Version (Key)

Save-Prefs

Security

Product

6.0

No

Yes

Not available in Reader

| --- | --- | --- | --- |

Brings up a dialog box where the user picks a roster of recipients. Hands back an array of generic Group objects, usable when documents or data are encrypted through the Doc's encryptForRecipients or addRecipientListCryptFilter methods.

Note

Runs only during a console, menu, or application-initialization event. Refer to Privileged context.

Parameters

Parameter

Description

oOptions

A DisplayOptions object containing the parameters for the display options.

| --- | --- |

Returns

An array of Group objects.

For a description of the Group object, see the Doc encryptForRecipients method.

DisplayOptions object

These are the properties the DisplayOptions object carries.

Property

Description

bAllowPermGroups

Governs whether permissions may be assigned to entries in the recipient list. The default value is true.

bPlaintextMetadata

Supply this property and a check box appears that lets the user choose plaintext or encrypted metadata. Its default tracks the value of this property (true or false). Omit the property and the check box stays hidden.

cTitle

The title shown in the dialog box. It defaults to "Choose Recipients".

cNote

A note shown in the dialog box. By default none is shown.

bAllowImportFromFile

Sets whether the option to import recipients from a file is shown. The default value is true.

bRequireEncryptionCert

When true, every recipient must carry an encryption certificate. The default value is true.

bRequireEmail

When true, every recipient must carry an email address. The default value is false.

bUserCert

When true, the user is asked to supply his or her own certificate so as to join the recipient list. Turning this flag on produces a prompt yet does not force the user to hand over a certificate.

| --- | --- |

Example 1: Retrieve groups with permissions

```
var oOptions = {
    bAllowPermGroups: true,
    bPlaintextMetadata: false,
    cTitle: "Encrypt and Email",
    cNote: "Select recipients",
    bAllowImportFromFile: false,
    bRequireEncryptionCert: true,
    bRequireEmail: true
};
var groupArray = security.chooseRecipientsDialog( oOptions );
console.println("Full name = " + groupArray[0].userEntities[0].fullName);
```

Example 2: Get a list of recipients for which to encrypt data and email the document.

```
var oOptions = { bAllowPermGroups: false,
    cNote: "Select the list of recipients. "
    + "Each person must have both an email address and a certificate.",
    bRequireEmail: true,
    bUserCert: true
};
var oGroups = security.chooseRecipientsDialog( oOptions );
// Display the list of recipients in an alert
// Build an email "to" mailList
var numCerts = oGroups[0].userEntities.length;
var cMsg = "The document will be encrypted for the following:n";
var mailList = new Array;
for( var g=0; g<numCerts; ++g )
{
    var ue = oGroups[0].userEntities[g];
    var oCert = ue.defaultEncryptCert;
    if( oCert == null )
        oCert = ue.certificates[0];
    cMsg += oCert.subjectCN + ", " + ue.email + "n";
    var oRDN = oCert.subjectDN;
    if( ue.email )
    {
        mailList[g] = ue.email;
    }
    else
        if ( oRDN.e )
        {
            mailList[g] = oRDN.e;
        }
}
var result = app.alert( cMsg );
```

Example 3: List all the entries in an array of groups.

```
var  groups = security.chooseRecipientsDialog( oOptions );
for( g in groups ) {
    console.println( "Group No. " + g );
    // Permissions
    var perms = groups[g].permissions;
    console.println( "Permissions:" );
    for(p in perms) console.println( p + " = " + eval("perms." +p));
    // User Entities
    for( u in groups[i].userEntities ) {
    var user = groups[g].userEntities[u];
    console.println( "User No. " + u );
    for(i in user) console.println( i + " = " + eval("user." +i));
    }
}
```

### chooseSecurityPolicy

Version (Key)

Save-Prefs

Security

Product

7.0

No

Yes

Not available in Reader

| --- | --- | --- | --- |

Pops up a dialog box so the user can select from a list of security policies, pared down by the options supplied.

Note

Runs only during a batch, console, or application-initialization event. Refer to Privileged context. UI will be shown by this method.

Parameters

Parameter

Description

oOptions

(optional) A SecurityPolicyOptions object containing the parameters used for filtering the list of security policies returned. If not specified, all policies found are displayed.

| --- | --- |

Returns

Returns a single SecurityPolicy object or null if the user cancelled the selection.

Example: Pick a policy and print its name.

```
var options = { cHandler: security.APSHandler };
var policy = security.chooseSecurityPolicy( options );
console.println("The policy chosen was: " + policy.name);
```

One of the security constants is security.APSHandler.

### exportToFile

Version (Key)

Save-Prefs

Security

Product

6.0

No

Yes

Not available in Reader

| --- | --- | --- | --- |

Writes a Certificate object out to local disk as a raw certificate file.

Note

The data written has to belong to a valid certificate; data of arbitrary types may not be written. An existing file will not be overwritten by this method.

See also security. importFromFile.

Parameters

Parameter

Description

oObject

The Certificate object that is to be exported to disk.

cDIPath

The device-independent save path. - The parameter cDIPath must be a safe path (see Safe path) and must end with the extension .cer.

| --- | --- |

Returns

The path of the file that was written, if successful.

Example:

```
var outPath = security.exportToFile(oCert, "/c/outCert.cer");
```

### getHandler

Version (Key)

Save-Prefs

Security

Product

5.0

No

Yes

All

| --- | --- | --- | --- |

Yields a SecurityHandler object. A caller may spin up as many new engines as wanted, and every getHandler call makes another engine. The UI engine, though, is the only one of its kind.

Note

This method is reachable from batch, console, and app-initialization events. Refer to Privileged context.

Backward Compatibility: Since Adobe.PPKMS stopped existing as its own handler at Acrobat 7.0, calling getHandler with cName set to "Adobe.PPKMS" gives back the engine tied to the Adobe.PPKLite handler.

Parameters

Parameter

Description

cName

The language-independent name of the security handler, as returned by the handlers property. (Acrobat 7.0) Beginning with Acrobat 7.0, constant strings are defined for each of the valid handlers. See security constants, in particular the HandlerName object object.

bUIEngine

(optional) If true, the method returns the existing security handler instance that is associated with the Acrobat user interface (so that, for example, a user can log in through the user interface). If false (the default), returns a new engine.

| --- | --- |

Returns

The SecurityHandler object specified by cName. If the handler is not present, returns a null object.

Example: Pick the Adobe.PPKLite SecurityHandler.

```
// Validate signatures on open
security.validateSignaturesOnOpen = true;

// List all available signature handlers
var a = security.handlers;
for (var i = 0; i < a.length; i++)
    console.println("a["+i+"] = "+a[i]);

// Use "Adobe.PPKLite" handler engine for the UI
var ppklite = security.getHandler(
    security.PPKLiteHandler, true);
// Log in
ppklite.login("dps017", "/C/profiles/DPSmith.pfx");
```

For a continuation of this example, see the one that follows signatureSign.

### getSecurityPolicies

Version (Key)

Save-Prefs

Security

Product

7.0

No

Yes

Not available in Reader

| --- | --- | --- | --- |

Hands back whatever security policies are presently in scope, narrowed by the options you pass. Right before the filtering happens, the underlying master list of policies gets refreshed. The default SecurityHandler objects do the work of fetching the most recent policies. Should nothing qualify — either none exist or none survive the filter — the result is null.

Note

Calling login on the default SecurityHandler objects first can surface additional policies that would otherwise be missed.

This runs solely within a console event or an application initialization event, and Adobe Reader does not provide it.

Parameters

Parameter

Description

bUI

(optional) Governs whether the UI is permitted to appear. The fallback is false.

oOptions

(optional) A SecurityPolicyOptions object holding the criteria applied when narrowing the returned policy list. Leave it out and every policy that turns up is handed back.

| --- | --- |

Returns

An array of SecurityPolicyOptions objects or null.

SecurityPolicyOptions object

These are the properties carried by a SecurityPolicyOptions object:

Property

Description

bFavorites

Omit it and Favorite status plays no part in the filtering. Set it true and only Favorite policies come back; set it false and only non-Favorite policies come back.

cHandler

Omit it and the security filter plays no part in the filtering. Supply it and only policies matching that security filter are returned. Allowed entries live in security Constants (consult the HandlerName object). Pass at most one value.

cTarget

Leave it undefined and the target plays no part in the filtering. Define it and only policies whose target matches are returned. Allowed entries live in the EncryptTarget object of security constants. Pass at most one value.

| --- | --- |

Example 1: Pull the favorite PPKLite policies and print each name. Here security.PPKLiteHandler is used (consult security constants).

```
var options = { bFavorites:true, cHandler:security.PPKLiteHandler };
var policyArray = security.getSecurityPolicies( { oOptions: options } );
for( var i = 0; i < policyArray.length; i++)
    console.println( policyArray[i].name );
```

Example 2: Drive the login, then grab the APS policies and print each name. Here security.APSHandler is used (consult security constants).

```
var aps = security.getHandler( security.APSHandler, true );
aps.login();
var options = { cHandler: security.APSHandler };
var policyArray = security.getSecurityPolicies({
    bUI: true,
    oOptions: options });
for(var i = 0; i < policyArray.length; i++)
    console.println( policyArray[i].name );
```

### importFromFile

Version (Key)

Save-Prefs

Security

Product

6.0

No

Yes

Not available in Reader

| --- | --- | --- | --- |

Pulls in a raw data file and yields the contents as an object whose type comes from cType. Whatever file you bring in has to be a valid certificate. Compare also security. exportToFile

Parameters

Parameter

Description

cType

Names the kind of object this method hands back. The lone type that works is "Certificate".

cDIPath

(optional) With bUI set to false, you must give this — it is the device-independent path to the file being opened. With bUI set to true, it instead seeds the path shown in the open dialog box.

bUI

(optional) Set true to have the user pick the file to bring in. The fallback is false.

cMsg

(optional) With bUI true, the caption shown on the open dialog box. Leave cMsg out and the standard caption applies.

| --- | --- |

Returns

A Certificate object.

Example:

```
var oMyCert = security.importFromFile("Certificate", "/c/myCert.cer");
```

### importSettings

Version (Key)

Save-Prefs

Security

Product

9.1

No

Yes

Not available in Reader

| --- | --- | --- | --- |

Offers a slice of what Preferences > Security panel > Security Settings > Import does, except the settings arrive from an embedded file. Through it, digital IDs can be brought in from an attached acrobat security settings file when a button in the host document is clicked. Bear in mind that this method moves digital IDs only; trust settings and every other security setting stay untouched. The triggers it accepts are limited to a console, batch, or field mouse up event.

Build the file you plan to embed by exporting the settings through Preferences > Security panel > Security Settings > Export. Take the case below: with the script wired to a button click event and the document that this refers to put together properly, clicking the button pops up a basic import dialog for digital IDs.

Note

For a security settings file to count as valid, it has to be certified.

Parameters

Parameter

Description

oDocObj

Stands in for the document, and inside a running script this is normally just this.

cFilename

Names the embedded file within oDocObj that holds a security settings file. There is a working cap on how long the file name may be; overshoot it and the import does not go through.

bSimplifiedUI

Pass true to favor a simplified user interface where feasible, or false to skip it. With digital IDs, that pared-down interface shows up only when exactly one ID is being brought in. Bring in more than one, or set bSimplifiedUI false, and you instead get a list of IDs.

| --- | --- |

Returns

A count of the digital IDs that were installed, or -1 when the operation is cancelled.

Example:

```
security.importSettings(this, "ids.acrobatsecuritysettings", true);
```
