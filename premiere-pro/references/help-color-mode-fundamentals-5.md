# Color Monitor Overview, About Comparison View, Working With Video Scopes

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Color monitor overview; About Comparison View; Working with Video Scopes.

## Color monitor overview

Learn how the Color monitor supports color work through compact controls plus features for accurate clip review and navigation.

The Color Monitor is built for color grading, using a layout that keeps image evaluation central while leaving necessary controls close at hand. Its transport controls are streamlined, and its added color-focused tools create a larger viewing area with fewer distractions. That layout helps you move through a sequence, isolate clips, and make precise adjustments more easily.

### Why is the Color monitor different?

The Color monitor saves space by placing the customizable transport control buttons on the same line as the other controls above the time ruler, and it adds controls that support color-adjustment workflows. This gives the sequence more screen area and lets you decide how many sequence clips should stay in focus while you work.

### Color-specific features

This section covers monitor features that belong specifically to Color mode.

### Sequence and Clip mode

Use this button to switch between Sequence and Clip modes. The main difference is how much of the sequence the time ruler navigates, and the loop button changes behavior according to the active mode:

- Sequence mode lets the time ruler navigate the full sequence duration, which is useful for quickly moving through or playing the whole program. When Loop is enabled, it loops the whole program unless In and Out points are set.
- Clip mode restricts the time ruler to the duration of the Clip. With Loop enabled, playback repeats that single clip so you can concentrate on it during difficult adjustments.

### Solo Mode

Turning on Solo mode temporarily suspends compositing effects and ignores clips on tracks above the selected clip at the playhead position. This lets you view an obscured clip cleanly and make color changes in a multi-clip composite without the other clips distracting you. Toggle the control again to return to Composite mode.

Note

Clip mode automatically turns Solo mode on.

### Clip Navigation

In Edit mode, Next/Previous edit moves to the adjacent edit. In Color mode, Next/Previous clip selects the neighboring clip in the Clip Grid for color adjustment; Up or Down arrow can perform the same action. This is a quick way to move through Clip Grid clips without selecting them with the pointer.

### RGB Channel Selection

When checking image artifacts or noise, examining individual color channels is often helpful. A dedicated menu lets you choose among the monitored clip's available color and alpha channels, or Composite mode for the overall image.

### Default Monitor Controls

Compared with the Source Monitor and Program Monitor in Edit mode, the Color Monitor uses a different control set. It includes convenient color-specific controls and a selected group of buttons suited to color workflows.

From left to right, the controls are:

- Go to Previous Marker: moves to the previous sequence marker. In Color mode, only sequence markers are currently available for navigation.
- Add Color Reference Marker: places a color reference marker on the sequence so that frame can be filtered quickly and used in the Comparison View.
- Go to Next Marker: moves to the next sequence marker. In Color mode, navigation currently supports sequence markers only.
- Go to Previous Edit Point: changes the selected clip to the previous clip in the clip grid.
- Play: starts playback or stops playback.
- Go to Next Edit Point: changes the selected clip to the next clip in the clip grid.
- Loop: turns looped playback on or off. When looping is active, Clip mode repeats the current clip, while Sequence mode repeats the overall sequence.
- Toggle Proxies: turns the proxy workflow on or off. The icon state shows whether proxies are enabled.
- Global FX Mute: switches all effects off or on. With effects off, color management still applies to the image. This is useful for a fast overall before-and-after view of the current frame.
- Mute: switches audio playback off or on. This can help when repeated clip looping is being used for evaluation and color operations.
- Comparison View: switches the Color monitor into Comparison View mode.

Use Color Monitor controls for playback, navigation, and sequence review while making color adjustments.

During color adjustment, Color Monitor controls provide sequence playback, movement, and review.

Customization for these controls follows the Edit mode monitor workflow.

To customize Color Monitor Controls:

Choose the Button Editor button to the right of the editable controls.

After the Button Editor dialog box opens, drag icons for the functions you want into the Monitor control bar, or drag unwanted Monitor buttons out of the button bar and drop them to remove them.

When the setup is complete, select OK, or select Cancel if you do not want to keep the changes.

## About Comparison View

Learn how Comparison View helps evaluate and match clips in Color mode with side-by-side visual feedback and scope-based feedback.

Comparison View has moved from Edit mode to Color mode, where it has been updated for the expanded set of color adjustment workflows. It helps you compare two clips when their color and contrast need to match, whether you are moving through a scene or an entire program and matching clips to a chosen reference frame.

