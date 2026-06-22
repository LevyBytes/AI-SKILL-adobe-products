# Paragraphs, Pasteboard Preference, Path Point, Path Points ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Paragraphs; PasteboardPreference — Instance; PathPoint; PathPoints; PathTypeAlignments; PathType; Path — Instance; Paths; PDFs; PDFAttribute — Instance; PDFColorSpace; PDFComment.

## Paragraphs

Paragraph collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects contained in the collection.

### Methods

> Number **count**()
>
> Shows how many elements are in the Paragraph collection.
> Paragraph **item**( Mixed **index** )
>
> Gets the Paragraph identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name used for lookup. Can accept: Long Integer or String. |

> Paragraph **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Paragraphs included in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Paragraph, index, or name marking the range start. Can accept: Paragraph, Long Integer or String. |
| Mixed | to | Paragraph, index, or name marking the range end. Can accept: Paragraph, Long Integer or String. |

> Paragraph **firstItem**()
>
> Gets the first Paragraph in the collection.
> Paragraph **lastItem**()
>
> Gets the last Paragraph in the collection.
> Paragraph **middleItem**()
>
> Gets the middle Paragraph in the collection.
> Paragraph **previousItem**( Paragraph **obj** )
>
> Gets the Paragraph whose index comes immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Paragraph | obj | Index of the Paragraph positioned after the requested Paragraph. |

> Paragraph **nextItem**( Paragraph **obj** )
>
> Gets the Paragraph whose index comes immediately after the specified Paragraph in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Paragraph | obj | Paragraph positioned before the requested Paragraph. |

> Paragraph **anyItem**()
>
> Gets any Paragraph from the collection.
> Paragraph **everyItem**()
>
> Gets every Paragraph in the collection.
> String **toSource**()
>
> Produces a string that can be executed to return the Paragraph.
> Paragraph **[]**( Number **index** )
>
> Gets the Paragraph at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Numeric index. |

## PasteboardPreference — Instance

> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the PasteboardPreference, either a Application or Document.
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
> Measurement Unit (Number or String)=any **pasteboardMargins**
>
> Minimum horizontal and vertical pasteboard margins. A horizontal margin of -1 indicates one document page width.
> Mixed **previewBackgroundColor**
>
> Preview background color, given either as three double values from 0 to 255 for R, G, and B. A UI color is also valid. Return values may be: Array of 3 Reals (0 - 255) or UIColors enumerator.
> Mixed **bleedGuideColor**
>
> Bleed guide color, given either as three double values from 0 to 255 for R, G, and B. A UI color is also valid. Return values may be: Array of 3 Reals (0 - 255) or UIColors enumerator.
> Mixed **slugGuideColor**
>
> Slug guide color, given either as three double values from 0 to 255 for R, G, and B. A UI color is also valid. Return values may be: Array of 3 Reals (0 - 255) or UIColors enumerator.
> Boolean **matchPreviewBackgroundToThemeColor**
>
> True matches Preview Background color to Theme Color; false uses the value chosen in the Preview Background color drop down.
> Object **properties**
>
> Lets several properties be set together.

### Methods

> String **toSource**()
>
> Produces a string that can be executed to return the PasteboardPreference.
> PasteboardPreference **getElements**()
>
> Resolves the object specifier and builds an array of object references.
> String **toSpecifier**()
>
> Returns the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
| Mixed | handler | Event handler invoked for the event. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type already registered. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## PathPoint

Point entry belonging to a path.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Path **parent**
>
> Parent object for the PathPoint, a Path.
> _Read Only_
>
> Number **index**
>
> Position of the PathPoint inside its containing object.
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
> PointType **pointType**
>
> Type assigned to the path point.
> Measurement Unit (Number or String)=any **anchor**
>
> Page location of the path point, expressed as [x, y].
> Measurement Unit (Number or String)=any **leftDirection**
>
> Left-direction point, expressed as [x, y], controlling the curve of the segment before the path point.
> Measurement Unit (Number or String)=any **rightDirection**
>
> Right-direction point, expressed as [x, y], controlling the curve of the segment after the path point.
> Object **properties**
>
> Lets several properties be set together.

