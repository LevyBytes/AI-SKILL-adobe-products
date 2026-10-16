# createTreeWalker(root, whatToShow, filter)

[ This feature is gated by a feature flag. Enable `enableSWCSupport` in the featureFlags section of plugin manifest before using it. ]

Represents both the nodes in a document subtree and the current position inside that subtree.

**Returns**: `TreeWalker`

| Param | Type | Description |
| --- | --- | --- |
| root | `Node` | A Node representing the root node as specified when the TreeWalker was created |
| whatToShow | `number` | An unsigned long being a bitmask made of constants describing the types of Node that must be presented |
| filter | `NodeFilter` | NodeFilter used to select the relevant nodes |
