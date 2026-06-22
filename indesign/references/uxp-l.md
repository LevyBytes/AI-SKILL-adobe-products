# Language And Region, Language With Vendors, Language, Languages With Vendors ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: LanguageAndRegion; LanguageWithVendors; Language; LanguagesWithVendors; Languages; Layer — Instance; Layers.

## LanguageAndRegion

Specifies a language and region.

### Class

> _Read Only_
>
> Number `STANDARD_ARABIC` = 1634877765
>
> Standard Arabic
> _Read Only_
>
> Number `CZECH_REPUBLIC_CZECH` = 1668498266
>
> Czech Republic: Czech
> _Read Only_
>
> Number `DENMARK_DANISH` = 1684096075
>
> Denmark: Danish
> _Read Only_
>
> Number `GERMANY_GERMAN` = 1684358213
>
> Germany: German
> _Read Only_
>
> Number `GREECE_GREEK` = 1701594962
>
> Greece: Greek
> _Read Only_
>
> Number `UNITED_KINGDOM_ENGLISH` = 1701726018
>
> United Kingdom: English
> _Read Only_
>
> Number `UNITED_STATES_ENGLISH` = 1701729619
>
> United States: English
> _Read Only_
>
> Number `SPAIN_SPANISH` = 1702053203
>
> Spain: Spanish
> _Read Only_
>
> Number `FINLAND_FINNISH` = 1718175305
>
> Finland: Finnish
> _Read Only_
>
> Number `FRANCE_FRENCH` = 1718765138
>
> France: French
> _Read Only_
>
> Number `ISRAEL_HEBREW` = 1751468364
>
> Israel: Hebrew
> _Read Only_
>
> Number `HUNGARY_HUNGARIAN` = 1752516693
>
> Hungary: Hungarian
> _Read Only_
>
> Number `ITALY_ITALIAN` = 1769228628
>
> Italy: Italian
> _Read Only_
>
> Number `JAPAN_JAPANESE` = 1784760912
>
> Japan: Japanese
> _Read Only_
>
> Number `REPUBLIC_OF_KOREA_KOREAN` = 1802455890
>
> Republic Of Korea: Korean
> _Read Only_
>
> Number `NORWAY_NORWEGIAN` = 1851936335
>
> Norway: Norwegian
> _Read Only_
>
> Number `NETHERLANDS_DUTCH` = 1852591692
>
> Netherlands: Dutch
> _Read Only_
>
> Number `POLAND_POLISH` = 1886146636
>
> Poland: Polish
> _Read Only_
>
> Number `BRAZIL_PORTUGUESE` = 1886667346
>
> Brazil: Portuguese
> _Read Only_
>
> Number `RUSSIAN_FEDERATION_RUSSIAN` = 1920291413
>
> Russian Federation: Russian
> _Read Only_
>
> Number `SWEDEN_SWEDISH` = 1937134422
>
> Sweden: Swedish
> _Read Only_
>
> Number `TURKEY_TURKISH` = 1953649746
>
> Turkey: Turkish
> _Read Only_
>
> Number `UKRAINE_UKRAINIAN` = 1969968449
>
> Ukraine: Ukrainian
> _Read Only_
>
> Number `SIMPLIFIED_CHINESE` = 2053653326
>
> Simplified Chinese
> _Read Only_
>
> Number `TRADITIONAL_CHINESE` = 2053657687
>
> Traditional Chinese
> _Read Only_
>
> Number `BELARUS_BELARUSIAN` = 1650803289
>
> Belarus: Belarusian
> _Read Only_
>
> Number `BULGARIA_BULGARIAN` = 1650934343
>
> Bulgaria: Bulgarian
> _Read Only_
>
> Number `ESTONIA_ESTONIAN` = 1702118725
>
> Estonia: Estonian
> _Read Only_
>
> Number `CROATIA_CROATIAN` = 1752320082
>
> Croatia: Croatian
> _Read Only_
>
> Number `LITUANIA_LITHUANIAN` = 1819561044
>
> Lituania: Lithuanian
> _Read Only_
>
> Number `LATVIA_LATVIAN` = 1819692118
>
> Latvia: Latvian
> _Read Only_
>
> Number `ROMANIA_ROMANIAN` = 1919898191
>
> Romania: Romanian
> _Read Only_
>
> Number `SLOVAKIA_SLOVAK` = 1936479051
>
> Slovakia: Slovak
> _Read Only_
>
> Number `SLOVENIA_SLOVENIAN` = 1936479049
>
> Slovenia: Slovenian
> _Read Only_
>
> Number `ALBANIA_ALBANIAN` = 1936802124
>
> Albania: Albanian
> _Read Only_
>
> Number `INDIA_TAMIL` = 1952532814
>
> India: Tamil
> _Read Only_
>
> Number `THAILAND_THAI` = 1952994376
>
> Thailand: Thai
> _Read Only_
>
> Number `VIETNAM_VIETNAMESE` = 1986614862
>
> Vietnam: Vietnamese
> _Read Only_
>
> Number **INDIC** = 1768842345
>
> Indic

