# validateSignaturesOnOpen

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | P | Yes | Not allowed in Reader: Only available in Acrobat products | Boolean | R/W |

Reads or writes the user-level preference that makes signatures validate on their own each time a document opens.

Note

Reading the property works in every situation, but writing a new value is allowed only during a batch, console, or application-initialization event. Refer to Privileged context.
