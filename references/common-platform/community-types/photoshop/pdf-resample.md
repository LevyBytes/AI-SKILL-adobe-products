# PDFResample

Community declaration reference: Photoshop/2015.5.

Downsampling choices for PDF saves.

```typescript
declare enum PDFResample {
    /**
    - Performs no downsampling.
      */
      NONE = 0,
    /**

    - Calculates the average color for pixels in a sample area, then replaces that whole area with the average pixel color at the specified resolution.
      */
      PDFAVERAGE = 1,
    /**

    - Determines pixel color with a weighted average, which usually improves results over simple average downsampling. It is the slowest and most exact approach, producing the smoothest gradations.
      */
      PDFBICUBIC = 3,
    /**

    - Takes the center pixel in the sample area and uses that pixel color for the entire area; it greatly shortens conversion time, but images become less smooth and continuous.
      */
      PDFSUBSAMPLE = 2,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
