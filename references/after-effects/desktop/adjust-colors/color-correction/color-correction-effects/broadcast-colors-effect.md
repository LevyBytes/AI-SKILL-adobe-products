# Broadcast Colors effect

Note

Bundled with After Effects, the Color Finesse plug-in carries first-rate tools for keeping colors inside the broadcast-safe range. For further detail, consult the Color Finesse documentation in the Color Finesse subfolder of the Plug-ins folder. (See Plug-ins.)

By reworking pixel color values, the Broadcast Colors effect holds signal amplitudes inside the range broadcast television permits.

Reach for the Key Out Unsafe and Key Out Safe settings under How To Make Color Safe to spot which regions of the image the Broadcast Colors effect touches at the current settings.

Note

For your particular output type, a more dependable approach to holding colors inside the broadcast-safe range relies on color management features, where you set a matching output color profile — SDTV (Rec. 601 NTSC), say. That route guarantees any color values spanning 0.0–1.0 in your working color space turn into broadcast-safe ones. (See Broadcast-safe colors.)

Support here covers 8-bpc color.

Broadcast Locale

Which broadcast standard your intended output targets. NTSC (National Television Standards Committee) serves as the North American standard and sees use in Japan too. Across South America and the bulk of Western Europe, PAL (Phase Alternating Line) is the one in use.

How To Make Color Safe

How to bring signal amplitude down:

Reduce Luminance

Dims a pixel by nudging it toward black. This is the default setting.

Reduce Saturation

Drags a pixel's color toward a gray of comparable brightness, draining its color. At a given IRE level, cutting saturation changes the image more visibly than cutting luminance does.

Maximum Signal Amplitude (IRE)

The signal's ceiling amplitude in IRE units. Any pixel exceeding this value gets altered. 110 is the default. Smaller values touch the image more visibly; larger ones carry more risk.
