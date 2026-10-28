# appearances

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | No | Yes | All | Array | R |

Holds the language-dependent names of the user-configured appearances on hand for the named security handler. Appearances supply the on-page look of a signature once a signature field is signed. When signing a signature field through the Field object signatureSign method, you name an appearance via a signature info object property.

Adobe signature plug-ins draw on a standard signature appearance module that Acrobat supplies, and third-party signature plug-ins may draw on it too. Out of the box this standard module carries a single appearance, and users can extend it with more. The name of that one built-in appearance, shown as Standard Text in the user interface, is left out of this property.

Where a security handler offers no appearance selection, this property comes back null.
