# RasterizeType

Community declaration reference: Photoshop/2015.5.

Layer content category to rasterize.

```typescript
declare enum RasterizeType {
    /**
    - Converts every vector element on the layer to pixels.
      */
      ENTIRELAYER = 5,
    /**

    - Converts a shape layer's fill to pixels while keeping the vector mask intact.
      */
      FILLCONTENT = 3,
    /**

    - Converts a shape layer's vector mask into a layer mask.
      */
      LAYERCLIPPINGPATH = 4,
    /**

    - Converts the selected layers to pixels.
      */
      LINKEDLAYERS = 6,
    /**

    - Converts a shape layer to pixels.
      */
      SHAPE = 2,
    /**

    - Converts type on a type layer to pixels, without converting other vector data on that layer.
      */
      TEXTCONTENTS = 1,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
