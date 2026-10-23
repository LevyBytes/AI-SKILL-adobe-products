# Apply Substance 3D materials

Search Last updated on Apr 15, 2026

Learn how to apply Substance 3D Materials (.sbsar files) to 3D models and parametric meshes to explore a wide range of visual styles and achieve stylized looks.

Dynamic and customizable, Substance Materials (.sbsar files) can lend 3D models and parametric meshes everything from photorealistic textures to heavily stylized appearances.

Because they're so flexible, these materials make it easy to tweak the properties of 3D models and parametric meshes — color, texture, pattern — to fit whatever your creative needs are. Exposed material controls mean you can experiment with and refine how your assets look without rebuilding them from the ground up.

Picture SBSARs as After Effects' 3D counterpart to MOGRTs (Motion Graphics Templates). In the same way MOGRTs hand you exposed controls for customizing motion graphics, SBSARs deliver parametric controls you can attach to 3D materials and adjust right inside After Effects.

Before you begin:

- Head to the Adobe Substance 3D Community Assets page to browse and download the SBSAR files on offer.
- Already in After Effects? Grab free SBSARs by selecting your 3D model in the Composition panel, then heading to the Properties panel > Material > Panel menu > Get Substance Community Assets. The same command also lives under the Layer > Material menu.

Bring an SBSAR file into your project.

A Substance Material is good to go the moment it's imported into your project. There's no requirement to add them to the Timeline panel.

From the Timeline or Composition panel, pick a 3D model or parametric mesh layer.

For the chosen 3D object, the following Material Assignment controls govern how a texture or material wraps onto the surface:

    - Stretch:  pulls the texture so it spans the whole surface.
    - Proportional: scales the texture evenly while holding onto its native aspect ratio.

- Texture Offset: shifts the texture along the 3D model's or mesh's surface.
- Rotation: turns the texture about the surface of the model or mesh.
- Scale: governs the number of times the texture repeats across the surface.

3. Use the Material Assignment controls to define how the material is applied to the 3D object.
   Fine-tune the material properties over in the Properties panel.

When the SBSAR you applied ships with presets, look for them in the Presets dropdown menu beneath Materials in the Properties panel.

Edits made here are global: every instance of that material across your project picks them up.

Within the Displacement Options section, the following options help you refine the material applied to the parametric mesh:

- Intensity: Tune Intensity to set how far the material's height pushes into or out of the shape, adding extra detail. The property accepts animation.
- Subdivision Count: Raising this value boosts displacement detail by controlling how many times the model's geometry subdivides ahead of being displaced. Since higher values eat more memory, hold it as low as still gives you acceptable visual results.

- Since displacement reshapes a parametric mesh's geometry, displaced materials react to scene lights and shadows the way any 3D model does.
- Displacement lends itself to effects too. Precompose the 3D scene, then apply a 3D Channel effect — Fog 3D or Depth of Field, say — to reach the scene's depth data directly.
- Where a Substance 3D material carries emissive textures, you'll see a visible glow. The material looks lit yet throws no light onto the scene's other objects.

A sample illustrating displacement reshaping a parametric mesh's geometry along with how it reacts to lights and shadows, plus the visible glow that emissive textures produce.

5. Intensity is reduced to a negative value with Emissive enabled, creating the visible glow effect in the stained glass.
   Reach for the exposed controls to customize any material or preset sitting on the 3D model or parametric mesh. Feeling experimental? The Random Seed icon shifts the Random Seed parameter to inject variation, letting you survey a range of visual outcomes.

6. Use the Random Seed option to experiment with different material variations.
   Anything you change beneath the applied SBSAR's Material section — Color, Roughness, Metallic, and so on — is global and reaches every instance of that material throughout your project.

Want to adjust just a single instance? Choose Duplicate and Assign Material from the Material section menu, then edit away. The command copies the material in the Project panel and then reassigns that copy to the selected 3D object.

7. Use Duplicate and Assign Material from the Material section menu to create a separate instance with customized properties of the applied SBSAR.

Note

Assign a SBSAR carrying patterns to animated shapes and, by default, the textures hold their proportions. Animate the parametric meshes, though, and the texture may drift around the shape. Flip the Projection Mode from Proportional to Stretch so it grips the mesh even as the size shifts. Under Stretch mode, matching the texture's proportions may call for adjusting the Repeat.
