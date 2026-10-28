# Rendering options for Advanced 3D renderer

With the Advanced 3D renderer in use, the rendering pipeline, final-output quality, and your interactive performance are all things you can tune. The arrangement of scene shadows is configurable as well.

In the Composition panel toolbar, click the 3D Renderer option to open its dropdown menu.

From that dropdown, pick Rendering Options to bring up the Advance 3D Render Option dialog.

The Advance 3D Render Option dialog lets you set these values:

Render Quality

Drag the slider to set Render Quality, balancing interactive responsiveness against final-output quality.

Shadows

The choices in the Shadow section let you define various shadow attributes for the previews.

- Resolution: Choose from Half (2 MB), Full (16 MB), and Double (128 MB).
- Smoothness: This value tracks whatever Render Quality you set; for the smoothest result, though, drag the slide bar to pick a smoothness level from 1 to 32. Keep in mind that rendering may slow when Smoothness is set high.
- Casting Box Size: Resize the cast shadow box to project shadows from one object onto others in the scene. Shadows are cast only by objects sitting inside this region.
- Casting Box Center: Define the spatial point that the Casting Box Size is centered upon.
- Fit to Scene: Have the Casting Box take in every shadow-casting visible layer in the composition; it dimensions the box from the current frame.

Select OK.

Tip

3D rendering now works with Adaptive Resolution, which delivers far better interactivity once turned on. Switch it on by clicking the Fast Previews icon in the Composition panel and choosing Adaptive Resolution.

### More like this

- Import and add 3D models to your composition
- Import 3D models from Creative Cloud Libraries
- Image-Based Lighting
- Extract and animate lights and cameras from 3D models
