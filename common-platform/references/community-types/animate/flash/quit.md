# Flash.quit

Community declaration reference: Animate/22.0.

@param bPromptIfNeeded Optional Boolean value, true by default, that controls whether modified documents ask the user to save. Set it to false to bypass save prompts; then open-document changes are discarded and the application exits immediately. Although useful for batch processing, this method should be used carefully.

```typescript
declare class Flash {
    quit(bPromptIfNeeded?: boolean): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
