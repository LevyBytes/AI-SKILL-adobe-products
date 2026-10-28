# getQualifier(schemaNS, structName, qualNS, qualName)

Gets a qualifier that is attached to a metadata property.
The result is [XMPProperty](../../xmp-property-xmp-property/reference-index.md).

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
