# MediaItem

Community declaration reference: InDesign/2023.

Represents a sound or movie page item.

```typescript
declare class MediaItem extends PageItem {
    /**
    - Fires when a MediaItem property value changes; the event bubbles and cannot be canceled.
      */
      static readonly AFTER_ATTRIBUTE_CHANGED: string
    /**

    - Collection containing paths.
      */
      readonly paths: Paths
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
