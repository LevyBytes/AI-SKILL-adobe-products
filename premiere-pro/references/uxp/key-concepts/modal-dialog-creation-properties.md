# Modal Dialog creation properties

`uxpShowModal()` is **asynchronous**. It returns a Promise that resolves to the value supplied to `dialog.close()`, and it accepts an options object with these properties.

| Property | Type | Description |
| --- | --- | --- |
| **title** | string | Dialog title text |
| **titleVisibility** | `"show"` \| `"none"` | Controls title display |
| **resize** | `"none"` \| `"both"` \| `"horizontal"` \| `"vertical"` | Controls user resize directions |
| **size** | `{ width: number; height: number; }` | Initial dialog dimensions |
| **minSize** | `{ width: number; height: number; }` | Smallest permitted dimensions |
| **maxSize** | `{ width: number; height: number; }` | Largest permitted dimensions |
