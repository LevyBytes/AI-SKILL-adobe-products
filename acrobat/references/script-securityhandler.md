# Securityhandler, Securitypolicy

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: SecurityHandler; SecurityPolicy.

## SecurityHandler

### JavaScript APIs — SecurityHandler

You reach signature, encryption, and directory features through SecurityHandler objects. The exact properties and methods differ from one security handler to the next. What follows lays out every property and method a security object might carry. Any given SecurityHandler object is free to implement some, all, or none of them.

The way to get hold of a SecurityHandler object is the security.getHandler method.

Acrobat 5.0 brought the JavaScript interface for Adobe.PPKLite signatures; everything else in that JavaScript interface landed in Acrobat 6.0. Before Acrobat 6.0, Acrobat offered no way to drive JavaScript inside third-party security handlers.

Not every security handler speaks JavaScript, and among those that do, not all are wired for every security operation. A third-party public key security handler may speak JavaScript, but only when it adopts the new PubSec programming interface that arrived in Acrobat 6.0.

Among the JavaScript-enabled handlers Adobe ships:

Signatures and encryption both fall to the Adobe.PPKLite security handler. Under Windows it reaches directories by way of the Microsoft Active Directory Scripting Interface (ADSI).

A local address book plus directory operations come from the Adobe.AAB security handler.

Note

For password encryption of documents the Standard security handler is used, and as a rule it is not JavaScript-enabled. That said, from Acrobat 7.0 onward you can encrypt with Standard security via predefined policies. Look to encryptUsingPolicy for the specifics.

From Acrobat 7.0 onward as well, encryption through the encryptUsingPolicy method can lean on the Adobe.APS handler. This handler likewise exposes a directory by way of the directory services, yet since that directory hands back no certificates, its broad usefulness is narrow.

Note

The only route to a SecurityHandler object is the Security object getHandler method. That method works exclusively in batch, console, and application initialization events (see Privileged context for details) and is present in Adobe Reader.

### SecurityHandler properties

### appearances

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

Yes

All

Array

R

| --- | --- | --- | --- | --- | --- |

Holds the language-dependent names of the user-configured appearances on hand for the named security handler. Appearances supply the on-page look of a signature once a signature field is signed. When signing a signature field through the Field object signatureSign method, you name an appearance via a signature info object property.

Adobe signature plug-ins draw on a standard signature appearance module that Acrobat supplies, and third-party signature plug-ins may draw on it too. Out of the box this standard module carries a single appearance, and users can extend it with more. The name of that one built-in appearance, shown as Standard Text in the user interface, is left out of this property.

Where a security handler offers no appearance selection, this property comes back null.

### digitalIDs

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

R

| --- | --- | --- | --- | --- | --- |

Holds the certificates tied to the digital IDs this security handler currently has selected.

What comes back is a generic object carrying these properties:

Property

Type

Version (Key)

Description

oEndUserSignCert

Certificate object

6.0

For signing, this SecurityHandler object turns to the certificate tied to the digital IDs presently selected. With nothing selected, the property reads undefined.

oEndUserCryptCert

Certificate object

6.0

When this SecurityHandler object encrypts a document, it relies on the certificate tied to the digital IDs presently selected. With nothing selected, the property reads undefined.

certs

Array of Certificate objects

6.0

Every digital ID available to this SecurityHandler object has a matching certificate, and they arrive here as an array.

stores

Array of Strings

6.0

One string per Certificate object, each naming the store that holds the digital ID. The exact string is the security handler's call. With Adobe.PPKLite the permitted entries are 'PKCS12' and 'MSCAPI'.

| --- | --- | --- | --- |

Every digital ID sitting in Password-protected digital ID files — PKCS#12 as well as APF — is handed back by the Adobe.PPKLite security handler, and on Windows it adds in IDs kept in the Windows (MSCAPI) store.

The user-interface can set both oEndUserSignCert and oEndUserCryptCert. On top of that, the login method can set oEndUserSignCert. The upshot: oEndUserCryptCert surfaces only when the Security Handler object came from getHandler with bUIEngine turned on.

Example: Write out to a file the certificate tied to the digital IDs presently selected.

```
var sh = security.getHandler( "Adobe.PPKMS", true );
var ids = sh.digitalIDs;
var oCert = ids.oEndUserSignCert;
security.exportToFile( oCert, "/c/MySigningCert.cer" );
```

### directories

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

The Directory objects on hand for this Security Handler, gathered into an array. Use the newDirectory method to spin up fresh Directory objects.

### directoryHandlers

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

The language-independent names of the directory handlers on hand for the named security handler, gathered into an array. Take the Adobe.PPKMS security handler: it carries a directory handler called Adobe.PPKMS.ADSI that fields queries via the Microsoft Active Directory Script Interface (ADSI). To bring a new Directory object online through its info property, you need valid directory handler names.

