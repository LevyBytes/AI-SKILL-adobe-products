# Media Items, Menu Action, Menu Actions, Menu Element ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: MediaItems; MenuAction; MenuActions; MenuElement; MenuElements; MenuItem; MenuItems; MenuSeparator; MenuSeparators; Menu — Class.

## MediaItems

Collection containing media items.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count in the collection.

### Methods

> Number **count**()
>
> Shows how many elements are in the MediaItem.
> MediaItem **item**( Mixed **index** )
>
> Returns the MediaItem identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Identifier supplied as an index or a name. Accepted types: Long Integer or String. |

> MediaItem **itemByName**( String **name** )
>
> Retrieves the MediaItem matching the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> MediaItem **itemByID**( Number **id** )
>
> Returns the MediaItem matching the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> MediaItem **itemByRange**( Mixed **from**, Mixed **to** )
>
> Returns the MediaItems included in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | MediaItem, index, or name at the start of the range. Can accept: MediaItem, Long Integer or String. |
| Mixed | to | Range ending point, supplied as MediaItem, index, or name. Can accept: MediaItem, Long Integer or String. |

> MediaItem **firstItem**()
>
> Returns the collection's first MediaItem.
> MediaItem **lastItem**()
>
> Returns the collection's last MediaItem.
> MediaItem **middleItem**()
>
> Returns the collection's middle MediaItem.
> MediaItem **previousItem**( MediaItem **obj** )
>
> Returns the MediaItem whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| MediaItem | obj | Index of the MediaItem that follows the wanted MediaItem. |

> MediaItem **nextItem**( MediaItem **obj** )
>
> Returns the collection member whose index comes after the specified MediaItem.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| MediaItem | obj | MediaItem whose index is immediately before the wanted MediaItem. |

> MediaItem **anyItem**()
>
> Returns any MediaItem from the collection.
> MediaItem **everyItem**()
>
> Returns every MediaItem from the collection.
> String **toSource**()
>
> Produces a string that, when run, returns the MediaItem.
> MediaItem **[]**( Number **index** )
>
> Returns the MediaItem at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to use. |

## MenuAction

A menu action.

### Class

> _Read Only_
>
> String `BEFORE_INVOKE` = beforeInvoke
>
> Fires before invocation of the MenuAction. The event does not bubble, and callers may cancel it.
> _Read Only_
>
> String `AFTER_INVOKE` = afterInvoke
>
> Fires after invocation of the MenuAction. The event does not bubble, and cancellation is not supported.

### Instance

> _Read Only_
>
> String **name**
>
> Holds the MenuAction name.
> _Read Only_
>
> String **title**
>
> Supplies the MenuAction name as shown in the user interface. Any ampersand characters (&) remain part of the title; on Windows OS they mark the next character for Alt key menu navigation. Use doubled ampersands when the displayed name should contain an actual ampersand. Mac OS strips those extra ampersand markers and otherwise ignores them.
> _Read Only_
>
> String **area**
>
> Identifies the menu action area.
> _Read Only_
>
> Boolean **enabled**
>
> true means the MenuAction can be used.
> _Read Only_
>
> Boolean **checked**
>
> true marks the menu item tied to this menu action as checked.
> _Read Only_
>
> Number **id**
>
> Stores the unique ID for the MenuAction.
> _Read Only_
>
> Boolean **isValid**
>
> true is returned when the object specifier maps to valid objects.
> _Read Only_
>
> Application **parent**
>
> Gives the parent for the MenuAction, an Application.
> _Read Only_
>
> Number **index**
>
> Reports where the MenuAction sits inside its containing object.
> _Read Only_
>
> Events **events**
>
> Provides the events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Provides the event listener collection.
> String **label**
>
> Stores any string value assigned to this property.
> Object **properties**
>
> Lets multiple properties be set together.

### Methods

> **invoke**()
>
> Runs the action.
> **insertLabel**( String **key**, String **value** )
>
> Assigns label data by storing value under the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to use. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Reads label data stored for the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to read. |

> String **toSource**()
>
> Builds source text that can recreate the MenuAction when run.
> MenuAction **getElements**()
>
> Resolves the specifier and produces object-reference array entries.
> String **toSpecifier**()
>
> Reads back the object specifier.
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

## MenuActions

Represents a collection containing menu actions.

### Instance

