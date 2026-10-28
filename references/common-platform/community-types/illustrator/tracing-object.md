# TracingObject

Community declaration reference: Illustrator/2022.

Tracing object representation.

```typescript
declare class TracingObject {
    /**
    - Anchor count in the tracing result.
      */
      readonly anchorCount: number
    /**

    - Containing object for this object.
      */
      readonly parent: object
    /**

    - Path count in the tracing result.
      */
      readonly pathCount: number
    /**

    - Source artwork used to create a new tracing object.
      */
      readonly sourceArt: PageItem
    /**

    - Options used for tracing the artwork.
      */
      readonly tracingOptions: TracingOptions
    /**

    - Object class identifier.
      */
      readonly typename: string
    /**

    - Color count used in the tracing result.
      */
      readonly usedColorCount: number
    /**

    - Expands tracing into paths, then removes this tracing object.
    - @param viewed When true, expansion follows the current raster and vector view modes.
      */
      expandTracing(viewed?: boolean): GroupItem
    /**

    - Releases the source artwork for this tracing object and deletes this tracing object.
      */
      releaseTracing(): PageItem
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
