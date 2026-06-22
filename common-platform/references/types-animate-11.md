# Animate (part 11)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- JavaScript reaches drawingLayer as a child of the flash object. Extensible tools use drawingLayer for temporary drawing during a drag operation, such as displaying a selection marquee. Call drawingLayer.beginFrame() before invoking any other drawingLayer methods.
  \*/
  declare class DrawingLayer {
  /\*\*
  - Switches Flash into drawing mode, the temporary drawing state used while the mouse button is held down. Extensible tools are the usual callers for this method.
  - @param persistentDraw Optional Boolean value. When true, drawing from the previous frame stays on the Stage until a later beginDraw() or beginFrame() call. Here, frame means the drawing start/end interval, not timeline frames. For instance, a rectangle tool can show an outline while the user drags the mouse; set persistentDraw to true if that preview shape should remain after mouse release.
    \*/
    beginDraw(persistentDraw?: boolean): void
    /\*\*
  - Clears earlier drawingLayer output and prepares for the next drawing commands. Call it after drawingLayer.beginDraw(). Content drawn between drawingLayer.beginFrame() and drawingLayer.endFrame() stays visible on the Stage until the next beginFrame() and endFrame() pair. In this context, frame describes the drawing command span rather than timeline frames. Extensible tools are the usual callers for this method. See drawingLayer.beginDraw().
    \*/
    beginFrame(): void
    /\*\*
  - From the current pen location, draws a cubic curve using these parameters as the cubic segment coordinates. Extensible tools are the usual callers for this method.
  - @param x1Ctrl Floating-point x location for the first control point.
  - @param y1Ctrl Floating-point y location for the first control point.
  - @param x2Ctl Floating-point x position for the middle control point.
  - @param y2Ctl Floating-point y position for the middle control point.
  - @param xEnd Floating-point x coordinate at the endpoint.
  - @param yEnd Floating-point y coordinate at the endpoint.
    \*/
    cubicCurveTo(
    x1Ctrl: number,
    y1Ctrl: number,
    x2Ctl: number,
    y2Ctl: number,
    xEnd: number,
    yEnd: number,
    ): void
    /\*\*
  - Adds a quadratic curve segment from the current drawing position to the requested endpoint. Extensible tools are the usual callers for this method.
  - @param xCtl Floating-point x position for the control point.
  - @param yCtl Floating-point y position for the control point.
  - @param xEnd Floating-point x coordinate at the endpoint.
  - @param yEnd Floating-point y coordinate at the endpoint.
    \*/
    curveTo(xCtl: number, yCtl: number, xEnd: number, yEnd: number): void
    /\*\*
  - Renders the path supplied through the path parameter. Extensible tools are the usual callers for this method.
  - @param path Path object to draw.
    \*/
    drawPath(path: Path): void
    /\*\*
  - Leaves drawing mode, the temporary drawing state used while the mouse button is down. Extensible tools are the usual callers for this method.
    \*/
    endDraw(): void
    /\*\*
  - Marks the end of a drawing command group. That group is all content drawn between drawingLayer.beginFrame() and drawingLayer.endFrame(). The next drawingLayer.beginFrame() call removes whatever was produced by this group. Extensible tools are the usual callers for this method.
    \*/
    endFrame(): void
    /\*\*
  - Draws a line from the current drawing position to point (x,y). Extensible tools are the usual callers for this method.
  - @param x Floating-point x coordinate for the line endpoint.
  - @param y Floating-point y coordinate for the line endpoint.
    \*/
    lineTo(x: number, y: number): void
    /\*\*
  - Changes the current drawing position. Extensible tools are the usual callers for this method.
  - @param x Floating-point x coordinate for the position where drawing starts.
  - @param y Floating-point y coordinate for the position where drawing starts.
    \*/
    moveTo(x: number, y: number): void
    /\*\*
  - Creates and returns a new Path object. Extensible tools are the usual callers for this method. See Path object.
    \*/
    newPath(): Path
    /\*\*
  - Sets the color used by subsequently drawn data. This affects persistent data only. To use it, pass true to drawingLayer.beginDraw(). Extensible tools are the usual callers for this method. See drawingLayer.beginDraw().
  - @param color Color for subsequently drawn data. Accepted encodings:
  - - String: "#RRGGBB" or "#RRGGBBAA"
  - - Hexadecimal number: 0xRRGGBB
  - - Integer equal to the decimal value of a hexadecimal number
      \*/
      setColor(color: string | number): void
      /\*\*
  - Unavailable method.
    \*/
    setFill(): void
    /\*\*
  - Unavailable method.
    \*/
    setStroke(): void
    }

/\*\*

