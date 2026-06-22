# Creating Layers

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

A composition is built from layers; strip them away and nothing remains but an empty frame. Add however many layers the work demands — some compositions run to thousands of layers, others get by on a single one.

A layer in After Effects plays a role much like a track in Adobe Premiere. What sets them apart is that any one After Effects layer takes at most a single footage item as its source, whereas a Premiere track usually holds several clips. After Effects layers also parallel Photoshop layers, even though the working interface isn't the same — handling layers in the Timeline panel here mirrors handling them in Photoshop's Layers panel.

Several types of layers are available to create:

- Video and audio layers drawn from footage items you import, such as still images, movies, and audio tracks
- Layers you build inside After Effects for special purposes, such as cameras, lights, adjustment layers, and null objects
- Solid-color layers drawn from solid-color footage items you make within After Effects
- Synthetic layers carrying visual elements you make within After Effects, such as shape layers and text layers
- 3D layers holding 3D objects and scene, or 2D layers converted to work in 3D space, which lets them move and interact across the X, Y, and Z axes and react to cameras and lights for depth and perspective.
- Precomposition layers, which take compositions as their source footage items

Editing a layer leaves its source footage item alone. The same footage item can feed more than one layer, and you can use it differently in each.

What you do to one layer leaves the others untouched unless you link them on purpose. You can move, rotate, and draw masks on a single layer, say, without disturbing any other layer in the composition.

Every layer in a composition gets numbered automatically by After Effects. Those numbers sit by default next to each layer name in the Timeline panel, and each one matches the layer's spot in the stacking order. Whenever the stacking order shifts, After Effects renumbers everything to match. Because that stacking order sets the rendering order, it shapes how the composition renders for previews and for final output.

## Creating layers — Layers in the Layer, Composition, and Timeline panels

Once a layer is in a composition, the Composition panel lets you reposition it. Over in the Timeline panel, you can alter a layer's duration, its start time, and where it falls in the stacking order — and you can change any of its properties there too.

Plenty of jobs, drawing masks among them, can happen in either the Composition or the Layer panel. Others, though — tracking motion and using the paint tools — have to be done in the Layer panel.

What the Layer panel shows you is a layer before any transforms hit it. Modify a layer's Scale property, for example, and the Layer panel won't reflect it. To view a layer alongside the others with its transforms applied, turn to the Composition panel.

Layers with no source footage item behind them are synthetic layers, a group that takes in text layers and shape layers. A synthetic layer can't be opened in the Layer panel directly; you can, however, precompose it and open that precomposition in the Layer panel.

Note

To see changes such as masks or effects on a layer within the Layer panel, turn on Render there. Switch Render off to look at the original, untouched layer.

## Creating layers — Opening layers and layer sources

- Opening a layer that isn't a precomposition layer in the Layer panel means double-clicking it, or selecting it and choosing Layer > Open Layer.
- Opening the source composition behind a precomposition layer in the Composition panel means double-clicking the layer, or selecting it and then Layer > Open Composition.
- Reaching a layer's source footage item is done by Alt-double-clicking (Windows) or Option-double-clicking (macOS) the layer, or by selecting it and choosing Layer > Open Layer Source.

Note

Right-click (Windows) or Control-click (Mac OS) a layer and you can pick Open Footage or Open Composition to bring up the layer's source item.

- Opening a precomposition layer in the Layer panel means Alt-double-clicking (Windows) or Option-double-clicking (Mac OS) the layer, or selecting it and choosing Layer > Open Layer.

## Creating layers — Duplicate layers using Alt/Option-drag

Use new beta features

The Alt/Option-drag method of duplicating layers has opened up for trial and your feedback. Give it a spin in After Effects (beta).

Get started

Dragging a layer from the Project panel into the Composition panel while holding Alt (Windows) or Option (macOS) clones it on the spot. The trick works in 2D and in 3D compositions alike.

Within 3D compositions, pairing those particular keys with a drag lets you either clone layers or switch on the camera navigation tools. Set the behavior you'd rather have in the Preferences under 3D > Camera Navigation > Option-drag behavior in 3D Compositions (macOS) or Alt-drag behavior in 3D Compositions (Windows) > Duplicate Layers.

