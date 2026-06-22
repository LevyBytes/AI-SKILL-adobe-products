# Cinema 4D Composition Renderer

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on May 11, 2026

See how rendering and bringing CINEMA 4D scenes straight into Adobe After Effects can tighten your 3D pipeline and give you more reliable previews.

Note

Missing a Cinema 4D install? Grab it through the Creative Cloud app > Installed apps > After Effects > Get add-ons > Cinema 4D by Maxon > Install.

Among the 3D renderers in After Effects, the Cinema 4D Composition renderer is the newest addition. Built around extruding text and shapes, it is the renderer recommended whenever you need extruded 3D output, and it lets you spin up 3D animations quickly from a blank start. Capabilities of the Cinema 4D Composition renderer include:

- Producing live 3D text, logos, and curved 2D planes inside After Effects with no dependence on particular hardware.
- Letting a single slider govern quality and render settings, leaving the camera, lighting, and text animation untouched.

## Basics of Composition Settings

Reaching the 3D Renderer tab is possible through either route listed here:

- Go to Composition Settings > 3D Renderer > Renderer > Cinema 4D.
- Select the Renderer icon in the Composition panel.

## Supported features in Cinema 4D Composition Renderer

To help you turn out polished 3D text and logos, the Cinema 4D Composition Renderer offers these capabilities:

- Extrude and bevel text and shape layers: Pushing text and shape layers into 3D gives them real depth, so they keep their dimensionality as a camera or light travels around them instead of reading as flat. Bevel governs how the edges of that extruded form appear.

- Reflections: Controls how reflective the 3D objects in your composition are and how their reflections behave.
- Curved footage layers: Bends 3D footage layers and nested composition layers around a vertical axis, with the intensity set through the Geometry Options- Curvature and Segments.
- Material overrides on text/shape bevel and sides: Leans on the existing text animator and shape operator support to take over the Material properties. In the pop-up menu, the Fill Color, Stroke Color, and Stroke Width options give way to the Front, Bevel, Side, and Back options.
- Environment layer (in reflection only): Determines how the Environment map gets applied within the scene.

## Using the Quality Slider

Quality Slider Settings

Quality Slider Settings

Render quality for the composition is dialed in with the Quality slider. Pushing toward higher quality means each render takes longer to finish. What these quality settings really control is the way the CINEMA 4D renderer paints the 3D layers.

Getting to the slider:

Within the Composition Settings window, click Options. The Wrench icon (Options) in the Composition panel does the same.

Within the Cinema 4D Renderer Options dialog, three stops sit along the Quality Slider: Draft, Typical, and Extreme.

- Draft: The Draft band is meant for preview-grade renders and spends the least time painting the 3D layers.
- Typical: The Typical band suits the bulk of final renders.
- Extreme: Reach for the Extreme band when a scene carries intricate opacity or strongly reflective elements.

As you move across the Quality slider's range, it changes the composition's Ray Threshold, Ray Depth, Reflection Depth, Shadow Depth, Anti-Aliasing, and Reflectance settings. For more information, see Cinema 4D Renderer Options.

## Choosing a Cinema 4D Installation

Choose Cinema 4D Installation

Choose Cinema 4D Installation

### Renderer Settings

Should you own the full retail copy of Cinema 4D, you can swap away from the default Renderer and point at it instead. Selecting Defaults returns you to the default renderer.

To pick a Cinema 4D installation:

Inside the Composition Settings window, click Render Options.

The Cinema 4D Renderer Options dialog appears. Click Choose Installation.

When the Choose Cinema 4D Installation dialog opens, navigate to and pick the installation's path.

### Editor Settings

Tied to the Cineware workflow, the Editing setting decides which build of C4D launches. By default that editor is whichever Cinema 4D or Cinema 4D Lite version you most recently installed.

To launch the chosen Editor, take either path below:

Select File > New > MAXON Cinema 4D File.

1. Path to open selected Editor
   Alternatively, with a Cinema 4D source or layer selected, go to Edit > Edit Original.

2. Path to open selected Editor

## Shared Cinema 4D Installation

Cineware Settings

Cineware Settings

That same Choose Cinema 4D Installation dialog is also used by the Cineware effect. Another way to reach it is to click Options in the Effect Controls panel through the Cineware effect.

## Do more with After Effects

Build stunning motion graphics, animated type, and visual effects in Adobe After Effects. Create work for film, TV, video, and the web.
