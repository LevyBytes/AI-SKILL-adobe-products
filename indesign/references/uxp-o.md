# Object Export Option, Object Style Content Effects Category Settings, Object Style Export Tag Map, Object Style Export Tag Maps ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: ObjectExportOption; ObjectStyleContentEffectsCategorySettings; ObjectStyleExportTagMap; ObjectStyleExportTagMaps; ObjectStyleFillEffectsCategorySettings; ObjectStyleGroup; ObjectStyleGroups; ObjectStyleObjectEffectsCategorySettings.

## ObjectExportOption

ObjectExportOption holds export settings for an object.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent for ObjectExportOption: ObjectStyle, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Group, TextFrame, or EndnoteTextFrame.
> _Read Only_
>
> Events **events**
>
> Event collection associated with this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection for this object.
> String **epubType**
>
> epub type recommended by IDPF.
> SizeTypeEnum **sizeType**
>
> Size settings applied to the object.
> String **customSize**
>
> Custom size assigned to the object.
> PreserveAppearanceFromLayoutEnum **preserveAppearanceFromLayout**
>
> Preserve Appearance from Layout
> SourceType **altTextSourceType**
>
> Source type for alternate text.
> SourceType **actualTextSourceType**
>
> Source type for actual text.
> String **customAltText**
>
> User-entered custom alternate text.
> String **customActualText**
>
> User-entered custom actual text.
> Mixed **altMetadataProperty**
>
> Metadata property used as the alternate text source. Can return: Ordered array containing namespacePrefix:String, propertyPath:String.
> Mixed **actualMetadataProperty**
>
> Metadata property used as the actual text source. Can return: Ordered array containing namespacePrefix:String, propertyPath:String.
> TagType **applyTagType**
>
> Tag type for the page item.
> ImageFormat **imageConversionType**
>
> Lets the user choose the image format used for conversion.
> ImageResolution **imageExportResolution**
>
> Export resolution value.
> GIFOptionsPalette **gifOptionsPalette**
>
> Color palette selected for GIF conversion. Note: invalid when the conversion target is JPEG.
> Boolean **gifOptionsInterlaced**
>
> When true, generates GIF files with interlacing. Note: invalid when the conversion target is JPEG.
> JPEGOptionsQuality **jpegOptionsQuality**
>
> Quality setting for JPEG outputs after conversion. Note: invalid when the conversion target is GIF.
> JPEGOptionsFormat **jpegOptionsFormat**
>
> Formatting approach for JPEG outputs after conversion. Note: invalid when the conversion target is GIF.
> ImageAlignmentType **imageAlignment**
>
> Alignment used for images.
> Number **imageSpaceBefore**
>
> Space Before value used for images.
> Number **imageSpaceAfter**
>
> Space After value used for images.
> Boolean **useImagePageBreak**
>
> When true, objects use image page break settings.
> ImagePageBreakType **imagePageBreak**
>
> Image page break settings used with objects.
> Boolean **customLayout**
>
> When true, custom layout is enabled for the object.
> CustomLayoutTypeEnum **customLayoutType**
>
> Custom Layout settings applied to the object.
> Object **properties**
>
> Lets multiple properties be assigned in one operation.

### Methods

> String **altText**()
>
> Supplies alternate text for the object.
> String **actualText**()
>
> Supplies actual text for the object.
> String **toSource**()
>
> Builds executable source text that returns the ObjectExportOption.
> ObjectExportOption **getElements**()
>
> Resolves the specifier and returns object references as an array.
> String **toSpecifier**()
>
> Reads the object specifier.
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

## ObjectStyleContentEffectsCategorySettings