## LanguageWithVendors

Language definition that specifies the hyphenation rules source, spell-checking source, and thesaurus.

### Instance

> _Read Only_
>
> String **name**
>
> Name assigned to the LanguageWithVendors.
> _Read Only_
>
> String **untranslatedName**
>
> Language name before translation.
> _Read Only_
>
> String **icuLocaleName**
>
> Full ICU locale name for the Language object.
> _Read Only_
>
> String **spellingVendorList**
>
> Available spelling vendors.
> _Read Only_
>
> String **hyphenationVendorList**
>
> Available hyphenation vendors.
> _Read Only_
>
> Number **id**
>
> Unique identifier for the LanguageWithVendors.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for the LanguageWithVendors (a Application).
> _Read Only_
>
> Number **index**
>
> Position of the LanguageWithVendors within its containing object.
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
> String **singleQuotes**
>
> Single-quote pair used by the language.
> String **doubleQuotes**
>
> Double-quote pair used by the language.
> String **hyphenationVendor**
>
> Source used for hyphenation rules.
> String **spellingVendor**
>
> Source used for spell checking.
> String **thesaurusVendor**
>
> Source used for the thesaurus.
> String **dictionaryPaths**
>
> User dictionary paths for the language.
> String **label**
>
> User-settable string property.
> Object **properties**
>
> Property bundle for assigning multiple properties together.

### Methods

> String **addDictionaryPath**( String **filePath** )
>
> Adds the indicated user dictionary.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | filePath | Path to the dictionary file. |

> String **removeDictionaryPath**( String **filePath** )
>
> Removes the indicated user dictionary.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | filePath | Path to the dictionary file. |

> **insertLabel**( String **key**, String **value** )
>
> Uses the specified key to store a label value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key identifier. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Uses the specified key to read a label value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key identifier. |

> String **toSource**()
>
> Builds an executable string that returns the LanguageWithVendors when run.
> LanguageWithVendors **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Fetches the object specifier.
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

## Language

Language used as the basis for hyphenation rules and spell checking.

### Instance

> _Read Only_
>
> String **name**
>
> Name assigned to the Language.
> _Read Only_
>
> String **untranslatedName**
>
> Language name before translation.
> _Read Only_
>
> String **icuLocaleName**
>
> Full ICU locale name for the Language object.
> _Read Only_
>
> Number **id**
>
> Unique identifier for the Language.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Parent object for the Language (a Document).
> _Read Only_
>
> Number **index**
>
> Position of the Language within its containing object.
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
> String **singleQuotes**
>
> Single-quote pair used by the language.
> String **doubleQuotes**
>
> Double-quote pair used by the language.
> String **hyphenationVendor**
>
> Source used for hyphenation rules.
> String **spellingVendor**
>
> Source used for spell checking.
> String **label**
>
> User-settable string property.
> Object **properties**
>
> Property bundle for assigning multiple properties together.

### Methods

> **insertLabel**( String **key**, String **value** )
>
> Uses the specified key to store a label value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key identifier. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Uses the specified key to read a label value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key identifier. |

> String **toSource**()
>
> Builds an executable string that returns the Language when run.
> Language **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Fetches the object specifier.
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

## LanguagesWithVendors

Collection of languages with vendors.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for the collection.

### Methods

> Number **count**()
>
> Shows how many elements are in the LanguageWithVendors.
> LanguageWithVendors **item**( Mixed **index** )
>
> Fetches the LanguageWithVendors identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector. Can accept: Long Integer or String. |

