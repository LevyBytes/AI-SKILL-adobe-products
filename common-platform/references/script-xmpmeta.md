# Xmpmeta (part 1)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## XMPScript object reference — XMPMeta object

The core services of the XMP Toolkit are exposed through this class. Its functions let code create and query metadata properties in an XMP namespace. Static functions on the class also handle namespace and alias creation and lookup.

The class has one static property for XMP version information; its instances have no JavaScript properties. Each object wraps a set of metadata properties, and the object functions provide access to them.

With suitable path expressions, the generic getProperty(), setProperty(), and deleteProperty() functions work across all property types. For convenience, the object also includes functions targeted to particular property kinds, such as arrays.

### XMPMeta object constructors

Create an XMPMeta object with the new operator. The constructor can take an RDF/XML serialized metadata packet either as a string or as an array of numbers containing byte values only, and it returns the new object. Without an argument, the new object starts empty; use its functions to add namespaces and properties.

At first construction, the library performs standard namespace and alias registration:

```
new XMPMeta ( ); // creates an empty object
new XMPMeta ( packet );
new XMPMeta ( buffer );
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| packet | String | XML file or XMP packet. |
| buffer | Array of Numbers | Bytes encoded as UTF-8 or UTF-16 from an XML file or XMP packet. This array comes from XMPMeta.serializeToArray. |

### XMPMeta class properties

This static property is provided by the XMPMeta class, so an instance is not needed to read it.

### Properties

| Property | Type | Description |
| --- | --- | --- |
| version | String | Descriptive string for this XMP Toolkit version. |

### XMPMeta class functions

These static functions are provided by the XMPMeta class, so no instance is needed to call them.

### XMPMeta.deleteAlias()

XMPMeta.deleteAlias(aliasNS, aliasProp)

### Description

Removes the specified alias without removing the property it points to.

If the alias is missing, no action occurs.

Note

Implementation is not yet present in the XMP Toolkit.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| aliasNS | String | Namespace URI value; see Schema namespace string constants. |
| aliasProp | String | Property string for the alias. |

### Returns

Nothing

### XMPMeta.deleteNamespace()

XMPMeta.deleteNamespace(namespaceURI)

### Description

Removes a registered pairing of prefix and namespace URI.

Note

Implementation is not yet present in the XMP Toolkit.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| namespaceURI | String | Namespace URI value; see Schema namespace string constants. |

### Returns

Nothing

### XMPMeta.dumpAliases()

XMPMeta.dumpAliases()

### Description

Creates a human-readable string listing registered aliases and their targets, then returns it.

### Returns

String

### XMPMeta.dumpNamespaces()

XMPMeta.dumpNamespaces()

### Description

Creates a human-readable string listing registered namespace URIs and their associated prefixes, then returns it.

### Returns

String

### XMPMeta.getNamespacePrefix()

XMPMeta.getNamespacePrefix(namespaceURI)

### Description

Looks up the prefix for a registered namespace URI.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| namespaceURI | String | Namespace URI value; see Schema namespace string constants. |

### Returns

The prefix string with a trailing colon.

### XMPMeta.getNamespaceURI()

XMPMeta.getNamespaceURI(namespacePrefix)

### Description

Looks up the registered namespace URI for a namespace prefix.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| namespacePrefix | String | Prefix string for the namespace. |

### Returns

The URI String.

### XMPMeta.registerAlias()

XMPMeta.registerAlias(aliasNS, aliasProp, actualNS, actualProp, arrayForm)

### Description

Defines an alias from one namespace and property to another. When the alias and actual property share a data type, the mapping can be direct; a simple alias can also target an array item, including the first item or the x-default entry in an alternate-text array.

Several alias names can point to the same actual property when their forms match. If the same alias and form already exists, the call leaves it unchanged.

### Parameters

Parameter

Type

Description

aliasNS

String

Alias namespace string. See Schema namespace string constants.

aliasProp

String

Alias property, as a simple name string.

actualNS

Schema namespace string constants

Namespace string for the aliased property.

actualProp

String

Aliased property, as a simple name string.

arrayForm

Number

Array form used when a simple alias targets an array item; it defines array creation behavior when that alias sets the array for the first time. Constants include: - XMPConst.`ALIAS_TO_SIMPLE_PROP` (default) - Direct mapping. It may map a simple property to a simple property, an array to an array, or a structure to a structure. - XMPConst.`ALIAS_TO_ARRAY` - The actual property is an unordered array; the alias targets the first array element. - XMPConst.`ALIAS_TO_ORDERED_ARRAY` - The actual property is an ordered array; the alias targets the first array element. - XMPConst.`ALIAS_TO_ALT_ARRAY` - The actual property is an alternate array; the alias targets the first array element. - XMPConst.`ALIAS_TO_ALT_TEXT` - The actual property is an alternate-text array (a localized property); the alias targets the x-default array element.

| --- | --- | --- |

### Returns

Nothing

### XMPMeta.registerNamespace()

XMPMeta.registerNamespace(namespaceURI, suggestedPrefix)

### Description

Registers a namespace under a prefix. If suggestedPrefix is already being used, the function generates, registers, and returns another prefix.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| namespaceURI | Schema namespace string constants | Namespace URI value. |
| suggestedPrefix | String | Suggested namespace prefix string. |

### Returns

A String with the prefix that was actually registered. It matches suggestedPrefix unless another namespace already uses that prefix.

### XMPMeta.resolveAlias()

XMPMeta.resolveAlias(aliasNS, aliasProp)

### Description

Gets details about the actual property mapped by an alias.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI string for the alias. |
| aliasProp | Property string for the alias. |  |

### Returns

An XMPAliasInfo object.

### XMPMeta object functions

### XMPMeta.appendArrayItem()

XMPMetaObj.appendArrayItem(schemaNS, arrayName[, itemOptions], itemValue[, arrayOptions])

### Description

Appends an item to an existing array, or creates a new array-type property when the named array is missing.

### Parameters

Parameter

Type

Description

schemaNS

Schema namespace string constants.

Namespace URI value.

arrayName

String

Array-type property name string; general path expressions are allowed.

itemOptions

Number

Optional. Flag for the new item when one is being made. One of: - 0: Default value; a simple item, or the type implied by arrayOptions. - XMPConst.`PROP_IS_ARRAY`: Marks the item as an array (alt, bag, or seq). - XMPConst.`PROP_IS_STRUCT`: Marks the item as a nested-field structure.

itemValue

String

New item value string. Use null for array items without values.

arrayOptions

Number

Optional. Flag for the array form. Required when the array is created; ignored after the array exists. One of: - XMPConst.`ARRAY_IS_ORDERED` - Item order matters; also implies XMPConst.`PROP_IS_ARRAY`. - XMPConst.`ARRAY_IS_ALTERNATIVE` - Items are exclusive alternatives; also implies XMPConst.`PROP_IS_ARRAY` and XMPConst.`ARRAY_IS_ORDERED`.

| --- | --- | --- |

### Returns

Nothing

### XMPMeta.countArrayItems()

XMPMetaObj.countArrayItems(schemaNS, arrayName)

### Description

Reports how many items an array-type metadata property contains.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI value. |
| arrayName | String | Array-type property name; a general path expression is allowed. |

### Returns

Number

### XMPMeta.deleteArrayItem()

XMPMetaObj.deleteArrayItem(schemaNS, arrayName, itemIndex)

### Description

Deletes the metadata tree rooted at the specified array item.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI value. |
| arrayName | String | Array-type property name string; general path expressions are allowed. |
| itemIndex | Number | 1-based item position. Use XMPConst.`ARRAY_LAST_ITEM` for the final item already in the array. |

### Returns

Nothing

### XMPMeta.deleteProperty()

XMPMetaObj.deleteProperty(schemaNS, propName)

### Description

Deletes the metadata tree rooted at the specified property. If the property is absent, no action occurs.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI value. |
| propName | String | Property name string; general path expressions are allowed. |

### Returns

Nothing

### XMPMeta.deleteStructField()

XMPMetaObj.deleteStructField(schemaNS, structName, fieldNS, fieldName)

### Description

Deletes the metadata tree rooted at the specified structure field.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI value. |
| structName | String | Structure name string; general path expressions are allowed. |
| fieldNS | Schema namespace string constants | Namespace string for the field type. |
| fieldName | String | Field name string. It must be a simple XML name. |

### Returns

Nothing

### XMPMeta.deleteQualifier()

XMPMetaObj.deleteQualifier(schemaNS, structName, qualNS, qualName)

### Description

Deletes the metadata tree rooted at the specified qualifier. If the qualifier is absent, no action occurs.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI value. |
| structName | String | Structure name string; general path expressions are allowed. |
| qualNS | String | URI string for the qualifier namespace. |
| qualName | String | Qualifier name string. It must be a simple XML name. |

### Returns

Nothing

### XMPMeta.doesArrayItemExist()

XMPMetaObj.doesArrayItemExist(schemaNS, arrayName, itemIndex)

### Description

Reports whether an array item at the specified index exists in an existing metadata array.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI value. |
| arrayName | String | Array name string; general path expressions are allowed. |
| itemIndex | Number | 1-based item position. |

### Returns

Boolean. true when both the array and item are present.

### XMPMeta.doesPropertyExist()

XMPMetaObj.doesPropertyExist(schemaNS, propName)

### Description

Reports whether the metadata currently contains a property with the specified name.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI value. |
| propName | String | Property name string; general path expressions are allowed. |

### Returns

Boolean. true when the property is present.

### XMPMeta.doesStructFieldExist()

XMPMetaObj.deleteStructField(schemaNS, structName, fieldNS, fieldName)

### Description

Reports whether the metadata currently contains a structure field with the specified name.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI value. |
| structName | String | Structure name string; general path expressions are allowed. |
| fieldNS | Schema namespace string constants | Namespace string for the field type. |
| fieldName | String | Field name string. It must be a simple XML name. |

### Returns

Boolean. true when both the structure and field are present.

### XMPMeta.doesQualifierExist()

XMPMetaObj.doesQualifierExist(schemaNS, structName, qualNS, qualName)

### Description

Reports whether a qualifier with the specified name exists for a given property.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI value. |
| structName | String | Structure name string; general path expressions are allowed. |
| qualNS | String | URI string for the qualifier namespace. |
| qualName | String | Qualifier name string. It must be a simple XML name. |

### Returns

Boolean. true when both the property and qualifier are present.

### XMPMeta.dumpObject()

XMPMetaObj.dumpObject()

### Description

Creates and returns a string containing this object's metadata content as RDF.

### Returns

String

### XMPMeta.getArrayItem()

XMPMetaObj.getArrayItem(schemaNS, arrayName, itemIndex)

### Description

Gets one array entry from metadata.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI value. |
| arrayName | String | Array name string; general path expressions are allowed. |
| itemIndex | Number | 1-based item position. Use XMPConst.`ARRAY_LAST_ITEM` for the final item already in the array. |

### Returns

An XMPProperty object, or undefined when the property is absent.

### XMPMeta.getLocalizedText()

XMPMetaObj.getLocalizedText(schemaNS, altTextName, genericLang, specificLang)

### Description

Gets the text value for a particular language from an alternate-text array. It first attempts the specific language, then the generic language when one is supplied, then any x-default item, and otherwise the first item.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI value. |
| altTextName | String | Alternate-text array name string; general path expressions are allowed. |
| genericLang | String | RFC 3066 primary subtag for the generic language. Null and the empty string are allowed. |
| specificLang | String | RFC 3066 primary subtag for the specific language; for example, en-US. A value is required. |

### Returns

String, or undefined if no matching value is found.

### XMPMeta.getProperty()

XMPMetaObj.getProperty(schemaNS, propName[, valueType])

### Description

Gets a metadata property's value and options. Use it with top-level simple properties, or after XMPUtils path-composition functions have built the path.

### Parameters

Parameter

Type

Description

schemaNS

Schema namespace string constants

Namespace URI value.

propName

String

Property name string; general path expressions are allowed.

valueType

String

Optional. Data type for the property: - XMPConst.STRING - XMPConst.INTEGER - XMPConst.NUMBER - XMPConst.BOOLEAN - XMPConst.XMPDATE

| --- | --- | --- |

### Returns

An XMPProperty object, or undefined when the property is absent.

### XMPMeta.getStructField()

XMPMetaObj.getStructField(schemaNS, structName, fieldNS, fieldName)

### Description

Gets the value of a field inside a nested metadata structure.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI value. |
| structName | String | Structure name string; general path expressions are allowed. |
| fieldNS | Schema namespace string constants | Namespace string for the field type. |
| fieldName | String | Field name string. It must be a simple XML name. |

### Returns

An XMPProperty object, or undefined when the property is absent.

### XMPMeta.getQualifier()

XMPMetaObj.getQualifier(schemaNS, structName, qualNS, qualName)

### Description

Gets a metadata property's attached qualifier.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI value. |
| structName | String | Structure name string; general path expressions are allowed. |
| qualNS | String | URI string for the qualifier namespace. |
| qualName | String | Qualifier name string. It must be a simple XML name. |

### Returns

An XMPProperty object, or undefined when the property is absent.

### XMPMeta.insertArrayItem()

XMPMetaObj.insertArrayItem(schemaNS, arrayName, itemIndex, itemValue[, itemOptions])

### Description

Inserts an item into an array before an existing item. All later item indexes are increased. The array must already exist.

### Parameters

Parameter

Type

Description

schemaNS

Namespace URI value. See Schema namespace string constants.

arrayName

String

Array-type property name; a general path expression is accepted.

itemIndex

Number

1-based position where the new item is inserted. Use XMPConst.`ARRAY_LAST_ITEM` for the final item already in the array.

itemValue

String

New item value. Use null for array items without values.

itemOptions

Number

Optional. Flag for the new item when one is created. One of: - 0: Default simple item. - XMPConst.`PROP_IS_ARRAY`: Marks the item as an array (alt, bag, or seq). - XMPConst.`PROP_IS_STRUCT`: Marks the item as a nested-field structure.

| --- | --- | --- |

### Returns

Nothing

### XMPMeta.iterator()

XMPMetaObj.iterator(options, schemaNS, propName)

### Description

Creates an iteration object for walking properties, arrays, and qualifiers within this metadata. Use options plus a namespace and property to restrict both the range and detail level of returned items.

### Parameters

Parameter

Type

Description

options

Bitwise combination of these bit-flag constants: - XMPConst.`ITERATOR_JUST_CHILDREN` - Restricts iteration to direct children of the root property. By default, iteration descends into subtrees. - XMPConst.`ITERATOR_JUST_LEAFNODES` - Restricts iteration to leaf nodes. By default, iteration visits every node in a subtree. - XMPConst.`ITERATOR_JUST_LEAFNAMES` - Returns just the leaf segment of the path. By default, a full path is returned. - XMPConst.`ITERATOR_INCLUDE_ALIASES` - Includes aliases. By default, only actual properties are considered. - XMPConst.`ITERATOR_OMIT_QUALIFIERS` - Leaves qualifiers out of iteration.

Options that determine iteration behavior and returned value form.

schemaNS

Schema namespace string constants

Namespace URI value.

propName

String

Array-type property name; a general path expression is accepted.

| --- | --- | --- |

### Returns

XMPIterator object for this metadata object.

### XMPMeta.serialize()

XMPMetaObj.serialize([options, padding, indent, newline, baseIndent])

### Description

Serializes this XMP metadata to an RDF string.

### Parameters

Parameter

Type

Description

options

Optional. Bitwise combination of these bit-flag constants: - XMPConst.`SERIALIZE_OMIT_PACKET_WRAPPER` - Omits the XML packet wrapper. - XMPConst.`SERIALIZE_READ_ONLY_PACKET` - Builds a read-only XML packet wrapper. - XMPConst.`SERIALIZE_USE_COMPACT_FORMAT` - Uses a very compact RDF syntax and layout. - XMPConst.`SERIALIZE_USE_PLAIN_XMP` - Serializes plain XMP (not currently supported). - XMPConst.`SERIALIZE_INCLUDE_THUMBNAIL_PAD` - Adds normal JPEG-thumbnail padding space when xmp:Thumbnail is absent. - XMPConst.`SERIALIZE_EXACT_PACKET_LENGTH` - Computes padding so the packet reaches the length supplied by the padding parameter. Throws an exception when the unpadded packet is longer than this value. - XMPConst.`SERIALIZE_WRITE_ALIAS_COMMENTS` - Writes XML comments for aliases.

Options that determine serialization behavior. They must be logically consistent; conflicting choices cause an exception.

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

String

### XMPMeta.serializeToArray()

XMPMetaObj.serializeToArray([options, padding, indent, newline, baseIndent])

### Description

Serializes this XMP metadata to an RDF string, then converts that string into one-byte numeric values for characters encoded as UTF-8 or UTF-16.

### Parameters

Parameter

Type

Description

options
