# Animating Puppet Tools (part 1)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Apr 30, 2026

### Bring characters and artwork to life in After Effects, using the Puppet tools' pins and deformation controls for supple, lifelike motion.

On this page:

- Basics of Legacy Puppet tool
- Manually animate an image with the Puppet tools
- Record animation by sketching motion with the Puppet Pin tool
- How the Puppet effect creates outlines
- Work with Puppet pins and the distortion mesh
- Puppet Overlap controls

- Puppet Starch controls
- Basics of Advanced Puppet Tool
- Difference between Legacy puppet engine and Advanced puppet engine
- Improvements to Advanced Puppet Tool
- Types of pins in the Advanced Puppet Tool

Note

Even though the Puppet tools operate inside an effect — the Puppet effect — you won't reach for the Effect menu or the Effects & Presets panel to apply it. Instead, grab the Puppet tools from the Tools panel and apply and adjust the effect right there in the Layer or Composition panels.

## Basics of Legacy Puppet tool

What the Puppet effect does is warp a portion of an image in line with where you set down pins and how you move them. Those pins decide which areas of the image shift, which stay fixed, and which sit in front once areas overlap.

Every Puppet tool exists to set down and adjust one particular kind of pin:

Puppet Pin tool

Reach for this tool to set down and reposition Deform pins.

Puppet Overlap tool

Reach for this tool to set down Overlap pins, which mark the parts of an image that ought to sit in front of the rest whenever distortion makes portions of the image overlap.

Puppet Starch tool

Reach for this tool to set down Starch pins, which firm up portions of the image so they distort less.

Mesh created by placing Deform pins (left), and result of dragging a Deform pin

Mesh created by placing Deform pins (left), and result of dragging a Deform pin

The moment you set down the first pin, the region inside an outline is split automatically into a triangular mesh. That outline only becomes visible once the Puppet effect has been applied and a Puppet tool pointer hovers over the area the outline marks out. Because every piece of the mesh is also tied to the image's pixels, the pixels travel along with the mesh.

Note

Select Show in the Tools panel to reveal the mesh.

Shift one or more Deform pins and the mesh reshapes itself to take in that movement while staying as rigid as it can overall. The upshot is that moving one part of the image triggers natural, lifelike motion elsewhere.

To take an example: drop Deform pins on a person's feet and hands, then move one hand so it waves — the attached arm swings a lot, while the waist barely budges, exactly as it would in reality.

Select a single animated Deform pin and its Position keyframes appear as a motion path in the Composition and Layer panels. These motion paths behave like any other motion path you work with, right down to setting keyframes that rove across time.

A single layer can carry several meshes. That comes in handy when you want to warp various parts of an image on their own — text characters, say — and also when you want to warp several copies of the same image part, each with its own distortion.

When you apply the effect, the original undistorted mesh is computed at the current frame. The mesh won't reshape itself to follow motion in a layer driven by motion footage, nor will it refresh if you swap out a layer's source footage item.

Note

Steer clear of animating the position or scale of a continuously rasterized layer through layer transformations while you're also animating that layer with the Puppet tools. Continuously rasterized layers — shape and text layers, for instance — follow a render order that isn't the same as that of raster layers. You can precompose the shape layer and run the Puppet tools on the precomposition layer, or use the Puppet tools to transform the shapes inside the layer.

Whatever motion the Puppet tools generate gets sampled by motion blur when motion blur is switched on for both the layer and the composition, though only half the count set by the Samples Per Frame value is used.

Note

Through expressions, a Deform pin's position can be bound to motion tracking data, to audio amplitude keyframes, or to whatever other property you choose.

## Manually animate an image with the Puppet tools

A Deform pin's Position property has its stopwatch switch set on automatically the instant the pin comes into being. As a result, each time you reposition a Deform pin, a keyframe is set or revised. That behavior sets it apart from most After Effects properties, where you have to switch the stopwatch on yourself by adding a keyframe or an expression before each property will animate. Because Deform pins auto-animate, it's easy to drop them in and animate them right in the Composition or Layer panel without ever touching the properties over in the Timeline panel.

