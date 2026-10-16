# ColorSetting.mismatchAskWhenOpening

Community declaration reference: InDesign/2023.

When true, opening a file with an embedded color profile different from the current working space prompts the user. The prompt offers a way to override the default mismatch behavior.

```typescript
declare class ColorSetting extends Preference {
    mismatchAskWhenOpening: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
