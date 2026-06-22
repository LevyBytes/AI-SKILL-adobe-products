# C4D

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Oct 14, 2024 Note

Only Cinema 4D 2023 (installer included) is supported by the present After Effects release (23.1).

Turn to this document to get acquainted with Cinema 4D and Cineware.

From Maxon comes Cinema 4D, a widely used tool for 3D modeling and animation.

Tighter integration means Adobe After Effects and Maxon Cinema 4D can operate side by side. Right inside After Effects you can spin up a Cinema 4D file (.c4d) and handle intricate 3D elements, scenes, and animations.

So the two can interoperate, the Maxon Cinema 4D rendering engine ships alongside Adobe After Effects. It handles the rendering of Cinema 4D files, and on a per-layer basis you get a measure of control over rendering, camera, and scene content. None of this asks you to generate intermediate passes or image-sequence files.

Note

Bundled with After Effects is a license for Cinema 4D Lite, a piece of Maxon's 3D software package. Using it requires that you register a free MyMaxon account. Your information stays private — Maxon passes it to no one — though you should anticipate emails on getting the most from C4D Lite and growing your 3D skills. Opting out is available anytime if those emails aren't wanted. As you set up your login, you may elect to run Lite or instead start a 14-day trial of the full Cinema 4D. Once that trial lapses, your copy of Cinema 4D falls back to Cinema 4D Lite with no time restrictions. After Effects users who later want to move up to the paid C4D can look into the special packages Maxon offers.

## Install Maxon Cinema 4D

Whether during the After Effects install or at any later moment you require it, Cinema 4D is available as an add-on, even after installation has finished.

Launch the Creative Cloud app.

Choose Apps and find After Effects within the list of applications.

Click the icon and choose Get add-ons.

When the After Effects add-ons prompt appears, choose Install for Cinema 4D by Maxon.

Installing and removing Cinema 4D

Installing Maxon Cinema 4D together with After Effects produces a folder called Maxon Cinema 4D.x. From there you can create, import, and edit Cinema 4D files, plus reach for tools like caps and bevels to build extruded text and splines.

- The Cineware plug-in works the usual way through importing and exporting .c4d project files, which proves especially handy when you render with Cinema 4D files.
- Rendering capability from the default Cineware renderer matches what Cinema 4D itself delivers.

Editing, creating, and working with native Cinema 4D files all happen in the Cinema 4D application. By default, whichever installed Cinema 4D carries the higher version is the one used.

Tip

Have a look at this tutorial covering how to pair Cinema 4D Lite with After Effects cameras and lights.

## Uninstall Cinema 4D

macOS:

- By hand, drag the Maxon Cinema 4D.x folder into the trash.

Windows:

- Run the uninstaller found inside the Maxon Cinema 4D.x folder.
- The Control Panel or System Settings > Add or Remove Programs works as well.

Delete Maxon preferences manually: These locations are where you can remove the preferences:

- macOS: /Users/user_name/Library/Preferences/Maxon
- Windows: C:\Users\user_name\AppData\Roaming\Maxon

Note

Removing the Maxon folder on its own is inadvisable, since that will break the After Effect Cineware and 3D rendering functionality.

## Working with Cinema 4D files

From inside After Effects you have a handful of choices for creating, importing, and editing Cinema 4D files.

## Import Cinema 4D files

Choose File > Import > File.

Pick the Cinema 4D file and choose Import. It drops into the Project panel as a footage item, which you can then place onto an existing composition or use to build a matching composition.

Note

- Drop the footage onto a new composition through the new composition icon in the Project panel and you get a composition matching the Cinema 4D file settings, after which a Cinema 4D layer is built and the 3D scene goes onto it. Put the footage into a composition that already exists and instead it inherits that composition's size or aspect.
- Ahead of importing, switch on the Save Polygons For Melange and Save Animation For Melange preferences within the Cinema 4D application preferences. Those settings come in handy particularly when Cinema 4D frames rely on earlier frames.

## Edit Cinema 4D files

Cinema 4D files dropped into compositions, along with Cinema 4D source items in the project, are editable. They open up in the Cinema 4D application. Where a different Cinema 4D version is installed, that one gets used for the edit instead. There is more to learn about editing footage in its original application.

Through Edit Original you get to pick which Cinema 4D version you work with. There is more to learn about handling different instances of Cinema 4D in the Cineware Effect.

## Create Cinema 4D files