- A Path object stores a sequence of straight line segments, curved segments, or both, and is commonly used by extensible tools. This example obtains a Path instance through fl.drawingLayer:
- path = fl.drawingLayer.newPath();
- Related: drawingLayer object.
  \*/
  declare class Path {
  /\*\*
  - Integer count of points in the path. A newly created path contains 0 points.
    \*/
    readonly nPts: number
    /\*\*
  - Adds a cubic Bezier curve segment to the path.
  - @param xAnchor Floating-point x coordinate for control point 1.
  - @param yAnchor Floating-point y coordinate for control point 1.
  - @param x2 Floating-point x coordinate for control point 2.
  - @param y2 Floating-point y coordinate for control point 2.
  - @param x3 Floating-point x coordinate for control point 3.
  - @param y3 Floating-point y coordinate for control point 3.
  - @param x4 Floating-point x coordinate for control point 4.
  - @param y4 Floating-point y coordinate for control point 4.
    \*/
    addCubicCurve(
    xAnchor: number,
    yAnchor: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number,
    x4: number,
    y4: number,
    ): void
    /\*\*
  - Adds a quadratic Bezier segment to the path.
  - @param xAnchor Floating-point x coordinate for control point 1.
  - @param yAnchor Floating-point y coordinate for control point 1.
  - @param x2 Floating-point x coordinate for control point 2.
  - @param y2 Floating-point y coordinate for control point 2.
  - @param x3 Floating-point x coordinate for control point 3.
  - @param y3 Floating-point y coordinate for control point 3.
    \*/
    addCurve(xAnchor: number, yAnchor: number, x2: number, y2: number, x3: number, y3: number): void
    /\*\*
  - Inserts a point into the path.
  - @param x Floating-point x position for the point.
  - @param y Floating-point y position for the point.
    \*/
    addPoint(x: number, y: number): void
    /\*\*
  - Deletes every point from the path.
    \*/
    clear(): void
    /\*\*
  - Closes the path by appending a point at the first point's location and extending the path to it. With an empty path, no points are inserted.
    \*/
    close(): void
    /\*\*
  - Builds a shape on the Stage from the current stroke and fill settings, then clears the path. Two optional parameters let you suppress fill and stroke on the resulting shape object. When either parameter is omitted or false, the current fill or stroke value is used.
  - @param bSuppressFill Boolean value that suppresses the shape fill when true. The default value is false. Optional.
  - @param bSuppressStroke Boolean value that suppresses the shape stroke when true. The default value is false. Optional.
    \*/
    makeShape(bSuppressFill?: boolean, bSuppressStroke?: boolean): void
    /\*\*
  - Begins a fresh contour in the path.
    \*/
    newContour(): void
    }

/\*\*

- fl.Math exposes the Math object as a read-only property of the flash object. Its methods handle common mathematical operations.
  \*/
  declare class \_Math {
  /\*\*
  - Concatenates matrices and returns the result.
  - @returns A concatenated object matrix.
  - @params Matrix objects to concatenate (see Matrix object). Required fields: a, b, c, d, tx, ty.
    \*/
    concatMatrix(mat1: Matrix, mat2: Matrix): Matrix
    /\*\*
  -
  - @param mat Matrix object to invert (see Matrix object). It must include fields a, b, c, d, tx, and ty.
    \*/
    invertMatrix(mat: Matrix): Matrix
    /\*\*
  - Calculates how far apart two points are.
  - @returns Floating-point distance between the points.
  - @params Points whose distance is measured.
    \*/
    pointDistance(pt1: Point, pt2: Point): number
    /\*\*
  - Transforms a point by applying a matrix.
  - @returns The transformed point.
  - @param matrix Matrix object applied to the point.
  - @param point Point receiving the matrix transform.
    \*/
    transformPoint(matrix: Matrix, point: Point): Point
    }

/\*\*

- Troubleshooting output, including syntax errors, is displayed by the Output panel object. Access it with fl.outputPanel or flash.outputPanel. See fl.outputPanel.
  \*/
  declare class OutputPanel {
  /\*\*
  - Empties the Output panel. Batch-processing scripts can clear an error list, or save it in increments by pairing this method with outputPanel.save().
    \*/
    clear(): void
    /\*\*
  - Writes the Output panel contents to a local text file, either replacing that file or appending to it.
  - An invalid or missing fileURI reports an error.
  - For batch processing, this method can preserve compiler output. For example, a JSFL file can compile multiple components; compile errors appear in the Output panel, and this method can save those errors to a text file for automatic parsing by the build system.
  - @param fileURI String written as a file:/// URI that identifies the local file for the Output panel contents.
  - @param bAppendToFile Optional Boolean value. true appends the Output panel contents to the output file; false overwrites an existing output file. Default: false.
  - @param bUseSystemEncoding Optional Boolean value. true saves Output panel text with the system encoding; false writes UTF-8 text with Byte Order Mark characters at the start. Default: false.
    \*/
    save(fileURI: string, bAppendToFile?: boolean, bUseSystemEncoding?: boolean): void
    /\*\*
  - Sends a text string to the Output panel, adds a newline, and shows the panel if it is hidden. The behavior matches fl.trace() and the ActionScript trace() statement.
  - To output a blank line, call outputPanel.trace("") or outputPanel.trace("\n"). The second form can be embedded inline so \n becomes part of the message string.
  - @param message String containing text to append to the Output panel.
    \*/
    trace(message: string): void
    }

