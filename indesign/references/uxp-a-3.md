# Arrange By, Arrow Head Alignment Enum, Arrow Head, Article Child ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: ArrangeBy; ArrowHeadAlignmentEnum; ArrowHead; ArticleChild; ArticleChildren; ArticleMember; ArticleMembers; Article — Instance; Articles; AssetType; Asset; Assets.

## ArrangeBy

How records should be arranged in the target document.

### Class

> _Read Only_
>
> Number `ROWS_FIRST` = 1684886118
>
> Arranges records row by row.
> _Read Only_
>
> Number `COLUMNS_FIRST` = 1684882278
>
> Arranges records column by column.

## ArrowHeadAlignmentEnum

Arrowhead alignment categories.

### Class

> _Read Only_
>
> Number `INSIDE_PATH` = 1634230633
>
> Places the arrowhead inside the path; path geometry changes to accommodate arrow heads.
> _Read Only_
>
> Number `OUTSIDE_PATH` = 1634230639
>
> Places the arrowhead outside the path; i.e. path geometry remains same.

## ArrowHead

Open paths can use this endpoint shape on one or both ends.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> No arrow head.
> _Read Only_
>
> Number `SIMPLE_ARROW_HEAD` = 1936289136
>
> Two slanting lines form this arrow head; their intersection is a 45-degree angle, and the stroke weight matches the path stroke.
> _Read Only_
>
> Number `SIMPLE_WIDE_ARROW_HEAD` = 1937203560
>
> Two slanting lines form this arrow head; their intersection is a 90-degree angle, and the stroke weight matches the path stroke.
> _Read Only_
>
> Number `TRIANGLE_ARROW_HEAD` = 1953655150
>
> Solid triangle arrow head with a point that forms a 45-degree angle.
> _Read Only_
>
> Number `TRIANGLE_WIDE_ARROW_HEAD` = 1953980776
>
> Solid triangle arrow head with a point that forms a 90-degree angle.
> _Read Only_
>
> Number `BARBED_ARROW_HEAD` = 1650553442
>
> Solid arrow head whose pierced end bends sharply toward the point; the point forms a 45-degree angle.
> _Read Only_
>
> Number `CURVED_ARROW_HEAD` = 1668702568
>
> Solid arrow head whose pierced end curves inward toward the point; the point forms a 45-degree angle.
> _Read Only_
>
> Number `CIRCLE_ARROW_HEAD` = 1668440424
>
> Hollow circle with an outline matching the stroke weight. The circle's diameter equals 5 times the stroke width.
> _Read Only_
>
> Number `CIRCLE_SOLID_ARROW_HEAD` = 1668505960
>
> Solid circle with a diameter equal to 5 times the stroke width.
> _Read Only_
>
> Number `SQUARE_ARROW_HEAD` = 1936810344
>
> Hollow square perpendicular to the path, with an outline matching the stroke weight. One square side is 5 times the stroke width.
> _Read Only_
>
> Number `SQUARE_SOLID_ARROW_HEAD` = 1936941416
>
> Solid square perpendicular to the path end. One square side is 5 times the stroke width.
> _Read Only_
>
> Number `BAR_ARROW_HEAD` = 1651663208
>
> Vertical bar bisected by the stroke; it meets the stroke at a right angle, uses the same weight as the stroke, and has a length 4.5 times the stroke width.

## ArticleChild

A group member that belongs to an article.

### Instance

> _Read Only_
>
> PageItem **itemRef**
>
> Underlying page item.
> _Read Only_
>
> Number **id**
>
> Unique ID of the ArticleChild.
> _Read Only_
>
> Boolean **isValid**
>
> True when the specifier resolves to valid objects.
> _Read Only_
>
> Group **parent**
>
> Parent of the ArticleChild (a Group).
> _Read Only_
>
> Number **index**
>
> Index of the ArticleChild within its containing object.
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
> Object **properties**
>
> Supports assigning multiple properties in one operation.

### Methods

> ArticleChild **move**( LocationOptions **to**, ArticleChild **reference** )
>
> Relocates the ArticleChild to the requested position.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Location relative to the reference object or inside the containing object. |
| ArticleChild | reference | Reference object; required when the to value is before or after. (Optional) |

