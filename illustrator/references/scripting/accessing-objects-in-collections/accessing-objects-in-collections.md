# Accessing and referencing objects - Accessing objects in collections

Open documents and the objects inside a document are grouped into collection objects for each object type. A collection object stores an array of objects addressable by index or by name. The collection object's name is the plural version of the object name; for example, document objects are held in documents.

This script sample retrieves every graphic style object in the graphic styles collection, meaning every graphic style available to the active document:

```javascript
var myStyles = app.activeDocument.graphicStyles;
```

JavaScript numeric collection references are zero-based, so the first collection object uses index [0].

Usually, adding an object to a collection does not change existing JavaScript index numbers. One exception applies: documents[0 is always the active or frontmost document.

To reach the first style in a graphic styles collection, use either the earlier variable or the containment hierarchy reference to that collection:

```javascript
var firstStyle = myStyles[0];
```

```javascript
var firstStyle = app.activeDocument.graphicStyles[0];
```

Each of these statements stores the first graphic style's name from the collection in a variable.

```javascript
var styleName = myStyles[0].name

var styleName = firstStyle.name

var styleName = app.activeDocument.graphicStyles[0].name
```

Use the length property to retrieve the total object count in a collection:

```javascript
alert ( myStyles.length );
```

The final graphic style in the collection has index myStyles.length - 1, with -1 needed because indexing begins at 0 while the length property counts from 1:

```javascript
var lastStyle = myStyles[ myStyles.length - 1 ];
```

An expression used for an index value is placed inside square brackets ( [] ) and quotes.

When an object's name is known, access it from the collection by placing that name in square brackets; for example:

```javascript
var getStyle = myStyles["Ice Type"];
```

Every collection entry is an object of the intended type, and its properties are available through the collection. For example, use the name property to retrieve an object's name:

```javascript
var styleName = app.activeDocument.graphicStyles[0].name;
```

Apply lastStyle to the document's first pageItem with its applyTo() method:

```javascript
lastStyle.applyTo( app.activeDocument.pageItems[0] );
```
