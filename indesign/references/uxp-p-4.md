# Panels, Panning Types, Paper Size, Paper Sizes ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Panels; PanningTypes; PaperSize; PaperSizes; ParaStyleMapping; ParaStyleMappings; ParagraphBorderBottomOriginEnum; ParagraphBorderEnum; ParagraphBorderTopOriginEnum; ParagraphDestination; ParagraphDestinations; ParagraphDirectionOptions — Class; ParagraphJustificationOptions — Class; ParagraphShadingBottomOriginEnum; ParagraphShadingTopOriginEnum; ParagraphShadingWidthEnum; ParagraphStyleGroup; ParagraphStyleGroups.

## Panels

Collection object for panels.

### Instance

> _Read Only_
>
> Number **length**
>
> Stores the collection's object count.

### Methods

> Number **count**()
>
> Shows how many Panel elements are present.
> Panel **item**( Mixed **index** )
>
> Gets the Panel identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name selector. Can accept: Long Integer or String. |

> Panel **itemByName**( String **name** )
>
> Gets the Panel with the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name selector. |

> Panel **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Panels that fall inside the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting Panel, index, or name for the range. Can accept: Panel, Long Integer or String. |
| Mixed | to | Ending Panel, index, or name for the range. Can accept: Panel, Long Integer or String. |

> Panel **firstItem**()
>
> Gets the first Panel from this collection.
> Panel **lastItem**()
>
> Gets the final Panel from this collection.
> Panel **middleItem**()
>
> Gets the middle Panel from this collection.
> Panel **previousItem**( Panel **obj** )
>
> Gets the Panel positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Panel | obj | Index of the Panel that comes after the wanted Panel. |

> Panel **nextItem**( Panel **obj** )
>
> Gets the Panel positioned immediately after the specified Panel in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Panel | obj | Panel whose index is directly before the wanted Panel. |

> Panel **anyItem**()
>
> Gets an arbitrary Panel from this collection.
> Panel **everyItem**()
>
> Gets all Panel objects in this collection.
> String **toSource**()
>
> Builds executable text that recreates the Panel when run.
> Panel **[]**( Number **index** )
>
> Gets the Panel at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index selector. |

## PanningTypes

Display-performance choice used during scrolling.

### Class

> _Read Only_
>
> Number `NO_GREEKING` = 1699116368
>
> During scrolling, images and text are not greeked; this gives the quickest performance and lowest display quality.
> _Read Only_
>
> Number `GREEK_IMAGES` = 1699111248
>
> During scrolling, newly exposed images are greeked until mouse release; quality and speed are both medium.
> _Read Only_
>
> Number `GREEK_IMAGES_AND_TEXT` = 1699639120
>
> During scrolling, newly exposed images and text stay greeked until mouse release; display quality is highest and performance is slowest.

## PaperSize

Choices for paper size.

### Class

> _Read Only_
>
> Number **AUTO** = 1635019116
>
> Automatic

## PaperSizes

Paper size choices.

### Class

> _Read Only_
>
> Number `DEFINED_BY_DRIVER` = 1347634290
>
> Lets the printer driver determine paper size.
> _Read Only_
>
> Number **CUSTOM** = 1131639917
>
> Enables a custom paper size. Note: custom paper sizes are not supported by every printer.

## ParaStyleMapping

Paragraph style mapping object.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True indicates that the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> References the owning Application, Document, Story, or XmlStory for this ParaStyleMapping.
> _Read Only_
>
> Number **index**
>
> Gives this ParaStyleMapping's position inside the container that owns it.
> _Read Only_
>
> Events **events**
>
> Provides the associated events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Provides the associated event listener collection.
> String **sourceStyleName**
>
> Stores the source style name.
> String **destinationStyleName**
>
> Stores the destination style name.
> MapType **mappingRuleType**
>
> Indicates which mapping rule type is used.
> Object **properties**
>
> Supports applying multiple property values together.

### Methods

