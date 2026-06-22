# Sampling, Satin Setting, Save Options, Scale Modes ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Sampling; SatinSetting — Instance; SaveOptions; ScaleModes; Screeening; ScreenModeOptions; ScriptArg; ScriptLanguage; ScriptMenuAction; ScriptMenuActions; ScriptPreference; SearchModes; SearchStrategies; Section — Instance; Sections; SelectAll — Class; SelectionOptions; Sequences.

## Sampling

Resampling method setting.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> Applies no resampling.
> _Read Only_
>
> Number **DOWNSAMPLE** = 1684951917
>
> Computes the average color of pixels within a sample area, then uses that average color for the whole area.
> _Read Only_
>
> Number **SUBSAMPLE** = 1935823725
>
> Selects the center pixel from the sample area and uses that pixel color for the whole area.
> _Read Only_
>
> Number `BICUBIC_DOWNSAMPLE` = 1650742125
>
> Determines pixel color through a weighted average.

## SatinSetting — Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the SatinSetting (a TransparencySetting, StrokeTransparencySetting, FillTransparencySetting or ContentTransparencySetting).
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
> Boolean **applied**
>
> When true, turns on the satin effect.
> Swatch **effectColor**
>
> Color for the satin effect. Supply one of these forms: a color library color, a hex value, an array of color values, or a swatch such as color, gradient, tint, or mixed ink. The active color mode determines array contents: RGB uses three values, 0 to 255 for each, in the format [R,G,B]; CMYK uses four percentage values, 0 to 100 for each, in the format [C,M,Y,K]; LAB uses three values in the format [L,A,B], with L from 0 to 100 and A and B from -128 to 127; HSB uses three colors in the format [H,S,B], with H from 0 to 360 and S and B as percentages from 0 to 100.
> BlendMode **blendMode**
>
> Blend mode applied to the satin effect.
> Number **opacity**
>
> Satin effect opacity (as a percentage). (Range: 0 to 100)
> Number **angle**
>
> Satin effect light angle. (Range: -360 to 360)
> Measurement Unit (Number or String)=any **distance**
>
> Distance (in pixels) between the SatinSetting and the satin effect.
> Measurement Unit (Number or String)=any **size**
>
> Satin effect width (in pixels).
> Boolean **invertEffect**
>
> When true, reverses the satin effect.
> Object **properties**
>
> Property for setting several properties together.

### Methods

> String **toSource**()
>
> Builds a string that, when run, returns the SatinSetting.
> SatinSetting **getElements**()
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
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## SaveOptions

Choices for saving a document before closing it or quitting.

### Class

> _Read Only_
>
> Number **NO** = 1852776480
>
> Leaves changes unsaved.
> _Read Only_
>
> Number **ASK** = 1634954016
>
> Shows a prompt asking whether changes should be saved.
> _Read Only_
>
> Number **YES** = 2036691744
>
> Saves the changes.

## ScaleModes

Page-scaling choices.

### Class

> _Read Only_
>
> Number `SCALE_WIDTH_HEIGHT` = 1935898745
>
> Scales both page width and page height.
> _Read Only_
>
> Number `SCALE_TO_FIT` = 1935897702
>
> Fits the page to the paper by scaling it. Note: applies only when tile is false.

## Screeening

Settings that control ink screening for composite gray output in PostScript or PDF format.

### Class

> _Read Only_
>
> Number `DEFAULT_VALUE` = 1147563124
>
> Applies the default screening settings.
> _Read Only_
>
> Number **CUSTOM** = 1131639917
>
> Applies custom ink angle and frequency screening settings. For details, see composite angle and composite frequency.

## ScreenModeOptions

Screen mode choices.

### Class

> _Read Only_
>
> Number `PREVIEW_OFF` = 1936552047
>
> Normal view; guides and frame edges are shown.
> _Read Only_
>
> Number `PREVIEW_TO_PAGE` = 1936552048
>
> Preview mode; shows the document as it will print, with guides and frame edges hidden.
> _Read Only_
>
> Number `PREVIEW_TO_BLEED` = 1936552034
>
> Preview mode that includes the bleed area.
> _Read Only_
>
> Number `PREVIEW_TO_SLUG` = 1936552051
>
> Preview mode that includes the slug area.
> _Read Only_
>
> Number `PRESENTATION_PREVIEW` = 1936552046
>
> Preview mode with editing disabled. Mouse clicks and arrow keys move to the previous or next spread.

## ScriptArg