> String **toSource**()
>
> Creates source text that, when executed, returns the ArticleChild.
> ArticleChild **getElements**()
>
> Builds an object-reference array from the specifier.
> String **toSpecifier**()
>
> Returns the specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler; accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Deletes the event listener registration.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler; accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## ArticleChildren

Collection of group items included in an article.

### Instance

> _Read Only_
>
> Number **length**
>
> Number of objects in the collection.

### Methods

> Number **count**()
>
> Displays how many elements are in the ArticleChild.
> ArticleChild **item**( Mixed **index** )
>
> Returns the ArticleChild at the specified index or with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name; accepts Long Integer or String. |

> ArticleChild **itemByID**( Number **id** )
>
> Fetches the ArticleChild by the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID. |

> ArticleChild **itemByRange**( Mixed **from**, Mixed **to** )
>
> Returns the ArticleChildren that fall within the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | ArticleChild, index, or name at the start of the range; accepts ArticleChild, Long Integer or String. |
| Mixed | to | ArticleChild, index, or name at the end of the range; accepts ArticleChild, Long Integer or String. |

> ArticleChild **firstItem**()
>
> Fetches the first ArticleChild in the collection.
> ArticleChild **lastItem**()
>
> Fetches the last ArticleChild in the collection.
> ArticleChild **middleItem**()
>
> Fetches the collection's middle ArticleChild.
> ArticleChild **previousItem**( ArticleChild **obj** )
>
> Returns the ArticleChild whose index precedes the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ArticleChild | obj | ArticleChild index after the desired ArticleChild. |

> ArticleChild **nextItem**( ArticleChild **obj** )
>
> Returns the ArticleChild whose index comes after the specified ArticleChild in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ArticleChild | obj | ArticleChild positioned before the desired ArticleChild. |

> ArticleChild **anyItem**()
>
> Fetches any ArticleChild in the collection.
> ArticleChild **everyItem**()
>
> Fetches every ArticleChild in the collection.
> String **toSource**()
>
> Creates source text that, when executed, returns the ArticleChild.
> ArticleChild **[]**( Number **index** )
>
> Fetches the ArticleChild at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index. |

## ArticleMember

A member within an article.

### Instance

> _Read Only_
>
> PageItem **itemRef**
>
> The page item that backs this member.
> _Read Only_
>
> Number **id**
>
> Unique numeric ID assigned to the ArticleMember.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Article **parent**
>
> Parent object for the ArticleMember, namely an Article.
> _Read Only_
>
> Number **index**
>
> Position of the ArticleMember inside its container.
> _Read Only_
>
> Events **events**
>
> Events available on this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection for this object.
> Object **properties**
>
> Use this property to assign several properties in one operation.

### Methods

> **remove**()
>
> Removes the ArticleMember.
> ArticleMember **move**( LocationOptions **to**, ArticleMember **reference** )
>
> Relocates the ArticleMember according to the requested placement.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Placement relative to the reference object or inside the container. |
| ArticleMember | reference | Reference object. Note: this is required when the to value is before or after. (Optional) |

> String **toSource**()
>
> Builds a string which, if run, yields the ArticleMember.
> ArticleMember **getElements**()
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

## ArticleMembers

Collection containing article members.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection object count.

### Methods

> ArticleMember **add**( PageItem **itemRef**, LocationOptions **at**, ArticleMember **reference**, Object **withProperties** )
>
> Creates another member.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | itemRef | Page item that should be inserted into the article. |
| LocationOptions | at | Placement relative to the reference object or inside the container. (Optional) |
| ArticleMember | reference | Reference object. Note: this is required when the to value is before or after. (Optional) |
| Object | withProperties | Starting property values for the new ArticleMember. (Optional) |

> Number **count**()
>
> Shows how many ArticleMember elements are present.
> ArticleMember **item**( Mixed **index** )
>
> Gets the ArticleMember identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Selector value; provide a position or object name. Can accept: Long Integer or String. |

