# UXP adhoc file output

During execution, UXP scripts may write files into `plugin-temp:/`. The `scriptOutputPattern` field uses glob syntax to collect those runtime-created files and return them to the caller, which supports adhoc variable output sets that are not known before the job begins. This capability is **UXP-only** and does not apply to `.atn` or ActionJSON.

Under V1, every output needed a fixed file name and destination URL before processing started. Scripts that produced a variable file count had no capture mechanism.

In V2, `scriptOutputPattern` matches a glob against files produced by a UXP script at runtime:

```json
{
  "outputs": [
    {
      "mediaType": "image/png",
      "destination": { "validityPeriod": 3600 },
      "scriptOutputPattern": "preview-*.png"
    }
  ]
}
```

When the script creates `preview-small.png`, `preview-medium.png`, and `preview-large.png`, the response returns three output entries, each with a separate hosted URL.

Key constraints:

- Allowed destinations are only `embedded` and `hosted`; presigned URLs need filenames before execution
- Compare patterns without case sensitivity against filenames in the UXP output directory
- When `scriptOutputPattern` is set, ignore `quality`, `compression`, `width`, and `height` output parameters

For full syntax and examples, use [Actions Migration](../../actions-migration/reference-index.md).
