# RegExp

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Object wrapper for a regular expression.

```typescript
interface RegExp {
    /**
    - Builds a regular expression from a string and returns true when compilation succeeds.
    - @param pattern Pattern to compile.
      */
      compile(pattern: string): boolean
    /**

    - Runs a regular expression.
    - The result is an array: element zero is the overall match, followed by captures from matching subexpressions in occurrence order. With no match, the result is null.
    - @param text String used for the match operation.
      */
      exec(text: string): RegExpExecArray | null
    /**

    - Runs a regular expression and returns true when a match exists.
    - @param text String used for the match operation.
      */
      test(text: string): boolean
    /**

    - Converts this RegExp object into a string.
      */
      toString(): string
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
