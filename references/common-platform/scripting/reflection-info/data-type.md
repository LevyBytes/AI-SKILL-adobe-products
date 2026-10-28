# dataType

obj.reflect.methods[0].dataType

### Description

Data type reported for the reflected item.

### Type

String. One of:

- "boolean"
- "number"
- "string"
- "Classname": Names an object's class. !!! note Class names start with a capital letter. In that convention, the value String indicates a JavaScript string, while String names a JavaScript String wrapper object.
- \*: Any type; this is the fallback.
- null
- undefined: Return type for a function that returns no value.
- unknown
