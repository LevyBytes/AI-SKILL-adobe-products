# Track Changes Preference, Transform Attribute Option, Transform Position Reference, Transform Preference ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: TrackChangesPreference; TransformAttributeOption; TransformPositionReference; TransformPreference — Instance; TransformationMatrices; TransformationMatrix; TransparencyPreference — Instance; TransparencySetting — Instance; TrapEndTypes; TrapImagePlacementTypes.

## TrackChangesPreference

Preferences for tracking changes.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for this TrackChangesPreference; it is a Application.
> _Read Only_
>
> Events **events**
>
> Event objects are exposed through this collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener objects are exposed through this collection.
> Mixed **changeBarColor**
>
> Change bar color. Specify it as an InCopy UI color. Return values can be: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
> Boolean **showAddedText**
>
> Added text is displayed when this value is true.
> Boolean **showChangeBars**
>
> Change bars are displayed when this value is true.
> Boolean **showDeletedText**
>
> Deleted text is displayed when this value is true.
> Boolean **showMovedText**
>
> Moved text is displayed when this value is true.
> Boolean **spellCheckDeletedText**
>
> Deleted text participates in the Spell Check command when this value is true.
> Mixed **textColorForAddedText**
>
> Text color for added text. Specify it as an InCopy UI color. Use it only under the added-text color setting change uses change pref color. Return values can be: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
> Mixed **backgroundColorForAddedText**
>
> Background color for added text. Specify it as an InCopy UI color. Use it only under the added-background setting change background uses change pref color. Return values can be: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
> Mixed **textColorForDeletedText**
>
> Text color for deleted text. Specify it as an InCopy UI color. Use it only under the deleted-text color setting change uses change pref color. Return values can be: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
> Mixed **backgroundColorForDeletedText**
>
> Background color for deleted text. Specify it as an InCopy UI color. Use it only under the deleted-background setting change background uses change pref color. Return values can be: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
> Mixed **textColorForMovedText**
>
> Text color for moved text. Specify it as an InCopy UI color. Use it only under the moved-text color setting change uses change pref color. Return values can be: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
> Mixed **backgroundColorForMovedText**
>
> Background color for moved text. Specify it as an InCopy UI color. Use it only under the moved-background setting change background uses change pref color. Return values can be: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
> ChangeMarkings **markingForAddedText**
>
> Marking used to identify added text.
> ChangeMarkings **markingForDeletedText**
>
> Marking used to identify deleted text.
> ChangeMarkings **markingForMovedText**
>
> Marking used to identify moved text.
> ChangebarLocations **locationForChangeBar**
>
> Location used for the change bar.
> ChangeTextColorChoices **addedTextColorChoice**
>
> Color choice applied to added text.
> ChangeBackgroundColorChoices **addedBackgroundColorChoice**
>
> Background color choice applied to added text.
> ChangeTextColorChoices **deletedTextColorChoice**
>
> Color choice applied to deleted text.
> ChangeBackgroundColorChoices **deletedBackgroundColorChoice**
>
> Background color choice applied to deleted text.
> ChangeTextColorChoices **movedTextColorChoice**
>
> Color choice applied to moved text.
> ChangeBackgroundColorChoices **movedBackgroundColorChoice**
>
> Background color choice applied to moved text.
> Boolean **preventDuplicateColor**
>
> When true, duplicate user colors are prevented for tracked-changes background color.
> Object **properties**
>
> Use this property to set multiple properties together.

### Methods

> String **toSource**()
>
> Builds source text that recreates the TrackChangesPreference when run.
> TrackChangesPreference **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Attaches a listener for an event.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

## TransformAttributeOption

Choices for applying layout attributes to any page item.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> ObjectStyle **parent**
>
> Parent object for this TransformAttributeOption; it is a ObjectStyle.
> _Read Only_
>
> Events **events**
>
> Event objects are exposed through this collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener objects are exposed through this collection.
> Measurement Unit (Number or String)=any **transformAttrX**
>
> Left position assigned to the object by the object style.
> Measurement Unit (Number or String)=any **transformAttrY**
>
> Top position assigned to the object by the object style.
> Measurement Unit (Number or String)=any **transformAttrWidth**
>
> Width assigned to the object by the object style.
> Measurement Unit (Number or String)=any **transformAttrHeight**
>
> Height assigned to the object by the object style.
> TransformPositionReference **transformAttrLeftReference**
>
> Reference point used when setting the object style's X attribute.
> TransformPositionReference **transformAttrTopReference**
>
> Reference point used when setting the object style's Y attribute.
> AnchorPoint **transformAttrRefAnchorPoint**
>
> Option that specifies which achor point the style uses to anchor the object while applying position.
> Object **properties**
>
> Use this property to set multiple properties together.

