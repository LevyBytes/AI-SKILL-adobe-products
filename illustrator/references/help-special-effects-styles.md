# Apply Filter Effects, Create 3D Graphics

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Apply special effects and styles; Create drop shadows; Create an inner or outer glow; Feather object edges; Apply SVG filter effects; Work with SVG Interactivity; Create 3D vector artwork; 3D and Materials panel options; Map artworks on 3D object; Add artworks to the 3D panel; Render 3D vector artwork; Export 3D vector artwork; Create 3D text effects; Create 3D objects; Rotate objects in 3D; Add custom bevel paths.

## Apply special effects and styles

### Apply filter effects

Create drop shadows

Create an inner or outer glow

Feather object edges

Apply SVG filter effects

Work with SVG Interactivity

### Create 3D graphics

Create 3D vector artwork

3D and Materials panel options

Map artworks on 3D object

Add artworks to the 3D panel

Render 3D vector artwork

Export 3D vector artwork

Create 3D text effects

Create 3D objects

Rotate objects in 3D

Add custom bevel paths

### Apply graphic styles

Graphic Styles panel overview

Set graphic appearance styles

Work with Graphic Style Libraries

## Create drop shadows

Create drop shadows when design elements need extra depth or clearer separation.

Use the Selection tool to select an object or group, or select a layer in the Layers panel.

Choose Effect > Stylize > Drop Shadow.

In the Drop Shadow dialog box, change these settings:

- Mode: sets the blending mode used by the drop shadow.
- Opacity: controls the opacity percentage for the drop shadow.
- X Offset and Y Offset: sets how far the drop shadow is displaced from the object.
- Blur: sets the distance from the shadow edge over which blurring appears. Illustrator uses a transparent raster object to imitate that blur.
- Color: sets the shadow color.
- Darkness: controls the percentage of black added to the drop shadow. In a CMYK document, 100% with a selected object that has a nonblack fill or stroke produces a multicolored black shadow. When the selected object has only black fill or stroke, 100% creates a 100% black shadow. At 0%, the drop shadow uses the selected object's color.

Tune Mode, Opacity, Blur, and other Drop Shadow settings in Adobe Illustrator to strengthen depth and dimension.

Tune Mode, Opacity, Blur, and other Drop Shadow settings in Adobe Illustrator to strengthen depth and dimension.

Select OK.

## Create an inner or outer glow

Create an inner or outer glow in Adobe Illustrator when you want more depth or emphasis in a design.

Select an object or group, or choose a layer in the Layers panel.

Choose Effect > Stylize > Inner Glow or Effect > Stylize > Outer Glow.

To set the glow color, choose the color preview square next to the Mode menu.

Adjust this option in the dialog box that opens:

For artwork updates, use the options in the Inner Glow dialog box.

For artwork updates, use the options in the Inner Glow dialog box.

- Mode: sets the blending mode used by the glow.
- Opacity: controls the opacity percentage for the glow.
- Blur: sets the distance from the selection center or edge over which blurring appears.
- Center (Inner Glow only): creates a glow that starts from the selection center.
- Edge (Inner Glow only): creates a glow that starts along the selection's inside edges.

Note

After expanding an object with an inner glow effect, the inner glow appears as an opacity mask. Expanding an object with an outer glow turns the outer glow into a transparent raster object.

Select OK.

## Feather object edges

Feather object edges when they need to blend smoothly into a background or nearby elements.

Use the Selection tool to select the object or group, or select a layer in the Layers panel.

Choose Effect > Stylize > Feather.

In the Radius field, enter how far the object changes from opaque to transparent.

Select OK.

## Apply SVG filter effects

Apply default, custom, or imported SVG effects, and create new SVG effects when needed.

SVG effects (filters) can add graphic attributes such as drop shadows to artwork. These XML-based, resolution-independent effects render on the target object rather than on the source graphic.

You can start from a default SVG effect, edit its XML code for customization, or build a new effect.

### Apply a default effect

Choose an object or group, or choose a layer in the Layers panel.

Choose Effect > SVG Filters, then choose a default effect from the list.

### Apply a custom effect

Choose an object, group, or layer.

Choose Effect > SVG Filters > Apply SVG Filter.

Use the Apply SVG Filter dialog box to choose an effect, then choose Edit SVG Filter.

Customize the effect by choosing a default SVG filter and changing its code.

Customize the effect by choosing a default SVG filter and changing its code.

Change the default code, then choose OK to save the edits.

Choose OK again to apply the revised effect.

### Create and apply a new effect

Choose an object, group, or layer.

Choose Effect > SVG Filters > Apply SVG Filter.

