# Polygons, Position Attributes, Position, Positional Forms ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Polygons; PositionAttributes; Position; PositionalForms; PostScriptLevels; PPDValues — Class; Preference; Preferences; PreflightBookOption; PreflightLayerOptions; PreflightOption — Instance; PreflightProcess; PreflightProcesses; PreflightProfileOptions; PreflightProfileRule.

## Polygons

Polygon collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> Number **count**()
>
> Shows the Polygon element count.
> Polygon **add**( Layer **layer**, Number **numberOfSides**, Number **insetPercentage**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
>
> Creates a Polygon instance.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Layer | layer | Layer where the Polygon is created. (Optional) |
| Number | numberOfSides | Number of sides assigned to the Polygon. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | Star inset percentage used for the Polygon. (Optional) |
| LocationOptions | at | Insertion location for the Polygon, relative to the reference object or inside the container object. (Optional) |
| Mixed | reference | Reference object; when at is before or after, provide this parameter. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Starting property values for the new Polygon. (Optional) |

> Polygon **item**( Mixed **index** )
>
> Gets the Polygon identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Either the name or index. Can accept: Long Integer or String. |

> Polygon **itemByName**( String **name** )
>
> Gets the Polygon identified by the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> Polygon **itemByID**( Number **id** )
>
> Gets the Polygon identified by the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> Polygon **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Polygons included in the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Polygon, index, or name at the start of the range. Can accept: Polygon, Long Integer or String. |
| Mixed | to | Ending range value: Polygon, index, or name. Can accept: Polygon, Long Integer or String. |

> Polygon **firstItem**()
>
> Gets the first Polygon from the collection.
> Polygon **lastItem**()
>
> Gets the last Polygon from the collection.
> Polygon **middleItem**()
>
> Gets the middle Polygon from the collection.
> Polygon **previousItem**( Polygon **obj** )
>
> Gets the Polygon whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Polygon | obj | Index of the Polygon that follows the target Polygon. |

> Polygon **nextItem**( Polygon **obj** )
>
> Gets the Polygon whose index comes after the specified Polygon in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Polygon | obj | Polygon whose index precedes the target Polygon. |

> Polygon **anyItem**()
>
> Gets any Polygon from the collection.
> Polygon **everyItem**()
>
> Gets every Polygon from the collection.
> String **toSource**()
>
> Creates a string that, when executed, returns the Polygon.
> Polygon **[]**( Number **index** )
>
> Gets the Polygon identified by the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## PositionAttributes

Position attribute targeted for control.

### Class

> _Read Only_
>
> Number `X_ATTRIBUTE` = 1700282735
>
> Position X attribute.
> _Read Only_
>
> Number `Y_ATTRIBUTE` = 1700348271
>
> Position Y attribute.
> _Read Only_
>
> Number `BOTH_X_Y_ATTRIBUTE` = 1698855001
>
> Position attributes for both X and Y.

## Position

Options for text position.

### Class

> _Read Only_
>
> Number **NORMAL** = 1852797549
>
> Normal position.
> _Read Only_
>
> Number **SUPERSCRIPT** = 1936749411
>
> Applies superscript formatting to the text.
> _Read Only_
>
> Number **SUBSCRIPT** = 1935831907
>
> Applies subscript formatting to the text.
> _Read Only_
>
> Number `OT_SUPERSCRIPT` = 1884247155
>
> For OpenType fonts, uses raised glyphs when available; those glyphs are properly sized relative to nearby characters.
> _Read Only_
>
> Number `OT_SUBSCRIPT` = 1884247138
>
> For OpenType fonts, uses lowered glyphs when available; those glyphs are properly sized relative to nearby characters.
> _Read Only_
>
> Number `OT_NUMERATOR` = 1884247150
>
> For OpenType fonts, reduces the text size while aligning character tops to the main text top edge. Note: Applies only to numeric characters.
> _Read Only_
>
> Number `OT_DENOMINATOR` = 1884247140
>
> For OpenType fonts, reduces the text size while keeping it on the main text baseline. Note: Applies only to numeric characters.

## PositionalForms

Options for OpenType positional forms.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> No positional form.
> _Read Only_
>
> Number **CALCULATE** = 1634756205
>
> Calculated positional forms.
> _Read Only_
>
> Number **INITIAL** = 1768843636
>
> Initial positional form.
> _Read Only_
>
> Number **MEDIAL** = 1835361385
>
> Medial positional form.
> _Read Only_
>
> Number **FINAL** = 1718185569
>
> Final positional form.
> _Read Only_
>
> Number **ISOLATED** = 1769172844
>
> Isolated positional form.

## PostScriptLevels

Options for printer PostScript levels.

### Class

> _Read Only_
>
> Number `LEVEL_2` = 1347636274
>
> PostScript Level 2.
> _Read Only_
>
> Number `LEVEL_3` = 1347636275
>
> PostScript Level 3.

## PPDValues — Class

> _Read Only_
>
> Number `DEVICE_INDEPENDENT` = 1684367716
>
> Independent of device.

## Preference

Preferences object.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Preference parent; possible parent types are Application, Document, Book, DataMerge, XmlStory, Spread, FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting, FindChangeContentTransparencySetting, HtmlItem, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, FormField, Sound, Movie, MediaItem, EPSText, Polygon, GraphicLine, Rectangle, Oval, SplineItem, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Graphic, Group, EndnoteTextFrame, TextFrame, PageItem, PageItemDefault, TransparencySetting, StrokeTransparencySetting, FillTransparencySetting, ContentTransparencySetting, FindObjectPreference, ChangeObjectPreference, Story, TextVariable, TextWrapPreference, Page, Link, ObjectStyle, MasterSpread, NamedGrid, TextDefault, ParagraphStyle, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, Text, FindTextPreference, ChangeTextPreference, FindGrepPreference, ChangeGrepPreference, FindTransliteratePreference or ChangeTransliteratePreference.
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
> Property used to set multiple properties in one operation.

### Methods

> String **toSource**()
>
> Creates a string that, when executed, returns the Preference.
> Preference **getElements**()
>
> Resolves the object specifier and creates an array containing object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Attaches an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Detaches the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## Preferences

Collection containing preferences objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> Number **count**()
>
> Shows how many elements are in the Preference.
> Preference **item**( Mixed **index** )
>
> Gets the Preference identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Either the name or index. Can accept: Long Integer or String. |

> Preference **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Preferences included in the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Preference, index, or name at the start of the range. Can accept: Preference, Long Integer or String. |
| Mixed | to | Ending range value: Preference, index, or name. Can accept: Preference, Long Integer or String. |

> Preference **firstItem**()
>
> Gets the first Preference from the collection.
> Preference **lastItem**()
>
> Gets the last Preference from the collection.
> Preference **middleItem**()
>
> Gets the middle Preference from the collection.
> Preference **previousItem**( Preference **obj** )
>
> Gets the Preference whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Preference | obj | Index of the Preference that follows the target Preference. |

> Preference **nextItem**( Preference **obj** )
>
> Gets the Preference whose index comes after the specified Preference in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Preference | obj | Preference whose index precedes the target Preference. |

> Preference **anyItem**()
>
> Gets any Preference from the collection.
> Preference **everyItem**()
>
> Gets every Preference from the collection.
> String **toSource**()
>
> Creates a string that, when executed, returns the Preference.
> Preference **[]**( Number **index** )
>
> Gets the Preference identified by the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## PreflightBookOption

Options for book preflight.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> PreflightBookOption parent; possible parent types are Application or Book.
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
> Mixed **preflightScope**
>
> Pages or documents selected for preflight, given as either an enumeration or a string. In a string range, separate page numbers with a hyphen (-). For individual pages, separate page numbers with a comma (,). Can return: PreflightScopeOptions enumerator or String.
> PreflightLayerOptions **preflightWhichLayers**
>
> Layers selected for preflight.
> Boolean **preflightIncludeObjectsOnPasteboard**
>
> When true, pasteboard objects are included during preflight.
> Boolean **preflightIncludeNonprintingObjects**
>
> When true, objects that do not print are included during preflight.
> PreflightProfileOptions **preflightProfilePolicy**
>
> Policy used for preflight when a document or book is opened, including whether the embedded profile or another profile is used while preflight is enabled.
> Mixed **preflightWorkingProfile**
>
> Working preflight profile. Can return: PreflightProfile or String.
> Object **properties**
>
> Property used to set multiple properties in one operation.

### Methods

> String **toSource**()
>
> Creates a string that, when executed, returns the PreflightBookOption.
> PreflightBookOption **getElements**()
>
> Resolves the object specifier and creates an array containing object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Attaches an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Detaches the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## PreflightLayerOptions

Options for preflight layers.

### Class

> _Read Only_
>
> Number `PREFLIGHT_ALL_LAYERS` = 1886142796
>
> Runs preflight against every layer.
> _Read Only_
>
> Number `PREFLIGHT_VISIBLE_LAYERS` = 1886148172
>
> Runs preflight only on visible layers.
> _Read Only_
>
> Number `PREFLIGHT_VISIBLE_PRINTABLE_LAYERS` = 1886148176
>
> Runs preflight on layers that are both visible and printable.

## PreflightOption — Instance

> _Read Only_
>
> Boolean **isValid**
>
> true is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Identifies the PreflightOption parent, either a Application or Document.
> _Read Only_
>
> Events **events**
>
> Holds the event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Holds the event listener collection.
> Mixed **preflightScope**
>
> Chooses which pages or documents are preflighted, using either an enumeration or a string. In the string form, use a hyphen (-) between page numbers for a range. For separate pages, divide the page numbers with a comma (,). Can return: PreflightScopeOptions enumerator or String.
> PreflightLayerOptions **preflightWhichLayers**
>
> Chooses the layers included in preflight.
> Boolean **preflightIncludeObjectsOnPasteboard**
>
> When true, pasteboard objects are included during preflight.
> Boolean **preflightIncludeNonprintingObjects**
>
> When true, nonprinting objects are included during preflight.
> PreflightProfileOptions **preflightProfilePolicy**
>
> Controls the preflight policy used when a document or book opens, including whether active preflight uses the embedded profile or another profile.
> Mixed **preflightWorkingProfile**
>
> Specifies the working profile for preflight. Can return: PreflightProfile or String.
> Boolean **preflightEmbedWorkingProfile**
>
> When true, the working profile is embedded while a new document is created.
> Boolean **preflightOff**
>
> When true, preflight is disabled for every document or for this document.
> Object **properties**
>
> Enables several properties to be set in one operation.

### Methods

> String **toSource**()
>
> Builds a string that would return the PreflightOption if executed.
> PreflightOption **getElements**()
>
> Converts the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type value. |
| Mixed | handler | Handler invoked for the event. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type value. |
| Mixed | handler | Registered handler for the event. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## PreflightProcess

An active process for preflight.

### Instance

> _Read Only_
>
> Document **targetObject**
>
> Identifies the document inspected by the process.
> _Read Only_
>
> PreflightProfile **appliedProfile**
>
> Identifies the preflight profile used by the process.
> _Read Only_
>
> String **description**
>
> Holds the PreflightProcess description.
> _Read Only_
>
> String **processResults**
>
> Provides the process results as a large string.
> _Read Only_
>
> String **processInventory**
>
> Provides a string description of every element visited by the process.
> _Read Only_
>
> Mixed **aggregatedResults**
>
> Provides the process results in aggregated form. Can return: Ordered array containing documentName:String, profileName:String, results:Array of Ordered array containing parentNodeID:Long Integer, errorName:String, pageNumber:String, errorInfo:String, errorDetail:Array of Ordered array containing label:String, description:String.
> _Read Only_
>
> Boolean **isValid**
>
> true is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Identifies the PreflightProcess parent, a Application.
> _Read Only_
>
> Number **index**
>
> Gives the PreflightProcess position inside its containing object.
> _Read Only_
>
> Events **events**
>
> Holds the event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Holds the event listener collection.
> Object **properties**
>
> Enables several properties to be set in one operation.

### Methods

> **remove**()
>
> Removes the PreflightProcess.
> Boolean **waitForProcess**( Number **waitTime** )
>
> Pauses until the process finishes, optionally stopping after a maximum wait. During this interval, no cycles are given to other processes.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | waitTime | Maximum wait duration in seconds; when omitted, the wait continues until completion regardless of duration. (Optional) |

> **saveReport**( File **to**, Boolean **autoOpen** )
>
> Writes a report for the finished preflight process.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | Destination for the saved preflight report. |
| Boolean | autoOpen | When true, the report opens automatically after it is created. (Optional) |

> String **toSource**()
>
> Builds a string that would return the PreflightProcess if executed.
> PreflightProcess **getElements**()
>
> Converts the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type value. |
| Mixed | handler | Handler invoked for the event. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type value. |
| Mixed | handler | Registered handler for the event. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## PreflightProcesses

A collection containing preflight process objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Gives the collection's object count.

### Methods

> PreflightProcess **add**( Document **targetObject**, PreflightProfile **appliedProfile**, PreflightOption **preflightOptions**, Object **withProperties** )
>
> Creates a preflight process.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Document | targetObject | Document that the process should inspect. |
| PreflightProfile | appliedProfile | Preflight profile that the process should use. |
| PreflightOption | preflightOptions | Preflight options that the process should use. (Optional) |
| Object | withProperties | Starting property values for the new PreflightProcess (Optional) |

> Number **count**()
>
> Shows how many elements are in the PreflightProcess.
> PreflightProcess **item**( Mixed **index** )
>
> Gets the PreflightProcess at the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector. Can accept: Long Integer or String. |

> PreflightProcess **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the PreflightProcesses included in the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | PreflightProcess, index, or name that starts the range. Can accept: PreflightProcess, Long Integer or String. |
| Mixed | to | PreflightProcess, index, or name that ends the range. Can accept: PreflightProcess, Long Integer or String. |

> PreflightProcess **firstItem**()
>
> Gets the first PreflightProcess in the collection.
> PreflightProcess **lastItem**()
>
> Gets the last PreflightProcess in the collection.
> PreflightProcess **middleItem**()
>
> Gets the middle PreflightProcess in the collection.
> PreflightProcess **previousItem**( PreflightProcess **obj** )
>
> Gets the PreflightProcess immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PreflightProcess | obj | PreflightProcess index positioned after the desired PreflightProcess. |

> PreflightProcess **nextItem**( PreflightProcess **obj** )
>
> Gets the PreflightProcess immediately after the supplied PreflightProcess in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PreflightProcess | obj | PreflightProcess positioned before the desired PreflightProcess. |

> PreflightProcess **anyItem**()
>
> Gets any PreflightProcess in the collection.
> PreflightProcess **everyItem**()
>
> Gets every PreflightProcess in the collection.
> String **toSource**()
>
> Builds a string that would return the PreflightProcess if executed.
> PreflightProcess **[]**( Number **index** )
>
> Gets the PreflightProcess at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## PreflightProfileOptions

Options for preflight profiles.

### Class

> _Read Only_
>
> Number `USE_EMBEDDED_PROFILE` = 1885619533
>
> Runs preflight with the embedded profile.
> _Read Only_
>
> Number `USE_WORKING_PROFILE` = 1885622342
>
> Runs preflight with the working profile.

## PreflightProfileRule

A rule belonging to a preflight profile.

### Instance

> _Read Only_
>
> String **name**
>
> Gives the PreflightProfileRule name.
> _Read Only_
>
> String **id**
>
> Gives this rule's ID.
> _Read Only_
>
> String **description**
>
> Holds the PreflightProfileRule description.
> _Read Only_
>
> Boolean **isValid**
>
> true is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> PreflightProfile **parent**
>
> Identifies the PreflightProfileRule parent, a PreflightProfile.
> _Read Only_
>
> Number **index**
>
> Gives the PreflightProfileRule position inside its containing object.
> _Read Only_
>
> RuleDataObjects **ruleDataObjects**
>
> Holds a collection of prefight rule data objects.
> _Read Only_
>
> Events **events**
>
> Holds the event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Holds the event listener collection.
> PreflightRuleFlag **flag**
>
> Specifies whether the preflight rule is disabled or reports error, warning, or information-level feedback.
> String **label**
>
> Accepts any string value.
> Object **properties**
>
> Enables several properties to be set in one operation.

### Methods

> **remove**()
>
> Removes the PreflightProfileRule.
> **insertLabel**( String **key**, String **value** )
>
> Assigns the label value for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value assigned to the key. |

> String **extractLabel**( String **key** )
>
> Gets the label value for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |

> String **toSource**()
>
> Builds a string that would return the PreflightProfileRule if executed.
> PreflightProfileRule **getElements**()
>
> Converts the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type value. |
| Mixed | handler | Handler invoked for the event. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type value. |
| Mixed | handler | Registered handler for the event. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
