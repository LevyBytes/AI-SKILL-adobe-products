# Effects Animation Presets Overview (part 1)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on May 21, 2026

### Apply and reuse effects in Adobe After Effects using built‑in animation presets to speed up workflows and maintain consistent visual styles across compositions.

Animation presets let you store and reapply particular setups of layer properties and animation — keyframes, effects, and expressions among them. Say you built an explosion out of several effects with intricate property settings, keyframes, and expressions; the whole arrangement can be stored as one animation preset. From there, that preset drops onto any other layer.

Plenty of animation presets carry no animation at all — instead they bundle effects, transform properties, and the like. Rather than keyframes, a behavior animation preset leans on expressions to drive layer properties.

Moving an animation preset between computers, and saving one in the first place, both work fine. An animation preset's filename extension is .ffx.

Hundreds of animation presets ship inside After Effects, ready to drop on your layers and tweak however you like — text animation presets among them in abundance.

To browse and apply animation presets in After Effects, reach for either the Effects & Presets panel or Adobe Bridge. Opening the Presets folder in Adobe Bridge is a matter of choosing Browse Presets, found on the Effects & Presets panel menu or on the Animation menu.

Tip

One handy trick for learning how seasoned users drive After Effects: apply an animation preset, then hit U or UU so that only the animated or modified layer properties surface. What those revealed properties show you is exactly which changes the preset's designer made to build it.

## Downloading, installing, and moving animation presets

After Effects ships its animation presets into the Presets folder.

- Windows: Program Files\Adobe\Adobe After Effects\Support Files
- macOS: Applications/Adobe After Effects

Presets you make yourself land, by default, in the Presets folder.

- Windows: My Documents\Adobe\After Effects
- macOS: Documents/Adobe/After Effects

Either Presets folder will accept a lone new animation preset or a full folder of them that you add.

At launch, After Effects scans both Presets folders along with their subfolders for any installed animation presets and registers them in the Effects & Presets panel. Folders whose names open and close with parentheses are skipped — the contents of (archived_animation_presets), for instance, never load.

Note

Only presets sitting in one of the Presets folders, or a subfolder beneath one, turn up in the Effects & Presets panel. Should you relocate a preset elsewhere, drop a shortcut (Windows) or an alias (macOS) of that folder into the Presets folder.

Loading and initialization of animation presets happen only while the Effects & Presets panel is visible. With that panel closed or buried behind another, the presets stay uninitialized.

## Save an animation preset

Pick whatever mix of properties (Position and Scale, say) and property groups (Paint and Transform, for example) you need. When your selection is effects only, the Effect Controls panel is where you can grab them.

From the Animation menu or the Effects & Presets panel menu, choose Save Animation Preset.

Give the file a name and a place to live, then click Save.

The preset has to be saved into the Presets folder for it to turn up in the Effects & Presets panel.

Note

- Should the animation preset stay absent from the Effects & Presets panel, pick Refresh List off the Effects & Presets panel menu.
- Apply a preset out of the Animation Presets > Shapes > Backgrounds category and a custom Animated Shape Control effect shows up in the Effect Controls panel. That custom effect is a purpose-built expression control effect made just for these animation presets. Copy and paste it onto other layers, or store it as its own animation preset so you can reuse it elsewhere.

## Effects overview and resources

A range of effects comes bundled with After Effects; you drop them onto layers to add to or reshape the qualities of still images, video, and audio. An effect might, for example, shift an image's exposure or color, introduce fresh visual elements, work over sound, warp pictures, strip grain, boost lighting, or build a transition.

People sometimes call effects filters by mistake. The core distinction: a filter alters an image or another layer trait for good, while an effect and its properties remain editable or removable whenever you like. Put differently, filters work destructively whereas effects work non-destructively. Because After Effects relies on effects only, every change stays non-destructive. One upshot of being able to edit effect properties is that those properties can shift over time — that is, be animated.

Note