### Methods

> **remove**()
>
> Removes the PathPoint.
> **join**( PathPoint **reference**, JoinOptions **given** )
>
> Joins this path point with another path point. Both points must be endpoints, and their paths must combine into one path on one page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PathPoint | reference | Reference object. The path point used as the join target. |
| JoinOptions | given | Join option used by the operation. (Optional) |

> String **toSource**()
>
> Produces a string that can be executed to return the PathPoint.
> PathPoint **getElements**()
>
> Resolves the object specifier and builds an array of object references.
> String **toSpecifier**()
>
> Returns the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
| Mixed | handler | Event handler invoked for the event. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type already registered. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## PathPoints

PathPoints collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects contained in the collection.

### Methods

> PathPoint **add**( Object **withProperties** )
>
> Creates a PathPoint.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new PathPoint. (Optional) |

> Number **count**()
>
> Shows how many elements are in the PathPoint collection.
> PathPoint **item**( Mixed **index** )
>
> Gets the PathPoint identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name used for lookup. Can accept: Long Integer or String. |

> PathPoint **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the PathPoints included in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | PathPoint, index, or name marking the range start. Can accept: PathPoint, Long Integer or String. |
| Mixed | to | PathPoint, index, or name marking the range end. Can accept: PathPoint, Long Integer or String. |

> PathPoint **firstItem**()
>
> Gets the first PathPoint in the collection.
> PathPoint **lastItem**()
>
> Gets the last PathPoint in the collection.
> PathPoint **middleItem**()
>
> Gets the middle PathPoint in the collection.
> PathPoint **previousItem**( PathPoint **obj** )
>
> Gets the PathPoint whose index comes immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PathPoint | obj | Index of the PathPoint positioned after the requested PathPoint. |

> PathPoint **nextItem**( PathPoint **obj** )
>
> Gets the PathPoint whose index comes immediately after the specified PathPoint in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PathPoint | obj | PathPoint positioned before the requested PathPoint. |

> PathPoint **anyItem**()
>
> Gets any PathPoint from the collection.
> PathPoint **everyItem**()
>
> Gets every PathPoint in the collection.
> String **toSource**()
>
> Produces a string that can be executed to return the PathPoint.
> PathPoint **[]**( Number **index** )
>
> Gets the PathPoint at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Numeric index. |

## PathTypeAlignments

Options that align text against a path's stroke.

### Class

> _Read Only_
>
> Number `TOP_PATH_ALIGNMENT` = 1885434975
>
> Aligns text to the top side of the path stroke.
> _Read Only_
>
> Number `BOTTOM_PATH_ALIGNMENT` = 1885430367
>
> Aligns text to the bottom side of the path stroke.
> _Read Only_
>
> Number `CENTER_PATH_ALIGNMENT` = 1885430623
>
> Aligns text to the path stroke center.

## PathType

Path type choices.

### Class

> _Read Only_
>
> Number `OPEN_PATH` = 1869639280
>
> Identifies an open path.
> _Read Only_
>
> Number `CLOSED_PATH` = 1668051812
>
> Identifies a closed path.

## Path — Instance

> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the Path, one of SplineItem, Polygon, GraphicLine, Rectangle, Oval, TextFrame, EndnoteTextFrame, MediaItem, Sound, Movie, Button, MultiStateObject, ClippingPathSettings or TextWrapPreference.
> _Read Only_
>
> Number **index**
>
> Position of the Path inside its containing object.
> _Read Only_
>
> PathPoints **pathPoints**
>
> Collection containing the path points.
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
> PathType **pathType**
>
> Type assigned to the path.
> Mixed **entirePath**
>
> Coordinates for every path point on the path, including anchor, left-direction, and right-direction points. When this property is used to create a path, provide either anchor point coordinates ([[x1, y1], [x2, y2], ...]) or coordinates for anchor point, left-direction point, and right-direction point ([[[x1, y1], [x2, y2], [x3, y3]], [[x4, y4], [x5, y5], [x6, y6]], ...]). Note: if only anchor points are supplied, the resulting path connects all path points with straight line segments; specifying left- and right-direction point positions creates curved segments. Can return: Array of Arrays of 2 Units.
> Object **properties**
>
> Lets several properties be set together.

