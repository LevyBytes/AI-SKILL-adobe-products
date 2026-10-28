# Application.doScript

Community declaration reference: InDesign/2023.

Runs a script in the chosen language as one transaction.
@param script Script content or file to run.
@param language Script language; when omitted, the caller's method language is used.
@param withArguments Arguments array passed into the script.
@param undoMode Undo handling for this script.
@param undoName Name assigned to the undo step when entire script undo mode is used.

```typescript
declare class Application {
    doScript(script: File | string | Function, language?: ScriptLanguage, withArguments?: any[], undoMode?: UndoModes, undoName?: string): any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
