# Preflight Profile Rules, Preflight Profile, Preflight Profiles, Preflight Rule Flag ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: PreflightProfileRules; PreflightProfile; PreflightProfiles; PreflightRuleFlag; PreflightRuleInstance; PreflightRuleInstances; PreflightRule; PreflightRules; PreflightScopeOptions; PreserveAppearanceFromLayoutEnum; PreviewPagesOptions; PreviewSizeOptions; PreviewTypes.

## PreflightProfileRules

A collection containing preflight profile rules.

### Instance

> _Read Only_
>
> Number **length**
>
> Gives the collection's object count.

### Methods

> Mixed **add**( String **id**, Object **withProperties** )
>
> Adds a preflight rule to the profile.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | id | ID of the rule to add |
| Object | withProperties | Starting property values for the new PreflightProfileRule (Optional) |

> Number **count**()
>
> Shows how many elements are in the PreflightProfileRule.
> PreflightProfileRule **item**( Mixed **index** )
>
> Gets the PreflightProfileRule at the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector. Can accept: Long Integer or String. |

> PreflightProfileRule **itemByName**( String **name** )
>
> Gets the PreflightProfileRule with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> PreflightProfileRule **itemByID**( Number **id** )
>
> Gets the PreflightProfileRule with the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> PreflightProfileRule **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the PreflightProfileRules included in the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | PreflightProfileRule, index, or name that starts the range. Can accept: PreflightProfileRule, Long Integer or String. |
| Mixed | to | PreflightProfileRule, index, or name that ends the range. Can accept: PreflightProfileRule, Long Integer or String. |

> PreflightProfileRule **firstItem**()
>
> Gets the first PreflightProfileRule in the collection.
> PreflightProfileRule **lastItem**()
>
> Gets the last PreflightProfileRule in the collection.
> PreflightProfileRule **middleItem**()
>
> Gets the middle PreflightProfileRule in the collection.
> PreflightProfileRule **previousItem**( PreflightProfileRule **obj** )
>
> Gets the PreflightProfileRule immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PreflightProfileRule | obj | PreflightProfileRule index positioned after the desired PreflightProfileRule. |

> PreflightProfileRule **nextItem**( PreflightProfileRule **obj** )
>
> Gets the PreflightProfileRule immediately after the supplied PreflightProfileRule in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PreflightProfileRule | obj | PreflightProfileRule positioned before the desired PreflightProfileRule. |

> PreflightProfileRule **anyItem**()
>
> Gets any PreflightProfileRule in the collection.
> PreflightProfileRule **everyItem**()
>
> Gets every PreflightProfileRule in the collection.
> String **toSource**()
>
> Builds a string that would return the PreflightProfileRule if executed.
> PreflightProfileRule **[]**( Number **index** )
>
> Gets the PreflightProfileRule at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## PreflightProfile

A profile used for preflight.

### Instance

> _Read Only_
>
> Number **id**
>
> Gives the PreflightProfile unique ID.
> _Read Only_
>
> Boolean **isValid**
>
> true is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Identifies the PreflightProfile parent, either a Application or Document.
> _Read Only_
>
> Number **index**
>
> Gives the PreflightProfile position inside its containing object.
> _Read Only_
>
> PreflightProfileRules **preflightProfileRules**
>
> Holds a collection of preflight profile rules.
> _Read Only_
>
> PreflightRuleInstances **preflightRuleInstances**
>
> Holds a collection of preflight rule instances.
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
> String **name**
>
> Gives the PreflightProfile name.
> String **description**
>
> Holds the PreflightProfile description.
> String **label**
>
> Accepts any string value.
> Object **properties**
>
> Enables several properties to be set in one operation.

### Methods

> **remove**()
>
> Removes the PreflightProfile.
> PreflightProfile **duplicate**()
>
> Makes a duplicate PreflightProfile.
> **update**( Mixed **using** )
>
> Updates the preflight profile by copying data from another profile.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | using | Preflight profile to copy. Can accept: String or PreflightProfile. (Optional) |