The Preferences are where you decide what Alt-drag (Windows) or Option-drag (macOS) should do for duplicating layers.

The Preferences are where you decide what Alt-drag (Windows) or Option-drag (macOS) should do for duplicating layers.

The first time you try this key combination, a one-time dialog box pops up, and you can use it to settle whether the keys ought to duplicate layers.

Lean on that one-time dialog box to set whether Option-drag (macOS) or Alt-drag (Windows) runs Camera Navigation or duplicates layers.

Lean on that one-time dialog box to set whether Option-drag (macOS) or Alt-drag (Windows) runs Camera Navigation or duplicates layers. Note

For now, Alt-drag (Windows) or Option-drag (macOS) only duplicates layers in the Composition panel. Alt-dragging layers in the Timeline panel won't clone them.

Jump into the conversation over in the After Effects (Beta) community about duplicating layers with Alt/Option-drag.

## Creating layers — Create layers from footage items or change layer source

Any footage item sitting in the Project panel can become a layer, another composition included. Once you drop a footage item into a composition, the layer it produces is yours to modify and animate.

Adding one composition into another spawns a layer whose source is the composition you brought in. (See Precomposing, nesting, and pre-rendering.)

How long layers based on still footage items last by default is governed by the Still Footage preference setting (Preferences > Import). By default, a layer you create from a still image runs as long as the composition does. Trim the layer afterward to give it a different duration.

Note

By default, fresh layers start where the composition's duration begins. To have them start at the current time instead, switch off the Create Layers at Composition Start Time preference (Edit > Preferences > Composition (Windows) or After Effects > Preferences > Composition (macOS)).

Frequently, once a layer is in a composition, what follows is scaling and positioning it so it sits properly in the frame. (See Scale or flip a layer.)

## Creating layers — Create layers from one or more footage items

Build layers from several footage items at once and they line up in the Timeline panel's stacking order following the order you selected them in the Project panel.

1. In the Project panel, pick out one or more footage items and folders.

- Drag the selected footage items to the Composition panel.

Keeping Shift down as you drag snaps the layer to the composition's center or its edges.

- Drag the selected footage items to the Timeline panel. As you bring the item into the layer outline, a highlight bar previews where the layer will land once you let go of the mouse button. Drag it over the time graph area instead and a time marker shows where the layer's In point will sit when you release.

Keeping Shift down as you drag snaps the In point onto the current-time indicator.

- Within the Project panel, drop the selected footage items onto the composition name or icon, or hit Ctrl+/ (Windows) or Command+/ (Mac OS). Fresh layers land directly above whichever layer is selected and at the composition's center. With no layer selected, new layers appear at the top of the layer stack.

## Creating layers — Create a layer from a trimmed footage item

Before you drop a layer based on a moving-image footage item into a composition, you can trim that item in the Footage panel first.

In the Project panel, give a footage item a double-click and it opens in the Footage panel. (See View footage items in the Footage panel.)

In the Footage panel, drag the current-time indicator onto the frame you'd like as the layer's In point, and click the Set In Point button sitting at the bottom of that panel.

3. In the Footage panel, drag the current-time indicator onto the frame you'd like as the layer's Out point, and click the Set Out Point button sitting at the bottom of that panel.
   Overlay Edit

Places the new layer atop the stacking order and pins its In point to the current time shown in the Timeline panel.

Ripple Insert Edit

Likewise places the layer at the top of the stack with its In point pinned to the Timeline panel's current time, but here every other layer gets split. Those freshly split layers slide later so that their In points meet the Out point of the layer you inserted.

## Creating layers — Replace layer sources with references to another footage item

1. In the Timeline panel, highlight one or more layers
2. From the Project panel, Alt-drag (Windows) or Option-drag (Mac OS) a footage item onto one of those selected layers in the Timeline panel.

## Creating layers — Solid-color layers and solid-color footage items

