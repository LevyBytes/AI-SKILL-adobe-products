# Size and location objects

ScriptUI uses specialized objects for the complex property values that position and size windows or user-interface elements. Scripts do not instantiate these objects directly; they are produced when the corresponding property is set, and that property then returns the object. For instance, reading bounds returns a Bounds object.

These properties can be assigned from objects, strings, or arrays.

- e.prop = Object - Provide an object containing the full property set required for that type, as shown in the table below. The property values are integers.
- e.prop = String - Provide a string containing an executable JavaScript inline object declaration that follows the same object description.
- e.prop = Array - Provide integer coordinate values in the order required for the type, as shown in the table below. For example:

These examples are equivalent ways to position a 380 by 390 pixel window near the screen's upper-left corner:

```javascript
var dlg = new Window( "dialog", "Alert Box Builder ");
dlg.bounds = { x:100, y:100, width:380, height:390 }; // Object
dlg.bounds = { left:100, top:100, right:480, bottom:490 }; // Object
dlg.bounds = "x:100, y:100, width:380, height:390"; // String
dlg.bounds = "left:100, top:100, right:480, bottom:490"; // String
dlg.bounds = [100, 100, 480, 490]; // Array
```

The resulting object can be read either as an array in the type-defined value order or as an object using that type's supported properties.
