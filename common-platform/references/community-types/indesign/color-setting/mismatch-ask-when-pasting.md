# ColorSetting.mismatchAskWhenPasting

Community declaration reference: InDesign/2023.

When true, the user is prompted if an imported object (via pasting, drag-and-drop, or other similar methods) has colors outside the current working space. The prompt offers a way to override the default mismatch behavior.

```typescript
declare class ColorSetting extends Preference {
    mismatchAskWhenPasting: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
