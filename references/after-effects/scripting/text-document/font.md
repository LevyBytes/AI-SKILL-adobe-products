# TextDocument.font

textDocument.font

### Description

Identifies the Text layer's font through its PostScript name.

Writing imposes almost no limits on the string you provide: should the font management system find no Font object instance matching that PostScript name, it fabricates a substitute. When PostScript names collide, the Font instance you get back is element 0 of the array that FontsObject.getFontsByPostScriptName() produces.

For tight control, reach for the Font object attribute instead.

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

### Type

String; read/write.
