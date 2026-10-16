# Unable to render or export Premiere project

Troubleshoot Premiere when rendering or export causes hangs, freezes, or unresponsiveness.

Before you begin

Start with the standard export troubleshooting steps referenced here.

Try exporting the project to another file format. Review the formats Premiere supports for direct export.

For H.264 or HEVC output, open Preferences > Media and clear Enable hardware accelerated decoding (requires restart).

If the export is not H.264, or the problem remains, choose File > Project Settings > General. Under Video Rendering and Playback, select Mercury Playback Engine Software Only.

Note

On Apple computers with Apple Silicon processors, Software Only mode is unavailable.

Using Mercury Playback Engine Software Only can reduce rendering speed.

If a custom export preset is in use, switch to a built-in preset. In the Export Settings dialog box, open the Preset dropdown menu and pick a built-in preset that matches the target output format.

Select Queue to send the project to Media Encoder for export with Adobe Media Encoder. Media Encoder also lets you continue working on other Premiere projects.

When a third-party transition or plugin is in the project, remove it temporarily and try exporting again.
