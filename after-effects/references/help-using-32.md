# Advanced 3D Renderer, Import 3D Model, Import 3D Models From Creative Cloud Libraries, Working With Parametric Meshes

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Advanced 3D renderer; Import and add 3D models to your composition; Import 3D models from Creative Cloud Libraries; Create parametric meshes.

## Advanced 3D renderer

Search Last updated on Apr 2, 2025

An overview of the Advanced 3D composition renderer, covering native rendering of imported 3D model files, lifelike image-based lighting, and more right inside Adobe After Effects.

A GPU-driven composition renderer built for both quality and speed, Advanced 3D joins Classic 3D and Cinema 4D as a third rendering choice in After Effects. The engine beneath it is one After Effects shares with other Adobe products, and it relies on Adobe Standard Material properties to deliver physically-based rendering. With the 3D switch turned on, solids, precomps, text, and shape layers now receive Adobe Standard Material texturing and rendering, yielding more accurate, photographic results.

Faster previewing of 3D compositions

Switching on Draft 3D unlocks a ground plane plus an extended viewer — handy for laying out a 3D scene — and it markedly accelerates previewing of 3D edits, even across busy scenes packed with many 3D elements.

Improved workflow

Your workflow benefits because you can preview and refine 3D edits at a faster pace. Scrubbing the timeline of imported, rendered 3D models stays smooth even when resolution is high.

Advanced 3D enables rendering of:

- Imported 3D models in GLTF, GLB, OBJ, and FBX formats.
- Environment lights for realistic image-based lighting and shadows using HDRI files.
- Other 3D layers, such as extruded text and shape layers, cameras, and lights.
- Physically-based rendering of 3D models and other 3D layers in a unified space.
- Materials for 3D layers such as text, shapes, and solids.

Note

Among native renderers, only Advanced 3D can currently render 3D models inside After Effects.

### System requirements for Advanced 3D renderer

Standard system requirements cover After Effects 24.0 and later, but the Advanced 3D renderer calls for particular hardware upgrades. Advanced 3D supports the cards listed below along with their later revisions.

### macOS

### Supported Intel x86 CPUs on Macs

MacBook Pro 15-inch

- 2016 with Radeon Pro 460
- 2017 with Radeon Pro 560
- 2018 with Radeon Pro 555X or 560X
- 2018 with Radeon Pro Vega 16 or 20
- 2019 with Radeon Pro 555X or 560X
- 2019 with Radeon Pro Vega 16 or 20

MacBook Pro 16-inch

- 2019 with Radeon Pro 5300M or 5600M

iMac 21.5-inch

- 2017 Retina 4K with Radeon Pro 560
- 2019 Retina 4K with Radeon Pro 560X

iMac 27-inch

- Late 2015 Retina 5K with Radeon R9 M395X
- 2017 Retina 5K
- 2019 Retina 5K
- 2020 Retina 5K

iMac Pro

- 2017

Mac Pro

- 2019

### Supported Apple ARM CPUs on Macs

All Macs with at least 16 GB of system RAM.

- macOS must at least be version 12.0
- Hardware must support Metal
- On Intel Macs, a discrete GPU with at least 4GB VRAM
- On ARM Macs, at least 16GB of system RAM

Tip

To check which graphics card your Mac uses, go to the Apple menu > About This Mac > Graphics.

Note

Advanced 3D does not support Intel Macs that rely on integrated GPUs.

### Windows with NVIDIA GPU

### Supported NVIDIA GPUs on Windows devices

Maxwell

- GeForce GTX 970, 980, 980 Ti, Titan X
- Quadro M2000, M4000, M5000, M6000

Pascal

- GeForce GTX 1050 Ti, 1060, 1070, 1070 Ti, 1080, 1080 Ti, Titan Xp
- Quadro P1000, P2000, P4000, P5000, P6000

Turing

- GeForce GTX 1650, 1650 Super, 1660, 1660 Super, 1660 Ti
- GeForce RTX 2060, 2060 Super, 2070, 2070 Super, 2080, 2080 Super, 2080 Ti, Titan RTX
- T600, T1000
- Quadro RTX 4000, 5000, 6000, 8000

Ampere

- GeForce RTX 3050, 3060, 3060 Ti, 3070, 3070 Ti, 3080, 3080 Ti, 3090, 3090 Ti
- RTX A500, A2000, A4000, A4500, A5000, A5500

Ada Lovelace

- GeForce RTX 4050, 4060, 4060 Ti, 4070, 4070 Ti, 4080, 4090
- RTX 4000, 45000, 5000, 6000

