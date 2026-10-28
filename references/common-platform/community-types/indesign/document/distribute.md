# Document.distribute

Community declaration reference: InDesign/2023.

Distributes page items.
@param alignDistributeItems Page items used for alignment or distribution.
@param distributeOption Distribution type to apply.
@param alignDistributeBounds Bounds used for aligning or distributing page items.
@param useDistributeMeasurement True distributes the space between page items. When true, the bounds setting is ignored.
@param absoluteDistributeMeasurement Distance applied during page-item distribution; needed only when 'align distribute bounds' is set to 'key object'.
@param reference Reference or key object for the relative target; needed only when 'align distribute bounds' is set to 'key object'.

```typescript
declare class Document {
    distribute(alignDistributeItems: PageItem[], distributeOption: DistributeOptions, alignDistributeBounds: AlignDistributeBounds, useDistributeMeasurement: boolean, absoluteDistributeMeasurement: number | string, reference: PageItem): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
