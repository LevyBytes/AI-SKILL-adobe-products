# V2 API (current)

**Endpoint:** `/v2/execute-actions`

In V2, the `execute-actions` endpoint handles text layer work with either **Actions** (ActionJSON) or **UXP scripts**. Rather than calling a dedicated `/text` endpoint that accepts a layers-style payload, send ActionJSON or a UXP script that carries out the matching Photoshop operations: select the target text layer(s), then write the desired style values onto the text.
