# XMLPreference

Community declaration reference: InDesign/2023.

Preferences for XML behavior.

```typescript
declare class XMLPreference extends Preference {
    /**
    - Default cell tag color, supplied as either a three-double array with 0 to 255 values for R, G, and B, or as a UI color. Restriction: applies only when default cell tag name value creates a new tag. Existing tag colors are not updated. .
      */
      defaultCellTagColor: [number, number, number] | UIColors
    /**

    - Default tag name used for new table cell elements. It can identify an existing tag or create a new one.
      */
      defaultCellTagName: string
    /**

    - New image tag color, supplied as either a three-double array with 0 to 255 values for R, G, and B, or as a UI color. Restriction: applies only while creating the tag.
      */
      defaultImageTagColor: [number, number, number] | UIColors
    /**

    - Default name assigned to newly generated image elements.
      */
      defaultImageTagName: string
    /**

    - Default story tag color, supplied as either a three-double array with 0 to 255 values for R, G, and B, or as a UI color. Restriction: applies only when default story tag name value creates a new tag. Existing tag colors are not updated.
      */
      defaultStoryTagColor: [number, number, number] | UIColors
    /**

    - Default tag name used for new story elements. It can identify an existing tag or create a new one.
      */
      defaultStoryTagName: string
    /**

    - Default table tag color, supplied as either a three-double array with 0 to 255 values for R, G, and B, or as a UI color. Restriction: applies only when default table tag name value creates a new tag. Existing tag colors are not updated. .
      */
      defaultTableTagColor: [number, number, number] | UIColors
    /**

    - Default tag name used for new table elements. It can identify an existing tag or create a new one.
      */
      defaultTableTagName: string
    /**

    - Preference controlling whether deleting related content, such as a page item or text fragment, also deletes the element.
      */
      deleteElementOnContentDeletion: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
