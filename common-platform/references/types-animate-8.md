# Animate (part 8)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- A Layer represents one timeline layer. The timeline.layers property stores an array of Layer objects, reachable through fl.getDocumentDOM().getTimeline().layers.
  \*/
  declare class Layer {
  /\*\*
  - String indicating the layer's animation type. Possible values include: "none", "motion object", "IK pose".
    \*/
    readonly animationType: string
    /\*\*
  - Color used for the layer outline, accepted in these formats:
  - - String format "#RRGGBB" or "#RRGGBBAA"
  - - Hexadecimal number format 0xRRGGBB
  - - Integer equal to the decimal form of a hexadecimal number
  - In the Layer Properties dialog box, this property corresponds to the Outline color setting.
    \*/
    color: string | number
    /\*\*
  - Integer count of frames in the layer.
    \*/
    readonly frameCount: number
    /\*\*
  - Array containing Frame objects (see Frame object).
    \*/
    readonly frames: Frame[]
    /\*\*
  - Integer percentage for layer height; this matches the Layer height value in the Layer Properties dialog box. Acceptable values are percentages of the default height: 100, 200, or 300.
    \*/
    height: number
    /\*\*
  - String describing the layer's current use; in the Layer Properties dialog box, this matches the Type setting. Supported values are "normal", "guide", "guided", "mask", "masked", and "folder".
    \*/
    layerType: string
    /\*\*
  - Boolean indicating whether the layer is locked. true means locked. The default value is false.
    \*/
    locked: boolean
    /\*\*
  - String containing the layer name.
    \*/
    name: string
    /\*\*
  - Boolean controlling outline display for every object in the layer. With true, all layer objects show only outlines; with false, objects display as originally created.
    \*/
    outline: boolean
    /\*\*
  - Layer object representing the folder, guide, or mask layer that contains this layer. The parent layer must be a preceding folder, guide, or mask layer, or the parentLayer of the previous or next layer. Assigning parentLayer does not reposition the layer in the list; if the assignment would require moving the layer, it has no effect. Top-level layers use null.
    \*/
    parentLayer: Layer
    /\*\*
  - Boolean indicating whether the layer's Stage objects are visible or hidden. With true, every object in the layer is visible; with false, they are hidden. The default value is true.
    \*/
    visible: boolean
    }

/\*\*

