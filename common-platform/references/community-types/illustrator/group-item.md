# GroupItem

Community declaration reference: Illustrator/2022.

Artwork group item object.

```typescript
declare class GroupItem extends PageItem {
    /**
    - Whether group elements are clipped to the clipping path.
      */
      clipped: boolean
    /**

    - Compound path artwork contained in this group.
      */
      readonly compoundPathItems: CompoundPathItems
    /**

    - Graph art items contained in this group.
      */
      readonly graphItems: GraphItems
    /**

    - Group items contained in this group.
      */
      readonly groupItems: GroupItems
    /**

    - Legacy text frame items for this story.
      */
      readonly legacyTextItems: LegacyTextItems
    /**

    - Mesh art items contained in this group.
      */
      readonly meshItems: MeshItems
    /**

    - Non-native art items contained in this group.
      */
      readonly nonNativeItems: NonNativeItems
    /**

    - Complete artwork collection for this group.
      */
      readonly pageItems: PageItems
    /**

    - Path artwork contained in this group.
      */
      readonly pathItems: PathItems
    /**

    - Placed art items contained in this group.
      */
      readonly placedItems: PlacedItems
    /**

    - Plugin art items contained in this group.
      */
      readonly pluginItems: PluginItems
    /**

    - Raster art items contained in this group.
      */
      readonly rasterItems: RasterItems
    /**

    - Symbol items contained in this group.
      */
      readonly symbolItems: SymbolItems
    /**

    - Text frame items contained in this group.
      */
      readonly textFrames: TextFrameItems
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
