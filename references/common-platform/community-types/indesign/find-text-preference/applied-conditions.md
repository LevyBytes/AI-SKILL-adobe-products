# FindTextPreference.appliedConditions

Community declaration reference: InDesign/2023.

Conditions to find or replace with. For "Any", use the "nothing" enum; for "[Unconditional]", use an empty list.

```typescript
declare class FindTextPreference extends Preference {
    appliedConditions: string[] | NothingEnum | Condition[]
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
