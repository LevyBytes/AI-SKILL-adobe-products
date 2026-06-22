# Modifying Using Views

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on May 5, 2026

### Adjust how you view and navigate compositions in Adobe After Effects by customizing views and layouts for more precise previews and efficient workspace control.

One, two, or four views can be shown at once by the Composition panel. Out of the box, viewer options such as grids and rulers reach only the view that's currently active.

- Pick a view layout by selecting an option from the Select view layout menu at the foot of the Composition panel.

Lean on the Select view layout option to pick and tailor how the Composition panel looks in After Effects.

Lean on the Select view layout option to pick and tailor how the Composition panel looks in After Effects.

- Cycle through view layouts by hovering the pointer over the Select view layout menu and rolling the mouse wheel.
- To apply one view's settings across all views in the current layout, choose the Share View Options entry under Select View Layout. A held Ctrl (Windows) or Command (macOS) reverses this momentarily.

Note

To make a view active without disturbing which layers are selected in a composition, middle-click inside that view's pane in the Composition panel.

## Choose a 3D view

Your 3D layers can be viewed from many angles — through orthographic views, through custom views that apply perspective, or through camera views.

Among the working 3D views are the custom view and the fixed orthographic ones (Front, Left, Top, Back, Right, or Bottom). Layer positions within the composition show up in the orthographic views, though perspective does not. No camera layer is tied to the working 3D views. For placing and previewing elements within a 3D scene, the working 3D views come in handy. Working 3D views display 3D layers, but 2D layers stay absent from them.

Note

Within each view, the Composition panel prints a label (Top or Right, for instance) that signals which view maps to which camera perspective. Hide these labels by selecting Show 3D View Labels from the Composition panel menu.

The Camera tools let you set the point of view and direction of view for the custom views, or you can frame selected layers or every layer.

- Pick a view from the 3D View menu at the foot of the Composition panel.

Turn to the 3D View option to inspect your 3D layers from many angles, whether through view presets or custom ones.

Turn to the 3D View option to inspect your 3D layers from many angles, whether through view presets or custom ones.

- Select View > Switch 3D View, then pick a view from the menu.
- Select View > Switch to Last 3D View.
- Tap the Esc key to flip back to the previous 3D view.
- Reach the 3D views by keyboard with the F10, F11, and F12 keys.

Note

To reassign which 3D view a keyboard shortcut maps to, switch to a view and press Shift plus that shortcut. To make F12 stand for Top view, for example, switch to Top view and then press Shift + F12. The View > Assign Shortcut to menu command works for this too.

## Show or hide layer controls in the Composition panel

Because every view in the Composition panel accepts its own options, you can display whatever combination you like drawn from these: motion path controls, effect control points, mask and shape paths, layer handles, plus camera and light wireframes.

- Pick which layer controls a view shows by selecting View > View Options or using Ctrl + Alt + U (Windows) or Command + Option + U (macOS).

Reach for the View Options dialog box to pick which layer controls appear in each view inside the Composition panel.

Reach for the View Options dialog box to pick which layer controls appear in each view inside the Composition panel.

- Toggle layer controls in a view on or off by selecting View > Show Layer Controls or pressing Ctrl + Shift + H (Windows) or Command + Shift + H (macOS). The 3D reference axes show or hide along with it.

- Toggle mask paths and shape paths in a view by clicking the Toggle Mask and Shape Path Visibility button at the foot of the Composition panel.

## Adjust the zoom while previewing

Down in the lower-left corner of a Composition, Layer, or Footage panel, the Magnification ratio control both displays and sets the present magnification. By default it's tuned to match the panel's current size. Changing the magnification alters how the preview looks in the panel — not the composition's real resolution and pixels.

Note

Because After Effects renders vector objects before zooming (that is, scaling for preview), certain vector objects can look jagged once you zoom in on them. That apparent pixelation from zooms has no bearing on how layers scale or on rendering to final output.

