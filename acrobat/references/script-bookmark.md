# Bookmark, Catalog, Catalogjob, Certificate ...

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Bookmark; catalog; CatalogJob; Certificate; Collab.

## Bookmark

### JavaScript APIs — Bookmark

Within the bookmark tree shown in the bookmarks navigation panel, a Bookmark object stands for a single node. Bookmarks commonly act as a table of contents, letting the reader jump straight to whatever topics interest them.

### Bookmark properties

### children

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

Array null

R

| --- | --- | --- | --- | --- | --- |

An array holding the Bookmark objects that sit beneath this bookmark in the bookmark tree. Where this bookmark has no children, the property is null.

See also the parent and bookmarkRoot properties.

Example: Dump all bookmarks in the document.

```
function DumpBookmark(bkm, nLevel)
{
    var s = "";
    for (var i = 0; i < nLevel; i++) s += " ";
    console.println(s + "+-" + bkm.name);
    if (bkm.children != null)
        for (var i = 0; i < bkm.children.length; i++)
            DumpBookmark(bkm.children[i], nLevel + 1);
}
console.clear(); console.show();
console.println("Dumping all bookmarks in the document.");
DumpBookmark(this.bookmarkRoot, 0);
```

### color

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

Not available in Reader

Array

R/W (Adobe Reader: R only)

| --- | --- | --- | --- | --- | --- |

Sets a bookmark's color. You define values with gray, RGB, or CMYK color. For how to define color arrays and how their values play into this property, see Color arrays. See also the style property.

Example: The fun script below cycles the top-level bookmark through red, green, and blue.

```
var bkm = this.bookmarkRoot.children[0];
bkm.color = color.black;
var C = new Array(1, 0, 0);
var run = app.setInterval(
    'bkm.color = ["RGB",C[0],C[1],C[2]]; C.push(C.shift());', 1000);
var stoprun=app.setTimeOut(
    "app.clearInterval(run); bkm.color=color.black",12000);
```

### doc

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

Object

R

| --- | --- | --- | --- | --- | --- |

The Doc within which this bookmark lives.

### name

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

Not available in Reader

String

R/W (Adobe Reader: R only)

| --- | --- | --- | --- | --- | --- |

The string of text shown to the reader for this bookmark in the navigation panel.

Example: Put the top-level bookmark in bold.

```
var bkm = this.bookmarkRoot.children[0];
console.println( "Top-level bookmark name: " + bkm.name );
```

The name property also shows up in the example that follows the children property.

### open

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

Not available in Reader

Boolean

R/W (Adobe Reader: R only)

| --- | --- | --- | --- | --- | --- |

Sets whether the bookmark displays its children in the navigation panel (open) or keeps that children subtree collapsed (closed).

### parent

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

Object null

R

| --- | --- | --- | --- | --- | --- |

This bookmark's parent bookmark, or null when this bookmark is the root. See also the children and bookmarkRoot properties.

### style

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

Not available in Reader

Integer

R/W (Adobe Reader: R only)

| --- | --- | --- | --- | --- | --- |

Sets the bookmark font's style: 0 for normal, 1 for italic, 2 for bold, and 3 for bold-italic. See also the color property.

Example: Here the snippet renders the top-level bookmark in boldface.

```
var bkm = this.bookmarkRoot.children[0];
bkm.style = 2;
```

### Bookmark methods

### createChild

Version (Key)

Save-Prefs

Security

Product

5.0

D

No

Not available in Reader

| --- | --- | --- | --- |

Makes a fresh child bookmark at the place you point to.

See also the children property and the insertChild and remove methods.

Parameters

Parameter

Description

cName

The bookmark label the user reads over in the navigation panel.

cExpr

(optional) An expression that gets evaluated each time the user clicks the bookmark. This amounts to making a bookmark with a JavaScript action, of the sort the PDF Reference lays out. By default there is no expression.

nIndex

(optional) The 0-based slot in the bookmark's children array where the new child gets created. It defaults to 0.

| --- | --- |

Example: Place a bookmark at the top of the bookmark panel that jumps you to the document's next page.

```
this.bookmarkRoot.createChild("Next Page", "this.pageNum++");
```

### execute

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Carries out the action attached to this bookmark. The behavior here can vary widely. For a rundown of the usual action types, see the PDF Reference. See also the createChild method.

Example: Build a basic search over the bookmarks. On a hit, the action tied to that bookmark runs.

