# Document.exportPNG

Community declaration reference: Animate/22.0.

Exports the document to one or more PNG files. If fileURI is provided and already names an existing file, that file is overwritten without warning.
Note: With an empty fileURI and bCurrentFrame set to true, the Export Movie dialog box is skipped and Flash writes the exported PNG file beside the .fla file.
Note: When bCurrentPNGSettings is false and bCurrentFrame is true, Flash skips the Export PNG dialog box and uses the current PNG publish settings.
@returns true when the file is exported successfully as a PNG file; otherwise false.
@param fileURI String as a file:/// URI naming the exported file. If fileURI is empty or omitted, Flash opens the Export Movie dialog box.
@param bCurrentPNGSettings Boolean selecting current PNG publish settings when true, or the Export PNG dialog box when false. Optional; defaults to false.
@param bCurrentFrame Boolean selecting only the current frame when true, or all frames as separate PNG files when false. Optional; defaults to false.

```typescript
declare class Document {
    exportPNG(fileURI?: string, bCurrentPNGSettings?: boolean, bCurrentFrame?: boolean): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
