# Signature seed signing examples

Example 1: Seed the signature field, which has yet to be signed, with MDP, legal attestations, and permitted reasons for signing.

```javascript
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

```javascript
   var f = this.getField( "mySigField" );

   f.signatureSetSeedValue({
       filter: "Adobe.PPKMS",
       subFilter: ["adbe.pkcs7.sha1"],
       flags: 3
});
```
