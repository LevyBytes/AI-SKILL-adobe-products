# Blending Modes Layer Styles

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Dec 3, 2024

## Work with layer blending modes

How any given layer combines with the layers stacked below it is governed by that layer's blending mode. In After Effects these layer blending modes — once known as layer modes, and occasionally transfer modes — match the blending modes found in Adobe Photoshop exactly.

For the majority of modes, only the color values of the source layer get altered, while its alpha channel is left untouched. Two exceptions stand out: Alpha Add reaches into the alpha channel of the source layer itself, and the silhouette and stencil modes reach down into the alpha channels of whatever sits below them.

Keyframes can't drive a blending mode directly, so there's no way to animate the mode itself. If you need the mode to switch at a particular moment, cut the layer at that point and assign the new mode to the trailing segment. An alternative is the Compound Arithmetic effect, which yields output comparable to a blending mode yet is free to vary across the timeline.

A blending mode is assigned to every layer — and where nothing else has been chosen, that mode is simply the default Normal.

Note

For colors to blend at a gamma value of 1, open File > Project Settings > Color and turn on Blend colors using 1.0 gamma. Turning the same option off blends colors in the project's working color space instead. Learn more about linearizing working space and enable linear blending.

When several masks sit on one layer, the modes that combine them go by a different name: mask modes.

- Stepping through the available modes for the selected layers is done by holding Shift and tapping either - (hyphen) or = (equal sign) on the main keyboard. It's a quick route to previewing how each mode looks.

- Assigning a mode to the selected layers happens either through the menu in the Timeline panel's Mode column or by way of the Layer > Blending Mode menu.

- Revealing the Modes column in the Timeline panel takes one of two routes: pick Columns > Modes from the panel menu, or click the Expand or Collapse The Transfer Controls pane button at the Timeline panel's lower-left corner.

Note

Certain effects ship with blending-mode options of their own. Reading through the write-ups for individual effects will turn up options like these.

## Blending modes

Three terms recur throughout the descriptions that follow:

- Source color refers to the color belonging to the layer or paint stroke that carries the blending mode.
- Underlying color refers to the color produced by the composited layers sitting beneath that source layer or paint stroke, according to the stacking order in the Timeline panel.
- Result color refers to whatever the blend produces — the color of the resulting composite.

Every mode covered here works for blending one layer against another. A subset of them also applies to paint strokes, layer styles, and effects.

Should you want the underlying concepts and algorithms as Adobe has implemented these modes across several of its applications, consult section 7.2.4 of version 1.7 of the PDF reference on the Adobe website.

Eight groupings organize the blending-mode menu, each grouping reflecting how similar the modes' results are. You won't see these group names anywhere in the interface — dividing lines in the menu are all that set the categories apart.

Normal category

This holds Normal, Dissolve, and Dancing Dissolve. A pixel's result color stays independent of the underlying pixel's color, the one exception being when the source layer's Opacity drops below 100%. With the Dissolve modes, a portion of the source layer's pixels are rendered transparent.

Subtractive category

Here you'll find Darken, Multiply, Color Burn, Classic Color Burn, Linear Burn, and Darker Color. The general effect of these modes is to darken, and several do so by combining colors much as blending colored pigments in paint would.

Additive category

This grouping covers Add, Lighten, Screen, Color Dodge, Classic Color Dodge, Linear Dodge, and Lighter Color. Their general effect is to lighten, and a number of them combine colors the way mixing projected light does.

Complex category

Included here are Overlay, Soft Light, Hard Light, Linear Light, Vivid Light, Pin Light, and Hard Mix. What each of these modes does to the source and underlying colors changes according to whether either color sits above or below 50% gray.

Difference category

This holds Difference, Classic Difference, Exclusion, Subtract, and Divide. Each derives its colors from how far apart the source color's values and the underlying color's values are.

HSL category

Hue, Saturation, Color, and Luminosity belong here. These modes carry over one or more pieces of a color's HSL makeup — hue, saturation, and luminosity — from the underlying color into the result.

