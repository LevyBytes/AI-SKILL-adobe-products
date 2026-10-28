# MasterSpread.place

Community declaration reference: InDesign/2023.

Places a file in the target.
@param fileName File to be placed.
@param placePoint Placement point to use.
@param destinationLayer Layer that receives the placed content.
@param showingOptions Controls whether the import options dialog is shown.
@param autoflowing Controls autoflow for placed text.
@param withProperties Seed property values for objects created by placement.

```typescript
declare class MasterSpread {
    place(fileName: File, placePoint: (number | string)[], destinationLayer: Layer, showingOptions?: boolean, autoflowing?: boolean, withProperties?: object): any[]
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