Settings category for object style content effects.

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
> Owning ObjectStyle for the ObjectStyleContentEffectsCategorySettings.
> _Read Only_
>
> Events **events**
>
> Event collection associated with this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection for this object.
> Boolean **enableTransparency**
>
> When true, the object style applies transparency settings.
> Boolean **enableDropShadow**
>
> When true, the object style applies drop shadows.
> Boolean **enableFeather**
>
> When true, the object style applies feathering.
> Boolean **enableInnerShadow**
>
> When true, the object style applies inner shadows.
> Boolean **enableOuterGlow**
>
> When true, the object style applies outer glow.
> Boolean **enableInnerGlow**
>
> When true, the object style applies inner glow.
> Boolean **enableBevelEmboss**
>
> When true, the object style applies bevel emboss.
> Boolean **enableSatin**
>
> When true, the object style applies satin.
> Boolean **enableDirectionalFeather**
>
> When true, the object style applies directional feathering.
> Boolean **enableGradientFeather**
>
> When true, the object style applies gradient feathering.
> Object **properties**
>
> Lets multiple properties be assigned in one operation.

### Methods

> String **toSource**()
>
> Builds executable source text that returns the ObjectStyleContentEffectsCategorySettings.
> ObjectStyleContentEffectsCategorySettings **getElements**()
>
> Resolves the specifier and returns object references as an array.
> String **toSpecifier**()
>
> Reads the object specifier.
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

## ObjectStyleExportTagMap

ObjectStyleExportTagMap maps an object export type to an export tag.

### Instance

> _Read Only_
>
> String **exportType**
>
> Export type value.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> ObjectStyle **parent**
>
> Owning ObjectStyle for the ObjectStyleExportTagMap.
> _Read Only_
>
> Number **index**
>
> Position of the ObjectStyleExportTagMap inside its container.
> _Read Only_
>
> Events **events**
>
> Event collection associated with this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection for this object.
> String **exportTag**
>
> Tag value used for mapping.
> String **exportClass**
>
> Class value used for mapping.
> String **exportAttributes**
>
> Attribute value used for mapping.
> Object **properties**
>
> Lets multiple properties be assigned in one operation.

### Methods

> **remove**()
>
> Deletes the ObjectStyleExportTagMap.
> String **toSource**()
>
> Builds executable source text that returns the ObjectStyleExportTagMap.
> ObjectStyleExportTagMap **getElements**()
>
> Resolves the specifier and returns object references as an array.
> String **toSpecifier**()
>
> Reads the object specifier.
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

## ObjectStyleExportTagMaps

ObjectStyleExportTagMaps is a collection of object style export tag maps.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection size.

### Methods

> ObjectStyleExportTagMap **add**( String **exportType**, String **exportTag**, String **exportClass**, String **exportAttributes**, Object **withProperties** )
>
> Creates a mapping.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | exportType | Export type value. |
| String | exportTag | Tag value used for mapping. |
| String | exportClass | Class value used for mapping. |
| String | exportAttributes | Attribute value used for mapping. |
| Object | withProperties | Starting property values for the new ObjectStyleExportTagMap. (Optional) |

> Number **count**()
>
> Reports how many elements are in the ObjectStyleExportTagMap.
> ObjectStyleExportTagMap **item**( Mixed **index** )
>
> Gets the ObjectStyleExportTagMap identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector. Can accept: Long Integer or String. |

> ObjectStyleExportTagMap **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the ObjectStyleExportTagMaps in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | ObjectStyleExportTagMap, index, or name that starts the range. Can accept: ObjectStyleExportTagMap, Long Integer or String. |
| Mixed | to | ObjectStyleExportTagMap, index, or name that ends the range. Can accept: ObjectStyleExportTagMap, Long Integer or String. |

> ObjectStyleExportTagMap **firstItem**()
>
> Gets the first ObjectStyleExportTagMap in the collection.
> ObjectStyleExportTagMap **lastItem**()
>
> Gets the last ObjectStyleExportTagMap in the collection.
> ObjectStyleExportTagMap **middleItem**()
>
> Gets the middle ObjectStyleExportTagMap in the collection.
> ObjectStyleExportTagMap **previousItem**( ObjectStyleExportTagMap **obj** )
>
> Gets the ObjectStyleExportTagMap at the index immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyleExportTagMap | obj | Index of the ObjectStyleExportTagMap that follows the requested ObjectStyleExportTagMap. |