Building a Cinema 4D file from within After Effects starts by choosing File > New > Maxon Cinema 4D File or Layer > New > Maxon Cinema 4D File.

Give the file a name and a location.

Up comes the Cinema 4D application.

Build a C4D scene, then choose File > Save to store the file.

For more, watch this video on What's possible with Cinema 4D Lite.

## Export to Maxon Cinema 4D and roundtrip your edits using Live 3D Pipeline

By way of the After Effect Live 3D pipeline, compositions carrying 3D animated text and shape layers can be exported to Maxon Cinema 4D for a round-tripped 3D workflow.

When 3D Shape layers go across, they become extruded spline objects and carry the animation of their shape layer properties.

Pick the Extrude Text as Shapes option and 3D text layers are written into the .c4d file as extruded spline objects. Going this route preserves the layer's fidelity — its character and paragraph formatting plus the animation of text layer properties. What you cannot do afterward is alter the font and text content over in Cinema 4D.

Pick the Preserve Editable Text option instead and 3D text layers become extruded text objects inside the .c4d file. That lets you adjust the font and text in Cinema 4D; the trade-off is thin support for character and paragraph formatting and for the animation of text layer properties. Several text animation features fall outside that support: text animators; kerning and tracking; vertical text; paragraph text; and text on the path.

For 3D text and shape layers, strokes are written out into the .c4d file. Even though After Effects' Ray-traced 3D renderer won't render strokes on 3D text layers, those strokes still export when they are enabled. If you want to see 3D text layer strokes before the export, set the composition renderer to Classic 3D.

## Export to Maxon Cinema 4D

Choose File > Export > Maxon Cinema 4D Exporter and save the C4D file.

Within the Export to Maxon Cinema 4D dialog box, pick one of these:

- Extrude Text as Shapes: produces a .c4d file carrying plain extrusion.
- Preserve Editable Text: writes 3D text layers into the .c4d file as extruded text objects, leaving the font and text open to edits in Cinema 4D.

Note

- Where your text is not expected to change once exported, the advice is to pick the Extrude Text as Shapes option in the Text Exporting dialog box.
- On export, the scene coordinates of the parent null object get shifted so that an After Effects composition's center lines up with Cinema 4D's center at 0,0,0.
- Exported .c4d files are written in Cinema 4D version 17.0.

## Import the .c4d file and edit it in Maxon CINEMA 4D

A .c4d file you have made can be brought into your After Effects composition for editing. Choose Edit > Edit Original to work on the .c4d file over in Cinema 4D.

After you import and add a .c4d file produced by the Cineware 3.1 version of the Exporter into your composition, viewing the scene through an After Effects camera takes two steps: add a camera first, then set the Camera setting in the Cineware effect to Centered Comp Camera.

Following export, whatever After Effects 3D layers you add to the composition fall into line with the Cinema 4D scene layer. The 3D Scene data pulled from the .c4d file — nulls, cameras, and lights — also lines up, so long as any new objects added to the .c4d file are grouped beneath the same parent null object that the exported .c4d file set up.

Opening the exported Cinema 4D file in both After Effects and Cinema 4D for advanced 3D edits goes like this:

Choose File > Import and pick the .c4d file to bring it into your composition.

For tailoring the 3D elements in Cinema 4D, select the Cineware layer and choose Edit > Edit Original. A shortcut achieves the same thing — press Command + E on macOS, or on Windows devices, Control + E.

The file comes up in Cinema 4D, which ships inside After Effects.

Edit and save the file, and your After Effects composition refreshes with every change automatically.

## Cineware effect

Because CineRender is built on the Cinema 4D render engine, bringing it in lets layers based on Cinema 4D files render straight inside After Effects. Render settings fall under your control through the Cineware effect, which also hands you some say over the render quality-versus-speed tradeoff. Cameras, passes, or C4D layers used for a render can be specified too. Create a layer from C4D footage on the composition and the Cineware effect attaches itself automatically. Render and display settings belong individually to each Cinema 4D layer.

## Synchronize Layer

Place several instances of a Cinema 4D scene layer into a composition — Multi-Pass layers among them — and you can mark which Cinema 4D layers should stay synchronized with the composition's other layers.

Tick the Synchronize AE Layer option near the top of the Effect Controls panel and the Render Settings and Camera options across all instances of the layer fall into sync automatically, though Cinema 4D layers may still be set on their own. Clear that checkbox for a given Cinema 4D scene layer and none of that layer's settings will sync with the rest of the composition's layers.

