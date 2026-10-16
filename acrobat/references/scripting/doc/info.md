# info

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | D | No | All | Object | R/W (Adobe Reader: R only) |

Gives back an object whose properties come straight from the PDF file's document information dictionary. (Consult the PDF Reference.) The standard keys are:

Reference data, output or notation; not an executable JavaScript program.

```text
Title
Author
Authors                         (Acrobat 9.0)
Subject
Keywords
Creator
Producer
CreationDate
ModDate
Trapped
```

Under Acrobat these properties accept writes, and assigning to one marks the document as dirty. You can tack on extra document information fields by assigning properties beyond the standard set.

Under Adobe Reader, any attempt to write a property on this object raises an exception.

Note

Capitalization does not matter for the standard keys, so info.Keywords and info.keywords refer to the same thing.

With Acrobat 9.0 came the Authors (authors) property on the info object. Calling Authors hands you back the authors as a semicolon-separated list. Because author data lives in the XMP metadata, Doc.info.Authors pulls it out of that metadata as an array, and you can reach individual authors one by one. The Example 3 (Acrobat 9.0) further down shows how.

Example 1: Fetch the title of the active document.

```javascript
var docTitle = this.info.Title;
```

Example 2: Pull details about the document.

```javascript
this.info.Title = "JavaScript, The Definitive Guide";
this.info.ISBN = "1-56592-234-4";
this.info.PublishDate = new Date();
for (var i in this.info)
    console.println(i + ": "+ this.info[i]);
```

Output along these lines could come from the script above:

Reference data, output or notation; not an executable JavaScript program.

```text
CreationDate: Mon Jun 12 14:54:09 GMT-0500 (Central Daylight Time) 2000
Producer: Acrobat Distiller 4.05 for Windows
Title: JavaScript, The Definitive Guide
Creator: FrameMaker 5.5.6p145
ModDate: Wed Jun 21 17:07:22 GMT-0500 (Central Daylight Time) 2000
SavedBy: Adobe Acrobat 4.0 Jun 19 2000
PublishDate: Tue Aug 8 10:49:44 GMT-0500 (Central Daylight Time) 2000
ISBN: 1-56592-234-4
```

Example 3 (Acrobat 9.0)

Here we walk through both writing and reading several authors. The Description tab inside the Document Properties dialog box is another way to enter more than one author.

Assign three authors to this document.

```javascript
this.info.Authors=["Robat, A. C.", "Obe, A. D.","Torys, D. P."];
```

Run this.info.Authors inside the JavaScript Debugger Console window and you see this result:

Reference data, output or notation; not an executable JavaScript program.

```text
Robat, A. C.,Obe, A. D.,Torys, D. P.
```

Retrieve each author in turn.

```javascript
for (var i=0; i<this.info.Authors.length; i++)
    console.println((i+1) + ": " + this.info.Authors[i]);
```

The Console window then reports the following:

Reference data, output or notation; not an executable JavaScript program.

```text
1: Robat, A. C.
2: Obe, A. D.
3: Torys, D. P.
```
