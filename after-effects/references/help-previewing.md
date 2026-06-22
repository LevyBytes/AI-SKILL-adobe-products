# Previewing (part 1)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Mar 5, 2026

Get up to speed on how previewing and rendering work in After Effects — covering ways to preview footage, layers, and compositions, plus the things that influence how fast a preview runs.

## Preview video and audio

People often use the word rendering only for final output, yet generating the previews shown in the Footage, Layer, and Composition panels counts as rendering too.

There's no need to render to final output just to check your work — any portion, or the whole, of a composition can be previewed as you go. The Preview panel houses most of the previewing controls.

## High Performance Preview Playback

Because After Effects no longer has to hold every rendered frame in RAM, High Performance Preview Playback lengthens how much you can preview and keeps playback responsive. Tapping the disk cache rather than leaning entirely on RAM delivers:

- Longer playback durations: Step through far greater spans of a composition in preview.
- Improved performance: A particular boost on lower-spec machines.

Where your frames live is signalled by the cache markings in After Effects:

A. Blue cache markings indicate frames that are stored on the disk cache. B. Green cache markings represent frames that are stored in the RAM cache.

The feature comes on by default, so nothing extra needs configuring. Should you wish to disable it, head to Preferences > Media & Disk Cache > Disk Cache > Uncheck Enable Preview from Disk Cache.

Switching on Preview from Disk Cache frees the system to cache frames beyond the RAM ceiling, shuttling between disk and memory on the fly as required.

Switching on Preview from Disk Cache frees the system to cache frames beyond the RAM ceiling, shuttling between disk and memory on the fly as required. Note

There's also a Lossless Compressed Playback feature in After Effects (Beta) that stretches your preview duration while taking up far less disk space. Learn more about Lossless Compressed Playback.

## Use preview to play video and audio

After Effects reserves RAM so the Timeline, Layer, or Footage panels can play their video plus audio at full real-time speed. The frame count it can hold for real-time playback hinges on your choices in the Preview panel.

Out of the box, previewing is tuned to mirror real-time playback. Hit the spacebar — its default keyboard shortcut — and After Effects launches a preview with audio, caching frames right up until the free RAM runs out.

Kick off a video-and-audio preview in any of these ways:

- Press any preview keyboard shortcut Spacebar, Shift + spacebar, Numpad-0, Shift + Numpad-0, or Option or Alt + Numpad-0. The preview behaves differently per shortcut, according to the Preview settings tied to each key. Adjust the settings in the Preview panel to control how each keyboard shortcut behaves.

Tip

Learn more about configuring Preview Behaviors in After Effects.

- Select the Play button in the Preview panel. Hitting Play applies whatever settings belong to the shortcut on display at that moment in the Preview panel.

- Select Composition > Preview > Play. Picking Play applies whatever settings belong to the shortcut on display at that moment in the Preview panel.

## Configure Preview behaviors

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

## Stop a Preview

Any of these will halt a preview:

- Press any of the preview keyboard shortcuts – Spacebar, Shift + spacebar, Numpad-0, Shift + Numpad-0, or Option or Alt + Numpad-0.
- Select the Play/Stop button in the Preview panel.
- Choose Composition > Preview > Play Current Preview.
- Press the Esc key.

After Effects will also halt a preview when you do any of the following:

- Select the previewing viewer panel. Clicking that viewer panel's tab, though, won't stop the preview.
- Tweak any time-related property — the Work Area bar or the Time Navigator bar, for example.
- Drag the current-time indicator (CTI), or click the time ruler, without holding Option (macOS) or Alt (Windows). Doing so also shifts the current time.
- Change the composition settings of a previewing composition.
- Tuck the previewing viewer panel behind another panel in the workspace — for instance, by clicking a different panel in the same group or opening a fresh viewer panel within that group.
- Start the render queue.

Both the Play or Stop button in the Preview panel and Composition > Preview > Play Current Preview track whichever shortcut is on display in the Preview panel. Stopping a preview through them produces the same outcome as pressing that displayed keyboard shortcut.

## Default preview settings

Listed below are the default preview settings for each preview keyboard shortcut:

## Spacebar

Function

Default preview settings

Play video in preview

On

Play audio in preview

On

Show overlays and layer controls

Off

Cache before playback

Off

Range

Work area extended by current time

Play From

Current Time

Frame Rate

Auto

Skip

0

Resolution

Auto

Full Screen

