# ToolObj.setPI

Community declaration reference: Animate/22.0.

Selects the Property inspector opened when this tool becomes active. Extensible tools use this method; acceptable values are "shape" (the default), "text", and "movie".
@param pi String naming the Property inspector to open for this tool.

```typescript
declare class ToolObj {
    setPI(pi: string): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
