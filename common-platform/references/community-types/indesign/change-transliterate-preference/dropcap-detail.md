# ChangeTransliteratePreference.dropcapDetail

Community declaration reference: InDesign/2023.

Drop-cap controls derived from glyph outlines: use 1 for left side bearing, 2 for descenders, and 0x100,0x200,0x400 for Japanese frame grid behavior.

```typescript
declare class ChangeTransliteratePreference extends Preference {
    dropcapDetail: number | NothingEnum
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
