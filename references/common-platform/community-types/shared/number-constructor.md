# NumberConstructor

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

```typescript
interface NumberConstructor {
    readonly prototype: Number
    /**

    - Creates a Number object whose value is the argument after numeric conversion.
    - @param value Value used to initialize the created object.
      */
      new (value?: any): Number
    (value: any): number
    /**

    - Constant for the greatest number that can be represented.
      */
      readonly MAX_VALUE: number
    /**

    - Constant for the least representable number.
      */
      readonly MIN_VALUE: number
    /**

    - Constant value for negative infinity.
      */
      readonly NEGATIVE_INFINITY: number
    /**

    - Constant for the special "Not a Number" value.
      */
      readonly NaN: number
    /**

    - Constant value for positive infinity.
      */
      readonly POSITIVE_INFINITY: number
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
