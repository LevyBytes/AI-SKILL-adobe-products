# XMPMeta.iterator()

XMPMetaObj.iterator(options, schemaNS, propName)

### Description

Creates an iteration object for walking properties, arrays, and qualifiers within this metadata. Use options plus a namespace and property to restrict both the range and detail level of returned items.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| options | Bitwise combination of these bit-flag constants: - XMPConst.`ITERATOR_JUST_CHILDREN` - Restricts iteration to direct children of the root property. By default, iteration descends into subtrees. - XMPConst.`ITERATOR_JUST_LEAFNODES` - Restricts iteration to leaf nodes. By default, iteration visits every node in a subtree. - XMPConst.`ITERATOR_JUST_LEAFNAMES` - Returns just the leaf segment of the path. By default, a full path is returned. - XMPConst.`ITERATOR_INCLUDE_ALIASES` - Includes aliases. By default, only actual properties are considered. - XMPConst.`ITERATOR_OMIT_QUALIFIERS` - Leaves qualifiers out of iteration. | Options that determine iteration behavior and returned value form. |
| schemaNS | Schema namespace string constants | Namespace URI value. |
| propName | String | Array-type property name; a general path expression is accepted. |

### Returns

XMPIterator object for this metadata object.