The split screen also works with the HUDs used by each color control. That makes it easier to adjust contrast and exposure by matching highlights and shadows between clips with different contrast ratios against the top and bottom of the waveform monitor. It also helps align vector scope graphs between clips when using Temperature or Balance to match overall color temperature.

Comparison View currently supports three workflows:

- Comparing a graded clip with its own ungraded original.
- Comparing two clips selected in the Clip Grid.
- Comparing a clip in the clip grid with a frame marked by a color reference marker.

The following sections cover each workflow and show ways to customize the comparison using controls that appear when the pointer hovers over the monitor.

Note

Side-by-Side mode from the earlier Comparison View is not available yet. Adobe plans to update it, but that work is unfinished, so the feature will return only in a future release.

### Comparing a graded clip to the ungraded original

To compare a graded clip with its own ungraded original, use this simple workflow.

Select one clip in the clip grid; it appears highlighted in white.

Select Comparison View from the wrench icon to enable it.

Turn on Comparison View to place clips side by side for color and exposure matching.

Use Comparison View when clips need side-by-side color and exposure comparison.

When finished, select OK, or choose Cancel if you do not want to keep the result.

By default, the graded clip appears on the right side, while the ungraded original appears on the left. Hover over the Monitor to see labels for each side and other split-customization controls.

This kind of comparison can be useful for many reasons. It is especially valuable when you need to confirm, for yourself or for a client, that the grade improves on the original. It also helps determine whether an image artifact was introduced by an adjustment or was already present in the original media.

When the comparison is no longer needed, select the Comparison View button below the monitor to turn it off.

Note

The Original side of the split shows the frame without the Color effect being added in Color mode and without sequence clip effects from the Effect Controls panel. Effects applied to the Source still appear as part of the original image.

### Comparing clips using Clip Grid selections

The quickest comparison between two clips works like this:

Select two or more clips in the Clip Grid.

Use the Comparison View button below the monitor to enable it.

By default, the adjustable current clip is shown on the right side of the split, and the first secondary selection becomes the reference clip on the left. Hover over the Monitor to reveal labels for both sides and additional controls for the split.

When several clips are selected as secondary selections, they appear in the Reference List on the left side of the Monitor. From that list, choose which secondary selection should be used for comparison with the current clip.

This makes rapid switching among multiple comparison clips easy, and it also speeds up matching color across a scene. For example, after enabling Comparison View and selecting every clip from a scene in the Clip Grid, you can pick the scene reference from the reference list, then select each clip in the Clip Grid that should be adjusted to match it.

Selecting any secondary selection as the current clip, or using Go to Next/Previous Edit Point within the selected range, does not clear the selection. As a result, you can move quickly through clips in the selected range and adjust them while comparing against any selected item in the reference list.

When finished, select the Comparison View button underneath the monitor to disable it, then deselect the secondary selections.

### Comparing clips using Color Reference Markers

When certain clips in a sequence should serve as references, add Color Reference Markers to the frames you want available for comparison. Color Reference Markers can be placed on the sequence or on clips.

After they are added, the Markers panel can display them in a list, and particular Color Reference Markers can be pinned to the Comparison View reference list for repeated use. This workflow fits longer sequences where known reference images will be used to match other scenes.

### Placing Color Reference Markers

Premiere adds Color Reference as a marker type, and it defaults to blue. When a marker is edited, this marker type appears in the Options section of the Edit Marker panel. Color Reference Markers behave like other markers except for their type, which lets you filter them separately in the marker panel when fast isolation is useful.

Although any marker can be created and converted into a Color Reference marker, Premiere Pro also provides a separate Marker > Add Color Reference Marker command, distinct from Add Marker (Control or Command + M). No keyboard shortcut is assigned to this command by default, but you can map one if desired.

The default button bar of the Color Monitor also includes an Add Color Reference Marker button between the Previous and Next Marker buttons.

This gives you a fast way to mark frames for later comparison while still using ordinary markers for notes and other needs. The separate marker type is useful because a sequence may contain dozens or hundreds of ordinary markers, while only a smaller group marks frames intended for comparison; filtering the Markers panel avoids scrolling through every marker in the sequence to locate the image you need.

Note

Any marker can be used for clip comparison, but Color Reference Markers make it easier to distinguish comparison markers from markers with other purposes.