```
// Document-level or folder-level JavaScript.
function searchBookmarks(bkm, nLevel, bkmName)
{
    if ( bkm.name == bkmName ) return bkm;
    if (bkm.children != null) {
        for (var i = 0; i < bkm.children.length; i++)
        {
            var bkMark = searchBookmarks(
                bkm.children[i], nLevel + 1, bkmName);
            if ( bkMark != null ) break;
        }
        return bkMark;
    }
    return null;
}
// Redefine this function for a more sophisticated compare.
function bmkCompare( name1, name2 )
{
        return ( name1 == name2 );
}
```

The code below kicks off the search. You could run it as field-level JavaScript or fire it from a menu action.

```
var bkmName = app.response({
    cQuestion: "Enter the name of the bookmark to find",
    cTitle: "Bookmark Search and Execute"
});
if ( bkmName != null ) {
    var bkm = searchBookmarks(this.bookmarkRoot, 0, bkmName );
    if ( bkm != null ) bkm.execute();
    else app.alert("Bookmark not found");
}
```

### insertChild

Version (Key)

Save-Prefs

Security

Product

5.0

D

No

Not available in Reader

| --- | --- | --- | --- |

Slots the named bookmark in as a child of this bookmark. Where that bookmark is already part of the bookmark tree, it gets unlinked first, then placed back into the tree. The insertion also gets checked for circularities and refused if any turn up — which stops users from slotting a bookmark in as a child or grandchild of itself. See also the children property and the createChild and remove methods.

Parameters

Parameter

Description

oBookmark

A bookmark object to attach beneath this bookmark as its child.

nIndex

(optional) The 0-based slot in the bookmark's children array where the new child gets inserted. It defaults to 0.

| --- | --- |

Example: Grab the first child bookmark and shift it to the end of the bookmarks.

```
var bm = bookmarkRoot.children[0];
bookmarkRoot.insertChild(bm, bookmarkRoot.children.length);
```

### remove

Version (Key)

Save-Prefs

Security

Product

5.0

D

No

Not available in Reader

| --- | --- | --- | --- |

Strips the bookmark, along with every one of its children, out of the bookmark tree. See also the children property and the createChild and insertChild methods.

Example: Remove all bookmarks from the document.

```
bookmarkRoot.remove();
```

### setAction

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All but Reader

| --- | --- | --- | --- |

Attaches a JavaScript action to a bookmark.

See also the Doc addRequirement and setPageAction methods and the Field object setAction method.

Note

Whatever action this bookmark already had defined gets overwritten by this method.

Parameters

Parameter

Description

cScript

Specifies the JavaScript expression to run each time the user clicks the bookmark.

| --- | --- |

Example: Bind an action onto the bookmark sitting at the very top.

```
var bm = bookmarkRoot.children[0]
bm.setAction("app.beep(0);");
```

## catalog

### JavaScript APIs — catalog

A static object reaching the features delivered by the Acrobat Catalog plug-in. Talking to the catalog object means having that plug-in installed.

Note

You only get the Catalog plug-in (and the catalog object) in Acrobat Pro.

See also the index object, the route by which various indexing operations from the Catalog plug-in get invoked, plus the CatalogJob object.

### catalog properties

### isIdle

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

Acrobat Pro only

Boolean

R

| --- | --- | --- | --- | --- | --- |

Comes back true whenever Catalog has no indexing job under way.

### jobs

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

Acrobat Pro only

Array

R

| --- | --- | --- | --- | --- | --- |

Pulls details on the Catalog jobs. For each Acrobat session, Catalog keeps a roster of its pending, in-progress, and completed jobs. Returns an array of CatalogJob objects.

### catalog methods

### getIndex

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

Acrobat Pro only

| --- | --- | --- | --- |

Takes a given path to a Catalog index and returns an Index object. With the object that comes back you can run assorted indexing operations — building or deleting an index, for example.

Parameters

cDIPath

A Catalog index named by its device-independent path.

| --- | --- |

Returns

The Index object.

### remove

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

Acrobat Pro only

| --- | --- | --- | --- |

Strips the named CatalogJob object out of Catalog's job list. For each Acrobat session, Catalog keeps a roster of pending, in-progress, and completed jobs.

Parameters

Parameter

Description

oJob

The CatalogJob object to drop — the kind handed back by the jobs property and by assorted Index object methods.

| --- | --- |

Example: Delete all jobs that are pending and need complete rebuild.

```
if (typeof catalog != undefined)  {
    for (var i=0; i<catalog.jobs.length; i++){
        var job = catalog.jobs[i];
        console.println("Index: ", job.path);

        if (job.status == "Pending" && job.type == "Rebuild")
            catalog.remove(job);
    }
}
```

## CatalogJob

### JavaScript APIs — CatalogJob

A generic JavaScript object that reports on a job handed to Catalog. The Index object's build method and the catalog.jobs property both return it, and catalog.remove takes it in.

### CatalogJob properties

### path

The job's index given as a device-independent path

Type

