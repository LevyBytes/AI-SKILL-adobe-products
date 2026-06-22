# Precomposing Nesting Pre Rendering, Composition Profiler

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Precomposing, nesting, and pre-rendering — About precomposing and nesting; View detailed performance information with Composition Profiler.

## Precomposing, nesting, and pre-rendering — About precomposing and nesting

Got a handful of layers already living in a composition that you'd like to bundle? Precompose them. Doing so tucks those layers into a brand-new composition that takes their place back in the original. From there the new nested composition feeds a single layer inside the original composition. It also shows up in the Project panel, ready to render or to drop into any other composition. Nesting compositions is just a matter of adding one existing composition into another, no different from dropping in any other footage item. Precomposing one lone layer earns its keep when you want to hang transform properties on a layer and steer the order its composition elements render in.

Nesting means tucking one composition inside another. That nested composition turns up as a layer within the composition holding it.

People often call a nested composition a precomposition, which casual usage trims down to precomp or pre-comp. Once a precomposition stands in as a layer's source footage item, that layer earns the name precomposition layer.

As rendering happens, you can picture the image data and the rest of the information streaming out of each nested composition and into whatever composition holds it. That framing is why nested compositions get tagged as upstream of the compositions containing them, while those containing compositions count as downstream of the nested ones inside them. Tie a group of compositions together through nesting and you have a composition network. The Composition Navigator and Mini-Flowchart let you move around inside one. Learn more about opening and navigating nested compositions.

Tip

Precompositions in After Effects play much the same role that Smart Objects do in Adobe Photoshop.

### Precomposing, nesting, and pre-rendering — Uses for precomposing and nesting

Keeping intricate compositions tidy and controllable is what precomposing and nesting are for. The techniques unlock several capabilities:

- Apply complex changes to an entire composition: Gather several layers into one composition, drop that composition inside the larger one, then animate or add effects to the nested version — every layer it holds then transforms identically across the same stretch of time.
- Reuse anything you build: Construct an animation as a standalone composition, after which you can drag it into any number of other compositions as often as you like.
- Update in one step: Edits made to a nested composition ripple through to each composition that references it — the same way altering a source footage item updates every composition that draws on it.
- Alter the default rendering order of a layer: Instruct After Effects to carry out a transformation, rotation for instance, ahead of the effects, so that the effect lands on the already-rotated footage.
- Add another set of transform properties to a layer: Beyond the properties belonging to its contained layers, the layer standing in for the composition carries properties of its own. That extra layer of properties lets you transform a layer or a group of layers a second time.

### Precomposing, nesting, and pre-rendering — Preferences and composition settings that affect nested compositions

Since a precomposition counts as a layer in its own right, its behavior responds to the layer switches and composition switches found in the Timeline panel. Whether switch changes in the parent composition carry through to the nested one is up to you. Keep layer switches from reaching nested compositions by going to Edit > Preferences > Composition (Windows) or After Effects > Settings > Composition (macOS), then turning off Switches Affect Nested Comps.

Within the Advanced tab of the Composition Settings dialog box (Composition > Composition Settings), enabling Preserve resolution when nested or Preserve frame rate when nested or in render queue lets a composition hold on to its own resolution or frame rate rather than adopting whatever the parent composition uses. Say you intentionally chose a low frame rate to give a composition a jerky, hand-drawn feel — that frame rate is worth preserving once the composition gets nested. The same caution applies to rotoscoping work, which can look off after a frame rate or resolution conversion. Reach for this option in place of the Posterize Time effect, which costs more to compute.

Move the current time within one panel and the current time shifts to match in the other panels tied to that composition. Out of the box, every composition connected to the active one through nesting also has its current time updated. If you'd rather nesting-related compositions not shift their current times whenever you scrub time in one composition, turn off this preference — Synchronize Time Of All Related Items — found under Edit > Preferences > Composition (Windows) or After Effects > Settings > Composition (macOS).

