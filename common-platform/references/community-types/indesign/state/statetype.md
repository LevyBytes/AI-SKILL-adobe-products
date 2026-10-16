# State.statetype

Community declaration reference: InDesign/2023.

For a button, statetype records the user action that drives appearance; for a MultiStateObject, where states are not tied to user actions, it stores a numeric state identifier.

```typescript
declare class State {
    statetype: StateTypes | number
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
