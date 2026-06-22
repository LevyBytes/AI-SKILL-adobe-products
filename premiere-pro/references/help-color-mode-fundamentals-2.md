# Working With The Clip Grid, Understanding Heads Up Displays

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Working with the Clip Grid; Understanding Heads-Up Displays (HUDs).

## Working with the Clip Grid

Learn how Clip Grid supports navigation, organization, and clip management in a sequence while you work in Color mode in Adobe Premiere (beta).

Clip Grid provides a thumbnail overview of all clips in the sequence, making it easy to move between shots, choose the current clip, and manage grading. It shows clips in timeline order and includes controls for filtering, organizing, and changing clip display, so the clips you need are easy to isolate without losing the sequence context.

### Clip Grid overview

In the currently open sequence, video clips appear as thumbnails in Clip Grid. It is designed for quick navigation among clips that need grading, for copying and pasting grades between clips, and for other sequence and grade-management tasks covered later. Clips on hidden or disabled tracks are hidden by default, but Show Hidden Clips button can reveal them.

Remember that clips on locked tracks cannot be adjusted until the tracks are unlocked.

### The current clip

The current clip is the one intersected by the playhead, and it is always highlighted in white to show that Color mode adjustments will target it. Selecting a different thumbnail makes that thumbnail the current clip and moves the playhead automatically to the first frame of that clip. When the Color monitor time ruler is in Sequence mode, dragging the playhead updates the current clip in real time as new clips intersect the playhead.

### Flattened thumbnail arrangement

By default, Clip Grid thumbnails run left to right according to sequence timecode. Premiere Pro collapses clips from every video track into one row; when several clips begin at the same timecode, the thumbnails represent the stacked timeline order from top to bottom as left-to-right entries in the Clip Grid.

When a selected Clip Grid thumbnail does not show up in the Color monitor, another clip may be covering it. Enable Solo mode in the Color monitor to bypass compositing and disregard the superimposed material, so the monitor displays only the chosen clip.

### Clip Grid options

At the lower left of the Clip Grid, two controls provide temporary filtering and sorting. These tools are only for momentary organization and do not alter the clip order stored in the sequence.

The Show Metadata button in the lower right toggles the identifying metadata shown for each clip. Right-click that same control to pick the metadata fields that appear.

The hamburger menu beside the Sequence tab at the top of the clip grid can also set whether thumbnails use the first, middle, or last frame from the represented sequence clips.

Adjust the Clip Grid view by enabling metadata and selecting the thumbnail frame used for clips.

Change the Clip Grid presentation by showing metadata and choosing which clip frame thumbnails display.

### Clip Grid layout

The Clip Grid initially uses a horizontal, single-row arrangement. In that layout, changing the panel size also changes thumbnail dimensions.

Choose the Grid View button to switch to rows and columns of thumbnails, which lets more sequence clips fit onscreen at the same time. In this layout, a grid size slider controls thumbnail size, trading larger previews for fewer items or smaller previews for more items in the available area.

The Clip Grid can be arranged vertically as well. That orientation can save substantial space on small screens or when grid mode needs to show many thumbnails, and it is used by the second default Color workspace.

### Color Controls overview

Color mode centers on the Color Controls panel. This panel is where you arrange and operate the color tools that change the currently selected Clip Grid clip.

Use the Color Controls panel to make and refine color corrections for the selected clip.

Use the Color Controls panel to adjust and fine-tune color corrections on the selected clip.

For the selected Clip Grid clip, the Color Controls panel shows every operation applied to it. By default these operations sit in a row across the top of the Color Controls panel; vertical layouts show the same items as a column. Operations can exist at different grade levels. Clip operations make targeted changes to one clip instance in a sequence, Sequence operations apply one shared set of operations across the full sequence, and custom groups apply a set of operations to any manually created clip group.

You can select operations, and each one functions like a layer or node containing color-tool changes. Different operation types can be added more than once and assigned to different clip sets, a workflow covered later. For now, the focus is on Clip operations, which adjust only the active clip.

When you choose an operation, its color controls appear below it. Choosing the default Adjust 1 operation reveals Color & Contrast, Color Shift, and Texture controls. These controls are built for precise fixes and creative refinements.

Control groups generally progress from left to right in the order most useful for typical work. If you need a starting point, begin with Contrast on the left and continue rightward until the image improves; for a simple color-and-contrast correction, Shift or Texture controls may not be necessary.

### Making precision adjustments

For finer movement on any control:

- Hold Option while dragging a control to reduce the adjustment speed.

### Dragging Color Controls both vertically and horizontally

Many Color Controls respond along more than one axis, which is important to understand. A 2D control can use vertical dragging for one parameter and horizontal dragging for a related but separate parameter.

This interaction takes a short time to learn. Once it feels natural, it allows smooth, expressive changes that would otherwise require moving between separate sliders. Later sections describe each control in detail; these examples show why 2D controls are useful:

- With the Contrast control, dragging up or down changes the separation between the brightest and darkest image areas. Dragging left or right changes the contrast pivot point. Moving that pivot can expand highlight changes while reducing shadow changes, or reduce highlight changes while expanding shadow changes. Adjusting contrast together with the pivot lets you see the combined effect immediately while trying variations.
- The Saturation, Hue, and Lum Shift controls modify properties of a selected color with vertical dragging. Horizontal dragging expands or contracts the affected hue range, making it possible to isolate a correction through one continuous movement.
- The Sharpness control increases image sharpening with vertical dragging. At the same time, horizontal dragging changes the threshold used to include or exclude small and medium details, allowing one gesture to produce highly focused sharpening.

### Constraining 2D controls

Every 2D control includes a "dead zone" comparable to the neutral area in video game controls. This lets you make a vertical-only move without adding tiny horizontal changes, or make the opposite constrained move. The dead zones do not block combined horizontal and vertical adjustments; you can easily push through them. Their purpose is to keep hand wobble from introducing unintended edits.

When a control must be limited to vertical or horizontal movement:

- Hold Shift and move in the desired adjustment direction to constrain the dragged 2D control.

### Heads Up Displays (HUDs)

Each color control is paired with a heads-up display (HUD) that appears during adjustment and supplies guidance. A HUD can include:

- A video-scope type or image view matched to the tool in use, so the effect of the current adjustment can be evaluated clearly
- Numeric readouts for the parameters being changed
- Superimposed graphic markers showing which region of the video scope is shifting, helping indicate the strength and location of the adjustment
- Multiple indicators when one control changes two parameters

HUDs show up contextually after you select a control, latch into it, and begin changing it. When the control is unlatched by selecting away from it, the HUD disappears, leaving the corrected image visible without extra overlays. This avoids the distraction and screen cost of keeping full video scopes open at all times, which would reduce the monitored image and pull attention away from it.

### Color & Contrast controls overview

A. Color & Contrast controls B. Zones

Color & Contrast controls make precise clip adjustments. They start in Global mode, where the top-row Contrast, Exposure, Temperature, Balance, and Saturation controls affect the whole image, which is appropriate for fast first corrections. Start with the global controls for the best initial results.

Zone buttons sit beneath the Color & Contrast controls in a second row. Selecting a zone targets Exposure, Temperature, Balance, and Saturation to specific tonal areas, meaning brightness or shadow ranges. Shadow and Highlight zones are intended for refining an already established global correction, so they should be used after the initial pass.

When a clip is selected for the first time, Premiere Pro analyzes it automatically and assigns highlight and shadow zones, giving you room to fine-tune the image.

- The Global button applies Color & Contrast controls to the full image.
- The Shadow zone button affects only shadow-range areas while preserving the brightest highlights.
- The Highlight zone button affects only highlight-range areas while preserving the darkest shadows.
- Commands in the Plus (+) menu can add more Shadow or Highlight zones when you need to isolate smaller bands inside dark shadows or bright highlights.

### Saturation, Hue, and Lum Shift controls overview

Shift controls modify Saturation, Hue, or Luminance for chosen hues in the picture. Drag vertically to raise or lower saturation, shift hue, or brighten or darken luminance for the selected hue. Drag horizontally to broaden or narrow the neighboring hue range included in the adjustment.

Use Shift controls to modify saturation, hue, and luminance for chosen color ranges.

Use Shift controls to refine saturation, hue, and luminance within selected color ranges.

As the playhead enters a different clip, Premiere Pro analyzes the first intersected frame to identify the significant hues in that frame. Those hues are stored for the clip and shown in a row below the Shift controls. The first detected hue is selected automatically for use by the controls above, and selecting any hue patch targets that hue instead.

If the desired hue is not shown, use the eyedropper to sample it from the Monitor. You can also move the playhead to another frame and use the Plus (+) menu commands to analyze a new hue set at that frame, or load either of two preset hue-patch sets.

### Texture controls overview