Matte category

This grouping contains Stencil Alpha, Stencil Luma, Silhouette Alpha, and Silhouette Luma. In effect, each turns the source layer into a matte governing all the layers below it.

A stencil or silhouette mode draws on either a layer's alpha channel or its luma values to act on the alpha channel of every layer underneath. That's unlike a track matte, whose reach is limited to a single layer. Because stencil modes cut clear through all layers, you might, for instance, reveal several layers through the stencil layer's alpha channel. Silhouette modes instead mask out every layer beneath the one carrying the mode, letting you punch a single hole through many layers at once. Should you want to stop the silhouette and stencil modes from cutting or blocking everything below, precompose the layers meant to be affected and nest them within your composition.

Stencil reveals every layer beneath the stencil layer through the shape of that stencil layer's alpha channel.

Silhouette punches a hole through all the layers sitting below the silhouette layer.

Utility category

The two here are Alpha Add and Luminescent Premul. Both handle specialized utility jobs.

## Blending mode descriptions

Note

A few of the color values cited in the descriptions below are expressed on the 0.0-1.0 scale running from black to white.

Normal

Here the result color equals the source color, and the underlying color is disregarded entirely. Normal is the mode applied by default.

Dissolve

For any pixel, the result color comes out as either the source color or the underlying color. Which one wins is a matter of probability tied to the source's opacity. At 100% source opacity the result is the source color; at 0% it's the underlying color. Neither Dissolve nor Dancing Dissolve functions on 3D layers.

Dancing Dissolve

This behaves like Dissolve, with one twist: the probability function gets recomputed every frame, so the outcome shifts as time passes.

Darken

For each channel, the result takes whichever is lower — that is, darker — between the source color channel value and its matching underlying color channel value.

Multiply

Channel by channel, this multiplies the source color value against the underlying color value, then divides by the maximum value for 8-bpc, 16-bpc, or 32-bpc pixels according to the project's color depth. You'll never get a result brighter than the original. A black input on either side yields black; a white input on either side hands back the other input color. The mode mimics drawing with several marking pens on paper, or stacking several gels in front of a light. Blend with anything other than black or white and each layer or paint stroke carrying this mode pushes toward a darker color.

Color Burn

By raising contrast, this darkens the source color so it picks up the underlying layer's color. Where the original layer is pure white, the underlying color is left as is.

Classic Color Burn

This is the Color Burn from After Effects 5.0 and earlier under a new name. Reach for it when you need older projects to stay compatible; otherwise Color Burn is the one to use.

Linear Burn

This darkens the source color so it reflects the underlying color. Pure white leaves things unchanged.

Darker Color

Every result pixel ends up darker than both the source color value and its matching underlying color value. It resembles Darken, except Darker Color doesn't work channel by channel.

Add

Each result channel value is the source and underlying color channel values summed together. The result is never darker than either of the inputs.

Lighten

For each channel, the result takes whichever is higher — that is, lighter — of the source color channel value and its matching underlying color channel value.

Screen

This multiplies the channel values' complements and then complements that result. The outcome is never darker than either input color. Working with Screen is much like casting several photographic slides onto one screen at the same time.

Color Dodge

By lowering contrast, this lightens the source color so it reflects the underlying layer's color. A pure black source color yields the underlying color as the result.

Classic Color Dodge

This is the Color Dodge from After Effects 5.0 and earlier, given a new name. Use it where older projects must stay compatible; otherwise go with Color Dodge.

Linear Dodge

By boosting brightness, this lightens the source color so it reflects the underlying color. Where the source color is pure black, the result is the underlying color.

Lighter Color

Each result pixel takes whichever is lighter between the source color value and its matching underlying color value. It's akin to Lighten, but Lighter Color doesn't act on individual channels.

Overlay

Depending on whether the underlying color falls above or below 50% gray, this either multiplies or screens the input channel values. Highlights and shadows in the underlying layer are kept intact.

Soft Light

