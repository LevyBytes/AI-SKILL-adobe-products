# TrapImagePlacementTypes

Community declaration reference: InDesign/2023.

Trap placement choices between vector objects and bitmap images.

```typescript
declare enum TrapImagePlacementTypes {
    /**
    - Builds a trap spanning the edge shared by vector objects and bitmap images.
      */
      CENTER_EDGES = 1953522542,
    /**

    - Makes vector objects overlap adjacent images.
      */
      CHOKE = 1953522536,
    /**

    - Makes bitmap images overlap adjoining objects.
      */
      IMAGES_OVER_SPREAD = 1953526640,
    /**

    - Uses the same trapping rules applied elsewhere in the document. Note: When trapping an object to a photograph, this can create visibly uneven edges as the trap shifts across the edge.
      */
      IMAGE_NEUTRAL_DENSITY = 1953525348,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
