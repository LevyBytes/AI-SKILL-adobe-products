# AEGP_GetInteractiveDisplayChannel

`AEGP_GetInteractiveDisplayChannel`

Returns which channels the interactive artisan should display.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetInteractiveDisplayChannel(
  const PR_RenderContextH  contextH,
  AEGP_DisplayChannelType  *channelP);
```

`AEGP_DisplayChannelType` will be one of the following: - `AEGP_DisplayChannel_NONE` - `AEGP_DisplayChannel_RED` - `AEGP_DisplayChannel_GREEN` - `AEGP_DisplayChannel_BLUE` - `AEGP_DisplayChannel_ALPHA` - `AEGP_DisplayChannel_RED_ALT` - `AEGP_DisplayChannel_GREEN_ALT` - `AEGP_DisplayChannel_BLUE_ALT` - `AEGP_DisplayChannel_ALPHA_ALT`
