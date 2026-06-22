# Apply Substance 3D Materials, Work In 3D Space, 3D Transform Gizmo, Single 3D Gizmo For Multiple 3D Layers

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Apply Substance 3D materials; Work in 3D Design Animation Space; 3D Transform Gizmos; Single 3D Gizmo for multiple 3D layers.

## Apply Substance 3D materials

Search Last updated on Apr 15, 2026

### Learn how to apply Substance 3D Materials (.sbsar files) to 3D models and parametric meshes to explore a wide range of visual styles and achieve stylized looks.

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

Edits made here are global — every instance of that material across your project picks them up.

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

## Work in 3D Design Animation Space

Search Last updated on Nov 13, 2025

Use the intuitive toolset to help you design and composite 3D content faster and more accurately, natively in After Effects.

Lean on the intuitive toolset to design and composite 3D content more quickly and precisely, right inside After Effects. Since every 3D manipulation control lives in a single space, there's no more bouncing between 3D applications just to land one shot.

Here's what this design space brings:

- Camera tools for navigating 3D
- 3D Transform Gizmo
- Draft 3D Preview
- 3D Ground Plane
- Extended Viewer

The camera tools let you roam the scene freely to judge where things belong and how they might shift, and then the 3D Transform Gizmo lets you move them into place.

Note

If After Effects is new to you, or you'd like the fundamentals, take some time to explore working with 3D.

### Activate the 3D Design Space

Turn 3D switch on

Turn 3D switch on

1. In the Timeline panel, enable the 3D switch for the layer(s) you want to manipulate in 3 dimensions.

Camera tools in toolbar

Camera tools in toolbar

Doing so brings the 3D Design Space to life. Three camera controls appear in the toolbar — Orbit, Pan, and Dolly. Within each control sit several interaction points you can grab to move scene objects through 3D space.

2. Click a 3D layer in the timeline to use the Transform Gizmo that enables you to rotate, scale, and position a layer with a single tool.

3D Transform Gizmo

3D Transform Gizmo

### Create 3D Bins

Grouping several 3D layers together forms 3D bins — collections of 3D layers that render as one. Slip a 2D layer in between two 3D layers and you split them into separate bins, each rendering on its own within 3D space.

### Camera controls to navigate in 3D

The moment a 2D layer becomes a 3D layer, the camera controls let you roam through 3D space without delay.

Navigating and reshaping 3D space is handled through the camera control tools.

For getting around and reworking 3D space, reach for the camera control tools.

### Work with the different camera controls

Every camera control offers several interaction points, and through them you inspect and reposition the objects populating your scene. The defaults attached to these controls are editable. Arriving from another 3D package, you can swap those defaults for ones that suit you and store them so they persist.

Orbit controls

Orbit controls Pan controls

Pan controls Dolly controls

Dolly controls

Orbit Around Cursor ships as the default.

Pan Under Cursor ships as the default.

Dolly Toward Cursor ships as the default.

Tip

- To flip between camera tools or controls, press the 1/2/3 keys (governed by 3D preferences). Cycling through each camera tool's options is done with Shift + 1/2/3.
- Holding Alt on Windows, or Opt on macOS, brings the camera controls within reach.

### Add a camera to your scene

Layers become viewable in 3D space the instant you begin moving around in After Effects. When a shot is framed the way you want it, drop a camera into the scene through View > Create Camera from 3D View. Your present perspective is what the resulting timeline camera is built from. Nothing stops you from stacking several cameras onto the scene, each tied to a separate vantage point.

Adding a camera to your scene runs through the Create Camera from 3D View option.

The Create Camera from 3D View option is how a camera gets added to your scene.

How each camera travels is yours to tune by picking among the modes exposed by the three camera controls. Say you'd rather a camera circle a scene out of the box — just adjust the settings to match.

### Use hotkeys to switch between controls

Jumping smoothly from one camera control to the next is a matter of the hotkeys 1, 2, and 3. Those hotkey assignments are editable inside the 3D Preference dialog.

Reaching the core 3D navigation and transformation tools fast is what the shortcuts are for.

