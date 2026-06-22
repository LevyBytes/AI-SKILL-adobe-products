# About Source Monitor And Program Monitor, Set Display Quality For The Source And Program Monitors, Adjust The Magnification For The Source And Program Monitors, Enable High Quality Playback ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Overview of Source Monitor and Program Monitor; Set display quality for Source and Program Monitors; Adjust magnification for Source and Program Monitors; Enable High Quality Playback; Choose a display mode; Gang Source and Program Monitor; Set display options for interlaced footage; Compare edits to clips in the Program Monitor; Open or clear a clip in the Source Monitor; Navigate clips in the Source menu in the Source Monitor; Display controls in the Source and Program Monitors; Time controls in the Source and Program Monitors; View safe zones in the monitors; Change the unit of measurement; Add or remove guides; Snap objects to guides; Nudge clips in Program Monitor; Save, export, and import custom guides.

## Overview of Source Monitor and Program Monitor

### Source Monitor and Program Monitor basics: view clips and sequences, edit them, and change controls or display modes.

### Source Monitor

The Source Monitor is used to play a single clip. Inside the Source Monitor, clips can be prepared before they are placed in a sequence. You define In points and Out points, choose the clip's source tracks for audio or video, insert clip markers, and send clips to a sequence in a Timeline panel.

Premiere Source Monitor overview.

Premiere Source Monitor overview.

A. Timecode B. Playhead C. Scaling options D. Zoom scroll bar E. Drag video F. Drag audio G. Settings button H. In/Out Duration

### Program Monitor

The Program Monitor previews the clip sequence you are building. It shows the active sequence from a Timeline panel. You can add sequence markers and define sequence In points and Out points. Those sequence In points and Out points identify the range where frames are inserted into, or removed from, the sequence.

Premiere Program Monitor overview.

Premiere Program Monitor overview.

A. Playhead B. Timecode C. Scaling options D. Resolution E. Settings button F. Button editor

Both monitors include a time ruler plus playback and cueing controls for the current frame in a source clip or sequence. You can set In and Out points, jump to those points, and place markers. By default, the Source Monitor provides Insert and Overwrite buttons, while the Program Monitor provides Lift and Extract buttons. Both monitors also include an Export Frame button for making a still image from one video frame.

## Set display quality for Source and Program Monitors

### Adjust Source and Program Monitor display quality and resolution so monitoring can favor editing performance or image detail as needed.

Select the Settings button in the Source Monitor or Program Monitor.

For playback quality, choose Playback Resolution; for paused display quality, choose Paused Resolution.

Choose the desired resolution from the sub menu.

The menu offers multiple resolution choices, each representing playback resolution as a fraction of the footage's original resolution.

The menu offers multiple resolution choices, each representing playback resolution as a fraction of the footage's original resolution.

Some formats are demanding to play at full motion because they use heavy compression or high data rates. Lower resolution can make playback smoother, but image quality in the display is reduced. This compromise is easiest to see with AVCHD and other H.264-codec based media. When these formats are shown below full resolution, error correction is disabled and playback artifacts are common. Those artifacts are not included in exported media.

Separate playback and paused resolutions provide finer control over monitoring. With high-resolution footage, playback resolution can be lowered, for example to 1/4, so motion stays smooth, while pause resolution can remain Full. That combination lets you inspect focus quality or edge detail while playback is stopped. Scrubbing uses playback resolution rather than pause resolution.

Available resolutions vary by sequence type. Standard Definition sequences, including DV, offer only Full and 1/2. Many HD sequences up to a 1080 frame size support Full, 1/2, and 1/4. Sequences larger than 1080, including RED, can expose additional fractional resolutions.

Tip

When previews are rendered below the sequence resolution, playback resolution is calculated from the preview resolution instead. For example, preview files can be rendered at 1/2 the sequence frame size, or 1/2 resolution, while playback resolution is also set to 1/2 resolution. In that case, rendered previews play at 1/4 of original resolution, assuming the original media resolution matched the sequence resolution.

## Adjust magnification for Source and Program Monitors

### Change display quality and adjust Source and Program Monitor resolutions to balance responsiveness with detail for the edit at hand.

The Source Monitor and Program Monitor fit video into the space available inside each view. Raising magnification lets you inspect the picture more closely. Lowering magnification reveals more pasteboard around the image, which can make editing tasks such as adjusting motion effects easier to manage.

