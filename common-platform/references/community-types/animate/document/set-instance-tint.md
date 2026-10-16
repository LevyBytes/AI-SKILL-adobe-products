# Document.setInstanceTint

Community declaration reference: Animate/22.0.

Sets instance tint.
@param color Tint color in one of these forms:
- A "#RRGGBB" or "#RRGGBBAA" string
- A hexadecimal 0xRRGGBB number
- An integer matching the decimal value of a hexadecimal number
@param strength Integer from 0 through 100 specifying tint opacity.

```typescript
declare class Document {
    setInstanceTint(color: string | number, strength: number): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
