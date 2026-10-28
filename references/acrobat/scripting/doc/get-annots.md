# getAnnots

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | All |

Returns an array of Annotation objects matching the criteria you specify. See also getAnnot and syncAnnotScan.

Parameters

| Parameter | Description |
| --- | --- |
| nPage | (optional) A 0-based page number. Supply it and only that page's annotations come back; leave it out and annotations meeting the search criteria are gathered from every page. |
| nSortBy | (optional) Which sort method gets applied to the resulting array. Its values are:<br><br>`ANSB_None`: (default) leaves the array unsorted — the same as omitting this argument altogether.<br><br>`ANSB_Page`: sorts primarily by page number.<br><br>`ANSB_Author`: sorts primarily by author.<br><br>`ANSB_ModDate`: sorts primarily by the modification date.<br><br>`ANSB_Type`: sorts primarily by annotation type. |
| bReverse | (optional) Set it true and the array's order under nSortBy gets flipped. |
| nFilterBy | (optional) Restricts the result to annotations that satisfy particular criteria. Its values are:<br><br>`ANFB_ShouldNone`: (default) returns every annotation — the same as leaving this argument off.<br><br>`ANFB_ShouldPrint`: keeps only the annotations eligible to print.<br><br>`ANFB_ShouldView`: keeps only the annotations eligible to be viewed.<br><br>`ANFB_ShouldEdit`: keeps only the annotations eligible to be edited.<br><br>`ANFB_ShouldAppearInPanel`: keeps only those annotations surfacing in the annotations pane.<br><br>`ANFB_ShouldSummarize`: keeps only the annotations a summary may carry.<br><br>`ANFB_ShouldExport`: keeps only the annotations an export may carry. |

Returns

An array of Annotation objects, or null if none are found.

Example: Gather every annotation off page one and print details about them to the console.

```javascript
this.syncAnnotScan();
var annots = this.getAnnots({
    nPage:0,
    nSortBy: ANSB_Author,
    bReverse: true
}) || [];
console.show();
console.println("Number of Annotations: " + annots.length);
var msg = '%s in a %s annot said: "%s"';
for (var i = 0; i < annots.length; i++)
    console.println(util.printf(msg, annots[i].author, annots[i].type,
        annots[i].contents));
```