- CUDA minimum driver version 11.8
- CUDA minimum compute capability 5.0
- GPU must be of the Maxwell generation or newer
- Discrete GPU with at least 4GB VRAM

### Windows with AMD or Intel GPU

### Supported AMD GPUs on Windows devices

GCN 3.0

- FirePro W7100

GCN 4.0

- Radeon Pro WX3100, WX4100, WX5100, WX7100

GCN 5.0

- Radeon Pro WX8100, WX9100, WX8200

GCN 5.1

- Radeon Pro VII

RDNA 1.0

- Radeon Pro W5500, W5700

RDNA 2.0

- Radeon Pro W6400, W6600, W6800

RDNA 3.0

- Radeon Pro W7500, W7600, W7700, W7800, W7900

### Supported Intel GPUs on Windows devices

Alchemist

- Arc A310, A350, A380, A580, A750, A770
- Arc Pro A40, A50, A60

- OpenCL minimum driver version 1.0
- OpenCL minimum device capability 1.0
- Discrete GPU with at least 4GB VRAM

Tip

To find your graphics card's name and model on a Windows machine, right-click the Start button > Device Manage > Display adapters.

### Set Advanced 3D as the composition renderer

Bring a 3D model in and place it into the composition.

The moment you add a 3D model to the composition, Advanced 3D is chosen for you automatically.

2. Advanced 3D gets automatically selected when you add a 3D model to the composition.
   As you adjust your 3D space, After Effects relies on the Advanced 3D renderer to display those edits in real time. The Draft 3D option becomes available, giving you a toggle to switch the fast 3D preview On or Off.

The Draft 3D option lets you display your 3D composition through either the 3D Ground Plane or the Extended Viewer view.

3D Ground Plane

Acting as a horizontal projection surface, a ground plane conveys perspective and a sense of space throughout your 3D scene.

Extended Viewer

With the Extended Viewer, you can see 3D content that falls beyond the edges of the composition frame.

4. Use the Draft 3D option to view your 3D composition in 3D Ground Plane or Extended Viewer view.
   Camera controls like dolly, orbit, and pan let you inspect your designs the instant you build them.

### Rendering options for Advanced 3D renderer

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

## Import and add 3D models to your composition

Search Last updated on Nov 13, 2025

A guide to bringing 3D model files into After Effects and putting them to work in your composition.

Starting with After Effects 24.1, you can pull 3D models straight into a project and set them beside your other 2D and 3D layers in the composite.

### Working with 3D models in After Effects

A walkthrough covering how to bring in a 3D model, composite every asset together, and finish it as a 3D motion video inside After Effects.

Tip

- Before importing models into After Effects, you can ready them in Adobe Substance 3D Painter.
- Building parametric meshes and applying Substance 3D Materials to them is also possible. (Currently in beta)

### Import 3D models to a project

Choose File > Import > File, or click the Import option in the Project panel.

From your device, pick a GLB, GLTF, OBJ, or FBX file to import, then click Open.

For the 3D model file, the project gets a new folder named after the model. Any files the 3D model depends on — texture images and a BIN for GLTF — end up inside that same folder too.

In the Project panel, 3D files lacking extra dependent files can be imported on their own. Learn more about Decluttered 3D model import.

Should you prefer to gather the dependent files by hand, choose File > Dependencies > Collect Files.

### Supported 3D file formats for import

- GLTF and GLB: GLTF stands for Graphics Language Transmission Format, a newer royalty-free spec aimed at transmitting and loading 3D scenes efficiently; the Khronos Group develops and maintains it as an open standard. Together with its binary container GLB (Graphics Language Transmission Format Binary), GLTF covers a broader feature set — scene cameras and lights, data compression, and model animation among them. For a more lifelike look, both GLB and GLTF files carry physically-based materials.

- OBJ (Wavefront Object): Among the most widely adopted 3D model formats, OBJ imports into your composition and follows the very same animation workflow used for GLTF and GLB files.

- FBX (Filmbox): The standard format for animated models, FBX comes from a well-known online service for building and downloading character animations. FBX files let you bring embedded animations into your 3D compositions.

Note

Because it bundles every dependent resource and all texture data into one file, GLB is what After Effects favors for most jobs. GLTF, by contrast, depends on extra files that the project may have to keep track of separately.

### Add imported 3D model to a composition

Choose File > Import > File, or click the Import option in the Project panel.

From your device, pick a GLB, GLTF, OBJ, or FBX file to import.

After you import the 3D model into the Project panel and select it, a thumbnail shows up.

2. A thumbnail preview of the chosen 3D model allows for quick identification before you add it to your timeline.
   Drag the imported 3D file onto the Timeline panel to put it in your composition.

