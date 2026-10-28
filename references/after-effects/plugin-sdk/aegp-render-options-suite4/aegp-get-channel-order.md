# AEGP_GetChannelOrder

`AEGP_GetChannelOrder`

Fetches the AEGP_ChannelOrder for the given AEGP_RenderOptionsH.

AEGP_ChannelOrder will be either AEGP_ChannelOrder_ARGB or AEGP_ChannelOrder_BGRA.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetChannelOrder(
  AEGP_RenderOptionsH  optionsH,
  AEGP_ChannelOrder    *orderP);
```

Trivia: live linking with Premiere Pro is what prompted this addition.