### Precomposing, nesting, and pre-rendering — Precompose layers

When you precompose layers, they move into a fresh composition — the precomposition, or precomp for short. Back in the original composition, those selected layers collapse into a single layer that stands in for this new precomposition. Precomposing just one layer comes in handy when you want to give a layer transform properties and shape the sequence in which a composition's pieces render.

Highlight the layers in the Timeline panel, then choose Layer > Pre-compose or hit Ctrl+Shift+C (Windows) or Command+Shift+C (macOS).

Leave all attributes in

The precomposed layer's properties and keyframes stay behind in the original composition, now riding on the new layer that represents the precomposition. Whatever size the selected layer was, the new composition matches it. This option disappears the moment your selection includes several layers, or a shape layer, or any text layer.

Move all attributes into the new composition

The precomposed layers carry their properties and keyframes one rung deeper in the composition hierarchy, further from the root composition. Choose this and any tweaks you made to the layers' properties travel with each individual layer inside the precomposition. The new composition takes on the same frame size as the original composition.

### Precomposing, nesting, and pre-rendering — Effects can include masks and effects of other layers

Certain effects, among them - Set Matte and Displacement Map, draw a layer in as input and reach for that input layer's masks and effects. There's no need to precompose those layers first just so an effect can reference them.

This works much like the View menu sitting at the foot of the Layer viewer panel, which lets you render a layer from various stages along the rendering order — straight from its source, after its masks, or after its individual effects.

When an effect takes layer properties, open the Input Parameter menu beside the layer selection and pick the input layer you want to target, for example:

- Source: Pulls in nothing but the layer's source. Both masks and effects are skipped.
- Masks: Pulls in the layer once its masks have been applied. Effects are skipped.
- Effects & Masks: Pulls in the layer once both its masks and effects have been applied.

### Precomposing, nesting, and pre-rendering — Opening and navigating nested compositions

You'll hear nested compositions described as upstream relative to the compositions holding them, while those containing compositions sit downstream of whatever they enclose. Furthest downstream is the root composition; furthest upstream is the most deeply nested one. String together a series of compositions linked by containing or being contained, and you have a composition flow path. Gather every composition tied together through nesting and you have a composition network.

After Effects hands you several routes to a nested composition (precomposition); open one by any of these:

- In the Project panel, give the composition's entry a double-click.
- Within the Timeline panel, double-click a precomposition layer. To instead bring that precomposition layer up as a layer inside the Layer panel, use Alt-double-click (Windows) or Option-double-click (macOS).

Note

Should a paint tool or the Roto Brush tool be active when you double-click a precomposition layer, the layer opens in the Layer panel.

Press Shift+Esc to jump to the composition you most recently worked in that shares the active composition's network.

Use the Composition Navigator.

Use the Composition Mini-Flowchart.

### Precomposing, nesting, and pre-rendering — The Composition Navigator

Running along the top edge of the Composition panel, the Composition Navigator is a bar that places the composition shown in that viewer alongside the other compositions of its network. What you see are the compositions most recently active within the flow path of the one you're currently in.

A. Arrow for opening Composition Mini-Flowchart B. Panel menu button C. Active (current) composition

The arrows between composition names point the way pixel information travels along this flow path. By default the Composition Navigator bar puts downstream compositions on the left and upstream compositions on the right, a layout flagged by the Flow Right To Left option in the Composition panel menu. Flip the order by picking Flow Left To Right instead. Because this is a global preference, it governs every composition as well as the Composition Mini-Flowchart view.

Downstream composition names appear dimmed, a cue that the active composition neither uses nor displays their contents.

Toggle the Composition Navigator bar on or off by choosing Show Composition Navigator from the Composition panel menu.

Click any composition name in the Composition Navigator bar to make that composition active.

When the flow path runs too long for the Composition panel to fit, an ellipsis button shows up at the bar's left or right edge. Click that ellipsis button to reveal the whole flow path for a moment.

