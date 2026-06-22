# Object Matte, Create Nulls For Positional Properties And Paths

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: AI-powered Object Matte; Create Nulls for Positional Properties and Paths.

## AI-powered Object Matte

Search Last updated on May 25, 2026

### Learn how to use the AI-powered Object Matte in Adobe After Effects to isolate and track subjects in your footage within a composition.

A fresh group of foundational tools arrives in the newest After Effects build, pushing rotoscoping past a brush-only routine. The method pairs one-click AI subject picking with hands-on refinement that redraws as you go, plus smart propagation that carries the result through time.

The same AI engine behind Premiere's Object Mask workflow drives Object Matte, which produces quicker, more natural outcomes while sparing you a lot of by-hand labor. With it you can single out particular regions of footage to add effects, grade color, or blur chosen elements selectively, all with more speed and finer command.

Use the Object Matte tools to select a subject, propagate the matte, and freeze the result for compositing.

Use the Object Matte tools to select a subject, propagate the matte, and freeze the result for compositing.

These Object Matte core tools now ship with After Effects to tighten and speed up how you rotoscope and mask:

- Object Matte Tool
- Quick Selection Tool
- Selection Brush Tool
- Refine Edge Tool

### Object Matte Tool

Lock onto objects in your footage fast through a single click or a marquee drag with the Rectangle or Lasso tool. Sophisticated segmentation logic underpins it, carrying selections precisely from frame to frame and cutting down the hand-work that busy scenes usually demand.

### Quick Selection Tool

Reworked from the classic Roto Brush, the Quick Selection Tool is tuned for quicker, more natural use: click or drag across an object and it gets picked out from the footage according to its color, its contrast, and its edges.

### Selection Brush Tool

When you need precision tweaks, reach for the Selection Brush Tool — it supports both additive and subtractive strokes and gives you richer cursor feedback. Holding modifier keys lets you flip between selection modes without friction.

### Refine Edge Tool

Trace the Refine Edge Tool over an object's borders to lock in and preserve genuine edges and fine detail like strands of hair.

Thanks to Live Update, working with the Quick Selection and Selection Brush tools shows each stroke the instant you paint it, so the visual feedback is immediate and you can dial in more precise selections without pausing for a refresh.

### Use Object Matte in your composition

Build a composition, bring in a piece of footage, and drop it onto the timeline.

In the Timeline panel, double-click the footage to load it into the Layer panel.

From the menubar, grab the Object Matte Tool . These keyboard shortcuts will switch the tool on as well:

- macOS: Option + W
- Windows: Ctrl + W

Picking the Object Matte Tool also opens up these options:

- Quick Selection Tool
- Selection Brush Tool
- Refine Edge Tool

Pass the Object Matte Tool across your subject to preview the matte, then click to commit it.

While you paint using the Quick Selection or Selection Brush tools, Live Update reflects your edits as they happen, letting you watch precisely what gets selected while you tune the matte, with no wait for the frame to refresh.

Marquee-style selection tools are available for grabbing objects too — Rectangle , Lasso — or you can hop to other tools to keep refining the matte however you need.

With the base frame selected to your liking, set propagation in motion by stepping ahead through your sequence:

- Pressing the spacebar
- Use these keyboard shortcuts to move frame by frame
- Move the CTI (Current-time indicator) to a target frame manually

The subject's motion is analyzed and the matte stretched across frames as After Effects tracks and propagates it. Look over what propagated, then clean up any trouble spots with the selection tools on hand.

8. Frames where propagation succeeded show up as green segments along the timeline.
   Mask properties can be fine-tuned and settings adjusted after propagation from the Effect Controls panel (Effects > Object Matte).

9. Use the Effect Controls panel to refine mask properties and adjust settings after propagation.
   After propagation finishes, hit Freeze along the bottom of the Layer panel to lock the matte down. Head back to the Composition panel to carry on compositing.

Tip

- Open the Timeline panel, untwirl the layer's properties, then follow Effects > Object Matte > Selections to inspect each mask selection and edit its keyframes.
- For hands-on control, careful edge work, or a conventional rotoscoping routine, see how to work with Roto Brush and Refine Matte.

## Create Nulls for Positional Properties and Paths

Search Last updated on Apr 2, 2025

### Learn to create Nulls for controlling positional properties and paths, simplifying animation with enhanced control and efficiency.

Topics on this page:

- Create Null controllers for Positional properties
- Possible use cases
- Create Nulls from Shape Paths and Mask Paths

Driving the positional properties and motion of objects through Nulls smooths out your After Effects work, particularly across heavy layer counts or intricate animation. Any single point inside a layer can then be steered as though it were a layer of its own, which opens up plenty of upside.

This is not the same as parenting, where layers are joined and every transformation — Position, Scale, Rotation — comes along. Controllers spun up through Null Controllers for Position Points and Null Controllers for Path Points bind the position alone, so layers stay free to scale and rotate on their own.

### Create Null controllers for Positional properties

Nulls Controllers for Positional Properties let you spin up controller Nulls from any positional point in moments, so that point can be animated like a standalone layer. The motion of one specific point — a Position or an Anchor Point sitting inside a Shape, object, or layer — can then be isolated and driven apart from the rest of that same layer.

