# Add an environment light

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
