# keyUsage

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Array of Strings | R |

Holds the certificate's key usage extension as a string array. Allowed entries are

Reference data, output or notation; not an executable JavaScript program.

```text
kDigitalSignature    kDataEncipherment    kCRLSign
kNonRepudiation      kKeyAgreement        kEncipherOnly
kKeyEncipherment     kKeyCertSign         kDecipherOnly
```
