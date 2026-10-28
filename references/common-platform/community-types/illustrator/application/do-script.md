# Application.doScript

Community declaration reference: Illustrator/2022.

Plays an action from the Actions Palette.
@param action Name of the action to play; Action name letter case matters and must match the Actions palette.
@param from Name of the action set that contains the action; Action Set name letter case must match the Actions palette.
@param dialogs Whether action-related dialog boxes should be shown.

```typescript
declare class Application {
    doScript(action: string, from: string, dialogs?: boolean): void
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