> ObjectStyleExportTagMap **nextItem**( ObjectStyleExportTagMap **obj** )
>
> Gets the ObjectStyleExportTagMap whose index comes after the specified ObjectStyleExportTagMap in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyleExportTagMap | obj | ObjectStyleExportTagMap whose index precedes the requested ObjectStyleExportTagMap. |

> ObjectStyleExportTagMap **anyItem**()
>
> Gets any ObjectStyleExportTagMap from the collection.
> ObjectStyleExportTagMap **everyItem**()
>
> Gets every ObjectStyleExportTagMap in the collection.
> String **toSource**()
>
> Builds executable source text that returns the ObjectStyleExportTagMap.
> ObjectStyleExportTagMap **[]**( Number **index** )
>
> Gets the ObjectStyleExportTagMap at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## ObjectStyleFillEffectsCategorySettings

Settings for object style fill effects categories.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier maps to valid objects.
> _Read Only_
>
> ObjectStyle **parent**
>
> Parent object for ObjectStyleFillEffectsCategorySettings (a ObjectStyle).
> _Read Only_
>
> Events **events**
>
> Events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection.
> Boolean **enableTransparency**
>
> When true, transparency settings are applied by the object style.
> Boolean **enableDropShadow**
>
> When true, drop shadows are applied by the object style.
> Boolean **enableFeather**
>
> When true, feathering is applied by the object style.
> Boolean **enableInnerShadow**
>
> When true, inner shadows are applied by the object style.
> Boolean **enableOuterGlow**
>
> When true, outer glow is applied by the object style.
> Boolean **enableInnerGlow**
>
> When true, inner glow is applied by the object style.
> Boolean **enableBevelEmboss**
>
> When true, bevel emboss is applied by the object style.
> Boolean **enableSatin**
>
> When true, satin is applied by the object style.
> Boolean **enableDirectionalFeather**
>
> When true, directional feathering is applied by the object style.
> Boolean **enableGradientFeather**
>
> When true, gradient feathering is applied by the object style.
> Object **properties**
>
> Lets multiple properties be assigned together.

### Methods

> String **toSource**()
>
> Creates a string that returns the ObjectStyleFillEffectsCategorySettings when run.
> ObjectStyleFillEffectsCategorySettings **getElements**()
>
> Resolves the object specifier and builds an array of object references.
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
| Mixed | handler | Event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## ObjectStyleGroup

An object style group object.

### Instance

> _Read Only_
>
> ObjectStyle **allObjectStyles**
>
> ObjectStyleGroup contents as all object styles.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the ObjectStyleGroup.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier maps to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the ObjectStyleGroup (a Document, Application or ObjectStyleGroup).
> _Read Only_
>
> Number **index**
>
> Position of the ObjectStyleGroup inside its containing object.
> _Read Only_
>
> Events **events**
>
> Events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection.
> _Read Only_
>
> ObjectStyles **objectStyles**
>
> Object styles collection.
> _Read Only_
>
> ObjectStyleGroups **objectStyleGroups**
>
> Object style groups collection.
> String **name**
>
> ObjectStyleGroup name.
> String **label**
>
> Accepts any string value.
> Object **properties**
>
> Lets multiple properties be assigned together.

### Methods

> ObjectStyleGroup **duplicate**()
>
> Makes a duplicate ObjectStyleGroup.
> ObjectStyleGroup **move**( LocationOptions **to**, Mixed **reference** )
>
> Moves the ObjectStyleGroup to the requested location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | New placement relative to the reference object or inside the container object. |
| Mixed | reference | Reference object. Note: required when the to parameter is before or after. Accepts: ObjectStyle, ObjectStyleGroup, Document or Application. (Optional) |

> **remove**( ObjectStyle **replacingWith** )
>
> Removes the ObjectStyleGroup.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | replacingWith | ObjectStyleGroup used instead of the deleted ObjectStyleGroup. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Assigns the label to the value tied to the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key. |
| String | value | Value. |

> String **extractLabel**( String **key** )
>
> Reads the label value tied to the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key. |

