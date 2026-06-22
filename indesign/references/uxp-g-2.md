# Goto Last Page Behavior, Goto Last Page Behaviors, Goto Next Page Behavior, Goto Next Page Behaviors ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: GotoLastPageBehavior; GotoLastPageBehaviors; GotoNextPageBehavior; GotoNextPageBehaviors; GotoNextStateBehavior; GotoNextStateBehaviors; GotoNextViewBehavior; GotoNextViewBehaviors.

## GotoLastPageBehavior

Behavior object used to move to the document's last page.

### Instance

> _Read Only_
>
> String **name**
>
> Name assigned to the GotoLastPageBehavior.
> _Read Only_
>
> Number **id**
>
> Unique identifier for the GotoLastPageBehavior.
> _Read Only_
>
> Boolean **isValid**
>
> true indicates that the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Owning object. Can be: Button, CheckBox, ComboBox, ListBox, RadioButton, TextBox or SignatureField.
> _Read Only_
>
> Number **index**
>
> Position of the GotoLastPageBehavior inside its containing object.
> _Read Only_
>
> Events **events**
>
> Event collection for this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection for this object.
> GoToZoomOptions **zoomSetting**
>
> Zoom option to apply.
> Boolean **enableBehavior**
>
> When true, this behavior is active.
> BehaviorEvents **behaviorEvent**
>
> Event that starts the behavior.
> String **label**
>
> User-settable string property.
> Object **properties**
>
> Property bag for setting several values in one operation.

### Methods

> **remove**()
>
> Removes the GotoLastPageBehavior.
> **insertLabel**( String **key**, String **value** )
>
> Stores the specified value under the supplied label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |
| String | value | Label value. |

> String **extractLabel**( String **key** )
>
> Retrieves the value stored for the specified label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |

> String **toSource**()
>
> Produces a string that can be executed to recreate the GotoLastPageBehavior.
> GotoLastPageBehavior **getElements**()
>
> Resolves the object specifier and returns an array of object references.
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

## GotoLastPageBehaviors

Collection containing goto last page behavior objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> Number **count**()
>
> Shows how many elements the GotoLastPageBehavior collection contains.
> GotoLastPageBehavior **add**( Object **withProperties** )
>
> Builds a new GotoLastPageBehavior.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new GotoLastPageBehavior (Optional) |

> GotoLastPageBehavior **item**( Mixed **index** )
>
> Gets the GotoLastPageBehavior identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Lookup key, either numeric or named. Can accept: Long Integer or String. |

> GotoLastPageBehavior **itemByName**( String **name** )
>
> Gets the GotoLastPageBehavior using the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> GotoLastPageBehavior **itemByID**( Number **id** )
>
> Gets the GotoLastPageBehavior using the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> GotoLastPageBehavior **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the GotoLastPageBehaviors that fall inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as a GotoLastPageBehavior, index, or name. Can accept: GotoLastPageBehavior, Long Integer or String. |
| Mixed | to | Range end, supplied as a GotoLastPageBehavior, index, or name. Can accept: GotoLastPageBehavior, Long Integer or String. |

> GotoLastPageBehavior **firstItem**()
>
> Gets the first GotoLastPageBehavior in the collection.
> GotoLastPageBehavior **lastItem**()
>
> Gets the last GotoLastPageBehavior in the collection.
> GotoLastPageBehavior **middleItem**()
>
> Gets the middle GotoLastPageBehavior in the collection.
> GotoLastPageBehavior **previousItem**( GotoLastPageBehavior **obj** )
>
> Gets the GotoLastPageBehavior positioned immediately before the specified object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| GotoLastPageBehavior | obj | GotoLastPageBehavior index that comes after the desired GotoLastPageBehavior. |

> GotoLastPageBehavior **nextItem**( GotoLastPageBehavior **obj** )
>
> Gets the GotoLastPageBehavior positioned immediately after the specified object in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| GotoLastPageBehavior | obj | GotoLastPageBehavior whose index precedes the desired GotoLastPageBehavior. |