> LanguageWithVendors **itemByName**( String **name** )
>
> Fetches the LanguageWithVendors that has the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> LanguageWithVendors **itemByID**( Number **id** )
>
> Fetches the LanguageWithVendors that has the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> LanguageWithVendors **itemByRange**( Mixed **from**, Mixed **to** )
>
> Fetches the LanguagesWithVendors that fall inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting LanguageWithVendors, index, or name for the range. Can accept: LanguageWithVendors, Long Integer or String. |
| Mixed | to | Ending LanguageWithVendors, index, or name for the range. Can accept: LanguageWithVendors, Long Integer or String. |

> LanguageWithVendors **firstItem**()
>
> Fetches the first LanguageWithVendors in the collection.
> LanguageWithVendors **lastItem**()
>
> Fetches the last LanguageWithVendors in the collection.
> LanguageWithVendors **middleItem**()
>
> Fetches the middle LanguageWithVendors in the collection.
> LanguageWithVendors **previousItem**( LanguageWithVendors **obj** )
>
> Fetches the LanguageWithVendors positioned immediately before the supplied LanguageWithVendors.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LanguageWithVendors | obj | LanguageWithVendors that follows the desired LanguageWithVendors. |

> LanguageWithVendors **nextItem**( LanguageWithVendors **obj** )
>
> Fetches the LanguageWithVendors positioned immediately after the supplied LanguageWithVendors.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LanguageWithVendors | obj | LanguageWithVendors that comes before the desired LanguageWithVendors. |

> LanguageWithVendors **anyItem**()
>
> Fetches any LanguageWithVendors in the collection.
> LanguageWithVendors **everyItem**()
>
> Fetches every LanguageWithVendors in the collection.
> String **toSource**()
>
> Builds an executable string that returns the LanguageWithVendors when run.
> LanguageWithVendors **[]**( Number **index** )
>
> Fetches the LanguageWithVendors at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## Languages

Collection of languages.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for the collection.

### Methods

> Number **count**()
>
> Shows how many elements are in the Language.
> Language **item**( Mixed **index** )
>
> Fetches the Language identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector. Can accept: Long Integer or String. |

> Language **itemByName**( String **name** )
>
> Fetches the Language that has the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> Language **itemByID**( Number **id** )
>
> Fetches the Language that has the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> Language **itemByRange**( Mixed **from**, Mixed **to** )
>
> Fetches the Languages that fall inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting Language, index, or name for the range. Can accept: Language, Long Integer or String. |
| Mixed | to | Ending Language, index, or name for the range. Can accept: Language, Long Integer or String. |

> Language **firstItem**()
>
> Fetches the first Language in the collection.
> Language **lastItem**()
>
> Fetches the last Language in the collection.
> Language **middleItem**()
>
> Fetches the middle Language in the collection.
> Language **previousItem**( Language **obj** )
>
> Fetches the Language positioned immediately before the supplied Language.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Language | obj | Language that follows the desired Language. |

> Language **nextItem**( Language **obj** )
>
> Fetches the Language positioned immediately after the supplied Language.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Language | obj | Language that comes before the desired Language. |

> Language **anyItem**()
>
> Fetches any Language in the collection.
> Language **everyItem**()
>
> Fetches every Language in the collection.
> String **toSource**()
>
> Builds an executable string that returns the Language when run.
> Language **[]**( Number **index** )
>
> Fetches the Language at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## Layer — Instance

