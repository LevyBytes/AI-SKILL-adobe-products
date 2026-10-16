# Page.adjustLayout

Community declaration reference: InDesign/2023.

Updates an existing layout using new page size, bleed, and margin values. The first argument is a plain object whose key-value pairs name affected properties. Allowed keys: width, height, bleedInside, bleedTop, bleedOutside, bleedBottom, leftMargin, topMargin, rightMargin, bottomMargin. Values may be decimal numbers measured in Pt or strings containing measurements such as '1 in'. You only need to supply properties that should change. On individual pages, unlike whole-document adjustment, bleed edits do not take effect. E.g. - app.activeDocument.adjustLayout({width:'600px', leftMargin: '1in'}), app.activeDocument.adjustLayout({rightMargin:'1in'}, app.activeDocument.spreads[0].pages), app.activeDocument.spreads[0].pages[0].adjustLayout({width:'400px', leftMargin: '10px'})
@param adoptTo Changed values; see function definition for details.
@param affectedPages Page collection affected by the call. Optional, and ignored when called from Page.

```typescript
declare class Page {
    adjustLayout(adoptTo: object, affectedPages: Page[]): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