Texture and Sharpness offer separate methods for sharpening or softening image texture at different granularities. Both start in "simple" adjustment modes, and each can expand into multi-slider controls for more exact work.

Texture softens or sharpens medium-scale image detail through vertical dragging only; Texture has no horizontal adjustment. Selecting the Sliders button below Texture changes the control into five vertical sliders. Each slider adjusts a separate texture band, ranging from fine to coarse, so one band can be softened while another is sharpened for very targeted results.

Use Texture sliders to control fine-to-coarse detail with more exact texture adjustments.

Use Texture sliders for precise control over detail bands from fine through coarse.

Sharpness increases the perceived sharpness of the image when dragged vertically upward. Dragging horizontally changes the detail threshold, letting smaller or medium detail be excluded while edges of larger details are sharpened. Selecting the Sliders button below Sharpness changes it to three vertical sliders for independent Amount, Radius, and Threshold control in the unsharp mask effect.

Use Sharpness sliders to set amount, radius, and threshold for focused sharpening.

Use Sharpness sliders for targeted sharpening through amount, radius, and threshold control.

### Color monitor overview

The Color monitor now uses space more efficiently by placing customizable transport buttons in line with the other controls above the time ruler, while also adding controls for different color-adjustment workflows. This gives the sequence a larger viewing area and makes it easier to focus on the amount of timeline context you need while working.

### Sequence or Clip mode

This button switches between Sequence mode and Clip mode, determining how much of the sequence the time ruler navigates. The loop button behaves differently depending on the active mode:

- Sequence mode lets the scrubber cover the complete sequence duration, which is useful for quickly moving through and playing the whole program. Loop repeats the full program unless In and Out points are set.
- Clip mode restricts the time ruler to the clip duration. Loop then repeats that clip, helping you concentrate on difficult adjustments.

### Solo mode

Solo mode turns off compositing effects and disregards superimposed clips on tracks above the selected clip, so obscured clips at the playhead position can be monitored cleanly. This supports color work on one clip inside a multi-clip composite without other clips getting in the way.

Note

Switching into Clip mode automatically enables Solo mode.

### Next or Ppevious clip

In Edit mode, Next/Previous edit jumps to the next or previous edit point. In Color mode, Next/Previous clip, also available with Up or Down arrow, selects the next or previous Clip Grid item so it is ready for color adjustment. This provides quick Clip Grid navigation without selecting clips with the pointer.

### Composite or Color Channel monitoring

Checking individual color channels is often helpful when diagnosing image artifacts or noise. A dedicated menu therefore lets you choose among available color and alpha channels for the monitored clip, or use Composite mode to view the full image.

### RGBA Channels

A separate menu can display all composited color channels, which is the default, or show only the monochrome R, G, B, or A channel. Use it to determine whether an artifact or noise is stronger in a specific channel.

## Understanding Heads-Up Displays (HUDs)

Learn how Heads Up Displays (HUDs) supply real-time visual feedback for Color mode adjustments in Adobe Premiere (beta).

Heads Up Displays (HUDs) are dynamic overlays shown while color controls are being adjusted, giving immediate visual and numeric feedback. Instead of making you depend on separate video scopes, HUDs place the relevant analysis directly in the workspace and show the image impact live. They appear only as needed and vanish when the adjustment is complete, keeping attention on the image while still supporting precise, informed changes.

### What are Heads Up Displays (HUDs)?

When learning Color mode, it helps to know how the heads-up displays (HUDs) attached to color controls are intended to assist you, and why they appear only in certain moments.

Traditional color-correction layouts often keep a large panel of multiple video scopes open. The analysis from those scopes can guide decisions about the amount to adjust parts of the video image, but the user must know which scope region matters for the specific adjustment being made.

HUDs are more than video scopes. They extend the interface for each color control by showing context for the current action, its visual effect, and the value being set, while the controls themselves can stay compact and unobtrusive in the UI.

HUDs also differ because they are not restricted to the information found in standard video scopes. Premiere Pro includes more HUD types than scope types, and each HUD is designed around control-specific information.

For users who are unsure how to read video scopes, HUDs choose the most appropriate scope for each adjustment, simplify it for readability, and add clear indicators showing exactly how the adjustment changes image data. The HUD used with Texture controls also displays image analysis that ordinary video scopes do not provide.

Traditional always-on video scopes remain available for quality control (QC) analysis through the Video Scopes panel. HUDs are a contextual, space-saving alternative: they appear as an adjustment begins, show the information needed for that adjustment, and disappear afterward so you can judge the resulting image. This makes HUDs especially useful on smaller displays.

