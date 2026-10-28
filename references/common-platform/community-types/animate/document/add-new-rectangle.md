# Document.addNewRectangle

Community declaration reference: Animate/22.0.

Creates a rectangle or rounded rectangle inside the specified bounds. Rectangle tool behavior is reproduced with current document stroke and fill defaults, and the rectangle is placed on the current frame and layer. If bSuppressFill and bSuppressStroke are both true, nothing is created.
@param boundingRectangle Rectangle defining where the new rectangle is added, using {left:value1,top:value2,right:value3,bottom:value4}. left and top locate the upper-left corner (for example, left:0,top:0 is the Stage upper-left corner); right and bottom locate the lower-right corner. Width is right minus left, and height is bottom minus top.
Put another way, rectangle bounds are not all the values shown in the Property inspector. left and top map to X and Y in the Property inspector. right and bottom do not map to W and H in the Property inspector.
Example: with bounds {left:10,top:10,right:50,bottom:100}, the Property inspector shows X = 10, Y = 10, W = 40, H = 90.
@param roundness Integer value from 0 to 999 for corner roundness, expressed as a number of points. Larger values make corners more rounded.
@param bSuppressFill Boolean that creates the shape without a fill when true. Default: false; omit when not needed.
@param bSuppressStroke Boolean that creates the rectangle without a stroke when true. Default: false; omit when not needed.

```typescript
declare class Document {
    addNewRectangle(
        boundingRectangle: SimpleShape,
        roundness: number,
        bSuppressFill?: boolean,
        bSuppressStroke?: boolean,
        ): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
