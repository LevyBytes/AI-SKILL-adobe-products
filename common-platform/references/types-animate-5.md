# Animate (part 5)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Filter groups the supported settings for every filter kind. The value stored in filter.name identifies the filter type and controls which members apply. See filter.name.
- Retrieve filter arrays from one or more objects with document.getFilters(); assign filters to one or more objects with document.setFilters(). See document.getFilters() and document.setFilters().
  \*/
  declare class Filter {
  /\*\*
  - Shadow or highlight color direction, expressed as a floating-point angle in degrees. Valid values are between 0 and 360. Use this member when filter.name is "bevelFilter", "dropShadowFilter", "gradientBevelFilter", or "gradientGlowFilter".
    \*/
    angle: number
    /\*\*
  - Horizontal blur amount in pixels, stored as a float. Valid values are between 0 and 255. This member applies when filter.name is "bevelFilter", "blurFilter", "dropShadowFilter", "glowFilter", "gradientBevelFilter", or "gradientGlowFilter".
    \*/
    blurX: number
    /\*\*
  - Vertical blur amount in pixels, stored as a float. Valid values are between 0 and 255. This member applies when filter.name is "bevelFilter", "blurFilter", "dropShadowFilter", "glowFilter", "gradientBevelFilter", or "gradientGlowFilter".
    \*/
    blurY: number
    /\*\*
  - Filter brightness, represented by a floating-point value. Valid values are between -100 and 100. This member applies when filter.name is "adjustColorFilter".
    \*/
    brightness: number
    /\*\*
  - Filter color. Supply it in any of these forms:
  - - a string formatted as "#RRGGBB" or "#RRGGBBAA"
  - - a hexadecimal number formatted as 0xRRGGBB
  - - an integer containing the decimal equivalent of a hexadecimal number
  - This member applies when filter.name is "dropShadowFilter" or "glowFilter".
    \*/
    color: string | number
    /\*\*
  - Filter contrast, represented by a floating-point value. Valid values are between -100 and 100. This member applies when filter.name is "adjustColorFilter".
    \*/
    contrast: number
    /\*\*
  - Pixel distance between the object and the filter's visible effect. Valid values are from -255 to 255. This member applies when filter.name is "bevelFilter", "dropShadowFilter", "gradientBevelFilter", or "gradientGlowFilter".
    \*/
    distance: number
    /\*\*
  - true enables the selected filter; false disables it.
    \*/
    enabled: boolean
    /\*\*
  - For "dropShadowFilter", true hides the source image and false leaves it displayed.
    \*/
    hideObject: boolean
    /\*\*
  - Highlight color. Supply it in any of these forms:
  - - a string formatted as "#RRGGBB" or "#RRGGBBAA"
  - - a hexadecimal number formatted as 0xRRGGBB
  - - an integer containing the decimal equivalent of a hexadecimal number
  - This member applies when filter.name is "bevelFilter".
    \*/
    highlightColor: string | number
    /\*\*
  - Filter hue, represented by a floating-point value. Valid values are between -180 and 180. This member applies when filter.name is "adjustColorFilter".
    \*/
    hue: number
    /\*\*
  - true makes the shadow internal; false leaves it as a non-inner shadow. This member applies when filter.name is "dropShadowFilter" or "glowFilter".
    \*/
    inner: boolean
    /\*\*
  - true makes the filter a knockout filter; false does not. This member applies when filter.name is "bevelFilter", "dropShadowFilter", "glowFilter", "gradientBevelFilter", or "gradientGlowFilter".
    \*/
    knockout: boolean
    /\*\*
  - Filter category string. Its value controls which other Filter members are usable. Supported values are "adjustColorFilter", "bevelFilter", "blurFilter", "dropShadowFilter", "glowFilter", "gradientBevelFilter", and "gradientGlowFilter".
    \*/
    readonly name: string
    /\*\*
  - Blur quality string. Valid values are "low", "medium", and "high"; "high" behaves like a Gaussian blur. This member applies when filter.name is "bevelFilter", "blurFilter", "dropShadowFilter", "glowFilter", "gradientGlowFilter", or "gradientBevelFilter".
    \*/
    quality: string
    /\*\*
  - Filter saturation, represented by a floating-point value. Valid values are from -100 to 100. This member applies when filter.name is "adjustColorFilter".
    \*/
    saturation: number
    /\*\*
  - Shadow color. Supply it in any of these forms:
  - - a string formatted as "#RRGGBB" or "#RRGGBBAA"
  - - a hexadecimal number formatted as 0xRRGGBB
  - - an integer containing the decimal equivalent of a hexadecimal number
  - This member applies when filter.name is "bevelFilter".
    \*/
    shadowColor: string | number
    /\*\*
  - Filter strength as an integer percentage. Valid values are between 0 and 25,500. This member applies when filter.name is "bevelFilter", "dropShadowFilter", "glowFilter", "gradientGlowFilter", or "gradientBevelFilter".
    \*/
    strength: number
    /\*\*
  - Bevel or glow type string. Valid values are "inner", "outer", and "full". This member applies when filter.name is "bevelFilter", "gradientGlowFilter", or "gradientBevelFilter".
    \*/
    type: string
    }

