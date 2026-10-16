# Unsupported Features

Premiere Pro is currently known not to support these After Effects API features:

(If you want a feature marked with a "-" bullet, email Premiere Pro API Engineering with the feature request. Numbers beginning with 'F' are feature request numbers; the remaining numbers are bug numbers)

- F7233 - extent_hint support
- F7835 - Multiple PiPLs in a single plug-in
- F7836 - AEGP support
- F7517 - Audio support - if a plug-in sets `PF_OutFlag_I_USE_AUDIO` in `PF_Cmd_GLOBAL_SETUP`, it will not be loaded at all
- F9355 - Support `PF_ParamFlag_COLLAPSE_TWIRLY`
- PF World Transform Suite
- PF AE Channel Suite
- AE's implementation of high bit color depth support
- SmartFX
- 3D support
- `PF_SUBPIXEL_SAMPLE`(), `PF_GET_PIXEL_DATA16`()