Shape-layer path operations such as Zig Zag and Pucker & Bloat — reached through the shape layer's Add menu — go by the name effects in Adobe Illustrator, yet they behave unlike other After Effects effects.

Effects get browsed and applied from the Effects & Presets panel. Tweaking an effect's properties happens in the Effect Controls panel or Timeline panel, or by dragging effect control points within the Layer panel or Composition panel.

A single layer can take several copies of the same effect, each one renamed and each with its own independently set properties.

Note

Open a project that calls for an effect whose plug-in After Effects hasn't loaded and a warning dialog box pops up, with each instance of that effect carrying Missing: ahead of its name in the Timeline panel and Effect Controls panel. Press FF to surface every missing-effect instance in the Timeline panel for the active composition.

## Effect plug-ins

Every effect is built as a plug-in — the ones bundled with After Effects included. Plug-ins are compact software modules, bearing filename extensions like .aex, .pbk, and .pbg, that extend what an application can do. Not all of them are effect plug-ins; some, for instance, deliver features for importing and handling specific file formats. Take the Photoshop Camera Raw plug-in, which gives After Effects the means to handle camera raw files.

Since effects take the form of plug-ins, you're free to install and run extra effects from sources beyond Adobe — your own creations among them. A single new effect, or a whole folder of them, can go into the Plug-ins folder, which sits by default in one of these spots:

Windows: Program Files\Adobe\Adobe After Effects\Support Files

macOS: Applications/Adobe After Effects

On startup, After Effects combs the Plug-ins folder and its subfolders for every installed effect and lists them under the Effect menu and in the Effects & Presets panel. Folders named with leading and trailing parentheses are passed over — the contents of (archived_effects), for example, never load.

Several third-party plug-ins arrive with After Effects, among them Foundry Keylight, Synthetic Aperture Color Finesse, Imagineer mocha shape, fnord ProEXR, and CycoreFX HD plug-ins. The full version of Adobe After Effects software installs these by default.

For some plug-ins, the installer places the documentation right alongside the plug-ins themselves.

Bundled with After Effects, the EXtractoR and IDentifier plug-ins from fnord software open up the many layers and channels inside OpenEXR files. Learn more about ProEXR plug-ins, IDentifier, and EXtractoR.

## Animating effects

Animating an effect's properties follows the same path as any other property — you attach keyframes or expressions to them. As a rule, even effects whose normal operation hinges on animation still need you to lay down a few keyframes or expressions. To turn a static effect into a moving one, for instance, animate a Transition effect's Transition Completion property or the Evolution setting on the Turbulent Noise effect.

## Color depth

A large share of effects can process color and alpha-channel data at either 16 bits or 32 bits per channel (bpc). Drop an 8-bpc effect into a project running at 16 bpc or 32 bpc and you risk throwing away color detail. Whenever an effect is limited to 8 bpc while the project sits at 16 bpc or 32 bpc, a warning shows up beside that effect's name in the Effect Controls panel. To filter things down, configure the Effects & Presets panel so it surfaces only those effects matching the project's current color depth. Learn more about color depth and high dynamic range color.

## Effect opacity

Every effect carries a Compositing Options property group within its own property group. The Effect Opacity property delivers, for any effect, the same kind of behavior offered by the Blend With Original controls: adjust it and the global opacity shifts across the whole effect, with no separate mask required.

The Blend With Original controls group is what lets you target an effect to one specific region of an image, masking off the area you want it to reach.

## Render order

Whenever a layer carries masks, effects, layer styles, and transform properties, the sequence After Effects works through them — its render order — can shape how the finished effect turns out. Out of the box, effects line up in the Timeline and Effect Controls panels following the sequence you applied them, and rendering walks that list from the top entry down to the bottom. Want a different rendering sequence? Drag an effect's name to another slot in the list. Learn more about render order and collapsing transformations.

## Adjustment layers

Drop an effect onto an adjustment layer and it reaches every layer sitting beneath it in the Timeline panel's stacking order.

