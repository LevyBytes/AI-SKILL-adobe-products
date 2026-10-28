# ChangeTextPreference.appliedConditions

Community declaration reference: InDesign/2023.

Search/replacement conditions. For "Any", pass the "nothing" enum; for "[Unconditional]", pass an empty list.

```typescript
declare class ChangeTextPreference extends Preference {
    appliedConditions: string[] | NothingEnum | Condition[]
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
