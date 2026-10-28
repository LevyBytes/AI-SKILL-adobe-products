# activeDocs

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | No | Yes | All | array | R |

Holds an array of one Doc object per active document. With nothing active, activeDocs comes back empty — behaving just as d = new Array(0) would in plain JavaScript.

Run d = app.activeDocs at the console before Acrobat 7.0 and you would see [object Global] printed. Starting at Acrobat 7.0, the console no longer prints any toString() value.

Note

Keep the following version differences in mind:

Under Acrobat 5.0, the property gives an array with a Doc object for every active document.

At Acrobat 5.0.5, it was revised to list Doc objects only for those open documents whose disclosed property on the Doc object is true.

From the Acrobat 5.0.5 Accessibility and Forms Patch onward, and likewise in Acrobat 6.0 and later, the rule splits by event: during a batch, console, or menu event, activeDocs disregards disclosed and returns Doc objects for all active documents; during any other event, it returns only those whose disclosed is set to true.

From Acrobat 7.0 on, running JavaScript via a menu event lost its privileged status. See Privileged context.

Any documents that app.openDoc opened with bHidden set to true also show up in the array that app.activeDocs returns, within the security limits noted above.

Example: Here the code scans the open documents looking for one whose title is myDoc, then drops a button into it through the addField method on the Doc object. Whether disclosure is required turns on which Acrobat version runs the code and where that code lives (console versus a mouse-up action, say).

```javascript
var d = app.activeDocs;
for (var i=0; i < d.length; i++)
if (d[i].info.Title == "myDoc") {
    var f = d[i].addField("myButton", "button", 0, [20, 100, 100, 20]);
    f.setAction("MouseUp","app.beep(0)");
    f.fillColor=color.gray;99849106
}
```
