# Animate (part 4) (cont. 2)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

> _(continued)_

    /\*\*
  - Moves one scene before another specified scene.
  - @param sceneToMove Integer selecting the scene to move, with 0 (zero) as the first scene.
  - @param sceneToPutItBefore Integer selecting the scene before which sceneToMove should be placed. Use 0 (zero) for the first scene. For example, sceneToMove 1 and sceneToPutItBefore 0 places the second scene before the first scene. Use -1 to place the scene last.
    \*/
    reorderScene(sceneToMove: number, sceneToPutItBefore: number): void
    /\*\*
  - Restores all Property inspector values to default Oval object settings. Selected Oval objects, if any, also have their properties reset to defaults.
    \*/
    resetOvalObject(): void
    /\*\*
  - Restores all Property inspector values to default Rectangle object settings. Selected Rectangle objects, if any, also have their properties reset to defaults.
    \*/
    resetRectangleObject(): void
    /\*\*
  - Clears the transformation matrix. This matches choosing Modify > Transform > Remove Transform.
    \*/
    resetTransformation(): void
    /\*\*
  - Reverts the specified document to the last saved version. This matches choosing File > Revert.
    \*/
    revert(): void
    /\*\*
  - Rotates the selection in 3D. This method is available only for movie clips.
  - @param xyzCoordinate XYZ coordinate point identifying the 3D rotation axes.
  - @param bGlobalTransform Boolean selecting global transformation mode when true; otherwise local mode is used.
    \*/
    rotate3DSelection(xyzCoordinate: Point3D, bGlobalTransform: boolean): void
    /\*\*
  - Rotates the selection by a specified degree value. The effect matches rotating an object with the Free Transform tool.
  - @param angle Floating-point value giving the rotation angle.
  - @param rotationPoint String selecting which bounding-box side to rotate around. Allowed values: "top right", "top left", "bottom right", "bottom left", "top center", "right center", "bottom center", and "left center". When omitted, the transformation point is used. Optional.
    \*/
    rotateSelection(angle: number, rotationPoint?: string): void
    /\*\*
  - Saves the document to its default location. This matches choosing File > Save.
  - To save under a different file name, use fl.saveDocument().
  - Note: If the file is new and unmodified or unsaved, or has not changed since its last save, this method does nothing and returns false. Use fl.saveDocumentAs() to allow saving an unsaved or unmodified file.
  - @returns true when saving completes successfully; otherwise false.
  - @param bOkToSaveAs Optional parameter. If true or omitted for a never-saved file, the Save As dialog box opens. If false for a never-saved file, no save occurs.
    \*/
    save(bOkToSaveAs?: boolean): boolean
    /\*\*
  - Saves a new FLA file from the existing document object, optionally saving only the current Stage selection.
  - @returns Boolean; true is saved, false otherwise.
  - @param URI String: URI destination for the new FLA file. It must point to a local file. Example: file:///c|/tests/myTest.fla.
  - @param selectionOnly Optional. Boolean choosing whether the new FLA file contains only the current Stage selection.
    \*/
    saveAsCopy(URI: string, selectionOnly?: boolean): boolean
    /\*\*
  - Scales the selection by the specified amount. This matches using the Free Transform tool to scale an object.
  - @param xScale Floating-point value giving the amount of x scaling.
  - @param yScale Floating-point value giving the amount of y scaling.
  - @param whichCorner String selecting the edge used for the transformation. If omitted, scaling is around the transformation point. Allowed values: "bottom left", "bottom right", "top right", "top left", "top center", "right center", "bottom center", and "left center". Optional.
    \*/
    scaleSelection(xScale: number, yScale: number, whichCorner?: string): void
    /\*\*
  - Selects every item on the Stage. This matches pressing Control+A (Windows) or Command+A (Macintosh), or choosing Edit > Select All.
    \*/
    selectAll(): void
    /\*\*
  - Clears the current selection.
    \*/
    selectNone(): void
    /\*\*
  - Configures document.align(), document.distribute(), document.match(), and document.space() to operate against the document. This matches enabling the To Stage button in the Align panel.
  - @param bToStage Boolean that aligns objects to the Stage when true. When false, it does not.
    \*/
    setAlignToDocument(bToStage: boolean): void
    /\*\*
  - Changes the selected objects' blending mode.
  - @param mode String representing the requested blending mode for selected objects. Allowed values: "normal", "layer", "multiply", "screen", "overlay", "hardlight", "lighten", "darken", "difference", "add", "subtract", "invert", "alpha", and "erase".
    \*/
    setBlendMode(mode: string): void
    /\*\*
  - Sets fill settings for the Tools panel, Property inspector, and selected shapes. Scripts can set fill settings before drawing an object instead of drawing it, selecting it, and changing the fill afterward. Scripts can also change fill settings in the Tools panel and Property inspector.
  - @param fill Fill object containing the settings to use. See Fill object.
    \*/
    setCustomFill(fill: Fill): void
    /\*\*
  - Sets stroke settings for the Tools panel, Property inspector, and selected shapes. Scripts can set stroke settings before drawing an object instead of drawing it, selecting it, and changing the stroke afterward. Scripts can also change stroke settings in the Tools panel and Property inspector.
  - @param stroke Stroke object.
    \*/
    setCustomStroke(stroke: Stroke): void
    /\*\*
  - Sets an Element property on selected objects in the document. With no selection, the method does nothing.
  - @param property String naming the Element property to set. For a full property and value list, see the Property summary table for the Element object.
  - The method cannot assign read-only properties, including element.elementType, element.top, or element.left.
  - @param value Integer value to set on the specified Element property.
    \*/
    setElementProperty(property: string, value: number): void
    /\*\*
  - Sets the named textAttrs property on selected text items to the given value. For property names and allowed values, see the Property summary table for the TextAttrs object. Without optional parameters, the method applies to the selected text range, or to the whole text field when no text is selected. With only startIndex, it sets that character's attributes. With startIndex and endIndex, it sets attributes on characters from startIndex through, but not including, endIndex. When paragraph styles are specified, every paragraph in the range is affected.
  - @returns true when at least one text attribute property changes; otherwise false.
  - @param attrName String naming the TextAttrs property to change.
  - @param attrValue Value assigned to the TextAttrs property. The Property summary table for the TextAttrs object lists property names and expected values.
  - @param startIndex Integer index for the first affected character. Optional.
  - @param endIndex Integer index for the last affected character. May be omitted.
    \*/
    setElementTextAttr(
    attrName: string,
    attrValue: any,
    startIndex?: number,
    endIndex?: number,
    ): boolean
    /\*\*
  - Changes the selection and Tools panel to the specified fill color. For Tools panel and Property inspector fill-color changes, see document.setCustomFill().
  - @param color Fill color in one of these forms:
  - - A "#RRGGBB" or "#RRGGBBAA" string
  - - A hexadecimal 0xRRGGBB number
  - - An integer matching the decimal value of a hexadecimal number
  - If null, no fill color is set, matching the user interface Fill color swatch set to no fill.
    \*/
    setFillColor(color: string | number): void
    /\*\*
  - Sets a filter property on the currently selected objects, assuming the object supports that filter.
  - @param property String naming the property to set. Allowed values: "blurX", "blurY", "quality", angle", "distance", "strength", "knockout", "inner", "bevelType", "color", "shadowColor", and "highlightColor".
  - @param filterIndex Integer identifying the filter's zero-based position in the Filters list.
  - @param value Number or string used as the specified filter property value. Acceptable values vary by property and filter.
    \*/
    setFilterProperty(property: string, filterIndex: number, value: number | string): void
    /\*\*
  - Applies filters to selected objects. Use it after document.getFilters() and after making required edits to the filters.
  - @param filterArray Array of filters currently specified.
    \*/
    setFilters(filterArray: Filter[]): void
    /\*\*
  - Sets instance opacity.
  - @param opacity Integer from 0 (transparent) through 100 (completely saturated) that changes instance transparency.
    \*/
    setInstanceAlpha(opacity: number): void
    /\*\*
  - Sets instance brightness.
  - @param brightness Integer brightness value from -100 (black) to 100 (white).
    \*/
    setInstanceBrightness(brightness: number): void
    /\*\*
  - Sets instance tint.
  - @param color Tint color in one of these forms:
  - - A "#RRGGBB" or "#RRGGBBAA" string
  - - A hexadecimal 0xRRGGBB number
  - - An integer matching the decimal value of a hexadecimal number
  - @param strength Integer from 0 through 100 specifying tint opacity.
    \*/
    setInstanceTint(color: string | number, strength: number): void
    /\*\*
  - Sets XML metadata for the specified document, replacing any existing metadata. The XML supplied as strMetadata is validated and may be rewritten before storage. If validation fails as legal XML or violates specific rules, the metadata is not set and false is returned. When false is returned, no more detailed error information is available.
  - Note: Even a true return does not guarantee the XML stored is the exact same string you supplied. To read the exact stored XML, call document.getMetadata().
  - Metadata format is RDF compliant with the XMP specification. For more about RDF and XMP, see:
  - - RDF Primer: www.w3.org/TR/rdf-primer/
  - - RDF specification: www.w3.org/TR/1999/REC-rdf-syntax-19990222/
  - - XMP home page: www.adobe.com/products/xmp/
  - @returns true when successful; otherwise false.
  - @param strMetadata String containing the XML metadata to attach to the document. See the preceding description for details.
    \*/
    setMetadata(strMetadata: string): boolean
    /\*\*
  - Sets the XML settings string value in a mobile FLA file. Most mobile FLA files contain an XML string describing settings in the document.
  - @returns true when the settings are set successfully; otherwise false.
  - @param xmlString String describing the XML settings in a mobile FLA file.
    \*/
    setMobileSettings(xmlString: string): boolean
    /\*\*
  - Sets a property value for primitive Oval objects.
  - @param propertyName String naming the property to set. For accepted values, see the Property summary table for the Oval object.
  - @param value Value assigned to the property. Acceptable values depend on the property named by propertyName.
    \*/
    setOvalObjectProperty(propertyName: string, value: any): void
    /\*\*
  - Sets the Flash Player version targeted by the specified document. This matches the value set in the Publish Settings dialog box.
  - @returns true when the player version is set successfully; otherwise false.
  - @param version String representing the Flash Player version targeted by the specified document. Allowed values: "FlashLite", "FlashLite11", "FlashLite20" , "FlashLite30", "1", "2", "3", "4", "5", "6", "7", "8", "9", "FlashPlayer10", "FlashPlayer10.3", "FlashPlayer11.1", "FlashPlayer11.2", "FlashPlayer11.3","FlashPlayer11.4", "FlashPlayer11.5", "FlashPlayer11.6", "FlashPlayer11.7", "Adobe`AIR1_1`", "Adobe`AIR1_1`", "Adobe`AIR2_5`", "Adobe`AIR3_6`", "android3_6", and "`PF13_6`".
    \*/
    setPlayerVersion(version: string): boolean
    /\*\*
  - Enables or disables persistent-data publishing for the whole document.
  - @param format String naming the publishing format.
  - Note: _`EMBED_SWF`_ is the built-in persistent-data publishing format. When set, each document publish embeds persistent data in the SWF file. ActionScript access is through the .metaData property. The requirement is SWF version 19 (Flash Player 11.6) or later, and the feature only applies to symbol instances onstage. Custom JSFL scripts may name other custom publishing formats when calling this method with the same format.
  - @param publish Boolean indicating whether persistent-data publishing is enabled or disabled for the specified format.
    \*/
    setPublishDocumentData(format: string, publish: boolean): void
    /\*\*
  - Sets a property value for primitive Rectangle objects.
  - @param propertyName String naming the property to set. For accepted values, see the Property summary table for the Rectangle object.
  - @param value Value assigned to the property. Acceptable values depend on the property named by propertyName.
    \*/
    setRectangleObjectProperty(propertyName: string, value: any): void
    /\*\*
  - Moves and resizes the selection with one operation.
  - A bContactSensitiveSelection value is scoped to this call and does not update the document's Contact Sensitive selection mode (see fl.contactSensitiveSelection).
  - @param boundingRectangle Rectangle giving the selection's new location and size. For the boundingRectangle format, see document.addNewRectangle().
  - @param bContactSensitiveSelection Boolean choosing enabled (true) or disabled (false) Contact Sensitive selection mode during object selection. Default setting: off.
    \*/
    setSelectionBounds(boundingRectangle: SimpleShape, bContactSensitiveSelection?: boolean): void
    /\*\*
  - Creates a rectangular selection marquee relative to the Stage with the specified coordinates. Unlike document.getSelectionRect(), this rectangle is not relative to the object being edited.
  - The operation matches dragging a rectangle with the Selection tool. An instance must be completely enclosed by the rectangle to be selected.
  - A bContactSensitiveSelection value is scoped to this call and does not update the document's Contact Sensitive selection mode (see fl.contactSensitiveSelection
  - Note: Repeating setSelectionRect() through the History panel or menu item repeats the step before the setSelectionRect() operation.
  - @param rect Rectangle object used as the selected area. For the rect format, see document.addNewRectangle().
  - @param bReplaceCurrentSelection Boolean choosing whether the method replaces the current selection (true) or adds to it (false). Defaults to true.
  - @param bContactSensitiveSelection Boolean choosing enabled (true) or disabled (false) Contact Sensitive selection mode during object selection. Defaults to false.
    \*/
    setSelectionRect(
    rect: SimpleShape,
    bReplaceCurrentSelection?: boolean,
    bContactSensitiveSelection?: boolean,
    ): void
    /\*\*
  - Sets the vanishing point used for viewing 3D objects.
  - @param point Point giving the x and y coordinates where the vanishing point for viewing 3D objects is set.
    \*/
    setStageVanishingPoint(point: Point): void
    /\*\*
  - Sets the perspective angle used for viewing 3D objects.
  - @param angle Floating point value from 0.0 through 179.0.
    \*/
    setStageViewAngle(angle: number): void
    /\*\*
  - Sets selected-stroke color, width, and style. For Tools panel and Property inspector stroke changes, see document.setCustomStroke().
  - @param color Stroke color in one of these forms:
  - - A "#RRGGBB" or "#RRGGBBAA" string
  - - A hexadecimal 0xRRGGBB number
  - - An integer matching the decimal value of a hexadecimal number
  - @param size Floating-point value giving the new stroke size for the selection.
  - @param strokeType String giving the selection's new stroke type. Allowed values: "hairline", "solid", "dashed", "dotted", "ragged", "stipple", and "hatched".
    \*/
    setStroke(color: string | number, size: number, strokeType: string): void
    /\*\*
  - Changes the selected stroke to the specified color. For Tools panel and Property inspector stroke changes, see document.setCustomStroke().
  - @param color Stroke color in one of these forms:
  - - A "#RRGGBB" or "#RRGGBBAA" string
  - - A hexadecimal 0xRRGGBB number
  - - An integer matching the decimal value of a hexadecimal number
      \*/
      setStrokeColor(color: string | number): void
      /\*\*
  - Changes the selection's stroke size.
  - @param size Floating-point value from 0.25 to 250that gives the stroke size. Precision beyond two decimal places is ignored.
    \*/
    setStrokeSize(size: number): void
    /\*\*
  - Changes the selection's stroke style. For Tools panel and Property inspector stroke changes, see document.setCustomStroke().
  - @param strokeType String naming the current selection's stroke style. Allowed values: "hairline", "solid","dashed", "dotted", "ragged", "stipple", and "hatched".
    \*/
    setStrokeStyle(strokeType: string): void
    /\*\*
  - Changes the selected text item's bounding rectangle to the specified size. Text reflows in the new rectangle; the text item is not scaled or transformed. Values from boundingRectangle are interpreted this way:
  - - Horizontal static text uses only the width from boundingRectangle; the height is computed automatically to contain all text.
  - - Vertical static text uses only the height from boundingRectangle; the width is computed automatically to contain all text.
  - - Dynamic or input text uses both width and height from boundingRectangle, and the result may be larger than required to fit the text. If the requested rectangle is too small for all text, only the width from boundingRectangle is used and the height is computed automatically.
  - @returns true when at least one text field size changes; otherwise false.
  - @param boundingRectangle Rectangle giving the new area in which the text item should flow. For the boundingRectangle format, see document.addNewRectangle().
    \*/
    setTextRectangle(boundingRectangle: SimpleShape): boolean
    /\*\*
  - Sets the selected text range in the currently selected text field using startIndex and endIndex. Text editing is activated if needed.
  - @returns true when the method can set the text selection successfully; otherwise false.
  - @param startIndex Integer position of the first selected character. Character positions start at 0 (zero).
  - @param endIndex Integer end position of the selection, up to but excluding endIndex. Character positions start at 0 (zero).
    \*/
    setTextSelection(startIndex: number, endIndex: number): boolean
    /\*\*
  - Inserts text. Without optional parameters, the existing text selection is replaced; if the Text object is not currently being edited, the entire text string is replaced. With only startIndex, the supplied string is inserted at that position. With startIndex and endIndex, the supplied string replaces text from startIndex through, but not including, endIndex.
  - @returns true when at least one text string is set; otherwise false.
  - @param text String of characters to insert in the text field.
  - @param startIndex Integer identifying the first character to replace. Character positions start at 0 (zero). Optional.
  - @param endIndex Integer identifying the last character to replace. Optional.
    \*/
    setTextString(text: string, startIndex?: number, endIndex?: number): boolean
    /\*\*
  - Sets the current selection's transformation point position.
  - @param transformationPoint Point, for example {x:10, y:20}, whose x and y floating-point numbers set the transformation point for these elements:
  - - Shapes: transformationPoint is relative to the document (0,0 is the Stage upper-left corner).
  - - Symbols: transformationPoint uses the symbol registration point as its reference (0,0 is at the registration point).
  - - Text: transformationPoint is relative to the text field (0,0 is the text field upper-left corner).
  - - Bitmaps/videos: transformationPoint uses bitmap/video coordinates; 0,0 is the bitmap or video's upper-left corner.
  - - Drawing objects, primitive ovals and rectangles, and groups: transformationPoint uses document coordinates; 0,0 is the Stage upper-left corner. Use element.setTransformationPoint() to place transformationPoint relative to an object's, primitive's, or group's center point.
      \*/
      setTransformationPoint(transformationPoint: Point): void
      /\*\*
  - Skews the selection by the specified amount. The effect matches using the Free Transform tool to skew an object.
  - @param xSkew Floating-point number giving the x skew amount, in degrees.
  - @param ySkew Floating-point number giving the y skew amount, in degrees.
  - @param whichEdge String identifying the edge where transformation occurs; when omitted, skew uses the transformation point. Allowed values: "top center", "right center", "bottom center", and "left center". Optional.
    \*/
    skewSelection(xSkew: number, ySkew: number, whichEdge?: string): void
    /\*\*
  - Smooths each selected fill outline or curved line. The operation matches the Smooth button in the Tools panel.
    \*/
    smoothSelection(): void
    /\*\*
  - Spaces selected objects evenly.
  - @param direction String choosing the spacing direction for selected objects. Acceptable values are "horizontal" or "vertical".
  - @param bUseDocumentBounds Boolean that spaces objects to document bounds when true. Otherwise, selected-object bounds are used. Defaults to false; optional.
    \*/
    space(direction: string, bUseDocumentBounds?: boolean): void
    /\*\*
  - Straightens the selected strokes. The operation matches the Straighten button in the Tools panel.
    \*/
    straightenSelection(): void
    /\*\*
  - Swaps in the specified selection. The selection must contain a graphic, button, movie clip, video, or bitmap. An error message appears if nothing is selected or if the requested object cannot be found.
  - @param name String naming the library item for the swap.
    \*/
    swapElement(name: string): void
    /\*\*
  - Swaps the Stroke and Fill colors.
    \*/
    swapStrokeAndFill(): void
    /\*\*
  - Runs a Test Movie operation on the document.
  - @param abortIfErrorsExist Boolean; false is the default. When true, compiler errors prevent the test movie session and .swf window from opening. Compiler warnings still allow the command. Flash Professional CS5 added this parameter.
    \*/
    testMovie(abortIfErrorsExist: boolean): void