1. Pick out the layer whose image you intend to animate.
   With the Puppet Pin tool, take one of these actions in the Composition or Layer panel:

Click any non-transparent pixel on a raster layer to apply the Puppet effect and build a mesh for the outline produced by auto-tracing that layer's alpha channel.

On a vector layer, clicking inside a closed path applies the Puppet effect and builds a mesh for the outline that path defines.

Click inside a closed, unlocked mask to apply the Puppet effect and build a mesh for the outline that the mask path defines.

Click outside every closed path on a vector layer to apply the Puppet effect without building a mesh. The layer's paths get outlines, but those outlines only show while a Puppet tool pointer hovers over the area they mark out. Hover the pointer over the region a path encloses to preview the outline where a mesh would form if you clicked that spot. Click within an outline to build a mesh.

Wherever you click to build the mesh is where a Deform pin lands.

Should an image prove too intricate for the Puppet effect to build a mesh at the present Triangle value, the Info panel reports a Mesh Generation Failed message. Bump up the Triangle value over in the Tools panel and have another go.

Click at one or more spots inside the outline to drop in additional Deform pins.

Get the result you're after with as few pins as you can. Over-constrain the image and you'll lose the natural deformation the Puppet effect offers. Place pins on the parts of the figure you know you want to govern. When animating someone waving, for example, drop a pin on each foot to anchor them to the ground, plus a pin on the waving hand.

Jump to another point in the composition's timeline and, with the Puppet Pin tool, drag one or more Deform pins to new positions inside the Composition or Layer panel. Carry on repeating this step until your animation is complete.

The motion paths of the Deform pins can be reshaped with the very same techniques you'd apply to any other motion path.

Note

After Effects no longer paints the tinted fill over the original layer region while you hover with the Puppet Pin tool.

## Record animation by sketching motion with the Puppet Pin tool

The motion path of one or more Deform pins can be sketched in real time — or at whatever speed you set — in much the same way you'd sketch a layer's motion path through Motion Sketch.

Should your composition include audio, you can sketch motion in step with that audio.

Ahead of recording any motion, it's worth setting up your recording preferences. Select Record Options in the Tools panel to bring up the Puppet Record Options dialog box.

Speed

How the speed of the recorded motion compares with the speed of playback. At a Speed of 100%, the motion plays back exactly as fast as it was recorded. Push the Speed above 100% and the motion plays back more slowly than it was recorded.

Smoothing

Raise this value to strip more stray keyframes out of the motion path while it's being drawn. Fewer keyframes yield smoother motion.

Use Draft Deformation

The distorted outline you see during recording disregards Starch pins. On a complicated mesh, this option can speed things up.

Note

This walkthrough assumes Deform pins are already sitting in the object you mean to animate. To learn how those pins get placed, refer to Manually animate an image with the Puppet tools.

Choose at least one Deform pin.

2. Move to the moment where motion recording should start.
   Inside the Composition or Layer panel, holding down Ctrl (Windows) or Command (macOS) summons the Puppet Sketch tool. Animate the pins by dragging them with Ctrl held (Windows) or Command held (macOS).

The recording of motion kicks off the moment you click to start the drag, and it stops once you let go of the mouse button.

For the mesh whose motion is being sketched, the outline takes on the same color as the pin (yellow). Reference outlines belonging to other meshes on that same layer pick up the layer's label color instead.

Once done, the current-time indicator jumps back to where recording started, so you can run the recording again with more Deform pins or redo it using the same pins.

The motion paths of the Deform pins can be reshaped with the very same techniques you'd apply to any other motion path. A pin's motion path only displays when that pin is the sole one selected.

Note

Have a go at making several duplicate meshes and sketching motion for each one. When a single Puppet effect instance holds more than one mesh, the reference outlines of the rest stay visible as you sketch motion for any one of them, so you can trail their movements — loosely or exactly.

## How the Puppet effect creates outlines

Whenever a Puppet mesh comes into being, an outline sets its edges, and that outline can come from any of these kinds of closed path:

An unlocked mask path

A shape path on a shape layer

A text character's outline