Layers can be made in any solid color and at any size you like, right up to 30,000x30,000 pixels. Behind a solid-color layer sits a solid-color footage item as its source, and people commonly call both the layers and the footage items solids.

A solid behaves like any other footage item: a layer sourced from one accepts masks, takes transform-property edits, and runs effects. Put solids to work coloring a background, forming the base of a control layer for a compound effect, or making simple graphic images.

After Effects files solid-color footage items automatically into the Solids folder within the Project panel.

For steps on reorganizing the solids folder to keep your project tidier, see Enhanced solids folder organization.

Note

Starting with After Effects CS6, fresh solid layers come in at 17% gray (45/255) so they stand apart from the darker default brightness of the new user interface

## Creating layers — Create a solid-color layer or solid-color footage item

- Choose File > Import > Solid to make a solid footage item without spawning a layer for it in any composition.
  When you're making a solid-color layer and want it to match the composition, choose Make Comp Size.

## Creating layers — Modify settings for solid-color layers and solid-color footage items

Select Affect All Layers That Use This Solid to push your changes onto every solid-color layer fed by the footage item. Leave that option off and you instead spin off a new footage item, which then becomes the source for the layer you selected.

## Creating layers — Adjustment layers

Apply an effect to a layer and it touches that layer only, none of the rest. An effect can stand on its own, though, if you set up an adjustment layer to hold it. Whatever effects ride on an adjustment layer reach every layer sitting beneath it in the stacking order. Park an adjustment layer at the very bottom of the stacking order and it produces no visible result.

Since effects on an adjustment layer hit all the layers below, they're handy for treating many layers in one move. Otherwise an adjustment layer acts like any layer — keyframes or expressions work with any of its properties, for instance.

Note

Put more precisely, an adjustment layer applies its effect to the composite assembled from every layer below it in the stacking order. That's why running an effect on an adjustment layer renders faster than running the same effect on each underlying layer one at a time.

Note

To treat a group of layers with one effect or transformation, precompose them first and then apply that effect or transformation to the resulting precomposition layer. (See Precompose layers.)

Mask an adjustment layer to confine an effect to just portions of the layers underneath. Those masks can be animated to track subjects moving through the underlying layers.

- Building an adjustment layer is done with Layer > New > Adjustment Layer, or by pressing Ctrl+Alt+Y (Windows) or Command+Option+Y (Mac OS).
- Converting selected layers into adjustment layers means turning on the Adjustment Layer switch for them in the Timeline panel or choosing Layer > Switches > Adjustment Layer.

Note

Switching off the Adjustment Layer switch for a layer turns it back into a normal layer.

## Creating layers — Online resources about adjustment layers

Over on his Video Copilot website, Andrew Kramer offers a video tutorial demonstrating how an adjustment layer can confine an effect to a brief stretch of time and to only certain parts of a movie.

On his After Effects Scripts website, Lloyd Alvarez supplies a script that drops an adjustment layer above every selected layer, each one trimmed to match the duration of the layer it sits over.

## Creating layers — Create a layer and new Photoshop footage item

Generating a Photoshop document from within After Effects launches Photoshop, which builds a PSD on disk. That PSD holds a single empty layer matched to your composition's dimensions and fitted with the right title-safe and action-safe guides. Whatever color bit depth your After Effects project uses, the PSD inherits the same depth.

After Effects pulls the freshly built PSD straight in as a footage item. Edits you commit back in Photoshop then show up in that footage item inside After Effects.

- For a Photoshop footage item that feeds a brand-new layer in the open composition, choose Layer > New > Adobe Photoshop File. That layer drops in at the top of the stack in your composition.
- For a Photoshop footage item carrying the settings of the composition you opened most recently — without dropping it into any composition — choose File > New > Adobe Photoshop File.

### More like this

- Layers (keyboard shortcuts)
- Precompose layers
- Creating and editing text layers
- 3D layers
- Cameras, lights, and points of interest
- About shapes and shape layers
- Null object layers
- Working with footage items
- Trim, extend, or slip-edit a layer
- Apply an effect or animation preset
- Creating masks
- Preparing and importing Photoshop files
- Working with Photoshop and After Effects
