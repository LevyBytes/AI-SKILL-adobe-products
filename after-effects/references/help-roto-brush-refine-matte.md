# Roto Brush Refine Matte (part 1)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Apr 15, 2026

Pull a foreground subject away from its background with Roto Brush, and build mattes with Refine Matte.

Plenty of visual-effects and compositing pipelines hinge on this step of peeling a foreground subject off its background. Once a matte exists that isolates the subject, the door opens to swapping the backdrop, targeting effects at just the foreground, and a great deal more.

With Roto Brush, you lay down strokes across sample patches of the foreground and the background. After Effects takes those cues and works out a segmentation boundary dividing the foreground from the background.

That segmentation boundary in place, you then sharpen the matte through the Refine Brush Matte properties.

Tip

You'll also find the Refine Matte effect on its own, useful for cleaning up mattes that came from tools besides the Roto Brush.

## AI-powered Object Matte

After Effects' newest release adds Object Matte tools that push rotoscoping past a brush-only routine. AI lets you grab a subject fast, manual tools step in to sharpen the matte where it's needed, and the outcome carries across frames on its own.

These Object Matte tools are on hand to back up and polish your rotoscoping and masking work:

- Object Matte Tool
- Quick Selection Tool
- Selection Brush Tool
- Refine Edge Tool

Lean on the Object Matte tools to grab a subject, carry the matte across frames, and lock it down for compositing.

Lean on the Object Matte tools to grab a subject, carry the matte across frames, and lock it down for compositing. Note

In After Effects' newest release (Beta), the Object Matte Tool icon takes the place of the RotoBrush icon over in the main toolbar.

## Next-Gen Roto Brush

See how Next-Gen Roto Brush 3 works inside Adobe After Effects.

Next-Gen Roto Brush is the freshest, upgraded take on the Roto Brush tool, driven by an all-new AI model. Set against Roto Brush 2, it sharpens both how objects are selected and how they're tracked through footage across time and space. That turns masking of tough subjects — overlapping limbs, hair, transparencies — into something quick and painless.

Under the Roto Brush & Refine Edge effects, pick 3.0 for the Version to switch on Next-Gen Roto Brush.

Under the Roto Brush & Refine Edge effects, pick 3.0 for the Version to switch on Next-Gen Roto Brush.

## Roto Brush 2

Powered by Adobe Sensei

The old-school way of rotoscoping leans on animated masks to peel one element out of a clip, and it can drag on and wear you down. Roto Brush 2 brings artificial intelligence to bear, following your subject's motion so the frame-by-frame touch-up shrinks.

## What's in Roto Brush 2

A propagation banner turns up in both the Layer and Composition panel — whichever one holds the layer carrying Roto Brush. Even with the Layer panel shut and your attention elsewhere, the propagation progress stays in view.

Across the Roto Brush & Refine Edge span you'll spot a pale gray chevron pattern, with the base frame marked by a vivid green box up front. As frames propagate, green chevrons fill in through the middle of the span. There's more on this under Strokes, Spans, and Base frames.

Classic controls like Motion Threshold and Motion Damping start out switched off. Turn them on by picking Enable Classic Controls beneath the Roto Brush & Refine Edge effect. Both Roto Brush versions' features can run side by side so you wring the most out of your rotoscoping.

## How to use Next-Gen Roto Brush and Roto Brush 2

Already comfortable with Roto Brush 1? Then grabbing objects via the propagation engine behind Next-Gen Roto Brush and Roto Brush 2 plays out pretty much the same way.

Note

Rotoscoping defaults to Next-Gen Roto Brush. That said, should you lean toward an earlier release — Roto Brush 1 or Roto Brush 2 — pick it from the Version dropdown inside the Roto Brush & Refine Edge effect panel.

Select Roto Brush in the toolbar.

There are keyboard shortcuts for this too:

- Windows: Alt + W
- macOS: Option + W

1. Select Roto Brush from the toolbar.
   Double-click a layer that's already in the Composition panel. Doing so brings that layer up in the Layer panel.

Pick a frame to begin from.

Steer clear of frames where other things in the scene block the object. Take a person stepping into and out of frame: settle on a frame that has them wholly in the scene.