> ArticleMember **itemByID**( Number **id** )
>
> Gets the ArticleMember matching the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> ArticleMember **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the ArticleMembers contained in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting ArticleMember, index, or name for the range. Can accept: ArticleMember, Long Integer or String. |
| Mixed | to | Ending ArticleMember, index, or name for the range. Can accept: ArticleMember, Long Integer or String. |

> ArticleMember **firstItem**()
>
> Gets the first ArticleMember in the collection.
> ArticleMember **lastItem**()
>
> Gets the final ArticleMember in the collection.
> ArticleMember **middleItem**()
>
> Gets the middle ArticleMember in the collection.
> ArticleMember **previousItem**( ArticleMember **obj** )
>
> Gets the ArticleMember whose index comes immediately before the supplied one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ArticleMember | obj | Index of the ArticleMember that comes after the wanted ArticleMember. |

> ArticleMember **nextItem**( ArticleMember **obj** )
>
> Gets the ArticleMember whose index comes after the supplied ArticleMember in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ArticleMember | obj | ArticleMember whose index precedes the wanted ArticleMember. |

> ArticleMember **anyItem**()
>
> Gets any ArticleMember from the collection.
> ArticleMember **everyItem**()
>
> Gets every ArticleMember in the collection.
> String **toSource**()
>
> Builds a string which, if run, yields the ArticleMember.
> ArticleMember **[]**( Number **index** )
>
> Gets the ArticleMember at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## Article — Instance

> _Read Only_
>
> Number **id**
>
> Unique numeric ID assigned to the Article.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Parent object for the Article, namely a Document.
> _Read Only_
>
> Number **index**
>
> Position of the Article inside its container.
> _Read Only_
>
> Events **events**
>
> Events available on this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection for this object.
> _Read Only_
>
> ArticleMembers **articleMembers**
>
> Article members held by this Article.
> String **name**
>
> Name assigned to the Article.
> Boolean **articleExportStatus**
>
> Export status for the Article.
> String **label**
>
> A string value can be stored in this property.
> Object **properties**
>
> Use this property to assign several properties in one operation.

### Methods

> **remove**()
>
> Removes the Article.
> Article **move**( LocationOptions **to**, Article **reference** )
>
> Relocates the Article according to the requested placement.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Placement relative to the reference object or inside the container. |
| Article | reference | Reference object. Note: this is required when the to value is before or after. (Optional) |

> **addDocumentContent**()
>
> Fills the article with every page item in the document.
> **insertLabel**( String **key**, String **value** )
>
> Stores the value under the specified label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Retrieves the label value for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |

> String **toSource**()
>
> Builds a string which, if run, yields the Article.
> Article **getElements**()
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

## Articles

Collection containing articles.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection object count.

### Methods

> Article **add**( String **name**, Boolean **articleExportStatus**, LocationOptions **at**, Article **reference**, Object **withProperties** )
>
> Creates another Article.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Article name. (Optional) |
| Boolean | articleExportStatus | Export status for the article. (Optional) |
| LocationOptions | at | Placement relative to the reference object or inside the container. (Optional) |
| Article | reference | Reference object. Note: this is required when the to value is before or after. (Optional) |
| Object | withProperties | Starting property values for the new Article. (Optional) |

> Number **count**()
>
> Shows how many Article elements are present.
> Article **item**( Mixed **index** )
>
> Gets the Article identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Selector value; provide a position or object name. Can accept: Long Integer or String. |

> Article **itemByName**( String **name** )
>
> Gets the Article matching the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> Article **itemByID**( Number **id** )
>
> Gets the Article matching the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> Article **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Articles contained in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting Article, index, or name for the range. Can accept: Article, Long Integer or String. |
| Mixed | to | Ending Article, index, or name for the range. Can accept: Article, Long Integer or String. |

> Article **firstItem**()
>
> Gets the first Article in the collection.
> Article **lastItem**()
>
> Gets the final Article in the collection.
> Article **middleItem**()
>
> Gets the middle Article in the collection.
> Article **previousItem**( Article **obj** )
>
> Gets the Article whose index comes immediately before the supplied one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Article | obj | Index of the Article that comes after the wanted Article. |

> Article **nextItem**( Article **obj** )
>
> Gets the Article whose index comes after the supplied Article in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Article | obj | Article whose index precedes the wanted Article. |

