# SymbolItem

Community declaration reference: Animate/22.0.

SymbolItem extends Item.

```typescript
declare class SymbolItem extends Item {
    /**
    - Provides the symbol modification date as a hexadecimal date-and-time string. Editing the symbol's timeline increments this value.
      */
      readonly lastModifiedDate: string
    /**
    - Enables or disables 9-slice scaling for the item.
      */
      scalingGrid: boolean
    /**
    - Supplies a Rectangle object with the positions of the four 9-slice guides. For the rectangle format, see document.addNewRectangle().
      */
      scalingGridRect: Rectangle
    /**
    - Controls whether publishing the FLA file updates the item. The default value is false. Shared library symbols use this property.
      */
      sourceAutoUpdate: boolean
    /**
    - Holds the source FLA file path as a file:/// URI. The path must be absolute rather than relative. Shared library symbols use this property.
      */
      sourceFilePath: string
    /**
    - Names the item inside the source file library. Shared library symbols use this property.
      */
      sourceLibraryName: string
    /**
    - Defines the symbol type. Allowed values: "movie clip", "button", and "graphic".
      */
      symbolType: string
    /**
    - Timeline Object reference.
      */
      readonly timeline: Timeline
    /**
    - Changes a library symbol item into a compiled movie clip.
      */
      convertToCompiledClip(): void
    /**
    - Writes the symbol item to a SWC file.
    - @param outputURI A file:/// URI string for the SWC file that receives the exported symbol. The outputURI must point to a local file; Flash will not create a missing folder for it.
      */
      exportSWC(outputURI: string): void
    /**
    - Writes the symbol item to a SWF file.
    - @param outputURI A file:/// URI string for the SWF file that receives the exported symbol. The outputURI must point to a local file; Flash will not create a missing folder for it.
      */
      exportSWF(outputURI: string): void
    /**
    - Sends one frame from the selected movie clip, graphic, or button symbol instance on the Stage into the Library as a bitmap.
    - @param frameNumber Integer for the frame inside the symbol to export.
    - @param bitmapName String naming the new bitmap added to the Library.
      */
      exportToLibrary(frameNumber: number, bitmapName: string): void
    /**
    - Writes a movie clip, graphic, or button symbol to disk as a PNG sequence.
    - @param outputURI URI for the PNG sequence export destination. This URI must point to a local file. For example: file:///c|/tests/mytest.png.
    - @param startFrameNum Integer for the first frame inside the symbol to export. If this parameter is omitted, all frames are exported.
    - @param endFrameNum Integer for the final frame inside the symbol to export. If this parameter is omitted, all frames are exported.
    - @param matrix Optional. Matrix to append to the PNG sequence being exported.
      */
      exportToPNGSequence(
      outputURI: string,
      startFrameNum?: number,
      endFrameNum?: number,
      matrix?: Matrix,
      ): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
