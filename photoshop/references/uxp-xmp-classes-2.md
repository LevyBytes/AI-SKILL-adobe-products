# Xmp Packet Info, Xmp Property, Xmp Utils

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: XMPPacketInfo; XMPProperty — XMPProperty(); require('uxp').xmp.XMPUtils — XMPUtils().

## XMPPacketInfo

**Since**: v7.2.0
This object comes from [XMPFile.getpacketinfo](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-file.md#getpacketinfo). Its read-only properties describe the XMP packet associated with the [XMPFile object](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-file.md).

### charForm : `number`

**Read only**
Packet character encoding, one of: 0 - UTF8 2 - UTF-16, MSB-first (big-endian) 3 - UTF-16, LSB-first (little-endian) 4 - UTF 32, MSB-first (big-endian) 5 - UTF 32, LSB-first (little-endian)

### length : `number`

**Read only**
Packet length in bytes.

### offset : `number`

**Read only**
Byte offset, measured from the start of the file, where the packet begins.

### packet : `string`

**Read only**
Raw packet data.

### padSize : `number`

**Read only**
Packet padding size in bytes; 0 means unknown.

### writeable : `boolean`

**Read only**
A true value indicates that the packet is writeable.

## XMPProperty — XMPProperty()

Several property accessor functions on the [XMPMeta object](uxp-xmp-meta.md) return this object, including [xmpmetaobj.getProperty](uxp-xmp-meta.md). Its read-only properties describe a metadata property.

### XMPProperty — locale : `string`

**Read only**
Language recorded for the property value. Calls to getLocalizedText() set this field from the selected alternative text item's language when a suitable item exists.

### XMPProperty — namespace : `string`

**Read only**
Property namespace. Reference: [Schema namespace string constants](uxp-xmp-classes.md). This is generally useful while inspecting metadata through an [XMPIterator object](uxp-xmp-classes.md).

### XMPProperty — options : `number`

**Read only**
Numeric flags for the property type; `0` represents a simple property.

XMPConst.`PROP_IS_ARRAY` - Marks an array property (alt, bag, or seq).

XMPConst.`PROP_IS_STRUCT` - Marks a structure that contains nested fields.

### XMPProperty — path : `number`

**Read only**
Full property path, with the property name included. For a simple property, this path is just that property name.

### XMPProperty — value : `string` \| `number` \| `boolean` \| `XMPDateTime`

**Read only**
Stored property value, when one exists. Arrays and non-leaf structure levels have no value.

### XMPProperty — toString()

Returns the property value in string form

**Returns**: `string` - Property value represented as a string.

## require('uxp').xmp.XMPUtils — XMPUtils()

XMPUtils supplies static-only helper routines for the XMP Toolkit on top of the [XMPMeta object](uxp-xmp-meta.md). You do not instantiate this class.

Functions for building paths, including composeArrayItemPath(), assemble expressions for deeply nested properties. Those expressions can be passed to accessor routines on the [XMPMeta object](uxp-xmp-meta.md), including xmpmetaobj-getProperty.

For operations on whole metadata branches, helpers such as xmputils-duplicateSubtree work against the tree held by an [XMPMeta object](uxp-xmp-meta.md).

### require('uxp').xmp.XMPUtils — appendProperties(source, dest, [options])

Reads properties from `source` and appends them into `dest`; both are [XMPMeta object](uxp-xmp-meta.md) instances.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| source | `XMPMeta` |  | The [XMPMeta object](uxp-xmp-meta.md) used as the copy source. |
| dest | `XMPMeta` |  | The [XMPMeta object](uxp-xmp-meta.md) that receives the copied data. |
| [options] | `number` | `0` | Bit flags for the copy behavior. Combine these constants with a logical OR: - XMPConst.`APPEND_ALL_PROPERTIES`: Copies internal and external properties; the default limits copying to external properties. Only top-level properties are affected. - XMPConst.`APPEND_REPLACE_OLD_VALUES`: Existing properties take the source object's value instead of keeping their current value. Applies throughout the hierarchy. - XMPConst.`APPEND_DELETE_EMPTY_VALUES`: Removes a property when the incoming value is empty. |

**Example**

```js
XMPUtils.appendProperties(source, dest, options);
```

### require('uxp').xmp.XMPUtils — catenateArrayItems(xmpObj, schemaNS, arrayName, [separator], [quotes =], [options])

Builds one string by joining a group of array item values. Pass the result to separateArrayItems() to split it back into array entries.

**Returns**: `string` - the joined string.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| xmpObj | `XMPMeta` |  | [XMPMeta object](uxp-xmp-meta.md) instance that holds the array. |
| schemaNS | `string` |  | Namespace URI string; see [Schema namespace string constants](uxp-xmp-classes.md). |
| arrayName | `string` |  | Array property name string. A general path expression is allowed, and every array item must be a simple string value. |
| [separator] | `string` | `";"` | Separator text placed between items in the result. By default this is '; ', an ASCII semicolon and space (U+003B,U+0020). |
| [quotes =] | `string` |  | For items containing separators, this quote character is used; default: '"', ASCII double quote (U+0022). |
| [options] | `number` | `0` | The concatenation behavior is controlled by this option flag: - XMPConst.`SEPARATE_ALLOW_COMMAS`: Permits commas inside item values, such as "LastName, FirstName". Use the same setting here and in [separateArrayItems()](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-utils.md#separatearrayitemsxmpobj-schemans-arrayname-arrayoptions-concatstring) so the item list can be reconstructed correctly. |

**Example**

```js
XMPUtils.catenateArrayItems(xmpObj, schemaNS, arrayName, separator, quotes, options);
```

### require('uxp').xmp.XMPUtils — composeArrayItemPath(schemaNS, arrayName, itemIndex)

Returns a constructed path-expression string for an array item by using the namespace's registered prefix, in the form:
schemaNS:arrayName[itemIndex]

**Returns**: `string` - path-expression string for an array item.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI string; see [Schema namespace string constants](uxp-xmp-classes.md). |
| arrayName | `string` | Array property name string. A general path expression is allowed. |
| itemIndex | `number` | 1-based position of the item. Use XMPConst.`ARRAY_LAST_ITEM` to target the final existing array item; then the returned path becomes ns:arrayName[last()]. |

**Example**

```js
XMPUtils.composeArrayItemPath(schemaNS, arrayName, itemIndex);
```

### require('uxp').xmp.XMPUtils — composeFieldSelector(schemaNS, arrayName, fieldNS, fieldName, fieldValue)

Builds a path-expression string that selects an alternate item by matching a field value, with registered namespace prefixes; format:
schemaNS:arrayName[fieldNS:fieldName='fieldValue']

**Returns**: `string` - path-expression string for selecting an alternate item by field value.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI string; see [Schema namespace string constants](uxp-xmp-classes.md). |
| arrayName | `string` | Array property name string. A general path expression is allowed. |
| fieldNS | `string` | Field namespace URI string. |
| fieldName | `string` | Field name. A simple XML name is required. |
| fieldValue | `string` | Field value to match. |

**Example**

```js
XMPUtils.composeFieldSelector(schemaNS, arrayName, fieldNS, fieldName, fieldValue);
```

### require('uxp').xmp.XMPUtils — composeLangSelector(schemaNS, arrayName, locale)

Builds a path expression that addresses a language-specific alternate item in an alt text array, using the namespace registered prefix, in the form:
schemaNS:arrayName[@xml:lang='langName']

**Returns**: `string` - path-expression string for selecting a language-specific alternate item in an alt text array.  
**Note**: Do not use this as a replacement for getLocalizedText() or setLocalizedText().
Those methods add language-selection behavior and keep the x-default value aligned.
This helper creates only an explicit-language path expression, and only for that language.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI string; see [Schema namespace string constants](uxp-xmp-classes.md). |
| arrayName | `string` | Array property name string. A general path expression is allowed. |
| locale | `string` | RFC3066 locale code string for the language to select. |

**Example**

```js
XMPUtils.composeLanguageSelector(schemaNS, arrayName, locale);
```

### require('uxp').xmp.XMPUtils — composeStructFieldPath(schemaNS, structName, fieldNS, fieldName)

Creates a path-expression string for a field inside a structure by using the registered namespace prefixes, in the form:
schemaNS:structName/fieldNS:fieldName

**Returns**: `string` - path-expression string for a structure field.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI string; see [Schema namespace string constants](uxp-xmp-classes.md). |
| structName | `string` | Structure property name string. A general path expression is allowed. |
| fieldNS | `string` | Field namespace URI string. |
| fieldName | `string` | Field name. A simple XML name is required. |

**Example**

```js
XMPUtils.composeStructFieldPath(schemaNS, structName, fieldNS, fieldName);
```

### require('uxp').xmp.XMPUtils — composeQualifierPath(schemaNS, propName, qualNS, qualName)

Creates a path-expression string for a qualifier attached to a property by using the namespace's registered prefix, in the form:
schemaNS:propName/?qualNS:qualName

**Returns**: `string` - path-expression string for a qualifier attached to a property.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI string; see [Schema namespace string constants](uxp-xmp-classes.md). |
| propName | `string` | Property name string. A general path expression is allowed. |
| qualNS | `string` | Qualifier namespace URI string. |
| qualName | `string` | Qualifier name. A simple XML name is required. |

**Example**

```js
XMPUtils.composeQualifierPath(schemaNS, propName, qualNS, qualName);
```

### require('uxp').xmp.XMPUtils — duplicateSubtree(source, dest, sourceNS, sourceRoot, destNS, [destRoot], [options])

Copies the requested subtree from `source` into `dest`; both parameters are [XMPMeta object](uxp-xmp-meta.md) instances.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| source | `XMPMeta` |  | The [XMPMeta object](uxp-xmp-meta.md) used as the copy source. |
| dest | `XMPMeta` |  | The [XMPMeta object](uxp-xmp-meta.md) that receives the copied subtree. |
| sourceNS | `string` |  | Source namespace URI string; see [Schema namespace string constants](uxp-xmp-classes.md). |
| sourceRoot | `string` |  | Property name string for the source subtree root. A general path expression is allowed. |
| destNS | `string` |  | Destination namespace URI string; see [Schema namespace string constants](uxp-xmp-classes.md). |
| [destRoot] | `string` |  | Property name string for the destination subtree root. A general path expression is allowed. Defaults to the source root location. |
| [options] | `number` | `0` | Bit flags for the copy behavior. Combine these constants with a logical OR: - XMPConst.`APPEND_ALL_PROPERTIES`: Copies internal and external properties; the default limits copying to external properties. Only top-level properties are affected. - XMPConst.`APPEND_REPLACE_OLD_VALUES`: Existing properties take the source object's value instead of keeping their current value. Applies throughout the hierarchy. - XMPConst.`APPEND_DELETE_EMPTY_VALUES`: Drops the property if the incoming value has no content. |

**Example**

```js
XMPUtils.duplicateSubtree(source, dest, sourceNS, sourceRoot, destNS, destRoot, options);
```

### require('uxp').xmp.XMPUtils — removeProperties(xmpObj, [schemaNS], [propName], [options])

Use this on an [XMPMeta object](uxp-xmp-meta.md) when deleting more than one property.

When schemaNS and propName are both provided, the property is deleted when it is external, including alias properties.

For internal properties, deletion occurs only when XMPConst.`REMOVE_ALL_PROPERTIES` is set.

With schemaNS alone, all external properties in that namespace are deleted,

and internal properties can also be included. Aliases are deleted only when XMPConst.`REMOVE_INCLUDE_ALIASES` is set.

With neither schemaNS nor propName supplied, all external properties are deleted, with optional removal of internal properties.

Alias handling follows automatically because removing the actual associated property covers the alias.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| xmpObj | `XMPMeta` |  | [XMPMeta object](uxp-xmp-meta.md) instance to modify. |
| [schemaNS] | `string` |  | Namespace URI string; see [Schema namespace string constants](uxp-xmp-classes.md). Required when a property name is supplied. |
| [propName] | `string` |  | Property name string. A general path expression is allowed. |
| [options] | `number` | `0` | Bit flags for the deletion behavior. Combine these constants with a logical OR: - XMPConst.`REMOVE_ALL_PROPERTIES`: Delete both internal and external properties; the default deletes external properties only. Applies only to top-level properties. - XMPConst.`REMOVE_INCLUDE_ALIASES`: Delete aliases defined in the namespace. When the property name is supplied, removal happens regardless of this option. |

**Example**

```js
XMPUtils.removeProperties(xmpObj, schemaNS, propName, options);
```

### require('uxp').xmp.XMPUtils — separateArrayItems(xmpObj, schemaNS, arrayName, [arrayOptions], concatString)

Parses the concatenated string returned by catenateArrayItems() and writes the resulting array item strings into the [XMPMeta object](uxp-xmp-meta.md).
It recognizes many separator characters, including semicolons, commas, tab, return, linefeed, and repeated spaces.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| xmpObj | `XMPMeta` |  | [XMPMeta object](uxp-xmp-meta.md) instance that holds the array. |
| schemaNS | `string` |  | Namespace URI string; see [Schema namespace string constants](uxp-xmp-classes.md). |
| arrayName | `string` |  | Array property name string. A general path expression is allowed, and every array item must be a simple string value. |
| [arrayOptions] | `number` | `0` | Bit flags controlling how the separated string updates the array property. Combine these constants with a logical OR: - XMPConst.`APPEND_ALL_PROPERTIES`: Copies internal and external properties; the default limits copying to external properties. Only top-level properties are affected. - XMPConst.`APPEND_REPLACE_OLD_VALUES`: Existing properties take the source object's value instead of keeping their current value. Applies throughout the hierarchy. - XMPConst.`APPEND_DELETE_EMPTY_VALUES`: Drops the property if the incoming value has no content. - XMPConst.`SEPARATE_ALLOW_COMMAS`: Permits commas inside item values. Without it, a value containing a comma, such as "LastName, FirstName", becomes two separate array items. |
| concatString | `string` |  | Concatenated array-value string produced by catenateArrayItems(). |

**Example**

```js
XMPUtils.separateArrayItems(xmpObj, schemaNS, arrayName, arrayOptions, concatString);
```
