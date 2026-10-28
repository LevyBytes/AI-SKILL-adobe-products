# iterator(options, schemaNS, propName)

Creates an iterator that walks through properties, arrays, and qualifiers inside this metadata. Options, a namespace, and a property can narrow both the scope and the detail level of the items produced.
The result is [XMPIterator](../../xmp-iterator/reference-index.md).

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
