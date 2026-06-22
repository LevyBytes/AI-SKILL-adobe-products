# Xmpmeta (part 2)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## XMPScript object reference — XMPMeta object

Bitwise combination of these bit-flag constants: - XMPConst.`SERIALIZE_OMIT_PACKET_WRAPPER` - Omits the XML packet wrapper. - XMPConst.`SERIALIZE_READ_ONLY_PACKET` - Builds a read-only XML packet wrapper. - XMPConst.`SERIALIZE_USE_COMPACT_FORMAT` - Uses a very compact RDF syntax and layout. - XMPConst.`SERIALIZE_USE_PLAIN_XMP` - Serializes plain XMP (not currently supported). - XMPConst.`SERIALIZE_INCLUDE_THUMBNAIL_PAD` - Adds normal JPEG-thumbnail padding space when xmp:Thumbnail is absent. - XMPConst.`SERIALIZE_EXACT_PACKET_LENGTH` - Computes padding so the packet reaches the length supplied by the padding parameter. Throws an exception when the unpadded packet is longer than this value. - XMPConst.`SERIALIZE_WRITE_ALIAS_COMMENTS` - Writes XML comments for aliases.

Optional. Options that determine serialization behavior. They must be logically consistent; conflicting choices cause an exception.

padding

Number

Optional. - With `SERIALIZE_EXACT_PACKET_LENGTH`, this gives the exact packet length, including padding characters added to reach it. - Without `SERIALIZE_EXACT_PACKET_LENGTH`, this gives the number of padding characters to add. - Default 0 uses the appropriate padding amount.

indent

String

Optional. Indentation string. Default is two spaces.

newline

String

Optional. Newline character. Default is U+000A.

baseIndent

Number

Optional. Base indentation for the top XML element; default 0.

| --- | --- | --- |

### Returns

Array of Numbers.

### XMPMeta.setArrayItem()

XMPMetaObj.setArrayItem(schemaNS, arrayName, itemIndex, itemValue[, itemOptions])

### Description

Replaces an array item, or appends one. The array must already exist. For new items, prefer appendArrayItem() or insertArrayItem().

### Parameters

Parameter

Type

Description

schemaNS

Schema namespace string constants

Namespace URI value.

arrayName

String

Array-type property name; a general path expression is accepted.

itemIndex

Number

1-based position used for the new item. Use XMPConst.`ARRAY_LAST_ITEM` to replace the final item already in the array.

itemValue

String

New item value string. Use null for array items without values.

itemOptions

Flag for the new item when one is created. One of: - 0: Default simple item. - XMPConst.`PROP_IS_ARRAY`: Marks the item as an array (alt, bag, or seq). - XMPConst.`PROP_IS_STRUCT`: Marks the item as a nested-field structure.

Optional

| --- | --- | --- |

### Returns

Nothing

### XMPMeta.setLocalizedText()

XMPMetaObj.setLocalizedText(schemaNS, altTextName, genericLang, specificLang, itemValue, setOptions)

### Description

Sets the text value for a particular language in an alternate-text array. Special cases for the x-default item are handled.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI value. |
| altTextName | String | Alternate-text array name string; general path expressions are allowed. |
| genericLang | String | RFC 3066 primary subtag for the generic language. Null and the empty string are allowed. |
| specificLang | String | RFC 3066 primary subtag for the specific language; for example, en-US. A value is required. |
| itemValue | String | New text value. |
| setOptions | Unknown | Unused. |

### Returns

Nothing

### XMPMeta.setStructField()

XMPMetaObj.setStructField(schemaNS, structName, fieldNS, fieldName, fieldValue[, options])

### Description

Sets a field value inside a structure-type property. If the named field does not exist, it creates the field; if the named structure does not exist, it creates a new structure containing that field.

### Parameters

Parameter

Type

Description

schemaNS

Schema namespace string constants

Namespace URI value.

structName

String

Name string for an existing structure; general path expressions are allowed.

fieldNS

Schema namespace string constants

Namespace string for the field type.

fieldName

String

Field name string. It must be a simple XML name.

fieldValue

String

New field contents as a string. Use null when a field has no value.

options

Flags defining the structure to create. One of: - 0 - simple item (default). - XMPConst.`PROP_IS_ARRAY` - array item (alt, bag, or seq). - XMPConst.`PROP_IS_STRUCT` - structure containing nested fields.

Optional, and consulted only during structure creation.

| --- | --- | --- |

### Returns

Nothing

### XMPMeta.setQualifier()

XMPMetaObj.setQualifier(schemaNS, propName, qualNS, qualName, qualValue[, options])

### Description

Adds a qualifier to a metadata property. The target can be a simple property, an array item, a struct field, or an existing qualifier.

### Parameters

Parameter

Type

Description

schemaNS

Schema namespace string constants

Namespace URI string.

propName

String

Existing property name string. A general path expression is allowed.

qualNS

String

Qualifier namespace URI. It follows the same URI and prefix rules used by schema namespaces.

qualName

String

Qualifier name. It must be a simple XML name and uses property-name prefix rules.

qualValue

String

New qualifier contents as a string. Use null when the qualifier has no value.

options

Flags defining the qualifier. One of: - 0 - simple item (default). - XMPConst.`PROP_IS_ARRAY` - array item (alt, bag, or seq). - XMPConst.`PROP_IS_STRUCT` - structure containing nested fields.

Optional, and used only during qualifier creation.

| --- | --- | --- |

### Returns

Nothing

### XMPMeta.setProperty()

XMPMetaObj.setProperty(schemaNS, propName, propValue[, setOptions, valueType])

### Description

Assigns a value to a simple metadata property, creates that property when needed, or creates a new array or structure property. For array and structure creation, prefer setArrayItem() and setStructField(). Use this method for top-level simple properties, or after composing paths with the XMPUtils path helpers.

### Parameters

Parameter

Type

Description

schemaNS

Schema namespace string constants

Namespace URI string.

propName

String

Property name string. A general path expression is allowed.

propValue

String

New property contents as a string. Use null to create an array or a non-leaf structure property.

setOptions

For a simple-valued property, use 0 by default. Other constant values are: - 0 - simple item (default). - XMPConst.`PROP_IS_ARRAY` - array item (alt, bag, or seq). - XMPConst.`PROP_IS_STRUCT` - structure containing nested fields.

Optional. When the named property is absent, this selects the property kind to create. Default: 0.

valueType

Data type for the property. Allowed values: - XMPConst.STRING - XMPConst.INTEGER - XMPConst.NUMBER - XMPConst.BOOLEAN - XMPConst.XMPDATE

Optional. When provided, the supplied value is coerced into that type.

| --- | --- | --- |

### Returns

Nothing

### XMPMeta.sort()

XMPMetaObj.sort()

### Description

Orders the XMP contents alphabetically.

- At the top level, namespaces are ordered by prefix.
- Inside a namespace, top-level properties are ordered by name.
- Inside a struct, fields are ordered by qualified name (the XML prefix:local form).
- Unordered arrays of simple items are ordered by value.
- Language alternative arrays use the xml:lang qualifiers for ordering, putting the "x-default" item first.

### Returns

Nothing
