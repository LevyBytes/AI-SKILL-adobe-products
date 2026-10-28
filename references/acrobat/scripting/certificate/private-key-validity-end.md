# privateKeyValidityEnd

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 8.0 | No | No | All | Date object | R |

Marks the last date on which using the private key tied to this certificate remains lawful. Should the PKUP extension be absent, or this value be missing from that extension, the figure falls back to the certificate's own expiry date. Acrobat will not allow a digital ID to sign unless it confirms the signing moment falls earlier than the privateKeyValidityEnd date.
