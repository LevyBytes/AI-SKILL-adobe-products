# MixedInks.add

Community declaration reference: InDesign/2023.

Constructs a mixed ink swatch.
@param inkList Inks included in the mixture. Note: include at least two process inks and one spot ink.
@param inkPercentages Percent value assigned to each ink in inkList. (Range: 0 to 100 for each ink)
@param withProperties Starting property values for the MixedInk being created

```typescript
declare class MixedInks {
    add(inkList: Ink[] | MixedInkGroup, inkPercentages: number[], withProperties: object): MixedInk
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