Values passed to a script as arguments.

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
> Parent object of the ScriptArg (a Application).
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
> Property for setting several properties together.

### Methods

> String **get**( String **name** )
>
> Gets a script argument value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Script argument name. |

> String **getValue**( String **name** )
>
> Gets a script argument value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Script argument name. |

> **set**( String **name**, String **value** )
>
> Sets a script argument value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Script argument name. |
| String | value | Value to store. |

> **setValue**( String **name**, String **value** )
>
> Sets a script argument value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Script argument name. |
| String | value | Value to store. |

> Boolean **isDefined**( String **name** )
>
> Checks whether a script argument is defined.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Script argument name. |

> **clear**()
>
> Clears every script argument.
> **save**()
>
> Saves the script arguments.
> **restore**()
>
> Restores every script argument.
> String **toSource**()
>
> Builds a string that, when run, returns the ScriptArg.
> ScriptArg **getElements**()
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
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## ScriptLanguage

Specifies the scripting language used for execution.

### Class

> _Read Only_
>
> Number **UNKNOWN** = 1433299822
>
> No language has been specified.
> _Read Only_
>
> Number `VISUAL_BASIC` = 1447185511
>
> Selects VBScript as the language.
> _Read Only_
>
> Number **UXPSCRIPT** = 1431522407
>
> Selects UxpScript as the language.
> _Read Only_
>
> Number **JAVASCRIPT** = 1246973031
>
> Selects JavaScript as the language.
> _Read Only_
>
> Number `APPLESCRIPT_LANGUAGE` = 1095978087
>
> Selects AppleScript as the language.

## ScriptMenuAction

Represents one script menu action.

### Class

> _Read Only_
>
> String `ON_INVOKE` = onInvoke
>
> Sent when the ScriptMenuAction is invoked; it neither bubbles nor can be canceled.
> _Read Only_
>
> String `BEFORE_DISPLAY` = beforeDisplay
>
> Sent before the ScriptMenuAction appears; it neither bubbles nor can be canceled.
> _Read Only_
>
> String `BEFORE_INVOKE` = beforeInvoke
>
> Sent before the ScriptMenuAction is invoked; it does not bubble and can be canceled.
> _Read Only_
>
> String `AFTER_INVOKE` = afterInvoke
>
> Sent after the ScriptMenuAction is invoked; it neither bubbles nor can be canceled.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the ScriptMenuAction.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for the ScriptMenuAction, which is a Application.
> _Read Only_
>
> Number **index**
>
> Position of the ScriptMenuAction inside its containing object.
> _Read Only_
>
> Events **events**
>
> Collection containing events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection containing event listeners.
> String **name**
>
> Name assigned to the ScriptMenuAction.
> String **title**
>
> Display-facing ScriptMenuAction name for the user interface. Ampersand characters (&) are included in the title; on Windows OS, one marks the next character for underlining so Alt-key menu navigation can use it. Use doubled ampersands to show a literal ampersand in the name. Mac OS strips and ignores those extra ampersand characters.
> String **area**
>
> Menu action area.
> Boolean **enabled**
>
> When true, the ScriptMenuAction is enabled.
> Boolean **checked**
>
> When true, the menu item tied to the menu action is checked.
> String **label**
>
> String-valued property available for arbitrary labels.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> **remove**()
>
> Removes the ScriptMenuAction.
> **invoke**()
>
> Runs the action.
> **insertLabel**( String **key**, String **value** )
>
> Stores the supplied value as a label for the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | The key. |
| String | value | The value. |

> String **extractLabel**( String **key** )
>
> Gets the label value for that key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | The key. |

> String **toSource**()
>
> Builds a string that returns the ScriptMenuAction if executed.
> ScriptMenuAction **getElements**()
>
> Resolves the object specifier into object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Connects event handling.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Disconnects event handling.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The registered event type. |
| Mixed | handler | The registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

## ScriptMenuActions

Collection containing script menu actions.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection size.

### Methods

> ScriptMenuAction **add**( String **title**, Object **withProperties** )
>
> Creates a ScriptMenuAction.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | title | The name of the ScriptMenuAction for display in the user interface. The title includes any ampersand characters (&), which are used to tell the Windows OS to underline the following character in the name for use with the Alt key to navigate to a menu item. Double ampersands are used to display an actual ampersand character in the name. The Mac OS ignores and removes the extra ampersand characters. (Optional) |
| Object | withProperties | Initial values for properties of the new ScriptMenuAction (Optional) |

