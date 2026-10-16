# Timeline.setGuidelines

Community declaration reference: Animate/22.0.

Replaces timeline guide lines (View > Guides > Show Guides) with the data in xmlString. To get an XML string suitable for this method, call timeline.getGuidelines().
To see the newly applied guide lines, you may need to hide them and then show them again.
@returns Boolean true when the guidelines are applied successfully; otherwise false.
@param xmlString XML string holding the guideline data to apply.

```typescript
declare class Timeline {
    setGuidelines(xmlString: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
