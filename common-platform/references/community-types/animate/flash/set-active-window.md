# Flash.setActiveWindow

Community declaration reference: Animate/22.0.

Makes the specified document the active window. Dreamweaver and Fireworks also support this method. If the document has several views, created with Window > Duplicate Window, the most recently active view is selected.
@param document Document object specifying which document becomes the active window.
@param bActivateFrame Optional parameter ignored by Flash and Fireworks; it exists only for Dreamweaver compatibility.

```typescript
declare class Flash {
    setActiveWindow(document: Document, bActivateFrame?: boolean): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
