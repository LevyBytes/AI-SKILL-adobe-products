# privateKeyValidityStart

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 8.0 | No | No | All | Date object | R |

Marks the earliest date from which using the private key tied to this certificate becomes lawful. When the Private Key Usage Period (PKUP) certificate extension is missing, the figure falls back to the certificate's own start-of-validity date. Acrobat will not allow a digital ID to sign unless it confirms the signing moment is later than the privateKeyValidityStart date.