> _Read Only_
>
> PageItem **allPageItems**
>
> Enumerates every page item contained by the Layer.
> _Read Only_
>
> Graphic **allGraphics**
>
> Enumerates every graphic contained by the Layer.
> _Read Only_
>
> Number **id**
>
> Unique identifier for the Layer.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Parent object for the Layer (a Document).
> _Read Only_
>
> Number **index**
>
> Position of the Layer within its containing object.
> _Read Only_
>
> Ovals **ovals**
>
> Ellipse collection.
> _Read Only_
>
> SplineItems **splineItems**
>
> Collection of spline items.
> _Read Only_
>
> PageItems **pageItems**
>
> Page items collection for processing every page item inside a container, such as a document, page, or group, without filtering by type.
> _Read Only_
>
> Rectangles **rectangles**
>
> Rectangle collection.
> _Read Only_
>
> GraphicLines **graphicLines**
>
> Graphic line collection.
> _Read Only_
>
> TextFrames **textFrames**
>
> Text frame collection.
> _Read Only_
>
> Polygons **polygons**
>
> Polygon collection.
> _Read Only_
>
> EndnoteTextFrames **endnoteTextFrames**
>
> Endnote text frame collection.
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
> Guides **guides**
>
> Guide collection.
> _Read Only_
>
> Groups **groups**
>
> Group collection.
> _Read Only_
>
> EPSTexts **epstexts**
>
> EPSTexts
> _Read Only_
>
> FormFields **formFields**
>
> Form field collection.
> _Read Only_
>
> Buttons **buttons**
>
> Button collection.
> _Read Only_
>
> MultiStateObjects **multiStateObjects**
>
> Multi-state object collection.
> _Read Only_
>
> CheckBoxes **checkBoxes**
>
> Checkbox collection.
> _Read Only_
>
> ComboBoxes **comboBoxes**
>
> Combobox collection.
> _Read Only_
>
> ListBoxes **listBoxes**
>
> Listbox collection.
> _Read Only_
>
> RadioButtons **radioButtons**
>
> Radio button collection.
> _Read Only_
>
> TextBoxes **textBoxes**
>
> Text box collection.
> _Read Only_
>
> SignatureFields **signatureFields**
>
> Signature field collection.
> String **name**
>
> Name assigned to the Layer.
> Boolean **visible**
>
> True means the Layer is visible.
> Boolean **locked**
>
> True means the Layer is locked.
> Mixed **layerColor**
>
> Layer color. Supply a UI color, or provide an array of three doubles, each from 0 to 255 for R, G, and B. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator. Return forms above are the possible values.
> Boolean **ignoreWrap**
>
> When true, text wrap settings applied to objects on the layer do not affect text on other layers while this layer is hidden.
> Boolean **showGuides**
>
> True means guides are visible on the layer.
> Boolean **lockGuides**
>
> True means guide positions on the layer are locked.
> Boolean **printable**
>
> True means the layer prints.
> String **label**
>
> User-settable string property.
> Object **properties**
>
> Property bundle for assigning multiple properties together.

### Methods

> Layer **move**( LocationOptions **to**, Layer **reference** )
>
> Moves the Layer into the requested location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Placement target, either relative to the reference object or inside the containing object. |
| Layer | reference | Reference object. Note: Required if the to value is before or after. (Optional) |

> **remove**()
>
> Removes this Layer.
> Layer **duplicate**()
>
> Creates another Layer from this one.
> Layer **merge**( Layer **with** )
>
> Combines this layer with one or more other layers.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Layer | with | Target layer or layers used as merge companions. |

> **insertLabel**( String **key**, String **value** )
>
> Stores `value` as the label entry for the supplied `key`.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |
| String | value | Label value. |

> String **extractLabel**( String **key** )
>
> Reads the label value stored for the supplied `key`.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |

> String **toSource**()
>
> Builds source text that can evaluate back to the Layer.
> Layer **getElements**()
>
> Resolves the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets this object's specifier string.
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

## Layers

Collection containing Layer objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by this collection.

### Methods

> Layer **add**( Object **withProperties** )
>
> Adds a new Layer.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new Layer. (Optional) |

> Number **count**()
>
> Shows how many Layer elements are present.
> Layer **item**( Mixed **index** )
>
> Fetches the Layer identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector; accepts Long Integer or String. |

> Layer **itemByName**( String **name** )
>
> Fetches the Layer named by `name`.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Layer name. |

> Layer **itemByID**( Number **id** )
>
> Fetches the Layer with the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | Layer ID. |

> Layer **itemByRange**( Mixed **from**, Mixed **to** )
>
> Fetches Layers in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting Layer, index, or name for the range. Can accept: Layer, Long Integer or String. |
| Mixed | to | Ending Layer, index, or name for the range. Can accept: Layer, Long Integer or String. |

> Layer **firstItem**()
>
> Fetches the first Layer in this collection.
> Layer **lastItem**()
>
> Fetches the last Layer in this collection.
> Layer **middleItem**()
>
> Fetches the middle Layer in this collection.
> Layer **previousItem**( Layer **obj** )
>
> Fetches the Layer whose index comes before the supplied Layer.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Layer | obj | Layer that follows the Layer being requested. |

> Layer **nextItem**( Layer **obj** )
>
> Fetches the Layer whose index comes after the supplied Layer.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Layer | obj | Layer that comes before the Layer being requested. |

> Layer **anyItem**()
>
> Fetches any Layer in this collection.
> Layer **everyItem**()
>
> Fetches every Layer in this collection.
> String **toSource**()
>
> Builds source text that can evaluate back to the Layer.
> Layer **[]**( Number **index** )
>
> Fetches the Layer at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Layer index. |
