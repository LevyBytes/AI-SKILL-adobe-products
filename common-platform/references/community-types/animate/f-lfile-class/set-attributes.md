# FLfileClass.setAttributes

Community declaration reference: Animate/22.0.

Sets system-level attributes on the specified file.
These values are valid for strAttrs:
â€¢N â€” No specific attributes (not read-only, not hidden, and so on)
â€¢A â€” Ready for archiving (Windows only)
â€¢R â€” Read-only (on the Macintosh, read-only means â€œlockedâ€)
â€¢W â€” Writable (overrides R)
â€¢H â€” Hidden (Windows only)
â€¢V â€” Visible (overrides H, Windows only)
If strAttrs contains both R and W, R is ignored and the file becomes writable. Likewise, if H and V are supplied together, H is ignored and the file becomes visible.
To ensure the archive attribute is not set, call this command with N before setting attributes. In other words, there is no direct equivalent of A for turning the archive attribute off.
@returns Boolean true on success.
Note: Missing files or folders make results unpredictable, so call FLfile.exists() before this method.
@param fileURI String in file:/// URI form identifying the file whose attributes should be set.
@param strAttrs String identifying the attribute value or values to set. For acceptable values for strAttrs, see the â€œDescriptionâ€ section below.

```typescript
declare class FLfileClass {
    setAttributes(fileURI: string, strAttrs: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
