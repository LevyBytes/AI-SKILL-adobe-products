# Xmp Meta (part 1)

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

XMPMeta
This class is the XMP Toolkit's core service surface. Its functions create and query metadata properties within an XMP namespace. Static functions on the class handle namespace and alias creation and queries.

A single static property supplies XMP version information; instances expose no JavaScript properties. Metadata properties are held inside the object and reached through its functions.

For broad property operations, use [getProperty()](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-meta.md#getpropertyschemans-propname-valuetype), [setProperty()](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-meta.md#setpropertyschemans-propname-propvalue-setoptions-valuetype), and [deleteProperty()](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-meta.md#deletepropertyschemans-propname) with suitably composed path expressions. The object also includes narrower helpers for particular property kinds, including arrays.

**Since**: v7.2.0

## XMPMeta(packet, buffer)

Create an `XMPMeta` instance with `new`. Pass either an RDF/XML serialized metadata packet as a string or an array whose entries are byte values. The call produces the new object. With no argument, the object starts empty, and its functions can then add namespaces and properties.

| Param | Type | Description |
| --- | --- | --- |
| packet | `string` | Holds an XML file or XMP packet in a String. |
| buffer | `string` | Array of Number values containing UTF-8 or UTF-16 bytes for an XML file or XMP packet. XMPMeta.:ref:xmpmeta-serializeToArray produces this array. |

**Example**

```js
// Create an XMPMeta object using property based APIs

let { XMPMeta, XMPConst } = require("uxp").xmp;
let meta = new XMPMeta();
meta.setProperty(XMPConst.NS_XMP, "Name", "vkumarg");
let prop = meta.getProperty(XMPConst.NS_XMP, "Name");
console.log(prop.namespace);
console.log(prop.options);
console.log(prop.path);
// checking for the property existence and deleting it
if (meta.doesPropertyExist(XMPConst.NS_XMP, "Name")) {
  meta.deleteProperty(XMPConst.NS_XMP, "Name");
}

if (!meta.doesPropertyExist(XMPConst.NS_XMP, "Name")) {
  console.log("Property doesn't exist");
} else {
  console.log("Property exists");
}
```

**Example**

```js
// Create an XMPMeta object using struct based APIs

let { XMPDateTime, XMPMeta, XMPConst } = require("uxp").xmp;
let meta = new XMPMeta();

let jsDate = new Date("2007-04-10T17:54:50+01:00");
let xmpDate = new XMPDateTime(jsDate);
meta.setProperty(XMPConst.NS_XMP, "CreateDate", xmpDate, XMPConst.XMPDATE);
meta.doesPropertyExist(XMPConst.NS_XMP, "CreateDate");
let prop = meta.getProperty(XMPConst.NS_XMP, "CreateDate", XMPConst.XMPDATE);
meta.deleteProperty(XMPConst.NS_XMP, "CreateDate");

meta.setStructField(
  XMPConst.NS_XML,
  "structNameSample",
  XMPConst.NS_XMP,
  "sampleFieldName",
  "sampleFieldValue",
);
if (
  meta.doesStructFieldExist(XMPConst.NS_XML, "structNameSample", XMPConst.NS_XMP, "sampleFieldName")
) {
  prop = meta.getStructField(
    XMPConst.NS_XML,
    "structNameSample",
    XMPConst.NS_XMP,
    "sampleFieldName",
  );
  meta.deleteStructField(XMPConst.NS_XML, "structNameSample", XMPConst.NS_XMP, "sampleFieldName");
  if (
    meta.doesStructFieldExist(
      XMPConst.NS_XML,
      "structNameSample",
      XMPConst.NS_XMP,
      "sampleFieldName",
    )
  ) {
    console.log("Struct field exists");
  } else {
    console.log("Struct field doesn't exist");
  }
} else {
  console.log("Struct field doesn't exist");
}
```

## appendArrayItem(schemaNS, arrayName, itemValue, [itemOptions], [arrayOptions])

Adds an item to an array that already exists. If no property with that array name is present, it creates a new array-type property first.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| schemaNS | `string` |  | Namespace URI value; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| arrayName | `string` |  | String name for the array-type property; a general path expression is allowed. |
| itemValue | `string` |  | String value for the item being added. Use null when an array item carries no value. |
| [itemOptions] | `number` | `0` | Flag applied to the item when the call creates it. One of: - 0: simple item, or the type inferred from arrayOptions. - XMPConst.`PROP_IS_ARRAY`: array item, using alt, bag, or seq form. - XMPConst.`PROP_IS_STRUCT`: structured item with child fields. |
| [arrayOptions] | `number` | `0` | Flag describing the array shape. Provide it when the array is created; when the array exists already, the value is ignored. One of: - XMPConst.`ARRAY_IS_ORDERED`: item sequence matters. Implies XMPConst.`PROP_IS_A`rray - XMPConst.`ARRAY_IS_ALTERNATIVE`: alternate choices exclude one another. Also sets XMPConst.`PROP_IS_ARRAY` plus XMPConst.`ARRAY_IS_ORDERED`` for alternate arrays.\<br\>\</br\> |

**Example**

```js
XMPMetaObj.appendArrayItem(schemaNS, arrayName, itemValue[, itemOptions, arrayOptions])
```

## countArrayItems(schemaNS, arrayName)

Gives back the item count for an array-type metadata property.

**Returns**: `number` - count of items

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI value; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| arrayName | `string` | String name for the array-type property; a general path expression is allowed. |

**Example**

```js
XMPMetaObj.countArrayItems(schemaNS, arrayName);
```

## deleteArrayItem(schemaNS, arrayName, itemIndex)

Removes the metadata subtree rooted at the specified array item.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI value; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| arrayName | `string` | String name for the array-type property; a general path expression is allowed. |
| itemIndex | `number` | 1-based item position. XMPConst.`ARRAY_LAST_ITEM` targets the final item currently in the array. |

**Example**

```js
XMPMetaObj.deleteArrayItem(schemaNS, arrayName, itemIndex);
```

## deleteProperty(schemaNS, propName)

Removes the metadata subtree rooted at the specified property. Missing properties are ignored.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI value; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| propName | `string` | String name for the property; a general path expression is allowed. |

**Example**

```js
XMPMetaObj.deleteProperty(schemaNS, propName);
```

## deleteStructField(schemaNS, structName, fieldNS, fieldName)

Deletes the metadata subtree whose root is the selected structure field.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI value; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| structName | `string` | String name for the structure; a general path expression is allowed. |
| fieldNS | `string` | Field-type namespace string; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| fieldName | `string` | Field name string; a simple XML name is required. |

**Example**

```js
XMPMetaObj.deleteStructField(schemaNS, structName, fieldNS, fieldName);
```

## deleteQualifier(schemaNS, structName, qualNS, qualName)

Deletes the metadata subtree rooted at the chosen qualifier. When that qualifier is absent, the call has no effect.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI value; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| structName | `string` | String name for the structure; a general path expression is allowed. |
| qualNS | `string` | URI string for the qualifier namespace. |
| qualName | `string` | Qualifier name string; a simple XML name is required. |

**Example**

```js
XMPMetaObj.deleteQualifier(schemaNS, structName, qualNS, qualName);
```

## doesArrayItemExist(schemaNS, arrayName, itemIndex)

Checks whether the metadata contains an existing array with an item at the requested index.

**Returns**: `boolean` - true when both the array and item are present.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI value; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| arrayName | `string` | String name for the array; a general path expression is allowed. |
| itemIndex | `number` | 1-based item position. |

**Example**

```js
XMPMetaObj.doesArrayItemExist(schemaNS, arrayName, itemIndex);
```

## doesPropertyExist(schemaNS, propName)

Checks whether the metadata currently contains a property with the requested name.

**Returns**: `boolean` - true when the property is present.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI value; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| propName | `string` | String name for the property; a general path expression is allowed. |

**Example**

```js
XMPMetaObj.doesPropertyExist(schemaNS, propName);
```

## doesStructFieldExist(schemaNS, structName, fieldNS, fieldName)

Checks whether the metadata currently includes the named field inside the specified structure.

**Returns**: `boolean` - true when both the structure and field are present.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI value; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| structName | `string` | String name for the structure; a general path expression is allowed. |
| fieldNS | `string` | Field-type namespace string; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| fieldName | `string` | Field name string; a simple XML name is required. |

**Example**

```js
XMPMetaObj.doesStructFieldExist(schemaNS, structName, fieldNS, fieldName);
```

## doesQualifierExist(schemaNS, structName, qualNS, qualName)

Checks whether the requested qualifier is present for the specified property.

**Returns**: `boolean` - true when both the property and qualifier are present.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI value; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| structName | `string` | String name for the structure; a general path expression is allowed. |
| qualNS | `string` | URI string for the qualifier namespace. |
| qualName | `string` | Qualifier name string; a simple XML name is required. |

**Example**

```js
XMPMetaObj.doesQualifierExist(schemaNS, structName, qualNS, qualName);
```

## dumpObject()

Builds a string representation of this object's metadata content as RDF and returns it.

**Returns**: `string` - RDF string containing this object's metadata content.  
**Example**

```js
XMPMetaObj.dumpObject();
```

## getArrayItem(schemaNS, arrayName, itemIndex)

Reads one item from an array-type metadata property.
The result is [XMPProperty](uxp-xmp-classes-2.md).

**Returns**: `XMPProperty` \| `undefined` - file contents.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI value; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| arrayName | `string` | String name for the array; a general path expression is allowed. |
| itemIndex | `number` | 1-based item position. XMPConst.`ARRAY_LAST_ITEM` targets the final item currently in the array. |

**Example**

```js
XMPMetaObj.getArrayItem(schemaNS, arrayName, itemIndex);
```

## getLocalizedText(schemaNS, altTextName, genericLang, specificLang)

Gets the text for one language from an alternate-text array. It attempts the specific language first; if that misses, it tries the generic language when one is provided. If neither language match is found, it uses the x-default item when available, otherwise the first item.

**Returns**: `string` \| `undefined` - text selected for the requested language from an alternate-text array.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI value; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| altTextName | `string` | String name for the alternate-text array; a general path expression is allowed. |
| genericLang | `string` | Generic language name as an RFC 3066 primary subtag. null or an empty string is allowed. |
| specificLang | `string` | Specific language name as an RFC 3066 primary subtag; for example, en-US. This parameter is required. |

**Example**

```js
XMPMetaObj.getLocalizedText(schemaNS, altTextName, genericLang, specificLang);
```

## getProperty(schemaNS, propName, [valueType])

Reads a metadata property's value together with its options. Use it for top-level simple properties, or after composing paths with functions on the [XMPUtils object](uxp-xmp-classes-2.md).
The result is [XMPProperty](uxp-xmp-classes-2.md).

**Returns**: `XMPProperty` \| `undefined` - metadata property value and options

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| schemaNS | `string` |  | Namespace URI value; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| propName | `string` |  | String name for the property; a general path expression is allowed. |
| [valueType] | `string` | `"\"\""` | Data type for the property, selected from: - XMPConst.STRING - XMPConst.INTEGER - XMPConst.NUMBER - XMPConst.BOOLEAN - XMPConst.XMPDATE for typed reads. |

**Example**

```js
XMPMetaObj.getProperty(schemaNS, propName[, valueType])
```

## getStructField(schemaNS, structName, fieldNS, fieldName)

Gets the value of a field located inside a nested metadata structure.
The result is [XMPProperty](uxp-xmp-classes-2.md).

**Returns**: `XMPProperty` \| `undefined` - value from the nested structure field.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI value; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| structName | `string` | String name for the structure; a general path expression is allowed. |
| fieldNS | `string` | Field-type namespace string; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| fieldName | `string` | Field name string; a simple XML name is required. |

**Example**

```js
XMPMetaObj.getStructField(schemaNS, structName, fieldNS, fieldName);
```

## getQualifier(schemaNS, structName, qualNS, qualName)

Gets a qualifier that is attached to a metadata property.
The result is [XMPProperty](uxp-xmp-classes-2.md).

**Returns**: `XMPProperty` \| `undefined` - qualifier attached to the metadata property

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI value; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| structName | `string` | String name for the structure; a general path expression is allowed. |
| qualNS | `string` | URI string for the qualifier namespace. |
| qualName | `string` | Qualifier name string; a simple XML name is required. |

**Example**

```js
XMPMetaObj.getQualifier(schemaNS, structName, qualNS, qualName);
```

## insertArrayItem(schemaNS, arrayName, itemIndex, itemValue, [itemOptions])

Places a new item before an existing item in an array. Items after that point move up by one index position. The array has to exist before this call.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| schemaNS | `string` |  | Namespace URI value; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| arrayName | `string` |  | String name for the array-type property; a general path expression is allowed. |
| itemIndex | `number` |  | 1-based position where the new item is inserted. XMPConst.`ARRAY_LAST_ITEM` targets the final item currently in the array. |
| itemValue | `string` |  | Value for the new item. Use null for array entries without values. |
| [itemOptions] | `number` | `0` | Flag applied to the item when the call creates it. One of: - 0: simple item, the default. - XMPConst.`PROP_IS_ARRAY`: array item, using alt, bag, or seq form. - XMPConst.`PROP_IS_STRUCT`: structured item with child fields. |

**Example**

```js
XMPMetaObj.insertArrayItem(schemaNS, arrayName, itemIndex, itemValue[, itemOptions])
```

## iterator(options, schemaNS, propName)

Creates an iterator that walks through properties, arrays, and qualifiers inside this metadata. Options, a namespace, and a property can narrow both the scope and the detail level of the items produced.
The result is [XMPIterator](uxp-xmp-classes.md).

**Returns**: `XMPIterator` - iterator for this metadata object

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | `number` | `0` | Bit flags controlling iteration behavior and returned value detail. Combine these constants with logical OR: XMPConst.`ITERATOR_JUST_CHILDREN` - visit only immediate children of the root property. Without this flag, traversal descends into subtrees. XMPConst.`ITERATOR_JUST_LEAFNODES` - visit leaf nodes only. Without this flag, traversal covers every node in a subtree. XMPConst.`ITERATOR_JUST_LEAFNAMES` - emit only the leaf segment of the path. Without this flag, output uses the complete path. XMPConst.`ITERATOR_INCLUDE_ALIASES` - include aliases. Without this flag, only actual properties are considered. XMPConst.`ITERATOR_OMIT_QUALIFIERS` - skip qualifiers while iterating. |
| schemaNS | `string` |  | Namespace URI value; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| propName | `string` |  | String name for the array-type property; a general path expression is allowed. |

**Example**

```js
XMPMetaObj.iterator(options, schemaNS, propName);
```

## serialize([options], [padding], [indent], [newline], [baseIndent])

Converts this XMP metadata to an RDF string.

**Returns**: `string` - RDF string containing the serialized XMP metadata

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | `number` | `0` | Option bits controlling serialization. The combination must be logically valid; conflicting settings cause the function to throw an exception. Combine these constants with logical OR: XMPConst.`SERIALIZE_OMIT_PACKET_WRAPPER` - leave out the XML packet wrapper. XMPConst.`SERIALIZE_READ_ONLY_PACKET` - build an XML packet wrapper marked read-only. XMPConst.`SERIALIZE_USE_COMPACT_FORMAT` - choose a very compact RDF syntax and layout. XMPConst.`SERIALIZE_USE_PLAIN_XMP` - output plain XMP (not currently supported). XMPConst.`SERIALIZE_INCLUDE_THUMBNAIL_PAD` - reserve normal JPEG-thumbnail space in padding when no xmp:Thumbnail property exists. XMPConst.`SERIALIZE_EXACT_PACKET_LENGTH` - calculate padding so the final packet length matches the padding parameter. Throws an exception if the packet without padding is longer than the target length. XMPConst.`SERIALIZE_WRITE_ALIAS_COMMENTS` - add XML comments for aliases. |
| [padding] | `number` | `0` | When options is `SERIALIZE_EXACT_PACKET_LENGTH`, this is the exact packet length, including added padding characters needed to reach that length. Otherwise, this value is the count of padding characters to add. Default is 0, which uses the appropriate padding amount. |
| [indent] | `string` | `"\"  \""` | String used for indentation. Default is two spaces. |
| [newline] | `string` | `"\"U+000A\""` | Newline character to emit. |
| [baseIndent] | `number` | `0` | Indentation level for the top-level XML element. |

**Example**

```js
XMPMetaObj.serialize([options, padding, indent, newline, baseIndent]);
```

## serializeToArray([options], [padding], [indent], [newline], [baseIndent])

This call writes the XMP metadata out as RDF text, then returns that content as one-byte numeric array entries for the UTF-8 or UTF-16 encoded characters.

**Returns**: `Array` - an Array whose entries are Numbers.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | `number` | `0` | Bit flags that choose the serialization behavior. The selected flags must form a logical combination; incompatible choices make the function throw an exception. Combine these constants with logical OR: XMPConst.`SERIALIZE_OMIT_PACKET_WRAPPER` - Leave out the XML packet wrapper. XMPConst.`SERIALIZE_READ_ONLY_PACKET` - Build an XML packet wrapper marked read-only. XMPConst.`SERIALIZE_USE_COMPACT_FORMAT` - Write RDF with a very compact syntax and layout. XMPConst.`SERIALIZE_USE_PLAIN_XMP` - Write plain XMP (not currently supported). XMPConst.`SERIALIZE_INCLUDE_THUMBNAIL_PAD` - When no xmp:Thumbnail property exists, reserve the usual JPEG-thumbnail room inside the padding. XMPConst.`SERIALIZE_EXACT_PACKET_LENGTH` - Calculate padding so the packet reaches the total length supplied by the padding parameter. If the unpadded packet is longer than that length, an exception is thrown. XMPConst.`SERIALIZE_WRITE_ALIAS_COMMENTS` - Add XML comments for aliases. |
| [padding] | `number` | `0` | With `SERIALIZE_EXACT_PACKET_LENGTH` in [options], this supplies the precise packet length, counting the padding characters inserted to reach it. Without `SERIALIZE_EXACT_PACKET_LENGTH`, it is the count of padding characters to append. `0` asks the serializer to choose the suitable padding amount. |
| [indent] | `string` | `"\"  \""` | Indentation text for each level. The default value is two spaces. |
| [newline] | `string` | `"\"U+000A\""` | Character sequence used for line breaks. |
| [baseIndent] | `number` | `0` | Indentation depth for the XML element at the root. |

**Example**

```js
XMPMetaObj.serializeToArray([options, padding, indent, newline, baseIndent]);
```

## setArrayItem(schemaNS, arrayName, itemIndex, itemValue, [itemOptions])

Use this method to overwrite an array entry or add one at the end. The array has to be present already. For new entries, appendArrayItem() and insertArrayItem() are the recommended calls.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| schemaNS | `string` |  | Namespace URI text. See [Schema namespace string constants](uxp-xmp-classes.md). |
| arrayName | `string` |  | Name text for the array-type property. A general path expression is allowed. |
| itemIndex | `number` |  | 1-based item position. Use XMPConst.`ARRAY_LAST_ITEM` when the target is the current final entry in the array. |
| itemValue | `string` |  | Replacement item text. Pass null for array entries with no value. |
| [itemOptions] | `number` | `0` | Flag describing the item when the call creates it. Choose one of: - 0: Simple item, or whatever type arrayOptions implies. - XMPConst.`PROP_IS_ARRAY`: Marks the item as an array (of type alt, bag, or seq). - XMPConst.`PROP_IS_STRUCT`: Marks the item as structured data containing child members. |

**Example**

```js
XMPMetaObj.setArrayItem(schemaNS, arrayName, itemIndex, itemValue[, itemOptions])
```

## setLocalizedText(schemaNS, altTextName, genericLang, specificLang, itemValueThe)

This call writes the alternate-text value for one language choice and includes the special handling required for the x-default entry.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI text. See [Schema namespace string constants](uxp-xmp-classes.md). |
| altTextName | `string` | Name text for the alternate-text array. A general path expression is allowed. |
| genericLang | `string` | Generic language name as an RFC 3066 primary subtag. null and the empty string are allowed. |
| specificLang | `string` | Specific language name as an RFC 3066 primary subtag; for example, en-US. This argument is required. |
| itemValueThe | `string` | Replacement text value. |

**Example**

```js
XMPMetaObj.setLocalizedText(
  schemaNS,
  altTextName,
  genericLang,
  specificLang,
  itemValue,
  setOptions,
);
```
