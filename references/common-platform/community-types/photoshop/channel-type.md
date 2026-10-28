# ChannelType

Community declaration reference: Photoshop/2015.5.

Identifies the channel category.

```typescript
declare enum ChannelType {
    /**
    - Channel associated with the document color model.
      */
      COMPONENT = 1,
    /**

    - Alpha channel where color marks a masked area.
      */
      MASKEDAREA = 2,
    /**

    - Alpha channel where color marks a selected area.
      */
      SELECTEDAREA = 3,
    /**

    - Alpha channel used to hold a spot color.
      */
      SPOTCOLOR = 4,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