Arrange your composition and layers however the project calls for.

Click the layer where you intend to build Null controllers for positional points.

Choose the layer by itself and run the Null Controllers for Positional Points command, and the Position property of whatever layer(s) you selected gets bound to controller Nulls.

Binding any other positional property — Anchor Point, for instance — requires that you select the property within the timeline first.

2. An example where the Anchor Point is selected in the timeline to be linked to a controller Null.
   Pick any one of these to generate a Null layer for positional points:

- Layer > Create > Null Controllers for Positional Points.
- Animation > Keyframe Assistant > Null Controllers for Positional Points.
- Right-click the positional property of the layer in the Timeline or Properties panel > Keyframe Assistant > Null Controllers for Positional Points.

- Confirm the project is running on the JavaScript Expression engine. Set this under Project Settings > Expressions > Expressions Engine > JavaScript.
- Check that no two layers in the composition share the same name.

The resulting Null layer takes its name from the layer and property it's bound to. Its label color carries over too, which makes it simpler to tell apart and find.

4. A Null layer is created, named and colored to match the linked layer and property.
   From there, put the Null controllers to work adjusting the bound Position property.

### Here are some helpful points:

- Whenever you like, the Effects Controls panel will show or let you change the Layer Control, which sets the layer driving the bound positional property. Lean on this to tie positional points to other layers that already exist.

Use the Effects Controls panel to view or adjust the Layer Control for the linked positional property.

Use the Effects Controls panel to view or adjust the Layer Control for the linked positional property.

- Split a layer's Position into separate dimensions (breaking the X, Y, and Z axes into their own properties) once you've bound that Position to a controller Null, and the Null stops driving them until you tie them back in. Reconnect the separated Position properties to the Null by right-clicking and running the linking command once more.

After separating a layer's Position dimensions (X, Y, Z) into individual properties, re-link them to the controller Null.

After separating a layer's Position dimensions (X, Y, Z) into individual properties, re-link them to the controller Null.

- A Null controller inherits the layer's dimensionality on creation: 2D layers get a 2D Null, 3D layers get a 3D one. Switch a 3D Null down to 2D and any linked 3D layers hold their on-screen 2D placement. That makes it straightforward to bind 3D layers into 2D space and 2D layers into 3D space.

### Work in 3D space

- Effect Points: Tie effect points (e.g., gradient points, lens flares) to 3D Nulls so you can drive them dynamically in 3D space.

### Applications with effects

- Beam Effect: Bind several beams to Nulls to build elaborate patterns and animation.
- CC Glue Gun Effect: Tie the CC Glue Gun effect to a Null for tighter command of the animation, which lets stroke width vary dynamically.
- CC Particle World: Throw particles off a motion path that a Null steers, blending separate particle systems around the same Null point.

### Puppet Pins and Rigging

- Bind Puppet Pins to controller Nulls for lightweight rigging and smoother animation. Build basic forward kinematic rigs by parenting the resulting Nulls one to another. With Advanced Puppet Pins, the extra Rotation and Scale properties on the Pins bind to the controller Null as well, which makes still more elaborate rigs possible.

### 3D Applications

- Camera Point of Interest: Hand a Null control of the Camera's Point of Interest so it can trail particular layers. Parent that controller Null onto different layers to drive dynamic camera moves.
- Point Light: Tie a Lens Flare to a Point Light to fake making the light itself visible.

### Shape Layers and Gradients

- Shape Groups: Drive the Position of Shape groups with Null controllers while keeping them inside the Shape layer.
- Gradients: Tie gradient points to other layers for dynamic control.

Note

Once points within a Shape layer are bound to Null controllers, changing the Skew value on the enclosing Shape group or making the Scale non-uniform (i.e. unlinked) will tend to push the point out of alignment with the Null. This holds for both Nulls on positional points and Nulls on Path points.

### Create Nulls from Shape Paths and Mask Paths

Building Nulls off Path points hands you tighter command over involved Path animation and makes attaching other layers to your Paths painless.

Because the expression links running from the Path points to each connected Null can offset basic transforms inside nested Shape groups, those Nulls keep driving or tracking Path points accurately even when the Shape group transforms are themselves shifted or animated.

Originally these three commands for making Nulls from Shape and Mask paths lived in the Create Nulls from Paths.jsx ScriptUI panel under the Window menu. They've since been reworked and turned into menu commands.

Listed below are the three commands you can use to spawn Nulls from a Shape or Mask Path property's points:

- Null Controllers for Path Points: Build Null controllers for every point of a chosen Path or Mask Path property. Each Null governs where one point (vertex) on the Path sits, though Layer Control expression controls let points bind to other layers instead.
- Nulls Following Path Points: This spins up a Null layer per point of the selected Path properties. Instead of steering the point, each Null trails its matching Path point. That lets you parent other layers onto an animated Path by parenting them to a bound Null.
- Null Tracing Along Path: Produces a Null that runs along the chosen Path property, reorienting to hug the Path's curve and tracking whatever animation the Path has. A controller effect gets added to the Null layer so you can set how far it has traveled along the path and whether it loops back to the path's start on reaching the end.

### More like this

- Selecting and arranging layers
- Managing layers
- Creating layers
- Layer properties