> GotoLastPageBehavior **anyItem**()
>
> Gets any GotoLastPageBehavior from the collection.
> GotoLastPageBehavior **everyItem**()
>
> Gets every GotoLastPageBehavior from the collection.
> String **toSource**()
>
> Produces a string that can be executed to recreate the GotoLastPageBehavior.
> GotoLastPageBehavior **[]**( Number **index** )
>
> Gets the GotoLastPageBehavior at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## GotoNextPageBehavior

Behavior object used to move to the next page in the document.

### Instance

> _Read Only_
>
> String **name**
>
> Name assigned to the GotoNextPageBehavior.
> _Read Only_
>
> Number **id**
>
> Unique identifier for the GotoNextPageBehavior.
> _Read Only_
>
> Boolean **isValid**
>
> true indicates that the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Owning object. Can be: Button, CheckBox, ComboBox, ListBox, RadioButton, TextBox or SignatureField.
> _Read Only_
>
> Number **index**
>
> Position of the GotoNextPageBehavior inside its containing object.
> _Read Only_
>
> Events **events**
>
> Event collection for this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection for this object.
> GoToZoomOptions **zoomSetting**
>
> Zoom option to apply.
> Boolean **enableBehavior**
>
> When true, this behavior is active.
> BehaviorEvents **behaviorEvent**
>
> Event that starts the behavior.
> String **label**
>
> User-settable string property.
> Object **properties**
>
> Property bag for setting several values in one operation.

### Methods

> **remove**()
>
> Removes the GotoNextPageBehavior.
> **insertLabel**( String **key**, String **value** )
>
> Stores the specified value under the supplied label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |
| String | value | Label value. |

> String **extractLabel**( String **key** )
>
> Retrieves the value stored for the specified label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |

> String **toSource**()
>
> Produces a string that can be executed to recreate the GotoNextPageBehavior.
> GotoNextPageBehavior **getElements**()
>
> Resolves the object specifier and returns an array of object references.
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

## GotoNextPageBehaviors

Collection containing goto next page behavior objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> Number **count**()
>
> Shows how many elements the GotoNextPageBehavior collection contains.
> GotoNextPageBehavior **add**( Object **withProperties** )
>
> Builds a new GotoNextPageBehavior.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new GotoNextPageBehavior (Optional) |

> GotoNextPageBehavior **item**( Mixed **index** )
>
> Gets the GotoNextPageBehavior identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Lookup key, either numeric or named. Can accept: Long Integer or String. |

> GotoNextPageBehavior **itemByName**( String **name** )
>
> Gets the GotoNextPageBehavior using the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> GotoNextPageBehavior **itemByID**( Number **id** )
>
> Gets the GotoNextPageBehavior using the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> GotoNextPageBehavior **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the GotoNextPageBehaviors that fall inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as a GotoNextPageBehavior, index, or name. Can accept: GotoNextPageBehavior, Long Integer or String. |
| Mixed | to | Range end, supplied as a GotoNextPageBehavior, index, or name. Can accept: GotoNextPageBehavior, Long Integer or String. |

> GotoNextPageBehavior **firstItem**()
>
> Gets the first GotoNextPageBehavior in the collection.
> GotoNextPageBehavior **lastItem**()
>
> Gets the last GotoNextPageBehavior in the collection.
> GotoNextPageBehavior **middleItem**()
>
> Gets the middle GotoNextPageBehavior in the collection.
> GotoNextPageBehavior **previousItem**( GotoNextPageBehavior **obj** )
>
> Gets the GotoNextPageBehavior positioned immediately before the specified object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| GotoNextPageBehavior | obj | GotoNextPageBehavior index that comes after the desired GotoNextPageBehavior. |

> GotoNextPageBehavior **nextItem**( GotoNextPageBehavior **obj** )
>
> Gets the GotoNextPageBehavior positioned immediately after the specified object in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| GotoNextPageBehavior | obj | GotoNextPageBehavior whose index precedes the desired GotoNextPageBehavior. |

> GotoNextPageBehavior **anyItem**()
>
> Gets any GotoNextPageBehavior from the collection.
> GotoNextPageBehavior **everyItem**()
>
> Gets every GotoNextPageBehavior from the collection.
> String **toSource**()
>
> Produces a string that can be executed to recreate the GotoNextPageBehavior.
> GotoNextPageBehavior **[]**( Number **index** )
>
> Gets the GotoNextPageBehavior at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## GotoNextStateBehavior

Goto next state behavior object.

### Instance

> _Read Only_
>
> String **name**
>
> Name assigned to the GotoNextStateBehavior.
> _Read Only_
>
> Number **id**
>
> Unique identifier for the GotoNextStateBehavior.
> _Read Only_
>
> Boolean **isValid**
>
> true indicates that the object specifier resolves to valid objects.
> _Read Only_
>
> Button **parent**
>
> Parent that owns the GotoNextStateBehavior (a Button).
> _Read Only_
>
> Number **index**
>
> Position of the GotoNextStateBehavior inside its containing object.
> _Read Only_
>
> Events **events**
>
> Event collection for this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection for this object.
> MultiStateObject **associatedMultiStateObject**
>
> Page item for the associated multi-state object.
> Boolean **loopsToNextOrPrevious**
>
> When true, state navigation loops to the next or previous state.
> Boolean **enableBehavior**
>
> When true, this behavior is active.
> BehaviorEvents **behaviorEvent**
>
> Event that starts the behavior.
> String **label**
>
> User-settable string property.
> Object **properties**
>
> Property bag for setting several values in one operation.

### Methods

> **remove**()
>
> Removes the GotoNextStateBehavior.
> **insertLabel**( String **key**, String **value** )
>
> Stores the specified value under the supplied label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |
| String | value | Label value. |

> String **extractLabel**( String **key** )
>
> Retrieves the value stored for the specified label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |

> String **toSource**()
>
> Produces a string that can be executed to recreate the GotoNextStateBehavior.
> GotoNextStateBehavior **getElements**()
>
> Resolves the object specifier and returns an array of object references.
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

## GotoNextStateBehaviors

GotoNextStateBehaviors is the collection container for goto next state behavior entries.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by this collection.

### Methods

> Number **count**()
>
> Reports how many elements are present for GotoNextStateBehavior.
> GotoNextStateBehavior **add**( Object **withProperties** )
>
> Builds another GotoNextStateBehavior entry.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Property defaults applied when the new GotoNextStateBehavior is created (Optional) |

> GotoNextStateBehavior **item**( Mixed **index** )
>
> Retrieves a GotoNextStateBehavior by its index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name selector. Can accept: Long Integer or String. |

> GotoNextStateBehavior **itemByName**( String **name** )
>
> Retrieves a GotoNextStateBehavior by matching its name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name selector. |

> GotoNextStateBehavior **itemByID**( Number **id** )
>
> Retrieves a GotoNextStateBehavior by matching its ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID selector. |

> GotoNextStateBehavior **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the GotoNextStateBehaviors covered by the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting GotoNextStateBehavior, index, or name for the range. Can accept: GotoNextStateBehavior, Long Integer or String. |
| Mixed | to | Ending GotoNextStateBehavior, index, or name for the range. Can accept: GotoNextStateBehavior, Long Integer or String. |

> GotoNextStateBehavior **firstItem**()
>
> Retrieves the collection's first GotoNextStateBehavior.
> GotoNextStateBehavior **lastItem**()
>
> Retrieves the collection's last GotoNextStateBehavior.
> GotoNextStateBehavior **middleItem**()
>
> Retrieves the collection's middle GotoNextStateBehavior.
> GotoNextStateBehavior **previousItem**( GotoNextStateBehavior **obj** )
>
> Retrieves the GotoNextStateBehavior positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| GotoNextStateBehavior | obj | GotoNextStateBehavior index that follows the requested GotoNextStateBehavior. |

> GotoNextStateBehavior **nextItem**( GotoNextStateBehavior **obj** )
>
> Retrieves the GotoNextStateBehavior whose collection position follows the provided GotoNextStateBehavior.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| GotoNextStateBehavior | obj | GotoNextStateBehavior placed just before the requested GotoNextStateBehavior. |

> GotoNextStateBehavior **anyItem**()
>
> Retrieves one arbitrary GotoNextStateBehavior from the collection.
> GotoNextStateBehavior **everyItem**()
>
> Retrieves all GotoNextStateBehavior entries in the collection.
> String **toSource**()
>
> Produces a string that can recreate the GotoNextStateBehavior when run.
> GotoNextStateBehavior **[]**( Number **index** )
>
> Retrieves a GotoNextStateBehavior by the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index selector. |

