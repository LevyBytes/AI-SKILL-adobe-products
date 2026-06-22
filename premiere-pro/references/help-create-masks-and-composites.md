# Create Masks Using Shapes, Create Reveal Animations Using Masking Techniques

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Create masks; Create reveal animations using masking techniques.

## Create masks

### Using masks in Premiere to isolate precise areas of a video

In Adobe Premiere, masks let you separate and modify selected regions of a clip so effects, transitions, and corrections can target only those areas.

Masks can hide or blur a background, draw attention to a subject, or support creative overlays. After creation, a mask works like a stencil that exposes only the video or image region under it. Effects and adjustments can then be limited to the masked area while content outside the mask remains unchanged. Because masks can be animated, they can support moving effects, transitions, and tracked shots over time.

Premiere provides two routes for creating masks:

- Shape tools: Rectangle Tool, Ellipse Tool, and Polygon Tool
- Freehand path drawing with the Pen Tool.

Before you begin:

Confirm that the clip is placed on the timeline and visible in the Program Monitor.

Select the clip in the Timeline panel, then select Window > Effects.

In the Effects panel, choose the effect that should be applied to the clip.

For instance, to use the Mosaic effect, select Video Effects > Stylize > Mosaic.

Apply the chosen effect by dragging it from the Effects panel onto the clip in the Timeline panel.

Open the Effect Controls panel to review the effect's properties. Select the dropdown arrow beside the effect name to show its controls.

Use the Effect Controls panel to display the settings for the effect and adjust its properties.

The Effect Controls panel also gives access to the effect settings when property changes are needed.

For a preset-shape mask, use Ellipse, Rectangle, or Polygon from the Effect Controls panel.

To draw a custom mask, select the Pen Tool icon. Click to add a vertex point, then continue clicking until the path and shape are complete.

Press Alt (Windows) or Option (macOS) while clicking a vertex point to convert it into a Bezier point, which lets you change the line segments on both sides. Drag the handles when you need curved shapes.

The mask shape appears on the clip in the Program Monitor, and the effect is restricted to the masked region. Refine the mask appearance further as required.

## Create reveal animations using masking techniques

### Building reveal animations in Adobe Premiere with masks, shapes, text, and keyframes

The Properties panel in Adobe Premiere supports reveal-animation workflows that use masks.

Before you begin:

Create a project, bring in media, and assemble a sequence on the timeline.

Use the Tools panel to create a shape layer and a text layer.

To turn the shape layer into a mask, select the shape and choose Mask with Shape.

In the Effect Controls panel, animate the text Position.

At frame 0, place the text outside the masking shape layer by selecting the Keyframe tool in the Effect Controls panel.

The shape layer functions as the window that reveals the animated text.

That same shape layer serves as the visible opening through which the text animation appears.

Move the playhead to the right in the Effect Controls panel, then change the text Position value until the text is revealed inside the shape mask.

Return the playhead to frame 0 and select Play. Review the animation and adjust it if needed.