### Viewing all Color Reference Markers in a Sequence

After you begin adding Color Reference Markers, use the Markers panel to view them for Comparison View. To configure the Markers panel so it shows all Color Reference Markers in a sequence, follow these steps:

Open the Markers panel.

From the hamburger menu beside the markers title in the Markers panel, choose these settings:

- Show All Markers shows both sequence markers and clip markers, which is useful here.
- Ignore Selection in Timeline shows markers across the full sequence regardless of which clips are selected, making it better suited to this workflow.

To show only color markers, open the Filter menu beside the search field and choose Color Reference.

With those options active, the Markers panel lists all Color Reference Markers in the current sequence for convenient reference. Keep in mind that only one sequence's markers are visible at a time, and they come only from the sequence currently in focus.

Sequence marker thumbnails and clip marker thumbnails display different clip states. A sequence marker thumbnail shows the sequence clip image, including effects and the color grade. A clip marker thumbnail shows the source clip image, without effects or the color grade. No matter which thumbnail type is visible, all Color Reference Markers can be used for comparisons.

### Using Color Reference Markers for comparison

After the Color Reference Marker is visible in the Markers panel, right-click any marker in the Markers panel list and choose Pin as Comparison. That pins the marker to the top of the reference list in Comparison View and turns Comparison View on automatically if needed, showing the current comparison. Once a pinned item is selected in the reference list, any other clip in the Clip Grid can be compared with that pinned marker without additional selections. Pinned markers remain pinned in the reference list until you remove them.

Pinned markers can also be combined with Clip Grid selections in the reference list. Pinned markers are placed at the top, and secondary selections from the Clip Grid appear below them. Select any thumbnail in the list to make it the comparison image.

### Removing thumbnails from the Reference List

Pinned markers remain in place even after Comparison View is closed and opened again, so remove them from the reference list when they are no longer needed using these methods:

- To remove one thumbnail, right-click that item in the reference list and choose Remove from Comparison.
- To clear every pinned marker, open a pinned marker's context menu in the reference list and choose Clear Pinned Reference.

Secondary selections are removed from the reference list by deselecting their matching clips in the Clip Grid.

### Customizing the Clip Comparison View

Comparison View offers multiple ways to customize the split screen. Some controls become visible when the pointer is over the Monitor; use them to exchange the left and right images or move the split-screen center.

- The swap button, initially centered on the screen, reverses the two split-screen sides when that makes comparison easier.
- Hover over the split edge and drag it to set a new split-screen edge position, which can make specific areas of both images easier to compare.
- Double-click the split edge to return it to the halfway point.

Additional controls are available in the button bar below the monitor.

- Two buttons switch the comparison between a horizontal split screen and a vertical split screen.

### Changing the Comparison Frame of items in the Reference List

After one or more pinned markers or secondary selections in the Clip Grid have been added to the Comparison View reference list, you can change which frame each thumbnail uses for comparison. By default, each thumbnail shows a playhead and marker. The marker indicates the reference marker location, while the playhead can be moved to change the reference frame being viewed.

- To choose a different referenced frame, drag the thumbnail playhead in the reference list forward or backward to another frame.
- To return to the original reference frame, right-click the thumbnail in the reference list and choose Reset to Original Reference.

## Working with Video Scopes

Learn how the Video Scopes panel can be used to inspect color, luminance, and signal levels for precise color correction and quality control.

The Video Scopes panel now uses new Vectorscope, Waveform Monitor, RGB Parade, and RGB Overlay scopes created for Color mode. These scopes do not yet match every feature from the previous panel, but their performance, graph visualization, and scale graticules are much improved.

When the older Lumetri Scopes are needed, open the menu beside the panel title and choose Show Legacy Scopes to move between scope modes.

### Using the Video Scopes panel

The Video Scopes panel shows several analyses of the video frame at the playhead in the current sequence. Its analysis represents the output of all effects, including color effects, that affect the image and that Premiere (beta) will output, either through Export rendering or through Transmit to an external display.

Use video scopes with the picture to assess luminance and color levels during grading.

During grading, video scopes help evaluate luminance and color levels beside the image.

The Video Scopes panel is separate from the heads-up display (HUD). The HUD presents one of several analyses and overlays tied to the specific control in use, while Video Scopes show several signal visualizations from the image-processing pipeline. This more traditional view is appropriate for careful result analysis and program QC.

