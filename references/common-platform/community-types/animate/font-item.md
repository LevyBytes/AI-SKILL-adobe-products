# FontItem

Community declaration reference: Animate/22.0.

FontItem extends Item; see Item object for the inherited base behavior.

```typescript
declare class FontItem extends Item {
    /**
    - Reports whether the Font item is bitmapped: true means bitmapped, and false means it is not.
      */
      bitmap: boolean
    /**
    - Reports the bold styling state for the Font item: true for bold, false otherwise.
      */
      bold: boolean
    /**
    - Sets the characters embedded in a SWF file so playback targets do not need those characters installed locally. This mirrors what the Font Embedding dialog box controls.
    - The value is readable as well, so scripts can inspect which characters the Font Embedding dialog box assigned to a particular Font item.
      */
      embeddedCharacters: string
    /**
    - Stores delimited integer ranges for selections available in the Font Embedding dialog box.
    - The same field can be read to discover which characters the Font Embedding dialog box recorded for a Font item.
    - Note: These range numbers map to FontEmbedding/UnicodeTables.xml in the configuration folder.
      */
      embedRanges: string
    /**
    - Note: Flash CS5 Professional exposes this property, but Text Layout Framework (TLF) text ignores it. Starting with Flash Professional CS5, fonts used with TLF text always include variant glyphs. The flash.text.engine (FTE) reference below applies only to Flash Professional CS4.
    - Property; controls variant-glyph output during SWF publishing. true includes those glyphs in the font, while false omits them. Enabling it increases SWF file size, and false is the default.
    - Some languages replace typed characters with context-specific glyphs, including Thai, Arabic, Hebrew, and Greek. For layout or input in those languages, set this property to
      true.
      */
      embedVariantGlyphs: boolean
    /**
    - Names the device font associated with the Font item. Animate shows an error if the string does not match an installed device font. Use fl.isFontInstalled() to check whether a system font is present.
    - Note: After assignment, the stored property value can differ from the string supplied by the script. See the following example.
      */
      font: string
    /**
    - Determines the font format produced during SWF publishing. true emits a font compatible with flash.text.engine (FTE) APIs; false targets flash.text APIs, including text fields. Default is false.
      */
      isDefineFont4Symbol: boolean
    /**
    - Reports the italic styling state for the Font item: true for italic, false otherwise.
      */
      italic: boolean
    /**
    - Gives the Font item size as an integer count of points.
      */
      size: number
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
