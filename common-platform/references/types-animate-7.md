# Animate (part 7)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- A Timeline is the Flash timeline object. For the active document, retrieve it with fl.getDocumentDOM().getTimeline(); that call gives back the timeline for whichever scene or symbol is currently open for editing.
- With scenes, every scene timeline carries its own index, so the active document can address it as fl.getDocumentDOM().timelines[i]. In that expression, i identifies the timeline value's index.
- Timeline object methods and properties interpret frame arguments as zero-based indexes rather than as the displayed frame numbers in the timeline sequence. For example, frame 1 has the frame index 0.
  \*/
  declare class Timeline {
  /\*\*
  - Frame index, zero-based, where the playhead is currently positioned.
    \*/
    currentFrame: number
    /\*\*
  - Current active layer index, also zero-based. 0 means the top layer, 1 means the next lower layer, continuing downward.
    \*/
    currentLayer: number
    /\*\*
  - Integer count for the frames in the longest layer of this timeline.
    \*/
    readonly frameCount: number
    /\*\*
  - Integer count of layers in the target timeline.
    \*/
    readonly layerCount: number
    /\*\*
  - Array containing layer objects.
    \*/
    readonly layers: Layer[]
    /\*\*
  - When libraryItem is null, the timeline is part of a scene. Otherwise, it can be handled like a LibraryItem object.
    \*/
    readonly libraryItem: null | Item
    /\*\*
  - Current timeline name. The value matches the scene, screen (slide or form), or symbol being edited.
    \*/
    name: string
    /\*\*
  - Creates a motion guide layer directly above the current layer, links the current layer to that new guide layer, and changes the current layer to type "Guided".
  - The call works only when the current layer has type "Normal". Layers with type "Folder", "Mask", "Masked", "Guide", or "Guided" are left unchanged.
  - @returns Integer zero-based index for the guide layer that was just added. Flash returns -1 when the current layer is not type "Normal".
    \*/
    addMotionGuide(): number
    /\*\*
  - Creates a layer in the document and selects it as the current layer.
  - @returns Integer zero-based index for the layer just created.
  - @param name String to use as the new layer's name. If name is omitted, Flash assigns a default name such as "Layer n," where n is the total count of layers created and deleted for that file instance. This parameter is optional.
  - @param layerType Optional string naming the kind of layer to create. When omitted, Flash creates a "Normal" layer. Supported values are "normal", "guide", "guided", "mask", "masked", and "folder".
  - @param bAddAbove Optional Boolean; true (the default) places the new layer above the current layer, while false places it below.
    \*/
    addNewLayer(name: string, layerType?: string, bAddAbove?: boolean): number
    /\*\*
  - Removes all contents from one frame, or from a frame range, on the current layer.
  - @param startFrameIndex Zero-based index for the first frame in the range to clear. If startFrameIndex is omitted, Flash uses the current selection. This parameter is optional.
  - @param endFrameIndex Optional zero-based index where the clear range ends. The range includes frames before endFrameIndex, not endFrameIndex itself. With only startFrameIndex supplied, endFrameIndex uses that same value.
    \*/
    clearFrames(startFrameIndex?: number, endFrameIndex?: number): void
    /\*\*
  - Changes a keyframe into a regular frame and removes its current-layer contents.
  - @param startFrameIndex Zero-based index for the first frame in the range to clear. If startFrameIndex is omitted, Flash uses the current selection. This parameter is optional.
  - @param endFrameIndex Optional zero-based index where the clear range ends. The range includes frames before endFrameIndex, not endFrameIndex itself. With only startFrameIndex supplied, endFrameIndex uses that same value.
    \*/
    clearKeyframes(startFrameIndex?: number, endFrameIndex?: number): void
    /\*\*
  - Changes frames on the current layer into blank keyframes.
  - @param startFrameIndex Zero-based index identifying the first frame to convert to keyframes. If startFrameIndex is omitted, Flash converts the frames currently selected. This parameter is optional.
  - @param endFrameIndex Optional zero-based index where conversion to keyframes stops. The conversion range includes frames before endFrameIndex, not endFrameIndex itself. With only startFrameIndex supplied, endFrameIndex uses that same value.
    \*/
    convertToBlankKeyframes(startFrameIndex?: number, endFrameIndex?: number): void
    /\*\*
  - Changes a frame range to keyframes on the current layer, or uses the selection when no frames are provided.
  - @param startFrameIndex Zero-based index identifying the first frame to convert to keyframes. If startFrameIndex is omitted, Flash converts the frames currently selected. This parameter is optional.
  - @param endFrameIndex Optional zero-based index where conversion to keyframes stops. The conversion range includes frames before endFrameIndex, not endFrameIndex itself. With only startFrameIndex supplied, endFrameIndex uses that same value.
    \*/
    convertToKeyframes(startFrameIndex?: number, endFrameIndex?: number): void
    /\*\*
  - Places a frame range from the current layer onto the clipboard.
  - @param startFrameIndex Zero-based index for the first frame in the range to copy. If startFrameIndex is omitted, Flash uses the current selection. This parameter is optional.
  - @param endFrameIndex Optional zero-based index where copying stops. The copied range includes frames before endFrameIndex, not endFrameIndex itself. With only startFrameIndex supplied, endFrameIndex uses that same value.
    \*/
    copyFrames(startFrameIndex?: number, endFrameIndex?: number): void
    /\*\*
  - Copies either the layers selected in the Timeline or the layers in the supplied range. Optional arguments identify one layer or a layer span to copy.
  - @param startFrameIndex Optional. Zero-based index for the first layer in the range to copy. If startLayerIndex is omitted, Flash uses the current selection.
  - @param endFrameIndex Optional. Zero-based index for the layer where copying stops. The copied layer range runs through and includes endLayerIndex . If only startLayerIndex is supplied, endLayerIndex takes the startLayerIndex value.
    \*/
    copyLayers(startFrameIndex?: number, endFrameIndex?: number): void
    /\*\*
  - Copies motion from selected frames, whether the source is a motion tween or frame-by-frame animation. Afterward, timeline.pasteMotion() can apply that motion to other frames.
  - For motion copied as text (code) that can be pasted into a script, use timeline.copyMotionAsAS3().
    \*/
    copyMotion(): void
    /\*\*
  - Copies motion from selected frames to the clipboard as ActionScript 3.0 code, whether the source is a motion tween or frame-by-frame animation. The resulting code can be pasted into a script.
  - For a motion format that can be applied to other frames, use timeline.copyMotion().
    \*/
    copyMotionAsAS3(): void
    /\*\*
  - Builds a new motion object. Parameters are optional; when present, they set the timeline selection to the specified frames before the motion object is created.
  - @param startFrameIndex First frame where motion objects should be created. If startFrameIndex is omitted, Flash uses the current selection; when no selection exists, all frames at the current playhead on every layer are removed. This parameter is optional.
  - @param endFrameIndex Optional frame where motion-object creation stops; the frame range includes frames before endFrameIndex, not endFrameIndex itself. With only startFrameIndex supplied, endFrameIndex uses that same value.
    \*/
    createMotionObject(startFrameIndex?: number, endFrameIndex?: number): void
    /\*\*
  - For each selected keyframe on the current layer, sets frame.tweenType to motion and, when needed, changes each frame's contents into one symbol instance. In the Flash authoring tool, this corresponds to the Create Motion Tween menu item.
  - @param startFrameIndex Zero-based index for the first frame where the motion tween should be created. If startFrameIndex is omitted, Flash uses the current selection. This parameter is optional.
  - @param endFrameIndex Optional zero-based index where the motion tween stops. The frame range includes frames before endFrameIndex, not endFrameIndex itself. With only startFrameIndex supplied, endFrameIndex uses that same value.
    \*/
    createMotionTween(startFrameIndex?: number, endFrameIndex?: number): void
    /\*\*
  - Removes a frame range from the current layer's timeline and stores it on the clipboard.
  - @param startFrameIndex Zero-based index for the first frame in the range to cut. If startFrameIndex is omitted, Flash uses the current selection. This parameter is optional.
  - @param endFrameIndex Optional zero-based index where cutting stops. The cut range includes frames before endFrameIndex, not endFrameIndex itself. With only startFrameIndex supplied, endFrameIndex uses that same value.
    \*/
    cutFrames(startFrameIndex?: number, endFrameIndex?: number): void
    /\*\*
  - Cuts either the layers selected in the Timeline or the layers in the supplied range. Optional arguments identify one layer or a layer span to cut.
  - @param startFrameIndex Optional. Zero-based index for the first layer in the range to cut. If startLayerIndex is omitted, Flash uses the current selection.
  - @param endFrameIndex Optional. Zero-based index for the layer where cutting stops. The cut layer range runs through and includes endLayerIndex. If only startLayerIndex is supplied, endLayerIndex takes the startLayerIndex value.
    \*/
    cutLayers(startFrameIndex?: number, endFrameIndex?: number): void
    /\*\*
  - Removes a layer. When the target layer is a folder, all layers inside that folder are removed too. Without a layer index, Flash removes the selected layers.
  - @param index Zero-based index for the layer to delete. If the timeline contains only one layer, this method makes no change. This parameter is optional.
    \*/
    deleteLayer(index?: number): void
    /\*\*
  - Duplicates either the layers selected in the Timeline or the layers in the supplied range. Optional arguments identify one layer or a layer span to duplicate.
  - @param startFrameIndex Optional. Zero-based index for the first layer in the range to copy. It also identifies the layer above which the clipboard layers are pasted. If startLayerIndex is omitted, Flash uses the current layer selection.
  - @param endFrameIndex Optional. Zero-based index for the layer where copying stops. The copied layer range runs through and includes endLayerIndex. If only startLayerIndex is supplied, endLayerIndex takes the startLayerIndex value.
    \*/
    duplicateLayers(startFrameIndex?: number, endFrameIndex?: number): void
    /\*\*
  - Opens or closes the specified folder layer or layers. If no layer is specified, the operation targets the current layer.
  - @param bExpand Boolean that, when true, opens the folder; false closes it.
  - @param bRecurseNestedParents Boolean that, when true, opens or closes every layer inside the specified folder according to bExpand. This parameter is optional.
  - @param index Optional zero-based index for the folder to open or close. Use -1 to target all layers; bRecurseNestedParents must also be true. In the Flash authoring tool, this property corresponds to the Expand All/Collapse All menu items.
    \*/
    expandFolder(bExpand: boolean, bRecurseNestedParents?: boolean, index?: number): void
    /\*\*
  - Searches for layers with the supplied name and returns their indexes. Layer indexes are flat, so folder layers are counted in the main index.
  - @returns Array of index values for the named layer. If Flash cannot find that layer, the return value is undefined.
  - @param name String containing the layer name to search for.
    \*/
    findLayerIndex(name: string): number[] | undefined
    /\*\*
  - Gets the bounding rectangle for elements on every Timeline layer at a specified frame.
  - @returns Bounding rectangle covering elements on all Timeline layers for the given frame.
  - @param frameIndex Number of the frame whose bounds are requested. Defaults to 1, the first frame. This parameter is optional.
  - @param includeHiddenLayers Optional flag indicating whether bounds from hidden-layer elements are included. The default comes from the SWF publish setting value for "include hidden layers".
    \*/
    getBounds(frameIndex?: number, includeHiddenLayers?: boolean): SimpleShape
    /\*\*
  - Reads one property value from the selected frames.
  - @returns Value of the requested property, or undefined when the selected frames do not all share that property value.
  - @param property String naming the property whose value should be retrieved. See the Property summary for the Frame object for the full property list.
  - @param startframeIndex Zero-based index for the first frame number whose value should be retrieved. If startFrameIndex is omitted, Flash uses the current selection. This parameter is optional.
  - @param endFrameIndex Optional zero-based index for the end of the frame range to select. The range includes frames before endFrameIndex, not endFrameIndex itself. With only startFrameIndex supplied, endFrameIndex uses that same value.
    \*/
    getFrameProperty(
    property: string,
    startframeIndex?: number,
    endFrameIndex?: number,
    ): string | undefined
    /\*\*
  - Produces an XML string describing the current horizontal and vertical guide-line positions for a timeline (View > Guides >Show Guides). Apply those guide lines to a timeline with timeline.setGuidelines().
  - @returns XML string.
    \*/
    getGuidelines(): string
    /\*\*
  - Reads one property value from the selected layers.
  - @returns Requested property value. Flash inspects layer properties to determine the type. If the specified layers do not all share that value, Flash returns undefined.
  - @param property String naming the property value to retrieve. For available properties, consult the Property summary for the Frame object.
    \*/
    getLayerProperty(property: string): any | undefined
    /\*\*
  - Returns the currently selected frames as an array.
  - @returns Array holding 3n integers, where n equals the number of selected regions. Within each group, the first integer is the layer index, the second is the selection's starting frame, and the third is the ending frame for that selection range. The ending frame is excluded.
    \*/
    getSelectedFrames(): number[]
    /\*\*
  - Returns zero-based index values for the currently selected layers.
  - @returns Array containing zero-based index values for selected layers.
    \*/
    getSelectedLayers(): number[]
    /\*\*
  - Adds a blank keyframe at the supplied frame index; when no index is supplied, the playhead/selection determines where the blank keyframe is added. See also timeline.insertKeyframe().
  - @param frameNumIndex Zero-based index for the frame where the keyframe should be inserted. If frameNumIndex is omitted, Flash uses the current playhead frame number. This parameter is optional.
  - For a specified or selected regular frame, the keyframe is placed on that frame. As an example, in a span of 10 frames numbered 1-10, selecting Frame 5 makes this method turn Frame 5 into a blank keyframe while keeping the span length at 10 frames. When Frame 5 is selected and is a keyframe followed by a regular frame, the new blank keyframe goes at Frame 6. When Frame 5 is a keyframe and the next frame is already a keyframe, the method inserts no keyframe and moves the playhead to Frame 6.
    \*/
    insertBlankKeyframe(frameNumIndex?: number): void
    /\*\*
  - Adds the requested number of frames at the supplied index.
  - With no parameters, behavior is:
  - - If one or more frames are selected, Flash inserts that count of frames at the first selected frame in the current layer. For example, selecting frames 6 through 10 (five frames total) adds five frames at Frame 6 in the layer that contains the selected frames.
  - - When nothing is selected, Flash adds one frame at the playhead position across every layer.
  - When parameters are supplied, behavior is:
  - - If only numFrames is supplied, Flash inserts that many frames at the current frame on the current layer.
  - - If numFrames is supplied and bAllLayers is true, Flash adds that frame count at the current frame across every layer.
  - - If all three parameters are supplied, Flash inserts the specified number of frames at the specified index (frameIndex); bAllLayers decides whether the addition applies only to the current layer or to all layers.
  - For a specified or selected regular frame, insertion happens on that frame. As an example, in a span of 10 frames numbered 1-10, selecting Frame 5, or passing 4 for frameIndex, adds a frame at Frame 5 and changes the span length to 11 frames. When Frame 5 is selected and is a keyframe, the method inserts a frame at Frame 6 whether or not the next frame is also a keyframe.
  - @param numFrames Optional integer specifying how many frames to insert. If omitted, Flash inserts frames at the current selection in the current layer.
  - @param bAllLayers Boolean that, when true, inserts the number of frames in numFrames into every layer; false (the default) inserts frames into the current layer. This parameter is optional.
  - @param frameNumIndex Zero-based index for the frame where a new frame should be inserted. This parameter is optional.
    \*/
    insertFrames(numFrames?: number, bAllLayers?: boolean, frameNumIndex?: number): void
    /\*\*
  - Adds a keyframe at the specified frame. If the argument is omitted, the playhead or selection location determines the insertion point.
  - @param frameNumIndex Optional zero-based frame index where the keyframe should be inserted in the current layer. If frameNumIndex is omitted, Flash uses the current playhead frame number or the selected frame number.
    \*/
    insertKeyframe(frameNumIndex?: number): void
    /\*\*
  - Inserts clipboard frames into the specified frame range.
  - @param startFrameIndex Zero-based index for the first frame in the paste range. If startFrameIndex is omitted, Flash uses the current selection. This parameter is optional.
  - @param endFrameIndex Optional zero-based index where pasting stops. The method pastes before endFrameIndex, excluding endFrameIndex. With only startFrameIndex supplied, endFrameIndex uses that same value.
    \*/
    pasteFrames(startFrameIndex?: number, endFrameIndex?: number): void
    /\*\*
  - Pastes layers that were previously cut or copied above the selected layer, or above the supplied layer index. If the supplied layer is a folder layer, the layers are inserted into that folder. The method returns the lowest layer index among the pasted layers. This action leaves the system clipboard unchanged.
  - @returns Integer for the lowest layer index among the layers pasted.
  - @param layerIndex Optional. Zero-based index for the layer above which the clipboard layers should be pasted. If layerIndex is omitted, Flash uses the current selection.
    \*/
    pasteLayers(layerIndex?: number): number
    /\*\*
  - Applies the motion-frame range obtained with timeline.copyMotion() to the Timeline. When needed, existing frames move right to create space for the pasted frames.
    \*/
    pasteMotion(): void
    /\*\*
  - Applies copied classic-tween motion to selected frames; motion tweens are not supported. A dialog box appears so the user can paste X position and Y position separately, and can also include Horizontal scale, Vertical scale, Rotation and skew, Color, Filters, and Blend mode.
    \*/
    pasteMotionSpecial(): void
    /\*\*
  - Removes frames.
  - @param startFrameIndex Zero-based index for the first frame where removal starts. If startFrameIndex is omitted, Flash uses the current selection; when no selection exists, all frames at the current playhead on every layer are removed. This parameter is optional.
  - @param endFrameIndex Optional frame where removal stops; the frame range includes frames before endFrameIndex, not endFrameIndex itself. With only startFrameIndex supplied, endFrameIndex uses that same value.
    \*/
    removeFrames(startFrameIndex?: number, endFrameIndex?: number): void
    /\*\*
  - Deletes the motion object and changes the affected frame or frames back to static frames. Parameters are optional; when present, they set the timeline selection to the specified frames before the motion object is removed.
  - @param startFrameIndex First frame where motion-object removal should begin. If startFrameIndex is omitted, Flash uses the current selection; when no selection exists, all frames at the current playhead on every layer are removed. This parameter is optional.
  - @param endFrameIndex Optional frame where motion-object removal stops; the frame range includes frames before endFrameIndex, not endFrameIndex itself. With only startFrameIndex supplied, endFrameIndex uses that same value.
    \*/
    removeMotionObject(startFrameIndex?: number, endFrameIndex?: number): void
    /\*\*
  - Moves one specified layer to a position before or after another specified layer.
  - @param layerToMove Zero-based index identifying the layer to move.
  - @param layerToPutItBy Zero-based index identifying the layer that should sit next to the moved layer. For example, with 1 as layerToMove and 0 as layerToPutItBy, the second layer is positioned next to the first layer.
  - @param bAddBefore Optional value specifying whether the move places the layer before or after layerToPutItBy. Passing false moves the layer after layerToPutItBy; true is the default.
    \*/
    reorderLayer(layerToMove: number, layerToPutItBy: number, bAddBefore?: boolean): void
    /\*\*
  - Reverses a frame range.
  - @param startFrameIndex Zero-based index for the first frame where reversal begins. If startFrameIndex is omitted, Flash uses the current selection. This parameter is optional.
  - @param endFrameIndex Zero-based index for the first frame where reversal stops; the frame range includes frames before endFrameIndex, not endFrameIndex itself. If only startFrameIndex is supplied, endFrameIndex takes the startFrameIndex value. This parameter is optional.
    \*/
    reverseFrames(startFrameIndex?: number, endFrameIndex?: number): void
    /\*\*
  - Selects every frame in the active timeline.
    \*/
    selectAllFrames(): void
    /\*\*
  - Writes a Frame object property on the selected frames.
  - @param property String naming the property to modify. For the full set of properties and values, consult the Property summary for the Frame object.
  - Read-only values such as frame.duration and frame.elements cannot be assigned with this method.
  - @param value Value to assign to the property. To identify the proper value and type, see the Property summary for the Frame object.
  - @param startFrameIndex Zero-based index for the first frame number to modify. If startFrameIndex is omitted, Flash uses the current selection. This parameter is optional.
  - @param endFrameIndex Optional zero-based index for the first frame where modification stops. The frame range includes frames before endFrameIndex, not endFrameIndex itself. If startFrameIndex is supplied without endFrameIndex, endFrameIndex uses that same value.
    \*/
    setFrameProperty(
    property: string,
    value: any,
    startFrameIndex?: number,
    endFrameIndex?: number,
    ): void
    /\*\*
  - Replaces timeline guide lines (View > Guides > Show Guides) with the data in xmlString. To get an XML string suitable for this method, call timeline.getGuidelines().
  - To see the newly applied guide lines, you may need to hide them and then show them again.
  - @returns Boolean true when the guidelines are applied successfully; otherwise false.
  - @param xmlString XML string holding the guideline data to apply.
    \*/
    setGuidelines(xmlString: string): boolean
    /\*\*
  - Assigns one specified property value across all selected layers.
  - @param property String naming the property to set. For a property list, see "Layer object" on page 355.
  - @param value Value to assign to the property. Use the same value type that would be used when assigning the property in the layer object.
  - @param layersToChange Optional string identifying which layers are modified. Supported values are "selected", "all", and "others". If omitted, the default value is "selected".
    \*/
    setLayerProperty(property: string, value: any, layersToChange?: string): void
    /\*\*
  - Selects a frame range in the current layer, or replaces the selected frames with the selection array supplied to this method.
  - @param startFrameIndex Zero-based index for the first frame to set.
  - @param endFrameIndex Zero-based index for the selection end; endFrameIndex is the frame after the final frame included in the range.
  - @param bReplaceCurrentSelection Boolean that, when true, clears the current frame selection before selecting the specified frames. Default: true.
    \*/
    setSelectedFrames(
    startFrameIndex: number,
    endFrameIndex: number,
    bReplaceCurrentSelection?: boolean,
    ): void
    /\*\*
  - Selects a frame range in the current layer, or replaces the selected frames with the selection array supplied to this method.
  - @param selectionList Array of three integers in the form returned by timeline.getSelectedFrames().
  - @param bReplaceCurrentSelection Boolean that, when true, clears the current frame selection before selecting the specified frames. Default: true.
    \*/
    setSelectedFrames(selectionList: number[], bReplaceCurrentSelection?: boolean): void
    /\*\*
  - Selects the specified layer and also makes it the current layer. Selecting a layer also selects all frames in that layer.
  - @param index Zero-based index for the layer to select.
  - @param bReplaceCurrentSelection Optional Boolean; true replaces the current selection, while false extends it. The default value is true.
    \*/
    setSelectedLayers(index: number, bReplaceCurrentSelection?: boolean): void
    /\*\*
  - Shows layer masking while authoring by locking the mask and masked layers. If no layer is specified, the current layer is used. Calling this on a layer whose type is not Mask or Masked makes Flash display an error in the Output panel.
  - @param layerIndex Zero-based index for a mask or masked layer whose masking should be shown while authoring. This parameter is optional.
    \*/
    showLayerMasking(layerIndex?: number): void
    /\*\*
  - Starts automatic timeline playback if the timeline is currently playing. SWF panels can use this method to control timeline playback in the authoring environment.
    \*/
    startPlayback(): void
    /\*\*
  - Stops automatic timeline playback if the timeline is currently playing. SWF panels can use this method to control timeline playback in the authoring environment.
    \*/
    stopPlayback(): void
    }
