# Goto Page Behavior, Goto Page Behaviors, Goto Previous Page Behavior, Goto Previous Page Behaviors ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: GotoPageBehavior; GotoPageBehaviors; GotoPreviousPageBehavior; GotoPreviousPageBehaviors; GotoPreviousStateBehavior; GotoPreviousStateBehaviors; GotoPreviousViewBehavior; GotoPreviousViewBehaviors.

## GotoPageBehavior

GotoPageBehavior defines a behavior object for navigating to a particular document page.

### Instance

> _Read Only_
>
> String **name**
>
> Name assigned to the GotoPageBehavior.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the GotoPageBehavior.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Button **parent**
>
> Parent object for the GotoPageBehavior (a Button).
> _Read Only_
>
> Number **index**
>
> Position of the GotoPageBehavior inside its containing object.
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
> Number **pageNumber**
>
> Page destination as an index, with 1 representing the first page.
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
> Removes the GotoPageBehavior.
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
> Produces a string that can recreate the GotoPageBehavior when run.
> GotoPageBehavior **getElements**()
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

## GotoPageBehaviors

GotoPageBehaviors is the collection container for go to page behavior objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by this collection.

### Methods

> Number **count**()
>
> Reports how many elements are present for GotoPageBehavior.
> GotoPageBehavior **add**( Object **withProperties** )
>
> Builds another GotoPageBehavior entry.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Property defaults applied when the new GotoPageBehavior is created (Optional) |

> GotoPageBehavior **item**( Mixed **index** )
>
> Retrieves a GotoPageBehavior by its index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name selector. Can accept: Long Integer or String. |

> GotoPageBehavior **itemByName**( String **name** )
>
> Retrieves a GotoPageBehavior by matching its name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name selector. |

> GotoPageBehavior **itemByID**( Number **id** )
>
> Retrieves a GotoPageBehavior by matching its ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID selector. |

> GotoPageBehavior **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the GotoPageBehaviors covered by the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting GotoPageBehavior, index, or name for the range. Can accept: GotoPageBehavior, Long Integer or String. |
| Mixed | to | Ending GotoPageBehavior, index, or name for the range. Can accept: GotoPageBehavior, Long Integer or String. |

> GotoPageBehavior **firstItem**()
>
> Retrieves the collection's first GotoPageBehavior.
> GotoPageBehavior **lastItem**()
>
> Retrieves the collection's last GotoPageBehavior.
> GotoPageBehavior **middleItem**()
>
> Retrieves the collection's middle GotoPageBehavior.
> GotoPageBehavior **previousItem**( GotoPageBehavior **obj** )
>
> Retrieves the GotoPageBehavior positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| GotoPageBehavior | obj | GotoPageBehavior index that follows the requested GotoPageBehavior. |

> GotoPageBehavior **nextItem**( GotoPageBehavior **obj** )
>
> Retrieves the GotoPageBehavior whose collection position follows the provided GotoPageBehavior.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| GotoPageBehavior | obj | GotoPageBehavior placed just before the requested GotoPageBehavior. |

> GotoPageBehavior **anyItem**()
>
> Retrieves one arbitrary GotoPageBehavior from the collection.
> GotoPageBehavior **everyItem**()
>
> Retrieves all GotoPageBehavior entries in the collection.
> String **toSource**()
>
> Produces a string that can recreate the GotoPageBehavior when run.
> GotoPageBehavior **[]**( Number **index** )
>
> Retrieves a GotoPageBehavior by the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index selector. |

## GotoPreviousPageBehavior

GotoPreviousPageBehavior defines a behavior object for navigating to the previous document page.

### Instance

> _Read Only_
>
> String **name**
>
> Name assigned to the GotoPreviousPageBehavior.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the GotoPreviousPageBehavior.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent may be a Button, CheckBox, ComboBox, ListBox, RadioButton, TextBox or SignatureField for the GotoPreviousPageBehavior.
> _Read Only_
>
> Number **index**
>
> Position of the GotoPreviousPageBehavior inside its containing object.
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
> Removes the GotoPreviousPageBehavior.
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
> Produces a string that can recreate the GotoPreviousPageBehavior when run.
> GotoPreviousPageBehavior **getElements**()
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

## GotoPreviousPageBehaviors

GotoPreviousPageBehaviors is the collection container for goto previous page behavior objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by this collection.

### Methods

> Number **count**()
>
> Reports how many elements are present for GotoPreviousPageBehavior.
> GotoPreviousPageBehavior **add**( Object **withProperties** )
>
> Builds another GotoPreviousPageBehavior entry.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Property defaults applied when the new GotoPreviousPageBehavior is created (Optional) |

> GotoPreviousPageBehavior **item**( Mixed **index** )
>
> Retrieves a GotoPreviousPageBehavior by its index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name selector. Can accept: Long Integer or String. |

