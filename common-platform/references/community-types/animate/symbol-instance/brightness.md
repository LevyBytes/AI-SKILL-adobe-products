# SymbolInstance.brightness

Community declaration reference: Animate/22.0.

Reads the brightness value from the color effect Property Inspector when colorMode == 'brightness'; the value is a percentage from -100 through 100. A different colorMode causes an error.

```typescript
declare class SymbolInstance extends Instance {
    readonly brightness: number
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
