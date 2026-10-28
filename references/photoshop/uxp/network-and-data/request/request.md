# Request(input, options)

**Throws**:

- `TypeError` If options.body exists and options.method is either "GET" or "HEAD".

| Param | Type | Description |
| --- | --- | --- |
| input | `string` \| `Request` | Resource to fetch. This may be a string containing the resource URL to fetch, or it may be a Request object. |
| options | `Object` | '(Optional)' object with custom request settings to apply. |
| options.method | `string` | HTTP method to use; defaults to "GET". |
| options.headers | `string` \| `Headers` | Headers to include with the request. |
| options.body | `Blob` \| `ArrayBuffer` \| `TypedArray` \| `FormData` \| `string` \| `ReadableStream` \| `URLSearchParams` | Body data to attach to the request. |
| options.credentials | `string` | Credentials mode for the request. Use either "omit" or "include". |
| options.signal | `AbortSignal` | AbortSignal object that can cancel a request. |
