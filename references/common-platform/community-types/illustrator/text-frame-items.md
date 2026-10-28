# TextFrameItems

Community declaration reference: Illustrator/2022.

Collection containing TextFrame objects.

```typescript
declare class TextFrameItems extends Array<TextFrame> {
    /**
    - Count of items held by this collection.
      */
      readonly length: number
    /**

    - Container object for this object.
      */
      readonly parent: object
    /**

    - Class-name string for this object.
      */
      readonly typename: string
    /**

    - Creates a point text frame item.
      */
      add(): TextFrame
    /**

    - Creates an area text frame item.
    - @param textPath Path item associated with the text frame.
    - @param orientation Text orientation.
    - @param baseFrame Base text frame, when one exists.
    - @param postFix Whether postfix/prefix placement is used with baseFrame.
      */
      static areaText(
      textPath: PathItem,
      orientation?: TextOrientation,
      baseFrame?: TextFrame,
      postFix?: boolean,
      ): TextFrame
    /**

    - Returns the first collection item that has the supplied name.
    - @param name
      */
      getByName(name: string): TextFrame
    /**

    - Creates an on-path text frame item.
    - @param textPath Path item associated with the text frame.
    - @param startTValue Start position of text along a path, expressed relative to the path's segments (path text only).
    - @param endTValue End position of text along a path, expressed relative to the path's segments (path text only).
    - @param orientation Text orientation.
    - @param baseFrame Base text frame, when one exists.
    - @param postFix Whether postfix/prefix placement is used with baseFrame.
      */
      static pathText(
      textPath: PathItem,
      startTValue?: number,
      endTValue?: number,
      orientation?: TextOrientation,
      baseFrame?: TextFrame,
      postFix?: boolean,
      ): TextFrame
    /**

    - Creates a point text frame item.
    - @param anchor Position coordinates for the anchor point.
    - @param orientation Text orientation.
      */
      static pointText(anchor: Point | [number, number], orientation?: TextOrientation): TextFrame
    /**

    - Removes every element.
      */
      removeAll(): void
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
