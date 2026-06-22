# Angle Editbox, Angle Editboxes, Animation Behavior, Animation Behaviors ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: AngleEditbox; AngleEditboxes; AnimationBehavior; AnimationBehaviors; AnimationEaseOptions; AnimationPlayOperations — Class; AnimationSetting — Instance; AntiAliasType.

## AngleEditbox

Field for entering degree values.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the AngleEditbox.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the AngleEditbox (a DialogColumn, DialogRow, EnablingGroup or BorderPanel).
> _Read Only_
>
> Number **index**
>
> Index of the AngleEditbox within its containing object.
> _Read Only_
>
> Events **events**
>
> Event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection.
> Number **minimumValue**
>
> Minimum value a user may enter in a numeric editbox or combobox. Note: For a measurement editbox or combobox, the value is treated as points regardless of the control's edit units. When the dialog opens, the points value is automatically converted to the edit unit.
> Number **maximumValue**
>
> Maximum value a user may enter in a numeric editbox or combobox. Note: For a measurement editbox or combobox, the value is treated as points regardless of the control's edit units. When the dialog opens, the points value is automatically converted to the edit unit.
> Number **smallNudge**
>
> Increment or decrement applied when the control is selected and the user presses a keyboard arrow key.
> Number **largeNudge**
>
> Increment or decrement applied when the control is selected and the user holds Shift while pressing a keyboard arrow key.
> String **editContents**
>
> Default contents for an editbox control. Note: Choose either edit contents or edit value, not both; when a script includes both, the later setting wins.
> Number **editValue**
>
> Real-number default value for the editbox or combobox. Note: Measurement controls interpret this value in points; the dialog converts that points value into edit units when it opens. Note: Choose either edit value or edit contents, not both; when a script includes both, the later setting wins.
> Number **minWidth**
>
> Control width. For an editbox or combobox, this sets the box's minimum width.
> Object **properties**
>
> Lets several properties be set in one operation.

### Methods

> String **toSource**()
>
> Builds a string that can be executed to return the AngleEditbox.
> AngleEditbox **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Returns that object's specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Type of event. |
| Mixed | handler | Handler callback or file. Accepts File or JavaScript Function. |
| Boolean | captures | Optional obsolete parameter. |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Type of registered event. |
| Mixed | handler | Registered handler callback or file. Accepts File or JavaScript Function. |
| Boolean | captures | Optional obsolete parameter. |

## AngleEditboxes

Collection containing angle editboxes.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in the collection.

### Methods

> AngleEditbox **add**( Object **withProperties** )
>
> Creates an AngleEditbox.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new AngleEditbox. (Optional) |

> Number **count**()
>
> Shows how many elements the AngleEditbox contains.
> AngleEditbox **item**( Mixed **index** )
>
> Gets the AngleEditbox identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value; accepts Long Integer or String. |

> AngleEditbox **itemByID**( Number **id** )
>
> Gets the AngleEditbox with the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID. |

> AngleEditbox **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets every AngleEditbox in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as AngleEditbox, Long Integer or String. |
| Mixed | to | Range end, supplied as AngleEditbox, Long Integer or String. |

> AngleEditbox **firstItem**()
>
> Gets the first AngleEditbox in the collection.
> AngleEditbox **lastItem**()
>
> Gets the last AngleEditbox in the collection.
> AngleEditbox **middleItem**()
>
> Gets the middle AngleEditbox in the collection.
> AngleEditbox **previousItem**( AngleEditbox **obj** )
>
> Gets the collection item immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| AngleEditbox | obj | AngleEditbox whose index follows the target AngleEditbox. |

> AngleEditbox **nextItem**( AngleEditbox **obj** )
>
> Gets the collection item immediately after the specified AngleEditbox.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| AngleEditbox | obj | AngleEditbox whose index precedes the target AngleEditbox. |

> AngleEditbox **anyItem**()
>
> Gets any AngleEditbox in the collection.
> AngleEditbox **everyItem**()
>
> Gets every AngleEditbox in the collection.
> String **toSource**()
>
> Builds a string that can be executed to return the AngleEditbox.
> AngleEditbox **[]**( Number **index** )
>
> Gets the AngleEditbox at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index. |