Access

String

R

| --- | --- |

### type

Which kind of indexing operation the job carries out.

Type

Access

String

R

| --- | --- |

Possible values are:

```
Build
Rebuild
Delete
```

### status

Where the indexing operation currently stands.

Type

Access

String

R

| --- | --- |

Possible values are:

```
Pending
Processing
Completed
CompletedWithErrors
```

## Certificate

### JavaScript APIs — Certificate

Read-only access to the fields of an X.509 public key certificate is what the Certificate object exposes.

Objects and methods that relate to it include:

security object: importFromFile and getSecurityPolicies

DirConnection object: Search Page

Field object: signatureInfo _ FDF object: signatureValidate _ RDN object

Usage Object

Note

No security restrictions apply to this object.

### Certificate properties

### binary

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

String

R

| --- | --- | --- | --- | --- | --- |

A hex-encoded string holding the certificate's raw byte content.

### issuerDN

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

RDN object

R

| --- | --- | --- | --- | --- | --- |

Delivered as an RDN object, this gives the distinguished name belonging to whoever issued the certificate.

### keyUsage

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

Array of Strings

R

| --- | --- | --- | --- | --- | --- |

Holds the certificate's key usage extension as a string array. Allowed entries are

```
kDigitalSignature    kDataEncipherment    kCRLSign
kNonRepudiation      kKeyAgreement        kEncipherOnly
kKeyEncipherment     kKeyCertSign         kDecipherOnly
```

### MD5Hash

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

String

R

| --- | --- | --- | --- | --- | --- |

Given as a hex-encoded string, the certificate's MD5 digest acts as a one-of-a-kind fingerprint for it.

### privateKeyValidityEnd

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

Date object

R

| --- | --- | --- | --- | --- | --- |

Marks the last date on which using the private key tied to this certificate remains lawful. Should the PKUP extension be absent, or this value be missing from that extension, the figure falls back to the certificate's own expiry date. Acrobat will not allow a digital ID to sign unless it confirms the signing moment falls earlier than the privateKeyValidityEnd date.

### privateKeyValidityStart

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

Date object

R

| --- | --- | --- | --- | --- | --- |

Marks the earliest date from which using the private key tied to this certificate becomes lawful. When the Private Key Usage Period (PKUP) certificate extension is missing, the figure falls back to the certificate's own start-of-validity date. Acrobat will not allow a digital ID to sign unless it confirms the signing moment is later than the privateKeyValidityStart date.

### SHA1Hash

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

String

R

| --- | --- | --- | --- | --- | --- |

Given as a hex-encoded string, the certificate's SHA1 digest acts as a one-of-a-kind fingerprint for it.

### serialNumber

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

String

R

| --- | --- | --- | --- | --- | --- |

Paired with issuerDN, this serves as a one-of-a-kind identifier for the certificate.

### subjectCN

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

String

R

| --- | --- | --- | --- | --- | --- |

The signer's common name.

### subjectDN

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

RDN object

R

| --- | --- | --- | --- | --- | --- |

Delivered as an RDN object, this holds the signer's distinguished name.

### ubRights

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

Rights object

R

| --- | --- | --- | --- | --- | --- |

Returned as a generic Rights object, this lists which application rights the certificate is able to switch on.

Rights Object

These are the properties carried by a Rights object.

Property

Type

Access

Description

mode

String

R

The candidate values are:

Evaluation: rights this certificate turns on for the document hold good for however long the certificate stays valid.

Production: rights this certificate turns on for the document hold good permanently.

Adobe's PDF viewer makes no use of this value at present.

rights

Array of Strings

R

A string array naming the application rights this certificate is able to switch on. The candidate values are:

FormFillInAndSave: permission to complete forms — signature fields aside — and store the edited file.

FormImportExport: permission to bring form data in and send it out.

FormAddDelete: permission to insert or remove a form field.

SubmitStandalone: permission to submit a document when no browser is involved.

SpawnTemplate: permission to spawn page templates.

Signing: permission to sign form fields that already exist in a document.

AnnotModify: permission to author, remove, and edit comments.

AnnotImportExport: permission to bring annotations in and send them out.

BarcodePlaintext: permission to render a form field's look as a plain-text barcode.

AnnotOnline: lets commenting happen online. Permits sending any of the document's annotations up to a server and pulling annotations back down from one. It does not permit folding those annotations into the document.

FormOnline: switches on forms-oriented online channels like SOAP or Active Data Object.

EFModify: permission to author, remove, edit, and import named embedded files. File attachment annotations fall outside its scope.

| --- | --- | --- | --- |

### usage

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

Usage object

R

| --- | --- | --- | --- | --- | --- |