## Expression Controls effects

Rather than altering a layer's existing properties, Expression Controls effects leave those untouched and instead attach new layer properties — ones that expressions are then able to reference.

## Preventing edge clipping with the Grow Bounds effect

Since effects operate on a layer, certain effects have their output confined to that layer's boundaries, and the effect can look like it stops short. The fix is the Grow Bounds effect: apply it to a layer to stretch that layer out temporarily while other effects do their math. Newer effects, which are usually 32-BPC effects, rarely need this step.

## Effects applied with tools

A handful of effects — among them the Puppet effect, the Paint effect, and the Roto Brush effect — reach a layer by way of a tool, instead of being dropped on directly the way most other effects are.

## Compound effects and control layers

A number of effects take a control layer (also called a layer map) as their input. Such compound effects read the pixel values of that control layer to work out how they should alter the pixels of the layer the effect sits on — the destination layer. The reading varies: at times it's the brightness of the control layer's pixels that matters, and at other times it's the per-channel values of those pixels.

Take the Displacement Map effect, which leans on a control layer's brightness values to decide both how far and which way it nudges the underlying layer's pixels. Or the Shatter effect, which can draw on two control layers at once — one shaping the broken fragments, the other timing when particular regions of the destination layer blow apart.

Any effects, masks, and transformations on the control layer are disregarded by the compound effect. Should you want those results to count, precompose the layer first and then feed the precomposition layer in as the control layer.

A frequent practice is to keep the control layer itself hidden — in other words, its Video switch switched off.

A Stretch Map To Fit option (or one named much like it) ships with most compound effects; it briefly scales a control layer up or down to match the destination layer's dimensions, so that each destination-layer pixel has a matching control-layer pixel. Turn the option off and the compound effect runs its math as though the control layer sat centered over the destination layer at its native size.

Drawing or painting inside an image editor such as Adobe Photoshop is one way to build control layers.

## Tips for creating control layers

With a lot of compound effects, neutral gray pixels in the control layer map to no operation at all, which makes a neutral gray solid layer a solid jumping-off point when you're building one.

For turbulent or atmospheric looks, a strong control layer comes from applying the Turbulent Noise effect to a layer and then precomposing it.

You can also assemble a control layer by precomposing a white solid layer together with a black solid layer plus a mask on the upper layer that decides which regions read white and which read black. Feather that mask more, and the handoff between black and white values grows gentler.

How sharply values shift across the control layer's surface comes down to the contrast between neighboring pixel values. For gradual transitions, lay down paint with a soft or anti-aliased brush, or drop in gradients; for sharp ones, skip the in-between tones and rely on a handful of well-separated shades — say 50% gray, black, and white.

## Effects with a Comp Camera attribute

A few effects are able to draw on the camera and lights belonging to the same composition; Card Dance, Card Wipe, and Shatter are among them. Some of these always tap the composition camera, while others expose camera and light options in the Effect Controls panel.

Note

The Live Photoshop 3D effect acts like an effect carrying a Comp Camera attribute. It surfaces on a layer only when that layer is a 3D object layers from PSD file.

Apply an effect that has a Comp Camera attribute to a 2D layer, and it can follow the composition's camera and light positions and paint a 3D image onto the very 2D layer it's attached to. Although the outcome looks three-dimensional, the layer holding the Comp Camera attribute stays a 2D layer, which carries these consequences:

Neither can the 3D layers stacked over and under it in the Timeline panel pass through one another or throw shadows onto one another.

Intersecting with 3D layers, or casting and receiving shadows, is beyond it.

Note

Because the rendering lands on the layer rather than on the composition, take care to attach these effects to layers that match the composition's size and sit precisely centered within it.

## Effect Controls panel

Applying an effect to a layer pops open the Effect Controls panel, where the effect you just added is listed alongside controls for tweaking its property values. You can also handle effects and edit most of their property values from the Timeline panel, but the Effect Controls panel offers handier controls for plenty of properties — think sliders, effect control point buttons, and histograms.