Guided by the source color, this brightens or darkens the underlying layer's channel values, much as a softened spotlight aimed at that underlying layer would. Channel by channel: a source color above 50% gray lightens the result, as though dodged, while a source color below 50% gray darkens it, as though burned. Pure black or pure white in a layer turns it distinctly darker or lighter without ever reaching true black or white.

Hard Light

Keyed to the original source color, this multiplies or screens the input channel value — the look is that of a harsh spotlight trained on the layer. For each channel value, an underlying color above 50% gray lightens the layer as if screened, and an underlying color below 50% gray darkens it as if multiplied. It comes in handy for faking shadows on a layer.

Linear Light

Working from the underlying color, this dodges or burns by raising or lowering brightness. An underlying color above 50% gray brightens the layer, since brightness goes up; an underlying color below 50% gray darkens it, since brightness comes down.

Vivid Light

Working from the underlying color, this dodges or burns by raising or lowering contrast. An underlying color above 50% gray brightens the layer, since contrast drops; an underlying color below 50% gray darkens it, since contrast climbs.

Pin Light

Working from the underlying color, this swaps colors out. Where the underlying color sits above 50% gray, pixels darker than it are swapped while pixels lighter than it hold steady. Where the underlying color sits below 50% gray, pixels lighter than it are swapped while pixels darker than it hold steady.

Hard Mix

This sharpens the contrast of whatever underlying layer shows through beneath a mask on the source layer. How large that contrasted region is comes from the mask size, and where its center lands comes from the inverted source layer.

Difference

Channel by channel, this takes away the darker of the two inputs from the lighter. Painting in white flips the backdrop color; painting in black changes nothing.

Note

When two layers share an identical visual element you're trying to align, stack one over the other and switch the upper layer's mode to Difference. From there, nudge either layer until the pixels of the element you're matching all read black — zero difference between them, which means the elements sit perfectly one atop the other.

Classic Difference

This is the Difference from After Effects 5.0 and earlier, renamed. Use it to keep older projects compatible; otherwise Difference is the choice.

Exclusion

The result resembles Difference but carries less contrast. A white source color gives back the underlying color's complement; a black source color gives back the underlying color itself.

Subtract

This removes the source color from the underlying color. With a black source color, the result is the underlying color. In 32-bpc projects, result color values may fall below 0.

Divide

This divides the underlying color by the source color. With a white source color, the result is the underlying color. In 32-bpc projects, result color values may exceed 1.0.

Hue

The result keeps the underlying color's luminosity and saturation while taking the source color's hue.

Saturation

The result keeps the underlying color's luminosity and hue while taking the source color's saturation.

Color

The result keeps the underlying color's luminosity while taking the source color's hue and saturation. Gray levels in the underlying color are preserved by this mode, which makes it handy for coloring grayscale images and for tinting color ones.

Luminosity

The result keeps the underlying color's hue and saturation while taking the source color's luminosity. This is Color's inverse.

Stencil Alpha

This builds a stencil out of the layer's alpha channel.

Stencil Luma

This builds a stencil out of the layer's luma values. Brighter pixels in the layer end up more opaque than darker ones.

Silhouette Alpha

This builds a silhouette out of the layer's alpha channel.

Silhouette Luma

This builds a silhouette out of the layer's luma values. Painted regions of the layer become transparent, exposing the layers or background beneath. Opacity in the result is set by the blend color's luminance value: brighter source pixels produce more transparency than darker ones. Painting in pure white yields 0% opacity, while painting in pure black changes nothing.

Alpha Add

Layers composite as usual, but complementary alpha channels are added to produce one continuous transparent region. It's useful for erasing visible edges where two alpha channels are inverted relative to each other, or along the alpha-channel edges of two abutting layers undergoing animation.

Note

