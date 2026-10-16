# Enable lights to cast shadows

Search Last updated on Jan 21, 2026

How to make Environment, Spot, and Parallel lights throw shadows across a 3D composition.

Stacking several shadow-casting lights onto a 3D scene heightens dynamic lighting and gives the environment a sense of life. Under the Advanced 3D render engine, Spot, Parallel, and Environment lights can each be told to cast shadows. That lets you stack distinct shadow types from the various supported sources. Mixing differently colored lights and shadows across your 3D layers opens the door to 3D scenes with real-world or experimental additive-color shadows.

With the latest update you can introduce as many as eight independent Spot and Parallel sources that throw shadows, plus a single Environment shadow layer, all to deepen the realism and depth of a 3D scene.

Below are a few setups in which multiple light sources of differing kinds are present, every one of them casting shadows:

A 3D scene with no lights.

Showing a Spot light set at the lower-right alongside a Parallel light on the right, each carrying its own color and shadow settings.

The same 3D scene after extra Spot and Parallel lights are aimed in assorted directions, each with its own color and shadow configuration.

An environment light dropped in and layered among the existing roster of Spot and Parallel lights.

The OBJ 3D model used can be found here.

Before you begin

Start a new composition with whatever settings you need, then build out a 3D scene by bringing in 3D models and 3D layers.

Drop in a light via Layer > New > Light.

In the Light Settings dialog box, give the light layer a name and choose Spotlight, Parallel, or Environment from the Light Type dropdown menu.

Adjust the light's Color where it helps.

3. Pick the light color to set the mood, boost realism, and draw attention to key elements.

Dial the light's intensity to the level you want, then tune these settings:

- Cone Angle: controls the width of the spotlight beam, governing how wide or tight the spotlight reads in the scene. Available only for Spot lights.
- Cone Feather: governs how soft or crisp the edges of the light cone look. Available only for Spot lights.
- Falloff: sets how the light fades with distance, chosen from None, Smooth, or Inverse Squared Clamped. Tweak the Radius and Falloff Distance for more believable lighting.

4. Raise a Spot light's Cone Feather to soften its edges, yielding a smoother handoff from light into shadow.

Select Cast Shadows to enable the light to cast shadows.

Should the lights already be in the composition, switch on shadow casting by selecting Cast Shadows among the light settings in the Timeline or Properties panel. When no shadow shows up, certain 3D layer properties may still need enabling; see step 9 for the specifics.

5. From the Timeline or Properties panel, make the light throw shadows across a 3D scene.

Tune the remaining shadow settings:

- Shadow Darkness: raise or lower it to make shadows darker or lighter.

A Spot light with Shadow Darkness set to 50%.

A Spot light with Shadow Darkness set to 100%.

- Shadow Diffusion: dial this to govern how soft or crisp the shadows read. Available only for Spot lights.

A Spot light with Shadow Diffusion set to 0 pixels.

A Spot light with Shadow Diffusion set to 100 pixels.

Crisp-edged shadows are the quickest to render. Pushing Shadow Diffusion higher yields softer shadows at the cost of longer render times.

Lean on the Render Options to lift the quality of Spot and Parallel lights via the Render Quality slider. You can also set the casting box properties along with the Resolution and Smoothness controls for Environment light, none of which touch Spot or Parallel lights.

Keep Render Quality low for interactive work such as previews or editing, and raise it for the final output as the project demands. Low-to-midrange settings frequently suffice for the final export and render faster.

As many as eight separate Spot and Parallel sources can be set to cast shadows, together with one Environment shadow layer, for nine shadow-casting sources in all.

Pack more than eight Spot or Parallel lights into a scene and only the top eight in the timeline stack will throw shadows. Those sitting lower keep lighting the scene but stop casting shadows.

So that your 3D layers can both receive and throw shadows, pick the 3D layer in the timeline. Then turn on the Accept Shadows and Cast Shadows functions through the Material Options for solid layers and the Compositing Options.

Experiment with shadow colors on the receiving layers to override whatever color the received shadow would otherwise have.

Shift the Position, Orientation, and Rotation of your lights to redirect the shadows, and keyframe each of those properties to animate them however your project requires.
