# Document.createAlternateLayout

Community declaration reference: InDesign/2023.

Builds an alternate layout from the supplied spreads.
@param spreadItems Spreads used to create the alternate layout.
@param name Alternate layout name. Note: this names the new section for duplicated spreads.
@param width Width for pages that are created.
@param height Height for pages that are created.
@param createTextStyles Whether new text styles should be created.
@param linkTextStories Whether duplicated text stories should use linked text.
@param layoutRule Rule for the created pages.

```typescript
declare class Document {
    createAlternateLayout(spreadItems: Spread[], name: string, width: number | string, height: number | string, createTextStyles: boolean, linkTextStories: boolean, layoutRule: LayoutRuleOptions): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
