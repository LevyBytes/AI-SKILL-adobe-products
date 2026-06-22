# Xml Attribute, Xml Attributes, Xml Comment, Xml Comments ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: XMLAttribute; XMLAttributes; XMLComment; XMLComments; XMLElementLocation; XMLElementPosition.

## XMLAttribute

Represents an XML attribute.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> XMLElement **parent**
>
> Parent XMLElement for this XMLAttribute.
> _Read Only_
>
> Number **index**
>
> Position of the XMLAttribute inside its containing object.
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
> String **name**
>
> Name of the XMLAttribute.
> String **value**
>
> Value of the XMLAttribute.
> Object **properties**
>
> Property for setting multiple properties in one operation.

### Methods

> **remove**()
>
> Removes the XMLAttribute.
> XMLElement **convertToElement**( XMLElementLocation **located**, XMLTag **markupTag** )
>
> Changes the XML attribute into a child under its parent element.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElementLocation | located | Placement for the new XML element inside the XML attribute's parent XML element. (Optional) |
| XMLTag | markupTag | XML tag assigned to that new element. (Optional) |

> **select**( SelectionOptions **existingSelection** )
>
> Selects this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection status for the XMLAttribute relative to objects already selected. (Optional) |

> String **toSource**()
>
> Builds a string that can be executed to return the XMLAttribute.
> XMLAttribute **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets this object's specifier string.
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

## XMLAttributes

Collection object containing XMLAttribute entries.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in this collection.

### Methods

> XMLAttribute **add**( String **name**, String **value**, Object **withProperties** )
>
> Creates an XML attribute.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Attribute name. |
| String | value | Attribute value. |
| Object | withProperties | Initial property values for the new XMLAttribute. (Optional) |

> Number **count**()
>
> Reports how many elements are in the XMLAttribute.
> XMLAttribute **item**( Mixed **index** )
>
> Gets the XMLAttribute at the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts: Long Integer or String. |

> XMLAttribute **itemByName**( String **name** )
>
> Gets the XMLAttribute with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> XMLAttribute **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the XMLAttributes inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | XMLAttribute, index, or name that starts the range. Accepts: XMLAttribute, Long Integer or String. |
| Mixed | to | XMLAttribute, index, or name that ends the range. Accepts: XMLAttribute, Long Integer or String. |

> XMLAttribute **firstItem**()
>
> Gets the first XMLAttribute in the collection.
> XMLAttribute **lastItem**()
>
> Gets the last XMLAttribute in the collection.
> XMLAttribute **middleItem**()
>
> Gets the middle XMLAttribute in the collection.
> XMLAttribute **previousItem**( XMLAttribute **obj** )
>
> Gets the XMLAttribute whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLAttribute | obj | Index of the XMLAttribute that follows the requested XMLAttribute. |

> XMLAttribute **nextItem**( XMLAttribute **obj** )
>
> Gets the XMLAttribute whose index comes after the specified XMLAttribute in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLAttribute | obj | XMLAttribute whose index is before the requested XMLAttribute. |

> XMLAttribute **anyItem**()
>
> Gets any XMLAttribute in the collection.
> XMLAttribute **everyItem**()
>
> Gets every XMLAttribute in the collection.
> String **toSource**()
>
> Builds a string that can be executed to return the XMLAttribute.
> XMLAttribute **[]**( Number **index** )
>
> Gets the XMLAttribute at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## XMLComment

Represents an XML comment.

### Instance

> _Read Only_
>
> InsertionPoint **storyOffset**
>
> Insertion point before the table in the story that contains the table.
> _Read Only_
>
> Number **id**
>
> Unique ID of the XMLComment.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent of the XMLComment, either a Document or an XMLElement.
> _Read Only_
>
> Number **index**
>
> Position of the XMLComment inside its containing object.
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
> String **value**
>
> Text stored in the XML comment.
> Object **properties**
>
> Property for setting multiple properties in one operation.

### Methods

> XMLComment **move**( LocationOptions **to**, Mixed **reference** )
>
> Relocates the element to the requested location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Location relative to the reference object or inside the containing object. |
| Mixed | reference | Reference object. Note: required when the to parameter specifies before or after. Accepts: XMLItem or Text. (Optional) |

> XMLComment **duplicate**()
>
> Duplicates the XMLComment.
> **remove**()
>
> Removes the XMLComment.
> **select**( SelectionOptions **existingSelection** )
>
> Selects this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection status for the XMLComment relative to objects already selected. (Optional) |

> String **toSource**()
>
> Builds a string that can be executed to return the XMLComment.
> XMLComment **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets this object's specifier string.
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

## XMLComments

Collection object containing XMLComment entries.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in this collection.

### Methods

> XMLComment **add**( String **value**, Mixed **storyOffset**, Object **withProperties** )
>
> Creates an XML comment.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | value | Comment value. (Optional) |
| Mixed | storyOffset | Location inside the story, specified as an insertion point. Accepts: InsertionPoint or Long Integer. (Optional) |
| Object | withProperties | Initial property values for the new XMLComment. (Optional) |

> Number **count**()
>
> Reports how many elements are in the XMLComment.
> XMLComment **item**( Mixed **index** )
>
> Gets the XMLComment at the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts: Long Integer or String. |

> XMLComment **itemByID**( Number **id** )
>
> Gets the XMLComment with the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> XMLComment **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the XMLComments inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | XMLComment, index, or name that starts the range. Accepts: XMLComment, Long Integer or String. |
| Mixed | to | XMLComment, index, or name that ends the range. Accepts: XMLComment, Long Integer or String. |

> XMLComment **firstItem**()
>
> Gets the first XMLComment in the collection.
> XMLComment **lastItem**()
>
> Gets the last XMLComment in the collection.
> XMLComment **middleItem**()
>
> Gets the middle XMLComment in the collection.
> XMLComment **previousItem**( XMLComment **obj** )
>
> Gets the XMLComment whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLComment | obj | Index of the XMLComment that follows the requested XMLComment. |

> XMLComment **nextItem**( XMLComment **obj** )
>
> Gets the XMLComment whose index comes after the specified XMLComment in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLComment | obj | XMLComment whose index is before the requested XMLComment. |

> XMLComment **anyItem**()
>
> Gets any XMLComment in the collection.
> XMLComment **everyItem**()
>
> Gets every XMLComment in the collection.
> String **toSource**()
>
> Builds a string that can be executed to return the XMLComment.
> XMLComment **[]**( Number **index** )
>
> Gets the XMLComment at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## XMLElementLocation

Location choices for XML elements.

### Class

> _Read Only_
>
> Number `ELEMENT_START` = 1482844014
>
> Places the element at the start of the containing object.
> _Read Only_
>
> Number `ELEMENT_END` = 1483042404
>
> Places the element at the end of the containing object.

## XMLElementPosition

Position choices relative to the reference XML element or within the XML element.

### Class

> _Read Only_
>
> Number `BEFORE_ELEMENT` = 1482843494
>
> Position before the XML element.
> _Read Only_
>
> Number `AFTER_ELEMENT` = 1482778228
>
> Position after the XML element.
> _Read Only_
>
> Number `ELEMENT_START` = 1482844014
>
> Beginning position inside the XML element.
> _Read Only_
>
> Number `ELEMENT_END` = 1483042404
>
> End position inside the XML element.
