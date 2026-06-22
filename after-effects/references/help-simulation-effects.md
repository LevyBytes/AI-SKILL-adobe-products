# Simulation Effects (part 1)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Jun 26, 2025

After Effects bundles the following third-party effects in this category:

CC Ball Action effect

CC Bubbles effect

CC Drizzle effect

CC Hair effect

CC Mr. Mercury effect

CC Particle Systems II effect

CC Particle World effect

CC Pixel Polly effect

CC Rainfall effect

CC Scatterize effect

CC Snowfall effect

CC Star Burst effect

Note

CC Rainfall and CC Snowfall are the updated counterparts; the older CC Rain and CC Snow effects are now obsolete.

Tip

Take a look at every third-party plug-in that ships with After Effects.

## Common Lighting controls and Material controls

A handful of the Simulation effects share a set of controls. Likewise, the Card Wipe effect draws on many of the same controls as the Card Dance effect.

## Lighting controls

Light Type

Picks the kind of light in play. Distant Source mimics sunlight, throwing shadows a single direction because every ray meets the object from essentially one angle. Point Source behaves like a light bulb, sending shadows outward in every direction. First Comp Light pulls from the composition's first light layer, which itself can carry an assortment of settings.

Light Intensity

Sets how strong the light is. Raise the value and the layer grows brighter. Keep in mind the remaining lighting settings also feed into the total intensity.

Light Color

Sets the light's color.

Light Position

Sets where the light sits in x,y space. For hands-on placement, Alt-drag (Windows) or Option-drag (macOS) the light's effect point.

Light Depth

Sets where the light sits along z. Negative values push the light behind the layer.

Ambient Light

Spreads light across the whole layer. Raising it lays an even wash of illumination over every object and keeps shadows from going fully black. Push Ambient Light to pure white while zeroing every other light control, and the object reads as fully lit with no 3D shading left in the scene.

## Material controls

Reflection values come from the Material controls.

Diffuse Reflection

Supplies the shading that gives an object its form. How that shading falls depends on the angle the light hits the surface, and it pays no attention to where the viewer stands.

Specular Reflection

Factors in the viewer's vantage point, mapping how the light source bounces back toward them. The result can read as shininess. To pull off convincing effects, animate this control with progressively larger values, hiding the shift between the filtered and unfiltered states of the layer.

Highlight Sharpness

Governs how shiny the surface looks. Glossy surfaces throw small, tight reflections; flatter ones smear the highlight across a wider area. Since specular highlights take on the color of the incoming light — usually white or near-white — wide highlights can wash color out of an image by piling white onto the surface tone.

Note

A reliable order for dialing in lighting goes like this: start with Light Position and Diffuse Reflection to fix the scene's overall brightness and shading. Move on to Specular Reflection and Highlight Sharpness to set how intense and broad the highlights are. Close out with Ambient Light to lift the shadows.

## Card Dance effect

Note

For the properties that several Simulation effects have in common, see Common Lighting controls and Material controls.

What this effect does is slice a layer into a host of individual cards and then drive every geometric trait of those cards from a second layer, producing card-choreography visuals. Card Dance can, for instance, conjure an extruded pin sculpture, a crowd performing the wave, or letters drifting across a pond's surface.

Color support for this effect is 8-bpc.

Original (upper-left), and with rotation adjusted using Camera Position controls (lower-left) and Corner Pin controls (lower-right)

Original (upper-left), and with rotation adjusted using Camera Position controls (lower-left) and Corner Pin controls (lower-right) Original (left), gradient layer (center), and with Card Dance applied (right)

Original (left), gradient layer (center), and with Card Dance applied (right)

Put Card Dance on whichever layer you want fronting the cards. Establish the viewpoint through the rotation or perspective controls, or corner-pin to line the effect up with the perspective of any given scene.