### Methods

> String **toSource**()
>
> Builds source text that recreates the TransformAttributeOption when run.
> TransformAttributeOption **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Attaches a listener for an event.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Detaches the listener for that event.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The registered event type. |
| Mixed | handler | The registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

## TransformPositionReference

Options that choose the reference position for style X and Y attributes. Setting the value to none disables the attribute.

### Class

> _Read Only_
>
> Number `PAGE_EDGE_REFERENCE` = 1348945255
>
> Uses the matching page edge: the left edge for the X attribute and the top edge for the Y attribute.
> _Read Only_
>
> Number `PAGE_MARGIN_REFERENCE` = 1883721063
>
> Uses the matching page margin: the left margin for the X attribute and the top margin for the Y attribute.

## TransformPreference — Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for this TransformPreference; it is a Application.
> _Read Only_
>
> Events **events**
>
> Event objects are exposed through this collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener objects are exposed through this collection.
> Boolean **dimensionsIncludeStrokeWeight**
>
> When true, displayed object dimensions include stroke weight. When false, measurement starts from the path or frame.
> Boolean **transformationsAreTotals**
>
> When true, transformation values are measured relative to the parent object. When false, those values are absolute.
> Boolean **showContentOffset**
>
> When true, the object's x and y values are measured relative to the containing frame. When false, they are measured relative to the rulers.
> Boolean **adjustEffectsWhenScaling**
>
> Transparency effects scale along with objects when this value is true.
> WhenScalingOptions **whenScaling**
>
> Method used to scale a page item.
> Boolean **adjustStrokeWeightWhenScaling**
>
> Strokes scale along with objects when this value is true.
> Object **properties**
>
> Use this property to set multiple properties together.

### Methods

> String **toSource**()
>
> Builds source text that recreates the TransformPreference when run.
> TransformPreference **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Attaches a listener for an event.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Detaches the listener for that event.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The registered event type. |
| Mixed | handler | The registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

## TransformationMatrices

Collection containing transformation matrices.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in this collection.

### Methods

> TransformationMatrix **add**( Number **horizontalScaleFactor**, Number **verticalScaleFactor**, Number **clockwiseShearAngle**, Number **counterclockwiseRotationAngle**, Number **horizontalTranslation**, Number **verticalTranslation**, Number **matrixValues**, Mixed **matrixMapping**, Object **withProperties** )
>
> Adds a TransformationMatrix object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | horizontalScaleFactor | The horizontal scale factor of the transformation matrix (Optional) |
| Number | verticalScaleFactor | The vertical scale factor of the transformation matrix (Optional) |
| Number | clockwiseShearAngle | The shear angle of the transformation matrix (Optional) |
| Number | counterclockwiseRotationAngle | The rotation angle of the transformation matrix (Optional) |
| Number | horizontalTranslation | The horizontal translation of the transformation matrix (Optional) |
| Number | verticalTranslation | The vertical translation of the transformation matrix (Optional) |
| Number | matrixValues | The values of the transformation matrix (Optional) |
| Mixed | matrixMapping | The mapping the transformation matrix performs on the unit triangle. Can accept: Array of Array of 2 Arrays of 2 Reals. (Optional) |
| Object | withProperties | Initial values for properties of the new TransformationMatrix (Optional) |

> Number **count**()
>
> Shows how many elements are in the TransformationMatrix.
> TransformationMatrix **item**( Mixed **index** )
>
> Gets the TransformationMatrix identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | The index or name. Can accept: Long Integer or String. |

> TransformationMatrix **itemByName**( String **name** )
>
> Gets the TransformationMatrix with that name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | The name. |

> TransformationMatrix **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the TransformationMatrices included in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | The TransformationMatrix, index, or name at the beginning of the range. Can accept: TransformationMatrix, Long Integer or String. |
| Mixed | to | The TransformationMatrix, index, or name at the end of the range. Can accept: TransformationMatrix, Long Integer or String. |

> TransformationMatrix **firstItem**()
>
> Gets the first TransformationMatrix in the collection.
> TransformationMatrix **lastItem**()
>
> Gets the last TransformationMatrix in the collection.
> TransformationMatrix **middleItem**()
>
> Gets the middle TransformationMatrix in the collection.
> TransformationMatrix **previousItem**( TransformationMatrix **obj** )
>
> Gets the TransformationMatrix whose index precedes the specified one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TransformationMatrix | obj | The index of the TransformationMatrix that follows the desired TransformationMatrix. |

> TransformationMatrix **nextItem**( TransformationMatrix **obj** )
>
> Gets the TransformationMatrix whose index comes after the supplied TransformationMatrix in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TransformationMatrix | obj | The TransformationMatrix whose index comes before the desired TransformationMatrix. |

> TransformationMatrix **anyItem**()
>
> Gets any TransformationMatrix in the collection.
> TransformationMatrix **everyItem**()
>
> Gets every TransformationMatrix in the collection.
> String **toSource**()
>
> Builds source text that recreates the TransformationMatrix when run.
> TransformationMatrix **[]**( Number **index** )
>
> Gets the TransformationMatrix at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | The index. |

## TransformationMatrix

Single transformation matrix object.

### Instance

> _Read Only_
>
> String **name**
>
> Name assigned to the TransformationMatrix.
> _Read Only_
>
> Number **matrixValues**
>
> Values contained in the transformation matrix.
> _Read Only_
>
> Number **horizontalScaleFactor**
>
> Horizontal scale factor for the transformation matrix.
> _Read Only_
>
> Number **verticalScaleFactor**
>
> Vertical scale factor for the transformation matrix.
> _Read Only_
>
> Number **clockwiseShearAngle**
>
> Shear angle for the transformation matrix.
> _Read Only_
>
> Number **counterclockwiseRotationAngle**
>
> Rotation angle for the transformation matrix.
> _Read Only_
>
> Number **horizontalTranslation**
>
> Horizontal translation value for the transformation matrix.
> _Read Only_
>
> Number **verticalTranslation**
>
> Vertical translation value for the transformation matrix.
> _Read Only_
>
> Mixed **matrixMapping**
>
> Mapping applied by the transformation matrix to the unit triangle. Return values can be: Array of Array of 2 Arrays of 2 Reals.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for this TransformationMatrix; it is a Application.
> _Read Only_
>
> Number **index**
>
> Position of this TransformationMatrix inside its containing object.
> _Read Only_
>
> Events **events**
>
> Event objects are exposed through this collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener objects are exposed through this collection.
> Object **properties**
>
> Use this property to set multiple properties together.

### Methods

> TransformationMatrix **scaleMatrix**( Number **horizontallyBy**, Number **verticallyBy** )
>
> Performs scaling on this matrix.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | horizontallyBy | The horizontal scale factor (Optional) |
| Number | verticallyBy | The vertical scale factor (Optional) |

> TransformationMatrix **shearMatrix**( Number **byAngle**, Number **bySlope** )
>
> Applies shear to this matrix.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | byAngle | The horizontal shear angle (Optional) |
| Number | bySlope | The horizontal shear slope (Optional) |

> TransformationMatrix **rotateMatrix**( Number **byAngle**, Number **byCosine**, Number **bySine** )
>
> Applies rotation to this matrix.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | byAngle | The counterclockwise rotation angle (Optional) |
| Number | byCosine | The cosine of the desired rotation (Optional) |
| Number | bySine | The sine of the desired rotation (Optional) |

> TransformationMatrix **translateMatrix**( Number **horizontallyBy**, Number **verticallyBy** )
>
> Applies translation to this matrix.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | horizontallyBy | The horizontal translation distance (Optional) |
| Number | verticallyBy | The vertical translation distance (Optional) |

> TransformationMatrix **catenateMatrix**( TransformationMatrix **withMatrix** )
>
> Combines this matrix with another one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TransformationMatrix | withMatrix | The right hand matrix factor |