Disabled

If caching, play cached frames (when the Spacebar is used to stop a preview)

Disabled

Move time to preview time (when the Spacebar is used to stop a preview)

Enabled

| --- | --- |

## Shift + Spacebar

Function

Default preview settings

Play video in preview

On

Play audio in preview

On

Show overlays and layer controls

Off

Cache before playback

Off

Range

Work area extended by current time

Play From

Current Time

Frame Rate

Auto

Skip

0

Resolution

Auto

Full Screen

Disabled

If caching, play cached frames (When the Shift + Spacebar is used to stop a preview)

Enabled

Move time to preview time (When the Shift + Spacebar is used to stop a preview)

Disabled

| --- | --- |

## Numpad-0

Function

Default preview settings

Play video in preview

On

Play audio in preview

On

Show overlays and layer controls

Off

Cache before playback

Off

Range

Work area

Play From

Start of Range

Frame Rate

Auto

Skip

0

Resolution

Auto

Full Screen

Disabled

If caching, play cached frames (When the Numpad-0 is used to stop a preview)

Enabled

Move time to preview time (When the Numpad-0 is used to stop a preview)

Disabled

| --- | --- |

## Shift + Numpad-0

Function

Default preview settings

Play video in preview

On

Play audio in preview

On

Show overlays and layer controls

Off

Cache before playback

Off

Range

Work area extended by current time

Play From

Start of Range

Frame Rate

Auto

Skip

1

Resolution

Auto

Full Screen

Disabled

If caching, play cached frames (When the Shift + Numpad-0 is used to stop a preview)

Enabled

Move time to preview time (When the Shift + Numpad-0 is used to stop a preview)

Disabled

| --- | --- |

## Alt + Numpad-0

Function

Default preview settings

Play video in preview

On

Play audio in preview

On

Show overlays and layer controls

Off

Cache before playback

Off

Range

Play around current time.

Play From

Start of Range

Frame Rate

Auto

Skip

0

Resolution

Auto

Full Screen

Disabled

If caching, play cached frames (When the Alt + Numpad-0 is used to stop a preview)

Enabled

Move time to preview time (When the Alt + Numpad-0 is used to stop a preview)

Disabled

| --- | --- |

## Preview only audio

A preview of audio alone starts playing right away at real-time speed; the exception is when you've added audio effects beyond Stereo Mixer, in which case the audio may need to render before it sounds.

Define the project-wide audio sample rate from the Project Settings dialog box (File > Project Settings).

Audio-preview behavior is driven by the Audio Hardware and Audio Output Mapping preferences; the quality of audio in your final output, meanwhile, traces back to the output module settings. Head to Edit > Preferences > Audio Hardware, and from there you can set the device class, assign the default output, adjust settings, and configure how much latency to allow.

### Numpad-. (Decimal)

Function

Default preview settings

Play video in preview

Off

Play audio in preview

On

Show overlays and layer controls

Off

Cache before playback

Off

Range

Work area extended by current time

Play From

Current time

Frame Rate

Auto

Skip

0

Resolution

Auto

Full Screen

Disabled

If caching, play cached frames (When the Numpad-. (Decimal) is used to stop a preview)

Enabled

Move time to preview time (When the Numpad-. (Decimal) is used to stop a preview)

Disabled

| --- | --- |

### Alt + Numpad-. (Decimal)

Function

Default preview settings

Play video in preview

Off

Play audio in preview

On

Show overlays and layer controls

Off

Cache before playback

Off

Range

Work area extended by current time

Play From

Start of range

Frame Rate

Auto

Skip

0

Resolution

Auto

Full Screen

Disabled

If caching, play cached frames (When the Alt + Numpad-. (Decimal) is used to stop a preview)

Enabled

Move time to preview time (When the Alt + Numpad-. (Decimal) is used to stop a preview)

Disabled

| --- | --- |

## Manually preview (scrub) video and audio

- Drag the current-time indicator to scrub the video by hand in the Timeline panel or to jump to a particular frame.
- Scrubbing audio in the Timeline panel calls for Ctrl + Alt-drag (Windows) or Command + Option-drag (macOS) on the current-time indicator (CTI).
- For scrubbing both audio and video in the Timeline panel, use Ctrl-drag (Windows) or Command-drag (macOS) on the current-time indicator (CTI).

Pause the current-time indicator (CTI) while the mouse button stays down during an audio scrub and a brief stretch of audio loops.

