# CertificateSpecifier.subjectDN

Type: Array of objects. Access: R/W.

(Acrobat 8.0) Array of objects, each one naming a Subject Distinguished Name (DN) acceptable for signing. A signing certificate meets a DN requirement so long as it carries at minimum every attribute the DN names — extra DN attributes beyond those are fine. When this entry is given, the signing certificate has to satisfy at least one DN among those in the array.

Restrictions on DN attributes get expressed in this object by attaching them as properties. For the properties' key names you may use either the attributes' friendly names or their OIDs (per RFC 3280). Each property's value has to be a string.

Whether this is required or optional is conveyed by the matching flag within the flags property.

Example 1: {cn:"Alice", ou:"Engineering", o:"Acme Inc"}. Those friendly attribute names — cn, o, ou, and the rest — come from the definitions in RDN (see RDN).

Example 2: `{cn: "Joe Smith", ou: "Engineering", "2.5.4.43": "JS"}` uses the Initials attribute OID. The following code constructs that same distinguished name:

```javascript
var subjectDN = {cn: "Joe Smith", ou: "Engineering"};
subjectDN["2.5.4.43"] = "JS";
```

Attributes carrying a value of type DirectoryString or IA5String may be written as the example above shows; for every other value type, however — dateOfBirth being one, whose value is of type GeneralizedTime — the values have to be given as a hex-encoded binary string.

RFC 3280 has the fuller detail on these attributes and the types they take.
