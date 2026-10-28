# Defining entry points for direct access - Additional functions

The shared library may include any number of additional functions. Each one maps to a JavaScript method on the ExternalObject instance. When a function is missing, ExtendScript raises a run-time error.

Every such function must take these inputs:

- TaggedData array.
- Count of arguments.
- Variant data structure used to receive the return value.

JavaScript objects are not supported by the variant data. The permitted data types are:

- undefined
- Boolean
- double
- String - Must use UTF-8 encoding. The library needs an ESFreeMem() entry point so ExtendScript can free string pointers returned by the library. If ESFreeMem() is absent, returned string data is left for the library to manage.
- Script - A string for ExtendScript to evaluate. Use this for returning compact JavaScript snippets that define arbitrarily complex data.

If a function receives an undefined parameter value, ExtendScript marks that data type as undefined and skips conversion to the requested type.

Note

A return value's data type cannot be fixed in advance; JavaScript functions may return data of any type.

The called function may return any of the data types listed above.
