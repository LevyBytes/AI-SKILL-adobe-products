# Previewing (part 2)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Fast Previews

Fast Previews choices span from slower but higher-quality (Off) all the way to faster but lower-quality (Wireframe).

Off (Final Quality)

Turns Fast Previews off. Reach for this mode when you want to preview your composition at full final quality.

Adaptive Resolution

Tries to downsample footage as you drag a layer or scrub a property value. Within ray-traced 3D compositions, Adaptive Resolution scales the ray-tracing quality down according to the current adaptive resolution:

- At 1/2, the ray-tracing quality value is cut in half.
- At 1/4, it is reduced to at most 4.
- At 1/8 or 1/16, it is reduced to at most 2.

The adaptive resolution limit can be adjusted under Edit > Preferences > Previews (Windows) or After Effects > Preferences > Previews (macOS).

Draft

Offered for ray-traced 3D compositions only. Picking it drops the ray-tracing quality — the count of rays the ray tracer fires — down to 1.

Fast Draft

While blocking out an elaborate scene, or whenever you're inside a ray-traced 3D composition, Fast Draft mode is a useful way to preview. Within ray-traced 3D compositions, Fast Draft mode renders beveled, extruded, and curved 3D layers. During preview the scene gets downsampled so textures load to the GPU faster. Even in Fast Draft mode, each frame of video is still pulled into the renderer when needed. The downsample factor is fixed at 1/4 resolution, with effects and track mattes left on.

Wireframe

Handy for assembling and previewing elaborate compositions.

- Across Draft, Fast Draft, and Wireframe modes, the lightning bolt on the Current Renderer menu button turns orange. Under Adaptive Resolution it goes orange whenever the composition is downsampled. In all of these modes, the mode's name shows in the upper-right corner of the Composition view.
- Should adjusting a property or scrubbing the Timeline run slow under Final Quality mode, Adaptive Resolution, or Draft modes, the scene temporarily drops to wireframes. Once you quit moving the mouse, the frame finishes rendering.
- Switching a ray-traced 3D composition that's in Draft mode over to a Classic 3D composition makes the fast preview mode flip automatically to Adaptive Resolution.
- Want several active views to refresh together as you scrub with Ctrl (Windows) or Command (macOS) held? Turn on Share View Options, found in the Select View Layout pop-up menu.
- Clicking the Current Renderer menu button at the upper-right of the Composition panel jumps you straight to the current renderer settings inside the Composition Settings dialog box. This works for any 3D layer, camera, or light in the composition.

Note

Matching the Fast Previews mode to how you work matters, particularly while you're handling ray-traced 3D compositions.

## Keyboard shortcuts for Fast Previews

Quality name

Shortcut

Off (Final Quality)

Ctrl + Alt + 1 (Windows) or Cmd + Option + 1 (macOS)

Adaptive Resolution

Ctrl + Alt + 2 (Windows) or Cmd + Option + 2 (macOS)

Draft

Ctrl + Alt + 3 (Windows) or Cmd + Option + 3 (macOS)

Fast Draft

Ctrl + Alt + 4 (Windows) or Cmd + Option + 4 (macOS)

Wireframe

Ctrl + Alt + 5 (Windows) or Cmd + Option + 5 (macOS)

| --- | --- |

## Viewer Quality preferences

Inside the Previews preferences category, you get to set how fast and how high in quality the color management and zoom operations behave during previews.

Pick one of these from either the Zoom Quality menu or the Color Management Quality menu:

- Faster
- More Accurate Except Cached Preview
- More Accurate

What the Zoom Quality preference controls is the quality of the scaling done for pixel aspect ratio correction within the Composition and Layer panels.

Note

Whenever the Show Channel menu points at an option displaying straight colors (RGB Straight, Alpha Overlay, or Alpha Boundary), After Effects skips the Viewer Quality preference and builds the preview as though Viewer Quality were set to faster.

## Region of interest (ROI)

Whatever portion of the composition, layer, or footage item gets rendered for previews is the Region of interest (ROI). Drawing a smaller region of interest cuts the processing power and memory a preview needs, which speeds up interaction and lengthens how much you can preview.

Out of the box, altering the region of interest leaves file output untouched. By cropping to the region of interest, you can resize your composition and pick which part gets rendered.

Note

Once the region of interest is active, the Info panel gives you horizontal and vertical distances from the composition's upper-left corner out to each of the region's four edges: top (T), left (L), bottom (B), and right (R).