/\*\*

- Fill describes the Fill color setting from the Tools panel or from a selected shape. Call document.getCustomFill() to obtain a Fill object.
  \*/
  declare class Fill {
  /\*\*
  - For bitmap fills, true clips a shape that is larger than the bitmap and false repeats the bitmap. This member is available only when fill.style is "bitmap". When the shape is smaller than the bitmap, the value is false.
    \*/
    bitmapIsClipped: boolean
    /\*\*
  - Library path and name for the bitmap fill. This member is available only when fill.style is "bitmap".
    \*/
    bitmapPath: string
    /\*\*
  - Fill color. Supply it in any of these forms:
  - - a string formatted as "#RRGGBB" or "#RRGGBBAA"
  - - a hexadecimal number formatted as 0xRRGGBB
  - - an integer containing the decimal equivalent of a hexadecimal number
      \*/
      color: string | number
      /\*\*
  - Gradient colors stored as an array of integers. This member is available only when fill.style is "radialGradient" or "linearGradient". See fill.style.
    \*/
    colorArray: number[] | string[]
    /\*\*
  - Horizontal offset of the gradient focal point from the transformation point, expressed as an integer. For example, 10 positions the focal point at 10/255 of the distance between the transformation point and the gradient edge. With -255, the focal point lands on the gradient's left edge. Default: 0.
    \*/
    focalPoint: number
    /\*\*
  - true renders the fill as a linear RGB gradient interpolation; false uses radial interpolation. The default value is false.
    \*/
    linearRGB: boolean
    /\*\*
  - Matrix object controlling placement, orientation, and scale for gradient fills.
    \*/
    matrix: Matrix
    /\*\*
  - Gradient overflow behavior string. Valid values are "extend", "repeat", and "reflect"; case is ignored for these strings. The default value is "extend".
    \*/
    overflow: string
    /\*\*
  - Integer array, with each value from zero to 255, giving the matching color position. This member is available only when fill.style is "radialGradient" or "linearGradient".
    \*/
    posArray: number[]
    /\*\*
  - Fill style string. Valid values are "bitmap", "solid", "linearGradient", "radialGradient", and "noFill".
  - When the value is "linearGradient" or "radialGradient", fill.colorArray and fill.posArray are also available. When the value is "bitmap", fill.bitmapIsClipped and fill.bitmapPath are also available.
    \*/
    style: string
    }

/\*\*

