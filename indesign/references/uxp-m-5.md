# Mojikumi Table, Mojikumi Tables, Mojikumi Ui Preference, Mono Bitmap Compression ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: MojikumiTable; MojikumiTables; MojikumiUiPreference; MonoBitmapCompression; MotionPreset; MotionPresets; MovieBehavior; MovieBehaviors; MoviePlayOperations — Class; MoviePosterTypes.

## MojikumiTable

Represents the mojikumi table.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the MojikumiTable.
> _Read Only_
>
> Boolean **isValid**
>
> True indicates that the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the MojikumiTable (a Document or Application).
> _Read Only_
>
> Number **index**
>
> Position of the MojikumiTable inside its containing object.
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
> String **name**
>
> Name assigned to the MojikumiTable.
> MojikumiTableDefaults **basedOnMojikumiSet**
>
> Existing mojikumi set used as the basis for the new mojikumi set.
> Mixed **overrideMojikumiAkiList**
>
> For aki, supplies mojikumi override data. Can return: Ordered array containing targetMojikumiClass:Short Integer, sideMojikumiClass:Short Integer, sideIsAfterTarget:Boolean, minimum:Real, desired:Real, maximum:Real, compressionPriority:Short Integer, akiDoesNotFloat:Boolean.
> String **label**
>
> Settable string label property.
> Object **properties**
>
> Allows several properties to be assigned in one operation.

### Methods

> **remove**()
>
> Removes the MojikumiTable.
> **insertLabel**( String **key**, String **value** )
>
> Stores the value under the specified key in the label.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to address. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Retrieves the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to look up. |

> String **toSource**()
>
> Produces executable source text that evaluates back to the MojikumiTable.
> MojikumiTable **getElements**()
>
> Resolves the object specifier and returns object references as an array.
> String **toSpecifier**()
>
> Returns the object's specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
| Mixed | handler | Handler invoked for the event. Can accept: File or JavaScript Function. |
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

## MojikumiTables

Represents a collection of mojikumi tables.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count in the collection.

### Methods

> MojikumiTable **add**( String **name**, Object **withProperties** )
>
> Adds a mojikumi table.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name assigned to the new mojikumi table. |
| Object | withProperties | Initial property values for the new MojikumiTable. (Optional) |

> Number **count**()
>
> Reports how many elements are in the MojikumiTable.
> MojikumiTable **item**( Mixed **index** )
>
> Retrieves the MojikumiTable identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name selector. Can accept: Long Integer or String. |

> MojikumiTable **itemByName**( String **name** )
>
> Retrieves the MojikumiTable that has the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> MojikumiTable **itemByID**( Number **id** )
>
> Retrieves the MojikumiTable that has the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> MojikumiTable **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the MojikumiTables within the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Start-of-range selector. Can accept: MojikumiTable, Long Integer or String. |
| Mixed | to | End-of-range selector. Can accept: MojikumiTable, Long Integer or String. |

> MojikumiTable **firstItem**()
>
> Selects the collection's first MojikumiTable.
> MojikumiTable **lastItem**()
>
> Selects the collection's last MojikumiTable.
> MojikumiTable **middleItem**()
>
> Selects the collection's middle MojikumiTable.
> MojikumiTable **previousItem**( MojikumiTable **obj** )
>
> Gets the MojikumiTable whose index precedes the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| MojikumiTable | obj | MojikumiTable whose index comes immediately after the target MojikumiTable. |

> MojikumiTable **nextItem**( MojikumiTable **obj** )
>
> Gets the collection member located after the specified MojikumiTable.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| MojikumiTable | obj | MojikumiTable whose index comes immediately before the target MojikumiTable. |

> MojikumiTable **anyItem**()
>
> Selects any MojikumiTable in the collection.
> MojikumiTable **everyItem**()
>
> Selects every MojikumiTable in the collection.
> String **toSource**()
>
> Produces executable source text that evaluates back to the MojikumiTable.
> MojikumiTable **[]**( Number **index** )
>
> Retrieves the MojikumiTable at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to retrieve. |

## MojikumiUiPreference