## Live Link

The timelines of Cinema 4D and After Effects are kept in sync by Live Link.

Working with Live Link starts when you click the Enable button for Live Link. Your chosen Cinema 4D version then opens the current file.

Live Link keeps the Cinema 4D and After Effects timelines in sync.

Live Link keeps the Cinema 4D and After Effects timelines in sync.

Switching Live Link on inside Cinema 4D goes like this:

Within the Cinema 4D application, choose Edit > Preferences.

In the Preferences dialog box, choose Extensions > After Effects.

Beneath the After Effects section, choose Live Link Enabled at Startup.

Flip between After Effects and Cinema 4D and the timelines stay synchronized. Pick a different C4D layer in After Effects, then under the Cineware property choose Enable for Live Link, and that layer synchronizes.

## Render settings

How Cineware renders the scene inside After Effects is governed by its Render Settings. They can speed the rendering along while you are still working.

Renderer

Sets which renderer is in play. These options are on offer:

- Current: relies on the Standard renderer the way the C4D file specifies it; head into the Cinema 4D application to change those settings.
- Current (Draft): keeps the Standard renderer but switches off the slower settings — anti-aliasing among them — so interactivity improves.
- Viewport (Draft): Delivers the quickest rendering by letting you pick Display settings; shaders and multi-passes go unshown. Reach for this renderer to preview as you keep working on the composition.
- Viewport: Hardware-accelerated rendering that brings better quality and more speed than the Viewport (Draft) option. In Cineware this renderer matches Cinema 4D's level of enhanced OpenGL quality for the Transparency, Shadows, Post effects, and Noise properties.

Note

Should you save your .c4d file from a full retail Cinema 4D while Render Settings point to the Physical or Hardware renderer, those very settings drive the render any time the Cineware renderer is left at Current or Current (Draft).

Display

Only the Viewport (Draft) renderer enables this option. Its choices are Current Shading, Wireframe, and Box. A pared-down view of the scene comes from the wireframe and box modes.

No Textures/Shader

Tick this to quicken your render by leaving textures and shaders unrendered.

No pre-calculation

Tick this to quicken your render by switching off the pre-calculations that compute motion dynamics or particle simulations. Leave it unticked for final rendering.

Keep Textures in RAM

Tick this to hold textures in RAM so they need not reload from disk and stay quicker to reach. The flip side is that caching large textures can eat into the RAM you have available.

Render Server

Purge Memory: Wipes the render server's memory. As time passes the render server can grow sluggish because it keeps holding the scenes it has processed. Freeing up the memory the render server devotes to its internal caches can let After Effects stretch out previews of complex scenes.

## Project Settings

Within the Cineware effect these project settings are on offer:

- Camera
- Cinema 4D Layers
- Multi-Pass (Linear Workflow)
- Commands

### Camera

Pick the camera that rendering should use.

- Cinema 4D Camera: draws on whichever camera Cinema 4D has set as its render view camera, falling back to the default camera when none has been set.
- Select Cinema 4D camera: Reach for this option to choose a camera. With it enabled, select Set Camera.
- Centered Comp Camera: Pick this to put the After Effects camera to work and recompute the Cinema 4D coordinates so they suit the After Effect coordinates. Bringing in an existing C4D file (typically modeled around 0,0,0) to render with a fresh After Effects camera (which centers on the composition) is exactly when this option earns its keep — it renders the C4D model at the After Effects center. Skip it and the origin mismatch may shove the model somewhere unexpected.
- Comp Camera: Pick this to put the active After Effects camera to work. It only functions once you have added an After Effects camera. As an example, use it for a camera that was added by pulling it out of a Cinema 4D project — such cameras tie themselves to Cinema 4D's coordinate system, where the Cinema 4D viewport's center sits at 0,0,0. This option fits cameras brought into After Effects through the Layer > New > Camera command.
- Set Camera: Where a Cinema 4D scene holds cameras beyond the default one, click this button and pick the camera.
- Set Take: Whenever your c4d file holds takes, this option becomes available. You can build several takes of your scene and tweak any parameter within a take. Should the current renderer not handle take selections, the main take is what gets used.

### Cinema 4D Layers

Switch on and pick the Cinema 4D layers to render.

- Set Layers: Choose this to pick layers. Click the Set Layers button to pick one or more layers. Layers in Cinema 4D give you a way to organize many elements, and you can lean on Cinema 4D layers to composite among elements within the After Effects composition.