Apply the Puppet effect to a layer that has no unlocked masks, shapes, or text characters, and it falls back on Auto-trace to derive paths from the alpha channel. The Puppet effect uses these paths solely to work out outlines, and they never turn up as masks on the layer. On a raster layer that lacks an alpha channel, what you get is one rectangular path hugging the layer's bounds. For an intricate image, or to set up Auto-trace preferences, run Auto-trace ahead of the Puppet tools.

A text character made up of several separate closed paths — the letter i, say — counts as several distinct paths.

The stroke of a shape or text character plays no part in working out outlines; only the path counts. To wrap a mesh built from such items around its stroke, raise the Expansion value. At its default of three pixels, Expansion takes in any stroke reaching three pixels or less from its path.

Note

Lay down paint strokes on a layer with the Brush tool while the Paint On Transparent option is on. Painting with that option active yields a raster layer holding nothing but the paint strokes, marked out by an alpha channel. From there the Puppet tools can animate those paint strokes. Skip using a mask on the layer.

When several masks, shapes, or characters overlap on one layer, the outline is built from the union of whichever overlapping shapes, characters, or masks are involved. Where a mask overlaps a text character or shape, outlines get built for the whole character or shape, for the slice of it inside the mask, and for the mask on its own.

Note

To warp several separate characters or shapes as a single object, ring the individual objects with a mask (its mask mode set to None) and feed that mask path in as the outline the mesh is built from. Once the mesh exists, you're free to delete the mask.

If the Puppet effect is already on a layer, outlines light up with a yellow highlight as you slide a Puppet tool pointer across them. You can pick the outline where an initial pin goes to build a mesh. Every click within an outline using a Puppet tool builds a mesh.

If the Puppet effect isn't yet on a layer, that layer's outlines haven't been computed. Your click prompts the Puppet effect to compute outlines and check whether you landed inside one. If you did, it builds a mesh defined by the outline you hit. If not, you can slide the pointer around the layer to choose the outline where a pin goes to build a mesh. Sliding the pointer around the layer helps you see various objects' outlines and decide which ones to build a mesh from.

Outline for the union of two shape paths, indicated by yellow highlight, visible because the Puppet tool pointer is within the area defined by outline.

Outline for the union of two shape paths, indicated by yellow highlight, visible because the Puppet tool pointer is within the area defined by outline.

## Work with Puppet pins and the distortion mesh

- To bring up the Puppet effect's mesh, choose Show in the options section of the Tools panel.
- To pick or reposition a pin, click or drag it with the Move tool. You activate the Move tool by resting the pointer on a pin while either the Selection tool or the matching Puppet tool is active.
- To pick several pins at once, Shift-click each one, or drag a Marquee-selection box around them with the Marquee-selection tool. That tool activates when you rest a Puppet tool's pointer outside every mesh and outline, or when you hold the Alt (Windows) or Option (macOS) key.
- To pick every pin of a single kind (Deform, Starch, or Overlap), select one pin of that kind and hit Ctrl+A (Windows) or Command+A (macOS).
- To remove selected pins, hit the Delete key. When a pin carries several keyframes and only the keyframe at the present time is selected, one press of Delete removes just that keyframe and a second press removes the pin.
- To send Deform pins back to where they originally sat at the present time, choose Reset for the Puppet effect in the Timeline or Effect Controls panel. Choosing Reset a second time strips every pin and mesh out of an instance of the Puppet effect.

Note

There are times you'll want to animate an image from a starting position, on through an in-between position, and back to where it began. Rather than hauling the pins back to their starting spots by hand at the animation's close, park the current-time indicator at the end time and choose Reset. Only the keyframes sitting at the present time get reset.