- Stroke carries the stroke configuration, including custom stroke options. It mirrors the information shown in the Property inspector. Use Stroke with document.setCustomStroke() to update stroke settings for the Tools panel, Property inspector, and current selection. Use document.getCustomStroke() to read stroke settings from the Tools panel and Property inspector, or from the active selection.
- The required members are always style, thickness, color, and breakAtCorners. In Flash CS3, stroke.joinType replaced the deprecated breakAtCorners property. Additional members are available according to the value of stroke.style.
  \*/
  declare class Stroke {
  /\*\*
  - Boolean form of the custom Stroke Style dialog box option named Sharp Corners.
    \*/
    breakAtCorners: boolean
    /\*\*
  - Stroke cap type string. Valid values are "none", "round", and "square".
    \*/
    capType: string
    /\*\*
  - Stroke color. Supply it in any of these forms:
  - - a string formatted as "#RRGGBB" or "#RRGGBBAA"
  - - a hexadecimal number formatted as 0xRRGGBB
  - - an integer containing the base-10 equivalent of a hexadecimal number
  - Note: In Flash 8 and later, use stroke.shapeFill.color instead; this property is deprecated.
    \*/
    color: string | number
    /\*\*
  - Hatching curve type for the stroke. This member is settable only when stroke.style is "hatched" (see stroke.style). Valid values are "straight", "slight curve", "medium curve", and "very curved".
    \*/
    curve: string
    /\*\*
  - Lengths of the visible segments in a dashed line, stored as an integer. This member is available only when stroke.style is dashed (see stroke.style).
    \*/
    dash1: number
    /\*\*
  - Lengths of the blank gaps in a dashed line, stored as an integer. This member is available only when stroke.style is dashed (see stroke.style).
    \*/
    dash2: number
    /\*\*
  - Stippled-line density string. This member is available only when stroke.style is stipple (see stroke.style). Valid values are "very dense", "dense", "sparse", and "very sparse".
    \*/
    density: string
    /\*\*
  - Stippled-line dot size string. This member is available only when stroke.style is stipple (see stroke.style). Valid values are "tiny", "small", "medium", and "large".
    \*/
    dotSize: string
    /\*\*
  - Dot spacing for a dotted line, stored as an integer. This member is available only when stroke.style is dotted. See stroke.style.
    \*/
    dotSpace: number
    /\*\*
  - Hatch-line thickness string. This member is available only when stroke.style is hatched (see stroke.style). Valid values are "hairline", "thin", "medium", and "thick".
    \*/
    hatchThickness: string
    /\*\*
  - Hatched-line jiggle string. This member is available only when stroke.style is hatched (see stroke.style). Valid values are "none", "bounce", "loose", and "wild".
    \*/
    jiggle: string
    /\*\*
  - Stroke join type string. Valid values are "miter", "round", and "bevel".
    \*/
    joinType: string
    /\*\*
  - Hatch-line length string. This member is available only when stroke.style is hatched (see stroke.style). Allowed strings are "equal", "slight variation", "medium variation", and "random". Internally, "random" maps to "medium variation".
    \*/
    length: string
    /\*\*
  - Miter angle threshold, stored as a float, above which a segment truncates the miter tip. In other words, truncation occurs only when the miter angle exceeds miterLimit.
    \*/
    miterLimit: number
    /\*\*
  - Ragged-line pattern string. This member is available only when stroke.style is ragged (see stroke.style). Valid strings: "solid"; "simple"; "random"; "dotted"; "random dotted"; "triple dotted"; "random triple dotted".
    \*/
    pattern: string
    /\*\*
  - Hatch-line rotation string. This member is available only when stroke.style is hatched (see stroke.style). Valid values are "none", "slight", "medium", and "free".
    \*/
    rotate: string
    /\*\*
  - Stroke scale type string. Valid values are "normal", "horizontal", "vertical", and "none".
    \*/
    scaleType: string
    /\*\*
  - Fill object representing the stroke's fill settings.
    \*/
    shapeFill: Fill
    /\*\*
  - Hatched-line spacing string. This member is available only when stroke.style is hatched (see stroke.style). Valid values are "very close", "close", "distant", and "very distant".
    \*/
    space: string
    /\*\*
  - Boolean flag indicating whether stroke hinting is enabled for the stroke.
    \*/
    strokeHinting: boolean
    /\*\*
  - Stroke style string. Valid values are "noStroke", "solid", "dashed", "dotted", "ragged", "stipple", and "hatched". Some values require extra Stroke members as follows:
  - - "solid" and "noStroke" require no additional members.
  - - "dashed" adds dash1 and dash2.
  - - "dotted" adds dotSpace.
  - - "ragged" adds pattern, waveHeight, and waveLength.
  - - "stipple" adds dotSize, variation, and density.
  - - "hatched" adds hatchThickness, space, jiggle, rotate, curve, and length.
      \*/
      style: string
      /\*\*
  - Stroke size, stored as an integer.
    \*/
    thickness: number
    /\*\*
  - Stippled-line variation string. This member is available only when stroke.style is stipple (see stroke.style). Valid strings: "one size"; "small variation"; "varied sizes"; "random sizes".
    \*/
    variation: string
    /\*\*
  - Ragged-line wave height string. This member is available only when stroke.style is ragged (see stroke.style). Valid values are "flat", "wavy", "very wavy", and "wild".
    \*/
    waveHeight: string
    /\*\*
  - Ragged-line wavelength string. This member is available only when stroke.style is ragged (see stroke.style). Valid values are "very short", "short", "medium", and "long".
    \*/
    waveLength: string
    }