Seams can sometimes show up between layers butted edge-to-edge. The problem shows up especially with 3D layers joined at their edges to assemble a 3D object. Anti-aliasing a layer's edges leaves a bit of partial transparency there. Overlap two regions of 50% transparency and you don't land on 100% opacity but on 75%, because multiplication is the default behavior. (Half the light passes through the first layer, then half of what's left passes through the next, so a quarter makes it through overall.) That mirrors how partial transparency behaves in the real world. There are times, though, when this default isn't what you want — you'd rather have the two 50% opacity regions merge into a seamless, opaque join, with the alpha values summed. For those situations, turn to the Alpha Add blending mode.

Luminescent Premul

This keeps color values that run past the alpha channel value after compositing from clipping, folding them back into the composition instead. It's useful when compositing rendered lens or light effects — lens flare, say — from footage carrying premultiplied alpha channels. Footage from other vendors' matting software may also come out better this way. When you apply the mode, reinterpreting the premultiplied-alpha source footage as straight alpha often gives the best results.

## GPU support for 32-bpc blend modes

On the GPU, After Effects handles 32-bpc blend modes whenever motion blur is applied to your layer. With that in place, the following eight can be sent to your GPU for 32-bpc blending:

- Screen
- Multiply
- Add
- Overlay
- Hard Light
- Classic Difference
- Lighten
- Darken

## Layer styles

A range of layer styles ships with Adobe Photoshop — shadows, glows, bevels, and more — each reshaping how a layer looks. Bring Photoshop layers into After Effects and those styles can carry over intact. You're also free to add layer styles inside After Effects and animate the properties they expose.

Note

Any layer style can be copied and pasted within After Effects, layer styles that arrived in imported PSD files included.

Beyond the styles that introduce visual elements — a drop shadow or a color overlay, for instance — every layer's Layer Styles property group holds a Blending Options property group. Those Blending Options settings hand you strong, flexible command over how blending happens.

Photoshop labels layer styles as effects, but in After Effects they act much more like blending modes. Whereas effects come before transformations, layer styles follow them in the standard render order. They differ another way too: a layer style blends straight into the underlying layers of the composition, while an effect renders onto the layer it's applied to, and that result then meets the underlying layers as a single unit.

Importing a Photoshop file with its layers intact as a composition lets you either hold onto editable layer styles or fold the styles into footage. Import just one layer that carries layer styles and your choices are to skip the styles or fold them into footage. Whenever you like, you can turn merged layer styles back into editable ones for any After Effects layer built on a Photoshop footage item.

While After Effects can hold onto every layer style in imported Photoshop files, only some layer styles and controls can actually be added or edited from within After Effects.

Note

For the specifics of each layer style and its properties, see Photoshop Help.

## Layer styles that you can apply and edit in After Effects

Applying layer styles in After Effects works much the way it does in Adobe Photoshop.

Much as in Adobe Photoshop, After Effects lets you apply layer styles.

Drop Shadow

Places a shadow behind the layer.

Inner Shadow

Drops a shadow inside the layer's contents, lending the layer a sunken look.

Outer Glow

Casts a glow spreading outward from the layer's contents.

Inner Glow

Casts a glow spreading inward from the layer's contents.

Bevel And Emboss

Layers on assorted mixes of highlights and shadows.

Note

Where you'd want, say, separate blending modes on a bevel's highlights versus its shadows, reach for the Bevel And Emboss layer style instead of the Bevel Alpha effect.

Satin

Lays down interior shading for a satiny finish.

Color Overlay

Floods the layer's contents with a color.

Gradient Overlay

Floods the layer's contents with a gradient.

Stroke

Traces an outline around the layer's contents.

## Add, remove, and convert layer styles

- Turning merged layer styles into editable ones: pick one or more layers, then choose Layer > Layer Styles > Convert To Editable Styles.
- Adding a layer style to the selected layers: choose Layer > Layer Styles and pick a style from the menu.
- Removing a single layer style: select it in the Timeline panel and press Delete.
- Removing every layer style from the selected layers: choose Layer > Layer Styles > Remove All.

Apply a layer style to a vector layer — text, a shape, or a layer built on an Illustrator footage item — and the visual elements meant for the edges of the layer's contents instead follow the outlines of the vector objects, the text characters or shapes themselves. Apply that same style to a layer built on a non-vector footage item and it works against the edges of the layer's bounds or masks.

A 3D layer can carry a layer style, but once it does, it can no longer intersect other 3D layers or take part in casting and receiving shadows with them. Likewise, 3D layers flanking a layer that has a style applied can't intersect each other or cast shadows on each other.

Run the Layer > Convert To Editable Text command on a text layer that came from a Photoshop file and any layer styles riding on that layer become editable layer styles too.

## Layer style settings

In the Timeline panel, every layer style carries its own set of properties.

Reach for the Bevel and Emboss layer style properties when you want to give layers depth and texture and build out a broad range of styles.

The Bevel and Emboss layer style properties let you add depth and texture to layers, opening up a wide variety of styles.

Align With Layer

Calculates the gradient fill from the layer's bounding box.

Altitude

On the Bevel And Emboss layer style, sets how high the light source sits above the layer, measured in degrees.

Choke

Pulls in the matte boundaries of an Inner Shadow or Inner Glow ahead of the blur.

Distance

For a Shadow or Satin layer style, this is how far the effect is offset.

Highlight Mode, Shadow Mode

Sets the blending mode used by a bevel or emboss highlight or shadow.

Jitter

Introduces variation into a gradient's colors and opacity, which cuts down on banding.

Reverse

Flips a gradient's orientation.

Scale

Resizes the gradient.

Spread

Pushes out the matte boundaries ahead of the blur.

Use Global Light

Switch this to On so the Global Light Angle and Global Light Altitude in the Blending Options property group take over from each layer style's own Angle and Altitude settings. It helps when several layer styles share one layer and you want to animate the light's position across all of them at once.

## Blending options for layer styles

Every layer style carries its own blending mode that decides how it meets the underlying layers. Whether that underlying layer takes in the very layer the style is applied to depends on the case. Take a drop shadow: it doesn't blend with its own layer, since the shadow sits behind it — but an inner shadow does blend with the layer it's applied to.

Layer styles sort into two kinds: interior and exterior. Interior styles act on the opaque pixels of the layer they belong to; this group takes in Inner Glow, Inner Shadow, Color Overlay, Gradient Overlay, Satin, and Bevel And Emboss. Exterior styles leave their own layer's pixels alone and engage only the underlying layers; Outer Glow and Drop Shadow fall here.

Switch Blend Interior Styles As Group to On and the interior layer styles adopt the layer's blending mode.

Change a layer's Opacity property and you shift the opacity of the layer's contents along with all its layer styles. Change the Fill Opacity property in the Blending Options property group instead and the layer styles' opacity stays put. So with the Drop Shadow style on a text layer, dropping Fill Opacity to 0 makes the text vanish while the drop shadow stays on screen.

Turn to the Blend Ranges From Source option when you want the advanced blending options saved in the Photoshop file — the ones that decide which blending operations to run based on the input layer's color characteristics — to take effect.

## Blend snapshots in Composition, Layer, and Footage panels with base image

Snapshots in the Composition, Layer, and Footage panels can be blended against the base image by way of the Classic Difference blending mode. To do it, hold the Option (macOS) or Alt (Windows) key as you click the Show Snapshot button.

## Exclude channels from blending

Any of a layer's color channels can be left out of blending operations.

Note

A layer only gets the Blending Options property group once a layer style has been added to it. Want that property group without keeping a style? Add any layer style, then delete it right away — the Blending Options property group, along with the Layer Styles property group that holds it, stays behind.

In the Timeline panel, open the Blending Options property group for the layer inside its Layer Styles property group.

To drop a channel from blending, switch Red, Green, or Blue to Off within the Advanced Blending property group.

Because these properties are animatable, you can leave a channel out of blending at certain points and bring it back at others.

### More like this

- Alpha channels and masks
- Selecting and arranging layers
- Preparing and importing still images
- Precomposing, nesting, and pre-rendering
