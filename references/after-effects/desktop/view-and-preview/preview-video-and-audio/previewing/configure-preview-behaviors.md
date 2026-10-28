# Configure Preview behaviors

Tailor the Preview options to match how you like to work. The Preview panel's controls let you set, per keyboard shortcut (Spacebar, Shift + Spacebar, Numpad-0, Shift + Numpad-0, Numpad-, or Option or Alt + Numpad-), the audio, looping, caching, range, and layer-control behavior.

To configure settings for Preview:

Across most After Effects workspaces the Preview panel sits open already. If it happens to be closed, bring it up with Window > Preview.

These are the settings you can change in the Preview panel to shape how Preview behaves:

Shortcut

Pick which keyboard shortcut will Play/Stop a preview – Spacebar, Shift + Spacebar, Numpad-0, Shift + Numpad-0, or Option or Alt + Numpad-0. Whichever shortcut is currently selected dictates how the preview behaves, based on its settings.

Reset

Restore default preview settings for all Shortcut keys.

To bring every shortcut's preview settings back in line with how they worked in earlier releases (After Effects CC 2014 and before), hold Option (macOS) or Alt (Windows) while clicking the Reset button.

Mute Audio

Mute audio during a preview.

Include Video

Turn this on and the preview shows video.

Include Audio

Turn this on and the preview plays audio.

Include Overlays and Layer Controls

With this on, the preview displays overlays — grids and guides, say — plus layer controls for whichever layers are selected, as set in the View > View Options dialog box. It works whether or not Include Video is turned on.

Guidelines, safe margins, grids, and 3D reference axes are among the Viewer panel overlays. Pick which ones the current viewer shows from the Choose Grid and Guide options menu down at the bottom of the Viewer panel.

Mid-playback, you can toggle layer controls on and off with Cmd + Shift + H (macOS) or Control + Shift + H (Windows).

Loop

Choose whether playback should repeat in a loop.

Toggling layer controls during a preview leaves the state of the Layer controls option in the Preview panel untouched.

All three Include buttons can't be off at once — one has to stay on. Switch off the third and one of the remaining buttons turns back on.

Cache Before Playback: Turn this on and After Effects caches frames first, then begins playback. None of the preview shortcuts have it on by default. Option- (macOS) or Alt- (Windows) clicking Reset in the Preview panel turns Cache Before Playback on for Numpad-0.

Range

Sets which frames get previewed:

- Work Area: Only the frames within the work area.

  - With the CTI sitting before the work area, the range runs from the current time out to the work area's end.
  - With the CTI sitting after the work area, the range runs from the start point up to the current time. Turn on From Current Time and the range instead runs from the start point to the final frame of the composition, layer, or footage.
  - With the CTI sitting inside the work area, the range matches the work area exactly, with nothing added.

- Entire Duration: Every frame across the composition, the layer, or the footage.
  Play Around Current Time: Kick off a preview with Play Around Current Time switched on and After Effects subtracts the preroll from where the current time sits, tacks the postroll onto it, and runs through the frames lying between the two.

Dialing in your preroll and postroll amounts goes like this:

    1. Select Range > Play Around Current Time.
    2. Within the Play Around Current Time settings dialog box, enter the preroll and postroll values you want, in seconds.
    3. Select OK.

Frame Rate

Set a Frame Rate for previewing. Pick Auto to keep the preview's rate matched to the composition's.

Skip

Drop frames during previewing — pick how many — to boost playback performance.

Resolution

Set the preview resolution. Whatever you pick in the Resolution drop-down takes precedence over the composition's own resolution setting.

Pick one or more of these behaviors to happen when you halt a preview using the current shortcut or the Play button:

- If caching, play cached frames: With this enabled, stopping a preview via this shortcut before caching finishes halts only the caching; the cached frames then play again starting from the top of the range. With it disabled, this shortcut halts caching and playback both.
  - Move time to preview time: With this enabled, stopping a preview via this shortcut snaps the Current Time over to wherever the Preview Time sits.