Mojikumi UI preferences.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True indicates that the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the MojikumiUiPreference (a Document or Application).
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
> Boolean **lineEndAllOneHalfEm**
>
> When true, half-width spacing is applied to all characters.
> Boolean **oneEmIndentLineEndUkeOneHalfEm**
>
> When true, lines are indented one space and use line end uke one half space.
> Boolean **oneOrOneHalfEmIndentLineEndUkeOneHalfEm**
>
> When true, lines receive one full-space or half-space indentation and use line end uke one half space.
> Boolean **oneOrOneHalfEmIndentLineEndAllOneEm**
>
> When true, all characters use full-width spacing except the line's final character, which may use full- or half-width spacing.
> Boolean **oneEmIndentLineEndAllOneEm**
>
> When true, lines receive one full-space indentation and all characters use full-width spacing.
> Boolean **oneEmIndentLineEndAllNoFloat**
>
> When true, lines receive one full-space indentation and no-float spacing applies to all characters.
> Boolean **oneEmIndentLineEndUkeNoFloat**
>
> When true, lines receive one full-space indentation and use line end uke no float.
> Boolean **oneOrOneHalfEmIndentLineEndUkeNoFloat**
>
> When true, lines receive half-space or one full-space indentation and use line end uke no float.
> Boolean **oneEmIndentLineEndAllOneHalfEm**
>
> When true, lines receive one full-space indentation and all characters use half-width spacing.
> Boolean **lineEndAllOneEm**
>
> When true, full-width spacing is applied to all characters.
> Boolean **lineEndUkeNoFloat**
>
> When true, line end uke no float is used.
> Boolean **oneOrOneHalfEmIndentLineEndPeriodOneEm**
>
> When true, lines receive one-space or one-half-space indentation, and punctuation plus the line's final character use full-width spacing.
> Boolean **oneEmIndentLineEndPeriodOneEm**
>
> When true, lines receive one-space indentation, and punctuation plus the line's final character use full-width spacing.
> Boolean **lineEndPeriodOneEm**
>
> When true, punctuation and the line's final character use full-width spacing.
> Object **properties**
>
> Allows several properties to be assigned in one operation.

### Methods

> String **toSource**()
>
> Produces executable source text that evaluates back to the MojikumiUiPreference.
> MojikumiUiPreference **getElements**()
>
> Resolves the object specifier and returns object references as an array.
> String **toSpecifier**()
>
> Returns the object's specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
| Mixed | handler | Handler invoked for the event. Can accept: File or JavaScript Function. |
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

## MonoBitmapCompression

Compression amount and mode for monochrome bitmap images.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> Applies no compression.
> _Read Only_
>
> Number **CCIT3** = 1128879155
>
> Applies CCITT Group 3 compression.
> _Read Only_
>
> Number **CCIT4** = 1128879156
>
> Applies CCITT Group 4 compression.
> _Read Only_
>
> Number **ZIP** = 2053730371
>
> Applies ZIP compression.
> _Read Only_
>
> Number `RUN_LENGTH` = 1919839299
>
> Applies Run Length compression.

## MotionPreset

Represents a Motion preset Object.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique identifier assigned to the MotionPreset.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the MotionPreset, either Application or Document.
> _Read Only_
>
> Number **index**
>
> Position of the MotionPreset inside its containing object.
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
> Name assigned to the MotionPreset.
> String **contents**
>
> Raw data for the motion preset.
> String **label**
>
> Stores caller-defined string data.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> **remove**()
>
> Removes the MotionPreset.
> **saveACopy**( File **to** )
>
> Writes this motion preset into an InDesign motion preset file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | Destination Flash motion preset file for the export. |

> MotionPreset **duplicate**( String **name** )
>
> Creates a duplicate motion preset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to use for the duplicated motion preset. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Stores value on the label entry identified by key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key for the label entry. |
| String | value | Value for the label entry. |

> String **extractLabel**( String **key** )
>
> Reads the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key for the label entry. |

> String **toSource**()
>
> Builds source text that, when executed, returns the MotionPreset.
> MotionPreset **getElements**()
>
> Resolves the object specifier into an array of object references.
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
| Mixed | handler | Event handler; accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler; accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## MotionPresets

Collection containing Motion presets.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in the collection.

### Methods

> MotionPreset **add**( Object **withProperties** )
>
> Creates a MotionPreset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new MotionPreset. (Optional) |

> Number **count**()
>
> Reports how many elements are in the MotionPreset.
> MotionPreset **item**( Mixed **index** )
>
> Gets the MotionPreset identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Selector. Accepts Long Integer or String. |

> MotionPreset **itemByName**( String **name** )
>
> Gets the MotionPreset with this name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> MotionPreset **itemByID**( Number **id** )
>
> Gets the MotionPreset with this ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> MotionPreset **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the MotionPresets inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, given as MotionPreset, Long Integer or String. |
| Mixed | to | Range end, given as MotionPreset, Long Integer or String. |

> MotionPreset **firstItem**()
>
> Gets the first MotionPreset in the collection.
> MotionPreset **lastItem**()
>
> Gets the last MotionPreset in the collection.
> MotionPreset **middleItem**()
>
> Gets the middle MotionPreset in the collection.
> MotionPreset **previousItem**( MotionPreset **obj** )
>
> Gets the MotionPreset whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| MotionPreset | obj | Index of the MotionPreset after the desired MotionPreset. |

> MotionPreset **nextItem**( MotionPreset **obj** )
>
> Gets the MotionPreset whose index comes after the specified MotionPreset in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| MotionPreset | obj | MotionPreset whose index precedes the desired MotionPreset. |

