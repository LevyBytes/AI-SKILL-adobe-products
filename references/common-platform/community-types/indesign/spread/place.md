# Spread.place

Community declaration reference: InDesign/2023.

Imports a file onto the spread.
@param fileName File that will be placed.
@param placePoint Point used for placement.
@param destinationLayer Layer receiving the file.
@param showingOptions Show the import options dialog.
@param autoflowing Autoflow placed text when enabled.
@param withProperties Starting property values for the placed object or objects.

```typescript
declare class Spread {
    place(fileName: File, placePoint: (number | string)[], destinationLayer: Layer, showingOptions?: boolean, autoflowing?: boolean, withProperties?: object): any[]
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