As an illustration, choose a vertical grayscale gradient layer (black at the top, white at the bottom) under Gradient Layer 1, then pick Intensity 1 from the X Rotation Source menu. Card Dance reads that gradient's intensity to drive each card's rotation about the x-axis. Each card's center pixel on the gradient layer earns a numeric value tied to its intensity, where pure white maps to 1, pure black to –1, and 50% gray to 0. That value is then scaled by the X Rotation Multiplier and each card turns by the result. Set X Rotation Multiplier to 90 and the top-row cards tip nearly 90° backward while the bottom-row cards tip nearly 90° forward, with the middle rows turning proportionally less. Cards landing in the 50% gray zone stay put.

Say you want one half of a layer's cards entering from the right and the other half from the left: build a gradient layer that's half black, half white. Make that gradient the X Position source, set X Position Multiplier to 5, and animate it down to 0. Cards over the black region start out at the left, and cards over the white region start out at the right.

## Rows, Columns, Layer, and Order controls

Rows & Columns

Sets how the row and column counts relate. Independent keeps both the Rows and Columns sliders live. Columns Follows Rows leaves only the Rows slider live; pick it and the column count always matches the row count.

Rows

How many rows, up to 1000.

Columns

How many columns, up to 1000 — except when Columns Follows Rows is on.

Note

Because rows and columns always spread evenly across a layer, you won't see oddly shaped rectangular tiles creeping in along a layer's edges, unless an alpha channel comes into play.

Back Layer

The layer whose segments show on the card backs. Any layer in the composition works, and its Video switch can even be off. Should that layer carry effects or masks, precompose it first.

Gradient Layer 1

The first control layer that drives the card choreography. Any layer is fair game, though grayscale layers give the most predictable outcome. To animate the cards, this gradient layer functions like a displacement map.

Gradient Layer 2

The second control layer.

Rotation Order

When more than one axis is in use, this sets the sequence in which the cards rotate around those axes.

Transformation Order

The sequence in which the scale, rotation, and position transformations get applied.

## Position, Rotation, and Scale controls

Position (X, Y, Z), Rotation (X, Y, Z), and Scale (X, Y) set which transformation properties you adjust. Since Card Dance is a 3D effect, each of these can be steered independently per card axis. Yet the cards stay 2D at heart, so they carry no depth of their own — which is why z scaling isn't offered.

Source

Sets which gradient layer channel steers the transformation. As an example, pick Intensity 2 to pull the intensity from Gradient Layer 2.

Multiplier

How much transformation the cards receive.

Offset