In the Source Monitor or Program Monitor, choose a magnification value from the Select Zoom Level menu.

Changing zoom lets you move between a wide overview and a closer view for accurate edits.

Changing zoom lets you move between a wide overview and a closer view for accurate edits. Tip

In the Source Monitor, percentage values are based on source media size.

In the Program Monitor, percentages are based on the image size defined in sequence settings. Fit scales the video into the monitor's available viewing area.

To shift what part of a monitor is visible, move the monitor scroll bars. Scroll bars appear when the entire video image cannot fit at the current monitor size.

## Enable High Quality Playback

### Improve video playback quality in the Program Monitor.

For better playback performance, monitor playback quality at Full, 1/2, and 1/4 playback resolutions is lower than the quality shown while video is paused. Because of that difference, users may see a small image-quality "bump" when switching between playback and pause. At default settings, frames can look slightly softer during playback than while paused, even if both states use full resolution.

When High Quality Playback is enabled, playback frames match paused frames if both are set to the same resolution, removing the quality "bump" that can appear when playback starts or stops. Turning on High Quality Playback can reduce playback performance, however, and frames may be dropped.

From the button bar below the monitor, choose the Settings icon.

Select High Quality Playback.

## Choose a display mode

### Use display modes to edit with specialized monitor views that match the current task.

Premiere can show standard video, the alpha channel, or measurement displays. Switching modes supports different points in the editing process. For example, a dual-monitor setup can separate the timeline from preview windows.

In the Source Monitor or Program Monitor, select the Settings icon.

Work on individual channels such as Alpha, Red, Green, or Blue when handling color correction or compositing.

Work on individual channels such as Alpha, Red, Green, or Blue when handling color correction or compositing.

Select from the following display modes:

- Composite Video: shows the usual video image. This is the default view for a video clip or sequence.
- RGBA Channels: presents transparency as grayscale. If footage includes an alpha channel, the setting displays a grayscale alpha matte, with darker regions representing transparency.
- Multi-Camera: shows footage from all cameras at the same time. You can choose among cameras to decide which footage goes into the final sequence.
- VR Video: becomes available when video clips have VR properties. With VR Video display, equirectangular video can be previewed in different viewing contexts, such as a VR headset like the Oculus Rift, or on a desktop through YouTube or Facebook. For additional details about VR video, see Support for VR workflows.
- Comparison View: splits the Program Monitor display for work such as matching color between two shots or tuning the strength of an applied effect.

Compare original and edited versions side by side to review edit results in real time.

Compare original and edited versions side by side to review edit results in real time. Note

For waveform monitor and vectorscope displays, right-click the Lumetri Scopes window, then choose any waveform or vectorscope option.

## Gang Source and Program Monitor

### Synchronize the Source Monitor and Program Monitor so both views display matching content.

Gang functionality is useful when you need to compare a source clip against your sequence, such as while matching the look of one shot to another. The Gang Source and Program button supports workflows such as color correction, multi-cam editing, and edit comparisons.

The Gang Source and Program button links the Source Monitor and Program Monitor. Use that button to turn gang functionality on or off. When enabled, both playheads are locked and move together. When disabled, each monitor operates on its own.

To link the Source Monitor and Program Monitor:

In either the Source Monitor or Program Monitor, choose the icon, then drag the icon from the button editor onto the button bar.

As another route, use the Settings button at the lower right of either monitor and choose Gang Source and Program.

After it is enabled, playback and scrubbing in either monitor are mirrored by the other.

## Set display options for interlaced footage

### Control how interlaced video appears during playback.

For interlaced footage, the Source Monitor and Program Monitor can show the first field, the second field, or both fields. Source Monitor settings are unavailable when a progressive clip is open there. Program Monitor settings are unavailable if a progressive sequence preset drives the active sequence.

Use the panel menu button in the Source Monitor or Program Monitor.

Choose Display First Field, Display Second Field, or Display Both Fields for the needed view.

## Compare edits to clips in the Program Monitor

### Compare clip changes by enabling Comparison View in the Program Monitor.

At the bottom of the Program Monitor, choose the Comparison View icon to enable the view.

Use the Comparison View icon in the Program Monitor when you need to compare clip changes.

Use the Comparison View icon in the Program Monitor when you need to compare clip changes.

Comparison View in the Program Monitor supports these workflows:

