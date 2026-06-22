# Submenu, Submenus, Submit Form Behavior, Submit Form Behaviors ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Submenu — Class; Submenus; SubmitFormBehavior; SubmitFormBehaviors; SVGs.

## Submenu — Class

> _Read Only_
>
> String `BEFORE_DISPLAY` = beforeDisplay
>
> Sent before the Submenu appears. This event does not bubble, and it cannot be canceled.

### Submenu — Instance

> _Read Only_
>
> String **name**
>
> Submenu name.
> _Read Only_
>
> String **title**
>
> Display name for the Submenu in the user interface. Any ampersand characters (&) included in the title tell the Windows OS to underline the next character, enabling Alt key menu navigation. Use double ampersands when the name should show a literal ampersand. Mac OS ignores the extra ampersand characters and strips them out.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier maps to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Owning object for the Submenu (a Menu or Submenu).
> _Read Only_
>
> Number **index**
>
> Position of the Submenu inside its containing object.
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
> _Read Only_
>
> MenuElements **menuElements**
>
> Menu element collection.
> _Read Only_
>
> Submenus **submenus**
>
> Submenu collection.
> _Read Only_
>
> MenuItems **menuItems**
>
> Menu item collection.
> _Read Only_
>
> MenuSeparators **menuSeparators**
>
> Menu separator collection.
> Object **properties**
>
> Allows multiple properties to be assigned in one operation.

### Methods

> **remove**()
>
> Removes the Submenu.
> String **toSource**()
>
> Builds source text that evaluates back to the Submenu.
> Submenu **getElements**()
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
| String | eventType | Event type to listen for. |
| Mixed | handler | Handler used for the event. Can accept: File or JavaScript Function. |
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

## Submenus

Collection containing submenus.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection size.

### Methods

> Submenu **add**( String **title**, LocationOptions **at**, MenuElement **reference**, Object **withProperties** )
>
> Adds a submenu.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | title | User-interface display name for the Submenu. Ampersand characters (&) in the title instruct the Windows OS to underline the next character for Alt key menu navigation. To show an actual ampersand in the name, use double ampersands. Mac OS discards the extra ampersand characters. |
| LocationOptions | at | Placement of the submenu relative to the reference or inside its containing object. (Optional) |
| MenuElement | reference | Reference object; required when at is before or after. (Optional) |
| Object | withProperties | Starting property values for the new Submenu. (Optional) |

> Number **count**()
>
> Reports how many elements the Submenu collection contains.
> Submenu **item**( Mixed **index** )
>
> Finds a Submenu by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name to resolve. Can accept: Long Integer or String. |

> Submenu **itemByName**( String **name** )
>
> Finds the Submenu with the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to look up. |

> Submenu **itemByRange**( Mixed **from**, Mixed **to** )
>
> Collects the Submenus in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting Submenu, index, or name for the range. Can accept: Submenu, Long Integer or String. |
| Mixed | to | Ending Submenu, index, or name for the range. Can accept: Submenu, Long Integer or String. |

> Submenu **firstItem**()
>
> Gets the first Submenu in the collection.
> Submenu **lastItem**()
>
> Gets the final Submenu in the collection.
> Submenu **middleItem**()
>
> Gets the central Submenu in the collection.
> Submenu **previousItem**( Submenu **obj** )
>
> Gets the Submenu at the index immediately before the specified one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Submenu | obj | Submenu index that comes after the desired Submenu. |

> Submenu **nextItem**( Submenu **obj** )
>
> Gets the Submenu at the index immediately after the specified one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Submenu | obj | Submenu index that comes before the desired Submenu. |

> Submenu **anyItem**()
>
> Gets any Submenu from the collection.
> Submenu **everyItem**()
>
> Gets all Submenu entries in the collection.
> String **toSource**()
>
> Builds source text that evaluates back to the Submenu.
> Submenu **[]**( Number **index** )
>
> Gets the Submenu at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to retrieve. |

## SubmitFormBehavior

Behavior object for submitting the document.

### Instance

> _Read Only_
>
> String **name**
>
> Name assigned to the SubmitFormBehavior.
> _Read Only_
>
> Number **id**
>
> Unique identifier assigned to the SubmitFormBehavior.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier maps to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Owning object for the SubmitFormBehavior (a Button, CheckBox, ComboBox, ListBox, RadioButton, TextBox or SignatureField).
> _Read Only_
>
> Number **index**
>
> Position of the SubmitFormBehavior inside its containing object.
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
> String **url**
>
> URL value.
> Boolean **enableBehavior**
>
> True means the behavior is active.
> BehaviorEvents **behaviorEvent**
>
> Event that triggers the behavior.
> String **label**
>
> String-valued property.
> Object **properties**
>
> Allows multiple properties to be assigned in one operation.

### Methods

> **remove**()
>
> Removes the SubmitFormBehavior.
> **insertLabel**( String **key**, String **value** )
>
> Associates the specified key with the supplied label value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to set. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Looks up the stored label value for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to read. |

> String **toSource**()
>
> Builds source text that evaluates back to the SubmitFormBehavior.
> SubmitFormBehavior **getElements**()
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
| String | eventType | Event type to listen for. |
| Mixed | handler | Handler used for the event. Can accept: File or JavaScript Function. |
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

## SubmitFormBehaviors

Collection containing submit form behavior objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection size.

### Methods

> Number **count**()
>
> Reports how many elements the SubmitFormBehavior collection contains.
> SubmitFormBehavior **add**( Object **withProperties** )
>
> Adds a SubmitFormBehavior to the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new SubmitFormBehavior. (Optional) |

> SubmitFormBehavior **item**( Mixed **index** )
>
> Finds a SubmitFormBehavior by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name to resolve. Can accept: Long Integer or String. |

> SubmitFormBehavior **itemByName**( String **name** )
>
> Finds the SubmitFormBehavior with the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to look up. |

> SubmitFormBehavior **itemByID**( Number **id** )
>
> Finds the SubmitFormBehavior with the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to look up. |

> SubmitFormBehavior **itemByRange**( Mixed **from**, Mixed **to** )
>
> Collects the SubmitFormBehaviors in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting SubmitFormBehavior, index, or name for the range. Can accept: SubmitFormBehavior, Long Integer or String. |
| Mixed | to | Ending SubmitFormBehavior, index, or name for the range. Can accept: SubmitFormBehavior, Long Integer or String. |

> SubmitFormBehavior **firstItem**()
>
> Gets the first SubmitFormBehavior in the collection.
> SubmitFormBehavior **lastItem**()
>
> Gets the final SubmitFormBehavior in the collection.
> SubmitFormBehavior **middleItem**()
>
> Gets the central SubmitFormBehavior in the collection.
> SubmitFormBehavior **previousItem**( SubmitFormBehavior **obj** )
>
> Gets the SubmitFormBehavior at the index immediately before the specified one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SubmitFormBehavior | obj | SubmitFormBehavior index that comes after the desired SubmitFormBehavior. |

> SubmitFormBehavior **nextItem**( SubmitFormBehavior **obj** )
>
> Gets the SubmitFormBehavior at the index immediately after the specified one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SubmitFormBehavior | obj | SubmitFormBehavior index that comes before the desired SubmitFormBehavior. |

> SubmitFormBehavior **anyItem**()
>
> Gets any SubmitFormBehavior from the collection.
> SubmitFormBehavior **everyItem**()
>
> Gets all SubmitFormBehavior entries in the collection.
> String **toSource**()
>
> Builds source text that evaluates back to the SubmitFormBehavior.
> SubmitFormBehavior **[]**( Number **index** )
>
> Gets the SubmitFormBehavior at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to retrieve. |

## SVGs

Collection containing SVG files.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects contained in this collection.

### Methods

> SVG **add**( Object **withProperties** )
>
> Adds and returns a new SVG.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Optional starting property values for the SVG being created. |

> Number **count**()
>
> Reports how many elements the SVG contains.
> SVG **item**( Mixed **index** )
>
> Gets the SVG identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name to look up. Can accept: Long Integer or String. |

> SVG **itemByName**( String **name** )
>
> Gets the SVG whose name matches the argument.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value to match. |

> SVG **itemByID**( Number **id** )
>
> Gets the SVG with the requested ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value to match. |

> SVG **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the SVGs covered by the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting SVG, index, or name for the range. Can accept: SVG, Long Integer or String. |
| Mixed | to | Ending SVG, index, or name for the range. Can accept: SVG, Long Integer or String. |

> SVG **firstItem**()
>
> Gets the collection's first SVG.
> SVG **lastItem**()
>
> Gets the collection's final SVG.
> SVG **middleItem**()
>
> Gets the collection's middle SVG.
> SVG **previousItem**( SVG **obj** )
>
> Gets the SVG immediately before the specified SVG by index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SVG | obj | SVG index that follows the SVG you want returned. |

> SVG **nextItem**( SVG **obj** )
>
> Gets the SVG that comes after the specified SVG in collection order.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SVG | obj | SVG whose index is immediately before the SVG you want returned. |

> SVG **anyItem**()
>
> Gets any SVG from the collection.
> SVG **everyItem**()
>
> Gets all SVGs in the collection.
> String **toSource**()
>
> Builds executable source text that would resolve back to the SVG.
> SVG **[]**( Number **index** )
>
> Gets the SVG at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value to retrieve. |
