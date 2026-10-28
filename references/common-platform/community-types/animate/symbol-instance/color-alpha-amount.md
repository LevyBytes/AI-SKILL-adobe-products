# SymbolInstance.colorAlphaAmount

Community declaration reference: Animate/22.0.

Supplies the Advanced Effect Alpha additive component for the instance color transform. It matches using Color > Advanced in the Property inspector and changing the controls on the right side of the dialog box. The amount is added to the current tint and alpha values, reducing or increasing them by a constant offset. It is most useful together with symbolInstance.colorAlphaPercent. Allowable values are from -255 to 255.

```typescript
declare class SymbolInstance extends Instance {
    colorAlphaAmount: number
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
