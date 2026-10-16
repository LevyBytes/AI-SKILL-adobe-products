# ToolObj.showTransformHandles

Community declaration reference: Animate/22.0.

Call this from configureTool() in an extensible tool's JavaScript file when the active tool should display free transform handles. Extensible-tool creation is the only intended use.
@param bShow Boolean selector for free transform handles on the current tool: true displays them, false hides them.

```typescript
declare class ToolObj {
    showTransformHandles(bShow: boolean): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
