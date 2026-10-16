# Text.selectionStart

Community declaration reference: Animate/22.0.

Holds the zero-based starting position of a text subselection. Combine it with text.selectionEnd to select a character range; selected characters extend up to but exclude text.selectionEnd. Related property: text.selectionEnd.
With an insertion point or no active selection, text.selectionEnd equals text.selectionStart.
If text.selectionStart is set higher than text.selectionEnd, Flash sets text.selectionEnd to text.selectionStart and clears the selection.

```typescript
declare class Text extends Element {
    selectionStart: number
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