Set the values you want in the Model Settings dialog. The Preview option is on by default, so the Composition panel shows how the model looks as you change the settings.

Bring 3D model files of the GLTF, GLB, or OBJ type into your composition.

Object Scale

Alter the scale of the object.

Make Comp Size

Size the imported model to match the composition.

Object position while scaling

Decide whether the 3D model's position may shift as it scales.

Model Units

Switch the model units used in the object scale.

Up Axis

Set the 3D model's axis to either Y Axis or Z Axis.

Flip Z Axis

Turn the 3D models over around their Z axis.

Extract all materials

Pull the materials out of the imported 3D model. Those extracted materials land in the Materials folder within the Project panel.

To reopen the Model Settings dialog whenever you like, select the model in the Project, Timeline, or Composition panels, then choose Layer > Model Settings.

- The settings you apply to an imported 3D model in the Model Settings dialog register as 100 scale in your composition.
- Adding a 3D model to your composition switches your 3D Renderer over to the new Advanced 3D, and from there you can switch on Draft 3D for the ground plane or extended viewer.

Click OK to finish adding the model to your composition.

Tip

GLTF and GLB 3D models can also be brought in from your Creative Cloud Libraries.

### Decluttered 3D model import

With the newest build, imported 3D models land at the Root level of the Project panel rather than in a folder of their own. Related and dependent items — .mtl, .mdl, .scene, .bin, and texture folders — will stop appearing in the Project panel.

Thanks to Decluttered 3D model import, none of an imported 3D file's dependent and related files stay visible in the Project panel any longer.

A few points worth noting:

- The set of collected files produced by Collect files still includes the model's dependency files.
- For an older project you open, After Effects will no longer surface its dependent files in the Project panel.
- Saving projects that contain 3D files in an older version prompts After Effects to build a model folder, giving those versions a set spot for dependent files when the project is reopened.

### More like this

- Import 3D models from Creative Cloud Libraries
- 3D layers overview and resources
- Preparing and importing 3D image files
- Work in 3D Design Animation Space

## Import 3D models from Creative Cloud Libraries

Search Last updated on Jun 18, 2024

A guide to placing 3D models into your Creative Cloud Libraries and putting them to use across your projects.

### Add 3D models from Adobe Stock

Adding 3D models to your Creative Cloud Libraries takes only a few steps, whether they come from Adobe Stock, your local machine, or your After Effects projects.

Head to Adobe Stock and look up free 3D models, or page through the whole 3D model collection.

Pick a model, then click Save to Library to drop it into your library.

2. Choose a 3D model in Adobe Stock and use the Save to Library option to add it to your library.
   Open the Libraries panel to see the model you saved. If it isn't showing, click the Cloud icon in the lower-left corner of the Libraries panel to sync and refresh the library.

3. Open the Libraries panel to view the 3D model you saved on the Adobe Stock website.
   Drag your 3D model and drop it into the Project or Composition panel to import it.

Note

At present, Adobe Stock 3D models built on Adobe Standard Material properties aren't supported.

### Add 3D models from your system

Beyond the 3D models on offer in Adobe Stock, models from your own system can be added to Creative Cloud Libraries as well.

### Add 3D models from your project

Bring the 3D model into After Effects and locate it within the Project panel.

From there, drag the model and drop it onto the Libraries panel.

### Add 3D models from your system to Creative Cloud library

Inside the Creative Cloud desktop app, head to Files > Your Libraries.

1. Open Your libraries within the Creative Cloud desktop app, then drag and drop the 3D model.
   Pick the library where the model file should live.

Grab the file from your system and release it onto that library's file listing.

Note

- GLB is the recommended format when you contribute your own 3D models to a library. The GLTF and OBJ formats work too, but they depend on links to external material and texture files, and those links break once inside the library. Because GLB bundles every dependency into one file, it avoids that breakage. Models that the Adobe Substance apps (for instance Substance Stager) push into a library arrive as USDZ files, a format After Effects Beta does not yet read. So rather than sending the model to your library through the Libraries panel in a Substance app, save it out as a GLB and either import that into After Effects or place it in your library.

### Import 3D models from Creative Cloud Libraries to your project

GLB, GLTF, and OBJ 3D models stored in your Creative Cloud Libraries can be dropped straight into a project or composition.

Bring up the Libraries panel; if it is hidden, turn it on with Window > Libraries.

Either drag the 3D model out of the Libraries panel onto the Project panel, or right-click the model and pick Add to project.

2. Pull the 3D model out of your library into the project with the Add to project option.
   Dragging the 3D model from the Libraries directly onto the Composition or Timeline panels works just as well.

