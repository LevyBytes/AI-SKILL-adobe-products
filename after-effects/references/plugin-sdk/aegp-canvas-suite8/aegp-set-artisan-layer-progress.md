# AEGP_SetArtisanLayerProgress

`AEGP_SetArtisanLayerProgress`

Sets progress data for a rendering Artisan.

- countL is the completed layer count,

- num_layersL is the total layer count for that render.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetArtisanLayerProgress(
  PR_RenderContextH  render_contextH,
  A_long             countL,
  A_long             num_layersL);
```