/\*\*

- fl.presetPanel exposes the presetPanel object for the Motion Presets panel (Window > Motion Presets).
  _/
  declare class PresetPanel {
  /\*\*PresetItem array for entries in the Motion Presets panel (see presetItem object). Each array entry is either a folder or a preset. _/
  items: PresetItem[]
  /\*\*
  - When one motion tween is selected on the Stage, this method adds that motion to the Motion Presets panel under the requested folder and name. The namePath path must already exist in the panel.
  - If namePath already matches a preset, nothing changes and false is returned.
  - Without namePath, the item is placed in the Custom Presets folder as "Custom preset n," with n increasing for each item added this way.
  - @returns true when the item is added successfully; otherwise false.
  - @param namePath Optional string naming the path and item name to add to the Motion Presets panel.
    \*/
    addNewItem(namePath?: string): boolean
    /\*\*
  - Applies either the named preset or the current selection to the current Stage selection. The target must be a motion tween, a symbol, or something convertible to a symbol. For a motion tween, applying the preset replaces the existing motion without asking for confirmation.
  - This method fails in these cases:
  - - No item exists at presetPath.
  - - presetPath is omitted and no preset is selected.
  - - presetPath is omitted while multiple presets are selected.
  - - The selected Stage item is not a symbol and cannot be converted to one.
  - @returns true when the preset is applied successfully; otherwise false.
  - @param presetPath Optional string containing the full path and preset name as shown in the Motion Presets panel; when omitted, the current preset selection is applied.
    \*/
    applyPreset(presetPath?: string): boolean
    /\*\*
  - Removes the named folder and all of its subfolders from the Motion Presets panel folder tree, including presets inside those folders. Folders under Default Presets folder cannot be deleted.
  - When folderPath is omitted, the currently selected folders are removed.
  - Note: Folder deletion happens without a user confirmation prompt and cannot be undone.
  - @returns true when the folder or folders are deleted successfully; otherwise false.
  - @param folderPath Optional string identifying the Motion Presets panel folder to delete.
    \*/
    deleteFolder(folderPath?: string): boolean
    /\*\*
  - Removes the named preset from the Motion Presets panel. When namePath is omitted, the currently selected presets are removed. Items under Default Presets folder cannot be deleted.
  - Note: Item deletion happens without a user confirmation prompt and cannot be undone.
  - @returns true when the item or items are deleted successfully; otherwise false.
  - @param namePath Optional string containing the path and name for the Motion Presets panel item to delete.
    \*/
    deleteItem(namePath?: string): boolean
    /\*\*
  - Changes the expansion state of the currently selected Motion Presets panel folder or folders. To act on folders outside the current selection, provide folderPath.
  - @returns true when the folder or folders are expanded or collapsed successfully; otherwise false.
  - @param bExpand Boolean value selecting expand (true) or collapse (false). Optional; defaults to true.
  - @param bRecurse Boolean value selecting whether subfolders are also expanded or collapsed (true) or left alone (false). Optional; defaults to false.
  - @param folderPath Optional string path for the folder to expand or collapse.
    \*/
    expandFolder(bExpand?: boolean, bRecurse?: boolean, folderPath?: string): boolean
    /\*\*
  - Exports the current preset selection, or the named preset, to an XML file. Only presets can be exported; attempting to export a folder fails. The method also fails when it would overwrite an existing disk file.
  - If fileURI ends with a slash (/) and therefore omits a filename, the exported file uses the preset's own name. When namePath is omitted, the currently selected preset is exported. See the example below.
  - @returns true when the preset is exported successfully; otherwise false.
  - @param fileURI file:/// URI string for the export destination; it may include both directory path and filename. See "Description," below, for more information.
  - @param namePath Optional string naming the path and item to select from the Motion Presets panel.
    \*/
    exportItem(fileURI: string, namePath?: string): boolean
    /\*\*
  - Looks up the index location of an item in the Motion Presets panel.
  - @returns Integer index of the requested preset in the presetPanel.items array. Without presetName, the index for the currently specified preset is returned. The method returns -1 in these cases:
  - - presetName is omitted and no preset is selected.
  - - presetName is omitted while multiple presets are selected.
  - - presetName is provided but no panel item matches it.
  - @param presetName Optional string giving the preset name whose index value should be returned.
    \*/
    findItemIndex(presetName?: string): number
    /\*\*
  - Provides an array of presetItem objects for the current selection in the Motion Presets panel (see presetItem object). Each array item is either a folder or a preset.
    \*/
    getSelectedItems(): PresetItem[]
    /\*\*
  - Imports a preset into the Motion Presets panel from a specified XML file. The namePath path must already exist in the panel.
  - Use presetPanel.exportItem() to create XML files that are valid for import.
  - Without namePath, the imported preset goes into the Custom Presets folder and uses the imported file name without the XML extension.
  - @returns true when the file imports successfully; otherwise false.
  - @param fileURI String written as a file:/// URI that identifies the XML file to import as a Motion Presets panel preset.
  - @param namePath Optional string specifying the destination folder for the imported file and the name to assign it.
    \*/
    importItem(fileURI: string, namePath?: string): boolean
    /\*\*
  - Moves the named item into the requested folder.
  - Passing an empty string ("") for folderPath moves items into the Custom Presets folder. When namePath is omitted, the current selection is moved.
  - Items cannot be moved into or out of the Default Presets folder.
  - @returns true when the items move successfully; otherwise false.
  - @param folderPath String path for the Motion Presets panel folder that will receive the item or items.
  - @param namePath Optional string containing the path and item name to move.
    \*/
    moveToFolder(folderPath: string, namePath?: string): boolean
    /\*\*
  - Adds a folder to the Motion Presets panel folder tree. Only one new folder level can be created per call. For example, if folderPath is "Custom Presets/My First Folder/My Second Folder", then "Custom Presets/My First Folder" must already exist in the folder tree.
  - If folderPath is not supplied, the first level below "Custom Presets" receives a folder named "Untitled folder n"; n increments each time a folder is added this way.
  - @returns true when the folder is added successfully; otherwise false.
  - @param folderPath Optional string describing where to create the new Motion Presets panel folder and what to call it.
    \*/
    newFolder(folderPath?: string): boolean
    /\*\*
  - Renames the currently selected preset or folder to newName. The operation succeeds only when exactly one preset or folder inside Custom Presets folder is selected. The method fails in these cases:
  - - Selection is empty.
  - - More than one item is selected.
  - - The selected item resides in the Default Presets folder.
  - - newName already names an item in the same location.
  - @returns true when the preset or folder is renamed successfully; otherwise false.
  - @param newName String giving the new preset or folder name.
    \*/
    renameItem(newName: string): boolean
    /\*\*
  - Changes selection state for an item in the Motion Presets panel, with an option to replace the existing selection.
  - @returns true when the item is selected or deselected successfully; otherwise false.
  - @param namePath String containing the path and item name to select from the Motion Presets panel.
  - @param bReplaceCurrentSelection Boolean value choosing whether the specified item replaces the existing selection (true) or is added to it (false). Optional; defaults to true.
  - @param bSelect Boolean value choosing select (true) or deselect (false). Optional; defaults to true. Passing false for bSelect ignores bReplaceCurrentSelection.
    \*/
    selectItem(namePath: string, bReplaceCurrentSelection?: boolean, bSelect?: boolean): boolean
    }