> _Read Only_
>
> Number **length**
>
> Reports how many objects are contained.

### Methods

> Number **count**()
>
> Shows how many elements the MenuAction collection contains.
> MenuAction **item**( Mixed **index** )
>
> Retrieves the MenuAction addressed by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector. Allowed types: Long Integer or String. |

> MenuAction **itemByName**( String **name** )
>
> Retrieves the MenuAction addressed by name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> MenuAction **itemByID**( Number **id** )
>
> Retrieves the MenuAction addressed by ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> MenuAction **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the MenuActions included in the given range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as MenuAction, Long Integer, or String. |
| Mixed | to | Range end, supplied as MenuAction, Long Integer, or String. |

> MenuAction **firstItem**()
>
> Retrieves the collection's first MenuAction.
> MenuAction **lastItem**()
>
> Retrieves the collection's last MenuAction.
> MenuAction **middleItem**()
>
> Retrieves the collection's middle MenuAction.
> MenuAction **previousItem**( MenuAction **obj** )
>
> Retrieves the MenuAction whose index immediately precedes the supplied one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| MenuAction | obj | MenuAction index positioned after the desired MenuAction. |

> MenuAction **nextItem**( MenuAction **obj** )
>
> Retrieves the MenuAction indexed immediately after the supplied MenuAction.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| MenuAction | obj | MenuAction whose index is before the desired MenuAction. |

> MenuAction **anyItem**()
>
> Retrieves any MenuAction from the collection.
> MenuAction **everyItem**()
>
> Retrieves all MenuAction objects in the collection.
> String **toSource**()
>
> Builds source text that can recreate the MenuAction when run.
> MenuAction **[]**( Number **index** )
>
> Retrieves the MenuAction addressed by index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to use. |

## MenuElement

Represents menu elements.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> true is returned when the object specifier maps to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Gives the parent for the MenuElement, either a Menu or Submenu.
> _Read Only_
>
> Number **index**
>
> Reports where the MenuElement sits inside its containing object.
> _Read Only_
>
> Events **events**
>
> Provides the events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Provides the event listener collection.
> Object **properties**
>
> Lets multiple properties be set together.

### Methods

> **remove**()
>
> Removes the MenuElement.
> String **toSource**()
>
> Builds source text that can recreate the MenuElement when run.
> MenuElement **getElements**()
>
> Resolves the specifier and produces object-reference array entries.
> String **toSpecifier**()
>
> Reads back the object specifier.
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

## MenuElements

Represents a collection containing menu elements.

### Instance

> _Read Only_
>
> Number **length**
>
> Reports how many objects are contained.

### Methods

> Number **count**()
>
> Shows how many elements the MenuElement collection contains.
> MenuElement **item**( Mixed **index** )
>
> Retrieves the MenuElement addressed by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector. Allowed types: Long Integer or String. |

> MenuElement **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the MenuElements included in the given range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as MenuElement, Long Integer, or String. |
| Mixed | to | Range end, supplied as MenuElement, Long Integer, or String. |

> MenuElement **firstItem**()
>
> Retrieves the collection's first MenuElement.
> MenuElement **lastItem**()
>
> Retrieves the collection's last MenuElement.
> MenuElement **middleItem**()
>
> Retrieves the collection's middle MenuElement.
> MenuElement **previousItem**( MenuElement **obj** )
>
> Retrieves the MenuElement whose index immediately precedes the supplied one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| MenuElement | obj | MenuElement index positioned after the desired MenuElement. |

> MenuElement **nextItem**( MenuElement **obj** )
>
> Retrieves the MenuElement indexed immediately after the supplied MenuElement.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| MenuElement | obj | MenuElement whose index is before the desired MenuElement. |

> MenuElement **anyItem**()
>
> Retrieves any MenuElement from the collection.
> MenuElement **everyItem**()
>
> Retrieves all MenuElement objects in the collection.
> String **toSource**()
>
> Builds source text that can recreate the MenuElement when run.
> MenuElement **[]**( Number **index** )
>
> Retrieves the MenuElement addressed by index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to use. |

## MenuItem

Represents a menu item.

### Instance

