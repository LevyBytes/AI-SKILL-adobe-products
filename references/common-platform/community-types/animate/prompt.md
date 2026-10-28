# prompt

Community declaration reference: Animate/22.0.

Method; opens a modal Alert dialog box with OK and Cancel buttons, showing a prompt plus optional starting text.
@returns The string entered by the user when OK is clicked; null when Cancel is clicked.
@param promptMsg String displayed by the Prompt dialog box; Mac OS X allows up to 256 characters.
@param text Optional string supplying the text field's initial value.

```typescript
declare function prompt(promptMsg: string, text: string): string | null
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
