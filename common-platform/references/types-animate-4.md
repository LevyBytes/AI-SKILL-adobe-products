# Animate (part 4)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Document is the object for the Stage; within this API, FLA files are the only items treated as documents. Use fl.getDocumentDOM() when you need the Document object for the active file.
  \*/
  declare const document: Document
  declare class Document {
  /\*\*
  - Holds the same text as the Name field in the Accessibility panel. Screen readers use that value as the spoken object name.
    \*/
    accName: string
    /\*\*
  - Controls whether Stage instances are added automatically to userdefined timeline classes. The default value is true.
    \*/
    as3AutoDeclare: boolean
    /\*\*
  - Records the ActionScript 3.0 "dialect" selected for this document. The default value is "AS3"; set it to "ES" to permit prototype classes allowed by older ECMAScript specifications.
    \*/
    as3Dialect: string
    /\*\*
  - Chooses the frame used when exporting ActionScript 3.0 classes. Frame 1 is used unless another frame is configured.
    \*/
    as3ExportFrame: number
    /\*\*
  - Toggles Strict Mode for the ActionScript 3.0 compiler with true or false. Strict Mode treats warnings as errors, so compilation fails while those errors remain. The default value is true.
    \*/
    as3StrictMode: boolean
    /\*\*
  - Toggles Warnings Mode for the ActionScript 3.0 compiler with true or false. Warnings Mode emits additional diagnostics useful for finding compatibility issues during an ActionScript 2.0 to ActionScript 3.0 update. true is the default.
    \*/
    as3WarningsMode: boolean
    /\*\*
  - Identifies the ActionScript version used by this document. Acceptable values are 1, 2, and 3.
  - To check the document's targeted player version, call document.getPlayerVersion(); because it returns a string, Flash Lite players can also use it.
    \*/
    asVersion: number
    /\*\*
  - Mirrors the Auto Label check box in the Accessibility panel. Use it to make Flash automatically label Stage objects with their associated text.
    \*/
    autoLabel: boolean
    /\*\*
  - Background color can be supplied in these forms:
  - - A "#RRGGBB" or "#RRGGBBAA" string
  - - A hexadecimal 0xRRGGBB number
  - - An integer matching the decimal value of a hexadecimal number
      \*/
      backgroundColor: string | number
      /\*\*
  - Names the active publish profile for this document.
    \*/
    currentPublishProfile: string
    /\*\*
  - Stores the active timeline index. Assigning this property switches the active timeline, almost like document.editScene(); unlike that call, an invalid timeline index produces no error message and the assignment simply fails silently.
    \*/
    currentTimeline: number
    /\*\*
  - Matches the Description field in the Accessibility panel. Screen readers read this description.
    \*/
    description: string
    /\*\*
  - Contains the document's associated top-level ActionScript 3.0 class. Documents not set up for ActionScript 3.0 ignore this property.
    \*/
    docClass: string
    /\*\*
  - Lists entries in the document's ActionScript 3.0 External library path, pointing to SWC files used as runtime shared libraries. Semi-colons separate entries. In the authoring tool, set these entries through File > Publish Settings, then ActionScript 3.0 Script Settings on the Flash tab.
    \*/
    externalLibraryPath: string
    /\*\*
  - Determines accessibility for child objects of the specified object. It uses the inverse of Make Child Objects Accessible in the Accessibility panel: forceSimple true is equivalent to that option being unchecked, while forceSimple false is equivalent to it being checked.
    \*/
    forceSimple: boolean
    /\*\*
  - Frames per second used when the SWF file plays; the default is 12. Setting it matches changing the default frame rate in the FLA file's Document Properties dialog box at Modify > Document.
    \*/
    frameRate: number
    /\*\*
  - Document (Stage) height in pixels.
    \*/
    height: number
    /\*\*
  - Automatically assigned unique integer for identifying a document during a Flash session. Pair it with fl.findDocumentDOM() to target a particular document in an action.
    \*/
    readonly id: number
    /\*\*
  - Library object belonging to the document.
    \*/
    readonly library: Library
    /\*\*
  - Lists the document's ActionScript 3.0 Library path entries, which identify SWC files or folders that contain SWC files. Semi-colons delimit the string. In the authoring tool, configure the entries through File > Publish Settings, then ActionScript 3.0 Script Settings on the Flash tab.
    \*/
    libraryPath: string
    /\*\*
  - Indicates whether Live Preview is enabled. true shows components on the Stage as they will appear in published Flash content, including approximate size; false shows only outlines. The default value is true.
    \*/
    livePreview: boolean
    /\*\*
  - Document name, meaning the FLA file name.
    \*/
    readonly name: string
    /\*\*
  - Platform-specific path for the document. Unsaved documents report undefined.
    \*/
    readonly path: string | undefined
    /\*\*
  - Document path expressed as a file:/// URI. Unsaved documents report undefined.
    \*/
    readonly pathURI: string | undefined
    /\*\*
  - Publish profile names available on the document.
    \*/
    readonly publishProfiles: string[]
    /\*\*
  - Selected objects in the document. With no selection, the array length is zero; with no open document, the result is null.
  - Objects can be added to this array by selecting them in any of these ways:
  - - Select objects on the Stage manually.
  - - Call selection methods including document.setSelectionRect(), document.setSelectionBounds(), document.mouseClick(), document.mouseDblClk(), or document.selectAll().
  - - Select one or more frames manually.
  - - Use Timeline methods for frame selection, including timeline.getSelectedFrames(), timeline.setSelectedFrames(), or timeline.selectAllFrames().
  - - Identify all elements in a particular frame (see Element object). The first example below shows this.
  - - Create an array with one or more elements and assign it to document.selection. See the third example below.
      \*/
      selection: any[] | null
      /\*\*
  - Determines whether the object is accessible. It reverses the Make Movie Accessible setting in the Accessibility panel: document.silent true corresponds to that option being unchecked, and false corresponds to it being checked.
    \*/
    silent: boolean
    /\*\*
  - Lists entries in the document's ActionScript 3.0 Source path, which locates ActionScript class files. Semi-colons separate entries. In the authoring tool, configure them through File > Publish Settings, then ActionScript 3.0 Script Settings on the Flash tab.
    \*/
    sourcePath: string
    /\*\*
  - Returns the JPEG Quality setting from the document's current Publish Profile.
    \*/
    swfJPEGQuality: number
    /\*\*
  - Timeline objects; see Timeline object.
    \*/
    readonly timelines: Timeline[]
    /\*\*
  - Matrix object used by viewMatrix to convert object space into document space while the document is in edit mode. Tool mouse locations are relative to the object currently being edited. See Matrix object.
  - For example, after creating a symbol, double-clicking to edit it, and drawing with the PolyStar tool, point (0,0) is the symbol registration point. The drawingLayer object expects document-space values, so a drawingLayer line from (0,0) begins at the Stage's upper-left corner. viewMatrix supplies the conversion from the edited object's space into document space.
    \*/
    readonly viewMatrix: Matrix
    /\*\*
  - Document (Stage) width in pixels.
    \*/
    width: number
    /\*\*
  - Stage zoom at authoring time, expressed as a percent factor. A value of 1 means 100 percent zoom, 8 means 800 percent, .5 means 50 percent, and so on.
    \*/
    zoomFactor: number
    /\*\*
  - Saves specified data into a document. The data is written into the FLA file and is available to JavaScript after the file is reopened.
  - @param name String naming the data to add.
  - @param type String defining the data type. Acceptable values are "integer", "integerArray", "double", "doubleArray", "string", and "byteArray".
  - @param data Value to add. Valid types are determined by the type parameter.
    \*/
    addDataToDocument(name: string, type: string, data: any): void
    /\*\*
  - Saves specified data with the selected objects. The data is written into the FLA file and remains available to JavaScript after reopening. Persistent data is supported only by symbols and bitmaps.
  - @param name String naming the persistent data.
  - @param type Data type definition. Acceptable values are "integer", "integerArray", "double", "doubleArray", "string", and "byteArray".
  - @param data Value to add. Valid types are determined by the type parameter.
    \*/
    addDataToSelection(name: string, type: string, data: any): void
    /\*\*
  - Adds a filter to the selected objects, placing it at the bottom of the Filters list.
  - @param filterName String naming the filter to add to the Filters list and enable for the selected objects. Allowed values: "adjustColorFilter", "bevelFilter", "blurFilter", "dropShadowFilter", "glowFilter", "gradientBevelFilter", and "gradientGlowFilter".
    \*/
    addFilter(filterName: string): void
    /\*\*
  - Places an item from any open document or library into the specified Document object.
  - @returns true when the add succeeds; false when it does not.
  - @param position Point whose x and y coordinates define where the item is added. The method uses a symbol's center, or the upper-left corner of a bitmap or video.
  - @param item Item object identifying both the item and the library it comes from.
    \*/
    addItem(position: Point, item: Item): boolean
    /\*\*
  - Creates a path between two points. The document's current stroke attributes are used, and the path is added on the current frame and current layer. This corresponds to drawing a line with the line tool.
  - @param startPoint Pair of floating-point numbers giving the line's starting x and y coordinates.
  - @param endpoint Pair of floating-point numbers giving the line's ending x and y coordinates.
    \*/
    addNewLine(startPoint: Point, endpoint: Point): void
    /\*\*
  - Creates an Oval object inside the specified bounding rectangle. The Oval tool behavior is reproduced: current document stroke and fill defaults are applied, and the oval is placed on the current frame and layer. If bSuppressFill and bSuppressStroke are both true, nothing is created.
  - @param boundingRectangle Rectangle describing the oval bounds. For the boundingRectangle format, see document.addNewRectangle().
  - @param bSuppressFill Boolean that creates the shape without a fill when true. Defaults to false; optional.
  - @param bSuppressStroke Boolean that creates the shape without a stroke when true. Defaults to false; optional.
    \*/
    addNewOval(
    boundingRectangle: SimpleShape,
    bSuppressFill?: boolean,
    bSuppressStroke?: boolean,
    ): void
    /\*\*
  - Creates an oval primitive within the specified bounds. This follows Oval Primitive tool behavior, applying the document's current stroke and fill defaults and placing the primitive on the current frame and layer. If bSuppressFill and bSuppressStroke are both true, the call has no effect.
  - @param boundingRectangle Rectangle defining the bounds for the new oval primitive. For the boundingRectangle format, see document.addNewRectangle().
  - @param bSuppressFill Boolean that creates the oval without a fill when true. Defaults to false; optional.
  - @param bSuppressStroke Boolean that creates the oval without a stroke when true. Defaults to false; optional.
    \*/
    addNewPrimitiveOval(
    boundingRectangle: SimpleShape,
    bSuppressFill?: boolean,
    bSuppressStroke?: boolean,
    ): void
    /\*\*
  - Creates a rectangle primitive within the specified bounds. This follows Rectangle Primitive tool behavior, applying the document's current stroke and fill defaults and placing the primitive on the current frame and layer. If bSuppressFill and bSuppressStroke are both true, the call has no effect.
  - @param boundingRectangle Rectangle defining the bounds for the new rectangle primitive. For the boundingRectangle format, see document.addNewRectangle().
  - @param roundness Integer from 0 through 999 indicating the point count used for corner rounding.
  - @param bSuppressFill Boolean that creates the rectangle without a fill when true. Defaults to false; optional.
  - @param bSuppressStroke Boolean that creates the rectangle without a stroke when true. Default: false; omit when not needed.
    \*/
    addNewPrimitiveRectangle(
    boundingRectangle: SimpleShape,
    roundness: number,
    bSuppressFill?: boolean,
    bSuppressStroke?: boolean,
    ): void
    /\*\*
  - Creates a publish profile and selects it as current.
  - @returns Integer index of the new profile in the profiles list. Returns -1 when a profile cannot be created.
  - @param profileName String containing the unique name for the new profile. When omitted, a default name is supplied. May be omitted.
    \*/
    addNewPublishProfile(profileName?: string): number
    /\*\*
  - Creates a rectangle or rounded rectangle inside the specified bounds. Rectangle tool behavior is reproduced with current document stroke and fill defaults, and the rectangle is placed on the current frame and layer. If bSuppressFill and bSuppressStroke are both true, nothing is created.
  - @param boundingRectangle Rectangle defining where the new rectangle is added, using {left:value1,top:value2,right:value3,bottom:value4}. left and top locate the upper-left corner (for example, left:0,top:0 is the Stage upper-left corner); right and bottom locate the lower-right corner. Width is right minus left, and height is bottom minus top.
  - Put another way, rectangle bounds are not all the values shown in the Property inspector. left and top map to X and Y in the Property inspector. right and bottom do not map to W and H in the Property inspector.
  - Example: with bounds {left:10,top:10,right:50,bottom:100}, the Property inspector shows X = 10, Y = 10, W = 40, H = 90.
  - @param roundness Integer value from 0 to 999 for corner roundness, expressed as a number of points. Larger values make corners more rounded.
  - @param bSuppressFill Boolean that creates the shape without a fill when true. Default: false; omit when not needed.
  - @param bSuppressStroke Boolean that creates the rectangle without a stroke when true. Default: false; omit when not needed.
    \*/
    addNewRectangle(
    boundingRectangle: SimpleShape,
    roundness: number,
    bSuppressFill?: boolean,
    bSuppressStroke?: boolean,
    ): void
    /\*\*
  - Adds a scene (Timeline object) immediately after the selected scene and selects the new scene. If the requested scene name already exists, no scene is added and the method returns an error.
  - @returns true when the scene is added successfully; otherwise false.
  - @param name Name for the scene. If omitted, a generated scene name is used.
    \*/
    addNewScene(name?: string): boolean
    /\*\*
  - Inserts a text field and can place text in it. When text is omitted, document.setTextString() can fill the field later.
  - @param boundingRectangle Size and location for the text field. For the boundingRectangle format, see document.addNewRectangle().
  - @param text Optional string to place in the field. When omitted, the Tools panel selection changes to the Text tool. Pass text if you do not want the selected tool to change.
    \*/
    addNewText(boundingRectangle: SimpleShape, text?: string): void
    /\*\*
  - Aligns the selection.
  - @param alignmode String choosing the alignment. Allowed values: "left", "right", "top", "bottom", "vertical center", and "horizontal center".
  - @param bUseDocumentBounds Boolean that aligns to document bounds when true. Otherwise, selected-object bounds are used. Defaults to false; optional.
    \*/
    align(alignmode: string, bUseDocumentBounds?: boolean): void
    /\*\*
  - Arranges non-shape objects in the selection on the Stage.
  - @param arrangeMode Direction for moving the selection. Allowed values are "back", "backward", "forward", and "front". These match the Modify > Arrange menu options.
    \*/
    allowScreens(arrangeMode: string): void
    /\*\*
  - Arranges non-shape objects in the selection on the Stage.
  - @param arrangeMode Direction for moving the selection. Allowed values are "back", "backward", "forward", and "front". These match the Modify > Arrange menu options.
    \*/
    arrange(arrangeMode: string): void
    /\*\*
  - Runs break apart on the current selection.
    \*/
    breakApart(): void
    /\*\*
  - Reports whether document.distributeToKeyframes() is available.
  - @returns true when document.distributeToKeyframes() can be used; false when it cannot.
    \*/
    canDistributeToKeyframes(): boolean
    /\*\*
  - Reports whether the Edit Symbols menu and feature are enabled. This is separate from whether the current selection is editable. Do not use it to test whether fl.getDocumentDOM().enterEditMode() is allowed.
  - @returns true when the Edit Symbols menu and feature are available; otherwise false.
    \*/
    canEditSymbol(): boolean
    /\*\*
  - Reports whether document.revert() or fl.revertDocument() can succeed.
  - @returns true when document.revert() or fl.revertDocument() can be used successfully; otherwise false.
    \*/
    canRevert(): boolean
    /\*\*
  - Reports whether document.testMovie() can succeed.
  - @returns true when document.testMovie() can be used successfully: false otherwise.
    \*/
    canTestMovie(): boolean
    /\*\*
  - Reports whether document.testScene() can succeed.
  - @returns true when document.testScene() can be used successfully; otherwise false.
    \*/
    canTestScene(): boolean
    /\*\*
  - Repositions a filter in the Filters list. Filters above or below newIndex shift as needed. For example, with the filters shown below, fl.getDocumentDOM().changeFilterOrder(3, 0) changes the order this way:
  - Before: blurFilter, dropShadowFilter, glowFilter, gradientBevelFilter
  - After: gradientBevelFilter, blurFilter, dropShadowFilter, glowFilter
  - Issuing fl.getDocumentDOM().changeFilterOrder(0, 2) afterward changes the order this way:
  - Before: gradientBevelFilter, blurFilter, dropShadowFilter, glowFilter
  - After: blurFilter, dropShadowFilter, gradientBevelFilter, glowFilter
  - @param oldIndex Integer for the filter's current zero-based position in the Filters list.
  - @param newIndex Integer for the filter's new list position.
    \*/
    changeFilterOrder(oldIndex: number, newIndex: number): void
    /\*\*
  - Copies the document's current selection to the Clipboard. Use fl.clipCopyString() when copying a string to the Clipboard.
    \*/
    clipCopy(): void
    /\*\*
  - Cuts the document's current selection and places it on the Clipboard.
    \*/
    clipCut(): void
    /\*\*
  - Inserts Clipboard contents into the document.
  - @param bInPlace Boolean that performs paste-in-place when true. false is the default and pastes at the document center. Optional.
    \*/
    clipPaste(bInPlace?: boolean): void
    /\*\*
  - Closes the specified document.
  - @param bPromptToSaveChanges Boolean that shows a save-changes dialog for unsaved changes when true. If false, changed documents are not saved after prompting. Defaults to true; optional.
    \*/
    close(bPromptToSaveChanges?: boolean): void
    /\*\*
  - Changes selected-object lines into fills.
    \*/
    convertLinesToFills(): void
    /\*\*
  - Converts selected objects in the current frame into a bitmap, then adds that bitmap to the library.
  - @returns Boolean
    \*/
    convertSelectionToBitmap(): boolean
    /\*\*
  - Converts the selected Stage item or items into a new symbol. For linkage and shared asset property setup on a symbol, see Item object.
  - @returns Object for the new symbol, or null when the symbol cannot be created.
  - @param type String giving the symbol type. Acceptable values are "movie clip", "button", and "graphic".
  - @param name String for the new symbol name, which must be unique. Pass an empty string to let the method generate a unique symbol name.
  - @param registrationPoint Point representing the symbol's 0,0 location. Allowed values: "top left", "top center", "top right", "center left", "center", "center right", "bottom left", "bottom center", and "bottom right".
    \*/
    convertToSymbol(type: string, name: string, registrationPoint: string): SymbolItem | null
    /\*\*
  - Uses the top selected drawing object to crop every selected drawing object below it. Calling this with no selected objects raises an error and stops the script there.
    \*/
    crop(): void
    /\*\*
  - Runs the Debug Movie command on the document.
  - @param abortIfErrorsExist Boolean; false is the default. When true, compiler errors prevent the debug session and the .swf window from opening. Compiler warnings do not abort the command.
    \*/
    debugMovie(abortIfErrorsExist?: boolean): void
    /\*\*
  - Removes the envelope, meaning the bounding box containing one or more objects, from the selected objects. With no selected objects, the call raises an error and the script stops there.
    \*/
    deleteEnvelope(): void
    /\*\*
  - Deletes the active profile when more than one profile exists. At least one profile must remain.
  - @returns Integer index of the new current profile. When no replacement profile is available, the current profile stays unchanged and its index is returned.
    \*/
    deletePublishProfile(): number
    /\*\*
  - Deletes the current scene (Timeline object). If the removed scene was not last, the next scene becomes the current Timeline object; if it was last, the first object becomes current. With only one Timeline object (scene), the method returns false.
  - @returns true when the scene is deleted successfully; otherwise false.
    \*/
    deleteScene(): boolean
    /\*\*
  - Deletes the current Stage selection. An error message appears when nothing is selected.
    \*/
    deleteSelection(): void
    /\*\*
  - Turns off every filter on the selected objects.
    \*/
    disableAllFilters(): void
    /\*\*
  - Turns off the indicated filter in the Filters list.
  - @param filterIndex Integer giving the filter's zero-based position in the Filters list.
    \*/
    disableFilter(filterIndex: number): void