> MotionPreset **anyItem**()
>
> Gets any MotionPreset in the collection.
> MotionPreset **everyItem**()
>
> Gets every MotionPreset in the collection.
> String **toSource**()
>
> Builds source text that, when executed, returns the MotionPreset.
> MotionPreset **[]**( Number **index** )
>
> Gets the MotionPreset at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to resolve. |

## MovieBehavior

Movie behavior object.

### Instance

> _Read Only_
>
> String **name**
>
> Name assigned to the MovieBehavior.
> _Read Only_
>
> Number **id**
>
> Unique identifier assigned to the MovieBehavior.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the MovieBehavior, either Button, CheckBox, ComboBox, ListBox, RadioButton, TextBox or SignatureField.
> _Read Only_
>
> Number **index**
>
> Position of the MovieBehavior inside its containing object.
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
> Movie **movieItem**
>
> Movie page item.
> Number **navigationPointID**
>
> ID of the navigation point used as the playback start point. Operations other than Play From Navigation Point ignore this property.
> MoviePlayOperations **operation**
>
> Playback mode.
> Boolean **enableBehavior**
>
> True means this behavior is enabled.
> BehaviorEvents **behaviorEvent**
>
> Event that triggers the behavior.
> String **label**
>
> Stores caller-defined string data.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> **remove**()
>
> Removes the MovieBehavior.
> **insertLabel**( String **key**, String **value** )
>
> Stores value on the label entry identified by key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key for the label entry. |
| String | value | Value for the label entry. |

> String **extractLabel**( String **key** )
>
> Reads the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key for the label entry. |

> String **toSource**()
>
> Builds source text that, when executed, returns the MovieBehavior.
> MovieBehavior **getElements**()
>
> Resolves the object specifier into an array of object references.
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
| Mixed | handler | Event handler; accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler; accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## MovieBehaviors

Collection containing movie behavior objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in the collection.

### Methods

> Number **count**()
>
> Reports how many elements are in the MovieBehavior.
> MovieBehavior **add**( Object **withProperties** )
>
> Creates a MovieBehavior.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new MovieBehavior. (Optional) |

> MovieBehavior **item**( Mixed **index** )
>
> Gets the MovieBehavior identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Selector. Accepts Long Integer or String. |

> MovieBehavior **itemByName**( String **name** )
>
> Gets the MovieBehavior with this name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> MovieBehavior **itemByID**( Number **id** )
>
> Gets the MovieBehavior with this ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> MovieBehavior **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the MovieBehaviors inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, given as MovieBehavior, Long Integer or String. |
| Mixed | to | Range end, given as MovieBehavior, Long Integer or String. |

> MovieBehavior **firstItem**()
>
> Gets the first MovieBehavior in the collection.
> MovieBehavior **lastItem**()
>
> Gets the last MovieBehavior in the collection.
> MovieBehavior **middleItem**()
>
> Gets the middle MovieBehavior in the collection.
> MovieBehavior **previousItem**( MovieBehavior **obj** )
>
> Gets the MovieBehavior whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| MovieBehavior | obj | Index of the MovieBehavior after the desired MovieBehavior. |

> MovieBehavior **nextItem**( MovieBehavior **obj** )
>
> Gets the MovieBehavior whose index comes after the specified MovieBehavior in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| MovieBehavior | obj | MovieBehavior whose index precedes the desired MovieBehavior. |

> MovieBehavior **anyItem**()
>
> Gets any MovieBehavior in the collection.
> MovieBehavior **everyItem**()
>
> Gets every MovieBehavior in the collection.
> String **toSource**()
>
> Builds source text that, when executed, returns the MovieBehavior.
> MovieBehavior **[]**( Number **index** )
>
> Gets the MovieBehavior at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to resolve. |

## MoviePlayOperations — Class

> _Read Only_
>
> Number **PLAY** = 1886151033
>
> Begins playback.
> _Read Only_
>
> Number `PLAY_FROM_NAVIGATION_POINT` = 1886154358
>
> Begins playback at the specified navigation point.
> _Read Only_
>
> Number **STOP** = 1937010544
>
> Ends playback.
> _Read Only_
>
> Number **PAUSE** = 1885435251
>
> Suspends playback.
> _Read Only_
>
> Number **RESUME** = 1919251317
>
> Continues playback.
> _Read Only_
>
> Number `STOP_ALL` = 1937010785
>
> Ends all playback (SWF only).

## MoviePosterTypes

Graphic type used for the movie poster.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> None.
> _Read Only_
>
> Number **STANDARD** = 2020623970
>
> Selects the generic movie poster image file.
> _Read Only_
>
> Number `FROM_MOVIE` = 1298558310
>
> Selects a movie-file image.
> _Read Only_
>
> Number `PROXY_IMAGE` = 1299216505
>
> (Read-only) Reports whether the movie poster is not the standard, generic image.
