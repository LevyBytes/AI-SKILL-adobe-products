# Form Fields, Frame Fitting Option

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: FormFields; FrameFittingOption.

## FormFields

Collection containing form fields.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects contained by the collection.

### Methods

> Number **count**()
>
> Shows how many elements are in the FormField collection.
> FormField **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
>
> Adds a FormField object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Layer | layer | Layer where the FormField is created. (Optional) |
| LocationOptions | at | Position for inserting the FormField, either within the container object or in relation to the reference object. (Optional) |
| Mixed | reference | Reference object. Note: this is required when the at parameter is before or after. Accepts: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Initial property values for the new FormField. (Optional) |

> FormField **item**( Mixed **index** )
>
> Retrieves the FormField identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts: Long Integer or String. |

> FormField **itemByName**( String **name** )
>
> Retrieves the FormField with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to look up. |

> FormField **itemByID**( Number **id** )
>
> Retrieves the FormField with the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to look up. |

> FormField **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the FormFields that fall inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | FormField, index, or name at the range start. Accepts: FormField, Long Integer or String. |
| Mixed | to | FormField, index, or name at the range end. Accepts: FormField, Long Integer or String. |

> FormField **firstItem**()
>
> Retrieves the first FormField in the collection.
> FormField **lastItem**()
>
> Retrieves the last FormField in the collection.
> FormField **middleItem**()
>
> Retrieves the middle FormField in the collection.
> FormField **previousItem**( FormField **obj** )
>
> Retrieves the FormField whose index is immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FormField | obj | Index of the FormField that follows the wanted FormField. |

> FormField **nextItem**( FormField **obj** )
>
> Retrieves the FormField whose index comes after the specified FormField in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FormField | obj | FormField positioned before the wanted FormField. |

> FormField **anyItem**()
>
> Retrieves any FormField in the collection.
> FormField **everyItem**()
>
> Retrieves every FormField in the collection.
> String **toSource**()
>
> Builds a string that, when executed, returns the FormField.
> FormField **[]**( Number **index** )
>
> Retrieves the FormField at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to retrieve. |

## FrameFittingOption

Frame-fitting choices for content that is placed or pasted into a frame.

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
> Owner object: ObjectStyle, Oval, Rectangle, Polygon, Application, or Document.
> _Read Only_
>
> Events **events**
>
> Event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event-listener collection.
> Boolean **autoFit**
>
> When true, resizing a frame applies the most recently saved fitting options to its contents.
> Measurement Unit (Number or String)=any **leftCrop**
>
> Measurement-unit crop amount for the graphic's left edge.
> Measurement Unit (Number or String)=any **topCrop**
>
> Measurement-unit crop amount for the graphic's top edge.
> Measurement Unit (Number or String)=any **rightCrop**
>
> Measurement-unit crop amount for the graphic's right edge.
> Measurement Unit (Number or String)=any **bottomCrop**
>
> Measurement-unit crop amount for the graphic's bottom edge.
> EmptyFrameFittingOptions **fittingOnEmptyFrame**
>
> Frame fitting option used for placed or pasted content when the frame has no contents. It can apply to a frame, object style, document, or the application.
> AnchorPoint **fittingAlignment**
>
> Point used to align the image empty during frame fitting. For details, see frame fitting options.
> Object **properties**
>
> Property used to set several properties in one operation.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, returns the FrameFittingOption.
> FrameFittingOption **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Returns the object specifier.
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
| String | eventType | Event type that was registered. |
| Mixed | handler | Event handler that was registered. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