- Shot Comparison: compares different shots in side-by-side or split-view layouts with a reference frame and a current frame. It can also compare different shots in side-by-side and split-view layouts with a reference frame and a current frame. This workflow can also support color matching.
- Frame Comparison: provides side-by-side and split-view comparisons of the same frame, showing before and after results from applied effects.

Use the Shot or Frame Comparison icon to switch between Shot Comparison and Frame Comparison modes. Display options let you show clip changes side-by-side, horizontally, or vertically.

View clip changes side by side, vertically, or horizontally.

View clip changes side by side, vertically, or horizontally.

By default, side-by-side view places the reference frame, or Before frame, on the left and the current frame, or After frame, on the right. Select the Swap Sides icon on the left of the Program Monitor to exchange their positions.

In vertical or horizontal split modes, drag the blue splitter across the image to create an onion-skin comparison between the two shots.

Vertical comparison used for onion skinning.

Vertical comparison used for onion skinning.

### Shot Comparison

Shot Comparison mode is for comparing separate shots.

- Current frame: the current frame is chosen by parking the playhead on a frame while the clip is selected.
- Reference frame: by default, the reference frame is the first frame of the full sequence. The navigation icons in the reference frame can move to the previous or next edit point. You can also scrub to another reference frame with the scrubbable timecode. Premiere keeps the selected frame for the editing session until a different frame is selected.

Use the scrubbable timecode to choose a different reference frame.

Use the scrubbable timecode to choose a different reference frame.

### Frame Comparison

This mode compares one side of a frame against a Before or After effect state.

Before-and-after frame comparison showing the clip with edits and without them.

Before-and-after frame comparison showing the clip with edits and without them.

## Open or clear a clip in the Source Monitor

### Open project clips in the Source Monitor so footage can be previewed and prepared before it is added to the timeline.

Open clips in the Source Monitor when you need to view and edit source clips from the Project panel or individual clip instances from a sequence. The Source menu, available from the Source Monitor tab, shows the clips that are open.

### Open a clip

To open one clip, double-click it in the Project or Timeline panel, or move it from the Project panel into the Source Monitor by dragging. After opening, the clip appears in the Source Monitor, and the Source menu gains its name.

For multiple items, drag several clips or a full bin from the Project panel to the Source Monitor. You can also select multiple clips in the Project panel and double-click the selection. The Source menu receives clips in the order selected, and the final selected clip is what the Source Monitor displays.

Note

The Source menu shows master clips by name. Clips opened from a sequence are listed by sequence name, clip name, and their starting time in that sequence.

### Clear a clip

In the Source menu of the Source Monitor, choose Close to clear one clip or Close All to clear every clip.

Note

Clicking the Close button in the Source Monitor tab can also close every clip along with the Source Monitor itself.

## Navigate clips in the Source menu in the Source Monitor

### Use keyboard shortcuts to move through multiple clips in the Source Monitor.

Keyboard shortcuts can be assigned for navigating several clips loaded in Source Monitor. The shortcuts can move among clips, jump directly to the first or last clip, or close one clip or every clip from the Source Monitor pop-up menu.

Use Edit > Keyboard Shortcuts (Windows) or Premiere > Keyboard Shortcuts (macOS) to open Keyboard Shortcuts.

Inside the dialog, expand Panels, then expand Source Monitor to show its keyboard shortcuts.

Set keyboard shortcuts for any of these commands:

- Source clip: Close
- Source clip: Close All
- Source clip: First
- Source clip: Last
- Source clip: Next
- Source clip: Previous

Select OK.

## Display controls in the Source and Program Monitors

### Add common buttons and tune the button layout for faster access to key functions.

The most useful buttons appear by default along the bottom of the Source Monitor and Program Monitor. You can add more buttons so you do not have to search menus, arrange the workspace around your editing style, and adjust the button layout to emphasize the tools you use most.

At the lower right of the Source Monitor and Program Monitor, select the Button Editor.

Use the Button Editor to open the button list and customize the button bar under the Source and Program monitors.

Use the Button Editor to open the button list and customize the button bar under the Source and Program monitors.

Choose the buttons to add to the button bar, then drag them from the editor onto the bar.

You can build up to two rows of buttons and add spaces to group them.

To remove a button, drag it away from the button bar.

## Time controls in the Source and Program Monitors

### Time controls in the Source and Program Monitors help make edits more exact and keep timeline navigation efficient.

