# Script-based output discovery

For UXP scripts that create files, set `scriptOutputPattern` to identify which generated files should be returned as outputs. The parameter can use an exact filename or a glob pattern when outputs are discovered dynamically.

**Supported Destination Types:**

`scriptOutputPattern` applies only to `embedded` and `hosted` destinations. Script-created outputs cannot target external storage such as presigned URLs, Dropbox, or Azure.

**Single-file output example:**

```json
{
  "outputs": [
    {
      "destination": {
        "validityPeriod": 3600
      },
      "mediaType": "image/jpeg",
      "scriptOutputPattern": "final_composite.jpg"
    }
  ]
}
```

**Glob-pattern output example:**

```json
{
  "outputs": [
    {
      "destination": {
        "embedded": "json"
      },
      "mediaType": "application/json",
      "scriptOutputPattern": "*.json"
    },
    {
      "destination": {
        "validityPeriod": 3600
      },
      "mediaType": "image/png",
      "scriptOutputPattern": "result-*.png"
    }
  ]
}
```

**How It Works:**

1. UXP scripts write generated files into the plugin temporary directory
2. The system evaluates files against the pattern and then filters by `mediaType`
3. Every matching file is represented as its own output entry
4. The files are uploaded to the requested destination

**Glob Pattern Examples:**

- `output.json` - Matches a single named file
- `*.json` - Matches every JSON file
- `result-*.png` - Covers result-1.png, result-2.png, etc.
- `layer-[0-9].jpg` - Covers layer-0.jpg through layer-9.jpg

When `scriptOutputPattern` is present, settings such as quality, compression, width, and height do not apply. The service takes files unchanged from the script output directory. Prefer simple patterns and standard glob syntax, for example `*.json`, `result-*.png`, or `layer-[0-9].jpg`.
