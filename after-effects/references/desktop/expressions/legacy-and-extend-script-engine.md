# Legacy And Extend Script Engine

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on May 5, 2026

Learn how Adobe After Effects handles legacy scripting and the ExtendScript engine, and how to manage scripts across older and newer workflows.

Turn to this page either to sharpen your expressions for the JavaScript expression engine, or to troubleshoot errors that crop up when expressions authored for earlier After Effects releases refuse to evaluate under the JavaScript expression engine.

After Effects expressions are built on JavaScript, itself an implementation of ECMAScript. ECMAScript 2018 underpins the JavaScript expression engine introduced in After Effects 16.0, whereas the Legacy ExtendScript expression engine rests on ECMAScript 3 (1999). (Adobe ExtendScript doubles as the scripting language for After Effects and the wider family of Adobe applications.)

The samples that follow are yours to work through, alongside advice on writing expressions that hold up in both the JavaScript and Legacy ExtendScript expression engines.

Where the JavaScript and Legacy ExtendScript expression engines part ways, the main points are:

- Expressions can use JavaScript syntax from ECMAScript 2018
- .value is no longer required when linking to other properties from Source Text
- Freezing property values with posterizeTime(0)

- if...else syntax differences
- if and else cannot be on the same line without brackets
- Expressions cannot end in a function declaration
- this() shorthand syntax is not allowed; use thisLayer() instead
- Source Text property array-index access to characters requires .value
- Snake case properties and methods are not allowed
- Using eval() with binary-encoded (.jsxbin) expressions
- Limited support for the $. (Dollar) object
- No support for ...reflect.properties, ...reflect.methods, and toSource()

- Explicitly prefix native methods and attributes with thisLayer. or thisProperty.
- Replacing math operators with vector math functions
