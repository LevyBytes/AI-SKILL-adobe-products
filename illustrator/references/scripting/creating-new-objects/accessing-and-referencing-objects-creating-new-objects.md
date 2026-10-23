# Accessing and referencing objects - Creating new objects

Scripts can generate new objects. When the target object is exposed through a collection object or container, invoke add() on that container object.

```javascript
var myDoc = app.documents.add()
var myLayer = myDoc.layers.add()
```

Other object kinds are not supplied by containers. For those cases, declare a variable and assign it with the new operator plus the appropriate object constructor. For instance, this creates a CMYKColor object in a variable named myColor:

```javascript
var myColor = new CMYKColor()
```

Scripts can create new objects. For objects exposed from collection objects, call Add on that collection object:

```vbscript
Set myDoc = appRef.Documents.Add()

Set myLayer = myDoc.Layers.Add()
```

Certain collections lack an Add method. For those object types, declare a variable and call CreateObject. This code creates a CMYKColor object in a variable named newColor:

```vbscript
Set newColor = CreateObject ("Illustrator.CMYKColor")
```