> **remove**()
>
> Removes a style mapping.
> String **toSource**()
>
> Builds executable text that recreates the ParaStyleMapping when run.
> ParaStyleMapping **getElements**()
>
> Resolves the specifier and returns object references as an array.
> String **toSpecifier**()
>
> Gets the object specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
| Mixed | handler | Handler to invoke. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Previously registered event type. |
| Mixed | handler | Previously registered handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## ParaStyleMappings

Collection object for paragraph style mappings.

### Instance

> _Read Only_
>
> Number **length**
>
> Stores the collection's object count.

### Methods

> ParaStyleMapping **add**( String **sourceStyleName**, String **destinationStyleName**, MapType **mappingRuleType**, Object **withProperties** )
>
> Creates a style mapping.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | sourceStyleName | Source style name. |
| String | destinationStyleName | Destination style name. |
| MapType | mappingRuleType | Mapping type. |
| Object | withProperties | Starting property values for the new ParaStyleMapping. (Optional) |

> Number **count**()
>
> Shows how many ParaStyleMapping elements are present.
> ParaStyleMapping **item**( Mixed **index** )
>
> Gets the ParaStyleMapping identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name selector. Can accept: Long Integer or String. |

> ParaStyleMapping **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the ParaStyleMappings that fall inside the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting ParaStyleMapping, index, or name for the range. Can accept: ParaStyleMapping, Long Integer or String. |
| Mixed | to | Ending ParaStyleMapping, index, or name for the range. Can accept: ParaStyleMapping, Long Integer or String. |

> ParaStyleMapping **firstItem**()
>
> Gets the first ParaStyleMapping from this collection.
> ParaStyleMapping **lastItem**()
>
> Gets the final ParaStyleMapping from this collection.
> ParaStyleMapping **middleItem**()
>
> Gets the middle ParaStyleMapping from this collection.
> ParaStyleMapping **previousItem**( ParaStyleMapping **obj** )
>
> Gets the ParaStyleMapping positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ParaStyleMapping | obj | Index of the ParaStyleMapping that comes after the wanted ParaStyleMapping. |

> ParaStyleMapping **nextItem**( ParaStyleMapping **obj** )
>
> Gets the ParaStyleMapping positioned immediately after the specified ParaStyleMapping in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ParaStyleMapping | obj | ParaStyleMapping whose index is directly before the wanted ParaStyleMapping. |

> ParaStyleMapping **anyItem**()
>
> Gets an arbitrary ParaStyleMapping from this collection.
> ParaStyleMapping **everyItem**()
>
> Gets all ParaStyleMapping objects in this collection.
> String **toSource**()
>
> Builds executable text that recreates the ParaStyleMapping when run.
> ParaStyleMapping **[]**( Number **index** )
>
> Gets the ParaStyleMapping at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index selector. |

## ParagraphBorderBottomOriginEnum

Options that define the reference basis for a paragraph border's bottom origin.

### Class

> _Read Only_
>
> Number `DESCENT_BOTTOM_ORIGIN` = 1886601828
>
> Sets the paragraph border bottom origin from the text descent in the paragraph.
> _Read Only_
>
> Number `BASELINE_BOTTOM_ORIGIN` = 1886601826
>
> Sets the paragraph border bottom origin from the text baseline in the paragraph.

## ParagraphBorderEnum

Options that define the reference basis for paragraph border width.

### Class

> _Read Only_
>
> Number `TEXT_WIDTH` = 1886681207
>
> Bases the paragraph border on the widths of text lines in the paragraph.
> _Read Only_
>
> Number `COLUMN_WIDTH` = 1265399652
>
> Bases the paragraph border on column width.

## ParagraphBorderTopOriginEnum

Options that define the reference basis for a paragraph border's top origin.

### Class