### docDecrypt

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

Comes back true when the security handler can decrypt PDF files.

### docEncrypt

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

Comes back true when the security handler can encrypt PDF files.

### isLoggedIn

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

Yes

All

Boolean

R

| --- | --- | --- | --- | --- | --- |

Comes back true while you are logged into this SecurityHandler object. Consult the login method.

How this property is decided varies by security handler. The Adobe.PPKLite handler reports true once a user is logged in to a profile file — also called a credential file, built as a PKCS#12 file. Adobe.PPKMS reports true at all times.

Example: A throwaway script that shows isLoggedIn in action.

```
var ppklite = security.getHandler("Adobe.PPKLite", true);
console.println( "Is logged in = " + ppklite.isLoggedIn ); // False
ppklite.login( "dps017", "/C/signatures/DPSmith.pfx");
console.println( "Is logged in = " + ppklite.isLoggedIn ); // True
```

### loginName

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

Yes

All

String

R

| --- | --- | --- | --- | --- | --- |

Carries the name of whichever signing digital ID is actively selected for the security handler. Picking a signing credential here may mean the login method has to run first. You get null back when no signing credential is selected, or when the security handler lacks support for this property.

### loginPath

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

Yes

All

String

R

| --- | --- | --- | --- | --- | --- |

The device-independent path to the profile file a user logs in with for the security handler. You get null back when nobody is logged in, when the security handler lacks support for this property, or when the property does not apply to whoever is currently logged in.

### name

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

Yes

All

String

R

| --- | --- | --- | --- | --- | --- |

The language-independent name of the security handler. For the Default Certificate, Windows Certificate, and Entrust Security Handlers, sample values run Adobe.PPKLite, Adobe.PPKMS, and Entrust.PPKEF . Support for this property is mandatory across every security handler.

### signAuthor

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

Reports whether the security handler can produce certified documents. Such a document carries two signatures at once — a byte-range signature and an object signature. Walking the document's object tree yields the object signature, which serves to catch and block changes to a document. Specifics on modification detection and prevention (MDP) settings live under the mdp property of the SignatureInfo object.

### signFDF

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

Signals that signing FDF files is within the security handler's reach.

### signInvisible

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

Yes

All

Boolean

R

| --- | --- | --- | --- | --- | --- |

Reports whether the security handler can produce invisible signatures.

### signValidate

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

Signals whether validating signatures is within the security handler's reach.

### signVisible

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

Yes

All

Boolean

R

| --- | --- | --- | --- | --- | --- |

Reports whether the security handler can produce visible signatures.

### uiName

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

Yes

All

String

R

| --- | --- | --- | --- | --- | --- |

The language-dependent string tied to the security handler. It reads well in user interfaces. Support for this property is mandatory across every security handler.

### validateFDF

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

Comes back true when the security handler can validate signatures over FDF files.

### SecurityHandler methods

### login

Version (Key)

Save-Prefs

Security

Product

5.0

No

Yes

All

| --- | --- | --- | --- |

Opens a route for getting at and choosing digital IDs for one particular Security Handler. From the user interface you can pick a default digital ID that sticks around either forever or just while the application stays open. Once such a pick is made through the UI, logging into a Security Handler before using the digital ID may no longer be needed.

Which parameters apply tends to hinge on the specific handler. What the Adobe.PPKLite and Adobe.PPKMS handlers do is laid out below.

For backward compatibility you may pass cPassword and cDIPath, or alternatively fold them in as properties of the oParams object. That second route became the calling convention of choice as of Acrobat 6.0.

Compare also logout, newUser, and loginName.

Parameters

Parameter

Description

cPassword

(optional, Acrobat 5.0) Whatever password unlocks the password-protected digital ID. To get at digital ID files and at PKCS#11 devices, Adobe.PPKLite leans on this parameter.

cDIPath

(optional, Acrobat 5.0) A device-independent path aimed at either the password-protected digital ID file or a PKCS#11 library. Adobe.PPKLite leans on this parameter.

oParams

(optional, Acrobat 6.0) A LoginParameters object whose parameters are tailored to one particular SecurityHandler object. Its shared fields appear below. Because those fields take in the cDIPath and cPassword values, the parameter list can be written several ways.

bUI

(optional, Acrobat 6.0) Flip to true to log the user in through the user interface. Leave it false and the default engine tied to the user interface stays out of play, with the digital ID's logged in state kept off the Security Settings dialog box. Any security handler backing this method ought to back this attribute.

| --- | --- |

Hands back true once the login goes through, false if it does not.

LoginParameters Object

Parameters for the login method ride inside this generic JavaScript object. Its properties are:

Property

Type

Version (Key)