The shortcuts give you rapid entry to the essential 3D navigation and transformation tools.

Hotkeys can also be reassigned through the Visual Keyboard Shortcut Editor.

### 3D Transform Gizmos

Scaling, positioning, and rotating a 3D object in your composition all run through the primary gizmo.

The primary gizmo handles scaling, positioning, and rotating a 3D object within your composition.

Within one tool, the 3D Transform Gizmo lets you scale, position, and rotate 3D layers — bundling every space-manipulation control together. It behaves much like Dimension: each axis is adjustable from inside that same tool. That removes any need to jump into distinct properties such as position, scale, and rotation to make these changes.

Tip

- Selecting several 3D layers together now lets you handle them as a group through one unified 3D gizmo.

### Import 3D model

From After Effects 24.1 onward, your 3D models can be brought straight into the project and placed into the composite next to your other 2D and 3D layers. There's more to read on importing and adding 3D models to a composition.

### Extract cameras and lights from 3D models

Pulling cameras and lights out in After Effects speeds up rebuilding the scene you originally assembled in your 3D modeling tool. From GLB and GLTF models placed in a composition, the cameras and lights can be extracted and then animated.

### 3D Draft Preview

Watch the edits you apply to your 3D designs render live, right inside After Effects. Powered by the quicker, leaner Advanced 3D engine, it delivers steady, real-time previews across every stage of your work. When you're doing motion design, how fast you can iterate and experiment drives the creative calls you make. Lean on the 3D Draft preview to cut down preview lag, shrinking the gap between idea, action, and result. Flip it on with the Draft 3D button in the composition toolbar.

### 3D Ground Plane

While you move around in Draft Preview mode, the 3D Ground Plane anchors your orientation and conveys a feel for the space, acting as a visual cue for placing cameras, lights, and 3D layers relative to each other.

Switch on Draft 3D and a fresh Ground Plane button activates by default in the toolbar along the bottom of the Composition panel. Tap it to toggle a ground plane within the composition's 3D space.

### Extended Viewer

Viewing 3D content beyond the edges of the composition frame is what the Extended Viewer makes possible. Return to the standard frame view whenever the final look of your composition is what you need to check.

Turning on Extended Viewer starts with the Draft 3D button in the Composition panel toolbar. Right beside the Ground Plane button, the Extended Viewer button shows up. The extended view's opacity is also adjustable — select the Extended Viewer button, keep it held down, and drag the slider to set the value.

Note

With Extended Viewer turned on, effects placed on collapsed precomps can clip the layer at the composition boundary.

### More like this

- 3D layers
- Position 2D layers in 3D space
- Insert 3D objects into your compositions
- Preparing and importing 3D image files

## 3D Transform Gizmos

Search Last updated on Nov 13, 2025

### From one tool, scale, position, and rotate 3D layers — here's how the 3D Transform Gizmo works.

Within one tool, the 3D Transform Gizmo lets you scale, position, and rotate 3D layers. Set against the older transform gizmo, this one moves quicker and reads more naturally, packing every space-manipulation control together. Its behavior echoes Dimension, with each axis adjustable from inside the same tool. The need to open separate properties — position, scale, and rotation among them — to make these edits goes away.

There's more to learn about working in the 3D design animation space in After Effects.

Scaling, positioning, and rotating a 3D object in your composition all run through the primary gizmo.

The primary gizmo handles scaling, positioning, and rotating a 3D object within your composition.

Scaling (square handles), positioning (arrows), and rotating (circles) an object all happen from one control — the primary gizmo. Just click and drag whichever control you mean to adjust:

- The arrow-shaped Position handles shift your selection along the way the arrow points. As it moves, the trailing pink lines serve as guides showing how far the object has traveled from its origin point. There's more to learn about the Dimensional guide.
- The square Scale handles let you stretch and scale objects along whichever line the handle sits on. Keep shift pressed during scaling to scale evenly in every direction.
- The circular Rotate handles spin your objects along the direction of the line the handle rests on. Out of the box, rotation steps in increments of 1 degree. Press Shift as you rotate to snap rotation to increments of 5 degrees. Press Command/Control as you rotate to switch off rotation snapping and gain decimal precision.

