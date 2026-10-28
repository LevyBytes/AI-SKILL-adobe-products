# AEGP_QuerySwapBuffer

`AEGP_QuerySwapBuffer`

Sent after rendering and camera or light handle drawing are finished; After Effects returns the destination buffer for the artisan's output drawing.

Suite argument declaration (not a standalone call):

```cpp
AEGP_QuerySwapBuffer(
  PR_QueryContextH        q_contextH,
  AEGP_PlatformWindowRef  *window_refP,
  AEGP_WorldH             *dest_bufferp);
```