Note

Hover the pointer over a composition button in the Composition Navigator and spin the mouse scroll wheel to move through a lengthy flow path.

### Precomposing, nesting, and pre-rendering — The Composition Mini-Flowchart

A fleeting control for darting around a composition network, that's the Composition Mini-Flowchart. Open it and it reveals the compositions sitting directly upstream and downstream of the one you've selected.

The colors you see in the Composition Mini-Flowchart trace back to the label colors that compositions carry in the Project panel. When a single composition turns up several times inside another, those repeated instances collapse into one entry, with a parenthetical number recording how many there are.

Any of the following opens the Composition Mini-Flowchart:

A. Indicator that composition does not flow into other compositions B. Direction of flow C. Active (current) composition

- Use the Tab key when a Composition, Layer, or Timeline panel is active.

Click the arrow sitting to the right of a composition name within the Composition Navigator bar.

Three menus offer the Composition Mini-Flowchart command — the Composition menu, the Composition panel menu, and the Timeline panel menu.

Click the Composition Mini-Flowchart button up at the top of the Timeline panel.

Just as with the Composition Navigator, the flow direction is yours to set — left to right or right to left — and arrows mark which way it goes. Where a composition shows a next to it rather than an arrow, that composition has nothing flowing into it or nothing it flows out to.

Inside the Composition Mini-Flowchart, upstream compositions stack top to bottom in one of two orders: alphabetical or by layer order. Toggle between those orders by tapping the S key while the Composition Mini-Flowchart is open. Under layer-order sorting, a composition that appears multiple times takes its spot from its highest instance in the stack. Downstream compositions, by contrast, always sort alphabetically.

To move through and pick compositions in the Composition Mini-Flowchart, rely on the arrow keys or click the arrow or buttons flanking a composition. Make the selected composition active with the spacebar or Enter (Windows) or Return (macOS). Back out of the Composition Mini-Flowchart without doing anything by pressing Esc, Shift, or clicking somewhere outside it.

### Precomposing, nesting, and pre-rendering — Pre-render a nested composition

Rendering an elaborate nested composition — whether for previews or the final cut — can eat up considerable time. For a nested composition you figure you're finished editing, you can trim the time spent on every render by pre-rendering it into a movie and swapping the composition out for that rendered movie. The original nested composition stays editable, since it sticks around in the Project panel. Make a meaningful change to that original nested composition and you'll want to render it once more.

The payoff from pre-rendering a nested composition grows the more often you reuse it across a project.

Note

Set your final output settings before you pre-render the nested composition.

Pick the composition in the Project or Composition panel.

Choose Composition > Pre-render.

Issuing the Pre-render command drops the composition into the render queue and configures the Import & Replace Usage post-render action to swap in the rendered movie for the composition.

2. Have the rendered file pulled into your project on its own, standing in for the footage or composition it came from.
   Over in the Render Queue panel, tweak settings however you need, then click the Render button to render the composition.

Note

Rather than swapping the composition for the movie, you can instead set the rendered movie up as a proxy for the nested composition.

### Precomposing, nesting, and pre-rendering — Render order and collapsing transformations

Layers piled one above another in the Timeline panel are what make up a composition. Come render time — for a preview or the finished output — the layer at the bottom renders first. For each raster (non-vector) layer, the pieces apply in this sequence: masks, effects, transformations, and layer styles. Continuously rasterized vector layers follow a different default order — masks first, then transformations and effects.

The properties bundled beneath the Transform category in the Timeline panel — Anchor Point, Position, Scale, Rotation, and Opacity — are what count as transformations. The Layer panel shows you the rendering result as it stands before any transformations get applied.

Note

Want finer command over the timing of transformations? Apply the Transform effect and shift its position relative to the other effects.

