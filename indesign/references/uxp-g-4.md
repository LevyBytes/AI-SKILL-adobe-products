# Goto State Behavior, Goto State Behaviors, Goto Url Behavior, Goto Url Behaviors ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: GotoStateBehavior; GotoStateBehaviors; GotoURLBehavior; GotoURLBehaviors; GpuPerformancePreference; GrabberPreference — Instance; GradientFeatherSetting — Instance; GradientStop; GradientStops; GradientType.

## GotoStateBehavior

Behavior that navigates to a state.

### Instance

> _Read Only_
>
> String **name**
>
> Name assigned to the GotoStateBehavior.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the GotoStateBehavior.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Button **parent**
>
> Parent object for the GotoStateBehavior (a Button).
> _Read Only_
>
> Number **index**
>
> Position of the GotoStateBehavior inside its containing object.
> _Read Only_
>
> Events **events**
>
> Event collection exposed by this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection exposed by this object.
> MultiStateObject **associatedMultiStateObject**
>
> Associated multi-state object page item.
> String **stateName**
>
> State name in the associated multi-state object.
> Boolean **goBackOnRollOff**
>
> When true, roll off for the rollover event automatically returns to the prior state.
> Boolean **enableBehavior**
>
> When true, this behavior is enabled.
> BehaviorEvents **behaviorEvent**
>
> Event that triggers this behavior.
> String **label**
>
> String property available for arbitrary text.
> Object **properties**
>
> Object property for setting multiple properties in one assignment.

### Methods

> **remove**()
>
> Deletes this GotoStateBehavior.
> **insertLabel**( String **key**, String **value** )
>
> Stores the supplied value under the specified label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Reads the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |

> String **toSource**()
>
> Produces an executable string representation that resolves back to the GotoStateBehavior.
> GotoStateBehavior **getElements**()
>
> Resolves the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type value. |
| Mixed | handler | Handler target. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type value. |
| Mixed | handler | Registered handler target. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## GotoStateBehaviors

Collection containing goto state behaviors.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection size reported as an object count.

### Methods

> Number **count**()
>
> Reports how many elements the GotoStateBehavior collection contains.
> GotoStateBehavior **add**( Object **withProperties** )
>
> Constructs another GotoStateBehavior.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Optional property values to apply when creating the new GotoStateBehavior. |

> GotoStateBehavior **item**( Mixed **index** )
>
> Fetches the GotoStateBehavior identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Can accept: Long Integer or String. |

> GotoStateBehavior **itemByName**( String **name** )
>
> Fetches the GotoStateBehavior identified by the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> GotoStateBehavior **itemByID**( Number **id** )
>
> Fetches the GotoStateBehavior identified by the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> GotoStateBehavior **itemByRange**( Mixed **from**, Mixed **to** )
>
> Fetches the GotoStateBehaviors covered by the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Start of the range, supplied as a GotoStateBehavior, index, or name. Can accept: GotoStateBehavior, Long Integer or String. |
| Mixed | to | End of the range, supplied as a GotoStateBehavior, index, or name. Can accept: GotoStateBehavior, Long Integer or String. |

> GotoStateBehavior **firstItem**()
>
> Fetches the first GotoStateBehavior from the collection.
> GotoStateBehavior **lastItem**()
>
> Fetches the last GotoStateBehavior from the collection.
> GotoStateBehavior **middleItem**()
>
> Fetches the middle GotoStateBehavior from the collection.
> GotoStateBehavior **previousItem**( GotoStateBehavior **obj** )
>
> Fetches the GotoStateBehavior positioned just before the supplied GotoStateBehavior.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| GotoStateBehavior | obj | Object whose position follows the GotoStateBehavior to retrieve. |

> GotoStateBehavior **nextItem**( GotoStateBehavior **obj** )
>
> Fetches the GotoStateBehavior positioned just after the supplied GotoStateBehavior.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| GotoStateBehavior | obj | Object whose position comes before the GotoStateBehavior to retrieve. |

> GotoStateBehavior **anyItem**()
>
> Fetches one GotoStateBehavior from the collection.
> GotoStateBehavior **everyItem**()
>
> Fetches all GotoStateBehavior objects in the collection.
> String **toSource**()
>
> Produces an executable string representation that resolves back to the GotoStateBehavior.
> GotoStateBehavior **[]**( Number **index** )
>
> Fetches the GotoStateBehavior at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## GotoURLBehavior

Behavior object used to jump to a URL.

### Instance