> TransformationMatrix **invertMatrix**()
>
> Computes the inverse matrix.
> Number **changeCoordinates**( Number **point** )
>
> Transforms the point with the matrix.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | point | The point to transform |

> String **toSource**()
>
> Builds source text that recreates the TransformationMatrix when run.
> TransformationMatrix **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Attaches a listener for an event.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Detaches the listener for that event.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The registered event type. |
| Mixed | handler | The registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

## TransparencyPreference — Instance

> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier can be resolved to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> The owning parent for this TransparencyPreference, either a Application or Document.
> _Read Only_
>
> Events **events**
>
> The events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> The event-listener collection.
> BlendingSpace **blendingSpace**
>
> Color blending for transparent objects uses this color space.
> Number **globalLightAngle**
>
> Global light angle value. (Range: -360 to 360)
> Number **globalLightAltitude**
>
> Global light altitude value. (Range: 0 to 90)
> Object **properties**
>
> Lets multiple property values be assigned together.

### Methods

> String **toSource**()
>
> Builds a string that, when run, recreates the TransparencyPreference.
> TransparencyPreference **getElements**()
>
> Resolves the object specifier and returns object references in an array.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## TransparencySetting — Instance

> _Read Only_
>
> BlendingSetting **blendingSettings**
>
> Controls for blending mode behavior.
> _Read Only_
>
> DropShadowSetting **dropShadowSettings**
>
> Controls that define the drop shadow effect.
> _Read Only_
>
> FeatherSetting **featherSettings**
>
> Controls that define the feather effect.
> _Read Only_
>
> InnerShadowSetting **innerShadowSettings**
>
> Controls that define the inner shadow effect.
> _Read Only_
>
> OuterGlowSetting **outerGlowSettings**
>
> Controls that define the outer glow effect.
> _Read Only_
>
> InnerGlowSetting **innerGlowSettings**
>
> Controls that define the inner glow effect.
> _Read Only_
>
> BevelAndEmbossSetting **bevelAndEmbossSettings**
>
> Controls that define the bevel and emboss effect.
> _Read Only_
>
> SatinSetting **satinSettings**
>
> Controls that define the satin effect.
> _Read Only_
>
> DirectionalFeatherSetting **directionalFeatherSettings**
>
> Controls that define the directional feather effect.
> _Read Only_
>
> GradientFeatherSetting **gradientFeatherSettings**
>
> Controls that define the gradient feather effect.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier can be resolved to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> The owning parent for this TransparencySetting, one of: PageItem, HtmlItem, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame, EndnoteTextFrame, PageItemDefault or ObjectStyle.
> _Read Only_
>
> Preferences **preferences**
>
> The collection of preferences objects.
> _Read Only_
>
> Events **events**
>
> The events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> The event-listener collection.
> Object **properties**
>
> Lets multiple property values be assigned together.

### Methods

> String **toSource**()
>
> Builds a string that, when run, recreates the TransparencySetting.
> TransparencySetting **getElements**()
>
> Resolves the object specifier and returns object references in an array.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## TrapEndTypes

TrapEndTypes defines shapes for where three-way traps meet.

### Class

> _Read Only_
>
> Number `MITER_TRAP_ENDS` = 1953525093
>
> Shapes the trap end so it remains clear of the intersecting object.
> _Read Only_
>
> Number `OVERLAP_TRAP_ENDS` = 1953525612
>
> Changes the trap made from the lightest neutral-density object so it wraps around the point shared by the three intersecting objects.

## TrapImagePlacementTypes

TrapImagePlacementTypes supplies placement choices for traps between vector objects and bitmap images.

### Class

> _Read Only_
>
> Number `CENTER_EDGES` = 1953522542
>
> Creates a trap centered across the boundary between vector objects and bitmap images.
> _Read Only_
>
> Number **CHOKE** = 1953522536
>
> Makes vector objects overlap adjoining images.
> _Read Only_
>
> Number `IMAGE_NEUTRAL_DENSITY` = 1953525348
>
> Uses the trapping rules already applied elsewhere in the document. Note: when trapping an object to a photograph, this can produce visibly uneven edges as the trap shifts from one side of the edge to the other.
> _Read Only_
>
> Number `IMAGES_OVER_SPREAD` = 1953526640
>
> Makes bitmap images overlap neighboring objects.