Being a viewer, the Effect Controls panel lets you keep panels open for several layers simultaneously, and you switch between layers through the viewer menu on the panel tab.

- Press F3 to toggle the Effect Controls panel open or shut for whichever layer is selected.
- Click an effect to select it. Use the Down or Up arrow keys to jump to the next or previous effect in the stacking order.
- Hit the Right Arrow key or Left Arrow key to expand or collapse the effects you've selected.
- Click the icon sitting left of an effect name or property group name to expand or collapse that property group.
- Ctrl-click (Windows) or Command-click (macOS) the triangle to expand or collapse a property group together with everything nested inside it.
- For all property groups across the selected effects at once, press Ctrl+` (accent grave) (Windows) or Command+` (accent grave) (macOS).
- Return an effect's every property to its defaults by selecting Reset at the top of that effect's entry in the Effect Controls panel.
- Duplicate the effects you've selected with Edit > Duplicate, or press Ctrl+D (Windows) or Command+D (macOS).
- Reposition an effect within the rendering order by dragging it up or down through the effect stack.
- Match an effect's properties to those of an animation preset by picking from the Animation Presets menu at the top of that effect's entry in the Effect Controls panel.
- To surface the Animation Presets menu inside the Effect Controls panel, choose Show Animation Presets from the panel menu.
- To adjust the range of an effect property, right-click (Windows) or Control-click (macOS) the underlined value for that control and pick Edit Value from the context menu.

Use new beta features

A modernized Effect Controls panel is open for testing and feedback right now. Give it a try in After Effects (beta).

Get started

These visual changes to the Effect Controls panel arrive in the newest beta build of After Effects, while the existing behavior and functionality carry over unchanged.

- The effect visibility icon now reads as .
- The right edge of the panel now gathers the informational icons together, and a tooltip on each spells out what it stands for.
- What used to be the Reset command now appears as the Reset Effect icon.

None of the Effect Controls panel's behavior or functionality changes with these visual updates.

A. The effect visibility icon now match the familiar eyeball icon. B. Reset command is now an icon. C. Consolidated informational icons on the right-hand side with tooltips.

None of the Effect Controls panel's behavior or functionality changes with these visual updates.

## Color labels for effects in the Effect Controls panel

Use new beta features

Color labels for effects are open for testing and feedback at the moment. Give them a try in After Effects (beta).

Get started

In its newest beta build, After Effects lets you tag individual effect instances on layers with color labels. Those labels turn up in the Effect Controls panel as colored square swatches, and you can optionally have them tint each effect row's background so a long stack is quicker to scan at a glance.

The way color labels work for effects mirrors how they already work for layers and keyframes in After Effects. A gray square swatch on each effect signals that nothing's been assigned yet. Click that swatch to bring up the label picker and hand a color to that one effect.

Tagging each effect with a color label makes them simple to spot and tell apart inside the Effect Controls panel.

Tagging each effect with a color label makes them simple to spot and tell apart inside the Effect Controls panel.

For a layer carrying effects, bring up its Effect Controls panel.

Track down, within the Effect Controls panel, whichever effect you mean to tag.

Click the grey square swatch beside that effect's name, and the label picker menu appears.

3. Clicking the label swatch beside any effect brings up the label picker, where a color gets assigned.
   Pick a label color off the menu. The color swatch refreshes to show the chosen color, and the effect's row background picks up a tint matching that label too.

4. Across a lengthy stack, tinted rows let you pick out the labeled effects at a glance in the Effect Controls panel.

Both of these display behaviors are yours to govern from the Effect Controls panel menu, where these options live:

- Show Effect Label Swatch: Turns the label swatch on or off altogether for the effects listed in the panel.
- Use Label Color for Effect Background: Switches the row-background tint on or off.

To strip the background tint from effect rows, clear Use Label Color for Effect Background in the panel menu.