> String **toSource**()
>
> Creates a string that returns the ObjectStyleGroup when run.
> ObjectStyleGroup **getElements**()
>
> Resolves the object specifier and builds an array of object references.
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
| Mixed | handler | Event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## ObjectStyleGroups

Object style group collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held in the collection.

### Methods

> ObjectStyleGroup **add**( Object **withProperties** )
>
> Creates an ObjectStyleGroup.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new ObjectStyleGroup. (Optional) |

> Number **count**()
>
> Shows how many elements the ObjectStyleGroup contains.
> ObjectStyleGroup **item**( Mixed **index** )
>
> Gets the ObjectStyleGroup matching the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts: Long Integer or String. |

> ObjectStyleGroup **itemByName**( String **name** )
>
> Gets the ObjectStyleGroup with the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name. |

> ObjectStyleGroup **itemByID**( Number **id** )
>
> Gets the ObjectStyleGroup with the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID. |

> ObjectStyleGroup **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the ObjectStyleGroups in the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | ObjectStyleGroup, index, or name at the range start. Accepts: ObjectStyleGroup, Long Integer or String. |
| Mixed | to | ObjectStyleGroup, index, or name at the range end. Accepts: ObjectStyleGroup, Long Integer or String. |

> ObjectStyleGroup **firstItem**()
>
> Gets the first ObjectStyleGroup in the collection.
> ObjectStyleGroup **lastItem**()
>
> Gets the final ObjectStyleGroup in the collection.
> ObjectStyleGroup **middleItem**()
>
> Gets the middle ObjectStyleGroup in the collection.
> ObjectStyleGroup **previousItem**( ObjectStyleGroup **obj** )
>
> Gets the ObjectStyleGroup whose index comes before the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyleGroup | obj | Index of the ObjectStyleGroup after the target ObjectStyleGroup. |

> ObjectStyleGroup **nextItem**( ObjectStyleGroup **obj** )
>
> Gets the ObjectStyleGroup whose index comes after the supplied ObjectStyleGroup.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyleGroup | obj | ObjectStyleGroup placed before the target ObjectStyleGroup. |

> ObjectStyleGroup **anyItem**()
>
> Gets any ObjectStyleGroup in the collection.
> ObjectStyleGroup **everyItem**()
>
> Gets every ObjectStyleGroup in the collection.
> String **toSource**()
>
> Creates a string that returns the ObjectStyleGroup when run.
> ObjectStyleGroup **[]**( Number **index** )
>
> Gets the ObjectStyleGroup at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index. |

## ObjectStyleObjectEffectsCategorySettings

Settings for object style object effects categories.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier maps to valid objects.
> _Read Only_
>
> ObjectStyle **parent**
>
> Parent object for ObjectStyleObjectEffectsCategorySettings (a ObjectStyle).
> _Read Only_
>
> Events **events**
>
> Events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection.
> Boolean **enableTransparency**
>
> When true, transparency settings are applied by the object style.
> Boolean **enableDropShadow**
>
> When true, drop shadows are applied by the object style.
> Boolean **enableFeather**
>
> When true, feathering is applied by the object style.
> Boolean **enableInnerShadow**
>
> When true, inner shadows are applied by the object style.
> Boolean **enableOuterGlow**
>
> When true, outer glow is applied by the object style.
> Boolean **enableInnerGlow**
>
> When true, inner glow is applied by the object style.
> Boolean **enableBevelEmboss**
>
> When true, bevel emboss is applied by the object style.
> Boolean **enableSatin**
>
> When true, satin is applied by the object style.
> Boolean **enableDirectionalFeather**
>
> When true, directional feathering is applied by the object style.
> Boolean **enableGradientFeather**
>
> When true, gradient feathering is applied by the object style.
> Object **properties**
>
> Lets multiple properties be assigned together.

### Methods

> String **toSource**()
>
> Creates a string that returns the ObjectStyleObjectEffectsCategorySettings when run.
> ObjectStyleObjectEffectsCategorySettings **getElements**()
>
> Resolves the object specifier and builds an array of object references.
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
| Mixed | handler | Event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