> **unembed**()
>
> Removes this profile from its embedded state.
> **save**( File **to** )
>
> Exports this profile into an InDesign preflight profile file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | Preflight profile file destination. |

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
> Builds a string that would return the PreflightProfile if executed.
> PreflightProfile **getElements**()
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

## PreflightProfiles

A collection containing preflight profiles.

### Instance

> _Read Only_
>
> Number **length**
>
> Gives the collection's object count.

### Methods

> PreflightProfile **add**( Object **withProperties** )
>
> Creates a PreflightProfile.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new PreflightProfile (Optional) |

> Number **count**()
>
> Shows how many elements are in the PreflightProfile.
> PreflightProfile **item**( Mixed **index** )
>
> Gets the PreflightProfile at the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector. Can accept: Long Integer or String. |

> PreflightProfile **itemByName**( String **name** )
>
> Gets the PreflightProfile with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> PreflightProfile **itemByID**( Number **id** )
>
> Gets the PreflightProfile with the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> PreflightProfile **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the PreflightProfiles included in the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | PreflightProfile, index, or name that starts the range. Can accept: PreflightProfile, Long Integer or String. |
| Mixed | to | PreflightProfile, index, or name that ends the range. Can accept: PreflightProfile, Long Integer or String. |

> PreflightProfile **firstItem**()
>
> Gets the first PreflightProfile in the collection.
> PreflightProfile **lastItem**()
>
> Gets the last PreflightProfile in the collection.
> PreflightProfile **middleItem**()
>
> Gets the middle PreflightProfile in the collection.
> PreflightProfile **previousItem**( PreflightProfile **obj** )
>
> Gets the PreflightProfile immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PreflightProfile | obj | PreflightProfile index positioned after the desired PreflightProfile. |

> PreflightProfile **nextItem**( PreflightProfile **obj** )
>
> Gets the PreflightProfile immediately after the supplied PreflightProfile in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PreflightProfile | obj | PreflightProfile positioned before the desired PreflightProfile. |

> PreflightProfile **anyItem**()
>
> Gets any PreflightProfile in the collection.
> PreflightProfile **everyItem**()
>
> Gets every PreflightProfile in the collection.
> String **toSource**()
>
> Builds a string that would return the PreflightProfile if executed.
> PreflightProfile **[]**( Number **index** )
>
> Gets the PreflightProfile at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## PreflightRuleFlag

Flag value showing whether a rule is disabled, reports an error, reports a warning, or is informational only.

### Class

> _Read Only_
>
> Number `RULE_IS_DISABLED` = 1699890274
>
> The rule is currently inactive.
> _Read Only_
>
> Number `RETURN_AS_ERROR` = 1699890546
>
> Report a failed rule check as an error.
> _Read Only_
>
> Number `RETURN_AS_WARNING` = 1699893879
>
> Report a failed rule check as a warning.
> _Read Only_
>
> Number `RETURN_AS_INFORMATIONAL` = 1699893865
>
> Report a failed rule check as information only.

## PreflightRuleInstance

An instance of a preflight rule.

### Instance

> _Read Only_
>
> String **name**
>
> Gives the PreflightRuleInstance name.
> _Read Only_
>
> String **id**
>
> Gives this rule's ID.
> _Read Only_
>
> String **description**
>
> Holds the PreflightRuleInstance description.
> _Read Only_
>
> Boolean **isValid**
>
> true is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> PreflightProfile **parent**
>
> Identifies the PreflightRuleInstance parent, a PreflightProfile.
> _Read Only_
>
> Number **index**
>
> Gives the PreflightRuleInstance position inside its containing object.
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
> Removes the PreflightRuleInstance.
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
> Builds a string that would return the PreflightRuleInstance if executed.
> PreflightRuleInstance **getElements**()
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

