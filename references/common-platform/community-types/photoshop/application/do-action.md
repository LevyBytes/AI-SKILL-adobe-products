# Application.doAction

Community declaration reference: Photoshop/2015.5.

Plays the named action from the Actions palette.
@param action Action name to play. Matching is case-sensitive and must correspond to its Actions palette entry.
@param from Action set name that contains the action being played. Matching is case-sensitive and must correspond to its Actions palette entry.

```typescript
declare class Application {
    doAction(action: string, from: string): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