In the Source Monitor, Premiere Pro provides controls for stepping through a clip by time or by individual frames. The Program Monitor offers comparable controls for navigating a sequence.

Program Monitor time-control overview.

Program Monitor time-control overview.

A. Current time display B. Playhead C. Zoom scroll bar D. Time Ruler E. Duration display

### Time rulers

The Source Monitor shows clip duration, while the Program Monitor shows sequence duration. Time tick marks follow the video display format chosen in the Project Settings dialog box. You can switch time rulers to show timecode in alternate formats. Each ruler also includes icons for that monitor's markers plus its In and Out points. Dragging those icons in a time ruler lets you reposition the playhead, markers, and In and Out points.

Note

By default, Premiere Pro hides time ruler numbers. To show them, open the Settings menu for the Source Monitor or Program Monitor and choose Time Ruler Numbers.

### Playhead

The playhead marks which current frame is shown on the time ruler for each monitor.

Note

The playhead was formerly called the Current‑Time Indicator (CTI).

### Current time displays

Current time displays indicate the timecode of the frame currently shown. Each monitor places this readout at the lower-left corner of its video area. The Source Monitor reports time for the clip that is open. The Program Monitor reports the sequence's current time. To jump elsewhere, click the display and type a new time, or hover over the time display and drag left or right. For toggling between full timecode and frame-count display, use Ctrl-click (Windows) or Command-click (macOS) on the current-time readout in a monitor or in the Timeline panel.

### Duration display

The duration display reports how long the open clip or sequence runs between its In point and Out point. If no In point exists, Premiere Pro uses the clip or sequence start time instead. If no Out point exists, the Source Monitor calculates duration from the clip's end time. In the Program Monitor, duration is calculated from the end time of the final clip in the sequence.

### Zoom scroll bars

In each monitor, the zoom scroll bar matches the portion of the time ruler currently visible. Drag its handles to resize the bar and adjust the ruler scale below it. When the bar is widened to its full span, the entire time ruler duration is visible. Narrowing the bar zooms in for a closer ruler view. Bar expansion and contraction are centered on the playhead. With the pointer over the bar, the mouse wheel can narrow or widen it. Scrolling the wheel outside the bars produces the same zooming behavior. Dragging the middle of the bar scrolls the visible part of a time ruler while leaving its scale unchanged. Dragging the bar does not move the playhead; after moving the bar, you can click in the time ruler to place the playhead in that same area. The timeline also includes a zoom scroll bar.

Note

Adjusting the Program Monitor time ruler or zoom scroll bar does not change the time ruler or visible range in the Timeline panel.

## View safe zones in the monitors

### Enable safe zones in the monitors so edited content remains suitable for different screen sizes and aspect ratios.

During editing, safe zone guides can be shown or hidden to help keep critical material inside the visible region on different displays and avoid edge cropping. Turning on these zones helps titles, graphics, and key content stay positioned correctly and remain visible across devices, including smartphones and TVs.

Program Monitor in Premiere with safe zone guides.

Program Monitor in Premiere with safe zone guides. Note

Safe zone guides serve only as references; they are not part of previews or exported media.

Select the Settings button below the Source Monitor or Program Monitor.

Choose Safe Margins from the menu. The Source Monitor and Program Monitor panel menus also include Safe Margins.

Tip

The default action-safe and title-safe margins are 10% and 20%, respectively. You can adjust safe-zone dimensions in Project Settings.

## Change the unit of measurement

### Choose the Program Monitor measurement unit that fits the editing task.

The Program Monitor can use the measurement unit that best matches your editing preference and project needs. Pixels, percentages, and other measurement choices give you more exact control when placing and adjusting visual content. This flexibility supports accurate display and positioning, which makes it easier to reach the intended project result.

Use View > Show Rulers to turn on rulers in the Program Monitor.

With a ruler visible, right-click it to switch between pixel and percentage measurement options.

Use pixel or percent units to set the measurement format in the Program Monitor for the current editing preference.

Use pixel or percent units to set the measurement format in the Program Monitor for the current editing preference.

## Add or remove guides

### Add guides in Program Monitor to support alignment, accuracy, and consistency while editing video.

In Program Monitor, guides help keep video-editing work accurate, aligned, and consistent. They provide visual reference points for placing text, graphics, logos, and other visual elements precisely.

### Add guides