## PreflightRuleInstances

PreflightRuleInstances stores the collection of preflight rule instance objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for this collection.

### Methods

> Mixed **add**( String **id**, Object **withProperties** )
>
> Creates a preflight rule entry in the profile.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | id | Rule ID to add. |
| Object | withProperties | Optional starting property values for the new PreflightRuleInstance. |

> Number **count**()
>
> Reports how many PreflightRuleInstance elements are present.
> PreflightRuleInstance **item**( Mixed **index** )
>
> Gets the PreflightRuleInstance identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name; accepts Long Integer or String. |

> PreflightRuleInstance **itemByName**( String **name** )
>
> Gets the PreflightRuleInstance that uses the given name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> PreflightRuleInstance **itemByID**( Number **id** )
>
> Gets the PreflightRuleInstance that uses the given ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> PreflightRuleInstance **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the PreflightRuleInstances included in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start: a PreflightRuleInstance, index, or name. Accepts PreflightRuleInstance, Long Integer or String. |
| Mixed | to | Range end: a PreflightRuleInstance, index, or name. Accepts PreflightRuleInstance, Long Integer or String. |

> PreflightRuleInstance **firstItem**()
>
> Gets the first PreflightRuleInstance in this collection.
> PreflightRuleInstance **lastItem**()
>
> Gets the final PreflightRuleInstance in this collection.
> PreflightRuleInstance **middleItem**()
>
> Gets the middle PreflightRuleInstance from this collection.
> PreflightRuleInstance **previousItem**( PreflightRuleInstance **obj** )
>
> Gets the PreflightRuleInstance positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PreflightRuleInstance | obj | Index of the PreflightRuleInstance after the desired PreflightRuleInstance. |

> PreflightRuleInstance **nextItem**( PreflightRuleInstance **obj** )
>
> Gets the PreflightRuleInstance positioned after the supplied PreflightRuleInstance in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PreflightRuleInstance | obj | PreflightRuleInstance immediately before the desired PreflightRuleInstance. |

> PreflightRuleInstance **anyItem**()
>
> Gets any PreflightRuleInstance from the collection.
> PreflightRuleInstance **everyItem**()
>
> Gets all PreflightRuleInstance objects in the collection.
> String **toSource**()
>
> Builds source text that returns the PreflightRuleInstance when executed.
> PreflightRuleInstance **[]**( Number **index** )
>
> Gets the PreflightRuleInstance at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## PreflightRule

PreflightRule represents one preflight rule.

### Instance

> _Read Only_
>
> String **id**
>
> Rule ID assigned to this rule.
> _Read Only_
>
> String **name**
>
> Name used by the PreflightRule.
> _Read Only_
>
> String **description**
>
> Description text for the PreflightRule.
> _Read Only_
>
> Boolean **isValid**
>
> true when this object's specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for the PreflightRule, an Application.
> _Read Only_
>
> Number **index**
>
> Position of the PreflightRule inside its containing object.
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
> Boolean **fullFeature**
>
> true indicates full support for this preflight rule.
> Object **properties**
>
> Allows several properties to be assigned together.

### Methods

> String **toSource**()
>
> Builds source text that returns the PreflightRule when executed.
> PreflightRule **getElements**()
>
> Resolves the object specifier and produces an array of object references.
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

## PreflightRules

PreflightRules holds a collection of preflight rule objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for this collection.

### Methods

> Number **count**()
>
> Reports how many PreflightRule elements are present.
> PreflightRule **item**( Mixed **index** )
>
> Gets the PreflightRule identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name; accepts Long Integer or String. |

> PreflightRule **itemByName**( String **name** )
>
> Gets the PreflightRule that uses the given name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> PreflightRule **itemByID**( Number **id** )
>
> Gets the PreflightRule that uses the given ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> PreflightRule **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the PreflightRules included in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start: a PreflightRule, index, or name. Accepts PreflightRule, Long Integer or String. |
| Mixed | to | Range end: a PreflightRule, index, or name. Accepts PreflightRule, Long Integer or String. |