/\*\*

- A presetItem object models one preset or folder inside the Motion Presets panel (Window > Motion Presets). presetPanel.items holds the array of presetItem objects.
- Every presetItem property is read only. For actions such as delete, rename, or move, call methods on the presetPanel object.
  \*/
  declare class PresetItem {
  /\*\*
  - Boolean value showing whether Flash installed the item (true) or it is custom content created by you or another user (false). When true, treat the item as "read-only"; it cannot be moved, deleted, or handled by similar operations.
    \*/
    readonly isDefault: boolean
    /\*\*
  - Boolean value showing whether the Motion Presets panel item is a folder (true) or a preset (false).
    \*/
    readonly isFolder: boolean
    /\*\*
  - Integer level for the item within the Motion Presets panel folder structure. Level 0 is used by the Default Folder and Custom Presets folder.
    \*/
    readonly level: number
    /\*\*
  - String name for the preset or folder, excluding path information.
    \*/
    readonly name: string
    /\*\*
  - Indicates whether a Motion Presets panel folder is currently expanded (true) or not expanded (false).
  - For non-folder items, this property is true. Use presetItem.isFolder to distinguish folders from presets.
    \*/
    readonly open: boolean
    /\*\*
  - String path to the item in the Motion Presets panel folder tree, including the item name.
    \*/
    readonly path: string
    }
