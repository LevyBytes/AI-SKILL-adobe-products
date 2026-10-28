# UnitValue

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Models a measurement as a value combined with a unit.
This object is not provided by every application.

```typescript
interface UnitValue {
    /**
    - Base unit.
      */
      baseUnit: UnitValue
    /**

    - Unit name.
      */
      readonly type: UnitNameAbbrev | "?"
    /**

    - Numeric value.
      */
      value: number
    /**

    - Returns this instance expressed in another unit.
    - @param unitName Unit name.
      */
      as(unitName: UnitNameAbbrev): UnitValue
    /**

    - Converts this instance into another unit.
    - @param unitName Unit name.
      */
      convert(unitName: UnitNameAbbrev): boolean
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
