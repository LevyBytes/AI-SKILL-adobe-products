# Xmppacketinfo, Xmpproperty, Xmputils

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: XMPPacketInfo; XMPProperty; XMPUtils.

## XMPPacketInfo

### XMPScript object reference — XMPPacketInfo object

XMPFile.getPacketInfo() returns this object. Its read-only properties report details about the XMP packet in the XMPFile object's file.

### XMPPacketInfo object properties

Parameter

Type

Description

charForm

Number

Packet character encoding; allowed values are: - 0 - UTF8 - 2 - UTF-16, MSB-first (big-endian) - 3 - UTF-16, LSB-first (little-endian) - 4 - UTF 32, MSB-first (big-endian) - 5 - UTF 32, LSB-first (little-endian)

length

Number

Packet length in bytes.

offset

Number

Byte offset, measured from the beginning of the file, where the packet starts.

packet

String

Raw packet data.

padSize

Number

Packet padding size in bytes; 0 means unknown.

writeable

Boolean

True means the packet can be written.

| --- | --- | --- |

## XMPProperty

### XMPScript object reference — XMPProperty object

Accessor functions on XMPMeta, such as getProperty, return this object. The read-only properties describe one metadata property.

### XMPProperty object properties

Parameter

Type

Description

locale

String

Language attached to the property value. Calls to getLocalizedText() set this value to the language of the selected alternative text item when a suitable item exists.

namespace

String

Property namespace; see Schema namespace string constants. This is commonly useful while browsing metadata with an XMPIterator object.

options

Number

Constant describing the property type, with 0 meaning a simple property. Constants are: - XMPConst.`PROP_IS_ARRAY` - property is an array (alt, bag, or seq). - XMPConst.`PROP_IS_STRUCT` - property is a structure containing nested fields.

path

String

Property path, including the property name. For a simple property, the property name is the complete path.

value

Variant

Property value, if present. Arrays and non-leaf structure levels have no values.

| --- | --- | --- |

## XMPUtils

### XMPScript object reference — XMPUtils object

XMPUtils supplies static helpers for the XMP Toolkit on top of XMPMeta behavior. It exposes only static functions; instances are not created.

composeArrayItemPath() and related path-composition helpers build path expressions for deeply nested properties, and those paths can then be sent to XMPMeta accessor functions such as xmpmetaobj-getProperty.

xmputils-duplicateSubtree and similar higher-level helpers let scripts modify the tree of metadata held by XMPMeta.

### XMPUtils class functions

### XMPUtils.appendProperties()

XMPUtils.appendProperties(source, dest, options)

### Description

Copies properties out of a source XMPMeta object and appends them into a destination XMPMeta object.

### Parameters

Parameter

Type

Description

source

XMPMeta Object

Source XMPMeta object.

dest

XMPMeta Object

Target XMPMeta object.

options

Combine any of these bit-flag constants with OR: - XMPConst.`APPEND_ALL_PROPERTIES` - include internal and external properties; the default behavior copies external properties only. Scope: top-level properties. - XMPConst.`APPEND_REPLACE_OLD_VALUES` - overwrite existing property values with source-object values; otherwise current values stay in place. Scope: every hierarchy level. - XMPConst.`APPEND_DELETE_EMPTY_VALUES` - delete properties whose incoming value has no content.

Copy-operation flags. Default: 0.

| --- | --- | --- |

### Returns

Nothing

### XMPUtils.catenateArrayItems()

XMPUtils.catenateArrayItems(xmpObj, schemaNS, arrayName, separator, quotes, options)

### Description

Joins a set of array item values into one string. separateArrayItems() can later split the resulting string back into array items.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| xmpObj | XMPMeta Object | XMPMeta object that contains the array. |
| schemaNS | Schema namespace string constants | Namespace URI string. |
| arrayName | String | Array property name string. A general path expression is allowed. Every array item must hold a simple string value. |
| separator | String | String inserted between items in the result. Default: '; ', an ASCII semicolon and space (U+003B,U+0020). |
| quotes | String | Character used around items that include a separator. Default: '"', an ASCII double quote (U+0022). |
| options | Constant value | Concatenation flag. XMPConst.`SEPARATE_ALLOW_COMMAS` - allow commas in item values, such as "LastName, FirstName". Match this setting in separateArrayItems() so item reconstruction is correct. Default: 0. |

### Returns

String

### XMPUtils.composeArrayItemPath()

XMPUtils.composeArrayItemPath(schemaNS, arrayName, itemIndex)

### Description

Builds and returns the path expression string for an array item, using the registered namespace prefix, in this form:

```
schemaNS:arrayName[itemIndex]
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI string. |
| arrayName | String | Array property name string. A general path expression is allowed. |
| itemIndex | Number | 1-based item position. Use XMPConst.`ARRAY_LAST_ITEM` to refer to the last existing array item; in that case, the generated path becomes ns:arrayName[last()]. |

### Returns

String

### XMPUtils.composeFieldSelector()

XMPUtils.composeFieldSelector(schemaNS, arrayName, fieldNS, fieldName, fieldValue)

### Description

Builds and returns the path expression string that selects an alternate item by field value, using registered namespace prefixes, in this form:

```
schemaNS:arrayName[fieldNS:fieldName="fieldValue"]
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI string. |
| arrayName | String | Array property name string. A general path expression is allowed. |
| fieldNS | String | Field namespace URI string. |
| fieldName | String | Field name; simple XML name required. |
| fieldValue | Any | Field value to match. |

### Returns

String

### XMPUtils.composeLanguageSelector()

XMPUtils.composeLanguageSelector(schemaNS, arrayName, locale)

