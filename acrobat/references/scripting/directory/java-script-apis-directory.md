# JavaScript APIs — Directory

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | Yes | All |

Think of a directory as a store of user information, public-key certificates among it. You reach one through a Directory object, which you get either from the SecurityHandler object's directories property or via its newDirectory method.

From Acrobat 6.0 onward, multiple directories ship. A lone directory called Adobe.AAB.AAB belongs to the Adobe.AAB Security Handler, reaching the local Acrobat Address Book — the trusted identity store. Under Windows, the Adobe.PPKMS Security Handler reaches, by way of the Microsoft Active Directory Script Interface (ADSI), however many directories the user has set up. Each is built in turn and named in sequence: Adobe.PPKMS.ADSI.dir0, then Adobe.PPKMS.ADSI.dir1, and onward.

Note

Because a SecurityHandler object is the only source for this object, the SecurityHandler object's security restrictions apply to it too. That confines the Directory object to batch, console and application initialization, Adobe Reader included. See also Privileged context.