### Multi-Pass (Linear Workflow)

Reach for the Cinema 4D Multi-Pass option to name which pass to render. Multi-pass features come into play only with the Standard renderer.

What multi-passes buy you is the speed to fine-tune a C4D scene by compositing assorted kinds of passes together in After Effects — say, tweaking only the scene's shadows or reflections. To have the results line up with Cinema 4D's default Linear Workflow project setting, your project has to blend colors in linear light — reached either through a color-managed linear working space or by enabling Blend Colors Using 1.0 Gamma over in the Project Settings dialog box.

- Set Multi-Pass: Choose this to pick which pass renders on this layer. It is available only when the Cinema 4D Multi-Pass option is enabled.

- Defined Multi-Passes: Switch this on and it adds the passes explicitly added in the .c4d file, which can take in passes besides image layers.

- Add Image Layers: Reach for this to build multiple pass layers carrying the right blending modes, keyed to how Defined Multi-Passes is set. With the Defined Multi-Passes option switched on, Add Image Layers will let through nothing but the passes set in the Cinema 4D render settings, holding back every other supported type.

Note

As image layers get added, whichever layer you had selected at the start drops to the bottom of the Timeline stack and is renamed with RGBA Image tacked on, marking its multi-pass type.

### Commands

- Comp Camera into Cinema 4D: Choose Merge to drop the current After Effects camera into the C4D file as a C4D camera. Doing so changes the C4D file. Use File > Revert to Saved in C4D to see the newly added After Effects camera. This command proves especially handy for moving camera data the 3D Camera Tracker effect created. AE goes in front of the camera name. Merge a second time and the earlier camera stays untouched — a fresh copy is made instead.

- Cinema 4D Scene Data: choosing Extract generates 3D elements (cameras, lights, solids, or nulls) for any object carrying an External Compositing tag inside the Cinema 4D project.

Note

To keep scene-data extraction in After Effects from breaking, leave both Save Polygons for Melange and Save Animation for Melange turned on within the Cinema 4D preferences.

## Working with different instances of the Cinema 4D in Cineware Effect

Which copy of Cinema 4D the Cineware effect relies on is something you control.

Pick the Cineware effect, then go to Options.

Through the Choose Cinema 4D Installation dialog, decide which Cinema 4D version is invoked whenever a .c4d file is opened via Edit Original or whenever After Effects spins up a fresh Cinema 4D file.

Note

Whatever the newest installed Cinema 4D build is becomes the default editor.

## Switch render paths

To change render paths — for instance, swapping the Cinema 4D rendering application — work through these steps:

Options > Browse To Set Render Path

Select the new application.

Exit After Effects.

Launch After Effects.

Select Edit > Purge > All Memory & Disk Cache for the new settings to take effect.

Note

Should the connection drop once you've swapped renderers, close After Effects, pause for 20-30 seconds, and start the program back up.

## Rendering capabilities

Picking Cinema 4D R24 or newer as your renderer opens up rendering options inside the After Effects Cineware plug-in beyond the default one, among them the Physical renderer plus Sketch and Toon.

Reach the Physical renderer this way:

Off the menu, choose Render > Render Settings.

Within that Render Settings dialog box, switch the Renderer over to Physical.

With Physical selected, dial in the rest — Depth of Field or Motion Blur options among them.

3. Setting default renderer as Physical renderer.
   Save the .c4d file with the renderer settings.

Whenever the effect's Renderer Settings option reads Current or Current (Draft), the Cineware effect adopts whatever renderer Cinema 4D has been told to use.

Note

Sketch and Toon can be governed per object inside Object Manager — attach Tags > Sketch Tags > Sketch Style to that object (the Maxon Cinema 4D Help documentation covers Sketch and Toon in more depth).

Render Sketch and Toon as follows:

Inside Cinema 4D, open the Create menu and pick Create > Material > Materials > New Sketch Material.

1. In the Render Settings dialog, set the pop-up to Renderer: Standard.
2. In the Render Settings dialog, ensure that Sketch and Toon post effects are added and checked.

Save the .c4d file with Sketch and Toon enabled.

With the effect's renderer settings on Current, the Cineware effect handles the Sketch and Toon render.

Tip

For details on the latest 3D Renderer that handles extruding text and shapes, consult Cinema 4D Composition Renderer.

## See also

- [Cinema 4D Composition Renderer](help-cinema-4d-composition-renderer.md)
