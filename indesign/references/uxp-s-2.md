# Shadow Mode, Show Hide Fields Behavior, Show Hide Fields Behaviors

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: ShadowMode; ShowHideFieldsBehavior; ShowHideFieldsBehaviors.

## ShadowMode

Options that control shadow mode.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> Applies no shadow.
> _Read Only_
>
> Number **DROP** = 2020623440
>
> Applies the normal blurred drop-shadow style.

## ShowHideFieldsBehavior

Object type for show/hide field behavior.

### Instance

> _Read Only_
>
> String **name**
>
> Name assigned to this ShowHideFieldsBehavior.
> _Read Only_
>
> Number **id**
>
> Unique identifier for this ShowHideFieldsBehavior.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Container for this ShowHideFieldsBehavior: Button, CheckBox, ComboBox, ListBox, RadioButton, TextBox, or SignatureField.
> _Read Only_
>
> Number **index**
>
> Position of this ShowHideFieldsBehavior inside its container.
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
> Mixed **fieldsToHide**
>
> Interactive objects that become hidden. Returns may include: Array of Buttons, CheckBoxes, ComboBoxes, ListBoxes, RadioButtons, TextBoxes or SignatureFields.
> Mixed **fieldsToShow**
>
> Interactive objects that become visible. Returns may include: Array of Buttons, CheckBoxes, ComboBoxes, ListBoxes, RadioButtons, TextBoxes or SignatureFields.
> Boolean **enableBehavior**
>
> True enables this behavior.
> BehaviorEvents **behaviorEvent**
>
> Event used to fire the behavior.
> String **label**
>
> Stores any string value.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> **remove**()
>
> Removes this ShowHideFieldsBehavior.
> **insertLabel**( String **key**, String **value** )
>
> Writes **value** into the label entry identified by **key**.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |
| String | value | Label value. |

> String **extractLabel**( String **key** )
>
> Reads the label value stored for **key**.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |

> String **toSource**()
>
> Produces executable source that recreates the ShowHideFieldsBehavior.
> ShowHideFieldsBehavior **getElements**()
>
> Resolves the specifier and returns object-reference array data.
> String **toSpecifier**()
>
> Returns the object specifier string.
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

## ShowHideFieldsBehaviors

Collection type containing show/hide field behavior objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> Number **count**()
>
> Reports how many ShowHideFieldsBehavior elements are present.
> ShowHideFieldsBehavior **add**( Object **withProperties** )
>
> Builds a new ShowHideFieldsBehavior.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new ShowHideFieldsBehavior. (Optional) |

> ShowHideFieldsBehavior **item**( Mixed **index** )
>
> Retrieves the ShowHideFieldsBehavior addressed by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Can accept: Long Integer or String; identifies the target by index or name. |

> ShowHideFieldsBehavior **itemByName**( String **name** )
>
> Retrieves the ShowHideFieldsBehavior whose name matches **name**.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> ShowHideFieldsBehavior **itemByID**( Number **id** )
>
> Retrieves the ShowHideFieldsBehavior whose ID matches **id**.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> ShowHideFieldsBehavior **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves ShowHideFieldsBehaviors across the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting ShowHideFieldsBehavior, index, or name for the range. Can accept: ShowHideFieldsBehavior, Long Integer or String. |
| Mixed | to | Ending ShowHideFieldsBehavior, index, or name for the range. Can accept: ShowHideFieldsBehavior, Long Integer or String. |

> ShowHideFieldsBehavior **firstItem**()
>
> Retrieves the first ShowHideFieldsBehavior in this collection.
> ShowHideFieldsBehavior **lastItem**()
>
> Retrieves the last ShowHideFieldsBehavior in this collection.
> ShowHideFieldsBehavior **middleItem**()
>
> Retrieves the middle ShowHideFieldsBehavior in this collection.
> ShowHideFieldsBehavior **previousItem**( ShowHideFieldsBehavior **obj** )
>
> Retrieves the ShowHideFieldsBehavior positioned before the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ShowHideFieldsBehavior | obj | Index of the ShowHideFieldsBehavior after the requested ShowHideFieldsBehavior. |

> ShowHideFieldsBehavior **nextItem**( ShowHideFieldsBehavior **obj** )
>
> Retrieves the ShowHideFieldsBehavior that follows the supplied ShowHideFieldsBehavior in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ShowHideFieldsBehavior | obj | ShowHideFieldsBehavior positioned before the requested ShowHideFieldsBehavior. |

> ShowHideFieldsBehavior **anyItem**()
>
> Retrieves any ShowHideFieldsBehavior from this collection.
> ShowHideFieldsBehavior **everyItem**()
>
> Retrieves every ShowHideFieldsBehavior from this collection.
> String **toSource**()
>
> Produces executable source that recreates the ShowHideFieldsBehavior.
> ShowHideFieldsBehavior **[]**( Number **index** )
>
> Retrieves the ShowHideFieldsBehavior at the requested index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Target index. |