Note

Want to manually scrub only the frames already rendered into the RAM cache? Hold Caps Lock first, then drag the current-time indicator (CTI). That keeps After Effects from rendering other frames as you pass over or beyond them — handy when you're scrubbing through frames rendered with a preview setting that skips every other frame.

## Audio panel options

The Audio panel's volume unit (VU) meter shows audio levels live as previews run. Indicators up at the top of the VU meter fire when the audio clips — the distortion you get once the signal pushes past the loudest level the audio device can handle.

Enlarge the Audio panel's height for a closer look at the VU meter and the levels controls.

From the Audio panel menu, pick Options to set these:

Units

Decide whether audio levels show as decibels or as percentages. 0 decibels (0 dB) corresponds to 100%.

Slider Minimum

The minimum audio level to display in the Audio panel.

## Additional tips and options for previewing

- Across every previewing method — just as with rendering to final output — a layer shows up in rendered previews only when its Video layer switch is on.
  - Layer switches
  - Fast Previews settings
  - Preference settings
  - Composition settings

Among the preview controls, the Resolution/Down Sample Factor settings menu ranks as one of the easiest to use and most impactful. Pick anything other than Full from it to view all previews at a reduced resolution.

Setting resolution for preview

Setting resolution for preview Note

Flip pixel-aspect ratio correction on or off for previews via the Toggle Pixel Aspect Ratio Correction button at the foot of the panel. Its correction quality follows the Zoom Quality preference. Learn more about viewing quality preferences in After Effects.

- Where you can, preview using the same type of device your audience will watch your final output on — an external video monitor, for instance.
- With color management turned on, you're able to preview a composition, layer, or footage item the way it looks in the output color space. Learn how to simulate how colors will appear on a different output device in After Effects.

Note

Turn on Show Rendering Progress In Info Panel And Flowchart (Edit > Preferences > Display (Windows) or After Effects > Preferences > Display (macOS)) to surface extra details in the Info panel or the project Flowchart panel as rendering proceeds, whether for previews or for final output.

## Move the current-time indicator (CTI)

Preview by hand by moving or dragging the current-time indicator (CTI) within the Timeline panel.

Preview by hand by moving or dragging the current-time indicator (CTI) within the Timeline panel.

Moving or dragging the current-time indicator (CTI) is the most fundamental way to preview frames by hand.

A composition's, layer's, or footage item's time dimension is laid out visually by the time ruler. Within a Layer or Footage panel, you'll find the time ruler down toward the bottom. For a Composition panel, it shows up in the matching Timeline panel. Different panels' time rulers cover different spans: the one in a Layer or Footage panel reflects how long that panel's contents run, whereas the one in the Timeline panel reflects the length of the whole composition.

The current-time indicator on a time ruler points to the frame you're viewing or editing.

For a single frame in either direction, click the Preview panel's Next Frame or Previous Frame button, or hit Page Down or Page Up.

To step 10 frames either way, Shift-click that Next Frame or Previous Frame button, or hit Shift + Page Down or Shift + Page Up.

To jump ahead by a set amount of time or count of frames, click the current-time display and type the plus sign (+) followed by the timecode or frame count to move forward. Enter +20, for example, to advance 20 frames, or 1:00 to advance one second. Put a minus sign (-) in front of the value to move backward — say, +-20 to retreat 20 frames or +-1:00 to retreat one second.

To reach the very first or last frame, click the Preview panel's First Frame or Last Frame button, or hit Home or End.

For the work area's first or last frame, press Shift + Home or Shift + End.

Landing on a specific frame can be done a few ways: click the time ruler; click the current-time display within the Footage, Layer, Composition, or Timeline panel; or press Alt + Shift + J (Windows) or Option + Shift + J (macOS). Dragging the current-time display in the Timeline panel will likewise change the value.

- Hold Shift while dragging the current-time indicator and it snaps to keyframes, markers, In and Out points, or the start or end of either the composition or the work area.

- Combine Shift with the J and K hotkeys for fast hops across the keyframes and markers belonging to whichever layers and properties you've selected.
- With several layers selected, pressing I drives your CTI to the earliest In point, while O takes it to the latest Out point.

Note

Scrub the CTI mid-preview and the preview stops. Hold Option or Alt as you scrub to keep the preview going while you move the CTI.

## Zoom in or out in time for a composition

