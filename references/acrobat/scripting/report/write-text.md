# writeText

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | Not available in Reader |

Puts a block of text into the report. Each call starts fresh on a new line at the present indentation mark. Roman, CJK, and WGL4 text all wrap correctly.

Parameters

| Parameter | Description |
| --- | --- |
| String | The block of text to use. |

Example:

```javascript
// Get the comments in this document, and sort by author
this.syncAnnotScan();
annots = this.getAnnots({nSortBy: ANSB_Author});

// Open a new report
var rep = new Report();

rep.size = 1.2;
rep.color = color.blue;

 if (annots && annots.length) {
    rep.writeText("Summary of Comments: By Author");
    rep.color = color.black;
    rep.writeText(" ");
    rep.writeText("Number of Comments: " + annots.length);
    rep.writeText(" ");

    var msg = '200 page %s: "%s"';
    var theAuthor = annots[0].author;
    rep.writeText(theAuthor);
    rep.indent(20);
    for (var i=0; i < annots.length; i++) {
        if (theAuthor != annots[i].author) {
            theAuthor = annots[i].author;
            rep.writeText(" ");
            rep.outdent(20);
            rep.writeText(theAuthor);
            rep.indent(20);
        }
        rep.writeText(
            util.printf(msg, 1 + annots[i].page, annots[i].contents));
    }
} else {
    var msg = "No annotations found in this document, %s.";
    rep.writeText(util.printf(msg, this.documentFileName));
}
// Now open the report
var docRep = rep.open("myreport.pdf");
docRep.info.Title = "End of the month report: August 2006";
docRep.info.Subject = "Summary of comments at the August meeting";
```
