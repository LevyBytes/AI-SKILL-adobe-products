# Script output expansion and restrictions

**Pattern Expansion Examples:**

1 request output → 1 status output (exact match):

Request

```json
{
  "scriptOutputPattern": "metadata.json"
}
```

Status

```json
{
  "outputs": [
    {
      "destination": {
        "url": ".../metadata.json?..."
      }
    }
  ]
}
```

1 request output → 3 status outputs (glob match):

Request

```json
{
  "scriptOutputPattern": "*.json"
}
```

Status (if 3 JSON files generated)

```json
{
  "outputs": [
    {
      "destination": {
        "url": ".../file1.json?..."
      }
    },
    {
      "destination": {
        "url": ".../file2.json?..."
      }
    },
    {
      "destination": {
        "url": ".../file3.json?..."
      }
    }
  ]
}
```

**Restrictions:**

- Only works with **Hosted** or **Embedded** destinations
- Cannot use with **URL** or **Creative Cloud** destinations (require pre-known filenames)
- Only applicable to `/v2/execute-actions` endpoint
- Files are filtered by `mediaType` - only matching extensions included
- Not applicable to `/v2/edit`, `/v2/create-composite`, or other endpoints

**MediaType Filtering:**
With `mediaType: "application/json"`, files are included only when their extension is `.json`, even if other files match the pattern.

**V1 Equivalent:** None; UXP script workflows gain this capability only in V2.

**Use Cases:**

- UXP scripts whose file count is not known ahead of time
- Scripts that create filenames dynamically
- Batch processing jobs with variable output counts
- Finding assets emitted by a script

Related: [Script output patterns and discovery](script-output-pattern-dynamic-file-discovery.md).
