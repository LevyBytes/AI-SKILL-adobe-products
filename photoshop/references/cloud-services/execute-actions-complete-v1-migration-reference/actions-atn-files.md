# 3. Actions (`.atn` files)

| V1 (`options.actions[n].*`) | V2 (`options.actions[n].source.*`) | Notes |
| --- | --- | --- |
| `href` (URL or path) | `url` | Breaking: nested under `source` |
| `storage: "external"` | _(omit)_ |  |
| `storage: "adobe"` (path) | `creativeCloudPath` |  |
| `storage: "adobe"` (URN) | `creativeCloudFileId` |  |
| `storage: "acp"` | `url` |  |

**Example action item rewrite from V1 to V2:**

V1

```json
{
  "href": "<ACTION_URL>",
  "storage": "external"
}
```

V2

```json
{
  "source": {
    "url": "<ACTION_URL>"
  }
}
```

**Multiple actions (V2 only):**

V1 accepted only one action in each request. V2 can run up to **10 actions** in sequence, and the same array may freely combine the first `.atn` action with inline ActionJSON.