### Methods

> **remove**()
>
> Removes the Path.
> **reverse**()
>
> Reverses the path direction.
> String **toSource**()
>
> Produces a string that can be executed to return the Path.
> Path **getElements**()
>
> Resolves the object specifier and builds an array of object references.
> String **toSpecifier**()
>
> Returns the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
| Mixed | handler | Event handler invoked for the event. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type already registered. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## Paths

Paths collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects contained in the collection.

### Methods

> Path **add**( Object **withProperties** )
>
> Creates a Path.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new Path. (Optional) |

> Number **count**()
>
> Shows how many elements are in the Path collection.
> Path **item**( Mixed **index** )
>
> Gets the Path identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name used for lookup. Can accept: Long Integer or String. |

> Path **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Paths included in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Path, index, or name marking the range start. Can accept: Path, Long Integer or String. |
| Mixed | to | Path, index, or name marking the range end. Can accept: Path, Long Integer or String. |

> Path **firstItem**()
>
> Gets the first Path in the collection.
> Path **lastItem**()
>
> Gets the last Path in the collection.
> Path **middleItem**()
>
> Gets the middle Path in the collection.
> Path **previousItem**( Path **obj** )
>
> Gets the Path whose index comes immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Path | obj | Index of the Path positioned after the requested Path. |

> Path **nextItem**( Path **obj** )
>
> Gets the Path whose index comes immediately after the specified Path in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Path | obj | Path positioned before the requested Path. |

> Path **anyItem**()
>
> Gets any Path from the collection.
> Path **everyItem**()
>
> Gets every Path in the collection.
> String **toSource**()
>
> Produces a string that can be executed to return the Path.
> Path **[]**( Number **index** )
>
> Gets the Path at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Numeric index. |

## PDFs

PDF file collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> Number **count**()
>
> Reports how many elements the PDF collection contains.
> PDF **item**( Mixed **index** )
>
> Fetches the PDF identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name to resolve. Can accept: Long Integer or String. |

> PDF **itemByName**( String **name** )
>
> Fetches the PDF that matches the provided name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> PDF **itemByID**( Number **id** )
>
> Fetches the PDF that matches the provided ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> PDF **itemByRange**( Mixed **from**, Mixed **to** )
>
> Fetches the PDFs included between the supplied range endpoints.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting PDF, index, or name for the range. Can accept: PDF, Long Integer or String. |
| Mixed | to | Ending PDF, index, or name for the range. Can accept: PDF, Long Integer or String. |

> PDF **firstItem**()
>
> Fetches the collection's first PDF.
> PDF **lastItem**()
>
> Fetches the collection's final PDF.
> PDF **middleItem**()
>
> Fetches the PDF at the collection's midpoint.
> PDF **previousItem**( PDF **obj** )
>
> Fetches the PDF positioned immediately before the supplied PDF.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PDF | obj | PDF whose preceding item is requested. |

> PDF **nextItem**( PDF **obj** )
>
> Fetches the PDF positioned immediately after the supplied PDF.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PDF | obj | PDF whose following item is requested. |

> PDF **anyItem**()
>
> Fetches one PDF from the collection without specifying which one.
> PDF **everyItem**()
>
> Fetches all PDFs in the collection.
> String **toSource**()
>
> Builds source text that evaluates back to the PDF.
> PDF **[]**( Number **index** )
>
> Fetches the PDF at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to resolve. |

## PDFAttribute — Instance