> Number **count**()
>
> Displays how many elements are in the ScriptMenuAction.
> ScriptMenuAction **item**( Mixed **index** )
>
> Fetches the ScriptMenuAction selected by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | The index or name. Can accept: Long Integer or String. |

> ScriptMenuAction **itemByName**( String **name** )
>
> Returns the ScriptMenuAction with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | The name. |

> ScriptMenuAction **itemByID**( Number **id** )
>
> Returns the ScriptMenuAction with the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | The ID. |

> ScriptMenuAction **itemByRange**( Mixed **from**, Mixed **to** )
>
> Fetches ScriptMenuActions bounded by the supplied range endpoints.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | The ScriptMenuAction, index, or name at the beginning of the range. Can accept: ScriptMenuAction, Long Integer or String. |
| Mixed | to | The ScriptMenuAction, index, or name at the end of the range. Can accept: ScriptMenuAction, Long Integer or String. |

> ScriptMenuAction **firstItem**()
>
> Returns the first ScriptMenuAction in the collection.
> ScriptMenuAction **lastItem**()
>
> Returns the last ScriptMenuAction in the collection.
> ScriptMenuAction **middleItem**()
>
> Returns the middle ScriptMenuAction in the collection.
> ScriptMenuAction **previousItem**( ScriptMenuAction **obj** )
>
> Fetches the ScriptMenuAction immediately before the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ScriptMenuAction | obj | The index of the ScriptMenuAction that follows the desired ScriptMenuAction. |

> ScriptMenuAction **nextItem**( ScriptMenuAction **obj** )
>
> Fetches the collection item immediately after the supplied ScriptMenuAction.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ScriptMenuAction | obj | The ScriptMenuAction whose index comes before the desired ScriptMenuAction. |

> ScriptMenuAction **anyItem**()
>
> Returns any ScriptMenuAction from the collection.
> ScriptMenuAction **everyItem**()
>
> Returns every ScriptMenuAction in the collection.
> String **toSource**()
>
> Builds a string that returns the ScriptMenuAction if executed.
> ScriptMenuAction **[]**( Number **index** )
>
> Fetches the ScriptMenuAction at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | The index. |

## ScriptPreference

Preferences for the scripting environment.

### Instance

> _Read Only_
>
> File **scriptsFolder**
>
> Path to the application's Scripts folder.
> _Read Only_
>
> Mixed **scriptsList**
>
> Returns scripts contained in the Scripts folder; possible result type: Array of Array of 2 Strings or Files.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for the ScriptPreference, which is a Application.
> _Read Only_
>
> Events **events**
>
> Collection containing events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection containing event listeners.
> String **version**
>
> Scripting environment version. Can also accept: Real.
> UserInteractionLevels **userInteractionLevel**
>
> Controls whether dialogs and alerts appear while scripts process.
> Mixed **measurementUnit**
>
> Measurement unit applied during script processing. Can return: AutoEnum enumerator or MeasurementUnits enumerator.
> Boolean **enableRedraw**
>
> When true, redraw is enabled during script execution.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> String **toSource**()
>
> Builds a string that returns the ScriptPreference if executed.
> ScriptPreference **getElements**()
>
> Resolves the object specifier into object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Connects event handling.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Disconnects event handling.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The registered event type. |
| Mixed | handler | The registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

## SearchModes

Options that identify search modes.

### Class

> _Read Only_
>
> Number `TEXT_SEARCH` = 1182038131
>
> Performs a text search.
> _Read Only_
>
> Number `GREP_SEARCH` = 1181184627
>
> Performs a Grep search.
> _Read Only_
>
> Number `GLYPH_SEARCH` = 1181183091
>
> Performs a glyph search.
> _Read Only_
>
> Number `OBJECT_SEARCH` = 1181704819
>
> Performs an object search.
> _Read Only_
>
> Number `COLOR_SEARCH` = 1180921708
>
> Performs a color search.

## SearchStrategies

Options that define search strategy.

### Class

> _Read Only_
>
> Number `FIRST_ON_PAGE` = 1396794992
>
> Searches forward beginning at the start of the current page.
> _Read Only_
>
> Number `LAST_ON_PAGE` = 1396796528
>
> Searches backward beginning at the end of the current page.

## Section — Instance

> _Read Only_
>
> Number **length**
>
> Page count for the section.
> _Read Only_
>
> Number **alternateLayoutLength**
>
> Page count for the alternate layout section.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the Section.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Parent object for the Section, which is a Document.
> _Read Only_
>
> Number **index**
>
> Position of the Section inside its containing object.
> _Read Only_
>
> Events **events**
>
> Collection containing events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection containing event listeners.
> String **alternateLayout**
>
> Alternate layout name associated with a set of pages.
> String **name**
>
> Name assigned to the Section.
> Mixed **pageNumberStyle**
>
> Page-number style. Can return: PageNumberStyle enumerator or String.
> Boolean **continueNumbering**
>
> When true, page numbers continue sequentially from the previous section.
> Boolean **includeSectionPrefix**
>
> When true, the specified prefix is placed before page numbers on every page in the section.
> Number **pageNumberStart**
>
> Page number given to the section's first page. Note: Valid only when continue numbering is false.
> String **marker**
>
> Section marker.
> Page **pageStart**
>
> Start page for the section.
> String **sectionPrefix**
>
> Prefix inserted before page numbers on section pages. Maximum length is 8 characters. Note: usable only when includeSectionPrefix is true.
> String **label**
>
> String-valued property available for arbitrary labels.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> **remove**()
>
> Removes the Section.
> **insertLabel**( String **key**, String **value** )
>
> Stores the supplied value as a label for the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | The key. |
| String | value | The value. |

> String **extractLabel**( String **key** )
>
> Gets the label value for that key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | The key. |

> String **toSource**()
>
> Builds a string that returns the Section if executed.
> Section **getElements**()
>
> Resolves the object specifier into object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Connects event handling.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Disconnects event handling.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The registered event type. |
| Mixed | handler | The registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

## Sections

Collection containing sections.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in the collection.

### Methods

> Number **count**()
>
> Displays how many elements are in the Section.
> Section **add**( Page **reference**, Object **withProperties** )
>
> Creates a Section.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | reference | The page on which the section begins. (Optional) |
| Object | withProperties | Initial values for properties of the new Section (Optional) |

> Section **item**( Mixed **index** )
>
> Fetches the Section selected by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | The index or name. Can accept: Long Integer or String. |

> Section **itemByName**( String **name** )
>
> Returns the Section with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | The name. |

> Section **itemByID**( Number **id** )
>
> Returns the Section with the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | The ID. |

> Section **itemByRange**( Mixed **from**, Mixed **to** )
>
> Fetches Sections bounded by the supplied range endpoints.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | The Section, index, or name at the beginning of the range. Can accept: Section, Long Integer or String. |
| Mixed | to | The Section, index, or name at the end of the range. Can accept: Section, Long Integer or String. |

> Section **firstItem**()
>
> Returns the first Section in the collection.
> Section **lastItem**()
>
> Returns the last Section in the collection.
> Section **middleItem**()
>
> Returns the middle Section in the collection.
> Section **previousItem**( Section **obj** )
>
> Fetches the Section immediately before the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Section | obj | The index of the Section that follows the desired Section. |

> Section **nextItem**( Section **obj** )
>
> Fetches the collection item immediately after the supplied Section.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Section | obj | The Section whose index comes before the desired Section. |

> Section **anyItem**()
>
> Returns any Section from the collection.
> Section **everyItem**()
>
> Returns every Section in the collection.
> String **toSource**()
>
> Builds a string that returns the Section if executed.
> Section **[]**( Number **index** )
>
> Fetches the Section at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | The index. |

## SelectAll — Class

> _Read Only_
>
> Number **ALL** = 1634495520
>
> Selects everything.

## SelectionOptions

Selection-state options relative to objects selected earlier.

### Class

> _Read Only_
>
> Number `ADD_TO` = 1633969202
>
> Adds the object to the current selection; when nothing was selected before, the object becomes the only selected item.
> _Read Only_
>
> Number `REMOVE_FROM` = 1919249734
>
> Clears selection on the object.
> _Read Only_
>
> Number `REPLACE_WITH` = 1919250519
>
> Chooses the object and clears earlier selections.
> _Read Only_
>
> Number `SET_KEY` = 1936028779
>
> Sets the key object. Requires at least 2 selected objects, and the specified key object must be included among them.

## Sequences

Options controlling print page sequences.

### Class

> _Read Only_
>
> Number **ALL** = 1634495520
>
> Sends every page to print.
> _Read Only_
>
> Number **ODD** = 1868850208
>
> Sends just the odd-numbered pages to print.
> _Read Only_
>
> Number **EVEN** = 1702258030
>
> Sends just the even-numbered pages to print.