> _Read Only_
>
> String **name**
>
> Name assigned to the GotoURLBehavior.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the GotoURLBehavior.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the GotoURLBehavior. Possible parent classes: Button, CheckBox, ComboBox, ListBox, RadioButton, TextBox, SignatureField.
> _Read Only_
>
> Number **index**
>
> Position of the GotoURLBehavior inside its containing object.
> _Read Only_
>
> Events **events**
>
> Event collection exposed by this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection exposed by this object.
> String **url**
>
> URL value.
> Boolean **enableBehavior**
>
> When true, this behavior is enabled.
> BehaviorEvents **behaviorEvent**
>
> Event that triggers this behavior.
> String **label**
>
> String property available for arbitrary text.
> Object **properties**
>
> Object property for setting multiple properties in one assignment.

### Methods

> **remove**()
>
> Deletes this GotoURLBehavior.
> **insertLabel**( String **key**, String **value** )
>
> Stores the supplied value under the specified label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Reads the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |

> String **toSource**()
>
> Produces an executable string representation that resolves back to the GotoURLBehavior.
> GotoURLBehavior **getElements**()
>
> Resolves the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type value. |
| Mixed | handler | Handler target. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type value. |
| Mixed | handler | Registered handler target. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## GotoURLBehaviors

Collection containing goto URL behavior objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection size reported as an object count.

### Methods

> Number **count**()
>
> Reports how many elements the GotoURLBehavior collection contains.
> GotoURLBehavior **add**( Object **withProperties** )
>
> Constructs another GotoURLBehavior.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Optional property values to apply when creating the new GotoURLBehavior. |

> GotoURLBehavior **item**( Mixed **index** )
>
> Fetches the GotoURLBehavior identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Can accept: Long Integer or String. |

> GotoURLBehavior **itemByName**( String **name** )
>
> Fetches the GotoURLBehavior identified by the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> GotoURLBehavior **itemByID**( Number **id** )
>
> Fetches the GotoURLBehavior identified by the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> GotoURLBehavior **itemByRange**( Mixed **from**, Mixed **to** )
>
> Fetches the GotoURLBehaviors covered by the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Start of the range, supplied as a GotoURLBehavior, index, or name. Can accept: GotoURLBehavior, Long Integer or String. |
| Mixed | to | End of the range, supplied as a GotoURLBehavior, index, or name. Can accept: GotoURLBehavior, Long Integer or String. |

> GotoURLBehavior **firstItem**()
>
> Fetches the first GotoURLBehavior from the collection.
> GotoURLBehavior **lastItem**()
>
> Fetches the last GotoURLBehavior from the collection.
> GotoURLBehavior **middleItem**()
>
> Fetches the middle GotoURLBehavior from the collection.
> GotoURLBehavior **previousItem**( GotoURLBehavior **obj** )
>
> Fetches the GotoURLBehavior positioned just before the supplied GotoURLBehavior.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| GotoURLBehavior | obj | Object whose position follows the GotoURLBehavior to retrieve. |

> GotoURLBehavior **nextItem**( GotoURLBehavior **obj** )
>
> Fetches the GotoURLBehavior positioned just after the supplied GotoURLBehavior.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| GotoURLBehavior | obj | Object whose position comes before the GotoURLBehavior to retrieve. |

> GotoURLBehavior **anyItem**()
>
> Fetches one GotoURLBehavior from the collection.
> GotoURLBehavior **everyItem**()
>
> Fetches all GotoURLBehavior objects in the collection.
> String **toSource**()
>
> Produces an executable string representation that resolves back to the GotoURLBehavior.
> GotoURLBehavior **[]**( Number **index** )
>
> Fetches the GotoURLBehavior at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## GpuPerformancePreference

Application GPU performance preference settings.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for the GpuPerformancePreference (a Application).
> _Read Only_
>
> Events **events**
>
> Event collection exposed by this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection exposed by this object.
> Boolean **enableGpuPerformance**
>
> When true, GPU performance is enabled.
> Boolean **enableAnimatedZoom**
>
> When true, animated zoom is enabled.
> Object **properties**
>
> Object property for setting multiple properties in one assignment.

### Methods

> String **toSource**()
>
> Produces an executable string representation that resolves back to the GpuPerformancePreference.
> GpuPerformancePreference **getElements**()
>
> Resolves the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type value. |
| Mixed | handler | Handler target. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type value. |
| Mixed | handler | Registered handler target. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## GrabberPreference — Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for the GrabberPreference (a Application).
> _Read Only_
>
> Events **events**
>
> Event collection exposed by this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection exposed by this object.
> PanningTypes **grabberPanning**
>
> Display performance quality to apply while scrolling.
> Object **properties**
>
> Object property for setting multiple properties in one assignment.

### Methods

