# DepthMapSource

Community declaration reference: Photoshop/2015.5.

Lists depth map source options.

```typescript
declare enum DepthMapSource {
    /**
    - Uses the image highlight as the depth map.
      */
      IMAGEHIGHLIGHT = 4,
    /**

    - Uses the layer mask as the depth map.
      */
      LAYERMASK = 3,
    /**

    - Uses no depth map.
      */
      NONE = 1,
    /**

    - Uses the transparency channel as the depth map.
      */
      TRANSPARENCYCHANNEL = 2,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
