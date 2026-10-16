# executeAsModal

22.5

**async** : _Promise_`<void>`

Plugins must use `ExecuteAsModal` when changing Photoshop state.
That includes creating or modifying documents,
as well as changing UI or preference state.

Only plugins using apiVersion 2 or higher can call `ExecuteAsModal`.

See [Modal Execution](../executeasmodal.md) for details

### Parameters

| Name | Type |
| --- | --- |
| `targetFunction` | (`executionContext`: [_ExecutionContext_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/options/executioncontext.md), `descriptor?`: _object_) => _Promise_&lt;any&gt; |
| `options` | [_ExecuteAsModalOptions_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/returnobjects/executeasmodaloptions.md) |