### Different gizmo variations

Individual states are something the older Transform Gizmo versions lack. The 3D Transform Gizmo opens in a Universal state, with these further variations: Position, Scale, and Rotation. Switching among them happens from the main toolbar.

A separate axis is tied to each color — Red marks X (horizontal), green marks Y (vertical), blue marks Z (depth). Shifting any axis reorients the objects.

Universal state

Universal state

Universal state

Position-specific

Position state

Position state

Scale-specific

Scale state

Scale state

Rotation-specific

Rotation state

Rotation state

### Different axis modes

Toggle between axis spaces to govern the way objects shift, spin, and scale inside 3D space.

Govern how objects move, rotate, and scale within 3D space by toggling between axis spaces.

Local and world axis space, plus a view axis mode, are things After Effects lets you switch among to carry out the following:

- Moving anchor point
- Position & orientation
- Rotation with Y / Pan Behind / Anchor Point Tool

Tip

- Pair world, local space, or view axis mode with the various states for tighter command over objects in 3D space.
- Selecting several 3D layers together now lets you handle them as a group through one unified 3D gizmo.

### Dimensional guide

As you work the gizmos, the dimensional guides report how far an object has shifted or by how many degrees it has turned. The guides refresh on the fly and surface details about the gizmo's assorted states and modes.

Take moving the Position head (the arrow): a pink line trails it to show the object's distance from the origin point. A pink-line intersection point also appears, feeding live values to the separate axes and boosting speed and flexibility across your 3D workflows.

### Use hotkeys to switch between gizmos

These properties can be tweaked one at a time — the 4, 5, 6 keys jump to individual tools for working a given axis, while the V key brings you back to the universal gizmo. You're also free to concentrate on a single property type for added precision. The keyboard shortcut behind these is editable in the Keyboard Shortcut Editor.

## Single 3D Gizmo for multiple 3D layers

Search Last updated on Nov 13, 2025

### Drive several 3D layers at once from a single gizmo — a way to tame busy scenes and cut workspace clutter.

Select several 3D layers at once in After Effects and you can now drive them together through one unified 3D gizmo. Each 3D layer used to carry its own gizmo. Moving, scaling, and rotating a batch of 3D layers meant parenting them under a null or tweaking them one by one.

Picture six 3D text layers in your composition, every one of them selected: rather than a separate gizmo per layer, After Effects shows a single unified gizmo. The whole group then behaves like one object under your control. You can spin them as a unit, slide them collectively along the X-axis, and run other transformations in sync.

Before v25.6

Selecting multiple 3D objects enables each one to have its own 3D Gizmo controls.

Each selected 3D object gets its own 3D Gizmo controls.

From v25.6

Select multiple 3D objects and control them all with a single gizmo.

One gizmo controls all of the 3D objects you select.

### Use a single 3D Gizmo control for multiple 3D layers

Start a project and load several 3D layers into your composition — 3D text, solids, or other objects all qualify.

Flip the 3D Layer switch in the Timeline panel to turn an existing layer into a 3D layer.

Within the Timeline panel, press Command or Ctrl while picking several 3D layers.

You'll see that After Effects now puts a single unified 3D gizmo in the Composition panel.

Whichever layer you select last becomes the active layer and takes the 3D gizmo control.

Through the unified gizmo you can do things like:

- Slide every selected layer together along the X, Y, or Z axes.
- Spin them as a group.
- Scale them evenly or along particular axes.

### Impact on After Effects performance

Selecting several 3D objects at once, each handed its own gizmo for manipulation, and then rendering and juggling those gizmos together — especially with rendering settings cranked high — can occasionally drag performance down noticeably.

Driving multiple layers from a single 3D gizmo cuts down the performance hits that tend to surface when every 3D object carries its own gizmo.

### More like this

- 3D Transform Gizmos
- Work in 3D Design Animation Space
- Tracking 3D camera movement
- Modify materials properties of a 3D layer

## See also

- [3D Layers](help-3d-layers.md)