### Description

Builds and returns a string path that uses the registered namespace prefix to pick, by language, one item from an alt text array, in this form:

```
schemaNS:arrayName[@xml:lang="langName"]
```

Note

Do not substitute this for getLocalizedText() or setLocalizedText().

getLocalizedText() and setLocalizedText() add logic for language selection and x-default consistency. This helper only creates a path expression for one explicit language.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI string. |
| arrayName | String | Array property name string. A general path expression is allowed. |
| locale | String | RFC3066 locale code string identifying the target language. |

### Returns

String

### XMPUtils.composeStructFieldPath()

XMPUtils.composeStructFieldPath(schemaNS, structName, fieldNS, fieldName)

### Description

Builds and returns the path expression string for a structure field, using registered namespace prefixes, in this form:

```
schemaNS:structName/fieldNS:fieldName
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI string. |
| structName | String | Structure property name string. A general path expression is allowed. |
| fieldNS | String | Field namespace URI string. |
| fieldName | String | Field name; simple XML name required. |

### Returns

String

### XMPUtils.composeQualifierPath()

XMPUtils.composeQualifierPath(schemaNS, propName, qualNS, qualName)

### Description

Builds and returns the path expression string for a qualifier attached to a property, using the registered namespace prefix, in this form:

```
schemaNS:propName/?qualNS:qualName
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI string. |
| propName | String | Property name string. A general path expression is allowed. |
| qualNS | String | Qualifier namespace URI string. |
| qualName | String | Qualifier name; simple XML name required. |

### Returns

String

### XMPUtils.duplicateSubtree()

XMPUtils.duplicateSubtree(source, dest, sourceNS, sourceRoot, destNS, destRoot, options)

### Description

Copies the specified subtree's properties from one source XMPMeta object into a destination XMPMeta object.

### Parameters

Parameter

Type

Description

source

XMPMeta Object

Source XMPMeta object.

dest

XMPMeta Object

Destination XMPMeta object.

sourceNS

Schema namespace string constants

Source namespace URI string.

sourceRoot

String

Property name string for the source subtree root. A general path expression is allowed.

destNS

Schema namespace string constants

Destination namespace URI string.

destRoot

String

Optional. Property name string for the destination subtree root. A general path expression is allowed. Defaults to the source root location.

options

Combine any of these bit-flag constants with OR:

Copy-operation flags. Default: 0. - XMPConst.`APPEND_ALL_PROPERTIES` - include internal and external properties; the default behavior copies external properties only. Scope: top-level properties. - XMPConst.`APPEND_REPLACE_OLD_VALUES` - overwrite existing property values with source-object values; otherwise current values stay in place. Scope: every hierarchy level. - XMPConst.`APPEND_DELETE_EMPTY_VALUES` - delete properties whose incoming value has no content.

| --- | --- | --- |

### Returns

Nothing

### XMPUtils.removeProperties()

XMPUtils.removeProperties(xmpObj, schemaNS, propName, options)

### Description

Removes multiple properties from an XMPMeta object.

When both the namespace and property name are given, the property is removed if it is external, including aliases. Internal properties are removed only when XMPConst.`REMOVE_ALL_PROPERTIES` is specified.

When a namespace is given without a property name, all external properties in that namespace are removed, with internal properties optional. Aliases are removed only when XMPConst.`REMOVE_INCLUDE_ALIASES` is specified.

When neither namespace nor property name is given, all external properties are removed, and internal properties can be included. Aliases need no special handling because their associated actual property is removed.

### Parameters

Parameter

Type

Description

xmpObj

XMPMeta Object

Object from which properties are removed

schemaNS

Schema namespace string constants. Optional. Namespace URI string. Required when a property name is supplied.

propName

String

Optional. Property name string. A general path expression is allowed.

options

Combine any of these bit-flag constants with OR:

Deletion flags. Default: 0. - XMPConst.`REMOVE_ALL_PROPERTIES` - include internal and external properties in removal; the default removes external properties only. Scope: top-level properties. - XMPConst.`REMOVE_INCLUDE_ALIASES` - remove aliases defined in the namespace. If a property name is supplied, removal ignores the flag.

| --- | --- | --- |

### Returns

Nothing

### XMPUtils.separateArrayItems()

XMPUtils.separateArrayItems(xmpObj, schemaNS, arrayName, arrayOptions, concatString)

### Description

Uses a concatenated string from catenateArrayItems() to update individual array item strings in the XMPMeta object. Recognized separators include tab, return, linefeed, semicolons, commas, and multiple-space runs.

### Parameters

Parameter

Type

Description

xmpObj

XMPMeta Object

Object whose array items are separated

schemaNS

Namespace URI string. See Schema namespace string constants.

arrayName

String

Array property name string. A general path expression is allowed. Every array item must be a simple string value.

arrayOptions

Combine any of these bit-flag constants with OR: - XMPConst.`APPEND_ALL_PROPERTIES` - include internal and external properties; the default behavior copies external properties only. Scope: top-level properties. - XMPConst.`APPEND_REPLACE_OLD_VALUES` - overwrite existing property values with source-object values; otherwise current values stay in place. Scope: every hierarchy level. - XMPConst.`APPEND_DELETE_EMPTY_VALUES` - delete properties whose incoming value has no content. - XMPConst.`SEPARATE_ALLOW_COMMAS` - allow commas in item values. Without this flag, an item containing a comma, such as "LastName, FirstName", is split into two array items.

Flags controlling how the separated string updates the array property. Default: 0.

concatString

String

String containing concatenated array values, as returned by catenateArrayItems().

| --- | --- | --- |

### Returns

Nothing
