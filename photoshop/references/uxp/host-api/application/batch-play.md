# batchPlay

23.0

_Promise_<ActionDescriptor[]>

batchPlay sits at the center of the API surface. It supersedes executeAction, receives
ActionDescriptors deserialized from JS objects, and can run several descriptors in sequence
without refreshing the UI. Access to this API may change or appear through other routes later.

### Parameters

| Name | Type |
| --- | --- |
| `commands` | _any_ |
| `options` | _any_ |
