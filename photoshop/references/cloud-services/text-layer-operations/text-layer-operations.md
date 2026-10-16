# Text Layer Operations

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Use the v2 API instead of the v1 API's `/pie/psdService/text` endpoint.

Photoshop files (PSD files) can have text layers changed through the Edit Text convenience API. This migration note moves V1 calls from `/pie/psdService/text` to V2 calls against `/v2/execute-actions`.

**Key benefits of V2:**

- Run text edits through ActionJSON or UXP scripts, giving full control over Photoshop operations
- Use **Actions** for declarative, ordered edits; choose **UXP** for conditional logic, layer iteration, or data-driven changes
- Combine text layer changes with other actions within one request
- Reach low-level text style properties such as font, size, and color