Use the Apply SVG Filter dialog box to choose New SVG Filter.

Add the code for the new effect, then choose OK.

Choose OK again to apply the new effect.

After an SVG filter effect is applied, Illustrator displays a rasterized preview of the effect on the artboard. To adjust that preview image's resolution, open Effect > Document Raster Effects Settings and change Resolution.

Note

For objects with more than one effect, the Appearance panel lets you inspect the SVG effect. If any effect comes after an SVG effect, the SVG output contains a raster object.

### Import effects from an SVG file

Choose Effect > SVG Filters > Import SVG Filter.

Choose the SVG file whose effects you want to import, then choose Open.

## Work with SVG Interactivity

Add JavaScript to SVG artwork events, manage external scripts, and remove either one event action or all event actions.

### Add SVG Interactivity to artwork

Choose Window > SVG Interactivity.

In the SVG Interactivity panel, choose an SVG event from the Event dropdown menu.

Type the matching JavaScript, then press Enter (Windows) or return (macOS).

Choose an event and type the appropriate JavaScript code.

Choose an event and type the appropriate JavaScript code.

### List, add, or remove events linked to a file

From the SVG Interactivity panel, choose Link JavaScript files.

When the JavaScript Files dialog box opens, take the needed action:

- Add another JavaScript file by selecting Add, then choosing the JavaScript file on your system or typing the file's URL.
- Remove a JavaScript file by choosing its JavaScript entry in the list and then selecting Remove.

### Delete an event from the SVG Interactivity panel

Event cleanup can be handled from the SVG Interactivity panel, either for a single event or for every event.

For one event, choose the event and then select Remove Selected Entry.

For all events, open the panel menu and select Clear Events.

## Create 3D vector artwork

Use Image Trace, extrusion, lighting, and shadow effects in Illustrator to turn 2D sketches or images into 3D vector artwork.

### Trace your artwork into vector art

Turn a hand-drawn sketch into vector artwork with Image Trace. A sample 2D artwork is also available to try while following along.

Download sample file

Create artwork on paper, then scan it or take a photo.

From Illustrator, choose File > Place and bring the image into your document.

Select the placed image, then choose Object > Image Trace > Make to trace the image with default settings.

Keep the traced artwork selected.

Open the 3D and Materials panel with Window > 3D and Materials.

Under Object, enter values for Depth, Twist, and Taper.

Choose Rotation > Presets > Off-Axis - Front, then modify the X, Y, and Z axis values (0°–160°) as needed.

### Add lighting and shadows

Once Materials are applied to the 3D object, add lighting and shadows to build depth and realism.

Choose Lighting in the 3D and Materials panel.

Use the Lighting section in the 3D and Materials panel to add light presets and set their angles.

Set light presets and angles from the Lighting section in the 3D and Materials panel.

Choose a default preset such as Standard, Diffuse, Top Left, or Right. Change the light angle by dragging the light in the lighting widget, or by moving the Rotation and Height sliders.

Add more than one light by selecting Add Light. Up to 10 lights can be added, and each light can be adjusted separately.

Tip

When several lights are present, select one in the list before changing Color, Intensity, and Softness.

Set Ambient Light > Intensity to a value (0%–200%).

Turn on the Shadows toggle button to add a shadow. Tune the effect with settings such as Position, Distance from the Object, and Shadow Bounds.

With several lights and shadows enabled, the real-time preview still displays only one shadow. Switch to Render with Ray Tracing to view shadows from all lights.

## 3D and Materials panel options

With the 3D and Materials panel, 2D artwork can become dimensional designs that use depth, textures, lighting, and surface effects.

The 3D and Materials panel gives vector artwork volume, realistic surfaces, and related effects. Open it with Window > 3D and Materials.

### Object options

### 3D Type

Use 3D Type to choose the dimensional form for a flat 2D object and tune the structure that defines it.

Modify how 3D objects are built and how they look.

A. 3D Type B. Depth C. Twist D. Taper E. Cap

Use these controls to shape and style 3D objects.

### Bevel

Bevel controls add style and definition to 3D object edges. Change profile, size, and direction for smooth or decorative edge contours.

Refine 3D object edges with bevel controls.

A. Bevel Shape B. Width C. Height D. Repeat E. Space F. Bevel Inside G. Bevel both sides H. Reset

Use bevel controls to finish and define 3D object edges.

Option

Function

Bevel Shape

Chooses the edge style, including rounded or angular forms.

Width

Sets how far the bevel projects away from the edge.

Height

Sets the apparent height or depth of the bevel.

Repeat

Duplicates the bevel shape pattern along the bevelled edge to create decorative results.

Space

