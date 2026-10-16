# Function

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Wraps a built-in function or JavaScript function.

```typescript
interface Function {
    /**
    - Function arguments packaged into an array.
    - This property is deprecated; use the arguments property inside the function body.
      */
      arguments: object
    /**

    - Count of formal arguments.
    - Deprecated; prefer the length property.
      */
      readonly arity: number
    /**

    - Count of formal arguments.
      */
      readonly length: number
    /**

    - Function name.
      */
      readonly name: string
    /**

    - Applies a this object and an argument list to a function.
    - Unlike call(), this form supplies the arguments as an Array object.
    - @param thisObj Object used as this.
    - @param args Array of arguments.
      */
      apply(thisObj: object, args: any): any
    /**

    - Applies a this object and individual arguments to a function.
    - Unlike apply(), this form supplies the arguments one by one.
    - @param thisObj Object used as this.
    - @param arguments First argument to the function. Add additional arguments as required.
      */
      call(thisObj: object, ...arguments: any[]): any
    /**

    - Builds a string representation that eval() can consume to re-create an object. This works only with JavaScript functions.
      */
      toSource(): string
    /**

    - Produces a string version of the function definition.
      */
      toString(): string
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
