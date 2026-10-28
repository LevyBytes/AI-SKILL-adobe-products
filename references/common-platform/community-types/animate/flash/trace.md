# Flash.trace

Community declaration reference: Animate/22.0.

Writes a text string to the Output panel, appends a new line, and shows the Output panel when it is hidden. This method is the same as outputPanel.trace() and behaves like the trace() statement in ActionScript.
To write a blank line, use fl.trace("") or fl.trace("\n"). The latter command can be used inline, with \n included in the message string.
@param message String that appears in the Output panel.

```typescript
declare class Flash {
    trace(message: string): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
