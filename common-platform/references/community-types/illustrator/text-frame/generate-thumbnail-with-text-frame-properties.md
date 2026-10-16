# TextFrame.generateThumbnailWithTextFrameProperties

Community declaration reference: Illustrator/2022.

Creates a thumbnail based on the first character's properties in the text frame.
@param textString Text content used while creating the thumbnail.
@param fontSize Point size applied to the text string.
@param textColor Color assigned to the text string.
@param destinationPath Storage location for the generated thumbnail.

```typescript
declare class TextFrame extends PageItem {
    generateThumbnailWithTextFrameProperties(
      textString: string,
      fontSize: number,
      textColor: Color,
      destinationPath: File,
      ): void
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