- Tap the period (.) key to zoom in toward the center of the active view, or the comma (,) key to zoom out from it. Every press bumps the magnification up or down a step further.
- By default, scrolling the mouse wheel to zoom centers on where the cursor sits. Hold Alt (Windows) or Option (macOS) while scrolling to zoom in or out from the view's center instead.
- To zoom in or out around a particular point with the mouse scroll wheel, set the pointer over the panel and keep Alt (Windows) or Option (macOS) held as you roll the scroll wheel.
- With the Zoom tool, zoom in on a specific point by clicking the area in the panel you'd like enlarged. Each click magnifies the image a step further, centering the display on the spot you clicked. Dragging the tool also magnifies a chosen area.
- To zoom out from a specific point with the Zoom tool, Alt-click (Windows) or Option-click (macOS) the point you want at the center of the zoomed-out view. Each click lowers the magnification a step further, centering the display on the spot you clicked.
- Double-clicking the Zoom tool button in the Tools panel zooms the active view to 200% (macOS) and 100% (Windows).
- Zoom to fit or to a preset magnification by choosing a zoom level from the Magnification ratio menu. To set the magnification across all views in a Composition panel at once, hold Ctrl (Windows) or Command (macOS) as you choose a zoom level from the menu.
- Pick Fit to size the image to the Composition panel — pick Fit up to 200% to cap the zoom at 200% (macOS), and pick Fit up to 100% to cap it at 100%
- Pan around the Composition, Layer, or Footage panel while zoomed in by dragging with the Hand tool, which you can summon by holding the spacebar, the H key, or the middle mouse button. Add Shift to pan faster.

Tip

- Learn about scaling a layer, as opposed to merely zooming the preview image in or out.
- Explore more techniques for zooming and scrolling with the mouse scroll wheel as you work in After Effects.
- Learn about setting zoom quality for previews through the Zoom Quality preference.

## Smooth Zoom

With Smooth Zoom you get exact, fluid magnification in the Composition, Layer, and Footage panels, breaking past fixed magnification levels like 33%, 50%, or 100%.

Using the hot text control in the viewer, you can dial the magnification to any valid value down to a decimal point. Scroll wheel zooming, on top of that, becomes smoother and more precise.

Head to Preferences > Previews > Magnification to tune the zoom Type, Behaviour, and Trackpad Scrolling settings. Learn more about Magnification preferences.

Pick Smooth to unlock smoother zooming together with finer magnification control.

Pick Smooth to unlock smoother zooming together with finer magnification control.

In After Effects you can now push the zoom past old ceilings, provided the image buffer size allows it. Where the fixed magnification level once capped you at 3200%, for instance, you can now climb to a maximum zoom somewhere between that and the next fixed level of 6400%.

Use smooth zoom magnification to adjust how far in you're zoomed as you preview.

Tip

While scroll zooming, hold Shift to speed the zoom up and Ctrl (Windows) or Command (macOS) to slow it down.

## Resolution

Whenever output goes to print or any medium whose physical size is fixed, resolution describes how densely pixels are packed across a linear span — a count of pixels or dots per unit of length, given in units like ppi (pixels per inch) and dpi (dots per inch).

That framing breaks down for video, film, and computer graphics, because the physical size an image occupies isn't fixed, so counting pixels per inch (or per any other length) tells you nothing useful. Take a single 640x480 movie: it might play on a phone's small screen, on a desktop monitor, and on an enormous outdoor billboard. Although the pixel count can stay identical across all three, the pixels-per-inch figure lands differently on every device.

Here, resolution becomes a relative figure instead — the proportion between how many pixels actually get rendered and how many sit in the source image. Every view carries two of these proportions, one running horizontally and one running vertically.

The Resolution setting belongs to each composition individually, and it governs how good the image looks when that composition is rendered for previews and for final output. How long a frame takes to render, and how much memory it consumes, scale roughly with the count of pixels being rendered.

For final output, a composition can be rendered either at its existing Resolution settings or at a resolution value you enter in the Render Settings dialog box, which supersedes whatever the composition specifies.

## Resolution settings

The Resolution settings below are selectable either through the Composition Settings (Composition > Composition Settings) dialog box or via the Resolution/Down Sample Factor menu sitting along the bottom edge of the Composition panel.

