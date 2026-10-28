# signatureSetSeedValue

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | D | Yes | Not allowed in Reader: Only available in Acrobat products |

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

| Parameter | Description |
| --- | --- |
| oSigSeedValue | A SeedValue object that carries the signature seed value properties. |


Example 3: Pins the signing handler to PPKLite and forces the signer’s certificate to be issued by caCert. Because both are required seed values, the signing operation aborts whenever either of those constraints goes unmet.

```javascript
var caCert = security.importFromFile("Certificate", "/C/temp/CA.cer");
f.signatureSetSeedValue({
    filter: "Adobe.PPKLite",
    certspec: {
        issuer: [caCert],
        url: "http://www.example.com/enroll.html",
        flags : 2
    },
    flags: 1
});
```