### Video Scopes layout

Because the Video Scopes panel is independent, you can position it anywhere in the workspace or drag it to another display as a stand-alone window. Two menus are available for configuring the Video Scope Layout.

### Layout options

Four choices control the orientation of the Video Scopes panel.

- Automatic: this default setting bases the scope arrangement on the panel aspect ratio. A thin, tall panel switches to a vertical arrangement, a wide, short panel switches to a horizontal arrangement, and a rectangular panel uses Grid mode.
- Grid: keeps the layout in grid mode regardless of panel size.
- Horizontal: keeps the layout horizontal regardless of panel size.
- Vertical: keeps the layout vertical regardless of panel size.

### Add Scopes

Choose scopes from the list to add them to the current layout. These scopes are currently available:

- Vectorscope: presents a polar, circular analysis of hue and saturation in the picture. The graph angle around the center represents hue, and the distance away from the center represents saturation. The center is desaturated; longer distances indicate greater saturation. Each vectorscope graticule includes two notches for 75% (inner) and 100% (outer) saturation. A centered graph suggests a color temperature that is balanced throughout the image. A graph away from center indicates a color cast, or tint. False color identifies which image colors correspond to parts of the graph.
- Waveform Monitor: shows luminance analysis across the picture. Each image line is examined from left to right and drawn as a wave graph, where height indicates the brightness of each pixel in that line. Higher waveforms indicate higher luminance values, and lower waveforms indicate lower luminance values. With all lines superimposed, the image's highlights near the top, midtones, and shadows are shown as an overall distribution. False color maps graph regions back to the matching colors in the image. The max line shows the peak luminance set by color management, and the MIN line shows 0% black. For HDR output, an amber reference white line marks the current Graphics White level set by color management, serving as the boundary between SDR levels below it and HDR peaks above it.
- Parade: uses waveform graphs to analyze each image color channel. Color temperature imbalances appear in specific tonal areas of the signal, visible as uneven heights among the three graphs at the top and bottom. Large height differences between the three channels indicate a color cast, while small differences indicate a neutrally balanced signal. The height of the imbalance shows whether the issue is in the highlights at the top or the shadows at the bottom. Graticules match the Waveform Monitor.
- Overlay: matches the RGB parade, except the three channel waveforms are superimposed. Tonal areas where the channels line up appear white as the tinted red, green, and blue waveforms additively align. Tonal areas where the three waveforms separate appear as increasingly saturated portions of the waveforms. In general, divergence at the top points to a highlight color temperature imbalance, while divergence at the bottom points to a shadow color temperature imbalance. Graticules match the Waveform Monitor.

### Video Scope scales and graticules

Every video scope includes a graticule overlay for reading the graph against its intensity, plus a numeric scale on the left edge. The scope range resizes automatically to match the outgoing video signal, using the Peak Luminance color management value, which is commonly linked to Output Color Space.

To alter the graticule shown on a scope:

- Right-click the target scope, then select one of these choices for the Waveform Monitor, RGB Parade, and RGB Overlay scopes:
- 10-bit: displays the 10-bit numeric span for encoded video code values. This is useful for QC workflows that call out exact code values.
- Percentage: the default view; maps the available Min to Max range from 0 (Black) through 100 (Peak Luminance). Use it for general reference; it resembles IRE but is not the same scale.
- HDR: presents a "nits" (cd/m2) scale commonly used while grading high dynamic range (HDR) output for HLG or PQ deliveries. Program masters commonly top out at 1000 nits, while premium "evergreen" content is often mastered with 4000 nits max.

### Video Scope Settings

Selecting the wrench brings up Video Scopes Settings, where these controls are available:

- Scope Opacity: use the slider to set whether the scopes draw brighter or darker.
- Overlay Opacity: use this slider to control how light or dim the scope overlays appear.
- Saturation: many video scopes use false color to show how image colors map to a scope graph, or which waveforms belong to which graph. This setting can strengthen those colors, reduce them, or turn them off.
- Show number values: toggles the numeric scales at the left side of each graph.
- Always Show Full Graticule: when Video Scopes are reduced in size, graticules omit some lines so the display stays readable. This option keeps every graticule line visible, maximizing detail even in a smaller scope area.

Use video scope settings when you need to manage opacity, saturation, or whether overlays are shown.

Use video scope settings when you need to manage opacity, saturation, or whether overlays are shown.