- Frame is the layer-level object used for individual frames.
  \*/
  declare class Frame {
  /\*\*
  - Holds ActionScript code as a string. Use "\n" when the code needs a line break.
    \*/
    actionScript: string
    /\*\*
  - Integer count for how many frames belong to this frame sequence.
    \*/
    readonly duration: number
    /\*\*
  - Element objects are returned as an array (see Element object). Their sequence matches their stored order in the FLA file. When several shapes on the Stage remain ungrouped, Flash reports them as one element. Grouping each shape instead makes Flash expose multiple separate elements on the Stage. Put another way, any number of raw, ungrouped Stage shapes are treated as a single element. For example, if a frame holds three raw, ungrouped shapes, elements.length for that frame is 1. The workaround is to select each shape on its own and group it.
    \*/
    readonly elements: Element[]
    /\*\*
  - Boolean switch. true makes the frame read easing from the custom ease curve; false makes it read the numeric ease value.
    \*/
    hasCustomEase: boolean
    /\*\*
  - String describing which kind of Frame name is in use. Acceptable values are "none", "name", "comment", and "anchor". Assigning "none" removes the frame.name property.
    \*/
    labelType: string
    /\*\*
  - Boolean setting for path orientation: true rotates the tweened element as it travels so its angle follows each path point, while false leaves that rotation disabled.
  - To assign this property, first set frame.motionTweenRotate to "none".
    \*/
    motionTweenOrientToPath: boolean
    /\*\*
  - String controlling rotation during the tween. Acceptable values are "none", "auto", "clockwise", and "counter-clockwise". With "auto", the object turns in the direction that takes the least movement to match the next keyframe's rotation.
  - To set frame.motionTweenOrientToPath, set this property to "none".
    \*/
    motionTweenRotate: string
    /\*\*
  - Integer count of rotations made by the tweened element from the starting keyframe to the following keyframe.
    \*/
    motionTweenRotateTimes: number
    /\*\*
  - Boolean setting for whether the tweened element changes size to match the object in the following keyframe, growing through the tween when true and not scaling when false.
    \*/
    motionTweenScale: boolean
    /\*\*
  - Boolean setting for automatic snapping of the tweened element to the closest point on the motion guide layer tied to this frame's layer; true enables it and false disables it.
    \*/
    motionTweenSnap: boolean
    /\*\*
  - Boolean setting that, when true, keeps the tweened object's animation synchronized with the main timeline.
    \*/
    motionTweenSync: boolean
    /\*\*
  - String containing this frame's name.
    \*/
    name: string
    /\*\*
  - String selecting how a shape tween blends from the starting keyframe's shape into the following keyframe's shape. Acceptable values are "distributive" and "angular".
    \*/
    shapeTweenBlend: string
    /\*\*
  - For frame.soundLibraryItem, string selecting the effect applied to direct frame audio. Use one of "none", "left channel", "right channel", "fade left to right", "fade right to left", "fade in", "fade out", or "custom".
    \*/
    soundEffect: string
    /\*\*
  - Library item (see SoundItem object) used for creating a sound that attaches directly to the frame.
    \*/
    soundLibraryItem: SoundItem
    /\*\*
  - Integer playback count for a sound attached directly to a frame (frame.soundLibraryItem). To use this value, set frame.soundLoopMode to "repeat".
    \*/
    soundLoop: number
    /\*\*
  - String determining whether a sound attached directly to a frame (frame.soundLibraryItem) plays a fixed number of times or loops without limit. Acceptable values are "repeat" and "loop". Set frame.soundLoop when you need to specify the play count.
    \*/
    soundLoopMode: string
    /\*\*
  - String giving the library-stored name of a sound attached directly to a frame (frame.soundLibraryItem).
    \*/
    soundName: string
    /\*\*
  - For frame.soundLibraryItem, string defining direct frame audio sync behavior. Use one of "event", "stop", "start", or "stream".
    \*/
    soundSync: string
    /\*\*
  - Index for the sequence's first frame.
    \*/
    readonly startFrame: number
    /\*\*
  - Integer easing amount to apply to the tweened object. Acceptable values are -100 to 100. Use a value from -1 through -100 when the motion tween should start slowly and speed up near the end. Use a positive value from 1 through 100 when it should start quickly and slow down by the end.
    \*/
    tweenEasing: number
    /\*\*
  - String used as the instance name for the selected motion object.
    \*/
    tweenInstanceName: string
    /\*\*
  - String choosing the tween type. Use "motion", "shape", or "none"; "none" removes the motion tween. Use timeline.createMotionTween() to create a motion tween.
  - With "motion", the frame object must be a symbol, text field, or grouped object, and Flash tweens it from its current keyframe location to the following keyframe's location.
  - With "shape", the frame object must be a shape, and Flash blends it from the current keyframe's shape into the following keyframe's shape.
    \*/
    tweenType: string
    /\*\*
  - Tween Object reference.
    \*/
    tweenObj: Tween
    /\*\*
  - Boolean setting. true shares one custom ease curve across all properties; false gives each property an individual ease curve.
  - Frames without custom easing ignore this property.
    \*/
    useSingleEaseCurve: boolean
    /\*\*
  - Changes the selected motion object into a 2D motion object.
    \*/
    convertMotionObjectTo2D(): void
    /\*\*
  - Changes the selected motion object into a 3D motion object.
    \*/
    convertMotionObjectTo3D(): void
    /\*\*
  - Changes the current frame into Frame-by-Frame Animation.
  - @returns boolean. true is returned when the frame holds animation that can become frame by frame animation. Motion Tween frame and Classic Tween frame are examples that return true; other frame types, such as static, return false.
    \*/
    convertToFrameByFrameAnimation(): boolean
    /\*\*
  - Provides objects describing the control points for the cubic Bezier curve that defines the ease curve.
  - @returns Array of JavaScript objects, with each object carrying x and y properties.
  - @param property Optional string naming the property whose custom ease value should be returned. Allowed strings are "all", "position", "rotation", "scale", "color", and "filters" . When omitted, the default is "all".
    \*/
    getCustomEase(property?: string): Point[]
    /\*\*
  - Provides the motion XML string for the selected motion object.
  - @returns String containing the selected motion object's motion XML.
    \*/
    getMotionObjectXML(): string
    /\*\*
  - Reads the sound envelope data for any frame.
  - @returns Sound object.
    \*/
    getSoundEnvelope(): SoundItem
    /\*\*
  - Reads the start and end limits for a custom Sound envelope applied to frame sound.
  - @returns Structure containing start and end fields.
    \*/
    getSoundEnvelopeLimits(): Limits
    /\*\*
  - Boolean result indicating whether the current selection contains a motion path.
    \*/
    hasMotionPath(): boolean
    /\*\*
  - Boolean result indicating whether the current selection is a 3D motion object.
    \*/
    is3DMotionObject(): boolean
    /\*\*
  - Boolean result indicating whether this frame has any elements.
    \*/
    isEmpty(): boolean
    /\*\*
  - Boolean result indicating whether the current selection is a motion object.
    \*/
    isMotionObject(): boolean
    /\*\*
  - Boolean control that selects (true) or deselects (false) the current motion object's motion path.
    \*/
    selectMotionPath(): boolean
    /\*\*
  - Supplies an array of control point and tangent endpoint coordinates defining a cubic Bezier curve for use as a custom ease curve. The array is built from the horizontal position of the control points and tangent endpoints, ordered left to right.
  - @param property String naming the property that should use the ease curve. Acceptable values are "all", "position", "rotation", "scale", "color", and "filters".
  - @param easeCurve Array of objects defining the ease curve. Every entry is a JavaScript object carrying properties named x and y.
    \*/
    setCustomEase(property: string, easeCurve: Point[]): void
    /\*\*
  - Sets the duration, meaning the tween span length, for the currently selected motion object.
  - @param duration Number of frames for the selected motion object's tween span.
  - @param stretchExistingKeyframes Boolean deciding whether to stretch the tween span or add frames through the last frame.
    \*/
    setMotionObjectDuration(duration: number, stretchExistingKeyframes?: boolean): void
    /\*\*
  - Assigns the supplied motion XML to the selected motion object.
  - @param xmlstr String value containing the XML string.
  - @param endAtCurrentLocation Boolean deciding whether the tween begins or finishes at the current position.
    \*/
    setMotionObjectXML(xmlstr: string, endAtCurrentLocation?: boolean): void
    /\*\*
  - Applies a sound envelope to any frame that has a sound file. The soundEnv object is an array, and every array item contains these properties:
  - - mark
  - - leftChannel
  - - rightChannel
  - @param soundEnv Sound envelope.
    \*/
    setSoundEnvelope(soundEnv: SoundItem): void
    /\*\*
  - Applies sound envelope limits to any frame that has a sound file.
  - @param limits Structure with start and end fields that represent custom sound envelope limits.
    \*/
    setSoundEnvelopeLimits(limits: Limits): void
    }

