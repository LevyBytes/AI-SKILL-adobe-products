# Document.adjustLayout

Community declaration reference: InDesign/2023.

Changes the current layout to match new page size, bleed, and margin values. The first argument is a plain object whose key-value pairs name the affected properties. Allowed keys: width, height, bleedInside, bleedTop, bleedOutside, bleedBottom, leftMargin, topMargin, rightMargin, bottomMargin. Values may be decimal Pt numbers or measurement strings such as '1 in'. You only need to provide entries for values being updated. When the target is individual pages instead of the entire document, bleed changes do not apply. E.g. - app.activeDocument.adjustLayout({width:'600px', leftMargin: '1in'}), app.activeDocument.adjustLayout({rightMargin:'1in'}, app.activeDocument.spreads[0].pages), app.activeDocument.spreads[0].pages[0].adjustLayout({width:'400px', leftMargin: '10px'})
@param adoptTo Changed values; see the function description for details.
@param affectedPages Page object collection affected by this call. Ignored when invoked from Page. (Optional)

```typescript
declare class Document {
    adjustLayout(adoptTo: object, affectedPages: Page[]): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
