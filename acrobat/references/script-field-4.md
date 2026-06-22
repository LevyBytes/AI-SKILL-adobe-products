# Field (part 4)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## JavaScript APIs — Field

String

R/W

The action's name, independent of language. Values are:

All: every field throughout the document gets locked.

Include: locking is limited to the fields named in fields.

Exclude: everything gets locked apart from the fields named in fields.

fields

Array of Strings

R/W

A string array holding the field names. Needed whenever action is set to Include or Exclude.

| --- | --- | --- | --- |

### signatureGetModifications

Version (Key)

Save-Prefs

Security

Product

7.0

No

No

All

| --- | --- | --- | --- |

Hands back an object describing the changes applied to the document since its signature field was signed. Only the delta between the document's present state and its signed state is captured. Objects that came and went — added after signing but then deleted — go unreported.

Returns

An object holding the modification details, carrying the properties listed below:

Property

Type

Description

formFieldsCreated

Array of Field objects

The form fields that were created once signing had occurred.

formFieldsDeleted

Array of Generic objects

The form fields removed after signing. Every generic object here is a string shaped as name: type.

formFieldsFilledIn

Array of Field objects

The form fields that got filled in after signing.

formFieldsModified

Array of Field objects

The form fields altered after signing. Filling in a form field does not count as modification in this sense.

annotsCreated

Array of Annotation objects

The annotations brought into being after signing. Should an annotation be transient — a pop-up generated on the fly, say — its array slot holds a string shaped as author: name: type.

annotsDeleted

Array of Generic objects

The annotations removed after signing. Every generic object here takes the form author: name: type.

annotsModified

Array of Annotation objects

The annotations changed after signing. Should an annotation be transient — a pop-up generated on the fly, say — its array slot holds a string shaped as author: name: type.

numPagesCreated

Integer

How many pages were added once signing had taken place.

numPagesDeleted

Integer

How many pages were removed once signing had taken place.

numPagesModified

Integer

How many pages had their content changed after signing (adding, deleting, or modifying annotations and form fields is not treated as page modification here).

spawnedPagesCreated

Array of Strings

The pages spawned after signing, each one accompanied by the name of its source template.

spawnedPagesDeleted

Array of Strings

The spawned pages removed after signing, each one accompanied by the name of its source template.

spawnedPagesModified

Array of Strings

The spawned pages changed after signing, each one accompanied by the name of its source template.

| --- | --- | --- |

Example: print the modification details out to the console.

```
var sigField = this.getField( "mySignature" );
var sigMods = sigField.signatureGetModifications();

var formFieldsCreated = sigMods.formFieldsCreated;
for( var i = 0; i < formFieldsCreated.length; i++ )
    console.println( formFieldsCreated[i].name );

var formFieldsDeleted = sigMods.formFieldsDeleted;
for( var i = 0; i < formFieldsDeleted.length; i++ )
    console.println( formFieldsDeleted[i].name );

var formFieldsFilledIn = sigMods.formFieldsFilledIn;
for( var i = 0; i < formFieldsFilledIn.length; i++ )
    console.println( formFieldsFilledIn[i].name );

var formFieldsModified = sigMods.formFieldsModified;
for( var i = 0; i < formFieldsModified.length; i++ )
    console.println( formFieldsModified[i].name );

var spawnedPages = sigMods.spawnedPagesCreated;
for( var i = 0; i < spawnedPages.length; i++ )
    console.println( spawnedPages[i] );

console.println( sigMods.numPagesDeleted );
```

### signatureGetSeedValue

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Hands back a SeedValue object carrying the seed value settings of a signature field. Those seed values steer aspects of the signature such as how it looks, the reasons offered for signing, and the signer.

See signatureSetSeedValue.

Returns

A SeedValue object.

Example: reach the seed value belonging to a signature field.

```
var f = this.getField( "sig0" );
var seedValue = f.signatureGetSeedValue();
// displays the seed value filter and flags
console.println( "Filter name:" + seedValue.filter);
console.println( "Flags:" + seedValue.flags);
// displays the certificate seed value constraints
var certSpec = seedValue.certspec;
console.println( "Issuer:" + certspec.issuer);
```

### signatureInfo

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Hands back a SignatureInfo object holding the signature's properties, captured as a snapshot at the instant of the call. The security handler in use may tack on further properties unique to itself.

Note

