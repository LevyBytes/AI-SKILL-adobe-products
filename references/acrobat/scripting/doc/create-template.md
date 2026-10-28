# createTemplate

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | Yes | All but Reader |

Note

Within Adobe Reader 5.1 onward, Advanced Form Features rights made this method usable. That changed at Adobe Reader 7.0: from that release on, the call is blocked and raises a NotAllowedError exception.

Turns the indicated page into a visible template. Related items worth consulting are the templates property, both the getTemplate and removeTemplate methods, and the Template object.

Note

Only a batch or console event may run this method. (Refer to Privileged context.) A treatment of JavaScript events lives in the event object.

Parameters

| Parameter | Description |
| --- | --- |
| cName | The name that will be tied to this page. |
| nPage | (optional) A zero-based index pointing at the page to act on. It defaults to 0 — namely the document’s opening page. |

Returns

The newly created Template object.

Example: Starting at page 2, turn every remaining page into a hidden template. Because each template becomes hidden, this.numPages shifts to report the reduced count of pages still visible. Watch how, across the iterations that follow, page 2 alone is turned into a template and then hidden — at which point whatever page came next slides into the page 2 slot.

```javascript
numNewTemplates = this.numPages - 2;
for ( var i = 0; i < numNewTemplates; i++)
{
    var t = this.createTemplate({cName:"myTemplate"+i, nPage:2 });
    t.hidden = true;
}
```