Description

cDIPath

String

5.0

Points at a file holding the digital ID or a PKCS#11 library. Backed by the Adobe.PPKLite security handler.

cPassword

String

6.0

A password that authenticates the user. It can open a password-protected digital ID file or reach a PKCS#11 device. Backed by the Adobe.PPKLite security handler. Keep in mind that Acrobat makes no promise about obfuscating this password in memory.

cPFX

String

7.0

(optional) A hex-encoded PFX serving as the login target. Hand it over and it wins out over cDIPath. Its use is internal only. As things stand, JavaScript gives you no route to pull a hex encoded PFX file.

oEndUserSignCert

generic object

6.0

Picks a digital ID meant for end-user signing. What you assign is a Certificate object — or a generic object whose property names match a Certificate object's — and it pins down the certificate being picked.

A given handler may not require this method at all. Say you are logged in with Adobe.PPKLite to a PKCS#12 file that holds one signing digital ID: no signing credential needs picking. The binary and SHA1Hash properties of this object must be processable by every security handler. Where bUI is true, this object is allowed to be empty.

cMsg

String

6.0

Text to surface in the login dialog box whenever bUI is true.

cURI

String

7.0

URI for reaching a server. Backed by the Adobe.APS and Adobe.PPKLite handlers. For Adobe.PPKLite, the URI names a Roaming Credential server.

cUserId

String

7.0

The user name applied when reaching a server. Backed by the Adobe.APS and Adobe.PPKLite handlers.

cDomain

String

7.0

The domain name applied when reaching a server. Only the Adobe.APS handler backs it.

iSlotID

Integer

7.0

Names the slot ID of a PKCS#11 device to log into. Only the Adobe.PPKLite handler backs this parameter.

cTokenLabel

String

7.0

Names the token label of a PKCS#11 device to log into. Only the Adobe.PPKLite handler backs this parameter.

| --- | --- | --- | --- |

Example 1: Log in and log out.

```
// Use the "Adobe.PPKLite" security handler object for the UI
var ppklite = security.getHandler( security.PPKLiteHandler, true );
var oParams = { cPassword: "dps017", cDIPath: "/C/DPSmith.pfx" }
ppklite.login( oParams );
<...
.. make a signature field and sign it ......>
ppklite.logout();
```

Use UI to select a credential, when already logged in.

```
ppklite.login(
{ oParams:
    { oEndUserSignCert: {},

     cMsg: "Select your Digital ID" },
    bUI : true
} );
```

Log in and select the signing credentials

```
var oCert = { SHA1Hash: "00000000" };
ppklite.login(
{ oParams:
    { cDIPath: "/C/test/DPSmith.pfx",

         cPassword: "dps017",
        oEndUserSignCert: oCert,
        cMsg: "Select your Digital ID"
    },

 bUI : true
});
```

Example 2: Reach for the "Adobe.PPKMS" security handler object, then choose which credentials sign.

```
var ppkms = security.getHandler( "Adobe.PPKMS" );
var oCert = myCerts[0];
ppkms.login( { oParams: { oEndUserSignCert: oCert } } );
```

Example 3: Reach for security.APSHandler, see security constants.

```
var aps = security.getHandler( security.APSHandler, true );
var oParams = { cUserName: "Acrobat", cPassword: "adobedon" };
aps.login( oParams );
<...
.. encrypt a document using this handle and a policy id .....>
aps.logout();
```

For the full story on signing a PDF document, turn to signatureSign.

### logout

Version (Key)

Save-Prefs

Security

Product

6.0

No

Yes

All

| --- | --- | --- | --- |

Closes out the session for the SecurityHandler object. Adobe.PPKLite calls on this method; Adobe.PPKMS does not.

Turn as well to the login method.

Returns

As of Acrobat 6.0, hands back true when the logout goes through and false otherwise. Earlier Acrobat releases produced no return value at all.

### newDirectory

Version (Key)

Save-Prefs

Security

Product

5.0

P

Yes

All

| --- | --- | --- | --- |

Hands back a fresh Directory object. Before this object earns persistence and before any search can use it, it has to be activated through its info property. Reach for the directories property to track down Directory objects that already exist.

Returns

A new Directory object

### newUser

Version (Key)

Save-Prefs

Security

Product

5.0

No

Yes

All

| --- | --- | --- | --- |

Backs enrollment with the Adobe.PPKLite and Adobe.PPKMS security handlers by minting a fresh self-sign credential.

Note

Overwriting a file that already exists is something this method will not let the user do.

Parameters

Parameter

Description

cPassword

(optional) Whatever password is needed to reach the password-protected digital ID file. Adobe.PPKMS pays this parameter no mind.

cDIPath