## AnimationBehavior

An animation behavior entry.

### Instance

> _Read Only_
>
> String **name**
>
> Name assigned to the AnimationBehavior.
> _Read Only_
>
> Number **id**
>
> Unique ID for the AnimationBehavior.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Button **parent**
>
> Parent object for the AnimationBehavior, which is a Button.
> _Read Only_
>
> Number **index**
>
> Position of the AnimationBehavior inside its containing object.
> _Read Only_
>
> Events **events**
>
> Collection containing events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection containing event listeners.
> PageItem **animatedPageItem**
>
> Animated page item referenced by the behavior.
> AnimationPlayOperations **operation**
>
> Playback mode setting.
> Boolean **autoReverseOnRollOff**
>
> When true, roll off from the rollover event automatically plays the animation backward.
> Boolean **enableBehavior**
>
> True means this behavior is enabled.
> BehaviorEvents **behaviorEvent**
>
> Event that triggers the behavior.
> String **label**
>
> String-valued label property.
> Object **properties**
>
> Object used to set multiple properties in one operation.

### Methods

> **remove**()
>
> Removes this AnimationBehavior.
> **insertLabel**( String **key**, String **value** )
>
> Stores the supplied value under the specified label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value to assign. |

> String **extractLabel**( String **key** )
>
> Returns the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |

> String **toSource**()
>
> Builds executable source text that resolves back to the AnimationBehavior.
> AnimationBehavior **getElements**()
>
> Converts the object specifier into an array of object references.
> String **toSpecifier**()
>
> Returns the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type value. |
| Mixed | handler | Event handler to register. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type value. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## AnimationBehaviors

Collection containing animation behaviors.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for this collection.

### Methods

> Number **count**()
>
> Reports how many elements the AnimationBehavior exposes.
> AnimationBehavior **add**( Object **withProperties** )
>
> Adds a new AnimationBehavior.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Initial property values for the new AnimationBehavior. (Optional) |

> AnimationBehavior **item**( Mixed **index** )
>
> Fetches the AnimationBehavior matching the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name selector. Can accept: Long Integer or String. |

> AnimationBehavior **itemByName**( String **name** )
>
> Fetches the AnimationBehavior matching the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> AnimationBehavior **itemByID**( Number **id** )
>
> Fetches the AnimationBehavior matching the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> AnimationBehavior **itemByRange**( Mixed **from**, Mixed **to** )
>
> Fetches AnimationBehaviors inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as an AnimationBehavior, index, or name. Can accept: AnimationBehavior, Long Integer or String. |
| Mixed | to | Range end, supplied as an AnimationBehavior, index, or name. Can accept: AnimationBehavior, Long Integer or String. |

> AnimationBehavior **firstItem**()
>
> Fetches the first AnimationBehavior in the collection.
> AnimationBehavior **lastItem**()
>
> Fetches the last AnimationBehavior in the collection.
> AnimationBehavior **middleItem**()
>
> Fetches the middle AnimationBehavior in the collection.
> AnimationBehavior **previousItem**( AnimationBehavior **obj** )
>
> Fetches the AnimationBehavior immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| AnimationBehavior | obj | Index for the AnimationBehavior that follows the desired AnimationBehavior. |

> AnimationBehavior **nextItem**( AnimationBehavior **obj** )
>
> Fetches the collection AnimationBehavior positioned after the specified AnimationBehavior.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| AnimationBehavior | obj | AnimationBehavior positioned immediately before the desired AnimationBehavior. |

> AnimationBehavior **anyItem**()
>
> Fetches any AnimationBehavior from the collection.
> AnimationBehavior **everyItem**()
>
> Fetches every AnimationBehavior in the collection.
> String **toSource**()
>
> Builds executable source text that resolves back to the AnimationBehavior.
> AnimationBehavior **[]**( Number **index** )
>
> Fetches the AnimationBehavior at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## AnimationEaseOptions

Ease option value.

### Class

> _Read Only_
>
> Number `NO_EASE` = 2051960645
>
> No easing is applied.
> _Read Only_
>
> Number `EASE_IN` = 2051371849
>
> Simple ease-in behavior.
> _Read Only_
>
> Number `EASE_OUT` = 2051371855
>
> Simple ease-out behavior.
> _Read Only_
>
> Number `EASE_IN_OUT` = 2051361103
>
> Simple ease-in and ease-out behavior.
> _Read Only_
>
> Number `CUSTOM_EASE` = 2051363407
>
> Custom read-only ease type.