> _Read Only_
>
> Number `ASCENT_TOP_ORIGIN` = 1886606433
>
> Sets the paragraph border top origin from the text ascent in the paragraph.
> _Read Only_
>
> Number `BASELINE_TOP_ORIGIN` = 1886606434
>
> Sets the paragraph border top origin from the text baseline in the paragraph.
> _Read Only_
>
> Number `LEADING_TOP_ORIGIN` = 1885492332
>
> Sets the paragraph border top origin from the paragraph text leading.

## ParagraphDestination

Destination paragraph used by a cross reference.

### Instance

> _Read Only_
>
> Boolean **hidden**
>
> true means the hyperlink is not shown.
> _Read Only_
>
> Number **id**
>
> Unique identifier assigned to the ParagraphDestination.
> _Read Only_
>
> Boolean **isValid**
>
> true when the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Containing Document for the ParagraphDestination.
> _Read Only_
>
> Number **index**
>
> Position of the ParagraphDestination inside its containing object.
> _Read Only_
>
> Events **events**
>
> Events collection associated with this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection associated with this object.
> String **name**
>
> ParagraphDestination name.
> InsertionPoint **destinationText**
>
> Target text or insertion point used by the hyperlink. Can also accept: Text.
> String **label**
>
> Holds any string value assigned as the label.
> Object **properties**
>
> Lets several properties be assigned in a single operation.

### Methods

> **remove**()
>
> Removes the ParagraphDestination.
> **showDestination**()
>
> Moves to the hyperlink destination.
> **insertLabel**( String **key**, String **value** )
>
> Associates the specified key with the supplied label value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to write. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Retrieves the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to read. |

> String **toSource**()
>
> Produces a string that returns the ParagraphDestination when executed.
> ParagraphDestination **getElements**()
>
> Resolves the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
| Mixed | handler | Handler invoked for the event. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Previously registered event type. |
| Mixed | handler | Previously registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## ParagraphDestinations

Collection containing paragraph destinations.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> ParagraphDestination **add**( Text **destination**, Object **withProperties** )
>
> Creates a paragraph destination.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Text | destination | Cross reference target inside the paragraph, supplied as text or an insertion point. InDesign always moves the insertion point to the paragraph start. |
| Object | withProperties | Starting property values for the new ParagraphDestination. (Optional) |

> Number **count**()
>
> Shows how many ParagraphDestination elements the collection contains.
> ParagraphDestination **item**( Mixed **index** )
>
> Gets the ParagraphDestination identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Lookup value, supplied as an index or a name. Can accept: Long Integer or String. |

> ParagraphDestination **itemByName**( String **name** )
>
> Gets the ParagraphDestination with the given name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> ParagraphDestination **itemByID**( Number **id** )
>
> Gets the ParagraphDestination with the given ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> ParagraphDestination **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the ParagraphDestinations in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as a ParagraphDestination, index, or name. Can accept: ParagraphDestination, Long Integer or String. |
| Mixed | to | Range endpoint, supplied as a ParagraphDestination, index, or name. Can accept: ParagraphDestination, Long Integer or String. |

> ParagraphDestination **firstItem**()
>
> Gets the first ParagraphDestination in the collection.
> ParagraphDestination **lastItem**()
>
> Gets the last ParagraphDestination in the collection.
> ParagraphDestination **middleItem**()
>
> Gets the middle ParagraphDestination in the collection.
> ParagraphDestination **previousItem**( ParagraphDestination **obj** )
>
> Gets the ParagraphDestination immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ParagraphDestination | obj | Index of the ParagraphDestination that comes after the desired ParagraphDestination. |

> ParagraphDestination **nextItem**( ParagraphDestination **obj** )
>
> Gets the ParagraphDestination immediately after the specified ParagraphDestination in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ParagraphDestination | obj | ParagraphDestination that comes before the desired ParagraphDestination. |

> ParagraphDestination **anyItem**()
>
> Gets any ParagraphDestination in the collection.
> ParagraphDestination **everyItem**()
>
> Gets every ParagraphDestination in the collection.
> String **toSource**()
>
> Produces a string that returns the ParagraphDestination when executed.
> ParagraphDestination **[]**( Number **index** )
>
> Gets the ParagraphDestination at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to access. |