Tip

Library files can be administered through either the Creative Cloud desktop app or its web app.

### More like this

- Creative Cloud Libraries in After Effects
- Keyboard shortcuts in After Effects
- Expression language reference
- Modifying and using views

## Create parametric meshes

Search Last updated on Jan 21, 2026

### Learn how to create and customize parametric meshes, and understand their drawing behaviors.

Think of Parametric Meshes as shape layers translated into 3D. With the Parametric Mesh tool or via Layer > New in After Effects, primitives like spheres, cubes, and cones can be built right inside the app, and you can tweak or animate their dimensions, form, and look. A few physically based material settings are enough to give these meshes a plastic or metallic finish.

Applying customizable Substance 3D Materials lets you dress parametric meshes and 3D models in a broad spectrum of looks.

### Create a Parametric Mesh

Begin with the mesh drawing tool on the toolbar, using whichever approach you prefer:

- Double-click the button to drop a mesh at its default size into the Composition panel.
- Choose a shape from the dropdown, then drag the cursor in the Composition panel to draw it at whatever size you want.

Or, from Layer > New, pick a shape to drop a default version of that parametric mesh into the composition.

While dragging out a custom-sized parametric mesh, these key combinations apply:

Keys

Function

Shift

Constrain proportions when drawing.

Command/Ctrl

Draw from center.

Shift + Command/Shift + Ctrl

Draw from center with constrained proportions.

Option/Alt with a parametric mesh tool active

Move the camera (if you have camera navigation enabled for Option/Alt).

Spacebar

Move a mesh to a new position without leaving the tool.

Option/Alt + Drag a shape

Make copies of the mesh and parametric layer in the Composition panel, and also duplicate the parametric layers.

| --- | --- |

- As you reposition the camera, the parametric mesh follows your cursor, placed against the scene's XYZ planes.
- Any camera view works for drawing a parametric mesh, orthographic projections included.

Reshape the meshes through Mesh Options and Bevel Options over in the Properties panel.

3. For finer adjustments, bring up the Properties panel and work the mesh and bevel controls on the chosen parametric mesh.
   Tune the parametric mesh's starting material settings from the Properties panel or via the Material Assignment section of the Timeline panel.

Property

Definition

Base Color

The material's primary color, expressed through RGBA values.

Roughness

- Reflects whether the surface reads as rough or smooth, set on a percentage scale from 0 to 100%.
- 0% is perfectly smooth and 100% is completely rough.

Metallic

- Reflects how strongly the material reads as glossy metal, set on a percentage scale from 0 to 100%.
- 0% is non-metallic and 100% is fully metallic.

Emission Color

The hue of light the material seems to give off, expressed through RGBA values.

Emission Intensity

- Reflects how brightly the material seems to radiate light, set on a percentage scale from 0 to 100%.
- 0% means no visible light emission, and 100% means maximum light emission, appearing as a strong light source.

Note The value you dial in governs only how the material visually reads in terms of emitted light; the material is not truly emitting anything. Since the Advanced 3D engine offers no light emission from materials, these emission settings will never throw light onto other objects in the scene.

Ambient Response

- Reflects how the shape's material reacts to the scene's overall ambient light, set on a percentage scale from 0 to 100%.
- 0% means no ambient light influence, so that the material appears dark unless directly lit, and 100% means fully responsive to ambient light.

Note This setting changes anything only when the scene actually contains an Ambient light.

| --- | --- |

Substance 3D Materials (SBSAR) are another route for styling these parametric meshes, complete with exposed controls you can adjust.

Keyframes let you animate the parametric mesh itself or any single property of it.

### Cube

Width comes from dragging side to side; height and depth come from dragging up and down.

### Sphere

Drag toward or away from the center to change how large the sphere's radius is.

### Cylinder

Side-to-side dragging grows the cylinder's radius, while up-and-down dragging grows its height.

### Cone

Horizontal dragging expands the cone's radius; vertical dragging changes its height along with the direction it points.

Keep in mind the cone always renders upright, even when it looks like it points downward. Pointing up, for instance, gives a Top Radius of 0 and a Bottom Radius of 20; flip it to point down and the Top Radius becomes 20 with the Bottom Radius at 0.

### Torus

Dragging horizontally sets the torus's total width, and dragging vertically sets its total height. As the Pipe Radius gets larger the Ring Radius contracts, keeping the torus within its bounding box.

### Plane

Drag to fix both width and height. A plane now lands on whichever plane (X, Y or Z) is most squarely facing the camera.

## See also

- [Creative Cloud Libraries](help-creative-cloud-libraries.md)