- Within the Timeline panel, click either the Zoom In button or the Zoom Out button, or slide the zoom slider that sits between them.
- Tapping the = (equal sign) key on the main keyboard zooms in, while the – (hyphen) key zooms back out across time.
- Grab either the Time Navigator Start or the Time Navigator End bracket and drag it to focus in or out on a stretch of the composition time ruler.

Note

Clicking the Time Navigator inside the Timeline panel makes the Info panel report the start and end times spanning the Time Navigator's duration.

- Pressing Shift + ; (semicolon) while the Composition panel or Timeline panel is active expands the view to the whole composition duration. A second Shift + ; returns you to the span defined by the Time Navigator.
- Shift-double-clicking the Time Navigator also expands the view to the full composition duration; Shift-double-click it once more to snap back to the Time Navigator's span.
- Double-clicking the Time Navigator zooms in far enough to reveal individual frames along the time ruler. Double-click it again to back out to the entire composition duration.
- Multi-touch gestures let you zoom the Composition, Layer, Footage, and Timeline panels: bring two fingers together to zoom out, or spread them apart to zoom in. There is also a Preferences > Preview > Magnification option named Trackpad Scrolling that you can set to Pans, which turns two-finger drags into a way to pan the viewer like the Hand tool does. ( Smooth Zoom is currently in beta)

Tip

- If you want more techniques for zooming and scrolling through time with the mouse scroll wheel, see scroll or zoom with the mouse wheel.
- For the other zoom Type, Behaviour, and Trackpad Scrolling settings, consult the Magnification preferences.

Note

After you've zoomed in along time, tap D to recenter the time graph on the current time.

## Choose a viewer to always preview

Picking a default viewer to preview pays off most when one Composition viewer holds your final output and you'd rather keep previewing that one even while you tweak settings elsewhere in other panels.

For the length of the preview, whichever panel is marked to always preview is brought to the front.

- From the Composition panel settings, turn on Always Preview This View.
- From the Composition panel settings, turn on Primary Viewer.

## Primary Viewer Button

Look to the lower-left of any Composition, Layer, or Footage viewer panel and you'll find the Primary Viewer button positioned right next to Always Preview This View.

The behavior of Primary Viewer mirrors Always Preview This View, with one distinction: Primary Viewer governs only which viewer or view handles audio and external video preview.

- Primary Viewer can belong to just one view at a time; switching it on for a given viewer or view automatically clears it from whichever viewer or view held it before.
- With Primary Viewer turned off, audio and external video preview fall to whichever viewer or view was active most recently.
- Moving to another viewer or view hands audio and external video preview over to that viewer or view.

Note

With several views open at once, 2D compositions preview through the frontmost composition view, and 3D compositions preview through the Active Camera view. Disable the Active Camera by clearing Previews Favor Active Camera in the Preview panel menu.

## Preview modes and Viewer Quality preferences

For previewing, After Effects offers a number of options that strike different balances between speed and fidelity.

## Preview modes and Fast Previews preferences

Every preview mode strikes its own balance of quality versus speed, both for playback and for refreshing images mid-interaction — for instance while you drag a layer in the Composition panel or edit a property value in the Timeline panel.

Both Draft 3D and Live Update modes take effect across every view of a composition.

Draft 3D

Switches off lights, shadows, and camera depth-of-field blur. Toggle Draft 3D mode by clicking the Draft 3D button along the top of the Timeline panel.

Live Update

Refreshes images in the Composition or Layer panel as you interact. With Live Update turned off, After Effects shows wireframe stand-ins during interactions instead.

Note

- For a momentary Live Update toggle, keep Alt (Windows) or Option (macOS) held while you drag a layer, change a property value, or shift the current-time indicator (CTI).
- Pressing Caps Lock stops After Effects from refreshing images in the Footage, Layer, and Composition panels. Whenever you do something that would normally show up in a panel, After Effects places a red bar along the bottom with a note that image refresh is switched off. Controls such as motion paths, anchor points, and mask outlines still track as you drag them. Tap Caps Lock once more to bring panel refreshes back and reveal every change. Using Caps Lock this way is handy for keeping views from refreshing on each frame while the final output renders.
- If you render previews through OpenGL and preview onto a video monitor, what shows on that video monitor holds still while you manipulate composition elements; only once you release the mouse to finish an interaction does it refresh. Learn more about previewing on an external video monitor in After Effects.

## See also

- [Lossless Compressed Playback](help-lossless-compressed-playback.md)
