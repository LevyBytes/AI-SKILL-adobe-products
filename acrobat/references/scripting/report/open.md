# open

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | Not available in Reader |

Wraps up report generation, brings the report up in Acrobat, and returns a Doc you can use to work on the report further.

Parameters

| Parameter | Description |
| --- | --- |
| cTitle | The report title. |

Returns

A Doc.

Example: Open a report, get the Doc, and set some properties of the document.

```javascript
var docRep = rep.open("myreport.pdf");
docRep.info.Title = "End of the month report: August 2000";
docRep.info.Subject = "Summary of comments at the August meeting";
```

See writeText for a more complete example.
