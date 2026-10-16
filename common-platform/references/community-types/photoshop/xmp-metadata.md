# XMPMetadata

Community declaration reference: Photoshop/2015.5.

Camera raw image-file settings kept in an XMP file beside the raw file, using the same base name and an XMP extension.

```typescript
declare class XMPMetadata {
    /**
    - Container for this object.
      */
      readonly parent: object
    /**

    - File information represented as raw XML.
      */
      rawData: string
    /**

    - Object class-name value.
      */
      readonly typename: string
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