> GotoPreviousPageBehavior **itemByName**( String **name** )
>
> Retrieves a GotoPreviousPageBehavior by matching its name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name selector. |

> GotoPreviousPageBehavior **itemByID**( Number **id** )
>
> Retrieves a GotoPreviousPageBehavior by matching its ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID selector. |

> GotoPreviousPageBehavior **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the GotoPreviousPageBehaviors covered by the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting GotoPreviousPageBehavior, index, or name for the range. Can accept: GotoPreviousPageBehavior, Long Integer or String. |
| Mixed | to | Ending GotoPreviousPageBehavior, index, or name for the range. Can accept: GotoPreviousPageBehavior, Long Integer or String. |

> GotoPreviousPageBehavior **firstItem**()
>
> Retrieves the collection's first GotoPreviousPageBehavior.
> GotoPreviousPageBehavior **lastItem**()
>
> Retrieves the collection's last GotoPreviousPageBehavior.
> GotoPreviousPageBehavior **middleItem**()
>
> Retrieves the collection's middle GotoPreviousPageBehavior.
> GotoPreviousPageBehavior **previousItem**( GotoPreviousPageBehavior **obj** )
>
> Retrieves the GotoPreviousPageBehavior positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| GotoPreviousPageBehavior | obj | GotoPreviousPageBehavior index that follows the requested GotoPreviousPageBehavior. |

> GotoPreviousPageBehavior **nextItem**( GotoPreviousPageBehavior **obj** )
>
> Retrieves the GotoPreviousPageBehavior whose collection position follows the provided GotoPreviousPageBehavior.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| GotoPreviousPageBehavior | obj | GotoPreviousPageBehavior placed just before the requested GotoPreviousPageBehavior. |

> GotoPreviousPageBehavior **anyItem**()
>
> Retrieves one arbitrary GotoPreviousPageBehavior from the collection.
> GotoPreviousPageBehavior **everyItem**()
>
> Retrieves all GotoPreviousPageBehavior entries in the collection.
> String **toSource**()
>
> Produces a string that can recreate the GotoPreviousPageBehavior when run.
> GotoPreviousPageBehavior **[]**( Number **index** )
>
> Retrieves a GotoPreviousPageBehavior by the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index selector. |

## GotoPreviousStateBehavior

GotoPreviousStateBehavior represents a goto previous state behavior.

### Instance

> _Read Only_
>
> String **name**
>
> Name assigned to the GotoPreviousStateBehavior.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the GotoPreviousStateBehavior.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Button **parent**
>
> Parent object for the GotoPreviousStateBehavior (a Button).
> _Read Only_
>
> Number **index**
>
> Position of the GotoPreviousStateBehavior inside its containing object.
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
> MultiStateObject **associatedMultiStateObject**
>
> Associated page item for the multi-state object.
> Boolean **loopsToNextOrPrevious**
>
> True enables looping to the next or previous state.
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
> Removes the GotoPreviousStateBehavior.
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
> Produces a string that can recreate the GotoPreviousStateBehavior when run.
> GotoPreviousStateBehavior **getElements**()
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

## GotoPreviousStateBehaviors

GotoPreviousStateBehaviors is the collection container for goto previous state behavior entries.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by this collection.

### Methods

> Number **count**()
>
> Reports how many elements are present for GotoPreviousStateBehavior.
> GotoPreviousStateBehavior **add**( Object **withProperties** )
>
> Builds another GotoPreviousStateBehavior entry.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Property defaults applied when the new GotoPreviousStateBehavior is created (Optional) |

> GotoPreviousStateBehavior **item**( Mixed **index** )
>
> Retrieves a GotoPreviousStateBehavior by its index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name selector. Can accept: Long Integer or String. |

> GotoPreviousStateBehavior **itemByName**( String **name** )
>
> Retrieves a GotoPreviousStateBehavior by matching its name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name selector. |

> GotoPreviousStateBehavior **itemByID**( Number **id** )
>
> Retrieves a GotoPreviousStateBehavior by matching its ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID selector. |

> GotoPreviousStateBehavior **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the GotoPreviousStateBehaviors covered by the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting GotoPreviousStateBehavior, index, or name for the range. Can accept: GotoPreviousStateBehavior, Long Integer or String. |
| Mixed | to | Ending GotoPreviousStateBehavior, index, or name for the range. Can accept: GotoPreviousStateBehavior, Long Integer or String. |

> GotoPreviousStateBehavior **firstItem**()
>
> Retrieves the collection's first GotoPreviousStateBehavior.
> GotoPreviousStateBehavior **lastItem**()
>
> Retrieves the collection's last GotoPreviousStateBehavior.
> GotoPreviousStateBehavior **middleItem**()
>
> Retrieves the collection's middle GotoPreviousStateBehavior.
> GotoPreviousStateBehavior **previousItem**( GotoPreviousStateBehavior **obj** )
>
> Retrieves the GotoPreviousStateBehavior positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| GotoPreviousStateBehavior | obj | GotoPreviousStateBehavior index that follows the requested GotoPreviousStateBehavior. |