## GotoNextViewBehavior

GotoNextViewBehavior defines a behavior object for moving to the next view.

### Instance

> _Read Only_
>
> String **name**
>
> Name assigned to the GotoNextViewBehavior.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the GotoNextViewBehavior.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent may be a Button, CheckBox, ComboBox, ListBox, RadioButton, TextBox or SignatureField for the GotoNextViewBehavior.
> _Read Only_
>
> Number **index**
>
> Position of the GotoNextViewBehavior inside its containing object.
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
> GoToZoomOptions **zoomSetting**
>
> Zoom option value.
> Boolean **enableBehavior**
>
> True means the behavior is active.
> BehaviorEvents **behaviorEvent**
>
> Event used to trigger the behavior.
> String **label**
>
> String-valued property available for caller-defined data.
> Object **properties**
>
> Property bundle for setting several values in one operation.

### Methods

> **remove**()
>
> Removes the GotoNextViewBehavior.
> **insertLabel**( String **key**, String **value** )
>
> Stores the label value under the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |
| String | value | Label value. |

> String **extractLabel**( String **key** )
>
> Reads the label value stored for the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |

> String **toSource**()
>
> Produces a string that can recreate the GotoNextViewBehavior when run.
> GotoNextViewBehavior **getElements**()
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
| String | eventType | Event type. |
| Mixed | handler | Event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type already registered. |
| Mixed | handler | Event handler already registered. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## GotoNextViewBehaviors

GotoNextViewBehaviors is the collection container for goto next view behavior objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by this collection.

### Methods

> Number **count**()
>
> Reports how many elements are present for GotoNextViewBehavior.
> GotoNextViewBehavior **add**( Object **withProperties** )
>
> Builds another GotoNextViewBehavior entry.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Property defaults applied when the new GotoNextViewBehavior is created (Optional) |

> GotoNextViewBehavior **item**( Mixed **index** )
>
> Retrieves a GotoNextViewBehavior by its index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name selector. Can accept: Long Integer or String. |

> GotoNextViewBehavior **itemByName**( String **name** )
>
> Retrieves a GotoNextViewBehavior by matching its name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name selector. |

> GotoNextViewBehavior **itemByID**( Number **id** )
>
> Retrieves a GotoNextViewBehavior by matching its ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID selector. |

> GotoNextViewBehavior **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the GotoNextViewBehaviors covered by the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting GotoNextViewBehavior, index, or name for the range. Can accept: GotoNextViewBehavior, Long Integer or String. |
| Mixed | to | Ending GotoNextViewBehavior, index, or name for the range. Can accept: GotoNextViewBehavior, Long Integer or String. |

> GotoNextViewBehavior **firstItem**()
>
> Retrieves the collection's first GotoNextViewBehavior.
> GotoNextViewBehavior **lastItem**()
>
> Retrieves the collection's last GotoNextViewBehavior.
> GotoNextViewBehavior **middleItem**()
>
> Retrieves the collection's middle GotoNextViewBehavior.
> GotoNextViewBehavior **previousItem**( GotoNextViewBehavior **obj** )
>
> Retrieves the GotoNextViewBehavior positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| GotoNextViewBehavior | obj | GotoNextViewBehavior index that follows the requested GotoNextViewBehavior. |

> GotoNextViewBehavior **nextItem**( GotoNextViewBehavior **obj** )
>
> Retrieves the GotoNextViewBehavior whose collection position follows the provided GotoNextViewBehavior.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| GotoNextViewBehavior | obj | GotoNextViewBehavior placed just before the requested GotoNextViewBehavior. |

> GotoNextViewBehavior **anyItem**()
>
> Retrieves one arbitrary GotoNextViewBehavior from the collection.
> GotoNextViewBehavior **everyItem**()
>
> Retrieves all GotoNextViewBehavior entries in the collection.
> String **toSource**()
>
> Produces a string that can recreate the GotoNextViewBehavior when run.
> GotoNextViewBehavior **[]**( Number **index** )
>
> Retrieves a GotoNextViewBehavior by the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index selector. |
