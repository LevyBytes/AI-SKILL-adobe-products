# lastPage

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Integer | R/W |

The document's final page to print, counted 0-based. By “0-based” we mean every document's opening page is 0, whatever its page-number labels read. Should the value fall under firstPage or stray outside the document's legal range, it snaps back to its default. That default is the document's page count minus one.

Refer to firstPage for an example.