// Element
/\*\*

- Element is the type for anything shown on the Stage. Selection example:
- var el = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
  \*/
  declare class Element {
  /\*\*
  - Integer depth for the object in the view, with values greater than 0. Stage drawing order determines which object appears above others. The Modify > Arrange menu item can also change object order.
  - Example script after selecting an object: fl.trace("Depth of selected object: " + fl.getDocumentDOM().selection[0].depth);
    \*/
    readonly depth: number
    /\*\*
  - String describing the specified element's type. Allowed elementType strings are "shape", "text", "tlfText" (Flash Pro CS5 and later), "instance", and "shapeObj"
    \*/
    readonly elementType: string
    /\*\*
  - Float height for the element, measured in pixels. For text fields, select the field and resize it with document.setTextRectangle(); changing this property scales the text instead.
    \*/
    height: number
    /\*\*
  - Layer object that contains the element.
    \*/
    readonly layer: Layer
    /\*\*
  - Float coordinate for the element's left edge. For elements in a scene, element.left is relative to the upper-left corner of the Stage; for elements inside a symbol, it is relative to the symbol's registration point, also called the origin point or zero point. Set this property with document.setSelectionBounds() or document.moveSelectionBy().
    \*/
    readonly left: number
    /\*\*
  - Boolean value: true means the element is locked; false means it is not. When element.elementType is "shape", this property has no effect.
    \*/
    locked: boolean
    /\*\*
  - Matrix object. A matrix includes properties a, b, c, d, tx, and ty. Properties a, b, c, and d are floating-point values, while tx and ty are coordinates. See Matrix object.
    \*/
    matrix: Matrix
    /\*\*
  - String naming the element, usually called the Instance name. This property is ignored when element.elementType is "shape". See element.elementType.
    \*/
    name: string
    /\*\*
  - Integer or float from -180 through 180 giving the object's clockwise rotation in degrees.
    \*/
    rotation: number
    /\*\*
  - Float x-scale value for symbols, drawing objects, and primitive rectangles and ovals. A value of 1 means 100 percent scale.
    \*/
    scaleX: number
    /\*\*
  - Float y-scale value for symbols, drawing objects, and primitive rectangles and ovals. A value of 1 means 100 percent scale.
    \*/
    scaleY: number
    /\*\*
  - Boolean flag showing whether the element is selected (true) or not selected (false).
    \*/
    selected: boolean
    /\*\*
  - Float from -180 through 180 giving the x-skew value for symbols, drawing objects, and primitive rectangles and ovals.
    \*/
    skewX: number
    /\*\*
  - Float from -180 through 180 giving the y-skew value for symbols, drawing objects, and primitive rectangles and ovals.
    \*/
    skewY: number
    /\*\*
  - Top edge of the element. For scene elements, element.top is relative to the upper-left corner of the Stage; for elements contained in a symbol, it is relative to the symbol's registration point. Set this property with document.setSelectionBounds() or document.moveSelectionBy().
    \*/
    readonly top: number
    /\*\*
  - Floating-point x coordinate for the selected element's transformation point in the parent coordinate system. Assigning a new value here moves the element. In contrast, element.setTransformationPoint() moves only the transformation point, leaving the element in place.
    \*/
    transformX: number
    /\*\*
  - Floating-point y coordinate for the selected element's transformation point in the parent coordinate system. Assigning a new value here moves the element. In contrast, element.setTransformationPoint() moves only the transformation point, leaving the element in place.
    \*/
    transformY: number
    /\*\*
  - Float width for the element, measured in pixels. For text fields, select the field and resize it with document.setTextRectangle(); changing this property scales the text instead.
    \*/
    width: number
    /\*\*
  - Float x coordinate for the selected element's registration point.
    \*/
    x: number
    /\*\*
  - Float y coordinate for the selected element's registration point.
    \*/
    y: number
    /\*\*
  - Retrieves the data value identified by the name parameter.
  - The stored data's own type determines the returned data type (see element.setPersistentData()).
  - Persistent data is supported only by symbols and bitmaps.
  - @returns Data identified by the name parameter, or 0 when that data is absent.
  - @param name String identifying which data should be returned.
    \*/
    getPersistentData(name: string): any | number
    /\*\*
  - Indicates whether publishing is enabled for a specified persistent data item, using the specified format on an element.
  - Note: _`EMBED_SWF`_ is the built-in persistent-data publishing format. When enabled, every document publish embeds that data in the SWF file. ActionScript access uses the .metaData property; support requires SWF version 19 (Flash Player 11.6) or later and only covers symbol instances onstage. Custom JSFL scripts may use additional publishing formats by calling this method with the same format.
  - @returns True when that persistent data publishes for the requested format; otherwise False.
  - @param name String naming the persistent data item (set with element.setPersistentData()).
  - @param format String specifying the publishing format. Ex: "_`EMBED_SWF`_"
    \*/
    getPublishPersistentData(name: string, format: string): boolean
    /\*\*
  - Retrieves the specified element's transformation point value.
  - Transformation point coordinates are relative to different origins depending on the selected item type. For more information, see element.setTransformationPoint().
  - @returns Point such as {x:10, y:20}, where x and y are floating-point numbers, locating the transformation point, also called origin point or zero point, inside the element coordinate system.
    \*/
    getTransformationPoint(): Point
    /\*\*
  - Tests whether the specified data has been attached to the specified element. Persistent data is supported only by symbols and bitmaps.
  - @returns Boolean value: true when the specified data is attached to the object; false otherwise.
  - @param name String naming the data item to test.
    \*/
    hasPersistentData(name: string): boolean
    /\*\*
  - Deletes persistent data with the specified name from the object. Persistent data is supported only by symbols and bitmaps.
  - @param name String naming the data to remove.
  - @returns Boolean value: true when data was removed; false otherwise.
    \*/
    removePersistentData(name: string): boolean
    /\*\*
  - Stores data on an element. The data remains available after reopening the FLA file containing that element. Persistent data is supported only by symbols and bitmaps.
  - @param name String used to associate a name with the data. That name is used later to retrieve the data.
  - @param type String defining the data type. Use one of "integer", "integerArray", "double", "doubleArray", "string", or "byteArray".
  - @param value Value to associate with the object. The value data type depends on the type parameter, and the specified value should match that parameter's data type.
    \*/
    setPersistentData(name: string, type: string, value: any): void
    /\*\*
  - Turns persistent-data publishing on or off for a specified format.
  - @param name String naming the persistent data item (set with element.setPersistentData()).
  - @param format String specifying the publishing format. Note: _`EMBED_SWF`_ is the built-in persistent-data publishing format. When enabled, every document publish embeds that data in the SWF file. ActionScript access uses the .metaData property; support requires SWF version 19 (Flash Player 11.6) or later and only covers symbol instances onstage. Custom JSFL scripts may use additional publishing formats by calling this method with the same format.
  - @param publish Boolean indicating whether persistent data publishing should be enabled or disabled for that format.
    \*/
    setPublishPersistentData(name: string, format: string, publish: boolean): void
    /\*\*
  - Sets the element's transformation point position. This method is nearly the same as document.setTransformationPoint(), with one difference: it can set transformation points for elements without selecting them first. It moves the transformation point only; element.transformX and element.transformY move the element itself.
  - @param transformationPoint Point such as {x:10, y:20}, where x and y are floating-point numbers, for an element or group's transformation point.
  - - Shapes: use document coordinates; (0,0) is the Stage upper-left corner.
  - - Symbols: use the symbol registration point; (0,0) is located at the registration point.
  - - Text: use text-field coordinates; (0,0) is the text field upper-left corner. - Bitmaps/videos: use bitmap/video coordinates; (0,0) is the bitmap or video upper-left corner.
  - - Drawing objects, primitive objects, and groups: use coordinates relative to the stage.