Over in the Effect Controls panel, find the Roto Brush & Refine Edge effect and double-check its Version: 3.0 drives Next-Gen Roto Brush, while 2.0 drives Roto Brush 2.

4. Select the Roto Brush version using the Version dropdown in the Effects Control panel.
   Lay a green foreground stroke across the subject, object, or area you're trying to rotoscope.

Do's:

- Open with a single stroke slicing through the object. Watch what Roto Brush picks up from that, then add or trim the selection with as few strokes as you can.

Don'ts:

- Don't trace an outline around the object. Run your stroke down the middle instead, crossing any patches on the object where color or brightness changes.
- Keep strokes off the edges; painting across them can throw off the selection.

A green cross rides over the mouse cursor by default. Setting the right brush size before that first stroke is good practice. Ahead of your opening stroke, the brush size shows in green. To resize it, pick Windows > Brushes and tweak the brush diameter.

Holding Ctrl (Windows) or Command (macOS) while dragging left and right also resizes the brush.

Sharpen the selection.

Add more strokes, or hold Alt or Option to lay background strokes that carve away parts of the selection. Run strokes around the edges you'd like gone. The magenta line wrapping the object begins to tighten up.

Trimmed off a bit too much? Let go of Alt or Option and drag across the spot to bring it back into the selection. You'll know it's adding when the cursor shows green. While a background stroke is in progress, the Roto Brush tool's pointer turns into a red circle with a minus sign at its center.

6. Background stroke, removing from selection
   With the base frame locked in, kick off the propagation.

Ways to begin propagation:

- Tapping the spacebar: this fires off the matte's propagation from the base frame onward to the next frame.

  - Page Up and Page Down
  - Command + Left or Right arrows (macOS) or Cntrl + Left or Right arrows (Windows)

- Drag the CTI (Current-time indicator) onto a target frame, or hit the I or O keyboard shortcuts to send the CTI to the layer's in or out point.

What separates the spacebar from moving the CTI is timing: the spacebar propagates and shows you each frame's result as it goes, while moving the CTI holds off until frames have propagated and then shows the results.

While Roto Brush carries the matte across frames, the selection can pick up regions you don't want or "shed" pieces of what you originally grabbed. Fix this on the first frame where the unwanted shift shows up: hold Alt or Option and paint a background stroke to strip away the stray regions, or add a fresh foreground stroke to recover anything dropped. Same rule as the base frame — keep off the edge of the selection as much as you can.

You can shrink the Roto Brush tool's tip down for finer strokes. Lean on broad strokes early on, and save fine strokes for the detail work. (See Roto Brush strokes, spans, and base frames.)

Freeze the propagation.

With the matte carried through every frame of the clip, lock it down using the Freeze button along the bottom of the Layer panel.

A freeze still lets you keep refining the matte, no re-propagation required. Need to add to or trim a selection once it's frozen? The very same button unfreezes the propagation.

Hold off freezing until the Roto Brush matte truly satisfies you. The point of freezing is to pin the matte down so Roto Brush is spared from re-propagating the edges.

## Freezing (caching, locking, and saving) Roto Brush segmentation

Suppose After Effects has already worked out Roto Brush segmentation for a frame by the time you hit the Freeze button — that data gets cached. Where a frame inside a Roto Brush span hasn't had its segmentation worked out yet, After Effects has to compute it before the freeze can happen.

Frames carrying frozen (cached and locked) segmentation data show up as:

- Blue bars over in the Roto Brush 1 span view in the Layer panel.
- Purple bars over in the Next-Gen Roto Brush and Roto Brush 2 spans view in the Layer panel.

Purple bars in Next-Gen Roto Brush and Roto Brush 2 spans view

Purple bars in Next-Gen Roto Brush and Roto Brush 2 spans view Note

Hit Stop in the Freezing Roto Brush dialog box and After Effects quits piling frames into the cache; Roto Brush segmentation stays locked all the same, with whatever data was cached up to the moment you clicked Stop.

Unfreeze Roto Brush segmentation by hitting the Freeze button once more.

While Roto Brush segmentation sits frozen, hover the pointer over the Freeze button and a tooltip tells you when that cached data was made.

Freeze button tooltip that informs when the cached information was created.

Freeze button tooltip that informs when the cached information was created.

A slash runs through the Roto Brush tool's pointer whenever the segmentation is frozen.