- To raise or lower how many triangles a mesh uses, adjust the Triangle value, found either in the Tools panel's options section or over in the Timeline panel. Changing the Triangle value sets it for whichever mesh is selected or, with no mesh selected, for meshes built afterward.
- More triangles give smoother results but lengthen render time. Small objects such as text characters tend to distort nicely on just 50 triangles, while a large figure can call for 500. The triangle count actually used may not line up precisely with the Triangle value; that value serves only as a target.
- To push the mesh past the original outline, raise the Expansion property, available either in the Tools panel's options section or via the Timeline panel. Changing the Expansion property sets it for whichever mesh is selected or, with no mesh selected, for meshes built afterward. Pushing the mesh out is handy for taking in a stroke.
- To copy an object using the Puppet Pin tool, click inside the original outline. The mesh that click produces carries its own duplicate of whatever pixels sit within that original outline. The Timeline panel offers a second route to the same outcome — duplicating a Mesh group there — which can beat trying to click inside the original outline while avoiding the mesh and dropping a pin.

## Puppet Overlap controls

As you warp one part of an image, there may be times you'd like to govern which parts show in front of others. Keeping an arm ahead of the face while the arm waves is one such case. The Puppet Overlap tool lets you drop Overlap pins onto the parts of an object whose apparent depth you want to govern.

Overlap pins go on the original outline, not on the distorted image.

Overlap pin with negative In Front value (top), and Overlap pin with positive In Front value (bottom)

Overlap pin with negative In Front value (top), and Overlap pin with positive In Front value (bottom)

These are the properties carried by each Overlap pin:

In Front

How close to the viewer something seems. Overlap pins build on one another, meaning their In Front values get summed wherever extents overlap on the mesh. A negative In Front value lets you cancel out the pull of another Overlap pin at a particular spot.

Anywhere on the mesh that no Overlap pin reaches carries an implied In Front value of zero. A fresh Overlap pin starts at 50 by default.

Note

While animating the In Front value, Hold keyframes are usually the way to go. You rarely want a gradual interpolation from a foreground element to a background one.

Extent

How far the pin's pull reaches out from the Overlap pin. That pull stops sharply rather than tapering off with distance from the pin. A fill across the affected parts of the mesh marks the extent visually — the fill turns dark when In Front is negative and light when In Front is positive.

## Puppet Starch controls

As you warp one part of an image, there may be times you'd like to keep other parts from warping. Holding an arm rigid while you move a hand to make it wave is one such case. The Puppet Starch tool lets you drop Starch pins onto the part of an object you want to keep stiff.

Starch pins go on the original outline, not on the distorted image.

Unwanted distortion in figure (upper left) is prevented with Starch pin (upper right and lower left)

Unwanted distortion in figure (upper left) is prevented with Starch pin (upper right and lower left)

These are the properties carried by each Starch pin:

Amount

How strong the stiffening agent is. Starch pins build on one another, meaning their Amount values get summed wherever extents overlap on the mesh. A negative Amount value lets you cancel out the pull of another Starch pin at a particular spot.

Note

Should you spot an image tearing close to a Deform pin, set a Starch pin with a tiny Amount value (under 0.1) near that Deform pin. Small Amount values help hold image integrity together without adding much stiffness.

Extent

How far the pin's pull reaches out from the Starch pin. That pull stops sharply rather than tapering off with distance from the pin. A pale fill across the affected parts of the mesh marks the extent visually.

The Puppet effect isn't limited to still images — you can run it on a layer whose source is motion footage. You might, for instance, warp everything in the whole composition frame to track an object moving within that frame. For that, think about building a mesh for the entire layer, treating the layer boundaries as the outline, and running the Puppet Starch tool around the edges to keep the layer's edges from warping.

## Basics of Advanced Puppet Tool

Behind the Puppet tools and Puppet effect in After Effects sits an upgraded puppet engine named the Advanced Puppet Tool, with the former engine now known as the Legacy puppet engine. From After Effects 15.1 onward, the Advanced puppet engine ships as the default for your projects, while anything saved in an older After Effects version defaults to the Legacy puppet engine. Reach the Advanced Puppet Tools by selecting the Pin icon on the Toolbar, which surfaces the Puppet group in the Timeline panel.

Fundamentally, the Advanced puppet engine runs on much the same idea as the legacy one, with these distinctions:

- New pin behaviors and pin types
- Smoother and customizable deformations
- Enhanced density

## Difference between Legacy puppet engine and Advanced puppet engine

