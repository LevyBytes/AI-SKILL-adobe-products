# PageItem object lifecycle

Community declaration reference: InDesign/2023.

```typescript
declare class PageItem {
    /**
    - Copies the PageItem to a specified location or offset.
    - @param to Location for the new PageItem, expressed as coordinates in the format [x, y].
    - @param by Offset applied from where the original PageItem sits.
      */
      duplicate(to: [number | string, number | string] | Spread | Page | Layer, by: (number | string)[]): PageItem
    /**
    - Moves the PageItem to another location. Note: either the 'to' parameter or the 'by' parameter is required; when both exist, only the to value is used.
    - @param to New PageItem location, in the format (x, y).
    - @param by Measurement-unit movement amount from the PageItem's current position, using (x, y) format.
      */
      move(to: [number | string, number | string] | Spread | Page | Layer, by: (number | string)[]): void
    /**
    - Removes the PageItem.
      */
      remove(): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