- To draw a region of interest, find the Region Of Interest button along the foot of the Composition, Layer, or Footage panel, click it, and then drag across the panel to mark off a viewable area.

Note

Should you want to begin again with the marquee tool, keep Alt (Windows) or Option (macOS) held while you click the Region Of Interest button.

- Click the Region Of Interest button to flip between working with the region of interest and working with the whole composition, layer, or footage frame.
- Reposition or resize the region of interest by dragging its edges or handles. Hold Shift while dragging a corner handle to keep the aspect ratio as you resize.
- Crop the composition down to the region of interest with Composition > Crop Comp To Region Of Interest.
- Crop the output down to the region of interest by selecting Use Region Of Interest within the Crop section of the Output module settings dialog box.

Note

For something equivalent to a region of interest scoped to one layer, draw a temporary mask around the slice of the layer you're focused on. Anything beyond the mask goes unrendered. That can speed up work on a small slice of a large layer considerably. Stay cautious, though — skipping the pixels outside the mask may shift the composition's look noticeably. Learn more about creating masks in After Effects.

## Work area

That slice of a composition's duration which gets rendered for previews or final output is the work area. The Timeline panel shows it in a paler gray.

- Tap B (begin) to anchor the work area start time to the current time, or N (end) to anchor the end time there.
- Define the work area by sliding the start and end work area markers along the time ruler.

- Shift the whole work area by dragging the middle of the work area bar to the left or right.

Double-clicking the center of the work area bar stretches the work area out to match the composition's size.

- Click the work area bar to have the Info panel show how long the work area runs along with its start and end times.

## Snapshots

Take a snapshot whenever you'd like to hold one view up against another inside a Composition, Layer, or Footage panel — say, to line up two frames from different points in a movie.

A snapshot grabbed in one type of panel can show up in a different type. You might, for example, capture a snapshot from a Layer panel and bring it up in a Composition or Footage panel. Showing a snapshot doesn't swap out what the panel already holds. Where a snapshot's size or aspect ratio differs from the panel showing it, the snapshot gets resized to suit the current view.

Snapshots serve only as reference and never merge into the layer, composition, or rendered movie.

Taking a snapshot triggers a sound.

- Capture a snapshot by clicking the Take Snapshot button at the bottom of the panel or by pressing Shift + F5, Shift + F6, Shift + F7, or Shift + F8.
- See the latest snapshot grabbed with the Take Snapshot button or Shift + F5 by clicking and holding the Show Snapshot button at the bottom of the panel.
- Bring up one particular snapshot by pressing and holding F5, F6, F7, or F8.
- Clear a snapshot by holding Ctrl + Shift (Windows) or Command + Shift (macOS) and pressing F5, F6, F7, or F8.
- Release every bit of memory holding snapshots through Edit > Purge > Snapshot.

## Preview on an external video monitor

The contents of your Layer, Footage, or Composition panel can be previewed on an external video monitor. Doing so calls for extra hardware — a video capture card or a FireWire port, for example.

You can route previews to a second monitor wired to your video display cards over DVI, DisplayPort, or HDMI. When a video capture card links the external video monitor, install its appropriate drivers and hook up the monitor to see previews. When a FireWire port is involved, attach a digital camcorder or comparable device to it first, then connect the video monitor to that device. The documentation for your digital camcorder, VCR, or other devices covers more on configuring FireWire previews.

Pick Edit > Preferences > Video Preview (Windows) or After Effects > Preferences > Video Preview (macOS).

Turn on video output to an external device by picking among these options:

- Adobe DV: The FireWire choice.
- Adobe Monitor x: Your connected computer monitors, the ones able to take video preview data via the graphics card.
- Third-party video hardware: What appears here changes with the third-party hardware you've hooked up. AJA Kona 3G, Blackmagic Playback, and Matrox Player are common examples.

Pick the Disable video output when in the background option so that video frames stop flowing to the external monitor whenever After Effects isn't the foreground application.

Pick the Video preview during render queue output option to push video frames out to the external monitor as After Effects renders frames in the render queue.

When the video preview goes to an external monitor over Mercury Transmit, it's color-managed, with the external video preview monitor handled as an HDTV Rec. 709 device. The Video preview using Mercury Transmit article has more details.

Note

To the video preview monitor, the Wireframe preview mode previews nothing at all. (See Preview modes and Choose a working color space and enable color management.)

## More like this

- Layer switches and columns in the Timeline panel
- Workspaces, panels, and viewers
- Preferences
- Basics of rendering and exporting
