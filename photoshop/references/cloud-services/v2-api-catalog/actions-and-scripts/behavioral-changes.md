# Behavioral changes

| Behavior | V1 | V2 | Type |
| --- | --- | --- | --- |
| Endpoint per action type | Separate endpoints | Single `/v2/execute-actions` | Breaking Change |
| Input field | `inputs[0].href` | `image.source.url` | Breaking Change |
| Action type discriminant | Implied by endpoint | `options[].type` required | Breaking Change |
| Action file reference | `inputs[].href` with `"storage"` | `options[].photoshopAction.source.url` | Breaking Change |
| ActionJSON inline commands | `options.actions` array | `options[].actionJSON.commands` array | Breaking Change |
| UXP script support | Not available | `options[].type: "uxp"` with `source.content` | Net New |
| `additionalContents` (supply action file deps) | Not available | Supported | Net New |
| `scriptOutputPattern` for dynamic outputs | Not available | Supported for UXP scripts | Net New |
| `plugin-temp:/` virtual path in scripts | Not available | Supported for inter-script file exchange | Net New |
| Convenience action files inspectable | Hidden server-side | Published, downloadable | Net New |
| Depth Blur | Available | Not yet supported | Removed (temporarily) |
| Dedicated text endpoint | `/pie/psdService/text` (declarative `options.layers` text edits) | `/v2/execute-actions` (ActionJSON or UXP) | Breaking Change |