Sets the gap between repeated bevel shapes when Repeat is active.

Bevel Inside

Places the bevel inward instead of outward from the edge surface.

Bevel both sides

Applies the bevel on both object faces, front and back.

Reset

Returns every bevel setting to its default value.

| --- | --- |

### Rotation

Use rotation controls to change a 3D object's angle, orientation, and perspective on the X, Y, and Z axes.

Set 3D object alignment in all three dimensions.

A. Presets B. Rotate vertically C. Rotate horizontally D. Circular rotation E. Perspective

Use these controls for 3D object orientation across X, Y, and Z.

Option

Function

Presets

Uses rotation presets based on direction, axis, and isometrics.

X

Turns the object vertically (-180° to 180°).

Y

Turns the object horizontally (-180° to 180°).

Z

Spins the object in a circle (-180° to 180°).

Perspective

Sets whether the object looks nearer or farther away (0° to 160°).

| --- | --- |

### Materials options

Give 3D objects surface styling, texture, or graphics by starting with built-in materials or adding your own artwork.

Use this area to apply base materials and Substance assets, change material settings, and place graphics onto 3D geometry.

A. Base Materials B. Adobe Substance Materials C. Substance 3D assets D. Properties E. Substance 3D community assets F. Add and Delete Materials and Graphics G. Graphics

This group covers base materials, Substance assets, surface settings, and artwork mapping for 3D objects.

Option

Function

Base Materials

Applies the default material preset.

Adobe Substance Materials

Adds preset textures supplied by the Adobe Substance library.

Find more materials on Substance 3D assets

Opens the Adobe Substance 3D library so more materials can be chosen.

Find more materials on Substance 3D community assets

Brings in materials from the Adobe Substance community.

Add Materials and Graphics

Adds material choices or places artwork on the object as a graphic.

Delete

Removes the selected custom or applied material from the object.

Graphics

Places graphics or text onto the 3D effect.

Properties

Changes surface roughness and metallic intensity (0–1 range).

| --- | --- |

### Lighting options

Define lighting for a 3D object by selecting presets, repositioning lights, or changing color, intensity, and softness.

### Light Presets

Option

Function

Presets

Applies preset lighting effects, including Standard, Diffuse, Top Left, or Right, to the artwork.

Lighting widget

Allows light sources to be dragged and positioned around the object.

Light source

Provides controls for adding multiple light sources to make lighting more realistic.

Move selected light to the back/front of object

Sends the selected light behind the object if it is in front, or brings it forward if it is behind.

List of lights

Shows every light currently applied to a 3D object.

Add Light

Creates a new customizable light source in the scene.

Delete Light

Deletes the light selected in the list.

| --- | --- |

### Light Settings

Improve 3D-object illumination and perceived depth.

A. Color B. Intensity C. Rotation D. Height E. Softness F. Ambient Light

Use these settings to strengthen light and depth on 3D objects.

Option

Function

Color

Sets the selected light's color.

Intensity

Sets brightness for the selected light (0% to 100%).

Rotation

Moves the light focus around the object (-180° to 180°).

Height

Raises or lowers the light (0° to 90°), changing whether the shadow appears longer or shorter.

Softness

Sets whether the light edge appears soft or sharp (0% to 100%).

Ambient Light

Controls the scene-wide background light level (0% to 200%).

| --- | --- |

### Shadow settings

Adjust where shadows sit, how far they extend, and how broad they become after shadows are enabled.

Use shadow controls for position, distance, and bounds when building realistic depth on 3D objects.

A. Position B. Distance from Object C. Shadow Bounds

These controls manage shadow placement, offset distance, and bounds for depth in 3D objects.

Option

Function

Position

Sets the shadow to Behind Object or Below Object.

Distance from Object

Sets shadow distance closer or farther away (0%–100%).

Shadow Bounds

Changes the size of the area covered by the shadow (10%–400%).

| --- | --- |

## Map artworks on 3D object

Place artwork on a 3D object as a graphic map, then adjust it to build custom surface designs.

Map artwork onto 3D surfaces by using existing symbols or making new graphics. In Adobe Illustrator, each document has its own graphics. A 3D object is made of multiple surfaces, including forms like a cube, cylinder, or cone. With mapping, artwork can be applied to a specific surface; for example, use a bottle label or separate textures on different sides of an object.

With the Selection tool, choose artwork from the Illustrator document.

Open Window > 3D and Materials, then choose the Materials tab.

Within the All Materials & Graphics panel, use the lower-right Add Materials and Graphics icon, then choose Add as Single Graphic. You can also drag and drop a graphic into the 3D panel.

Choose the 3D object that should receive the mapped artwork.

