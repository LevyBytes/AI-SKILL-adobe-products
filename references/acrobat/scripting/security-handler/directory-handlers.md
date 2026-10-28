# directoryHandlers

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | Yes | All | Array | R |

The language-independent names of the directory handlers on hand for the named security handler, gathered into an array. Take the Adobe.PPKMS security handler: it carries a directory handler called Adobe.PPKMS.ADSI that fields queries via the Microsoft Active Directory Script Interface (ADSI). To bring a new Directory object online through its info property, you need valid directory handler names.
