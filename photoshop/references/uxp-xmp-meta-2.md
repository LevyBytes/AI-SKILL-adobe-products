# Xmp Meta (part 2)

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## setStructField(schemaNS, structName, fieldNS, fieldName, fieldValue, [options])

Use this method to assign a value to a field inside a structure-type property. If that field is missing, the call creates it; if the structure itself is missing, the call creates the structure and the named field.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| schemaNS | `string` |  | Namespace URI text. See [Schema namespace string constants](uxp-xmp-classes.md). |
| structName | `string` |  | Name text for an existing structure. A general path expression is allowed. |
| fieldNS | `string` |  | Namespace text for the field type. See [Schema namespace string constants](uxp-xmp-classes.md). |
| fieldName | `string` |  | Field name text. It must be a simple XML name. |
| fieldValue | `string` |  | New field value text. Pass null for fields with no value. |
| [options] | `number` | `0` | Flags describing a new structure, used only when this call creates the structure. Choose one of: - 0: Simple item; this is the default. - XMPConst.`PROP_IS_ARRAY`: Marks the item as an array (of type alt, bag, or seq). - XMPConst.`PROP_IS_STRUCT`: Marks the item as structured data containing child members. |

**Example**

```js
XMPMetaObj.setStructField(schemaNS, structName, fieldNS, fieldName, fieldValue[, options])
```

## setQualifier(schemaNS, propName, qualNS, qualName, qualValue, [options])

This method adds a qualifier onto a metadata property. Qualifiers may be placed on simple properties, array items, struct fields, and other qualifiers.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| schemaNS | `string` |  | Namespace URI text. See [Schema namespace string constants](uxp-xmp-classes.md). |
| propName | `string` |  | Name text for an existing property. A general path expression is allowed. |
| qualNS | `string` |  | URI for the qualifier namespace. URI and prefix handling match a schema namespace. |
| qualName | `string` |  | Qualifier name. It must be a simple XML name and uses prefixes the same way a property name does. |
| qualValue | `string` |  | New qualifier value text. Pass null for qualifiers with no value. |
| [options] | `number` | `0` | Flags describing a new structure, used only when this call creates the structure. Choose one of: - 0: Simple item; this is the default. - XMPConst.`PROP_IS_ARRAY`: Marks the item as an array (of type alt, bag, or seq). - XMPConst.`PROP_IS_STRUCT`: Marks the item as structured data containing child members. |

**Example**

```js
XMPMetaObj.setQualifier(schemaNS, propName, qualNS, qualName, qualValue[, options])
```

## setProperty(schemaNS, propName, propValue, [setOptions], [valueType])

This call assigns a simple metadata property's value and creates that property when needed; it can also create array or structure properties.
When creating arrays or structures, prefer [setArrayItem()](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-meta.md#setarrayitemschemans-arrayname-itemindex-itemvalue-itemoptions) and [setStructField()](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-meta.md#setstructfieldschemans-structname-fieldns-fieldname-fieldvalue-options).
Use it for top-level simple properties, either to create them or set them, and after composing paths with functions on the [XMPUtils object](uxp-xmp-classes-2.md).

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| schemaNS | `string` |  | Namespace URI text. See [Schema namespace string constants](uxp-xmp-classes.md). |
| propName | `string` |  | Property name text. A general path expression is allowed. |
| propValue | `string` |  | New property value text. Use null when creating an array or a structure property above the leaf level. |
| [setOptions] | `number` | `0` | Flags describing a new structure, used only when this call creates the structure. Choose one of: - 0: Simple item; this is the default. - XMPConst.`PROP_IS_ARRAY`: Marks the item as an array (of type alt, bag, or seq). - XMPConst.`PROP_IS_STRUCT`: Marks the item as structured data containing child members. |
| [valueType] | `string` | `"\"\""` | Data type to apply to the property. When supplied, the value is converted to this type. Choose one of: - XMPConst.STRING - XMPConst.INTEGER - XMPConst.NUMBER - XMPConst.BOOLEAN - XMPConst.XMPDATE |

**Example**

```js
XMPMetaObj.setProperty(schemaNS, propName, propValue[, setOptions, valueType])
```

## sort()

Alphabetical ordering is applied across the XMP contents. At the top level, namespace prefixes determine the namespace order.
Inside each namespace, top-level properties are ordered by name. Inside a struct, field ordering uses the qualified XML prefix:local name.
For unordered arrays containing simple items, values are sorted. Language alternative arrays are ordered by xml:lang qualifier, with "x-default" first.

**Example**

```js
XMPMetaObj.sort();
```

## deleteNamespace(namespaceURI)

Removes a registered prefix and namespace URI pairing.

| Param | Type | Description |
| --- | --- | --- |
| namespaceURI | `string` | Namespace URI text. See [Schema namespace string constants](uxp-xmp-classes.md). |

**Example**

```js
XMPMeta.deleteNamespace(namespaceURI);
```

## dumpNamespaces(namespaceURI)

This method returns a readable string listing registered namespace URIs together with their prefixes.

**Returns**: `string` - a list of registered namespace URIs paired with their prefixes.

| Param | Type | Description |
| --- | --- | --- |
| namespaceURI | `string` | Namespace URI text. See [Schema namespace string constants](uxp-xmp-classes.md). |

**Example**

```js
XMPMeta.dumpNamespaces();
```

## getNamespacePrefix(namespaceURI)

Returns the prefix mapped to a registered namespace URI.

**Returns**: `string` - prefix text with a trailing colon.

| Param | Type | Description |
| --- | --- | --- |
| namespaceURI | `string` | Namespace URI text. See [Schema namespace string constants](uxp-xmp-classes.md). |

**Example**

```js
XMPMeta.getNamespacePrefix(namespaceURI);
```

## getNamespaceURI(namespacePrefix)

Looks up the registered namespace URI for a namespace prefix.

**Returns**: `string` - URI text.

| Param | Type | Description |
| --- | --- | --- |
| namespacePrefix | `string` | Namespace prefix text. |

**Example**

```js
XMPMeta.getNamespaceURI(namespacePrefix);
```

## registerNamespace(namespaceURI, suggestedPrefix)

This method registers a namespace and prefix. When the suggested prefix is already taken, it creates, registers, and returns another prefix.

**Returns**: `string` - string containing the prefix that was actually registered. It matches suggestedPrefix unless that prefix is already bound to another namespace.

| Param | Type | Description |
| --- | --- | --- |
| namespaceURI | `string` | Namespace URI text. See [Schema namespace string constants](uxp-xmp-classes.md). |
| suggestedPrefix | `string` | Suggested namespace prefix text. |

**Example**

```js
XMPMeta.registerNamespace(namespaceURI, suggestedPrefix);
```
