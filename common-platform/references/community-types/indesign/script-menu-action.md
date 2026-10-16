# ScriptMenuAction

Community declaration reference: InDesign/2023.

Script menu action object.

```typescript
declare class ScriptMenuAction extends MenuAction {
    /**
    - Fires before ScriptMenuAction is displayed; it does not bubble and cannot be canceled.
      */
      static readonly BEFORE_DISPLAY: string
    /**

    - Fires when ScriptMenuAction is invoked; it does not bubble and cannot be canceled.
      */
      static readonly ON_INVOKE: string
    /**

    - Deletes the ScriptMenuAction.
      */
      remove(): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