## AnimationPlayOperations — Class

> _Read Only_
>
> Number **PLAY** = 1886151033
>
> Begins playback.
> _Read Only_
>
> Number **STOP** = 1937010544
>
> Ends playback.
> _Read Only_
>
> Number **PAUSE** = 1885435251
>
> Suspends playback.
> _Read Only_
>
> Number **RESUME** = 1919251317
>
> Continues playback.
> _Read Only_
>
> Number `REVERSE_PLAYBACK` = 1919252069
>
> Runs playback in reverse.
> _Read Only_
>
> Number `STOP_ALL` = 1937010785
>
> Ends all playback.

## AnimationSetting — Instance

> _Read Only_
>
> Boolean **hasCustomSettings**
>
> Indicates whether this animated object uses custom settings.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the AnimationSetting: a PageItem, HtmlItem, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame or EndnoteTextFrame.
> _Read Only_
>
> Events **events**
>
> Collection containing events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection containing event listeners.
> Mixed **preset**
>
> Base animation preset currently applied. Can return: MotionPreset, String or NothingEnum enumerator.
> Number **transformOffsets**
>
> Transform offset percentage measured from the target object bounding box's left-top corner.
> Number **duration**
>
> Duration, in seconds, for this animation.
> Mixed **motionPathPoints**
>
> Animation motion path point list. Can return: Ordered array containing pathPointArray:Array of Ordered array containing anchor:Array of 2 Reals, leftDirection:Array of 2 Reals, rightDirection:Array of 2 Reals, pathOpen:Boolean.
> Mixed **motionPath**
>
> Animation motion path points and key frames. Can return: Ordered array containing keyFrame:Long Integer, pathPoint:Ordered array containing anchor:Array of 2 Reals, leftDirection:Array of 2 Reals, rightDirection:Array of 2 Reals.
> Mixed **opacityArray**
>
> Animation opacity key frames. Can return: Ordered array containing keyFrame:Long Integer, value:Real.
> Mixed **rotationArray**
>
> Animation rotation key frames. Can return: Ordered array containing keyFrame:Long Integer, value:Real.
> Mixed **scaleXArray**
>
> Animation scale x key frames. Can return: Ordered array containing keyFrame:Long Integer, value:Real.
> Mixed **scaleYArray**
>
> Animation scale y key frames. Can return: Ordered array containing keyFrame:Long Integer, value:Real.
> DesignOptions **designOption**
>
> Animation design option value.
> AnimationEaseOptions **easeType**
>
> Ease type value.
> Number **plays**
>
> Playback count for this animation.
> Boolean **playsLoop**
>
> Set true when animation playback loops.
> Boolean **initiallyHidden**
>
> Indicates whether this object starts hidden in an exported SWF file.
> Boolean **hiddenAfter**
>
> Indicates whether an exported SWF file hides this object after its animation plays.
> Object **properties**
>
> Object used to set multiple properties in one operation.

### Methods

> **saveACopy**( File **to** )
>
> Writes a copy of this motion preset to an InDesign motion preset file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | Target Flash motion preset file for export. |

> MotionPreset **save**( String **name** )
>
> Stores this motion preset as a custom preset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to assign to the new motion preset. |

> String **toSource**()
>
> Builds executable source text that resolves back to the AnimationSetting.
> AnimationSetting **getElements**()
>
> Converts the object specifier into an array of object references.
> String **toSpecifier**()
>
> Returns the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type value. |
| Mixed | handler | Event handler to register. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type value. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## AntiAliasType

Anti-aliasing type value.

### Class

> _Read Only_
>
> Number `GRAY_ANTIALIASING` = 1732527186
>
> Gray anti-aliasing mode.
> _Read Only_
>
> Number `COLOR_ANTIALIASING` = 1665418322
>
> Color anti-aliasing mode.
> _Read Only_
>
> Number `THICKER_ANTIALIASING` = 1950444659
>
> Thicker anti-aliasing mode.
