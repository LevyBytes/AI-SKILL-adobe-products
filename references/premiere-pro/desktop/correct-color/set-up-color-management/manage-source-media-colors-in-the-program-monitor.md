# Manage source media colors in the Program Monitor

See how Program Monitor Color Management gives flexible control over source-media appearance.

For the most flexibility, Color Management is set up and applied at the sequence level. Clips therefore are not fully color-managed and tone-mapped until they are placed into a sequence. This makes it possible to keep several versions of a program in one project, each sequence using different color settings. It also means Source Monitor clip color handling needs its own setup based on what you want to judge while viewing source clips.

Manage source media colors by doing the following:

In the Source Monitor, the wrench menu's Monitor Color Management submenu offers three ways to display source media. The Source Monitor includes three choices for presenting that media.

The Source Monitor includes three choices for presenting source media.

Choose among these Source Monitor modes:

- Gang to Active Sequence Color Management: the default Source Monitor setting follows the Color Management currently used by the sequence displayed in the Program Monitor.
- Show Wide Gamut Media As Log: use this when you do not want a color-managed Source Monitor view and instead need to inspect how source media would appear on a generic Rec. 709 display. In this mode, wide gamut media is shown with a low-contrast, log-like appearance so the core values remain visible without clipping. Display Color Management still shows both the Source Monitor and Program Monitor according to the computer monitor's ICC profile. This mode is helpful when troubleshooting source media before Color Management is applied.
- Show Source in Extended Dynamic Range: when an HDR computer display is available and the Extended Dynamic Range Monitoring project setting is enabled, this setting shows wide gamut clips in an ungraded state with the highlight detail the display can present, using pleasingly bright highlights regardless of the program's Output Peak Luminance setting.