> _Read Only_
>
> String **name**
>
> Holds the MenuItem name.
> _Read Only_
>
> String **title**
>
> Supplies the MenuItem name as shown in the user interface. Any ampersand characters (&) remain part of the title; on Windows OS they mark the next character for Alt key menu navigation. Use doubled ampersands when the displayed name should contain an actual ampersand. Mac OS strips those extra ampersand markers and otherwise ignores them.
> _Read Only_
>
> Number **id**
>
> Stores the unique ID for the MenuItem.
> _Read Only_
>
> Boolean **enabled**
>
> true means the MenuItem can be used.
> _Read Only_
>
> Boolean **checked**
>
> true marks the menu item tied to the menu action as checked.
> _Read Only_
>
> MenuAction **associatedMenuAction**
>
> References the menu action that implements this menu item.
> _Read Only_
>
> Boolean **isValid**
>
> true is returned when the object specifier maps to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Gives the parent for the MenuItem, either a Menu or Submenu.
> _Read Only_
>
> Number **index**
>
> Reports where the MenuItem sits inside its containing object.
> _Read Only_
>
> Events **events**
>
> Provides the events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Provides the event listener collection.
> Object **properties**
>
> Lets multiple properties be set together.

### Methods

> **select**()
>
> Selects the MenuItem.
> **remove**()
>
> Removes the MenuItem.
> String **toSource**()
>
> Builds source text that can recreate the MenuItem when run.
> MenuItem **getElements**()
>
> Resolves the specifier and produces object-reference array entries.
> String **toSpecifier**()
>
> Reads back the object specifier.
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

## MenuItems

Represents a collection containing menu items.

### Instance

> _Read Only_
>
> Number **length**
>
> Reports how many objects are contained.

### Methods

> MenuItem **add**( MenuAction **associatedMenuAction**, LocationOptions **at**, MenuElement **reference**, Object **withProperties** )
>
> Adds a MenuItem entry.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| MenuAction | associatedMenuAction | Menu action used to implement the menu item. |
| LocationOptions | at | Placement for the menu item, either relative to the reference object or inside the containing object. (Optional) |
| MenuElement | reference | Placement reference object; needed when at is before or after. (Optional) |
| Object | withProperties | Starting property values for the new MenuItem. (Optional) |

> Number **count**()
>
> Shows how many elements the MenuItem collection contains.
> MenuItem **item**( Mixed **index** )
>
> Retrieves the MenuItem addressed by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector. Allowed types: Long Integer or String. |

> MenuItem **itemByName**( String **name** )
>
> Retrieves the MenuItem addressed by name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> MenuItem **itemByID**( Number **id** )
>
> Retrieves the MenuItem addressed by ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> MenuItem **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the MenuItems included in the given range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as MenuItem, Long Integer, or String. |
| Mixed | to | Range end, supplied as MenuItem, Long Integer, or String. |

> MenuItem **firstItem**()
>
> Retrieves the collection's first MenuItem.
> MenuItem **lastItem**()
>
> Retrieves the collection's last MenuItem.
> MenuItem **middleItem**()
>
> Retrieves the collection's middle MenuItem.
> MenuItem **previousItem**( MenuItem **obj** )
>
> Retrieves the MenuItem whose index immediately precedes the supplied one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| MenuItem | obj | MenuItem index positioned after the desired MenuItem. |

> MenuItem **nextItem**( MenuItem **obj** )
>
> Retrieves the MenuItem indexed immediately after the supplied MenuItem.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| MenuItem | obj | MenuItem whose index is before the desired MenuItem. |

> MenuItem **anyItem**()
>
> Retrieves any MenuItem from the collection.
> MenuItem **everyItem**()
>
> Retrieves all MenuItem objects in the collection.
> String **toSource**()
>
> Builds source text that can recreate the MenuItem when run.
> MenuItem **[]**( Number **index** )
>
> Retrieves the MenuItem addressed by index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to use. |

## MenuSeparator

Represents a menu separator.

### Instance

> _Read Only_
>
> Number **id**
>
> Stores the unique ID for the MenuSeparator.
> _Read Only_
>
> Boolean **isValid**
>
> true is returned when the object specifier maps to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Gives the parent for the MenuSeparator, either a Menu or Submenu.
> _Read Only_
>
> Number **index**
>
> Reports where the MenuSeparator sits inside its containing object.
> _Read Only_
>
> Events **events**
>
> Provides the events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Provides the event listener collection.
> Object **properties**
>
> Lets multiple properties be set together.

### Methods

