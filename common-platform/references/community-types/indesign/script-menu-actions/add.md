# ScriptMenuActions.add

Community declaration reference: InDesign/2023.

Creates a new action object.
@param title Display label for ScriptMenuAction in the user interface. Ampersand characters (&) mark the next character for Windows Alt-key menu navigation, while double ampersands show a literal ampersand. The Mac OS drops the extra ampersands.
@param withProperties Initial property values for the new ScriptMenuAction.

```typescript
declare class ScriptMenuActions {
    add(title: string, withProperties: object): ScriptMenuAction
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
