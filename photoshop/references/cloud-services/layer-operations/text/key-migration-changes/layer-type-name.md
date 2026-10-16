# 1. Layer type name

**V1:** `"type": "textLayer"`

**V2:** `"type": "text_layer"`

> **Every object in `edits.layers[]` must include `type`.** V1 could omit `type` for simple visibility edits or changes that only touched properties on existing layers; V2 does not permit that omission. Error when omitted: `Missing required field 'type' for edit operation at path 'edits.layers[N]'`.