This method carries no timing restrictions on when it may run. That said, the named security handler, oSig, will not necessarily be on hand at all times. Consult the security. getHandler method for specifics.

Certain properties of a signature handler — certificates among them, which belongs to the SignatureInfo object — can come back null until validation has occurred. For that reason, invoke signatureInfo once more after signatureValidate.

Parameters

Parameter

Description

oSig

(optional) Which SecurityHandler object retrieves the signature properties. Leave it out and the security handler falls to the user preferences — typically whichever handler produced the signature.

| --- | --- |

Returns

A SignatureInfo object carrying the signature's properties. The same kind of object also turns up when signing signature fields, when signing FDF objects, and with the FDF object's signatureValidate method.

Example: reach into a SignatureInfo object's properties.

```
// Get all info
var f = getField( "Signature1" );
f.signatureValidate();
var s = f.signatureInfo();
console.println( "Signature Attributes:" );
for(i in s) console.println( i + " = " + s[i] );

// Get particular info
var f = this.getField("Signature1"); // uses the ppklite sig handler
var Info = f.signatureInfo();
// Some standard signatureInfo properties
console.println("name = " + Info.name);
console.println("reason = " + Info.reason);
console.println("date = " + Info.date);

// Additional signatureInfo properties from PPKLite
console.println("contact info = " + Info.contactInfo);

// Get the certificate; first (and only) one
var certificate = Info.certificates[0];

// Common name of the signer
console.println("subjectCN = " +  certificate.subjectCN);
console.println("serialNumber = " +  certificate.serialNumber);

// Display some information about the distinguished name of signer
console.println("subjectDN.cn = " + certificate.subjectDN.cn);
console.println("subjectDN.o = " +  certificate.subjectDN.o);
```

### signatureSetSeedValue

Version (Key)

Save-Prefs

Security

Product

6.0

D

Yes

Not allowed in Reader: Only available in Acrobat products

| --- | --- | --- | --- |

Records the properties applied when signature fields get signed. These properties live inside the signature field and survive untouched when the field is signed, when the signature is cleared, or when resetForm runs. Read them back through signatureGetSeedValue.

A few things to bear in mind whenever you assign seed values:

Avoid setting seed values on documents already signed; on certified documents they cannot be set at all. Their main purpose is configuring fields on documents that have yet to be signed.

Assigning a seed value frequently makes Acrobat skip its own defaults or stop displaying them. Take preset reasons, which the registry stores: naming a signing reason makes the application disregard that registry list, leaving only the custom reasons on view.

Note

This method may run inside batch, console, or application-initialization events. See Privileged context.

A certifying signature is one whose SignatureInfo object has an mdp property set to allowNone, default, or defaultAndComments.

Not allowed in Adobe Reader.

For a fuller grasp of how signature seed values are used, consult the Acrobat 8.0 Security Feature User Reference.

Parameters

Parameter

Description

oSigSeedValue

A SeedValue object that carries the signature seed value properties.

| --- | --- |

SeedValue Object

A generic JavaScript object — handed to signatureSetSeedValue and returned by signatureGetSeedValue — that stands for a signature seed value. Its properties are these:

Property

Type

Access

Description

appearanceFilter

String

R/W

(Acrobat 9.0) A string giving the named appearance the AppearanceFilter seed value is meant to match.

certspec

object

R/W

A seed value CertificateSpecifier object. Its properties are listed under CertificateSpecifier Object.

digestMethod

Array of strings

R/W

(Acrobat 8) A roster of digest methods that are acceptable for use during signing. Permitted string values are SHA1, SHA256, SHA384, SHA512, MD5, and RIPEMD160.

| --- | --- | --- | --- |

Note

This applies solely when the DigitalID holds RSA public/private keys. Should it instead hold DSA public/private keys, the value stays fixed at SHA1.

Whether this counts as a required constraint is signaled by the flags property.

filter

String

R/W

The signing security handler's name, given independently of language.

Where filter is given and the flags property marks this entry as a required constraint, signing must use the handler this entry names, or else not proceed at all. Where flags marks it optional instead, that handler should be used when available; if it is unavailable, another handler may stand in.

flags

Number

R/W

A collection of bit flags that govern which of this object's properties below are mandatory. Form the value as the logical OR of the values that follow, each switched on when its matching property is required:

1: filter

2: subFilter

4: version

8: reasons

16: legalAttestations

32: shouldAddRevInfo

64: digestMethod\*

