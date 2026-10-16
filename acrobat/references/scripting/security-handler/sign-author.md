# signAuthor

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | Yes | All | Boolean | R |

Reports whether the security handler can produce certified documents. Such a document carries two signatures at once — a byte-range signature and an object signature. Walking the document's object tree yields the object signature, which serves to catch and block changes to a document. Specifics on modification detection and prevention (MDP) settings live under the mdp property of the SignatureInfo object.
