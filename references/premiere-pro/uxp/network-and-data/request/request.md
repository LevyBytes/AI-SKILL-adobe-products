# Request(input, options)

**Throws**:

- `TypeError` If options.body is present while options.method is set to "GET" or "HEAD".

| Param | Type | Description |
| --- | --- | --- |
| input | `string` \| `Request` | Identifies the resource to fetch. Accepted forms are: a string containing the URL for the target resource. a Request object. |
| options | `Object` | '(Optional)' object with custom request settings to apply. |
| options.method | `string` | Request method. Default value: "GET". |
| options.headers | `string` \| `Headers` | Headers to include with the request. |
| options.body | `Blob` \| `ArrayBuffer` \| `TypedArray` \| `FormData` \| `string` \| `ReadableStream` \| `URLSearchParams` | Body content to attach to the request. |
| options.credentials | `string` | Request credentials for this request. Use either "omit" or "include". |
| options.signal | `AbortSignal` | AbortSignal object available for aborting the request. |