128: lockDocument

256: appearanceFilter

Usage: 1 specifies filter, 3 specifies filter and sub-filter, and 11 specifies filter, sub-filter, and reasons. If this field is not present, all properties are optional.

legalAttestations

Array of Strings

R/W

(Acrobat 7.0) The set of legal attestations available to the user when producing a Modification Detection and Prevention (MDP) (certified) signature.

Whether this is required or optional is conveyed by the matching flag within the flags property.

lockDocument

String

R/W

(Acrobat 9.0) A string set to whichever of the three LockDocument seed value states applies. Values are

auto

true

false

Any other value will not be set.

mdp

String

R/W

(Acrobat 7.0) Which MDP setting applies while signing the field. Values are

allowNone default defaultAndComments

allowAll, though legal, nullifies the MDP effect so that no certification signature can serve this field — the result is an approval signature rather than a certification one.

Each value is a unique identifier; the table named Modification Detection and Prevention (MDP) Values documents them.

reasons

Array of Strings

R/W

The set of reasons a user may pick from while signing.

(Acrobat 8.0) Should this array hold just one element, that element being a lone period ‘.’, and should the flags property mark reasons as required, then Acrobat 8 hides the reason-entry UI during signing. This takes precedence over the user's preference.

Should this array be empty while reasons are marked required, an exception gets thrown.

shouldAddRevInfo

Boolean

R/W

(Acrobat 8) When set to true, directs the application to perform revocation checking on the signing certificate and its associated chains, folding all that revocation data into the signature itself.

Pertinent only when subFilter is adbe.pkcs7.detached or adbe.pkcs7.sha1, and inapplicable to adbe.x509.rsa_sha1. So if subFilter is adbe.x509.rsa_sha1 and revocation information is required, the signing operation fails.

Where shouldAddRevInfo is true and the flags property marks this a required constraint, the work just described has to succeed; if it cannot, signing must fail.

The default value is false.

subFilter

Array of Strings

R/W

An array listing the signature formats that are acceptable. For the known formats, see the Signature Info object's subFilter property.

Whichever name appears earliest in the array while matching an encoding the signature handler supports is the encoding that ends up being used to sign. Where subFilter is given and the flags property marks this entry as a required constraint, the earliest matching encodings must be used for signing, or signing must not occur. Where the flags property marks it an optional constraint, the earliest matching encoding should be used if available; failing that, a different encoding may be used.

timeStampspec

Object

R/W

(Acrobat 7.0) A Seed Value timeStamp Specifier object. Through its url and flags properties it names a timestamp server. See Seed value timeStamp specifier object.

version

Number

R/W

The lowest version number the signature handler must have to sign this signature field. Valid values are 1 and 2. With 1, the parser has to recognize every seed value dictionary entry laid out in PDF 1.5. With 2, it has to recognize every seed value dictionary entry laid out in PDF 1.7 and earlier.

Whether this counts as a required constraint is signaled by the flags property.

Note

In the PDF Reference at version 1.6 and below, the V entry — the key tied to the version parameter — is mistakenly listed as an integer type; in fact this entry is of type real.

CertificateSpecifier Object

This generic JavaScript object holds the certificate specifier properties of a signature seed value. It serves in the certSpec property of the SeedValue object. The properties it contains are these:

Property

Type

Access

Description

flags

Number

R/W

A collection of bit flags that govern which of this object's properties below are mandatory. Form the value as the logical OR of the values that follow, each switched on when its matching property is required:

1: subject

2: issuer

4: oid

8: subjectDN

16: Reserved

32: keyUsage

64: url\*

If this field is not present, all properties are optional.

issuer

Array of Certificate objects

R/W

A roster of Certificate objects acceptable for signing. When given, the signing certificate has to be issued by a certificate that matches one of those in the array exactly. Whether this is required or optional is conveyed by the matching flag within the flags property.

keyUsage

Object

R/W

(Acrobat 8.0) An array of integers, each one naming an acceptable key-usage extension the signing certificate is required to carry.

Build each integer this way:

Starting at the least significant bit, every key-usage type (as defined in RFC 3280) takes up two bits:

digitalSignature(bits 2,1),

nonRepudiation(4,3)

keyEncipherment(6,5)

dataEncipherment(8,7)

keyAgreement(10,9)

keyCertSign(12,11)

cRLSign(14,13)

encipherOnly(16,15)

decipherOnly(18,17)

