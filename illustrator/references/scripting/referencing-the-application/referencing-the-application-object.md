# Accessing and referencing objects - Referencing the application object

Getting a reference to a specific object requires moving through the containment hierarchy. Since JavaScript scripts run from inside the Illustrator application, a direct reference to the application object is not mandatory. For instance, this assignment stores the active document in Illustrator in the frontMostDocument variable by referring to the activeDocument property of the application object:

```javascript
var frontMostDocument = activeDocument;
```

Using the application object explicitly is also allowed. Reference it with the app global variable. To the JavaScript engine, these two statements are equivalent:

```javascript
var frontMostDocument = activeDocument;

var frontMostDocument = app.activeDocument;
```