> Article **anyItem**()
>
> Gets any Article from the collection.
> Article **everyItem**()
>
> Gets every Article in the collection.
> String **toSource**()
>
> Builds a string which, if run, yields the Article.
> Article **[]**( Number **index** )
>
> Gets the Article at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## AssetType

Options that identify asset types.

### Class

> _Read Only_
>
> Number `IMAGE_TYPE` = 1952409965
>
> Image assets use this asset type value.
> _Read Only_
>
> Number `EPS_TYPE` = 1952400720
>
> EPS assets use this asset type value.
> _Read Only_
>
> Number `PDF_TYPE` = 1952403524
>
> PDF assets use this asset type value.
> _Read Only_
>
> Number `GEOMETRY_TYPE` = 1952409445
>
> Geometric page item assets use this asset type value.
> _Read Only_
>
> Number `PAGE_TYPE` = 1952411745
>
> Page assets use this asset type value.
> _Read Only_
>
> Number `TEXT_TYPE` = 1952412773
>
> Text assets use this asset type value.
> _Read Only_
>
> Number `STRUCTURE_TYPE` = 1952412532
>
> Structure assets use this value.
> _Read Only_
>
> Number `INDESIGN_FILE_TYPE` = 1952409956
>
> InDesign file assets use this value.

## Asset

Asset object stored in an object library.

### Instance

> _Read Only_
>
> Date **date**
>
> Creation date and time for the Asset.
> _Read Only_
>
> Number **id**
>
> Unique numeric ID assigned to the Asset.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Library **parent**
>
> Parent object for the Asset, namely a Library.
> _Read Only_
>
> Number **index**
>
> Position of the Asset inside its container.
> _Read Only_
>
> Events **events**
>
> Events available on this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection for this object.
> String **name**
>
> Name assigned to the Asset.
> String **description**
>
> Description assigned to the Asset.
> AssetType **assetType**
>
> Object library asset type.
> String **label**
>
> A string value can be stored in this property.
> Object **properties**
>
> Use this property to assign several properties in one operation.

### Methods

> **remove**()
>
> Removes the Asset.
> Mixed **placeAsset**( Mixed **on** )
>
> Places the asset into the specified document or text target.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | on | Document or text object where the asset should be placed. Can accept: Document or Text. |

> **select**( SelectionOptions **existingSelection** )
>
> Selects this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection status for the Asset relative to objects already selected. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Stores the value under the specified label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Retrieves the label value for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |

> String **toSource**()
>
> Builds a string which, if run, yields the Asset.
> Asset **getElements**()
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

## Assets

Collection containing object library assets.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection object count.

### Methods

> Number **count**()
>
> Shows how many Asset elements are present.
> Asset **item**( Mixed **index** )
>
> Gets the Asset identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Selector value; provide a position or object name. Can accept: Long Integer or String. |

> Asset **itemByName**( String **name** )
>
> Gets the Asset matching the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> Asset **itemByID**( Number **id** )
>
> Gets the Asset matching the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> Asset **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Assets contained in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting Asset, index, or name for the range. Can accept: Asset, Long Integer or String. |
| Mixed | to | Ending Asset, index, or name for the range. Can accept: Asset, Long Integer or String. |

> Asset **firstItem**()
>
> Gets the first Asset in the collection.
> Asset **lastItem**()
>
> Gets the final Asset in the collection.
> Asset **middleItem**()
>
> Gets the middle Asset in the collection.
> Asset **previousItem**( Asset **obj** )
>
> Gets the Asset whose index comes immediately before the supplied one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Asset | obj | Index of the Asset that comes after the wanted Asset. |

> Asset **nextItem**( Asset **obj** )
>
> Gets the Asset whose index comes after the supplied Asset in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Asset | obj | Asset whose index precedes the wanted Asset. |

> Asset **anyItem**()
>
> Gets any Asset from the collection.
> Asset **everyItem**()
>
> Gets every Asset in the collection.
> String **toSource**()
>
> Builds a string which, if run, yields the Asset.
> Asset **[]**( Number **index** )
>
> Gets the Asset at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |
