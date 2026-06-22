# Image Based Lighting, Animated Environment Lights, Enable Lights To Cast Shadows, Extract And Animate Cameras And Lights From 3D Models

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Create realistic reflections and ambient lighting in a 3D scene; Animated Environment Lights; Enable lights to cast shadows; Extract and animate lights and cameras from 3D models.

## Create realistic reflections and ambient lighting in a 3D scene

Search Last updated on Apr 2, 2025

Light a scene with any image so 3D models drop in convincingly, complete with matching illumination and shadows.

With Image-Based Lighting (IBL), an image drives the lifelike reflections and ambient light of a 3D scene. The result is gentle lighting that makes objects look at home in their surroundings. Environment Lights in After Effects wrap a scene in an image-based environment map, generating believable light, reflections, and shadows across 3D layers.

Drive lifelike reflections and ambient light across a 3D scene from a single image.

Note

For now, environment lights function exclusively under the Advanced 3D renderer.

### Add an environment light

Adding an environment light starts with Layer > New > Light, where you switch the Light Type to Environment.

Within the Light Setting dialog, open the Light Type dropdown list and choose Environment.

From the Light Type dropdown list inside the Light Setting dialog, pick Environment.

Once you pick Environment as the Light Type in Light Settings, After Effects supplies a default environment map. You can swap that for an image layer carrying an HDRI file (such as .hdr or .exr), for footage, or for a composition layer, any of which can serve as an environment light source in 3D space. EXR and HDR files stand out here, though, since they carry high dynamic range (HDR) lighting even within 8-bit projects, which makes lighting and reflections in 3D scenes more precise.

Import a .hdr or .exr file or footage into your project.

Beyond images and footage, an Environment Light can also be aimed at animated compositions or precomposed layers.

Drag the file you imported onto the Timeline panel to place it in a composition.

In the Timeline panel, twirl the Environment Light properties open.

Down in the Light Options, point the Source property at the layer holding your .hdr or .exr file, footage, or animated composition.

4. Select the layer with the HDRI file from the Source drop-down list.

Tip

- The Create 3D Environment Background Layer command drops a solid layer at the bottom of the composition; its CC Environment ties to the chosen light's Source map, and a 5px Fast Box Blur softens the backdrop.
- A 3D layer can also be kept out of the scene's lighting interactions by switching off Accepts Lights under Compositing Options.
- You can pull HDRI environment maps from places like Adobe Stock, or build your own in Substance 3D Sampler.

Picking a source layer as an environment map hides that layer's visibility, though you are free to switch it back on.

To stand the source layer in as a background scene layer, run Layer > Light > Create Environment Light Background Layer; it drops a solid beneath everything in the composition, wires the CC Environment to that light's Source map, and softens the result with a 5px Fast Box Blur.

Note

The older Layer > Environment Layer switch has no effect under the Advanced 3D renderer. It applies only to the Cinema 4D renderer.

### Convert image file to HDR file using After Effects

Although environment lights accept only HDR-format files as environment maps, After Effects makes it easy to turn other image formats into HDR.

Pull in an image with File > Import > File.

Highlight that file in the Project panel, then choose File > New Comp from Selection.

Open the Project Settings dialog box via File > Project Settings.

On the Color tab, within the Color Settings section, set Bit Depth to 32 bits per channel (float) and click OK.

Make the composition or timeline active, then go to Composition > Save Frame As > File.

Over in the Render Queue panel, click the linked text beside the Output Module option.

When the Output Module Settings dialog box opens, set Format to Radiance Sequence and click OK.

Hit Render.

### Convert image file to HDR file using Adobe Photoshop

Load the image file into Photoshop.

Head to Image > Mode > 32 Bits/Channel. (Radiance format requires 32 bits per channel.)

Run File > Save As or Save a Copy.

Set the Format to Radiance.

### Add Environment light shadows

Out of the box, the environment light throws no shadows. To get shadows, you need to add an environment light layer and switch on its Casts Shadows option. With that on, every 3D layer in the scene casts voxel shadows, apart from these cases:

- Any layer with Casts Shadows switched off.
- Any layer positioned beyond the shadow volume.
- A layer whose Receive Shadows is off won't show shadows at all, even when Casts Shadows is on and it sits within the shadow volume.

Pick the Light layer, then run Layer > Light Settings.

When the Light Settings dialog appears, tick the Cast Shadows check box and dial in the Shadow Darkness amount.

You can equally enable shadows from the Cast Shadows property in the Timeline panel. Learn more about configuring 3D layers' cast and receive shadows properties.

2. Use the Cast Shadows property in the Timeline panel to enable shadows.

Voxel shadows are heavy on memory, so you control their settings in the Renderer Options dialog. Get there through Composition Settings > 3D Renderer, or from the 3D Renderer drop-down list sitting at the foot of the Composition panel.

Adjust and manage the shadow settings within the Renderer Options dialog.

The Renderer Options dialog is where you set and govern shadow behavior.

Render Quality

Sets the all-round fidelity of what gets rendered, smoothness, lighting, and shadows alike. Pushing it higher can eat a lot of memory.

Render Quality

Determines how chunky the shadows appear. Pushing it higher can eat a lot of memory.

Smoothness

Dials the shadow noise up or down. The default is 3. Smoothness and Render Quality move inversely: a lower Render Quality calls for a higher Smoothness, and the reverse holds too.

Tip

Lean on render quality and hold Smoothness low until the non-shadow parts of the scene look right; only then nudge the smoothness up bit by bit if you must.

Casting Box Size and Casting Box Center

These properties mark out the region in which shadows may fall on a layer. To save memory, voxel shadows are emitted only from layers contained in a bounded box. Enlarging the box stretches the voxel resolution over more area, which softens the shadows. A magenta outline marks this cube in the composition whenever the Advanced 3D Render Options dialog is open.

Note

A shadow travels only from a layer that has Cast Shadows turned on onto a layer that has Accepts Shadows turned on.

### Set an object to bypass lights and shadows in your scene

Switch off Accepts Lights on a 3D layer within a 3D composition and that layer stops responding to every light source in the scene. Objects on such layers receive only basic ambient illumination, revealing nothing but their base color and emissive textures. That is handy when you want a layer to hold its original look without picking up lighting shifts, shadows, or highlights cast by other sources. The layer then reads as self-illuminated, staying consistent no matter what the surrounding lighting does.

Switching Accepts Lights off on a 3D layer keeps its look fixed, immune to other light sources or shadows.

With Accepts Lights disabled, a 3D layer holds its appearance no matter what nearby lights or shadows do.

Accepts Lights comes in handy on a 3D composition holding self-lit 3D objects such as phone screens and neon signs.

How toggling Accepts Lights on and off changes a lit lamp 3D model, shown by example.

With a 3D model selected in the composition, the Accepts Lights option can also be flipped On or Off straight from the Properties panel.

Reach for the Properties panel to get at a 3D model's compositing options fast, among them the controls that set how the model responds to existing light.

The Properties panel gives speedy access to a 3D model's compositing options, including those governing how it plays with light already in the scene. Note

The Classic 3D and Cinema 4D renderers support Accepts Lights as well.

### Scripting access to Environment layer Light Type

When a script reads the lightType property on a LightLayer object, an environment light reports back LightType.ENVIRONMENT.

### More like this

- Import and add 3D models to your composition
- Import 3D models from Creative Cloud Libraries
- Preparing and importing 3D image files
- Work in 3D Design Animation Space

## Animated Environment Lights

Search Last updated on Apr 2, 2025

### Learn how to light your 3D compositions by using a composition, video, or image layer as an environment light source.

Beyond the HDR and EXR still-image files, you may now hand videos, still images, animated compositions, and other layers to an Environment light as its source. That extra latitude with the Advanced 3D Render Engine opens up more creative control and yields livelier, more lifelike lighting across your 3D projects.

Animated Environment Lights let 3D models shift in step with the video's changing light brightness, color, and position, producing lighting and reflections that feel natural and true to context.

As a video's light brightness, color, and position vary, Animated Environment Lights let 3D models respond to those shifts.

### Add a video as a source of Environment Light

Bring a 3D model into the project, then place it in a composition by dragging it onto the Timeline panel.

Likewise, bring in the clip you intend to treat as environment light and drop it onto the Timeline panel as well.

Create the light itself through Layer > New > Light, choosing Environment as the Light Type.

3. Within the Light Setting dialog, pick Environment from the Light Type dropdown list.

Expand the Environment Light properties by twirling them open in the Timeline panel.

Beneath Light Options, point the Source property at the layer that holds the video.

- Environment Lights aren't limited to video; you can also direct them at animated native layers like Shape, Text, and Solid layers, as well as animated compositions.
- A layer that is a 3D object, a light, a camera, a 3D null, or an ordinary layer carrying the 3D switch cannot serve as a source for Environment Lights.

### Result

Here a clip stands in for the Environment light, illustrating the technique.

Both the 3D model and the backdrop clip shown here can be obtained from Adobe Stock.

Tip

Reach for the Create 3D Environment Background Layer command to drop a solid layer at the foot of the composition; that solid carries CC Environment tied to the chosen light's Source map, plus a 5px Fast Box Blur that softens the backdrop.

### Add a composition as a source of Environment Light

Build a composition and bring it to life with animation.

1. Build a composition and animate its layers so the result can serve as an animated Environment Light.

Start a fresh composition and pull a 3D model into the project.

Place that imported 3D model into a composition by dragging it onto the Timeline panel.

From the Project panel, drag the animated composition down onto the timeline.

4. Dropping the animated composition into the Timeline panel lets it feed Environment Light into your 3D composition.

Create the light through Layer > New > Light, setting the Light Type to Environment.

Twirl the Environment Light properties open in the Timeline panel.

Beneath Light Options, point the Source property at the layer holding the video.

7. Designate animated compositions as a Source for Environment Light.

## Enable lights to cast shadows

Search Last updated on Jan 21, 2026

### How to make Environment, Spot, and Parallel lights throw shadows across a 3D composition.

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

## Extract and animate lights and cameras from 3D models

Search Last updated on Apr 2, 2025

A guide to pulling lights and cameras out of imported 3D models within compositions, then animating them.

Pulling lights and cameras out within After Effects is a fast way to rebuild the scene you originally assembled in your 3D modeling app. For now, extraction of lights and cameras works on GLB, GLTF, and OBJ models placed in a composition.

The moment your first 3D model lands in a composition, After Effects spins up a default hidden Environment Light so you can see the scene before you add a Light layer yourself. It also lets the Default camera preview the scene. For the greatest flexibility, though, build a Camera layer to render through, leaving the Default camera free for inspecting the scene.

### Extract lights from a 3D model and animate them

Bringing in a 3D model prompts After Effects to generate a new light layer from the scene's light data, much as it does for a camera layer.

Animated lights arrive with keyframes already laid down in the Timeline panel.

Pull the 3D model in and drop it into your composition.

In the Composition panel, select the layer carrying the 3D model, then choose Layer > Light > Create Lights from 3D Model.

From the 3D scene's camera data, a fresh light layer gets built.

When the lights carry animation, keyframes appear in the Timeline panel ready for you to work with; when they don't, you're free to build your own from scratch.

### Extract cameras from a 3D model and animate them

Importing a 3D model prompts After Effects to build a new camera layer out of the scene's camera data. Animated cameras bring keyframes with them into the Timeline panel.

Bring the 3D model into your composition.

In the Composition panel, select the layer carrying the 3D model, then choose Layer > Camera > Create Cameras from 3D Model.

That scene's camera data drives a newly built camera layer.

If the cameras carry animation, keyframes turn up in the Timeline panel for you to work with; otherwise, you can start building your own.

A few points worth remembering:

- How well lights and cameras survive a save into GLB, GLTF, or OBJ differs from one 3D modeling app to the next. You may have to adjust the save settings, and certain features might not carry over.
- In the same vein, 3D scene data is represented differently across 3D apps and 3D file formats. After Effects translates the scene data it finds in the file into its own camera and light layers as best it can. Light power, for instance, can be stated several ways by a 3D app. Spot something that looks off and let us know so we can dig into it.
- Every single frame of animation gets its own keyframe.
- Camera and light scene data falls outside what OBJ format can hold.
- Extraction runs one way only. Re-save the file after editing the scene in your 3D modeling app and After Effects won't refresh cameras or lights you've already pulled out; you'll have to extract the updated ones again.

## See also

- [Creative Cloud Libraries](help-creative-cloud-libraries.md)
