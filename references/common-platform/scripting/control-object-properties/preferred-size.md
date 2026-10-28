# preferredSize

controlObj.preferredSize

### Description

Layout managers use this Dimension object to choose the best size for each element. If a script does not set it explicitly, the user-interface framework hosting ScriptUI supplies the value, based on element attributes such as text, font, font size, icon size, and other framework-specific UI attributes.

Before invoking the layout manager, a script may set preferredSize explicitly to request an element size other than the default. To specify only one dimension, set the other dimension to -1.

### Type

Dimension object

### properties

controlObj.properties

### Description

This object stores one or more creation properties for the element; those properties are used only while creating the element.

### Type

Object
