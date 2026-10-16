# Document.convertCoordinate

Community declaration reference: Illustrator/2022.

Changes one point from a source coordinate system to a destination coordinate system.
@param coordinate Specifies the Coordinate to convert.
@param source Specifies the source coordinate system.
@param destination Coordinate system to convert into.

```typescript
declare class Document {
    convertCoordinate(
      coordinate: Point | [number, number],
      source: CoordinateSystem,
      destination: CoordinateSystem,
      ): Point | [number, number]
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
