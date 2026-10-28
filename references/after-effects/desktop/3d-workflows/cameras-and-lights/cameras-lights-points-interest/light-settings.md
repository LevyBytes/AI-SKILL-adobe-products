# Light settings

Light Type

Parallel throws directional light without bounds from a source infinitely far off, much like sunlight. Spot confines its light within a cone, as a flashlight or a stage spotlight does. Point sends out omnidirectional light in every direction without constraint, like a bare bulb's rays. Ambient supplies light that has no origin point but raises a scene's overall brightness and throws no shadows. Environment builds lifelike lighting, reflections, and shadows from an image-based environment map.

Note

Since an Ambient light's location in space has no bearing on how it affects other layers, no icon represents it in the Composition panel.

Color

Which color the light gives off.

Intensity

How bright the light shines. Drop below zero and you get nonlight, which pulls color out of a layer. For instance, aim a directional light carrying negative values at a layer that is already lit and an area of that layer goes darker.

Cone Angle

The spread of the cone around a light's source, which fixes how wide the beam grows over distance. This control comes alive only when Light Type is set to Spot. In the Composition panel, the light icon's shape signals a spot light's cone angle.

Note

From After Effects CS6 onward, a chosen spot light's cone can reach all the way to its point of interest.

Cone Feather

How soft a spotlight's edges look. It does nothing unless Light Type is set to Spot.

Falloff

Which falloff style applies to a parallel, spot, or point light. Falloff is the way a light loses intensity the farther it travels.

The available falloff types are:

- None: Brightness holds steady no matter how far the layer sits from the light.
- Smooth: Gives an even linear falloff that begins at the Falloff Start radius and runs for the span set by Falloff Distance.
- Inverse Square Clampe: Gives a physically faithful falloff that begins at the Falloff Start radius and drops in proportion to the inverse square of the distance away.

Radius

Sets how far a light's falloff reaches. Within this range the light stays steady; past it the light begins to drop off.

Falloff Distance

Sets the span over which a light falls off from a light.

Casts Shadows

Controls whether the light makes a layer throw a shadow. For a layer to take a shadow, its Accepts Shadows material option has to be On, which is how it ships. For a layer to throw shadows, its Casts Shadows material option has to be On, and that one is not the default.

Note

Hit Alt+Shift+C (Windows) or Option+Shift+C (macOS) to flip Casts Shadows on or off for the layers you've selected. With AA tapped, the Timeline panel surfaces the Material Options properties.

Shadow Darkness

How dark the shadow comes out. This control is active only if Cast Shadows is selected.

Shadow Diffusion

Governs a shadow's softness according to how far it seems to sit from the layer casting it. Bigger numbers yield softer shadows. This control is active only if Casts Shadows is selected.