Legacy Puppet Tool vs Advanced Puppet Tool

Legacy Puppet Tool vs Advanced Puppet Tool

Refer to the table below, which sets out where the two puppet engines, Legacy and Advanced, differ most:

Legacy puppet engine

Advanced puppet engine

Triangle control: Specifies the highest number of triangles allowed for a mesh. Legacy Puppet Tool uses smart triangle placement in the mesh with a higher density of triangles to achieve better results.

Density control replaces Triangle control. Density controls the layout, size, and amount of triangles automatically calculated within a mesh. With higher density, the maximum and minimum triangle sizes reduce, you can add more triangles between pins, and the maximum number of triangles allowed has increased. Lower the density, the triangle size increases and creates a sparse mesh.

Starch pins are under the Stiffness group.

Starch pin are under the Deform group and the Stiffness group is discontinued.

Starch pins have Extent control to manipulate the extent to which the pin impacts the puppet.

Starch pins do not have Extent control but can impact the stiffness in the region between Starch pins and other pins. The Advanced puppet engine interprets the Starch pins as Position pins.

You cannot convert Starch pins into any other form of pins.

You can convert Starch pins into Position pins with the Pin Type property.

No option of Mesh Rotation Refinement.

Mesh Rotation Refinement, specifies the maximum amount any position or starch pin rotates to minimize deformation. Higher the value, higher is the amount of rotation (flexible deformation), and lower the value, lower is the amount of rotation (stiff deformation).

| --- | --- |

## Improvements to Advanced Puppet Tool

The Puppet Engine control is where you pick between the Advanced puppet engine and the Legacy puppet engine. Make the pick in the Timeline panel by selecting the drop-down list beside Puppet engine and choosing the engine you want. Switching between the two is possible, yet After Effects advises against doing so once you've placed or animated pins, for these reasons:

- Because the two engines read pins differently, a switch could alter the deformation.
- Since Starch pins behave differently in the Advanced puppet engine, the Legacy puppet engine handles advanced starch pins as ordinary position pins, while the Advanced puppet engine pays no attention to legacy starch pins.

## Types of pins in the Advanced Puppet Tool

To animate your puppets, the Advanced Puppet Tool puts the following pin types at your disposal. Apply any of them by choosing the pin type from the Puppet Tool menu on the toolbar.

- Puppet Position Pin Tool: Pins dropped with this tool govern nothing beyond the pin's position. In the user interface they show as yellow circles.
- Puppet Starch Pin Tool: In the user interface these pins show as red circles.
- Puppet Overlap Pin Tool: In the user interface these pins show as blue circles.
- Advanced Pins: These let you govern a pin's position, scale, and rotation. That hands you considerable command over the way the Puppet effect mesh warps around that pin. Leave any of the three properties unanimated and the mesh can show obvious shearing. You could, for example, use an advanced pin to animate a character's head moving sideways and looking down. Yet if you never animate the rotation by hand, the head keeps facing the same way and ends up looking stretched. In the user interface these pins show as blue-green circles.
- Bend Pins: Like starch pins, these pins work out their own location from the pins around them, all while letting you govern the pin's scale and rotation. Bend pins can sell the look of a character's chest breathing or a tail wagging. Another use is scaling or rotating a section of the mesh while the pin's position rides along automatically with the rest of the puppet. In the user interface these pins show as orange-brown circles.

## Work with advanced pins and bend pins

Scale and rotation can both be tuned through the controls attached to advanced pins and bend pins:

Picking a bend or advanced pin inside the Puppet Tool panel surfaces a combined rotation-and-scale control, drawn as a wide outer ring carrying one square handle.

Adjust those two controls as follows:

Rotation is set by clicking somewhere on the outer ring and then dragging around it.

Keep Shift held down during the drag and rotation snaps to 15-degree steps.

Scaling is done by grabbing the square handle and dragging it either toward or away from the outer ring.

Keep Shift held down during the drag and scaling snaps to 5% steps.

Work with Advanced Puppet pin

Work with Advanced Puppet pin Work with Bend Puppet pin

Work with Bend Puppet pin
