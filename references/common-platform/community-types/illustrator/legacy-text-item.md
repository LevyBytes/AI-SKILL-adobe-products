# LegacyTextItem

Community declaration reference: Illustrator/2022.

Legacy text items that remain unconverted from documents saved before version 11.

```typescript
declare class LegacyTextItem extends PageItem {
    /**
    - Indicates whether the legacy text item now exists as a native text frame item.
      */
      readonly converted: boolean
    /**

    - Converts a legacy text item to a native text frame, removing the original legacy item.
      */
      convertToNative(): GroupItem
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