In the All Materials & Graphics panel, open Graphics and choose the artwork thumbnail to apply it.

Apply the graphic selected for mapping onto the object.

Apply the selected graphic as the map on the object.

Drag the blue widget on the applied graphic to reposition the mapped artwork around the 3D object.

For an additional graphic, choose another thumbnail in Graphics after repeating steps 3-6.

Save or export the design after the 3D graphic has been applied.

## Add artworks to the 3D panel

Add one or more artworks as graphics and store them as reusable symbols.

Select the document object you want to add as a graphic.

Drag the object to the 3D and Materials panel and drop it. While dragging, hold Alt key (Windows) or option key (macOS) to add multiple objects; Illustrator adds them together as one graphic.

Confirm that the object appears as a graphic in both the 3D and Symbols panels.

Confirm that the object appears as a graphic in both the 3D and Symbols panels. The Graphics section of the 3D and Materials panel lists the graphic, while the Symbols panel saves it as a Symbol for reuse in later 3D projects.

### Add multiple graphics from a single artwork

Select artwork that contains multiple objects.

From the 3D and Materials panel, select the icon in its lower-right corner.

Choose Add as Multiple Graphics from the menu.

The objects in the artwork become separate graphics and are saved as Symbols in the Symbols panel for reuse.

Save new artwork as reusable symbols for later projects.

Keep new artwork stored as reusable symbols for future projects.

## Render 3D vector artwork

Render 3D vector artwork so depth and materials produce a finished, polished appearance.

Once 3D effects are applied in Illustrator, ray tracing renders the artwork with realistic lighting, shadows, and materials. Use it when exporting high-quality product mockups, 3D icons, and packaging designs.

### Render with Ray Tracing

Open Window > 3D and Materials.

Apply the needed 3D Type, then adjust Depth, Twist, and Taper for the object as needed.

Choose Render with Ray Tracing in 3D and Materials dialog box to create a high-quality preview with smoother lighting and shadows.

For realistic lighting and shadows on the 3D object, enable ray tracing in the 3D and Materials panel.

Use the 3D and Materials panel's ray tracing option when the 3D object needs realistic lights and shadows.

### Ray Tracing settings

Set the final output's export options and rendering quality.

Open the Render Settings dropdown in the 3D and Materials panel.

Turn on Ray Tracing.

Use Raster Settings to edit Resolution, Color, and Background for the raster image.

Set Quality as High, then select Render to create a polished, high-fidelity output of your 3D artwork.

Tip

High-quality rendering uses more CPU power. For quicker previews, lower the quality setting or pause background apps during rendering.

Review best practices for optimizing CPU usage while rendering the artwork.

### Render or expand 3D as wireframes

Wireframe view helps refine 3D properties or convert objects for more detailed edits.

After 3D effects are on the artwork, choose Wireframe in the Render Settings dropdown to edit object 3D properties such as Depth, Taper, and Twist in mesh view.

From Quick Actions in the Object tab, choose Expand as wireframes to turn the wireframe into editable paths.

Tip

Expanded wireframes are useful when exporting the shape or manually adjusting anchor points.

## Export 3D vector artwork

Export 3D objects from Adobe Illustrator.

Adobe Illustrator can export 3D objects as GLTF, USDA, USDZ, or OBJ. If multiple objects are exported, each one stays editable on its own.

Open Window > 3D and Materials.

From the 3D and Materials panel, choose Export 3D object.

In the Asset Export panel, choose the 3D asset, then choose GLTF, USDA, USDZ, or OBJ from the Format drop-down list. Format defaults to USDA.

Select Export.

Open export settings through the 3D and Materials panel and the Asset Export panel.

Use the 3D and Materials panel and the Asset Export panel to reach export settings.

## Create 3D text effects

Create a 3D text effect in Adobe Illustrator with the Pen tool and anchor points.

Stylized 3D text can be built by outlining text, duplicating shapes, and connecting paths so the artwork appears to have depth.

### Convert text to outlines

Enter text with the Type tool.

In the Properties panel, choose a bold or heavy font and set the font size to strengthen the 3D effect.

Use the Selection tool to select the text, then right-click and choose Create Outlines so the text becomes editable vector shapes.

Separate the letters by right-clicking the text and selecting Ungroup.

For each letter, right-click and select Release Compound Path.

Remove inner paths from letters such as B and O to make hollow shapes.

### Apply depth to the text

Select the outlined letters, hold Alt (Windows) or option (macOS), and drag to duplicate them.

Change the copy's stroke color so it is easy to distinguish from the original text.

Use the Pen tool or Direct Selection tool to join matching anchor points from the original shape to its duplicate.

