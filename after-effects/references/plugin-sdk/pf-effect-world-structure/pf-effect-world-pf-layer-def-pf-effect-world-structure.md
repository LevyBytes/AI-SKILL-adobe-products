# `PF_EffectWorld` / `PF_LayerDef` — `PF_EffectWorld` Structure

| Item | Description |
| --- | --- |
| world_flags | At present the flags are just: - `PF_WorldFlag_DEEP` - set when the world is 16-bpc - `PF_WorldFlag_WRITEABLE` - marks that altering the world's image data is permitted. Effects ordinarily can't change input image data, only output. |
| data | A pointer to the image data, held as a `PF_PixelPtr`. Don't touch it directly; go through the `PF_PixelPtr` Accessor Macros. In After Effects, image data is always laid out as successive words, each packing Alpha, Red, Green, Blue from low byte to high byte. |
| rowbytes | How many bytes long each row of the image's pixel block is. That block holds height lines, each carrying width pixels followed by a little padding. The width pixels — times four, since every pixel runs four bytes — plus any extra padding sums to rowbytes bytes. Lean on this value to walk the image data. Because of platform-specific padding at row ends, sweeping the whole buffer is risky. Locate the start of each row from height and rowbytes instead.<br><br>Note<br><br>Turning field rendering on or off leaves this value unchanged.<br><br>Note<br><br>Two worlds of identical dimensions, one input and one output, may still carry different rowbytes. |
| width | Width and height of the pixel buffer. |
| height |  |
| extent_hint | The tightest rectangle that wraps every opaque (non-zero alpha) pixel in the layer. It marks the region that has to be output. Should your plug-in change with extent — a diffusion dither, say — disregard this and just render the whole frame every time. |
| pix_aspect_ratio | The pixel aspect ratio, given as a `PF_Rational`.<br><br>Note<br><br>For checked-out layers an effect may use this value, but for the layer it's actually applied to it must use `PF_InData`.pixel_aspect_ratio. Sorry. |
| platform_ref | Dropped as of CS5. Holds reference data that depends on the platform. Under Windows it carries an opaque value; under macOS, a CGrafPtr and a GDeviceHandle come from a `PF_EffectWorld` via `PF_GET_PLATFORM_REFS`.<br><br>Note<br><br>Since no output context exists yet at `PF_Cmd_GLOBAL_SETUP`, you can't grab a platform_ref there. Patience, my pet. |
| dephault | Applies to layer parameters alone. Its value is one of `PF_LayerDefault_MYSELF` or `PF_LayerDefault_NONE`. |