Because HUDs supply so much information during image adjustment, the color controls you select and drag can be simpler, streamlined, and space-efficient. Their graphic indicators mainly show adjustment type and amount, while the HUD carries the detailed feedback.

### Using the HUDs

HUDs appear in these situations:

- To view a Color control's specific HUD analysis without changing the image, select the color control once without moving the pointer. Select it again to dismiss the HUD.
- HUDs open automatically during an adjustment. Selecting a control once can "latch" it on, allowing the adjustment to continue without holding the button. Select again to accept the change and close the HUD.
- HUDs also open when you click and hold the pointer button while adjusting. Releasing the mouse button accepts the edit and closes the HUD.

### How to read HUDs

HUDs are made from these parts:

- Video Scope Graph: Most HUDs include a video scope graph matched to the scope best suited for judging the part of the video signal being adjusted.
- Min: (Only appears with Waveform and Parade scopes) This line sits at the bottom of the HUD and marks absolute black in the image. Moving any portion of the video signal below min clips shadow pixels to black.
- Max: (Only appears with Waveform and Parade scopes) This top HUD line represents the Output Peak Luminance selected by the sequence color management. Any video signal pushed above Max loses highlight detail because those pixels clip completely.
- Reference White: (Shown only with an HDR setting for Output color space) Reference White, also called diffuse white or graphics white, marks where normally lit reflective whites would appear on the Waveform scope, including examples like a white wall, white paper, a white napkin, or a white t-shirt. Values beyond Reference White become extra-bright "HDR-strength" highlights, such as chrome reflections, direct sunlight, explosions, eye-glints, direct light sources, or mirror reflections. The Reference White level helps separate ordinary bright areas from the high-intensity "sparkly bits" that give a graded HDR image its extra-bright accents.
- Hue Angles graticule: (Only appears on Vectorscopes) Diagonal lines indicate each hue angle in the Vectorscope, including Red, Magenta, Blue, Cyan, Green, and Yellow. Their center intersection is the neutral zero-saturation point. These lines help evaluate test-signal accuracy and show which image areas sit closest to each pure hue.
- Texture graphs: (Only appears for Texture controls) This high-contrast texture rendering of the current frame makes it clear which clip areas are influenced by sharpening or softening applied to the image.

### When HUDs get in the way

When an active adjustment is blocked by the HUD, hold the H key while making the change to hide the HUD temporarily. Let go of the H key to show the HUD again.

### Customizing the HUDs

To customize HUDs:

Open the wrench menu at the far right of the Color Controls panel, then choose Heads-Up Display (HUD) Options.

The HUD Options dialog box opens next to a sample HUD that previews the current settings across different HUD graphs.

A HUD overlay can appear with a color control to provide scope-based feedback while adjustments are made.

A HUD overlay accompanies a color control and displays scope-based feedback during adjustment.

The HUD options dialog provides a sample HUD plus many appearance controls, organized into two sections.

### Preferences

Use this section to decide where HUDs appear and how they behave during adjustments with different controls.

- Show HUDs when using Color Controls: When enabled, HUDs appear while you adjust a control. When disabled, HUDs stay hidden.

  - Anchor to Program Monitor: Places the HUD inside the monitor bounds, initially in the lower left-hand corner. Placement lets you select one of the four monitor corners for the HUD.
  - Freeform: Allows the HUD to be positioned freely while the HUD options dialog remains open, on any monitor attached to the computer. With this option selected, drag the sample HUD to the desired location on any display. After the HUD options close, later adjustments show the HUD at that chosen position. To change the location afterward, reopen the HUD options.
  - Anchor to Tools Tray: Places the HUD directly above the control being adjusted in the Color Tools panel during adjustments.

- Size: Controls how large the HUD appears. Available size choices vary by option.
- Placement: (Anchor to Program Monitor only) Selects which of the four monitor corners contains the HUD.

### Individual customization

This section uses a top menu to choose individual scope types, then lets each scope be customized separately. The scope options are described below, and not all scopes offer the same controls.

- Scope Opacity: A slider controls HUD brightness or darkness.
- Overlay Opacity: A slider controls overlay brightness or darkness.
- Saturation: Most HUD video scopes use false color to show how image colors map to the scope graph. This setting can strengthen, reduce, or remove those colors.
- Show number values: Shows or hides the adjusted control's parameter values inside the HUD.