> PreflightRule **firstItem**()
>
> Gets the first PreflightRule in this collection.
> PreflightRule **lastItem**()
>
> Gets the final PreflightRule in this collection.
> PreflightRule **middleItem**()
>
> Gets the middle PreflightRule from this collection.
> PreflightRule **previousItem**( PreflightRule **obj** )
>
> Gets the PreflightRule positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PreflightRule | obj | Index of the PreflightRule after the desired PreflightRule. |

> PreflightRule **nextItem**( PreflightRule **obj** )
>
> Gets the PreflightRule positioned after the supplied PreflightRule in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PreflightRule | obj | PreflightRule immediately before the desired PreflightRule. |

> PreflightRule **anyItem**()
>
> Gets any PreflightRule from the collection.
> PreflightRule **everyItem**()
>
> Gets all PreflightRule objects in the collection.
> String **toSource**()
>
> Builds source text that returns the PreflightRule when executed.
> PreflightRule **[]**( Number **index** )
>
> Gets the PreflightRule at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## PreflightScopeOptions

PreflightScopeOptions provides choices for preflight scope.

### Class

> _Read Only_
>
> Number `PREFLIGHT_ALL_PAGES` = 1885552976
>
> Runs preflight across every page.
> _Read Only_
>
> Number `PREFLIGHT_SELECTED_DOCUMENTS` = 1885557572
>
> Limits book preflight to selected document only.
> _Read Only_
>
> Number `PREFLIGHT_ALL_DOCUMENTS` = 1885552964
>
> Covers every document during book preflight.

## PreserveAppearanceFromLayoutEnum

PreserveAppearanceFromLayoutEnum defines Preserve Appearance from Layout choices.

### Class

> _Read Only_
>
> Number `PRESERVE_APPEARANCE_DEFAULT` = 1349665893
>
> Uses export preferences.
> _Read Only_
>
> Number `PRESERVE_APPEARANCE_USE_EXISTING_IMAGE` = 1349670245
>
> Uses the existing image.
> _Read Only_
>
> Number `PRESERVE_APPEARANCE_RASTERIZE_CONTAINER` = 1349669490
>
> Rasterizes both container and content when possible.
> _Read Only_
>
> Number `PRESERVE_APPEARANCE_RASTERIZE_CONTENT` = 1349669492
>
> Rasterizes content when possible.

## PreviewPagesOptions

PreviewPagesOptions supplies preview-page selection choices.

### Class

> _Read Only_
>
> Number `FIRST_PAGE` = 1700947536
>
> Uses the first page.
> _Read Only_
>
> Number `FIRST_2_PAGES` = 1177702503
>
> Uses the first two pages.
> _Read Only_
>
> Number `FIRST_5_PAGES` = 1177899111
>
> Uses the first five pages.
> _Read Only_
>
> Number `FIRST_10_PAGES` = 1180192871
>
> Uses the first ten pages.
> _Read Only_
>
> Number `ALL_PAGES` = 1886547553
>
> Uses all pages.

## PreviewSizeOptions

PreviewSizeOptions lists available preview sizes.

### Class

> _Read Only_
>
> Number **SMALL** = 1399672946
>
> Preview size: small (128 x 128).
> _Read Only_
>
> Number **MEDIUM** = 1701727588
>
> Preview size: medium (256 x 256).
> _Read Only_
>
> Number **LARGE** = 1281446002
>
> Preview size: large (512 x 512).
> _Read Only_
>
> Number `EXTRA_LARGE` = 1162629234
>
> Preview size: extra large (1024 x 1024).

## PreviewTypes

PreviewTypes identifies preview image file-format choices.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> Does not write a preview image.
> _Read Only_
>
> Number `TIFF_PREVIEW` = 1164997734
>
> Writes the preview in TIFF format.
