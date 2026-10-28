# Tips & Tricks - Caching Behavior

After Effects gives you several knobs for controlling caching behavior. The flags `PF_OutFlag_NON_PARAM_VARY`, `PF_OutFlag_WIDE_TIME_INPUT`, `PF_OutFlag_I_USE_SHUTTER_ANGLE`, `PF_OutFlag_I_SYNTHESIZE_AUDIO`, `PF_OutFlag2_I_USE_3D_CAMERA`, and `PF_OutFlag2_I_USE_3D_LIGHTS` (all from `PF_OutFlags`) each feed into how caching is handled.

Backing dynamic outflags can deliver a real speed boost by keeping After Effects from throwing away your effect's cache more eagerly than necessary.

Make sure your plug-in holds up across the various After Effects cache settings. Is After Effects asking your plug-in to refresh as frequently as you'd expect, or does it assume its pixels are still good when you know they aren't?