To strip the background tint from effect rows, clear Use Label Color for Effect Background in the panel menu.

## Effects and Presets panel

The Effects & Presets panel is where you browse for and apply both effects and animation presets. Each entry wears an icon marking its type, and the numbers shown inside an effect's icon tell you the maximum it handles — 8 bits, 16 bits, or 32 bits per channel.

Either scroll the roster of effects and animation presets, or hunt for one by entering any fragment of its name in the search box up top.

Which entries appear is governed by the choices you make in the Effects & Presets panel menu:

- Save Animation Preset: Stores your present effect settings in a reusable file. Pull it up again on later projects.
- Browse Presets: Launches Adobe Bridge for previewing and choosing presets by eye.
- Show Effects for All Color Depths: Surfaces effects for every color depth, rather than restricting the list to those matching the current project's depth.
- Show GPU Capable Effects Only: Limits the list to effects your GPU is able to accelerate.
- Show Effects: Brings up every effect on hand.
- Show Animation Presets: Brings up all animation presets, your own saved ones in the Presets folder included.
- Manage Effects: Lets you switch individual effects on or off — handy when you're troubleshooting a plugin.

How the panel groups effects and animation presets follows whichever choice you make from the panel menu — Categories, Explorer Folders (Windows) or Finder Folders (macOS), or Alphabetical. To manage your effects and animation presets, reach for these panel-menu commands:

- Reveal In Explorer (Windows) or Reveal In Finder (macOS): Opens the containing folder for whatever effect or animation preset is selected in the Effects & Presets panel.
- Refresh List: Brings the roster of effects and animation presets up to date.

## Apply an effect or animation preset

- To put an effect or animation preset on a single layer, drag it out of the Effects & Presets panel onto a layer in the Timeline, Composition, or Effect Controls panel.

Note

As you drag an effect or animation preset over a layer in the Composition panel, the Info panel reports the name of whichever layer sits beneath the pointer. With no layer selected, double-clicking an animation preset spawns a fresh layer and applies the preset there, whereas double-clicking an effect with nothing selected has no effect at all.

- Targeting one or more layers with an effect or animation preset? Highlight them, then in the Effects & Presets panel double-click the item.
- For an effect across one or more layers, highlight them and run Effect > [category] > [effect].
- Reusing a recent or saved animation preset on several layers means highlighting them, then heading to Animation > Recent Animation Presets and picking the one you want off the list.
- To reapply the animation preset you used most recently across one or more layers, select them and press Ctrl+Alt+Shift+F (Windows) or Command+Option+Shift+F (macOS).
- To reapply the effect you used most recently across one or more layers, select them and press Ctrl+Alt+Shift+E (Windows) or Command+Option+Shift+E (macOS).
- To bring an animation preset onto one or more layers by way of Adobe Bridge, select the layers, choose Animation > Browse Presets, work your way to the animation preset, and double-click it.
- Want an animation preset's effect settings poured into an effect's current instance? Inside the Effect Controls panel, open that effect's Animation Presets menu and choose the preset by name.
- Carrying effects from one layer onto others starts by highlighting the effects within the Timeline panel or Effect Controls panel; run Edit > Copy, pick your destination layers, then run Edit > Paste.

Note

When a selected layer already holds one instance of an effect, pasting that same effect overwrites the existing one instead of stacking another on top. Need a second copy? Within the Effect Controls panel, highlight the effect and run Edit > Duplicate. From the point an effect sits on a layer more than once, a further paste does tack on a new instance.

By default, an effect you apply to a layer stays active for as long as the layer runs. That said, you can gate an effect to begin and end at set times, or ramp its intensity up and down over time, using keyframes or expressions — or by routing it through an adjustment layer.

Animation presets take hold at the current time.

Note

To reveal what an animation preset changed once you've applied it to a layer, select the layer and press UU to display the modified properties, or press U to display properties carrying keyframes or expressions.