Dialing the resolution up or down across its various levels through the Resolution/Down Sample Factor menu is how you govern the preview resolution of any composition.

Dialing the resolution up or down across its various levels through the Resolution/Down Sample Factor menu is how you govern the preview resolution of any composition.

Auto

(previews only) Tunes the Composition panel view's resolution so that only the pixels required to preview the composition at the present zoom level get rendered.

Say the view sits at 25% zoom — the resolution then settles on 1/4 by itself, displayed as (Quarter), just as though Quarter had been picked by hand. Where a single panel holds several views, resolution follows whichever view is zoomed in the most. The payoff is top image quality without wasting render effort on pixels the current zoom level doesn't need.

Note

Any composition that has the Advanced setting Preserve Resolution When Nested turned on overrides the Auto setting.

Full

Every pixel in the composition gets rendered. Image quality peaks here, though render times are the longest of any option.

Half

Renders a quarter of the pixels found in the full-resolution image — that's half the columns paired with half the rows.

Third

Renders one-ninth of the pixels found in the full-resolution image.

Quarter

Renders one-sixteenth of the pixels found in the full-resolution image.

Custom

Renders at whatever horizontal and vertical resolutions you enter.

Note

A Layer viewer's resolution (down-sample factor) is locked to the resolution of the Composition viewer belonging to the composition that holds the layer.

## View a color channel or alpha channel

