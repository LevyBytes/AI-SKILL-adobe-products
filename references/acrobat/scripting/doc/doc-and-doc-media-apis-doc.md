# Doc and Doc.Media APIs - Doc

This object is what links a PDF open in the viewer to the JavaScript interpreter, exposing methods and properties for reaching into the PDF document.

JavaScript offers several routes to the Doc object:

Most of the time, the this object refers to the Doc object of the document underneath.

A handful of properties and methods — extractPages, app.activeDocs, and app. openDoc among them — return the Doc object.

You can frequently reach the Doc object by way of event objects, one of which is built for every event that fires a JavaScript:

On mouse, focus, blur, calculate, validate, and format events, event.target gives back the Field object that set off the event. From there the Field object's Doc method takes you to the Doc object.

On every other event, event.target refers to the Doc.

Example 1: Access through this object

Read this document's page count by way of this:

```javascript
var nPages = this.numPages;
// Get the crop box for "this" document:
var aCrop = this.getPageBox();
```

Example 2: Access through return values

Hands values back from one document so as to open, change, save, and close a different one.

```javascript
// Path relative to "this" doc:
var myDoc = app.openDoc("myNovel.pdf", this);
myDoc.info.Title = "My Great Novel";
myDoc.saveAs(myDoc.path);
myDoc.closeDoc(true);
```

Example 3: Access through the event object.

For mouse, calculate, validate, format, focus, and blur events:

```javascript
var myDoc = event.target.doc;
```

For all other events (for example, batch or console events):

```javascript
var myDoc = event.target;
```