> String **toSource**()
>
> Produces an executable string representation that resolves back to the GrabberPreference.
> GrabberPreference **getElements**()
>
> Resolves the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type value. |
| Mixed | handler | Handler target. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type value. |
| Mixed | handler | Registered handler target. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## GradientFeatherSetting — Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the GradientFeatherSetting (a TransparencySetting, StrokeTransparencySetting, FillTransparencySetting or ContentTransparencySetting).
> _Read Only_
>
> OpacityGradientStops **opacityGradientStops**
>
> Collection of opacity gradient stops.
> _Read Only_
>
> Events **events**
>
> Event collection exposed by this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection exposed by this object.
> Boolean **applied**
>
> When true, the gradient feather effect is applied.
> GradientType **type**
>
> Gradient type value.
> Number **angle**
>
> Angle used by the gradient feather.
> Measurement Unit (Number or String)=any **length**
>
> Axial gradient length, or radial gradient radius.
> Measurement Unit (Number or String)=any **gradientStart**
>
> Center point for a radial gradient or start point for a linear gradient, using page coordinates in [x, y] format.
> Number **hiliteAngle**
>
> Hilite angle used by the radial gradient feather.
> Measurement Unit (Number or String)=any **hiliteLength**
>
> Hilite length used by the radial gradient feather.
> Object **properties**
>
> Object property for setting multiple properties in one assignment.

### Methods

> String **toSource**()
>
> Produces an executable string representation that resolves back to the GradientFeatherSetting.
> GradientFeatherSetting **getElements**()
>
> Resolves the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type value. |
| Mixed | handler | Handler target. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type value. |
| Mixed | handler | Registered handler target. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## GradientStop

Gradient stop within a gradient.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Gradient **parent**
>
> Parent object for the GradientStop (a Gradient).
> _Read Only_
>
> Number **index**
>
> Position of the GradientStop inside its containing object.
> _Read Only_
>
> Events **events**
>
> Event collection exposed by this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection exposed by this object.
> Mixed **stopColor**
>
> Swatch applied to the gradient stop, including color, gradient, tint, or mixed ink. Can return: MixedInk or Color.
> Number **location**
>
> Gradient stop starting position as a percentage of the gradient length. (Range: 0 to 100).
> Number **midpoint**
>
> Gradient stop mid-point as a percentage of the gradient length. (Range: 13 to 87)
> Object **properties**
>
> Object property for setting multiple properties in one assignment.

### Methods

> **remove**()
>
> Deletes this GradientStop.
> String **toSource**()
>
> Produces an executable string representation that resolves back to the GradientStop.
> GradientStop **getElements**()
>
> Resolves the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type value. |
| Mixed | handler | Handler target. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type value. |
| Mixed | handler | Registered handler target. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## GradientStops

Collection containing gradient stops.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection size reported as an object count.

### Methods

> GradientStop **add**( Object **withProperties** )
>
> Constructs another GradientStop.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Optional property values to apply when creating the new GradientStop. |

> Number **count**()
>
> Reports how many elements the GradientStop collection contains.
> GradientStop **item**( Mixed **index** )
>
> Fetches the GradientStop identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Can accept: Long Integer or String. |

> GradientStop **itemByRange**( Mixed **from**, Mixed **to** )
>
> Fetches the GradientStops covered by the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Start of the range, supplied as a GradientStop, index, or name. Can accept: GradientStop, Long Integer or String. |
| Mixed | to | End of the range, supplied as a GradientStop, index, or name. Can accept: GradientStop, Long Integer or String. |

> GradientStop **firstItem**()
>
> Fetches the first GradientStop from the collection.
> GradientStop **lastItem**()
>
> Fetches the last GradientStop from the collection.
> GradientStop **middleItem**()
>
> Fetches the middle GradientStop from the collection.
> GradientStop **previousItem**( GradientStop **obj** )
>
> Fetches the GradientStop positioned just before the supplied GradientStop.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| GradientStop | obj | Object whose position follows the GradientStop to retrieve. |

> GradientStop **nextItem**( GradientStop **obj** )
>
> Fetches the GradientStop positioned just after the supplied GradientStop.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| GradientStop | obj | Object whose position comes before the GradientStop to retrieve. |

> GradientStop **anyItem**()
>
> Fetches one GradientStop from the collection.
> GradientStop **everyItem**()
>
> Fetches all GradientStop objects in the collection.
> String **toSource**()
>
> Produces an executable string representation that resolves back to the GradientStop.
> GradientStop **[]**( Number **index** )
>
> Fetches the GradientStop at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## GradientType

Options for gradient type selection.

### Class

> _Read Only_
>
> Number **LINEAR** = 1635282023
>
> Linear gradient option.
> _Read Only_
>
> Number **RADIAL** = 1918985319
>
> Radial gradient option.
