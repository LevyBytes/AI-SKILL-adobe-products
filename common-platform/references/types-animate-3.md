# Animate (part 3)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

declare const flash: Flash

/\*\*

- Concise variable alias for flash.
  \*/
  declare interface fl extends Flash {}

declare const fl: Flash

/\*\*

- SpriteSheetExporter extends Item.
  \*/
  declare class SpriteSheetExporter extends Item {
  /\*\*
  - Specifies the sprite-packing algorithm: "basic" (the default), or "maxRects".
    \*/
    algorithm: string
    /\*\*
  - When enabled, symbol frames may be rotated while they are packed into the sprite sheet.
    \*/
    allowRotate: boolean
    /\*\*
  - When enabled, extra whitespace may be trimmed from symbol frames during sprite-sheet packing. The default value is true.
    \*/
    allowTrimming: boolean
    /\*\*
  - Reports the application name used to generate the sprite sheet. Future Flash Pro sprite-sheet generator plugins can use this property.
    \*/
    readonly app: string
    /\*\*
  - Determines whether the sprite sheet exporter computes the final sheet dimensions by itself.
    \*/
    autoSize: boolean
    /\*\*
  - Sets the pixel padding placed around every sprite in the sprite sheet.
    \*/
    borderPadding: number
    /\*\*
  - True when the framework named by SpriteSheetExporter.layoutFormat supports border padding.
    \*/
    readonly canBorderPad: boolean
    /\*\*
  - True when the framework named by SpriteSheetExporter.layoutFormat may rotate symbol frames while placing them in the sprite sheet.
    \*/
    readonly canRotate: boolean
    /\*\*
  - True when the framework named by SpriteSheetExporter.layoutFormat supports shape padding.
    \*/
    readonly canShapePad: boolean
    /\*\*
  - True when the framework named by SpriteSheetExporter.layoutFormat can stack duplicate symbol frames inside the sprite sheet.
    \*/
    readonly canStackDuplicateFrames: boolean
    /\*\*
  - True when the framework named by SpriteSheetExporter.layoutFormat can trim excess whitespace from symbol frames during sprite-sheet placement.
    \*/
    readonly canTrim: boolean
    /\*\*
  - Identifies the sprite sheet image-file format. Possible values include "RGBA8888", "RGB888x", and "RGB8". Sprite sheet generator plugins may use this property.
    \*/
    readonly format: string
    /\*\*
  - Gives the name of the sprite sheet image file. Sprite sheet generator plugins may use this property.
    \*/
    readonly image: string
    /\*\*
  - Defines the metadata format used for the sprite sheet. Available values come from the Sprite Sheet Plugin directory, and "JSON" (JavaScript Object Notation) is one possible value. A script supplies the layout format ID string so it can match one of the .jsfl files for the Sprite Sheet plugin in flashroot/Common/Configuration/Sprite Sheet Plugins. Those files use the layoutformat.plugin.jsfl naming pattern, and the string you pass is set to layoutformat. For example, layoutFormat can be "Starling", "cocos2D v2", or "cocos2D v3".
    \*/
    layoutFormat: string
    /\*\*
  - Limits the generated sprite sheet height when autoSize = true, with the value capped at 8192.
    \*/
    maxSheetHeight: number
    /\*\*
  - Limits the generated sprite sheet width when autoSize = true, with the value capped at 8192.
    \*/
    maxSheetWidth: number
    /\*\*
  - True when the exported symbol frames cannot all fit inside the sprite sheet size currently specified.
    \*/
    readonly overflowed: boolean
    /\*\*
  - Sets how many pixels of padding are applied to each exported symbol frame as it is added to the sprite sheet.
    \*/
    shapePadding: number
    /\*\*
  - Sets the sprite sheet height. This value becomes read-only when SpriteSheetExporter.autoSize is set to true.
    \*/
    sheetHeight: number
    /\*\*
  - Sets the sprite sheet width. This value becomes read-only when SpriteSheetExporter.autoSize is set to true.
    \*/
    sheetWidth: number
    /\*\*
  - Controls whether duplicate symbol frames can be stacked while they are added to the sprite sheet. The default is true.
    \*/
    stackDuplicateFrames: boolean
    /\*\*
  - Reports the Flash Pro application version number. Sprite sheet plugins may use this property.
    \*/
    readonly version: string
    /\*\*
  - Puts the given BitmapItem or Bitmap on the sprite sheet object.
  - @param bitmap The BitmapItem or Bitmap to place on the sheet.
    \*/
    addBitmap(bitmap: BitmapItem | BitMap): void
    /\*\*
  - Registers the given SymbolItem or SymbolInstance for sprite sheet generation.
  - @param symbol The SymbolItem or SymbolInstance to register for export.
  - @param name The symbol instance name to use for export.
  - @param beginFrame The first frame in the exported symbol range.
  - @param endFrame The final frame in the exported symbol range.
    \*/
    addSymbol(
    symbol: SymbolItem | SymbolInstance,
    name?: string,
    beginFrame?: number,
    endFrame?: number,
    ): boolean
    /\*\*
  - Prepares SpriteSheetExporter to build a fresh sprite sheet. This call is unnecessary for an exporter created with new, but it is required when reusing the same exporter for several sprite sheets.
    \*/
    beginExport(): void
    /\*\*
  - Updates the symbol frame range that will participate in the sprite sheet.
  - @param symbol A SymbolItem or SymbolInstance that is already part of the sprite sheet.
  - @param beginFrame Optional. First frame in the range selected for output.
  - @param endFrame Optional. Final frame in the range selected for output.
    \*/
    changeSymbol(symbol: SymbolItem | SymbolInstance, beginFrame?: number, endFrame?: number): boolean
    /\*\*
  - Writes the sprite sheet to an image file plus a metadata file derived from the path parameter. The returned string contains metadata produced by the sprite sheet plugin, or nothing when an error occurs.
  - @param path String; A file path without an extension, used as the base name for the exported files.
  - @param imageFormat String or Object. Either a string or an object describing the image format to generate.
  - - String: Valid values are "png" or "jpg"; the exporter reuses the values that were last applied.
  - - Object: When an object is passed, it must include at least a string property "format" with a value of either "png" or "jpg". Optional entries include "backgroundColor," for a color value with optional alpha; "quality" (jpg only), with values 1 through 100; and "bitDepth" (png only), with allowed values 8, 24 or 32.
  - @param writeMetaData Optional. Boolean; Controls whether the metadata file is written beside the image file. Default: true.
    \*/
    exportSpriteSheet(
    path: string,
    imageFormat?: string | ImageFormat,
    writeMetaData?: boolean,
    ): string
    /\*\*
  - Takes the given BitmapItem or Bitmap out of the sprite sheet object.
  - @param bitmap The BitmapItem or Bitmap to take out.
    \*/
    removeBitmap(bitmap: BitmapItem | BitMap): void
    /\*\*
  - Deletes the given SymbolItem or SymbolInstance from this sprite sheet.
  - @param symbol The SymbolItem or SymbolInstance to delete.
    \*/
    removeSymbol(symbol: SymbolItem | SymbolInstance): boolean
    }

/\*\*

- fl.compilerErrors exposes the Compiler Errors panel through the flash object (fl); see flash object (fl).
  \*/
  declare class CompilerErrors {
  /\*\*
  - Empties the Compiler Errors panel.
    \*/
    clear(): void
    /\*\*
  - Writes the Compiler Errors panel contents to a local text file.
  - @param fileURI A string in file:/// URI form that names the saved file. If fileURI already exists and bAppendToFile is not set to true, the existing file is overwritten without warning.
  - @param bAppendToFile Optional Boolean value that chooses whether Compiler Errors panel contents are appended to fileURI (true) or are not appended (false). Default: false.
  - @param bUseSystemEncoding Optional Boolean value that chooses whether Compiler Errors panel text is saved with the system encoding. When this value is false (the default), text from the Compiler Errors panel is saved with UTF-8 encoding and Byte Order Mark characters at the beginning. Default: false.
    \*/
    save(fileURI: string, bAppendToFile?: boolean, bUseSystemEncoding?: boolean): void
    }

/\*\*

- fl.componentsPanel exposes the Components panel through the flash object (fl); see flash object (fl).
  \*/
  declare class ComponentsPanel {
  /\*\*
  - Places the specified component in the document at the requested position.
  - Example calls:
  - fl.componentsPanel.addItemToDocument({x:0, y:0}, "User Interface", "CheckBox");
  - fl.componentsPanel.addItemToDocument({x:0, y:100}, "Data", "WebServiceConnector");
  - fl.componentsPanel.addItemToDocument({x:0, y:200}, "User Interface", "Button");
  - @param position A point, such as {x:0, y:100}, that gives the location where the component is added. Specify position relative to the component center point, rather than the component registration point (also called origin point or zero point).
  - @param categoryName A string naming the component category, for example "Data". Accepted category names are listed by the panel.
  - @param componentName A string naming the component inside the specified category, for example "WebServiceConnector". Accepted component names are listed by the panel.
    \*/
    addItemToDocument(position: Point, categoryName: string, componentName: string): void
    /\*\*
  - Refreshes the component list shown in the Components panel.
  - @returns true when the Component panel list is refreshed; otherwise false.
    \*/
    reload(): boolean
    }
