# deleteQualifier(schemaNS, structName, qualNS, qualName)

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
