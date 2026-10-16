# signatureGetSeedValue

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Hands back a SeedValue object carrying the seed value settings of a signature field. Those seed values steer aspects of the signature such as how it looks, the reasons offered for signing, and the signer.

See signatureSetSeedValue.

Returns

A SeedValue object.

Example: reach the seed value belonging to a signature field.

```javascript
var f = this.getField( "sig0" );
var seedValue = f.signatureGetSeedValue();
// displays the seed value filter and flags
console.println( "Filter name:" + seedValue.filter);
console.println( "Flags:" + seedValue.flags);
// displays the certificate seed value constraints
var certSpec = seedValue.certspec;
console.println( "Issuer:" + certspec.issuer);
```
