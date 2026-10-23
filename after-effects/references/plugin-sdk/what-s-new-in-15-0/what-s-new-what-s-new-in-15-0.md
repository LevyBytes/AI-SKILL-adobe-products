# What's New - What's New in 15.0?

Rendering of GPU effects, a capability that Premiere Pro already had, now works in After Effects too. Be aware that any unrecognized effect whose match name carries the "ADBE " prefix gets dropped from GPU rendering, so confirm your own GPU effects ship with a custom match name of your own. Once an effect can render on the GPU, the Effect panel marks it with the GPU badge.

Inside the Premiere Pro SDK, the GPU effect sample projects were revised so they now register themselves as GPU effects within AE, though their render output is still not finished.

There's also a freshly defined entry point that lets effects hand the host basic information at runtime instead of leaning on the older PiPL resources. By going this route, a single binary can register several entry points at once. The first host to handle this entry point is Premiere Pro; After Effects is slated to pick it up in a later release.

To show the new technique, the effect sample projects were updated accordingly, yet they hold onto their PiPL so older builds keep working.

Version 5 is where `AEGP_StreamSuite` now stands, and both `AEGP_GetExpression`() and `AEGP_SetExpression`() gained Unicode handling in that revision.

`PF_AdvTimeSuite` has reached version 4, which introduces `PF_TimeCountFrames`() — a call that hands back the frame's index within the active comp.

For matrix multiplication, the brand-new AEGP Math Suite supplies convenient calls.

Adobe Clean is now the application's font. Earlier on, After Effects drew its UI text in Tahoma under Windows and in Lucida Grande under macOS X. Because this font is proprietary, we are unable to provide it for your own UI to use.
