# usage

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Usage object | R |

Returned as a Usage object, this states the roles for which the certificate is permitted inside the Acrobat environment.

Usage Object

Sitting in the certificate.usage property, this generic JavaScript object stands for a certificate usage value. Its properties are as follows.

| Property | Type | Access | Description |
| --- | --- | --- | --- |
| endUserSigning | Boolean | R | true when the certificate can serve for end-user signing. |
| endUserEncryption | Boolean | R | true when the certificate can serve for end-user encryption. |

Example: encrypt whatever document is open right now for every contact held in the address book. Any address-book contact carrying sign-only certificates, CA certificates, or no certificate at all — along with anyone otherwise ill-suited to encryption — gets left off the recipient list that results.

```javascript
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
