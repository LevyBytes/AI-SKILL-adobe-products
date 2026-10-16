# DocumentPreference.preserveLayoutWhenShuffling

Community declaration reference: InDesign/2023.

When true, spreads with more than two pages keep their layout after allow page shuffle is turned on. When false, qualifying multi-page spreads become two-page spreads if created or changed after allow page shuffle was enabled.

```typescript
declare class DocumentPreference extends Preference {
    preserveLayoutWhenShuffling: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