> _Read Only_
>
> Number **pageNumber**
>
> PDF document page number selected for placement.
> _Read Only_
>
> PDFCrop **pdfCrop**
>
> Cropping mode applied during placement.
> _Read Only_
>
> Boolean **transparentBackground**
>
> When true, the placed PDF uses a transparent background.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves successfully to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the PDFAttribute, either a PDF or ImportedPage.
> _Read Only_
>
> Events **events**
>
> Event collection attached to this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection attached to this object.
> Object **properties**
>
> Property bag used to set multiple properties in one operation.

### Methods

> String **toSource**()
>
> Builds source text that evaluates back to the PDFAttribute.
> PDFAttribute **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to register. |
| Mixed | handler | Event handler to invoke. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type to remove. |
| Mixed | handler | Registered event handler to remove. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## PDFColorSpace

Settings that control how color data is represented in an exported PDF.

### Class

> _Read Only_
>
> Number **RGB** = 1666336578
>
> Uses the RGB color space for all color values. Intended for documents viewed on screen.
> _Read Only_
>
> Number **CMYK** = 1129142603
>
> Uses the CYMK color space for all color values.
> _Read Only_
>
> Number `UNCHANGED_COLOR_SPACE` = 1970161251
>
> Keeps each image in its existing color space.
> _Read Only_
>
> Number `REPURPOSE_RGB` = 1917994818
>
> Reuses RGB colors for a new purpose.
> _Read Only_
>
> Number `REPURPOSE_CMYK` = 1917013337
>
> Reuses CMYK colors for a new purpose.
> _Read Only_
>
> Number **GRAY** = 1766290041
>
> Changes all color values into high-quality black-and-white imagery. Converted gray levels reflect the luminosity of the source objects.

## PDFComment

Object representing a PDF comment.

### Instance

> _Read Only_
>
> String **commentReviewer**
>
> Name of the reviewer who created the comment.
> _Read Only_
>
> String **commentContent**
>
> Comment text content.
> _Read Only_
>
> Date **commentDate**
>
> Date assigned to the comment.
> _Read Only_
>
> CommentTypeEnum **commentType**
>
> Comment type value.
> _Read Only_
>
> String **commentFilePath**
>
> File path associated with the comment.
> _Read Only_
>
> Mixed **commentPathGeometry**
>
> Geometry data for the comment path. Can return: Ordered array containing pathPointArray:Array of Ordered array containing anchor:Array of 2 Reals, leftDirection:Array of 2 Reals, rightDirection:Array of 2 Reals, pathOpen:Boolean.
> _Read Only_
>
> CommentStatusEnum **commentStatus**
>
> Status assigned to the comment.
> _Read Only_
>
> Boolean **commentIsOrphan**
>
> Indicates whether the comment is orphaned.
> _Read Only_
>
> Boolean **commentIsApplied**
>
> Indicates whether the comment has been applied.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the PDFComment.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves successfully to valid objects.
> _Read Only_
>
> Document **parent**
>
> Parent object for the PDFComment, which is a Document.
> _Read Only_
>
> Number **index**
>
> Position of the PDFComment inside its container.
> _Read Only_
>
> Events **events**
>
> Event collection attached to this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection attached to this object.
> _Read Only_
>
> Replies **replies**
>
> Reply object collection for the comment.
> String **label**
>
> Settable string label for the object.
> String **name**
>
> Name of the PDFComment; this aliases the PDFComment label property.
> Object **properties**
>
> Property bag used to set multiple properties in one operation.

### Methods

> **remove**()
>
> Deletes the PDFComment.
> **changeStatus**( CommentStatusEnum **commentStatus**, Object **withProperties** )
>
> Changes a comment's status.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CommentStatusEnum | commentStatus | New status assigned to the comment. |
| Object | withProperties | Initial property values for the new PDFComment. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Assigns a label value for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to store. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Gets the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to read. |

> String **toSource**()
>
> Builds source text that evaluates back to the PDFComment.
> PDFComment **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to register. |
| Mixed | handler | Event handler to invoke. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type to remove. |
| Mixed | handler | Registered event handler to remove. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
