# Resource specifications

A resource specification can create one or several user-interface elements at once. This specially formatted string gives a compact way to define an element, including a container and any components inside it. Pass the resource-specification string as the type parameter to the Window() or add() constructor function.

A typical resource specification starts with an element type, such as dialog, followed by a braced property-definition section.

```javascript
var myResource = "dialog{ control_specs }";
var myDialog = new Window ( myResource );
```

Inside windows and other containers, controls are declared as properties. For each control, write the control class name and then its properties inside braces. This example specifies a button:

ScriptUI resource-description fragment. Place it inside the enclosing resource string; this is not a standalone JavaScript statement.

```text
testBtn: Button { text: "Test" }
```

This resource string defines a panel containing grouped StaticText and EditText controls:

ScriptUI resource-description fragment. Place it inside the enclosing resource string; this is not a standalone JavaScript statement.

```text
"msgPnl: Panel { orientation:'column', alignChildren:['right', 'top'],\
    text: 'Messages', \
    title: Group { \
        st: StaticText { text:'Alert box title:' }, \
        et: EditText { text:'Sample Alert', characters:35 } \
    }
    msg: Group { \
        st: StaticText { text:'Alert message:' }, \
        et: EditText { properties:{multiline:true}, \
        text:'<your message here>' \
    } \
}"
```

The property named properties holds creation properties; see Creation properties.

Valid property-value forms are the literals null, true, and false; String and Number values; inline Array values; and Object values.

Reference data, output or notation; not an executable JavaScript program.

```text
[ value, value, ... ]
```

Reference data, output or notation; not an executable JavaScript program.

```text
{ classname inlineObject }
```

Reference data, output or notation; not an executable JavaScript program.

```text
{ propertyName: propertyValue, propertyName: propertyValue, ... }
```