(optional) Where the password-protected digital ID file sits, given as a device-independent path. Adobe.PPKMS pays this parameter no mind. - As of Acrobat 6.0, cDIPath has to be a safe path (see Safe path) and finish with the extension .pfx.

oRDN

The relative distinguished name (RDN), given as an RDN object, that carries the issuer or subject name for a certificate. Only cn is required. Should the country c appear, it must run two characters under the ISO 3166 standard (say, "US").

oCPS

(optional, Acrobat 6.0) A generic object holding certificate policy information slated for the Certificate Policy extension of the certificate. The object's properties are: - oid is required and points to the certificate policy object identifier. - url (optional) is a URL leading to fuller information about the policy the certificate was issued under - notice (optional) is a trimmed-down version of that information, tucked into the certificate.

bUI

(optional, Acrobat 6.0) Set true to let the user interface drive enrollment. Every security handler backing this method backs this parameter.

cStore

(optional, Acrobat 7.0) A string naming the store where the minted credential must land. With the Adobe.PPKLite security handler, the legal store identifiers are "PKCS12" and "MSCAPI". Drop this parameter while supplying cDIPath and the credential lands in a PKCS#12 file; otherwise it lands in the CAPI store.

| --- | --- |

Returns

true on success; on failure it throws an exception.

Example 1: Mint a new PPKLite self-sign credential (Acrobat 5.0 syntax)

```
var ppklite = security.getHandler(security.PPKLiteHandler);
var oRDN = { cn: "Fred NewUser", c: "US" };
var oCPS = {oid: "1.2.3.4.5",
    url: "http://www.example.com/mycps.html",
    notice: "This is a self generated certificate, hence the "
        + "recipient must verify it's authenticity through an out "
        + "of band mechanism" };
ppklite.newUser( "testtest", "/d/temp/FredNewUser.pfx", oRDN, oCPS);

// Alternate generic object syntax, allowing additional parameters
var oParams = {
    cPassword : "myPassword",
    cDIPath : "/d/temp/FredNewUser.pfx",
    oRDN : oRDN,
    oCPS : oCPS,
    bUI : false
};
ppklite.newUser( oParams );
```

Example 2: Pull a certificate out of an already-signed field and build the RDN from it

```
var f = this.getField( "mySignature" );
f.signatureValidate();
var sigInfo = f.signatureInfo();
var certs = sigInfo.certificates;
var oSubjectDN = certs[0].subjectDN;

ppklite.newUser({
    cPassword: "dps017",
    cDIPath: "/c/temp/DPSmith.pfx",
    oRDN: oSubjectDN
});
```

### setPasswordTimeout

Version (Key)

Save-Prefs

Security

Product

5.0

No

Yes

All

| --- | --- | --- | --- |

Fixes how many seconds may pass between signatures before the password lapses. The lone handler backing this method is Adobe.PPKLite, where a new user starts at a default timeout of 0 (the password is always required).

Parameters

Parameter

Description

cPassword

The password it takes to set the timeout value.

iTimeout

How long the timeout runs, in seconds. Use 0 to always expire — that is, always require the password. Use 0x7FFFFFFF to never expire.

| --- | --- |

Returns

Should the user still be logged out of the Adobe.PPKLite security handler, or should it fail for any other cause, an exception is thrown.

Example: Here the script logs in to the PPKLite security handler and pins the password timeout at 30 seconds. Once that timeout lapses — 30 seconds here — the signer has to hand over a password. While it has yet to lapse, no password is asked for.

```
var ppklite= security.getHandler( "Adobe.PPKLite" );
ppklite.login( "dps017", "/d/profiles/DPSmith.pfx" );

 ppklite.setPasswordTimeout( "dps017", 30 );
```

## SecurityPolicy

### JavaScript APIs — SecurityPolicy

Version (Key)

Save-Prefs

Security

Product

7.0

No

Yes

Not available in Reader

| --- | --- | --- | --- |

A bundle of security settings for applying encryption to a document is what the Security Policy object stands for. Both getSecurityPolicies and chooseSecurityPolicy hand it back as their return value.

### SecurityPolicy properties

Property

Type

Access

Description

policyID

String

R

A machine-built string that singles out the Security Policy uniquely. It is not meant for people to read.

On a freshly created SecurityPolicy object you may set this to a known policy ID, which forces any method using that policy to fetch the right security settings before the policy is applied.

name

String

R

The policy name shown in the UI. Localization is possible.

description

String

R

The policy description shown in the UI. Localization is possible.

handler

String

R

An enumerated value naming whichever security handler puts this Security Policy into effect. For the legal entries, consult the HandlerName object inside security constants.

target

String

R

An enumeration value pinpointing the target data that encryption will cover. For the legal entries, consult the EncryptTarget object inside security constants.

| --- | --- | --- | --- |