## ParagraphDirectionOptions — Class

> _Read Only_
>
> Number `LEFT_TO_RIGHT_DIRECTION` = 1278366308
>
> Paragraph direction from left to right.
> _Read Only_
>
> Number `RIGHT_TO_LEFT_DIRECTION` = 1379028068
>
> Paragraph direction from right to left.

## ParagraphJustificationOptions — Class

> _Read Only_
>
> Number `DEFAULT_JUSTIFICATION` = 1886020709
>
> Default paragraph justification.
> _Read Only_
>
> Number `ARABIC_JUSTIFICATION` = 1886019954
>
> Arabic paragraph justification.
> _Read Only_
>
> Number `NASKH_JUSTIFICATION` = 1886023265
>
> Naskh paragraph justification.
> _Read Only_
>
> Number `NASKH_TATWEEL_JUSTIFICATION` = 1886023284
>
> Kashidas, with Stretched Connections excluded.
> _Read Only_
>
> Number `NASKH_KASHIDA_JUSTIFICATION` = 1886023275
>
> Kashidas. For Justifcation Alternates, use naskh justification as well.
> _Read Only_
>
> Number `NASKH_TATWEEL_JUSTIFICATION_FRAC` = 1886021236
>
> Fractional Kashidas, with Stretched Connections excluded.
> _Read Only_
>
> Number `NASKH_KASHIDA_JUSTIFICATION_FRAC` = 1886021227
>
> Fractional Kashidas. For Justifcation Alternates, use naskh justification as well.

## ParagraphShadingBottomOriginEnum

Options selecting the measurement basis for the paragraph shading bottom origin.

### Class

> _Read Only_
>
> Number `DESCENT_BOTTOM_ORIGIN` = 1886601828
>
> Uses text descent in the paragraph as the basis for the paragraph shading bottom origin.
> _Read Only_
>
> Number `BASELINE_BOTTOM_ORIGIN` = 1886601826
>
> Uses the paragraph text baseline as the basis for the paragraph shading bottom origin.

## ParagraphShadingTopOriginEnum

Options selecting the measurement basis for the paragraph shading top origin.

### Class

> _Read Only_
>
> Number `ASCENT_TOP_ORIGIN` = 1886606433
>
> Uses text ascent in the paragraph as the basis for the paragraph shading top origin.
> _Read Only_
>
> Number `BASELINE_TOP_ORIGIN` = 1886606434
>
> Uses the paragraph text baseline as the basis for the paragraph shading top origin.
> _Read Only_
>
> Number `LEADING_TOP_ORIGIN` = 1885492332
>
> Uses paragraph leading as the basis for the paragraph shading top origin.

## ParagraphShadingWidthEnum

Options selecting the measurement basis for paragraph shading width.

### Class

> _Read Only_
>
> Number `TEXT_WIDTH` = 1886681207
>
> Bases paragraph shading on the width of text lines in the paragraph.
> _Read Only_
>
> Number `COLUMN_WIDTH` = 1265399652
>
> Bases paragraph shading on the column width.

## ParagraphStyleGroup

A group for paragraph styles.

### Instance

> _Read Only_
>
> ParagraphStyle **allParagraphStyles**
>
> Lists every paragraph style, including styles in nested groups.
> _Read Only_
>
> Number **id**
>
> Unique identifier assigned to the ParagraphStyleGroup.
> _Read Only_
>
> Boolean **isValid**
>
> true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Container for the ParagraphStyleGroup: a Document, Application or ParagraphStyleGroup.
> _Read Only_
>
> Number **index**
>
> Position of the ParagraphStyleGroup inside its containing object.
> _Read Only_
>
> ParagraphStyles **paragraphStyles**
>
> Paragraph styles collection held by this group.
> _Read Only_
>
> ParagraphStyleGroups **paragraphStyleGroups**
>
> Paragraph style groups collection held by this group.
> _Read Only_
>
> Events **events**
>
> Events collection associated with this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection associated with this object.
> String **name**
>
> ParagraphStyleGroup name.
> String **label**
>
> Holds any string value assigned as the label.
> Object **properties**
>
> Lets several properties be assigned in a single operation.

