# Flash.swfPanels

Community declaration reference: Animate/22.0.

Registered swfPanel objects are returned in this array; see swfPanel object. A swfPanel object becomes registered after it has been opened at least once.
Array order follows opening order. If TraceBitmap opens first and AnotherFunction opens second, fl.swfPanels[0] references the TraceBitmap swfPanel object and fl.swfPanels[1] references the AnotherFunction swfPanel object; the pattern continues from there.
When no panels have been opened, this property is undefined; that behavior was introduced in Flash Professional CC.

```typescript
declare class Flash {
    swfPanels: SWFPanel[] | undefined
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