> **remove**()
>
> Removes the MenuSeparator.
> String **toSource**()
>
> Builds source text that can recreate the MenuSeparator when run.
> MenuSeparator **getElements**()
>
> Resolves the specifier and produces object-reference array entries.
> String **toSpecifier**()
>
> Reads back the object specifier.
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

## MenuSeparators

Represents a collection containing menu separators.

### Instance

> _Read Only_
>
> Number **length**
>
> Reports how many objects are contained.

### Methods

> MenuSeparator **add**( LocationOptions **at**, MenuElement **reference**, Object **withProperties** )
>
> Adds a MenuSeparator entry.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | at | Placement for the menu separator, either relative to the reference object or inside the containing object. (Optional) |
| MenuElement | reference | Placement reference object; needed when at is before or after. (Optional) |
| Object | withProperties | Starting property values for the new MenuSeparator. (Optional) |

> Number **count**()
>
> Shows how many elements the MenuSeparator collection contains.
> MenuSeparator **item**( Mixed **index** )
>
> Retrieves the MenuSeparator addressed by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector. Allowed types: Long Integer or String. |

> MenuSeparator **itemByID**( Number **id** )
>
> Retrieves the MenuSeparator addressed by ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> MenuSeparator **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the MenuSeparators included in the given range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as MenuSeparator, Long Integer, or String. |
| Mixed | to | Range end, supplied as MenuSeparator, Long Integer, or String. |

> MenuSeparator **firstItem**()
>
> Retrieves the collection's first MenuSeparator.
> MenuSeparator **lastItem**()
>
> Retrieves the collection's last MenuSeparator.
> MenuSeparator **middleItem**()
>
> Retrieves the collection's middle MenuSeparator.
> MenuSeparator **previousItem**( MenuSeparator **obj** )
>
> Retrieves the MenuSeparator whose index immediately precedes the supplied one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| MenuSeparator | obj | MenuSeparator index positioned after the desired MenuSeparator. |

> MenuSeparator **nextItem**( MenuSeparator **obj** )
>
> Retrieves the MenuSeparator indexed immediately after the supplied MenuSeparator.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| MenuSeparator | obj | MenuSeparator whose index is before the desired MenuSeparator. |

> MenuSeparator **anyItem**()
>
> Retrieves any MenuSeparator from the collection.
> MenuSeparator **everyItem**()
>
> Retrieves all MenuSeparator objects in the collection.
> String **toSource**()
>
> Builds source text that can recreate the MenuSeparator when run.
> MenuSeparator **[]**( Number **index** )
>
> Retrieves the MenuSeparator addressed by index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to use. |

## Menu — Class

> _Read Only_
>
> String `BEFORE_DISPLAY` = beforeDisplay
>
> Sent before the Menu appears. The event does not bubble and cannot be canceled.

### Menu — Instance

> _Read Only_
>
> String **name**
>
> Holds the Menu name.
> _Read Only_
>
> String **title**
>
> Supplies the Menu name as shown in the user interface. Any ampersand characters (&) remain part of the title; on Windows OS they mark the next character for Alt key menu navigation. Use doubled ampersands when the displayed name should contain an actual ampersand. Mac OS strips those extra ampersand markers and otherwise ignores them.
> _Read Only_
>
> Boolean **isValid**
>
> true is returned when the object specifier maps to valid objects.
> _Read Only_
>
> Application **parent**
>
> Gives the parent for the Menu, an Application.
> _Read Only_
>
> Number **index**
>
> Reports where the Menu sits inside its containing object.
> _Read Only_
>
> Events **events**
>
> Provides the events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Provides the event listener collection.
> _Read Only_
>
> MenuElements **menuElements**
>
> Provides the collection of menu elements.
> _Read Only_
>
> Submenus **submenus**
>
> Provides the collection of submenus.
> _Read Only_
>
> MenuItems **menuItems**
>
> Provides the collection of menu items.
> _Read Only_
>
> MenuSeparators **menuSeparators**
>
> Provides the collection of menu separators.
> Object **properties**
>
> Lets multiple properties be set together.

### Methods

> String **toSource**()
>
> Builds source text that can recreate the Menu when run.
> Menu **getElements**()
>
> Resolves the specifier and produces object-reference array entries.
> String **toSpecifier**()
>
> Reads back the object specifier.
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
