# AEGP_RenderAndCheckoutLayerFrame

`AEGP_RenderAndCheckoutLayerFrame`

New in CC 2014. This permits checking out a layer's frame, effects applied, outside render time.

It comes in handy when an operation needs the frame, for instance after a button press where a brief wait while it renders is acceptable.

Note: because it isn't asynchronous, it won't address the broader case where custom UI has to draw from the frame.

Fetches an AEGP_FrameReceiptH (not the actual pixels) for the layer frame you asked for. Hand this receipt to AEGP_CheckinFrame to free its memory.

Build the AEGP_LayerRenderOptionsH using AEGP_NewFromUpstreamOfEffect(), found in AEGP_LayerRenderOptionsSuite1.

You can in fact use AEGP_NewFromLayer() to obtain other layer params' layers with their effects applied. Tread carefully, though. Do it inside your effect A while an effect B on the other layer does the very same thing during rendering, and you'll spin up an infinite loop. When it isn't for render purposes, it might be fine.

If it wants, the AEGP may supply a function for After Effects to invoke should the user cancel the running render, plus a refcon (a constant reference to opaque data) that function can use.

Suite argument declaration (not a standalone call):

```cpp
AEGP_RenderAndCheckoutLayerFrame(
  AEGP_LayerRenderOptionsH        optionsH,
  A_Boolean                       render_plain_layer_frameB,
  AEGP_RenderSuiteCheckForCancel  cancel_functionP0,
  AEGP_CancelRefcon               cancel_function_refconP0,
  AEGP_FrameReceiptH              *receiptPH);
```
