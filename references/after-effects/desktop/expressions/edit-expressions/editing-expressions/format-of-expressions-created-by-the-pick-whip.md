# Format of expressions created by the pick whip

Pick-whip expression formatting follows whatever you set for the "Expression pick whip writes compact English" preference.

- Edit > Preferences > General (Windows)
- After Effetcs > Settings > Scripting & Expressions (macOS)

Expressions from the pick whip borrow the property names exactly as the Timeline panel shows them. Since those names are built in, they hold up even when After Effects runs in a different language. Property names you can edit sit inside double quotation marks and stay identical from one language to the next. Turn this option off when the project won't be shared across languages.

A compact English sample looks like this:

```javascript
  thisComp.layer("Layer 1").transform.position
```

The very same expression, with compact English turned off, looks like this:

```javascript
  thisComp.layer("Layer 1")("Transform")("Position")
```

Note

Since compact English is on by default, it's what nearly every example and illustration in this document uses.
