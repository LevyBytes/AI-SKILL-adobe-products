# Animate (part 4) (cont. 1)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

> _(continued)_

    /\*\*
  - Turns off every filter in the Filters list except the one at the specified position.
  - @param enabledFilterIndex Integer zero-based position of the filter left enabled after the others are disabled.
    \*/
    disableOtherFilters(enabledFilterIndex: number): void
    /\*\*
  - Distributes the selection.
  - @param distributemode String indicating the distribution target for selected objects. Allowed values: "left edge", "horizontal center", "right edge", "top edge", "vertical center", and "bottom edge".
  - @param bUseDocumentBounds Boolean that distributes selected objects against document bounds when true. Otherwise, selected-object bounds are used. Defaults to false.
    \*/
    distribute(distributemode: string, bUseDocumentBounds?: boolean): void
    /\*\*
  - Runs distribute-to-keyframes on the current selection, equivalent to choosing Distribute to KeyFrames. Each object gets a new keyframe, created on the active layer immediately after the active frame.
    \*/
    distributeToKeyframes(): void
    /\*\*
  - Runs distribute-to-layers on the current selection, equivalent to choosing Distribute to Layers. The method displays an error when there is no selection.
    \*/
    distributeToLayers(): void
    /\*\*
  - Tests whether the document contains persistent data under the specified name.
  - @returns true when the document has persistent data; otherwise false.
  - @param name String naming the data to check;
    \*/
    documentHasData(name: string): boolean
    /\*\*
  - Copies the active profile and focuses the duplicate.
  - @returns Integer index for the new profile in the profile list. Returns -1 when the profile cannot be duplicated.
  - @param profileName String for the duplicated profile's unique name. When omitted, the default name is used. Optional.
    \*/
    duplicatePublishProfile(profileName?: string): number
    /\*\*
  - Duplicates the selected scene, gives the copy a unique name, and selects that copy as current.
  - @returns true when scene duplication succeeds; otherwise false.
    \*/
    duplicateScene(): boolean
    /\*\*
  - Duplicates the Stage selection.
    \*/
    duplicateSelection(): void
    /\*\*
  - Selects the specified scene for editing.
  - @param index Zero-based integer selecting the scene to edit.
    \*/
    editScene(index: number): void
    /\*\*
  - Enables every filter in the Filters list for the selected objects.
    \*/
    enableAllFilters(): void
    /\*\*
  - Enables the selected-objects filter at the specified position.
  - @param filterIndex Integer identifying the zero-based filter index in the Filters list to enable.
    \*/
    enableFilter(filterIndex: number): void
    /\*\*
  - Changes the authoring tool to the editing mode named by the parameter. If omitted, the method defaults to symbol-editing mode, matching a right-click on the symbol followed by Edit from the context menu.
  - @param editMode String selecting the editing mode. Allowed values are "inPlace" or "newWindow". If omitted, symbol-editing mode is the default. Optional.
    \*/
    enterEditMode(editMode?: string): void
    /\*\*
  - Leaves symbol-editing mode and shifts focus up one editing level. For instance, while editing a symbol inside another symbol, this moves from the inner symbol to its parent symbol.
    \*/
    exitEditMode(): void
    /\*\*
  - Exports a selected movie clip, graphic, or button symbol instance on the Stage into a bitmap in Library.
  - @param frameNumber Integer identifying the frame to export.
  - @param bitmapName String naming the bitmap created in the Library.
    \*/
    exportInstanceToLibrary(frameNumber: number, bitmapName: string): void
    /\*\*
  - Exports a selected movie clip, graphic, or button symbol instance on the Stage as a PNG sequence on disk. Without startFrameNum or endFrameNum, every Timeline frame is included.
  - @param outputURI String: URI destination for the PNG Sequence files. It must point to a local file. Example: file:///c|/tests/mytest.png.
  - @param startFrameNum Optional. Integer identifying the first frame to export. The default is 1.
  - @param endFrameNum Optional. Integer identifying the final frame to export. The default is 99999.
  - @param matrix Optional. Matrix applied to the PNG sequence export.
    \*/
    exportInstanceToPNGSequence(
    outputURI: string,
    startFrameNum?: number,
    endFrameNum?: number,
    matrix?: Matrix,
    ): void
    /\*\*
  - Exports the document to one or more PNG files. If fileURI is provided and already names an existing file, that file is overwritten without warning.
  - Note: With an empty fileURI and bCurrentFrame set to true, the Export Movie dialog box is skipped and Flash writes the exported PNG file beside the .fla file.
  - Note: When bCurrentPNGSettings is false and bCurrentFrame is true, Flash skips the Export PNG dialog box and uses the current PNG publish settings.
  - @returns true when the file is exported successfully as a PNG file; otherwise false.
  - @param fileURI String as a file:/// URI naming the exported file. If fileURI is empty or omitted, Flash opens the Export Movie dialog box.
  - @param bCurrentPNGSettings Boolean selecting current PNG publish settings when true, or the Export PNG dialog box when false. Optional; defaults to false.
  - @param bCurrentFrame Boolean selecting only the current frame when true, or all frames as separate PNG files when false. Optional; defaults to false.
    \*/
    exportPNG(fileURI?: string, bCurrentPNGSettings?: boolean, bCurrentFrame?: boolean): boolean
    /\*\*
  - Writes the active profile out to an XML file.
  - @param fileURI String as a file:/// URI identifying where the profile XML file is written.
    \*/
    exportPublishProfile(fileURI: string): void
    /\*\*
  - Returns the requested profile as an XML-format string. Without profileName, the active profile is exported.
  - @returns XML string.
  - @param profileName String naming the profile to export to an XML string. Optional.
    \*/
    exportPublishProfileString(profileName: string): string
    /\*\*
  - Exports the document in Flash SWF format.
  - @param fileURI String as a file:/// URI naming the exported file. If fileURI is empty or omitted, Flash shows the Export Movie dialog box. Optional.
  - @param bCurrentSettings Boolean that uses current SWF publish settings when true. Otherwise, Flash shows the Export Flash Player dialog box. Default: false; omit when not needed.
    \*/
    exportSVG(fileURI: string, unknown: boolean, unknown2: boolean): boolean
    exportSWF(fileURI?: string, bCurrentSettings?: boolean): void
    /\*\*
  - Exports document video and can send it to Adobe Media Encoder for conversion.
  - @param fileURI String as a file:/// URI giving the fully qualified path where the video is saved.
  - @param convertInAdobeMediaEncoder Boolean choosing whether to send the recorded video to Adobe Media Encoder. It defaults to true, which sends the video to Adobe Media Encoder. Optional.
  - @param transparent Boolean choosing whether the background is included in the video. It defaults to false, which includes the movie background in the video. Optional.
  - @param stopAtFrame Boolean choosing whether recording stops at a particular frame or at a specific time. It defaults to true, stopping when a certain frame is reached. Optional.
  - @param stopAtFrameOrTime When stopAtFrame is true, this int gives the frame count to record. When stopAtFrame is false, it gives the recording duration in milliseconds. The default is 0; with stopAtFrame true, that records every frame in the main timeline. May be omitted.
    \*/
    exportVideo(
    fileURI: string,
    convertInAdobeMediaEncoder?: boolean,
    transparent?: boolean,
    stopAtFrame?: boolean,
    stopAtFrameOrTime?: number,
    ): void
    /\*\*
  - Gets the same preference represented by the To Stage button in the Align panel. This preference applies to document.align(), document.distribute(), document.match(), and document.space().
  - @returns true when the preference aligns objects to the Stage; otherwise false.
    \*/
    getAlignToDocument(): boolean
    /\*\*
  - Returns the blending mode string for the selected objects.
  - @returns String giving the selected objects' blending mode. If multiple selected objects use different blending modes, the returned string reflects the object at the highest depth.
  - Note: Expect unpredictable output when the selection includes objects that do not support blending modes, or objects whose blending mode value is "normal".
    \*/
    getBlendMode(): string
    /\*\*
  - Retrieves the fill object from the selected shape or, when requested, from the Tools panel and Property inspector.
  - @returns Fill object identified by objectToFill when successful; otherwise undefined.
  - @param objectToFill String identifying the fill source. Valid values:
  - - "toolbar" gets the fill object from the Tools panel and Property inspector.
  - - "selection" gets the fill object from the selection.
  - When omitted, "selection" is used. With no selection, the method returns undefined. Optional.
    \*/
    getCustomFill(objectToFill?: string): Fill | undefined
    /\*\*
  - Returns the stroke object from the selected shape or, when requested, from the Tools panel and Property inspector.
  - @returns Stroke object identified by locationOfStroke when successful; otherwise undefined.
  - @param locationOfStroke String identifying the stroke source. Valid values:
  - - "toolbar", when set, gets the stroke object from the Tools panel and Property inspector.
  - - "selection", when set, gets the stroke object from the selection.
  - When omitted, "selection" is used. With no selection, the method returns undefined. Optional.
    \*/
    getCustomStroke(locationOfStroke?: string): Stroke | undefined
    /\*\*
  - Reads stored data by name. The returned type depends on the type originally stored.
  - @returns The requested data.
  - @param name String naming the data to return.
    \*/
    getDataFromDocument(name: string): any
    /\*\*
  - Reads an Element property from the current selection. For accepted values, see the Property summary table for the Element object.
  - @returns Requested property value. Returns null for an indeterminate state, such as selected elements with different values. Returns undefined when the property is not valid for the selected element.
  - @param propertyName String naming the Element property whose value should be retrieved.
    \*/
    getElementProperty(propertyName: string): any | null | undefined
    /\*\*
  - Reads a TextAttrs property from selected Text objects. Selected non-text fields are ignored. The Property summary table for the TextAttrs object lists property names and expected values. See also document.setElementTextAttr().
  - @returns For one selected text field, returns the property when the text uses a single value, and undefined when several values occur inside that field. For several selected text fields, returns the value when all text alignment values match, or undefined when they differ. Without optional arguments, these rules apply to the selected text range or the whole text field when text is not being edited. With only startIndex, the property of the character to the right of that index is returned if all selected Text objects match. With startIndex and endIndex, the return value reflects characters from startIndex through, but not including, endIndex.
  - @param attrName String naming the TextAttrs property to return. The Property summary table for the TextAttrs object lists property names and expected values.
  - @param startIndex Integer index of first character, with 0 (zero) as the first position. Optional.
  - @param endIndex Integer index of last character. Optional.
    \*/
    getElementTextAttr(attrName: string, startIndex?: number, endIndex?: number): any | undefined
    /\*\*
  - Returns filters applied to the currently selected objects. If multiple selected objects do not share identical filters, the method returns the first selected object's filters.
  - @returns Array listing filters applied to the currently selected objects.
    \*/
    getFilters(): Filter[]
    /\*\*
  - Returns the document's XML metadata string, or an empty string when no metadata exists.
  - @returns String containing the document's XML metadata, or an empty string if none exists.
    \*/
    getMetadata(): string
    /\*\*
  - Returns the document's mobile XML settings.
  - @returns String representing the document's XML settings. When no value has been set, returns an empty string.
    \*/
    getMobileSettings(): string
    /\*\*
  - Returns the targeted player version string for this document. For possible values, see document.setPlayerVersion().
  - @returns String representing the Flash Player version set through document.setPlayerVersion(). If no value has been set, returns the value from the Publish Settings dialog box.
    \*/
    getPlayerVersion(): string
    /\*\*
  - Reports whether the specified persistent data is enabled for publishing in the specified format for this document.
  - @returns Boolean; True when this document publishes the specified persistent data for the specified format. Otherwise False.
  - @param format String naming the publishing format.
  - Note: _`EMBED_SWF`_ is the built-in persistent-data publishing format. When enabled, each document publish embeds persistent data in the SWF file. ActionScript access is through the .metaData property. The requirement is SWF version 19 (Flash Player 11.6) or later, and only onstage symbol instances are covered. Custom JSFL scripts can specify other custom publishing formats when this method is called with the same format.
    \*/
    getPublishDocumentData(format: string): boolean
    /\*\*
  - Returns the bounding rectangle for the current selection. For non-rectangular selections, the result is the smallest rectangle enclosing the whole selection. Coordinates use document space; in edit mode they use the symbol-being-edited registration point, also called the origin point or zero point.
  - @returns Current selection bounding rectangle, or 0 when nothing is selected. For the return-value format, see document.addNewRectangle().
    \*/
    getSelectionRect(): SimpleShape
    /\*\*
  - Returns the SWF path configured in the current Publish profile.
  - @returns Full path to the SWF file configured in the current Publish profile.
    \*/
    getSWFPathFromProfile(): string
    /\*\*
  - Reports the selected state of the "Enable detailed telemetry" checkbox in the Publish Settings dialog.
  - @returns Boolean. true when "Enable detailed telemetry" is checked; otherwise false.
    \*/
    getTelemetryForSwf(): boolean
    /\*\*
  - Gets the selected text. Without optional parameters, the current text selection is used. If text is not open for editing, the entire text string is returned. With only startIndex, the returned string begins there and runs to the field end. With startIndex and endIndex, the string starts at startIndex and stops before endIndex.
  - If several text fields are selected, their strings are concatenated.
  - @returns String containing the selected text.
  - @param startIndex Integer index of the first character to get. Optional.
  - @param endIndex Integer index of the character after the last character to get. That index is excluded from the returned string. Optional.
    \*/
    getTextString(startIndex?: number, endIndex?: number): string
    /\*\*
  - Retrieves the document's current Timeline object. That timeline may be the current scene, the current symbol under edit, or the current screen.
  - @returns Current Timeline object.
    \*/
    getTimeline(): Timeline
    /\*\*
  - Gets where the current selection's transformation point is located. That point can support commutations such as rotate and skew. Note: the selected item type determines which coordinate space a transformation point uses. For more information, see document.setTransformationPoint().
  - @returns Point, for example {x:10, y:20}, whose x and y floating-point numbers locate the transformation point, also origin point or zero point, in the selected element's coordinate system.
    \*/
    getTransformationPoint(): Point
    /\*\*
  - Turns the current selection into a group.
    \*/
    group(): void
    /\*\*
  - Imports a file into a document. The operation matches Import To Library or Import To Stage. To import a publish profile, use document.importPublishProfile().
  - @param fileURI String as a file:/// URI giving the path of the file to import.
  - @param importToLibrary Boolean choosing library-only import (true) or import plus a Stage copy (false). Defaults to false.
  - @param showDialog Boolean choosing whether to show the Import dialog box. true shows it. false imports using specifications from the Preferences dialog. The default is true.
  - @param showImporterUI Boolean choosing visual error display, such as the Library Conflict dialog box. Default setting: off.
    \*/
    importFile(
    fileURI: string,
    importToLibrary?: boolean,
    showDialog?: boolean,
    showImporterUI?: boolean,
    ): void
    /\*\*
  - Imports a profile from a file.
  - @returns Integer index of the imported profile in the profiles list. Returns -1 when the profile cannot be imported.
  - @param fileURI String as a file:/// URI naming the XML file definition for the profile import.
    \*/
    importPublishProfile(fileURI: string): number
    /\*\*
  - Imports a publish-profile XML string and makes that profile current. To produce the XML string, call document.exportPublishProfileString() before this method.
  - @returns true when the string imports successfully; otherwise false.
  - @param xmlString String containing XML data that becomes active after import.
    \*/
    importPublishProfileString(xmlString: string): boolean
    /\*\*
  - Builds an intersection drawing object from all selected drawing objects. Calling it with no selected objects raises an error and stops the script there.
    \*/
    intersect(): void
    /\*\*
  - Makes selected objects the same size.
  - @param bWidth Boolean that makes selected-item widths match when true.
  - @param bHeight Boolean that makes selected-item heights match when true.
  - @param bUseDocumentBounds Boolean that matches object size to document bounds when true. Otherwise, the largest object's bounds are used. Defaults to false; optional.
    \*/
    match(bWidth: boolean, bHeight: boolean, bUseDocumentBounds?: boolean): void
    /\*\*
  - Performs a Selection-tool mouse click.
  - @param position Pair of floating-point values giving the click's x and y pixel coordinates.
  - @param bToggleSel Boolean describing the Shift key state: true for pressed; false for not pressed.
  - @param bShiftSel Boolean describing the Shift select application preference state: true means on; false means off.
    \*/
    mouseClick(position: Point, bToggleSel: boolean, bShiftSel: boolean): void
    /\*\*
  - Performs a Selection-tool double-click.
  - @param position Pair of floating-point values giving the click's x and y pixel coordinates.
  - @param bAltDown Boolean recording whether Alt is down during the event: true for pressed; false for not pressed.
  - @param bShiftDown Boolean recording Shift state during the event: true for pressed; false for not pressed.
  - @param bShiftSelect Boolean giving the Shift select application preference state: true means on; false means off.
    \*/
    mouseDblClk(position: Point, bAltDown: boolean, bShiftDown: boolean, bShiftSelect: boolean): void
    /\*\*
  - Moves selected Bezier points by the requested amount when the selection contains at least one path with a selected Bezier point.
  - @param delta Pair of floating-point values giving x and y pixel offsets for the selected Bezier points. For example, ({x:1,y:2}) moves one pixel right and two pixels down.
    \*/
    moveSelectedBezierPointsBy(delta: Point): void
    /\*\*
  - Moves selected objects by the requested distance.
  - @param distanceToMove Pair of floating-point coordinate values giving how far the method moves the selection along x and y. For example, ({x:1,y:2}) moves one pixel right and two pixels down.
    \*/
    moveSelectionBy(distanceToMove: Point): void
    /\*\*
  - Optimizes smoothing for the current selection, optionally using multiple passes for best smoothing. This matches choosing Modify > Shape > Optimize.
  - @param smoothing Integer from 0 to 100, where 0 means no smoothing and 100 means maximum smoothing.
  - @param bUseMultiplePasses Boolean that requests multiple passes when true; that is slower but can improve the result. It corresponds to the Optimize Curves control named Use Multiple Passes.
    \*/
    optimizeCurves(smoothing: number, bUseMultiplePasses: boolean): void
    /\*\*
  - Publishes the document using active publish settings (File > Publish Settings). This matches choosing File > Publish.
    \*/
    publish(): void
    /\*\*
  - Punches through selected drawing objects below the top selected drawing object. With no selected objects, the call raises an error and stops the script there.
    \*/
    punch(): void
    /\*\*
  - Deletes every filter from the selected objects.
    \*/
    removeAllFilters(): void
    /\*\*
  - Deletes persistent data with the specified name from the document.
  - @param name String naming the data to remove.
    \*/
    removeDataFromDocument(name: string): void
    /\*\*
  - Deletes persistent data with the specified name from the selection.
  - @param name String naming the persistent data entry to delete.
    \*/
    removeDataFromSelection(name: string): void
    /\*\*
  - Removes the specified filter from the selected objects' Filters list.
  - @param filterIndex Integer identifying the zero-based filter position to remove from the selected objects.
    \*/
    removeFilter(filterIndex: number): void
    /\*\*
  - Changes the current profile name.
  - @returns true when the name is changed successfully; otherwise false.
  - @param profileNewName Optional parameter giving the profile's new name. The new name must be unique. When omitted, a default name is supplied.
    \*/
    renamePublishProfile(profileNewName?: string): boolean
    /\*\*
  - Changes the selected scene name in the Scenes panel. The replacement name must be unique.
  - @returns true when the name is changed successfully; otherwise false. For example, a non-unique name makes the method return false.
  - @param name String containing the new scene name.
    \*/
    renameScene(name: string): boolean