Items in a stack of effects or masks get handled top to bottom. Apply the Circle effect and then the Magnify effect, say, and the circle ends up magnified. Within the Effect Controls or Timeline panel, though, pull the Magnify effect up above (before) the Circle effect, and now the circle is drawn after the magnification, escaping it entirely.

Once a layer finishes rendering, the next layer's rendering kicks off. That just-rendered layer below can feed into the rendering of the layer on top — for working out how a blending mode turns out, for instance.

When a composition holds other compositions nested inside, those nested compositions render ahead of the rest of the containing composition's layers.

Note

A handful of effects pay no attention to masks on the layer they sit on. To get one of these effects working on a masked layer, pre-compose the layer with its mask applied, then apply the effect to that pre-composed layer.

### Precomposing, nesting, and pre-rendering — Collapsing transformations

Switch on the Collapse Transformations switch for a nested composition and its transformations hold off until the masks and effects of the containing composition have rendered. Thanks to that ordering, the nested composition's transformations and the containing composition's transformations can merge — collapse — and run as one. Vector layers that aren't continuously rasterized behave the same way.

Note

Where you'd find a Collapse Transformations switch, vector layers instead carry a Continuously Rasterize switch in the very same spot. Shape layers, text layers, and layers whose source footage is a vector graphic file all qualify as vector layers. Text layers and shape layers stay continuously rasterized at all times.

Take a case where a layer is halved in a nested composition and that nested composition is doubled in the containing composition: collapsing transformations can hold the resolution steady. Instead of running both transformations and shedding image data, a single transformation runs — accomplishing nothing, because the two transformations cancel out.

Leave transformations uncollapsed and a nested composition that holds 3D layers renders as a flat 2D image of the 3D setup, shot through the default composition camera. That flattening keeps the nested composition from intersecting 3D layers, throwing shadows onto them, or catching shadows from them in the containing composition. Neither do the containing composition's cameras and lights govern the nested composition.

Collapse the transformations and the 3D properties of the nested composition's layers become visible to the containing composition. The nested composition can now intersect 3D layers, cast shadows onto 3D layers, and take on shadows from 3D layers in the containing composition. Its cameras and lights gain control over the nested composition too.

At bottom, collapsing transformations for a nested composition signals After Effects to skip flattening and cropping that composition's layers. Yet because an adjustment layer acts on the composite of everything beneath it inside the same composition, an adjustment layer placed in a nested composition with collapsed transformations forces exactly the flattening and cropping that collapsing transformations would normally hold off.

Apply a closed mask (with a mask mode other than None), a layer style, or an effect to a nested composition that has collapsed transformations, and the nested composition's layers render on their own first, then the masks and effects go on, and only then does the result composite into the main composition. Under that order, the nested layers' blending modes never touch any layers beneath them in the main composition, and 3D layers above and below the collapsed layer can't intersect or cast shadows on one another.

### More like this

- Creating layers
- 3D layers
- Managing layers
- Precomposing, nesting, and pre-rendering

## View detailed performance information with Composition Profiler

Search Last updated on Apr 30, 2026

### See how the Composition Profiler in Adobe After Effects lets you measure composition performance, track down bottlenecks, and tighten up preview and render times.

### Enable Composition Profiler

Render Time column dropdown

Render Time column dropdown

Switching on the Composition Profiler:

- Click the snail icon in the lower-left corner of the Timeline panel to bring up the Render Time column.

Or

- Right-click the Timeline window column headings, then pick Column > Render Time from the dropdown.

Note

Leaving the Render Time option on display the whole time costs nothing in After Effect's overall performance.

### Use the Composition Profiler

What the Composition Profiler shows is a picture of the data After Effects generates as it renders a frame. That rendering pipeline is heavily optimized, so getting a handle on the assorted color codes and the other Timeline elements really matters.

### Color coding guide

Lean on the color-coding guide: each color flags the render time you should expect from a particular layer or pre-comp anywhere in a project.

Color codes for different render times

Color codes for different render times

