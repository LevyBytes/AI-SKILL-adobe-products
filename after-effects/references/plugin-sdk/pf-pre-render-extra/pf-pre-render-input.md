# PF_PreRenderInput

`PF_PreRenderInput`

Spells out what rendering After Effects wants (via the PF_RenderRequest) along with the requested bit depth (in the fittingly named bitdepth member).

```cpp
typedef struct {
  PF_LRect        rect;
  PF_Field        field;
  PF_ChannelMask  channel_mask;
  PF_Boolean      preserve_rgb_of_zero_alpha;
  char            unused[3];
  long            reserved[4];
} PF_RenderRequest;
```

rect is in layer coordinates. field is also relative to the layer origin; whether the active field falls on even or odd scanlines of the output buffer depends on the origin of the output buffer. channel*mask names the channels for which the effect ought to supply output; anything the effect writes to other channels gets ignored. Its value is one or more of these, OR'd together: - `PF_ChannelMask_ALPHA` - `PF_ChannelMask_RED` - `PF_ChannelMask_GREEN` - `PF_ChannelMask_BLUE` - `PF_ChannelMask_ARGB` Where preserve_rgb_of_zero_alpha pixels is TRUE, the effect is obliged to carry the color of transparent pixels through into the output. That relates to `PF_OutFlag2_REVEALS_ZERO_ALPHA` but is not the same thing, since that flag signals to After Effects that the effect might give such pixels non-zero alpha and so bring them back into view.
