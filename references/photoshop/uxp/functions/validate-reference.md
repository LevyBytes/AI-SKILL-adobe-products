# validateReference

23.1

_boolean_

Synchronously checks the supplied action reference and returns true when it still exists.
For example, passing a reference to a closed document would return false.

This feature is for advanced developers who already understand `batchPlay`.
`validateReference` helps when implementing new DOM functionality or when optimizing with low-level code.

See [Action references](../batch-play/action-references.md) for details.

Supported reference classes:
`action`,
`document`,
`channel`,
`layer`,
`guide`,
`historyState`,
`compsClass`,
`path`,
`actionSet`

### Parameters

| Name | Type |
| --- | --- |
| `ref` | ActionReference \| ActionReference[] |