### Methods

> ParagraphStyleGroup **duplicate**()
>
> Creates another copy of this group.
> ParagraphStyleGroup **move**( LocationOptions **to**, Mixed **reference** )
>
> Moves the style to the requested location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Destination position, either within the containing object or relative to the reference object. |
| Mixed | reference | Object used as the move reference. Can accept: ParagraphStyle, ParagraphStyleGroup, CharacterStyle, CharacterStyleGroup, CellStyle, CellStyleGroup, TableStyle, TableStyleGroup, Document or Application. (Optional) Note: Supply it when to is before or after. |

> **remove**( Mixed **replacingWith** )
>
> Removes the style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | replacingWith | Style to apply where the deleted style had been used. Can accept: ParagraphStyle or CharacterStyle. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Associates the specified key with the supplied label value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to write. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Retrieves the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to read. |

> String **toSource**()
>
> Produces a string that returns the ParagraphStyleGroup when executed.
> ParagraphStyleGroup **getElements**()
>
> Resolves the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
| Mixed | handler | Handler invoked for the event. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Previously registered event type. |
| Mixed | handler | Previously registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## ParagraphStyleGroups

Collection containing paragraph style groups.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> ParagraphStyleGroup **add**( Object **withProperties** )
>
> Creates a ParagraphStyleGroup.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new ParagraphStyleGroup. (Optional) |

> Number **count**()
>
> Shows how many ParagraphStyleGroup elements the collection contains.
> ParagraphStyleGroup **item**( Mixed **index** )
>
> Gets the ParagraphStyleGroup identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Lookup value, supplied as an index or a name. Can accept: Long Integer or String. |

> ParagraphStyleGroup **itemByName**( String **name** )
>
> Gets the ParagraphStyleGroup with the given name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> ParagraphStyleGroup **itemByID**( Number **id** )
>
> Gets the ParagraphStyleGroup with the given ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> ParagraphStyleGroup **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the ParagraphStyleGroups in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as a ParagraphStyleGroup, index, or name. Can accept: ParagraphStyleGroup, Long Integer or String. |
| Mixed | to | Range endpoint, supplied as a ParagraphStyleGroup, index, or name. Can accept: ParagraphStyleGroup, Long Integer or String. |

> ParagraphStyleGroup **firstItem**()
>
> Gets the first ParagraphStyleGroup in the collection.
> ParagraphStyleGroup **lastItem**()
>
> Gets the last ParagraphStyleGroup in the collection.
> ParagraphStyleGroup **middleItem**()
>
> Gets the middle ParagraphStyleGroup in the collection.
> ParagraphStyleGroup **previousItem**( ParagraphStyleGroup **obj** )
>
> Gets the ParagraphStyleGroup immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ParagraphStyleGroup | obj | Index of the ParagraphStyleGroup that comes after the desired ParagraphStyleGroup. |

> ParagraphStyleGroup **nextItem**( ParagraphStyleGroup **obj** )
>
> Gets the ParagraphStyleGroup immediately after the specified ParagraphStyleGroup in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ParagraphStyleGroup | obj | ParagraphStyleGroup that comes before the desired ParagraphStyleGroup. |

> ParagraphStyleGroup **anyItem**()
>
> Gets any ParagraphStyleGroup in the collection.
> ParagraphStyleGroup **everyItem**()
>
> Gets every ParagraphStyleGroup in the collection.
> String **toSource**()
>
> Produces a string that returns the ParagraphStyleGroup when executed.
> ParagraphStyleGroup **[]**( Number **index** )
>
> Gets the ParagraphStyleGroup at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to access. |