If rulers are hidden, select Program Monitor, then choose View > Show Rulers.

Choose View > Add Guide, or right-click a ruler and choose Add Guide.

In the Add Guide dialog box, choose the guide orientation and color, enter a position, and select OK.

Add Guide dialog box used to define guide details before creation.

Add Guide dialog box used to define guide details before creation.

As another method, drag from the horizontal ruler to make a horizontal guide, or drag from the vertical ruler to make a vertical guide.

After all guides are added, you can lock them to avoid unintended movement. To lock every guide, choose View > Lock Guides.

Note

Guides remain available across projects and sessions.

### Remove guides

When guides are locked, choose View > Lock Guides to unlock them.

To reposition or remove one guide, drag it out of the Program Monitor.

To remove every guide in one step, choose View > Clear Guides.

## Snap objects to guides

### Snap objects in the Program Monitor by aligning them to guides.

With Snap in Program Monitor turned on, items in the Program Monitor, including titles, graphics, and clips, snap automatically to guides. This makes placement more precise and reduces the amount of manual adjustment needed.

Turn snapping on with View > Snap in Program Monitor.

Move the object to the desired location. When the pointer is within 2 pixels of a guide, the object snaps to that guide.

## Nudge clips in Program Monitor

### Nudge clips in the Program Monitor to make precise position changes to selected objects.

A selected object in the Program Monitor can be shifted by one frame at a time or by a larger frame offset. Premiere Pro calls this operation "nudging". You can nudge an object forward, backward, up, or down in the Program Monitor.

Note

Only keyboard shortcuts can perform nudging.

For the nudge controls to work, select the image, text, shape, or graphic layer in the Program Monitor.

Use the nudge keyboard shortcuts to move the selected element.

Tip

Undo removes nudge movements one step at a time.

## Save, export, and import custom guides

### Save guides as Guides Templates so they can be exported from and imported into Premiere.

Saving guide setups as templates can streamline editing and help visual elements in different projects follow the intended layout or standard.

### Save guides

Select View > Guide Templates > Save Guides as Templates.

Enter a template name and select OK.

Premiere Pro saves the guide template as a guides file in your user profile. It is available from the View > Guide Templates menu.

### Export guides

Guide templates can be shared with teammates when action safe and title safe editing spaces use specific settings.

Select View > Guide Templates > Manage Guides.

Select a guide template, then select Export to save the file on your system.

To choose several guide templates, Ctrl + Click (Windows) or Cmd + Click (macOS) the gray boxes on the right of the guide templates, then select Export.

### Import guides

Select View > Guide Templates > Manage Guides.

Select Import, then browse to a saved guide file to bring it into Premiere.

## Enable Dropped Frame Indicator

### Enable Dropped Frame Indicator to receive immediate visual feedback when frames are dropped.

Both Source Monitor and Program Monitor can show an icon shaped like a Stop Light to report whether playback is dropping frames. The indicator begins green, turns yellow after dropped frames occur, and resets for each playback. A tool tip shows the number of dropped frames.

Dropped Frame Indicator reports dropped frames so the final output can stay smooth and free of playback problems.

Dropped Frame Indicator reports dropped frames so the final output can stay smooth and free of playback problems.

In the button bar below the monitor, select the Settings icon.

Select Show Dropped Frame Indicator.

## Display metadata as overlays

### Adobe Premiere can show clip and sequence metadata as monitor overlays.

Overlay metadata appears on top of both the Source Monitor and Program Monitor. While viewing the clip or sequence, you can see details such as source timecode information, marker comments, and edit point indicators.

Overlays can be customized so you control which metadata appears and where it appears. Overlay presets can also be created for quick changes between different metadata layouts or content sets.

Overlays can show this metadata:

- Source Timecode
- Sequence Timecode
- Marker comments
- Sequence Clip Name
- Project Clip Name
- File Name
- Edit Point Indicators
- End Of Media/Sequence Indicators
- Multi-Camera Sources
- Sound Timecode
- Sound Roll

Overlays are off by default. To turn overlays on or off, select the icon in Program Monitor or Source Monitor, then select Overlays.

After overlays are enabled, source clip timecodes and marker comments appear by default. While you scrub the clip or pause playback, the overlays show metadata for the frame at the playhead. The playhead location determines which Markers and Indicators are shown.

Note

Overlays are shown only when the monitor uses Composite Video display mode.
