# PF_OutFlag2_AE13_5_THREADSAFE

`PF_OutFlag2_AE13_5_THREADSAFE`

Plug-ins that have been updated for threading should set this flag to signal to AE that the plug-in is meant to be safe across the UI thread <> Render thread boundary.

What this flag conveys to AE is that separate threads operating on separate AE project copies may sit inside the effect simultaneously, just never touching the same instance. Multiple render threads aren't in play yet, but this will prove handy in releases to come.

- Effects Past Version 7 Now Supported (the MAJOR version ceiling rises to 127)

Effects past version 7 will report correctly under 13.5 provided they're built against the current SDK headers. You can run these recompiled effects in AE builds older than 13.5, but the version number internally wraps modulo 8 (for example, AE will internally read effect version 8 as version 0).

This can influence the version that older AE shows in error dialog displays and can influence usage reporting.

Because the move to 64-bit rendered many older plug-ins unloadable in AE, it's improbable that this wrapping would clash ambiguously with plug-ins actually in use today (barring plug-ins that have shot up in version number across the past few years).

That said, building against an older SDK while using a version of 8 or higher makes the plug-in report a wrong version to AE, which then clashes with the PiPL version check for the effect — the one carrying the higher bits set. That scenario isn't supported.

When you build against an older SDK, keep the effect version pinned at 7 or lower. Lifting the version ceiling was done by tacking 4 new, more-significant bits onto the version that only AE 13.5 and up "sees." These added high bits don't sit contiguously with the original, preexisting MAJOR version bits — simply disregard the bits in between. In hexadecimal or binary, the new version layout reads as follows.

0x 3C38 0000

^^ original MAJOR version bits as a hex mask 0-7

^^ new HIGH bits extending the original MAJOR version bits 8-127

0b 0011 1100 0011 1000 0000 0000 0000 0000

^^ ^ original MAJOR version bits as a hex mask 0-7

^^ ^^ ignore / do not use

^^ ^^ new HIGH bits extend the original MAJOR version bits 8-127.

In AE builds older than 13.5, these bits go ignored.

- New Installer Hints for macOS

On macOS X, a new plist file gives developers the default-location paths for plug-ins, scripts, and presets (matching what the Windows registry holds): /Library/Preferences/ com.Adobe.After Effects.paths.plist

Those plist values let you point your installers or scripts at where files get written, the same way you'd rely on the paths keys in the Windows registry: `HKEY_LOCAL_MACHINE\SOFTWARE\Adobe\After Effects\13.5`

- Work In Progress

`AEGP_RenderAndCheckoutLayerFrame_Async`() `AEGP_CancelAsyncRequest`()

These APIs are still being developed and shouldn't be put to use just yet.
