# AEGP_ReportArtisanProgress

`AEGP_ReportArtisanProgress`

Using render_contextH, reports progress for the Artisan render.

Note

On macOS, this is NOT thread-safe; use it only from thread ID 0.

Suite argument declaration (not a standalone call):

```cpp
AEGP_ReportArtisanProgress(
  PR_RenderContextH  render_contextH,
  A_long             countL,
  A_long             totalL);
```
