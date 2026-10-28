# PlaceGun.loadPlaceGun

Community declaration reference: InDesign/2023.

Loads one or more files into the place gun.
@param fileName File or files to place.
@param showingOptions Whether the import options dialog is shown.
@param withProperties Starting properties for the object(s) being placed.

```typescript
declare class PlaceGun extends Preference {
    loadPlaceGun(fileName: File | File[], showingOptions?: boolean, withProperties?: object): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