Returned as a Usage object, this states the roles for which the certificate is permitted inside the Acrobat environment.

Usage Object

Sitting in the certificate.usage property, this generic JavaScript object stands for a certificate usage value. Its properties are as follows.

Property

Type

Access

Description

endUserSigning

Boolean

R

true when the certificate can serve for end-user signing.

endUserEncryption

Boolean

R

true when the certificate can serve for end-user encryption.

| --- | --- | --- | --- |

Example: encrypt whatever document is open right now for every contact held in the address book. Any address-book contact carrying sign-only certificates, CA certificates, or no certificate at all — along with anyone otherwise ill-suited to encryption — gets left off the recipient list that results.

```
var eng = security.getHandler( "Adobe.AAB" );
var dc = eng.directories[0].connect();
var recipients = dc.search();

var filteredRecipients = new Array();
for( i = 0; i < recipients.length; ++i ) {
    if( recipients[i].defaultEncryptCert &&
        recipients[i].defaultEncryptCert.usage.endUserEncryption ) {
        filteredRecipients[filteredRecipients.length] = recipients[i];
        continue;
    }
    if(recipients[i].certificates) {
        for( j = 0; j < recipients[i].certificates.length; ++j )
            if( recipients[i].certificates[j].usage.endUserEncryption ) {
                filteredRecipients[filteredRecipients.length]

                     = recipients[i];
                continue;
            }
    }
}
this.encryptForRecipients({
    oGroups:[{userEntities: filteredRecipients}]
});
```

### validityEnd

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

Date object

R

| --- | --- | --- | --- | --- | --- |

The date on which the certificate ceases to be valid. Acrobat will not allow a digital ID to sign unless it confirms the signing moment falls earlier than the validityEnd date.

### validityStart

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

Date object

R

| --- | --- | --- | --- | --- | --- |

The date from which the certificate becomes valid. Acrobat will not allow a digital ID to sign unless it confirms the signing moment is later than the validityStart date.

## Collab

### JavaScript APIs — Collab

Collaboration capabilities are embodied by this static object.

### Collab methods

### addStateModel

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Registers a fresh state model with Acrobat. The set of legitimate states an annotation built on the model may hold is laid out by a state model (consult the Annotation object for how to read and write an annotation's state). Such models can map out the workflow a document review follows and can drive review management.

See also removeStateModel, getStateInModel, and transitionToState.

Parameters

Parameter

Description

cName

A language-neutral identifier, one of a kind, for the State Model.

cUIName

The name shown for the state model within the interface. A localized string is the expected value.

oStates

A States object spells out the model's states.

cDefault

(optional) Picks one of the model's states to serve as the fallback when nothing else is set. By default no fallback state exists.

bHidden

(optional) Controls whether the state model stays out of sight in the state model interface. It defaults to false, so the State Model appears.

bHistory

(optional) Controls whether the state model keeps an audit trail. Retaining that trail consumes extra room in the file. It defaults to true.

| --- | --- |

States object

Passed in as the oStates parameter, this generic object captures a collection of states within a state model. Each key in the object literal is a one-of-a-kind state identifier, while each matching value is an object carrying these properties:

Property

Description

cUIName

The state's UI label (display name).

oIcon

(optional) An Icon Stream object shown in the UI to represent the state.

| --- | --- |

Example: register a state model carrying the one-of-a-kind name “ReviewStates”:

```
Collab.addStateModel({
    cName: "ReviewStates",
    cUIName: "My Review",

     oStates:
    {
        "initial": {cUIName: "Haven't reviewed it"},
        "approved": {cUIName: "I approve"},
        "rejected": {cUIName: "Forget it"},
        "resubmit": {cUIName: "Make some changes"}
    },
    cDefault: "initial"
});
```

Calling Collab.removeStateModel takes a state model away.

### documentToStream

Version (Key)

Save-Prefs

Security

Product

7.0.5

No

Yes

All

| --- | --- | --- | --- |

Writes out a duplicate of a Doc and hands back its contents in the form of a stream object.

This call leaves the document's dirty property as it was and makes no change to the original document.

Parameters

oDocument

The Doc.

| --- | --- |

Returns

A ReadStream object.

### removeStateModel

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Takes away a state model that an earlier addStateModel call had registered. Pulling a state model does nothing to the state data held on individual annotations. Drop the model and register it once more, and every annotation's state data is still on hand.

See also addStateModel, getStateInModel, and transitionToState.

Parameters

Parameter

Description

cName

The same one-of-a-kind, language-neutral identifier for the state model that addStateModel received.

| --- | --- |

Example: picking up where the addStateModel sample left off, drop the “ReviewStates” state model:

```
// Remove the state model
Collab.removeStateModel("ReviewStates");
```