- Render times landing at real-time or half-real-time (measured against the composition frame rate) show up in shades of green.
- As values climb from 100ms up to 5 seconds, the color deepens from yellow through to red.
- When your composition's frame rate pushes real-time or half-time render times past one of the fixed stops, those fixed stops get skipped until the fixed stops exceed half-time.

### Understand the Composition Profiler UI

A. Composition Profiler time duration display

A. Composition Profiler time duration display B. Frame Render Time

B. Frame Render Time

A. How long a layer took to render — given in milliseconds or seconds — shows up in the Render Time column, paired with a bar graph setting it against the other layers on that same frame. The render time decides the color each of those bar graphs gets.

B. Sitting in the Timeline footer, the Frame Render Time display reports the total render time for your current frame and stays on screen at all times.

Beyond watching each layer's render time, you can twirl layers open for a breakdown of how much masks, layer styles, and the individual effects each add to the overall render time.

### Composition Profiler display for different workflows

Every setting, workflow, and option gets rendered differently by After Effects, and the Composition Profiler's visualization shifts to match. Here are a handful of scenarios illustrating how the rendering pipeline treats them:

-Precomps

As nested compositions, -precomps report their render times accurately. Figuring out which parts of a -precomp drive its layer render time may mean opening the precomp and digging into its layers with the Composition Profiler.

Reuse the same precomp several times in one composition and the precomps sitting higher in the layer stack borrow the cache built by the instances lower down, so they render faster.

Caching

When layers, effects, masks, and styles get rendered to memory in full or in part — cached — their render time value carries an asterisk.

Here the render time captures how long it takes to render whatever isn't cached yet plus the time to pull items out of the cache. Anything lacking an asterisk renders without touching the cache at all.

Because After Effects caches so often, profiling a frame calls for choosing Edit > Purge > All Memory and Disk Cache, forcing that frame to be rebuilt from scratch.

Layers Referenced By Effects

Picture a layer whose Video Switch is off yet which another layer's effect — Set Matte, say — references. In that scenario the render time for that effect folds in the time to render the referenced layers, while the referenced layer's own render time comes up empty. That happens because After Effects renders the referenced layer only as a piece of the effect's render process.

Over in the left-hand image, no Render Time shows for either Set Matte Source Layer or Compound Blur Source Layer. Yet on the Footage with Effects layer, the Render Time recorded for the Set Matte and Compound Blur effects absorbs the time needed to render those two source layers — Set Matte Source Layer and Compound Blur Source Layer.

Composition View Settings

Composition Profiler goes by the current composition viewer settings. If your composition viewer Resolution/Down Sample Factor Popup sits at Half, for instance, your profiled time comes out faster than it would at Full.

Switch Adaptive Resolution off while using Composition Profiler so the displayed times hold true for the preview resolution.

Expressions

For a property carrying an expression, that expression's calculation time turns up in the Render Time column. Since most expressions execute quickly, expect to see 0ms for the bulk of them.

### Reduce render time for faster performance

With Composition Profiler you can pinpoint which parts of your composition are driving render times up, which puts you in a position to make smart calls about speeding up your workflow. Switching off layers, effects, masks, and layer styles makes previews render quicker, and Composition Profiler helps you single out which elements are worth adjusting.

These additional approaches can cut render time as well:

### Proxies

For a proxy file — a lower-resolution stand-in handy for temporary previewing — right-click an element in the Project panel and choose File > Create Proxy > Movie or File > Create Proxy > Still. Any project element backed by a proxy shows a square icon beside it in the Project panel.

### Prerendering

For layers or compositions that aren't changing, send those elements through the Render Queue to pre-render them, then switch the Post-Render Action over to Import & Replace Usage in the Output Module settings.

### Alternate Effects

Because some effects are slower to render, reach for alternate effects that deliver a comparable look but render faster. You might pit Fast Box Blur against Gaussian Blur, Glow against VR Glow, or Colorama against Tint against Tritone, for example.
