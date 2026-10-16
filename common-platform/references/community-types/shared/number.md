# Number

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Represents a numeric value as an object wrapper.

```typescript
interface Number {
    /**
    - Formats the Number object as a scientific-notation string.
    - @param decimals Number of decimal places.
      */
      toExponential(decimals: number): string
    /**

    - Formats the Number object as a string with fixed decimal places.
    - @param decimals Number of decimal places.
      */
      toFixed(decimals: number): string
    /**

    - Produces the Number object's value as a string using localized formatting conventions.
      */
      toLocaleString(): string
    /**

    - Converts the Number object to scientific or fixed notation according to its value.
    - @param decimals Number of decimal places.
      */
      toPrecision(decimals: number): string
    /**

    - Generates source text for this object that eval() can consume to recreate it. This works only for built-in classes.
      */
      toSource(): string
    /**

    - Converts the Number object's value into a string.
    - @param radix Optional base used for conversion.
      */
      toString(radix?: number): string
    /**

    - Yields the Number object's primitive number value.
      */
      valueOf(): number
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
