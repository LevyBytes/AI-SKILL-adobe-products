# MixedInkGroups.add

Community declaration reference: InDesign/2023.

Constructs a mixed ink group.
@param inkList Inks included in the mix.
@param inkPercentages Percent value for each ink in inkList. (Range: 0 to 100 for each ink)
@param repeatValues Repetition count for each ink in inkList. (Range: 0 to 100 for each ink)
@param incrementValues Percent increment applied per repetition for each ink. (Range: 0 to 100) Note: cumulative percentage for a single ink cannot be greater than 100.)
@param withProperties Starting property values for the MixedInkGroup being created

```typescript
declare class MixedInkGroups {
    add(inkList: Ink[], inkPercentages: number[], repeatValues: number[], incrementValues: number[], withProperties: object): MixedInkGroup
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