> GotoPreviousStateBehavior **nextItem**( GotoPreviousStateBehavior **obj** )
>
> Retrieves the GotoPreviousStateBehavior whose collection position follows the provided GotoPreviousStateBehavior.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| GotoPreviousStateBehavior | obj | GotoPreviousStateBehavior placed just before the requested GotoPreviousStateBehavior. |

> GotoPreviousStateBehavior **anyItem**()
>
> Retrieves one arbitrary GotoPreviousStateBehavior from the collection.
> GotoPreviousStateBehavior **everyItem**()
>
> Retrieves all GotoPreviousStateBehavior entries in the collection.
> String **toSource**()
>
> Produces a string that can recreate the GotoPreviousStateBehavior when run.
> GotoPreviousStateBehavior **[]**( Number **index** )
>
> Retrieves a GotoPreviousStateBehavior by the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index selector. |

## GotoPreviousViewBehavior

GotoPreviousViewBehavior defines a behavior object for moving to the previous view.

### Instance

> _Read Only_
>
> String **name**
>
> Name assigned to the GotoPreviousViewBehavior.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the GotoPreviousViewBehavior.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent may be a Button, CheckBox, ComboBox, ListBox, RadioButton, TextBox or SignatureField for the GotoPreviousViewBehavior.
> _Read Only_
>
> Number **index**
>
> Position of the GotoPreviousViewBehavior inside its containing object.
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
> Removes the GotoPreviousViewBehavior.
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
> Produces a string that can recreate the GotoPreviousViewBehavior when run.
> GotoPreviousViewBehavior **getElements**()
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

## GotoPreviousViewBehaviors

Collection containing goto previous view behavior objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection size reported as an object count.

### Methods

> Number **count**()
>
> Reports how many elements the GotoPreviousViewBehavior collection contains.
> GotoPreviousViewBehavior **add**( Object **withProperties** )
>
> Constructs another GotoPreviousViewBehavior.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Optional property values to apply when creating the new GotoPreviousViewBehavior. |

> GotoPreviousViewBehavior **item**( Mixed **index** )
>
> Fetches the GotoPreviousViewBehavior identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Can accept: Long Integer or String. |

> GotoPreviousViewBehavior **itemByName**( String **name** )
>
> Fetches the GotoPreviousViewBehavior identified by the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> GotoPreviousViewBehavior **itemByID**( Number **id** )
>
> Fetches the GotoPreviousViewBehavior identified by the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> GotoPreviousViewBehavior **itemByRange**( Mixed **from**, Mixed **to** )
>
> Fetches the GotoPreviousViewBehaviors covered by the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Start of the range, supplied as a GotoPreviousViewBehavior, index, or name. Can accept: GotoPreviousViewBehavior, Long Integer or String. |
| Mixed | to | End of the range, supplied as a GotoPreviousViewBehavior, index, or name. Can accept: GotoPreviousViewBehavior, Long Integer or String. |

> GotoPreviousViewBehavior **firstItem**()
>
> Fetches the first GotoPreviousViewBehavior from the collection.
> GotoPreviousViewBehavior **lastItem**()
>
> Fetches the last GotoPreviousViewBehavior from the collection.
> GotoPreviousViewBehavior **middleItem**()
>
> Fetches the middle GotoPreviousViewBehavior from the collection.
> GotoPreviousViewBehavior **previousItem**( GotoPreviousViewBehavior **obj** )
>
> Fetches the GotoPreviousViewBehavior positioned just before the supplied GotoPreviousViewBehavior.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| GotoPreviousViewBehavior | obj | Object whose position follows the GotoPreviousViewBehavior to retrieve. |

> GotoPreviousViewBehavior **nextItem**( GotoPreviousViewBehavior **obj** )
>
> Fetches the GotoPreviousViewBehavior positioned just after the supplied GotoPreviousViewBehavior.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| GotoPreviousViewBehavior | obj | Object whose position comes before the GotoPreviousViewBehavior to retrieve. |

> GotoPreviousViewBehavior **anyItem**()
>
> Fetches one GotoPreviousViewBehavior from the collection.
> GotoPreviousViewBehavior **everyItem**()
>
> Fetches all GotoPreviousViewBehavior objects in the collection.
> String **toSource**()
>
> Produces an executable string representation that resolves back to the GotoPreviousViewBehavior.
> GotoPreviousViewBehavior **[]**( Number **index** )
>
> Fetches the GotoPreviousViewBehavior at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |
