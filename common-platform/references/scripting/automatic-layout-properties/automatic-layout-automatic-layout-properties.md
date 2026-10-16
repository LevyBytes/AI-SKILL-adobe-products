# Automatic layout — Automatic layout properties

A script sets rules for the layout manager by assigning particular properties on the container object and on child elements. The examples below demonstrate how different combinations of those values affect layout. They use a simple window, built with Resource specifications, that contains StaticText, Button, and EditText elements:

```javascript
var w = new Window( "window { \
    orientation: 'row', \
    st: StaticText { }, \
    pb: Button { text: 'OK' }, \
    et: EditText { characters:4, justify:'right' } \
}");

w.show();
```

Each example changes layout properties in a different way. In every window, w. text sets the title to identify the property being varied, and w.st.text displays the specific property value shown in that example.