The starting value the transformation builds from. It gets added onto the transformation value (a card's center-pixel value times the Multiplier) so you can launch the transformation from somewhere other than 0.

## Camera System and Camera Position controls

Camera System

Sets whether the cards' 3D rendering relies on the effect's Camera Position properties, its Corner Pins properties, or the composition's default camera and light placement.

X Rotation, Y Rotation, Z Rotation

Spin the camera about the matching axis. Reach for these to view the cards from above, the side, behind, or any angle you choose.

X, Y Position

The camera's placement along the x and y axes.

Z Position

The camera's placement along the z axis. Lower values bring the camera in toward the cards; higher values pull it back.

Focal Length

The zoom factor. Lower values zoom in.

Transform Order

The sequence in which the camera turns about its three axes, plus whether that rotation happens before or after the camera is placed via the other Camera Position controls.

## Corner Pins controls

A second way to control the camera is Corner Pinning. Lean on it when you're compositing the effect's output into a scene onto a flat surface that tilts relative to the frame.

Upper Left Corner, Upper Right Corner, Lower Left Corner, Lower Right Corner

Where each corner of the layer gets pinned.

Auto Focal Length

Steers the effect's perspective as the animation plays. With Auto Focal Length off, the focal length you enter is used to work out a camera position and orientation that drop the layer's corners onto the corner pins; if that can't be done, the layer collapses to its outline drawn between the pins. With Auto Focal Length on, the focal length needed to meet the corner points is used when achievable, and otherwise the right value is interpolated from neighboring frames.

Focal Length

Overrides everything else when the results you're getting miss the mark. Enter a Focal Length that doesn't fit what it would actually be were the pins truly in that arrangement, and the image can turn out odd — strangely sheared, say. But when you already know the focal length you're aiming to match, setting Focal Length by hand is the simplest route to a correct result.

## Caustics effect

Note

For the properties that several Simulation effects have in common, consult Common Lighting and Material controls.

Picture the bright ripples of light dancing across the floor of a pool: that is what this effect imitates. Such patterns arise when light bends as it passes through a water surface and lands below. Caustics produces those patterns, and paired with Wave World and Radio Waves it yields convincing water surfaces.

Note

Any masks or alpha channels on the layer Caustics is applied to are disregarded by the effect. Two routes get around this, and which you pick depends on the outcome you're after: precompose the layer carrying the effect and put the mask on the precomposition layer, or precompose the layer carrying the mask and put the effect on the precomposition layer. Further detail lives in the material on precomposing, nesting, and pre-rendering in After Effects.

This effect works with 8-bpc color.

Original (upper-left), and with Bottom set to the text layer (lower-left) and Water Surface set to the whirl layer with Surface Opacity set to 0% (lower-right)

Original (upper-left), and with Bottom set to the text layer (lower-left) and Water Surface set to the whirl layer with Surface Opacity set to 0% (lower-right) Note

The most lifelike Caustics come from a two-pass workflow. First, render the Bottom layer on its own with Render Caustics enabled and Surface Opacity at 0. Next, precompose that result and feed it as the Bottom layer into a second Caustics effect, this time with Render Caustics off. Working this way lets you shift, resize, or otherwise adjust the Bottom layer inside the precomposed composition, which fakes lighting arriving from an angle rather than directly above.

## Bottom controls

How the floor of the water reads on screen is governed by the Bottom controls:

Bottom

Picks which layer sits at the floor of the water. Whatever image you assign here is the one the effect warps, except when Surface Opacity reaches 100%.

Scaling

Resizes the bottom layer up or down. Should the edges of that layer become visible as the waves refract light, enlarge it. Shrinking it instead lets you tile a layer into an intricate pattern.

Repeat Mode

Determines the tiling behavior for a bottom layer you've scaled down. With Once, a single tile is used and tiling is effectively switched off. Tiles follows the conventional approach, butting the right edge of one bottom-layer tile against the left edge of the next; pick it when the bottom layer holds a repeating motif, such as a logo, that has to read in a particular way. Reflected joins every tile edge to a mirrored duplicate of the tile, which can remove the harsh seam where two tiles abut.

If Layer Size Differs

Governs what happens to the bottom layer when its dimensions fall short of the composition.

Blur

Controls how much blur lands on the bottom layer. Drop this to 0 for a crisp bottom. Raise it and the bottom grows fuzzier, an effect that intensifies wherever the water runs deeper.

## Water controls

Water Surface

Names the layer that stands in for the water's surface. To build a 3D surface, Caustics reads that layer's luminance as a height map — bright pixels ride high, dark pixels sink low. A layer made with the Wave World or Radio Waves effect works here; precompose it first before handing it to Caustics.

Wave Height

Tunes how tall the waves stand relative to one another. Crank it up and the waves steepen while the surface shifts more dramatically; ease it down and the Caustics surface flattens out.

Smoothing

Rounds off the waves by blurring the water surface layer. Push it high to wipe out detail; keep it low and the flaws in the water surface layer remain on view.

Water Depth

Sets the depth. The same small ripple barely bends the view of the bottom in shallow water, yet warps it severely once the water is deep.

Refractive Index

Governs how sharply light bends on its way through the liquid. At 1, the bottom shows no distortion. Water is faithfully reproduced at the default of 1.2. Push the value higher to add distortion.

Surface Color

Sets the water's color.

Surface Opacity

Decides how clearly the bottom layer shows through the water. For a cloudy look, raise both Surface Opacity and Light Intensity; at 0 the liquid reads as clear.

Note

Push Surface Opacity to 1.0 for a flawless mirror of a sky layer. Pair that with the right texture map and you can conjure the look of liquid mercury.

Caustics Strength

Renders the caustics themselves — the pools of light gathered on the bottom by the lensing of the waves. Flipping this on transforms the whole look: the wave troughs deepen sharply while the crests brighten well beyond before. Leave it unset and the effect still bends the bottom layer as waves roll across, but skips rendering the lighting.

## Sky controls

Sky

Names the layer overhead. Scaling enlarges or shrinks that sky layer; enlarge it whenever the layer's edges come into view. Shrinking it instead suits tiling a layer into an intricate pattern.

Repeat Mode

Determines the tiling behavior for a sky layer you've scaled down. With Once, a single tile is used and tiling is effectively off. Tiles uses the conventional method, butting one layer tile's right edge against the next tile's left edge; pick it when the layer carries a repeating motif, such as a logo, that must read a certain way. Reflected joins each tile edge to a mirrored duplicate of the tile, removing the harsh seam where tiles meet.

If Layer Size Differs

Governs the layer's treatment when its dimensions fall short of the composition. Intensity fixes how opaque the sky layer is. Convergence dictates how near the sky sits to the bottom or water layer, which in turn sets how far the waves warp the sky.

## Foam effect

Bubbles that drift, stick, and burst are what this effect produces. Its controls let you dial in bubble traits such as stickiness, viscosity, life span, and strength. You decide precisely how the foam particles react to one another and to their surroundings, and you can name a separate layer as a map that pins down exactly where the foam travels. As an example, the particles might stream around a logo or pack a logo full of bubbles.

This effect works with 8-bpc color.

Original (upper-left), with Foam applied (lower-left), and with a robot layer used as the Bubble Texture Layer (lower-right)

Original (upper-left), with Foam applied (lower-left), and with a robot layer used as the Bubble Texture Layer (lower-right)

Any picture or movie can stand in for the bubbles, too. You might, for instance, build swarms of ants, flocks of birds, or crowds of people.

Note

Frame by frame, Foam is quick to render, yet a tiny tweak to the starting settings can send the simulation off in a wildly different direction a few seconds in. Because every change to the Physics controls forces the simulation to recompute from frame one, the deeper into the simulation you are, the longer those changes take to render. Not every frame is this slow, though — rendering picks back up once Foam settles into the change.

## View controls

Draft

Shows the bubbles without rendering them in full. Draft mode gives you a quick look at how the bubbles behave. Nothing else lets you preview the edges of the universe, how the Flow Map lines up, or the Producer's placement, angle, and dimensions. Bubbles show as blue ellipses. The Producer Point reads as a red ellipse. A red rectangle stands for the bubble universe.

Draft + Flow Map

Lays the Draft view wireframe over a grayscale rendering of the flow map, when one is selected.

Rendered

Shows the animation's finished output.

## Producer controls

Where bubbles spring from, and how fast they keep coming, are handled by the Producer controls:

Producer Point

Marks the middle of the zone capable of spawning bubbles.

Producer X Size, Producer Y Size

Set how wide and how tall the bubble-spawning zone is.

Producer Orientation

Rotates that bubble-spawning zone. When Producer X Size and Producer Y Size match, turning the orientation makes no visible difference.

Zoom Producer Point

Decides whether the producer point and every keyframe tied to it stay anchored to the universe (selected) or to the screen (unselected) as you zoom. Say you park Producer Point at the layer's upper-left corner and then zoom out: leave this unselected and the producer point clings to the upper-left of the screen. Select it instead and the point rides along with the universe during the zoom, finishing nearer the center of the screen.

Production Rate

Governs how fast bubbles spawn. It doesn't dictate a per-frame bubble count; rather, it's the typical number of bubbles spawned each 30th of a second. Raise the number for more bubbles.

Note

Pack too many bubbles into one spot at one moment and some are apt to burst. When you're after heavy foam, raise Producer X Size and Producer Y Size so the bubbles aren't popping one another the instant they appear.

## Bubbles controls

Size

Fixes the typical size of mature bubbles. Size Variance, Bubble Growth Speed, and Random Seed also sway how big any given bubble is on a given frame.

Size Variance

Sets the spread of possible bubble sizes. Treating the Size value as the midpoint, this control builds bubbles both smaller and larger than that midpoint across the range you enter. With the default Size of 0.5 and the default Size Variance of 0.5, for instance, sizes span 0 to 1 (0.5 –.5 = 0 and 0.5 + 0.5 = 1).

Lifespan

Caps how long a bubble may live. The figure isn't rigid — were it rigid, every bubble would burst at the identical age, as though slamming into a wall. Treat it instead as a goal lifespan: some bubbles burst early while others hang on to the very end.

Bubble Growth Speed

Sets how quickly a bubble swells to full size. A bubble usually emerges fairly small from the producer point. Set this too high alongside a small producer area and the bubbles burst one another, leaving fewer bubbles than you'd expect.

Strength

Sways how prone a bubble is to bursting before it hits its Lifespan ceiling. Lower a bubble's Strength and it's likelier to burst early once forces such as wind and flow maps press on it. Soap bubbles call for low values. For flocking animations, the top value is the recommendation.

## Physics controls

How the bubbles move and act is set by the Physics controls:

Initial Speed

Fixes how fast a bubble travels the moment the producer point emits it. The remaining Physics parameters then act on that speed.

Note

Combine low Initial Speed values with the default producer size and you'll barely notice a difference, since the bubbles ricochet off one another. Widen Producer X Size and Producer Y Size for finer command over initial speed.

Initial Direction

Fixes which way a bubble heads as it leaves the producer point. Neighboring bubbles and the other Physics controls bend that direction too.

Wind Speed

Fixes how fast the wind blows the bubbles along the heading set by Wind Direction.

Wind Direction

Fixes which way the bubbles drift. Keyframe this control to build gusty, turbulent wind. The wind only acts on bubbles once Wind Speed climbs above 0.

Turbulence

Nudges the bubbles with tiny random forces so they move erratically.

Wobble Amount

Distorts bubbles at random from flawless circles into the more lifelike oval shape.

Repulsion

Dictates whether bubbles rebound off, adhere to, or slip through one another. Set to 0, bubbles never collide and simply pass through. Raise Repulsion and colliding bubbles grow likelier to react to one another.

Pop Velocity

Dictates the knock-on effect of bursting bubbles on their neighbors. A bursting bubble can open a gap for nearby bubbles to occupy, shove them aside, or burst them outright. The higher you set it, the stronger that knock-on effect.

Viscosity

Fixes how fast bubbles slow after leaving the producer point and steers the pace of their flow. A high Viscosity builds resistance the farther bubbles drift from the producer point, dragging them slower; push it high enough and they halt. Thicker substances mean higher Viscosity. To mimic bubbles rising through oil, for instance, set Viscosity fairly high so they meet resistance as they go; to mimic bubbles floating on air, keep Viscosity fairly low.

Stickiness

Draws bubbles into clumps and shields them somewhat from other Physics controls such as Wind Direction. Higher Stickiness makes the bubbles likelier to bunch into clusters and cling together. Pair Stickiness with Viscosity to form a bubble cluster.

## Zoom and Universe Size controls

Zoom

Magnifies or pulls back around the center of the bubble universe. For oversized bubbles, raise the Zoom rather than the Size value, because large bubble sizes tend to be unstable.

Universe Size

Marks out the limits of the bubble universe. A bubble that fully exits the universe bursts and is lost for good. The universe defaults to the layer's dimensions. Push beyond 1 and the universe extends past the layer's edges — use higher values to let bubbles drift in from off-frame, or to make it possible to zoom out and pull them back into view. Drop below 1 and bubbles are clipped before they reach the layer's edge. To pen bubbles inside a given region such as a mask shape, for example, set Universe Size just a bit beyond the mask size; that clears away the surplus bubbles and quickens rendering.
