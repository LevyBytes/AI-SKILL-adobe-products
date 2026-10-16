# Response([body], [options])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [body] | `string` \| `Blob` \| `ArrayBuffer` \| `TypedArray` \| `FormData` \| `ReadableStream` \| `URLSearchParams` | `null` | Response payload body. |
| [options] | `Object` | `{}` | Additional response configuration to apply. |
| [options.status] | `number` | `200` | Numeric status code for the response. |
| [options.statusText] | `string` |  | Text paired with the status code; default is "". |
| [options.headers] | `Headers` \| `string` | `{}` | Header data to include with the response. |