The value of the two bits have the following semantics:

00: the corresponding keyUsage must not be set

01: the corresponding keyUsage must be set

10 and 11: the state of the corresponding keyUsage doesn’t matter.

For example, if it is required that the key-usage type digitalSignature be set and the state of all other key-usage types do not matter, then the corresponding integer would be 0x7FFFFFFD. That is, to represent digitalSignature, set 01 for bits 2 and 1 respectively, and set 11 for all other key-usage types.

Whether this counts as a required constraint is signaled by the matching flag within the flags property.

oid

Array of Strings

R/W

A roster of strings carrying Policy OIDs that the signing certificate must contain. This property applies only when the issuer property is present too.

Whether this is required or optional is conveyed by the matching flag within the flags property.

subject

Array of Certificate objects

R/W

A roster of Certificate objects acceptable for signing. When given, the signing certificate has to match one of those in the array exactly.

Whether this is required or optional is conveyed by the matching flag within the flags property.

subjectDN

Array of objects

R/W

(Acrobat 8.0) Array of objects, each one naming a Subject Distinguished Name (DN) acceptable for signing. A signing certificate meets a DN requirement so long as it carries at minimum every attribute the DN names — extra DN attributes beyond those are fine. When this entry is given, the signing certificate has to satisfy at least one DN among those in the array.

Restrictions on DN attributes get expressed in this object by attaching them as properties. For the properties' key names you may use either the attributes' friendly names or their OIDs (per RFC 3280). Each property's value has to be a string.

Whether this is required or optional is conveyed by the matching flag within the flags property.

Example 1: {cn:"Alice", ou:"Engineering", o:"Acme Inc"}. Those friendly attribute names — cn, o, ou, and the rest — come from the definitions in RDN (see RDN).

Example 2: {cn:”Joe Smith”, ou: “Engineering”, 2.5.4.43:"JS"}, where OID 2.5.4.43 is used to carry out matching for the “Initials” attribute. The following is sample code to define the above DN:

var subjectDN = {cn:”Joe Smith”, ou:”Engineering”}; subjectDN[“2.4.5.43”] = “JS”;

Attributes carrying a value of type DirectoryString or IA5String may be written as the example above shows; for every other value type, however — dateOfBirth being one, whose value is of type GeneralizedTime — the values have to be given as a hex-encoded binary string.

RFC 3280 has the fuller detail on these attributes and the types they take.

url

String

R/W

A URL usable for enrolling to get a new credential whenever no matching credential turns up.

One degenerate use of this property has the URL aiming at a web service that acts as a DigitalID store — say a signature web service suited to server-based signing. The URL then signals that any signer holding a DigitalID from that web service is acceptable for signing.

Whether this is required or optional is conveyed by the matching flag within the flags property.

urlType

String

R/W

(Acrobat 8.0) A string telling what kind of URL the url property holds. For Acrobat 8.0 the valid values are:

"HTML": the url aims at an HTML website, which Acrobat renders through the web browser. Here the url bit within the flags property is disregarded.

"ASSP": the url points to a signature web service fit for server-based signing. Where the url bit of the flags property marks this a required constraint, it means the signing credential has to originate from that server.

When this attribute is absent, the url is taken to aim at an HTML site.

| --- | --- | --- | --- |

Seed value timeStamp specifier object

Here are the properties carried by the seed value timeStamp specifier object:

Property

Type

Access

Description

url

String

R/W

URL of the timeStamp server providing an RFC 3161 compliant timeStamp.

flags

Number

R/W

A bit flag controlling whether the time stamp is required (1) or not required (0). The default is 0.

| --- | --- | --- | --- |

Example 1: Seed the signature field, which has yet to be signed, with MDP, legal attestations, and permitted reasons for signing.

```
// Obtain the signature Field object:
var f = this.getField("mySigField");
f.signatureSetSeedValue({
    mdp: "defaultAndComments",
    legalAttestations: ["Trust me and be at ease.",
        "You can surely trust the author."],
    reasons: ["This is a reason", "This is a better reason"],
    flags: 8
})
```

Example 2: Sets the signing handler as PPKMS and the format as “adbe.pkcs7.sha1”.

```
   var f = this.getField( "mySigField" );

   f.signatureSetSeedValue({
       filter: "Adobe.PPKMS",
       subFilter: ["adbe.pkcs7.sha1"],
       flags: 3
});
```
