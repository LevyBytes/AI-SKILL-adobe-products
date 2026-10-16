# Using eval() with binary-encoded (.jsxbin) expressions

Expressions saved out in the ExtendScript binary format — written as a binary .jsxbin file by ExtendScript ToolKit CC — get no support from the JavaScript engine.

Should you wish to obfuscate an expression, either stay on the Legacy ExtendScript engine or pick a different obfuscation approach that plays nicely with ECMAScript 2018. Keep in mind that certain obfuscation techniques may not function across both expression engines.
