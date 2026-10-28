# Documents

Community declaration reference: Photoshop/2015.5.

Document collection object.

```typescript
declare class Documents {
    /**
    - Element count for this collection.
      */
      readonly length: number
    /**

    - Container that owns this object.
      */
      readonly parent: object
    /**

    - Object class name.
      */
      readonly typename: string
    /**

    - Returns the collection element at the supplied index.
    - @param index
      */
      [index: number]: Document
    /**

    - Creates a document.
    - @param width Document width.
    - @param height Document height.
    - @param resolution Document resolution, in pixels per inch.
    - @param name Document name.
    - @param mode Document mode.
    - @param initialFill Starting fill for the document.
    - @param pixelAspectRatio Starting pixel aspect ratio for the document.
    - @param bitsPerChannel Bits used for each channel.
    - @param colorProfileName Color profile name assigned to the document.
      */
      add(
      width?: UnitValue | number,
      height?: UnitValue | number,
      resolution?: number,
      name?: string,
      mode?: NewDocumentMode,
      initialFill?: DocumentFill,
      pixelAspectRatio?: number,
      bitsPerChannel?: BitsPerChannelType,
      colorProfileName?: string,
      ): Document
    /**

    - Returns the first collection element matching the supplied name.
    - @param name
      */
      getByName(name: string): Document
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