Within a Footage, Layer, or Composition panel you can inspect the red, green, blue, and alpha channels — all at once or one at a time — by clicking the Show Channel button along the panel's bottom edge and picking from the menu. Viewing one color channel on its own renders the image in grayscale, where each pixel's color value lands somewhere on a scale running from black (a value of 0 for that color) up to white (that color's maximum value).

Previewing the alpha channel likewise renders a grayscale image, this time mapping every pixel's transparency onto a scale from black (fully transparent) through to white (fully opaque).

Picking RGB Straight surfaces the raw RGB values as they stand before being matted (premultiplied) against the alpha channel; wherever a pixel is fully transparent the values are undefined and odd colors can show up.

Tip

- Selecting Colorize from the Show Channel menu renders each channel's values in its own color rather than in white.
- Reaching other channel values like saturation and hue is done by applying the Channel Combiner effect and picking Lightness from the To menu.
- Alt-click (Windows) or Option-click (macOS) the Show Channel button flips back and forth between the alpha channel and the full set of RGB channels.

The Alpha Boundary and Alpha Overlay view modes show up only in the Layer panel and are meant to pair with the Roto Brush effect.

## Adjust exposure for previews

Exposure for previews is adjustable in f-stop units through the Adjust Exposure control. You'll find it immediately to the right of the Reset Exposure button, down along the lower edge of a Composition, Layer, or Footage panel. Every viewer keeps its own Adjust Exposure setting.

Whenever the Adjust Exposure control holds anything besides zero, the Reset Exposure button turns blue.

Final output stays untouched by the Adjust Exposure control — it changes only how the video reads while you preview. Tonal changes to a layer that will reach the final output are made instead with the Exposure effect.

Tonal changes to a layer during preview are made with the Reset Exposure option.

Tonal changes to a layer during preview are made with the Reset Exposure option.

- Adjusting a viewer's exposure means dragging the Adjust Exposure control either left or right, or selecting it and typing a value into the box.
- Resetting exposure is done by selecting the Reset Exposure button; selecting it once more brings back the most recent non-zero setting.

Note

- Pinpointing the black point or white point of an image is one handy use for the Adjust Exposure control. Drag the value control rightward (into positive values), for instance, until everything but a single region goes white — that region is the image's darkest spot.
- To gauge how solid a composite is, sweep the Adjust Exposure control hard left and then hard right and watch for spots where the composited pieces drift too far apart in color or luminance. Going by the nickname gamma slamming, this approach helps confirm a composite will hold up and read convincingly outside the exact setting you happen to be working in. A composite that passes muster in a dark scene, for example, can lose its credibility once that scene gets color-corrected brighter.

## Safe zones, grids, guides, and rulers

Across the Footage, Layer, and Composition panels, safe zone margins, grids, rulers, and guidelines can be shown to help you line up and position visual elements. None of those safe-zone margins, grids, or guides appear in the preview or in the final output.

A proportional grid grows or shrinks along with any change in composition size, whereas a standard grid keeps its squares the same size no matter how the composition's dimensions change.

## Grids & Guides preferences

Adjusting the settings for safe-zone margins, grids, and guides happens under Edit > Preferences > Grids & Guides (Windows) or After Effects > Settings > Grids & Guides (macOS).

## Guide creation and management

Use new beta features

A handful of the Guides capabilities have opened up for trial and feedback. Give them a spin now in After Effects (beta).

Get started

With the most recent After Effects (beta) build, guide behavior has been brought much closer to how Adobe Premiere handles it, smoothing out the experience as you switch between the two apps.

The following are now supported in After Effects (currently in beta):

- Percentage-based guides: Lets guides be placed relative to the composition or view instead of at fixed pixel values, so layouts hold up against shifts in resolution and aspect ratio.
- Pin guides: Lets guides anchor to the bottom or right edges (on top of top and left), keeping layouts steady as dimensions move.
- Per-guide color control: Sharpens visibility and organization by letting each guide carry its own color code.
- Guide editing: Right-clicking a guide lets you reposition it, switch its units between pixels and percent, change how it pins, and give it a color. On top of that, importing and exporting guides no longer turns percentage-based guides into pixel values, which makes reusing responsive layouts across apps far simpler.

Because guides in After Effects attach to a specific view, separate sets can live in the Composition, Footage, and Layer panels at the same time. The examples that follow illustrate how distinct guides across different views and panels within one project can serve particular tasks:

Guides in the Composition panel

Guides have been added to the Composition panel to assist with lining elements up correctly.

Guides have been added to the Composition panel to assist with lining elements up correctly.

Guides in the Layer panel

Guides have been added to the Layer panel to assist with aligning elements inside that one specific layer alone.

Guides have been added to the Layer panel to assist with aligning elements inside that one specific layer alone.

Guides in the Footage panel

Guides have been added to the Footage panel to align source footage while leaving the Composition panel alone.

Guides have been added to the Footage panel to align source footage while leaving the Composition panel alone. Note

Fresh guide scripting accessors have been added. Find out how to drive guide visibility and behavior from your scripts.

### Add guides to a view

Open the panel that's to hold the guides — the Composition, Layer, or Footage panel, for example.

Select View > Show Rulers to bring the rulers into view.

Drag from the top ruler to lay down a horizontal guide, or from the left ruler for a vertical one; once placed, a guide can be repositioned by dragging it with the Selection tool.

Right-click the guides and pick Edit Guide to bring up the Edit Guide dialog box.

Set the Position value to fix exactly where the guide sits inside the view, gauged in Pixels or Percentage out from whichever reference edge is chosen. Which options appear depends on what's picked in the Orientation dropdown menu.

For vertical guides:

- Left: A vertical guide set to Left has its distance gauged from the frame's left edge. It holds that same distance from the left side even as the frame grows wider or narrower.
- Right: A vertical guide set to Right has its distance gauged from the frame's right edge. It holds that same distance from the right side even when the frame's size changes.

For horizontal guides:

- Top: A horizontal guide set to Top has its distance gauged from the frame's top edge. It holds that same distance from the top even when the frame grows taller or shorter.
- Bottom: A horizontal guide set to Bottom has its distance gauged from the frame's bottom edge. It holds that same distance from the bottom even when the frame's size changes.

Pick how the guide's position gets gauged through the Unit dropdown menu, then settle on one of these:

- Pixels: places the guide at a fixed numeric spot
- Percent: places it proportionally against the frame's size

6. Choose Pixels or Percent as the unit that sets how the guide position is gauged relative to the composition.
   Reach for the Color option to give the selected guide a display color that aids visibility and organization.

Through the Orientation dropdown menu you set which way the guide gets drawn:

- Horizontal: A Guide running left to Right, handy for lining objects up on the y-axis (top-to-bottom positioning)
- Vertical: A Guide running top to bottom, good for lining objects up on the x-axis (left-to-right positioning).

Select OK.

Note

- Clearing every guide line is done with View > Clear Guides.
- Shifting a guide line means dragging it with the Selection tool.

## Visibility controls

- Showing or hiding safe zones, grids, guides, or rulers is done by selecting the Choose grid and guides options button and picking the right item, or through a menu command or keyboard shortcut on the View menu.
- Alt-click (Windows) or Option-click (macOS) the Choose grid and guides options button to flip the safe zones between shown and hidden.

## Snapping behavior

Snapping layer edges and mask edges to grids or guides is turned on by selecting View > Snap To Grid or View > Snap To Guides.

## Ruler controls

- Setting the rulers' zero point (origin) means dragging the crosshair out of where the two rulers meet (at the upper-left corner) and into the composition area.
- Double-clicking that intersection of the rulers puts the zero point back.

Measured out from the new zero point, the pointer's location shows up in the Info panel as X and Y coordinates.

## Import and export guides

Guide lines can be saved in After Effects and brought into other ae comps, projects, and layers. Those guides can also be exported to Premiere, where editors can lean on them to keep projects consistent.

Bringing existing guides into After Effects is done with View > Import Guides; exporting them uses View > Export Guides.

Exporting guides produces a template file (.guides) that's shareable or importable into a separate project, or into a different composition, layer, or footage view inside the same project. The JSON data in a guides template file captures the guide attributes. Every guide in the current view gets exported by After Effects. Bringing guides in adds them to the current view while preserving whatever guides already sit there.

After Effects guides can be imported into Premiere 13.1, and Premiere guides can be imported into After Effects. Note that not every guide feature Premiere offers — individual guide colors among them — is supported by After Effects. Importing a guide template built in Premiere does the following:

- Guide colors switch to whatever color is defined under Preferences > Grids & Guides.
- Guides set by percentage or pinned to the opposite side (right or bottom) land at the matching pixel value for the current viewer, but they stop being percentage-based or pinned once the composition, layer, or footage dimensions change.

Find out more about working with rulers and guides in the Program Monitor.

## About title-safe and action-safe zones

Toggling safe zones on or off is handled by the Grid And Guides Options found in the Composition panel.

A. Grid B. Center-cut title-safe zone C. Center-cut action-safe zone D. Title-safe zone E. Action-safe zone

Toggling safe zones on or off is handled by the Grid And Guides Options found in the Composition panel.

A television set blows up a video image and lets a slice of its outer edges disappear past the screen's border. That sort of cropping goes by the name overscan. Because the degree of overscan varies from one television set to the next, you ought to hold the important parts of a video image inside set margins, in regions called safe zones. A safe-zone margin stands for the share of the image's dimensions left outside the safe zone. Always lay out your design from one frame edge clear to the other, since computer monitors and certain television sets can reveal the whole frame.

By convention the action-safe zone takes up 90% of the frame's width and height, leaving a margin of 5% along each side. Keep your important visual elements inside this zone.

By convention the title-safe zone takes up 80% of the frame's width and height, leaving a margin of 10% along each side. Keep any text you mean for the audience to read inside this zone.

A composition whose frame aspect ratio sits at or close to 16:9 picks up two extra center-cut safe-zone indicators. Those center-cut indicators flag the regions of a 16:9 composition that risk being clipped when the image plays on a 4:3 display. That clipping matters when you build images for high-definition displays that might also turn up on standard-definition television sets. Out of the box, the center-cut action-safe margin runs 32.5% (16.25% on each side) and the center-cut title-safe margin runs 40% (20% on each side).

Note

Those center-cut safe-zone margins appear only when the composition's frame aspect ratio is at or close to 16:9.

### More like this

- Viewers
- 3D layers
- Cameras, lights, and points of interest
- Views (keyboard shortcuts)
- About alpha channels and mattes