/\*\*

- library represents the Library panel. It belongs to Document as document.library and is reachable through fl.getDocumentDOM().library.
- The library object stores an array of items whose types include symbols, bitmaps, sounds, and video.
  \*/
  declare class Library {
  /\*\*
  - Item object array stored in the library.
    \*/
    items: Item[]
    /\*\*
  - Library Items in the document that are currently unused. This matches the Library panel menu item named "Select Unused Items".
    \*/
    unusedItems: Item[]
    /\*\*
  - Places the current item, or the named item, onto the Stage at the supplied position.
  - @returns Boolean result: true means the item was added to the document; false means it was not.
  - @param position Point giving the x,y coordinates for the item's center on the Stage.
  - @param namePath String naming the item. For an item inside a folder, include the folder path with slash notation. When namePath is omitted, the current Library selection supplies the item. Optional.
    \*/
    addItemToDocument(position: Point, namePath?: string): boolean
    /\*\*
  - Builds a Library panel item of the requested type and makes that new item the current selection. For details on importing library assets, including sounds, see document.importFile().
  - @returns Boolean result: true means the item was created; false means creation failed.
  - @param type String identifying the item kind. Permitted strings: "video"; "movie clip"; "button"; "graphic"; "bitmap"; "screen"; "folder". This method cannot add a sound to the library. Providing a folder path is equivalent to calling library.newFolder() before this method.
  - @param namePath String naming the item to add. If it is inside a folder, provide the name and folder path with slash notation. This parameter is optional.
    \*/
    addNewItem(type: string, namePath?: string): boolean
    /\*\*
  - Removes the current Library panel item or the named item. When multiple items are selected, this method can remove all selected items.
  - @returns Boolean result: true means the items were deleted; false means deletion failed.
  - @param namePath String naming the item to delete. For an item inside a folder, include its path with slash notation. Passing a folder name deletes that folder and everything inside it. Without a name, Flash deletes the selected item or selected items. To remove every item in the Library panel, select all items before calling this method. This parameter is optional.
    \*/
    deleteItem(namePath?: string): boolean
    /\*\*
  - Duplicates the current selection or the named item. The copy receives a default name, such as item copy, and becomes selected. The command fails when more than one item is selected.
  - @returns Boolean result: true means duplication succeeded; false means it failed. Flash returns false when multiple items are selected.
  - @param namePath String naming the item to duplicate. For an item inside a folder, include its path with slash notation. This parameter is optional.
    \*/
    duplicateItem(namePath?: string): boolean
    /\*\*
  - Opens the selected item, or the named item, in Edit mode.
  - @returns Boolean result: true means the item exists and can be edited; false otherwise.
  - @param namePath String naming the item. For an item inside a folder, include its path with slash notation. When namePath is omitted, the one selected library item opens in Edit mode. If the library has no selection or has multiple selected items, editing opens the first scene in the main timeline instead. This parameter is optional.
    \*/
    editItem(namePath?: string): boolean
    /\*\*
  - Provides the library item's zero-based index. The library index is flat, so folders count in the main index; folder paths can identify nested items.
  - @returns Integer value containing the item's zero-based index.
  - @param namePath String naming the item. If the item is in a folder, include its name and path with slash notation.
    \*/
    findItemIndex(namePath: string): number
    /\*\*
  - Reads a property from the selected item.
  - @returns String value for the requested property.
  - @param property String naming the property. For permitted property parameter values, see the Property summary table for the Item object and the property summaries for subclasses.
    \*/
    getItemProperty(property: string): string
    /\*\*
  - Reports the type of the current selection or of the item identified by a library path.
  - @returns String describing the object type. For possible return values, see item.itemType.
  - @param namePath String naming the item. For an item inside a folder, provide its name and path with slash notation. When namePath is omitted, Flash returns the type of the current selection. If multiple items are selected and no namePath is supplied, Flash ignores the command. This parameter is optional.
    \*/
    getItemType(namePath?: string): string
    /\*\*
  - Returns all items currently selected in the library as an array.
  - @returns Array containing every currently selected library item.
    \*/
    getSelectedItems(): Item[]
    /\*\*
  - Tests whether the named item exists in the library.
  - @returns Boolean result: true means the item exists in the library; false means it does not.
  - @param namePath String naming the item. For an item inside a folder, include its name and path with slash notation.
    \*/
    itemExists(namePath: string): boolean
    /\*\*
  - Moves the current selection or named library item into the requested folder. When folderPath is empty, the items are moved to the top level.
  - @returns Boolean result: true means the item moved successfully; false means it did not.
  - @param folderPath Folder path string such as "FolderName" or "FolderName/FolderName". Use an empty string ("") for folderPath to move an item to the top level.
  - @param itemToMove String naming the item to move. When itemToMove is omitted, the selected items are moved. This parameter is optional.
  - @param bReplace Boolean value. If another item with the same name already exists, true for bReplace replaces that existing item with the item being moved. With false, Flash gives the dropped item a unique name. Default: false. Optional.
    \*/
    moveToFolder(folderPath: string, itemToMove?: string, bReplace?: boolean): boolean
    /\*\*
  - Creates a folder with the provided name, or the default name "untitled folder #" when folderName is not supplied, in the currently selected folder.
  - @returns Boolean result: true means the folder was created successfully; false means creation failed.
  - @param folderPath String naming the folder to create. When this value is a missing path, Flash creates that path. Optional.
    \*/
    newFolder(folderPath?: string): boolean
    /\*\*
  - Changes the name of the selected library item in the Library panel.
  - @returns Boolean value true when the item name changes successfully, and false otherwise. If several items are selected, Flash leaves all names unchanged and returns false, matching user interface behavior.
  - @param name String containing the new name for the library item.
    \*/
    renameItem(name: string): boolean
    /\*\*
  - Selects every library item or clears selection for every library item.
  - @param bSelectAll Boolean value deciding whether all library items are selected or deselected. Omit the parameter, or use the default true, to select everything in the library; false deselects every library item. This parameter is optional.
    \*/
    selectAll(bSelectAll?: boolean): void
    /\*\*
  - Selects the named library item.
  - @returns Boolean result: true means the named item exists; false means it does not.
  - @param namePath String naming the item. For an item inside a folder, include its name and path with slash notation.
  - @param bReplaceCurrentSelection Boolean value choosing whether to replace the current selection or add the item to it. The default value is true, replacing the current selection. This parameter is optional.
  - @param bSelect Boolean value choosing whether an item is selected or deselected. Default: true, meaning select. Optional.
    \*/
    selectItem(namePath: string, bReplaceCurrentSelection: boolean, bSelect?: boolean): boolean
    /\*\*
  - Clears selection for all library items. Equivalent to library.selectAll(false).
    \*/
    selectNone(): void
    /\*\*
  - Assigns a property on all selected library items, ignoring folders.
  - @param property String containing the property name to set. For available properties, see the Property summary table for the Item object and the property summaries for its subclasses. For Item subclasses, consult page 14, "Summary of the DOM structure" (https://help.adobe.com/archive/en_US/flash/cs5/flash_cs5_extending.pdf).
  - @param value Value to assign to the named property.
    \*/
    setItemProperty(property: string, value: any): void
    /\*\*
  - Updates the named item.
  - @returns Boolean result: true means Flash updated the item successfully; false means it did not.
  - @param namePath String naming the item. For an item inside a folder, include its name and path with slash notation. In the user interface, this matches right-clicking an item and choosing Update from the menu. When no name is provided, Flash updates the current selection. This parameter is optional.
    \*/
    updateItem(namePath?: string): boolean
    }
