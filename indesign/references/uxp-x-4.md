# Xml Preference, Xml Rule Match Data, Xml Rule Processor, Xml Rule Processors ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: XMLPreference — Instance; XMLRuleMatchData; XMLRuleProcessor; XMLRuleProcessors; XmlStories.

## XMLPreference — Instance

> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Identifies the XMLPreference parent, either a Application or Document.
> _Read Only_
>
> Events **events**
>
> Provides the event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Provides the event listener collection.
> Boolean **deleteElementOnContentDeletion**
>
> Sets whether the element is deleted when related content, such as a page item or text fragment, is deleted.
> String **defaultStoryTagName**
>
> Names the default tag for new story elements. Note: either names an existing tag or creates a new tag.
> Mixed **defaultStoryTagColor**
>
> Defines the default story tag color, either as three doubles for R, G, and B values, each in the range 0 to 255, or as a UI color. Notes: valid only when the default story tag name value creates a new tag. Existing tag colors are not updated. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
> String **defaultTableTagName**
>
> Names the default tag for new table elements. Note: either names an existing tag or creates a new tag.
> Mixed **defaultTableTagColor**
>
> Defines the default table tag color, either as three doubles for R, G, and B values, each in the range 0 to 255, or as a UI color. Notes: valid only when the default table tag name value creates a new tag. Existing tag colors are not updated. . Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
> String **defaultCellTagName**
>
> Names the default tag for new table cell elements. Note: either names an existing tag or creates a new tag.
> Mixed **defaultCellTagColor**
>
> Defines the default cell tag color, either as three doubles for R, G, and B values, each in the range 0 to 255, or as a UI color. Note: valid only when the default cell tag name value creates a new tag. Existing tag colors are not updated. . Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
> String **defaultImageTagName**
>
> Default name assigned to image elements that are created automatically.
> Mixed **defaultImageTagColor**
>
> Defines the color for a new image tag, either as three doubles for R, G, and B values, each in the range 0 to 255, or as a UI color. Note: used only when creating the tag is necessary. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
> Object **properties**
>
> Enables several properties to be assigned in a single operation.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, returns the XMLPreference.
> XMLPreference **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Specifies the event type. |
| Mixed | handler | Supplies the event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Specifies the registered event type. |
| Mixed | handler | Supplies the registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## XMLRuleMatchData

XML element matched by one or more rules in the active XML rule set.

### Instance

> _Read Only_
>
> XMLItem **element**
>
> XML element matched by one or more rules in the active XML rule set.
> _Read Only_
>
> Number **matchRules**
>
> Indices of the XML rules that matched in the rule set.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> XMLRuleProcessor **parent**
>
> Identifies the XMLRuleMatchData parent, a XMLRuleProcessor.
> _Read Only_
>
> Number **index**
>
> Position of the XMLRuleMatchData within the object that contains it.
> _Read Only_
>
> Events **events**
>
> Provides the event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Provides the event listener collection.
> Object **properties**
>
> Enables several properties to be assigned in a single operation.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, returns the XMLRuleMatchData.
> XMLRuleMatchData **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Specifies the event type. |
| Mixed | handler | Supplies the event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Specifies the registered event type. |
| Mixed | handler | Supplies the registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## XMLRuleProcessor

Processor for XML rules.

### Instance

> _Read Only_
>
> Boolean **halted**
>
> True indicates that XML rule processing has stopped.
> _Read Only_
>
> String **rulePaths**
>
> XPath condition paths for the rules in the rule set.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the XMLRuleProcessor.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Identifies the XMLRuleProcessor parent, a Application.
> _Read Only_
>
> Number **index**
>
> Position of the XMLRuleProcessor within the object that contains it.
> _Read Only_
>
> Events **events**
>
> Provides the event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Provides the event listener collection.
> String **label**
>
> String property available for arbitrary label text.
> String **name**
>
> Name of the XMLRuleProcessor; this aliases the XMLRuleProcessor label property.
> Object **properties**
>
> Enables several properties to be assigned in a single operation.

### Methods

> **remove**()
>
> Removes the XMLRuleProcessor.
> XMLRuleMatchData **startProcessingRuleSet**( XMLElement **initialElement** )
>
> Begins processing an XML rule set.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | initialElement | XML element where processing of the rule set starts. |

> XMLRuleMatchData **findNextMatch**()
>
> Finds the next XML element that matches.
> XMLRuleMatchData **startProcessingSubtree**()
>
> Processes XML elements belonging to the current XML element.
> **skipChildren**()
>
> Skips child XML elements of the current XML element.
> **endProcessingRuleSet**()
>
> Stops processing the XML rule set.
> **halt**()
>
> Stops the XML rule processor.
> **insertLabel**( String **key**, String **value** )
>
> Uses key to store the supplied value in the label.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value paired with the key. |

> String **extractLabel**( String **key** )
>
> Retrieves the label value paired with the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |

> String **toSource**()
>
> Builds a string that, when executed, returns the XMLRuleProcessor.
> XMLRuleProcessor **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Specifies the event type. |
| Mixed | handler | Supplies the event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Specifies the registered event type. |
| Mixed | handler | Supplies the registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## XMLRuleProcessors

A collection containing XML rule processors.

### Instance

> _Read Only_
>
> Number **length**
>
> Number of contained objects.

### Methods

> XMLRuleProcessor **add**( String **rulePaths**, Mixed **prefixMappingTable**, Object **withProperties** )
>
> Creates a XMLRuleProcessor.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | rulePaths | XPath condition paths for the rules in the rule set. |
| Mixed | prefixMappingTable | Namespace-to-prefix mapping data. Can accept: Array of Arrays of 2 Strings. (Optional) |
| Object | withProperties | Initial property values for the new XMLRuleProcessor (Optional) |

> Number **count**()
>
> Shows how many elements the XMLRuleProcessor contains.
> XMLRuleProcessor **item**( Mixed **index** )
>
> Gets the XMLRuleProcessor for the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector. Can accept: Long Integer or String. |

> XMLRuleProcessor **itemByName**( String **name** )
>
> Gets the XMLRuleProcessor with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> XMLRuleProcessor **itemByID**( Number **id** )
>
> Gets the XMLRuleProcessor with the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> XMLRuleProcessor **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the XMLRuleProcessors in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | XMLRuleProcessor, index, or name that starts the range. Can accept: XMLRuleProcessor, Long Integer or String. |
| Mixed | to | XMLRuleProcessor, index, or name that ends the range. Can accept: XMLRuleProcessor, Long Integer or String. |

> XMLRuleProcessor **firstItem**()
>
> Gets the first XMLRuleProcessor in the collection.
> XMLRuleProcessor **lastItem**()
>
> Gets the last XMLRuleProcessor in the collection.
> XMLRuleProcessor **middleItem**()
>
> Gets the middle XMLRuleProcessor in the collection.
> XMLRuleProcessor **previousItem**( XMLRuleProcessor **obj** )
>
> Gets the XMLRuleProcessor whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLRuleProcessor | obj | The XMLRuleProcessor positioned after the desired XMLRuleProcessor. |

> XMLRuleProcessor **nextItem**( XMLRuleProcessor **obj** )
>
> Gets the XMLRuleProcessor whose index comes after the specified XMLRuleProcessor in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLRuleProcessor | obj | XMLRuleProcessor whose index comes before the desired XMLRuleProcessor. |

> XMLRuleProcessor **anyItem**()
>
> Gets any XMLRuleProcessor in the collection.
> XMLRuleProcessor **everyItem**()
>
> Gets every XMLRuleProcessor in the collection.
> String **toSource**()
>
> Builds a string that, when executed, returns the XMLRuleProcessor.
> XMLRuleProcessor **[]**( Number **index** )
>
> Gets the XMLRuleProcessor at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## XmlStories

A collection containing xml stories.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> Number **count**()
>
> Reports how many elements the XmlStory contains.
> XmlStory **item**( Mixed **index** )
>
> Fetches the XmlStory identified by the given index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | The index or name. Can accept: Long Integer or String. |

> XmlStory **itemByName**( String **name** )
>
> Fetches the XmlStory identified by the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | The name. |

> XmlStory **itemByID**( Number **id** )
>
> Fetches the XmlStory identified by the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | The ID. |

> XmlStory **itemByRange**( Mixed **from**, Mixed **to** )
>
> Provides the XmlStories covered by the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | The XmlStory, index, or name at the beginning of the range. Can accept: XmlStory, Long Integer or String. |
| Mixed | to | The XmlStory, index, or name at the end of the range. Can accept: XmlStory, Long Integer or String. |

> XmlStory **firstItem**()
>
> Provides the collection's first XmlStory.
> XmlStory **lastItem**()
>
> Provides the collection's last XmlStory.
> XmlStory **middleItem**()
>
> Provides the collection's middle XmlStory.
> XmlStory **previousItem**( XmlStory **obj** )
>
> Provides the XmlStory at the index immediately before the supplied XmlStory.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XmlStory | obj | The index of the XmlStory that follows the desired XmlStory. |

> XmlStory **nextItem**( XmlStory **obj** )
>
> Provides the XmlStory whose index comes immediately after the supplied XmlStory in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XmlStory | obj | The XmlStory whose index comes before the desired XmlStory. |

> XmlStory **anyItem**()
>
> Provides any XmlStory from the collection.
> XmlStory **everyItem**()
>
> Provides every XmlStory in the collection.
> String **toSource**()
>
> Creates executable source text that evaluates back to the XmlStory.
> XmlStory **[]**( Number **index** )
>
> Fetches the XmlStory identified by the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | The index. |
