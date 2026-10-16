# TransformationMatrices.add

Community declaration reference: InDesign/2023.

Creates one TransformationMatrix.
@param horizontalScaleFactor Horizontal scale factor for the transformation matrix
@param verticalScaleFactor Vertical scale factor for the transformation matrix
@param clockwiseShearAngle Shear angle for the transformation matrix
@param counterclockwiseRotationAngle Rotation angle for the transformation matrix
@param horizontalTranslation Horizontal translation for the transformation matrix
@param verticalTranslation Vertical translation for the transformation matrix
@param matrixValues Values stored in the transformation matrix
@param matrixMapping Unit-triangle mapping accepted by the transformation matrix. Accepted type: Array of Array of 2 Arrays of 2 Reals.
@param withProperties Property values applied during TransformationMatrix creation

```typescript
declare class TransformationMatrices {
    add(horizontalScaleFactor: number, verticalScaleFactor: number, clockwiseShearAngle: number, counterclockwiseRotationAngle: number, horizontalTranslation: number, verticalTranslation: number, matrixValues: number[], matrixMapping: any[], withProperties: object): TransformationMatrix
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
