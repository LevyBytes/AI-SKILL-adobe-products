# Document.traceBitmap

Community declaration reference: Animate/22.0.

Runs trace bitmap on the current selection. This matches choosing Modify > Bitmap > Trace Bitmap.
@param threshold Integer controlling the number of colors in the traced bitmap. Acceptable values are integers between 0 and 500.
@param minimumArea Integer specifying the pixel radius. Allowed integer range: 1 to 1000.
@param curveFit String choosing outline smoothness. Allowed curveFit values: "pixels", "very tight", "tight", "normal", "smooth", and "very smooth".
@param cornerThreshold String like curveFit, but for bitmap-image corners. Allowed cornerThreshold values: "many corners", "normal", and "few corners".

```typescript
declare class Document {
    traceBitmap(
        threshold: number,
        minimumArea: number,
        curveFit: string,
        cornerThreshold: string,
        ): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