Choose two open anchor points, then select Connect Selected End Points in the Control panel to create side faces.

Repeat for every letter until the 3D side faces are formed.

### Refine text appearance

Use the Pen tool to draw side faces manually, connecting corners of the original and offset shapes.

Set Fill color to None and apply a visible Stroke color so the faces are outlined while you draw.

After creating all side faces, select them and add solid fill colors for a more realistic 3D effect.

Remove strokes from the 3D faces to keep the appearance clean. For extra emphasis and clarity, you can also add a contrasting stroke around the complete letter group.

## Create 3D objects

Build 3D objects in Adobe Illustrator when vector artwork needs depth and dimensional form.

### Create a 3D object by extruding

Extruding gives a 2D object depth by projecting it along the object's z-axis. A 2D ellipse, for instance, turns into a cylinder after extrusion.

Choose the object.

Go to Effect > 3D and Materials > 3D (Classic) > Extrude & Bevel (Classic).

Use More Options when you need every setting, or use Fewer Options to collapse the additional controls.

Turn on Preview to check the result in the document window.

Adjust Position, Extrude & Bevel, and Surface according to the look you need.

Use the 3D Extrude & Bevel Options (Classic) dialog box for the settings needed by the extrusion.

Use the 3D Extrude & Bevel Options (Classic) dialog box for the settings needed by the extrusion.

Choose OK.

Note

The object's axis remains at a right angle to the object's front surface. If you rotate the object in the 3D Options dialog box, that axis shifts with the object.

### Create a 3D object by revolving

Revolving forms a 3D object by rotating a path around the global Y axis. Because that axis stays vertical, draw the path as one half of the object's profile, facing forward in a vertical position. The object's orientation can then be changed in the effect dialog box.

When you apply this effect to several objects separately, each object revolves on its own axis in its own 3D space. If the same effect targets a group or layer, all included objects revolve around one common axis.

Choose the object.

Go to Effect > 3D and Materials > 3D (Classic) > Revolve (Classic).

Turn on Preview to check the result in the document window.

Use More Options when you need every setting, or use Fewer Options to collapse the additional controls.

Adjust Position, Revolve, and Surface according to the look you need.

For a revolved 3D object, choose the settings in the 3D Revolve Options (Classic) dialog box.

For a revolved 3D object, choose the settings in the 3D Revolve Options (Classic) dialog box.

Select OK.

## Rotate objects in 3D

Rotate objects in 3D in Adobe Illustrator when you want deeper forms and more dynamic viewing angles.

Choose the object.

Go to Effect > 3D and Materials > 3D (Classic) > Rotate (Classic).

In the 3D Rotate Options (Classic) dialog box, enable Preview so the document window shows the effect.

Use More Options when you need every setting, or use Fewer Options to collapse the additional controls.

Control the object's rotation and surface treatment with these settings:

- Position: controls the object's rotation and the angle from which it is viewed.
- Surface: builds surface treatments ranging from flat, unlit matte looks to shiny highlighted appearances that resemble plastic.

Change the view angles and surface treatment to shape the object's 3D appearance.

Change the view angles and surface treatment to shape the object's 3D appearance.

Select OK.

## Add custom bevel paths

Create an open-path custom bevel and use it on 2D or 3D objects.

Open Bevels.ai from the Adobe Illustrator support folder on your computer:

- Windows: C:\Program Files\Adobe\Adobe Illustrator <year>\Support Files\Required\Resources<locale>
- macOS: /Applications/Adobe Illustrator <year>/Support Files/Resources/<locale>

Draw one open path that will serve as the custom bevel.

To turn the path into a symbol, choose Window > Symbols, and then use one of these methods:

- Move the path into the Symbols panel.
- Choose the path, and then use New Symbol icon in the Symbols panel.

To rename it, double-click New Symbol icon, enter the replacement name, and select OK.

Save the file. If File > Save does not work, use Save As and save the file somewhere else. Then move it back to the original folder so it replaces the prior file.

Restart Illustrator so the new bevel loads into the list.

Choose Effect > 3D and Materials > 3D Classic > Extrude & Bevel (Classic), and then open the Bevel dropdown to see your custom bevel.

To use the custom bevel, follow the path that matches the artwork:

- For an extruded 3D object, select the 3D object, open Window > Appearance panel, and double-click the Extrude & Bevel (Classic) effect. In the 3D Extrude & Bevel Options (Classic) dialog box, choose the bevel from the Bevel dropdown.
- For 2D artwork, choose the 2D object; then use Effect > 3D and Materials > 3D Classic > Extrude & Bevel (Classic). Open Bevel dropdown and pick the custom bevel.
