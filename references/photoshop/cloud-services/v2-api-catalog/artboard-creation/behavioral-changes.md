# Behavioral changes

| Behavior | V1 | V2 | Type |
| --- | --- | --- | --- |
| Input specification | `inputs[].href` + `storage` | `images[].source.url` | Breaking Change |
| Image identifier | Order-based (array index) | `images[].id` field | Breaking Change |
| Artboard spacing control | Not available | `artboardSpacing` field | Net New |
| At least one image required | Not enforced | Validated; empty `images[]` returns an error | Breaking Change |