What gets cached and locked traces back to two sources: your Roto Brush strokes, plus — under the Roto Brush & Refine Edge effect — whatever sits in the Propagation property group. Touching any of those — drawing new Roto Brush strokes, say, or editing properties in the Propagation property group — won't shift the Roto Brush effect's result until you unfreeze the segmentation. The properties over in the Roto Brush Matte property group don't get frozen.

Frozen Roto Brush segmentation data stays cached and locked for as long as the application runs, and that cached data is stored along with the project.

## Adjusting and Refining the final matte

- You can take the propagation result further with the controls in the Roto Brush Matte group of the Roto Brush & Refine Edge effect, the Reduce Chatter property above all.

Controls in the Roto Brush Matte group in the Roto Brush effect.

Controls in the Roto Brush Matte group in the Roto Brush effect.

- On top of that, the Refine Edge Tool handles very detailed edges such as hair, with extra control sitting in the Refine Edge Matte property group. It also carries options that make up for motion blur and that decontaminate edge colors. It earns its keep on mattes with soft edges or fine detail like hair.

Tip

To reach the Refine Edge Tool, grab the Roto Brush Tool in the Toolbar and pick Refine Edge Tool. Alt + W (Windows) and Option + W (macOS) work too.

Motion blur and decontaminating edge color to deal with mattes with soft edges or fine details.

Motion blur and decontaminating edge color to deal with mattes with soft edges or fine details.

- Keep running the Refine Edge Tool over other frames until the refinement is as tight and finished as it can be. Hold Alt or Option to wipe away Refine Edge strokes.

- Once you've put the Refine Edge Tool to use, the Fine-tune Refine Edge Matte option within the Roto Brush & Refine Edge effect properties switches on. Adjust properties in the Refine Edge Matte property group however you need.

Fine-tune Refine Edge Matte option in the Roto Brush & Refine Edge effect properties.

Fine-tune Refine Edge Matte option in the Roto Brush & Refine Edge effect properties.

Flip the toggles along the bottom of the Layer panel to inspect the matte results, or bring up the Composition panel to see it in context with your other layers.

Note

Recent After Effects has sharpened the Roto Brush 2 and Roto Brush 3 workflow considerably. After Effects no longer has to recompute every frame during the Freeze step; instead it cleverly caches inference for frames already propagated. The upshot is a quicker Freeze and a more efficient way of lifting objects out of footage — time back in your pocket.

## Layer panel view options

These view modes are yours to pick from the Show Channel menu in the Layer panel, by pressing the buttons in the Layer panel, or through keyboard shortcuts. The controls along the bottom of the Layer panel let you reset the color and opacity of the overlays that Alpha Boundary and Alpha Overlay mode use.

Toggles in Layer panel for viewing alpha, alpha boundary, and alpha overlay

Toggles in Layer panel for viewing alpha, alpha boundary, and alpha overlay

Alpha

Displays the layer's alpha channel. Use Alt + 4 (Windows) or Option + 4 (macOS).

Alpha Boundary

Displays the source layer with its foreground and background left as-is, while a colored outline traces the segmentation boundary across the top. Use Alt + 5 (Windows) or Option + 5 (macOS).

Note

Move the View menu in the Layer panel away from Roto Brush to anything else, and Alpha Boundary view mode switches itself off.

Alpha Overlay

Displays the source layer with the foreground untouched and a solid color laid over the background. Use Alt + 6 (Windows) or Option + 6 (macOS).

## Strokes, spans, and base frames

The frame you draw on with your very first Roto Brush stroke becomes a base frame. By default, the segmentation data (what's tagged foreground versus background) spans the layer's whole duration, or the length of any empty stretches when several spans exist. That range of frames swayed by the base frame is its Roto Brush span. Tiny arrows along the span bar in the Layer panel point out which way the data is propagating. Draw a corrective stroke anywhere the arrows aim right and that stroke's data travels forward; draw one anywhere the arrows aim left and it travels backward. Draw a stroke outside any Roto Brush span and you spawn a brand-new base frame and span.

Starting from a base frame, you can move ahead one frame at a time laying down corrective strokes, with no worry that those strokes will alter results on frames you've already finished. The same holds going backward from a base frame.

Every corrective stroke's influence spreads forward or backward to touch all frames lying that way within the span, no matter the order you drew them in. Picture a base frame at frame 10: you make a corrective stroke at frame 20, then another at frame 15 — frame 20 ends up shaped by both strokes, exactly as though you'd drawn them the other way round.

Each stroke you lay inside a span stretches that span, unless it can't because the span you're drawing in butts up against another span:

Resize a span's duration by hand by dragging either of its ends.

Get rid of a span by right-clicking (Windows) or Control-clicking (macOS) it and picking Remove Span.

Wipe out every span by deleting the instance of the Roto Brush & Refine Edge effect.

## Propagation banner

Within Next-Gen Roto Brush and Roto Brush 2, a propagation banner sits at the bottom of the Layer panel and reports the state of whichever frame is currently propagating.

The propagation banner shows the status of the current propagating frame.

The propagation banner shows the status of the current propagating frame.

## Roto Brush tool, Roto Brush strokes, and similarities to paint tools and strokes

In a lot of respects the Roto Brush Tool resembles the paint tools, yet a handful of meaningful differences set it apart.

Pick the Roto Brush Tool and the Paint panel's controls go inactive. A Roto Brush stroke lasts a single frame, even though its influence carries forward or backward inside a span.

Resizing the brush (Diameter) for the Roto Brush tool happens the same way it does for the paint tools. Reach for the Diameter control in the Brushes panel, or Ctrl-drag (Windows) or Command-drag (macOS) inside the Layer panel. The other Brushes panel controls do reach the Roto Brush tool — Hardness being the one exception.

Roto Brush Path properties can be copied and pasted into masks, shapes, and instances of the Paint effect, the same as any other kind of path. Copy a single stroke and the Roto Brush span data stays behind; copy the whole Roto Brush effect instance, though, and the Roto Brush span (plus base frame) data rides along.

Expressions work on the Roto Brush effect's Path property just the way they work on the Paint effect's Path property.

Drawing a stroke with the Roto Brush Tool spins up a new stroke even when another stroke is already selected — unlike the stroke-replacement behavior the paint tools use.

Roto Brush strokes live in a Strokes property group nested inside the Roto Brush & Refine Edge property group over in the Timeline panel.

Strokes property group within the Roto Brush property group in the Timeline panel.

Strokes property group within the Roto Brush property group in the Timeline panel.

A good many keyboard shortcuts built for paint strokes and paint tools carry over to Roto Brush strokes and the Roto Brush Tool as well.

## Roto Brush & Refine Matte effect properties

Inside the Propagation property group, the Roto Brush & Refine Edge effect properties shape the segmentation dividing foreground from background and govern how that segmentation data gets applied to neighboring frames in a span. The Roto Brush effect's remaining properties act on the matte built from that first segmentation. Every property the Roto Brush effect holds outside the Propagation property group also belongs to the Refine Edge Matte effect (Invert Foreground/Background aside).

Pick from the Roto Brush versions - 1.0 (Classic), 2.0, or 3.0.

Option to select and switch between different Roto Brush versions.

Option to select and switch between different Roto Brush versions.

With version 2.0 chosen, set how much edge detail you want. Standard runs faster and carries somewhat less detail along the edges; Best gives you edges that are properly refined.

Option to select and switch between different Roto Brush Quality.

Option to select and switch between different Roto Brush Quality.

Every Roto Brush calculation answers to the properties in the Propagation property group (View Search Region excepted). Touch any of them and the segmentation data has to be recomputed and propagated afresh from a base frame. The base frame's own results, though, don't budge when these properties change — so it pays to adjust them while the current-time indicator sits a frame or two off a base frame, where you can actually watch the change take effect.

Enable Roto Brush Classic controls in the Timeline panel.

Enable Roto Brush Classic controls in the Timeline panel.

- Search Radius: How big an area After Effects scans, frame to frame, hunting for matching pixels. The Motion Threshold and Motion Damping properties let you tune how that radius adjusts to busier or calmer regions. Set the radius too small and some motion slips by; set it too large and stray motion gets picked up.

- View Search Radius: Switch this on and a green box wraps the subject, marking where the Roto Brush algorithm is scanning for it. Should the subject leave that frame, the Roto Brush & Refine Edge effect is lost. Push the percentage higher to span the whole area — slower, but it's more accurate and reaches farther.

  - Motion Threshold and Motion Damping: (on by default in Roto Brush 1, and available once you switch on classic controls in Next-Gen Roto Brush and 2). This pair governs how motion reins in the search region. Use Motion Threshold to fix the motion level under which there's deemed to be no motion, where the search region collapses to nothing. Motion Damping works on whatever's left that counts as moving. Crank Motion Damping up and the search region cinches in, slow-moving areas tightening more than fast-moving ones. Reining the search region in around faintly moving areas can cut edge chatter there. Rein it in too far, though, and the automatic boundary detection slides right off the object's edge.
  - Edge Detection: Decide whether to lean on the segmentation boundary figured for the current frame alone or the one figured from the previous frame when settling the edge between foreground and background. The Balanced option weighs the current frame and its neighbors the same. Foreground objects whose colors echo the background tend to come out better with Favor Predicted Edges.
  - Use Alternate Color Estimation: Nudges, ever so slightly, how the Roto Brush effect decides foreground from background. Ticking it sometimes sharpens the segmentation, and sometimes it does nothing.

Swaps which strokes count as foreground strokes and which count as background strokes during the segmentation phase of the Roto Brush & Refine Edge effect.

Reach for this to refine edges, cut chatter, shift edges, work the contrast, and feather the selection.

Feather

Sets how soft the segmentation boundary is.

Contrast

Raise the contrast (handy for cinching the boundary in further).

Shift Edges

Push the segmentation boundary outward (positive value) or pull it inward (negative value).

Reduce Chatter

You see chatter when your segmentation boundary's edges jitter around. Reduce Chatter quiets that visible noise along the segmentation boundary's edges and hands you cleaner ones.

Render Refine Edge lets you preview the refined edge of your Roto Brush results, working on base frames and propagated frames alike.

Base Refine Edge Radius stretches the area of the refined edges you've already laid down with the Refine Edge Roto Brush tool. Reach for it to widen that area whenever you've worked with too small a brush, helping After Effects figure out the refined edges from frame to frame.

Switch on Fine-tune Refine Edge Matte to unlock options for fine-tuning the edges you built with the Refine Edge Tool.

Smooth

Raising this softens the sharpness of the segmentation boundary's curves by smoothing along the edge. Keep the number low when you're isolating something with crisp features such as hair.

Feather

How soft the segmentation boundary is. It has no effect at all when Smooth is 0. Unlike Smooth, Feather works across the edge.

Contrast

Raise the contrast (handy for cinching the boundary in further).

Shift Edges

Push the segmentation boundary outward (positive value) or pull it inward (negative value).

Reduce Chatter

Turn this up to settle erratic frame-to-frame edge changes. The property sets how much weight the current frame carries in the weighted average taken across adjacent frames that keeps the matte edges from jittering frame to frame. A high Reduce Chatter value means strong chatter reduction and less stock placed in the current frame. A low value means weak chatter reduction and more stock placed in the current frame. At 0, only the current frame factors into the matte refinement.

Tip

If your foreground object holds still while the matte edges drift and shift, raise the Reduce Chatter value. If the foreground object moves while the matte edge stays put, lower the Reduce Chatter value.

Tick this option to render the matte carrying motion blur. The high-quality choice runs slower but turns out a cleaner edge. You also get a handle on the sample count and the shutter angle, which carry the same sense here as they do for motion blur in the composition settings.

Extend Where Smoothed

Live only when Reduce Chatter sits above 0 and Decontaminate Edge Colors is on. Edges nudged to cut chatter get cleaned.

Increase Radius

(Called Increase Decontamination Radius in Roto Brush 1): How many pixels to add to the radius used for cleaning edge colors, layered on top of whatever cleaning already spans feather, motion blur, and extended decontamination.

View Map

(Called View Decontamination Map in Roto Brush 1): Reveals which pixels edge-color decontamination will clean (the white pixels in the map).

Set the View menu in the Layer panel to Roto Brush and a Freeze button shows up in the Layer panel's lower-right corner. Hit it to cache and lock segmentation for every Roto Brush span on the layer inside the composition work area. That keeps the matte and stores it with the project, so the Roto Brush effect won't recompute the segmentation when you reopen the project or make edits.
