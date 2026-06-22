# Tracking 3D Camera Movement, Adjust Default Camera Settings For 3D Compositions, Cast And Accept Shadows, Embedded 3D Model Animations ...

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Tracking 3D camera movement; Adjust Default Camera Settings for 3D compositions; Cast and accept shadows; Embedded 3D model animations; Shadow catchers; 3D depth data extraction; Modify materials properties of a 3D layer.

## Tracking 3D camera movement

Search Last updated on Jan 19, 2026

### How to track 3D camera movement in After Effects, the key to dropping 3D elements into your footage.

### 3D camera tracker effect

By studying a video sequence, the 3D camera tracker effect recovers the camera's motion along with 3D scene data. Having that 3D camera motion is what lets you composite 3D elements correctly over your 2D footage.

Note

Much like the Warp Stabilizer, the 3D camera tracker effect runs its analysis on a background process. Go ahead and change settings or work elsewhere in your project while that analysis runs.

### Analyzing footage and extracting camera motion

Having selected a footage layer, take any one of these routes:

- Select Animation > Track Camera.
- Select Effect > Perspective > 3D Camera Tracker.
- In the Tracker panel, select the Track Camera button.

This applies the 3D Camera Tracker effect. Analysis and solving run in the background, and their status shows up as a banner on the footage as well as beside the Cancel button.

Tune the settings however you need. The solved 3D track points show up as little colored x's, and you can use them to drop content into the scene.

Note

The 3D Camera Tracker effect lets you camera-track several layers at the same time.

### Attaching content into a scene containing a solved camera

With the effect selected, pick the track point — or several that together define a best-fit plane — to act as the attach point.

Pass the cursor between three neighboring unselected track points capable of defining a plane and a semitransparent triangle shows up between them, along with a red target that signals how the plane sits within 3D space.

To grab several track points at once, drag a marquee-selection box around them.

With the cursor over the selection or target, right-click and pick which kind of content to spawn. These are the options:

- Text
- Solid
- Null layer for the center of the target
- Text, solid, or null layer for each selected point
- Shadow catcher layer (a solid that accepts shadows only) for the created content by using the Create Shadow Catcher command in the context menu.

Note

- Whenever a shadow catcher layer is made and no light exists yet, one is created alongside it.
- When several layers are produced at once, each gets its own numbered name; with multiple text layers, In and Out points are trimmed to line up with the point durations.

### Moving the target to attach content to different location

Shifting the target so content can be attached somewhere else goes like this:

1. Hovering over the target's center brings up the "move" cursor for repositioning it.
2. Drag the center of the target to desired location.

Once it sits where you want it, the context-menu commands let you attach content.

Note

When targets are too small or too large to make out, resize them to better picture the planes. A target's size also sets the default dimensions of text and solid layers spawned from the context-menu commands.

### Resizing a target

Resizing a target can be done either way below:

- Adjust the Target Size property.
- Hold Alt-click (Windows) or Option-click (macOS) while dragging out from the target's center. Over the center, a cursor sporting horizontal arrows lets you resize the target.

### Selecting and deselecting track points

Any one of these will select track points:

- Click a single track point.
- Click in the gap among three adjacent track points.
- Rope in several points with a marquee-selection box.
- Shift-click, or drag a Shift-marquee selection box over the track points, to fold more of them into whatever is already selected.

To clear track points from the selection, use either method:

- On already-selected points, Alt-click (Windows) or Option-click (macOS).
- Click somewhere off the track points entirely.

Note

The 3D Camera Tracker effect can be thrown off by objects in motion, sometimes reading points on stationary objects near the camera as moving because of parallax. Delete the bad or unwanted points to help the camera solve.

### Deleting unwanted track points

Clearing out track points you don't want goes like this:

Select the points in question.

Hit Delete, or pick Delete Selected Points from the context menu.

With the unwanted track points gone, the camera resolves; you can keep removing points while that resolution proceeds in the background. Removing a 3D point also removes its matching 2D point.

### Creating a shadow catcher layer

Spinning up a shadow catcher layer is a quick route to believable shadows for the effect. Such a layer is a white solid matched to the footage size but configured to accept shadows only.

### Effect controls for the 3D Camera Tracker

The effect has the following controls and settings:

Analyze/Cancel

Kicks off or stops the background pass over the footage. As it works, a status banner rides on the footage and sits beside the Cancel button.

Shot Type

Declares whether the footage came from a fixed horizontal angle of view, a variable zoom, or a particular horizontal angle of view. Altering this calls for a resolve.

Horizontal Angle of View

Fixes which horizontal angle of view feeds the solver. This field wakes up only once Shot Type carries the value Specify Angle of View.

Show Track Points

Marks detected features either as 3D points with perspective hinting (3D Solved) or as 2D points grabbed by the feature track (2D Source).

Render Track Points

Decides whether the track points render as part of the effect.

Note

While the effect is selected, track points always appear, whether or not Render Track Points is on. Turning it on draws the points into the image so they remain visible during preview.

Track Point Size

Scales how large the track points appear on screen.

Create Camera

Builds the 3D camera. Spawning a text, solid, or null layer from the context menu brings one in on its own.

Advanced controls

These advanced controls belong to the 3D camera tracker effect:

- Auto Detect: works out the scene type on its own.
- Typical: Flags the scene as one that is neither purely rotational nor largely flat.
- Mostly Flat Scene: Flags the scene as largely flat, or planar.
- Tripod Pan: Flags the scene as purely rotational.

- Method Used: With Solve Method on Auto Detect, this shows which solve method was actually applied.
- Average Error: Reports the mean distance (in pixels) separating the original 2D source points from a reprojection of the solved 3D points back onto the source footage's 2D plane. A flawless track/solve would read 0 here, and toggling between 2D Source and 3D Solved track points would reveal no difference. Watch this figure to judge whether deleting points, switching the solve method, or other tweaks are pulling it down and thereby sharpening the track.
- Detailed Analysis: Checking this pushes the next analysis pass to work harder at finding things to track. The data it produces (kept in the project as part of the effect) grows much larger and slower with the option on.
- Auto-delete Points Across Time: Thanks to the new Auto-delete Track Points Across Time option, deleting track points in the Composition panel also removes the matching ones (i.e., track points on the same feature/object) at other times along the layer. There's no need to delete track points frame by frame to sharpen the track. You might, for instance, clear track points on someone running through the scene, since their movement shouldn't factor into how the camera's own motion is judged.
- Hide Warning Banner: reach for this when a banner is urging reanalysis but you'd rather leave the footage as is.

### Ground plane and origin in 3D Camera Tracker effect

Within the 3D Camera Tracker effect you can establish a ground plane (reference plane) and an origin — for instance, the coordinate system's (0,0,0) point.

Analyze the scene using the 3D Camera Tracker effect.

Pick a group of tracking points. Doing so brings up the bullseye target, which reveals the plane those selected points define.

If you like, drag the target by its center to slide it along the plane, settling the center wherever the origin should sit.

On the target, Right-click (Windows) or Control-click (macOS), then choose Set Ground Plane and Origin.

Nothing visible happens, yet the coordinate system's reference plane and origin are now stored for this scene. Whatever you create from inside this instance of the 3D Camera Tracker effect adopts that plane and origin.

Note

Pick Set Ground Plane And Origin a second time and a warning notes that objects already built on a different ground plane and origin will not be revised to the new one.

### Auto-delete Points Across Time

Inside the effect's Advanced section sits an option called Auto-delete Points Across.

Switch it on, and deleting track points in the Composition panel also clears the matching ones (for example, track points on the same feature or object) at other times along the layer, sparing you from deleting them frame by frame to sharpen the track. You might, say, remove track points for a person crossing the scene, whose movement shouldn't weigh in when working out how the camera was moving. The approach covers both 2D Source and 3D Solved track points.

Selected track points can be deleted with the Delete key or by context-clicking and choosing Delete Selected Points.

Note

Having the new Auto-delete Points Across feature available doesn't stop you from also, or instead, putting an alpha channel on the layer to keep the 3D Camera Tracker effect from weighing a particular region of the image when determining a camera.

### Export 3D Camera Tracker data to 3D applications

3D Camera Tracker results can be sent out to external 3D packages such as MAXON CINEMA 4D.

Choose File > Export > Maxon Cinema 4D Exporter.

When the Text Exporting dialog box appears, pick either the Extrude or Text option.

Give the file a name and choose Save.

Bring the file into your 3D application to open it.

## Adjust Default Camera Settings for 3D compositions

Search Last updated on Nov 13, 2025

### Learn to adjust custom views and camera settings using the View menu, whether through a camera layer, active camera, or custom view.

Whenever a composition is in 3D, or layers have 3D enabled, the scene can be viewed through camera layers — and those cameras can be both customized and keyframed for animation. Even with no camera layer in place, the Orbit, Pan, and Dolly tools in the Composition panel still let you move through 3D space by relying on the hidden Default Camera view.

Whenever camera layers exist, the Active Camera view reveals whatever the uppermost enabled camera is looking at. Should there be no camera layers, the composition falls back automatically to the Default Camera view, or to whichever camera view happens to be selected at the moment (for instance, one of the Custom Views).

Recent builds let you tweak the Default Camera settings — or settings for any other camera view chosen in the Composition panel view menu. Even with other cameras living in the composition, the default camera can be picked deliberately.

Beyond what the 3D View menu offers, several additional routes now let you change the Default Camera settings:

- Layer > Camera > Default Camera Settings
- View > Default Camera Settings
- Right-click the layer in the Timeline panel > Camera > Default Camera Settings
- 3D View menu in the Composition panel > Default Camera Settings.

Pick the layer, then open Default Camera Settings to inspect and tweak its camera properties.

Pick the layer, then open Default Camera Settings to inspect and tweak its camera properties. Note

Editing isn't possible for every camera view. Only the default camera and the custom views accept changes. Orthogonal camera views — Top, Left, Right, and Bottom — are standard views whose camera settings stay locked.

Working across several camera layers? After Effects makes it easy to know which camera is in play. Reaching camera settings by way of the View or Layer menus surfaces the camera layer's name, so the one under edit is never in doubt.

To make clear which layer's settings you're altering, the layer name appears alongside the layer settings in the View menu.

To make clear which layer's settings you're altering, the layer name appears alongside the layer settings in the View menu.

When a layer name already contains the word "Camera," After Effects skips repeating it. The result is cleaner, more legible menus — a real help on dense projects packed with layers and compositions.

For example:

- A camera named Shotcam will show as Shotcam Camera Settings.
- A camera named Shotcamera will display as Shotcamera Settings.

Light, Solid, and Model layers follow this very same naming convention.

So you can pinpoint exactly which layer is being changed, the Layer menu carries the layer name.

So you can pinpoint exactly which layer is being changed, the Layer menu carries the layer name.

### More like this

- Cameras, lights, and points of interest
- Tracking 3D camera movement
- 3D layers
- Layer properties

## Cast and accept shadows

Search Last updated on Feb 7, 2024

Decide how 3D objects respond to lighting and shadows within your composition by setting up their cast and receive shadows properties.

A layer holding 3D objects exposes Compositing Options, which is where you set whether those objects cast and receive shadows. Such properties matter a great deal: they establish how the 3D objects in a scene relate to one another and react to light and shadow.

Before you begin:

Start a fresh composition, bring in 3D models, and place an environmental light.

Within the Timeline panel, pick the layer whose 3D objects need their shadow properties set up.

Open the properties by twirling them down, then choose Composition Settings to reveal the Casts Shadows and Accepts Shadows options.

To set up the Casts Shadows properties, define these parameters:

- On: Switching the Casts Shadows option On makes the layer's 3D models throw shadows driven by the composition's environment light source.

- Off: Switching the Casts Shadows option Off stops the layer's 3D models from throwing any shadow at all.

- Only: Choosing Only keeps the layer's 3D models out of view while they continue to throw shadows.

3. Specify the Casts Shadows option as Only to hide the 3D object in the layer but still allow it to cast shadows.
   To set up the Accepts Shadows properties, define these parameters:

- On: With the Accepts Shadows option set to On, the layer's 3D models take on shadows from any asset that has Casts Shadows turned on.

- Off: With the Accepts Shadows option set to Off, the layer's 3D models reject shadows from assets that have Casts Shadows turned on.

- Only - Disabled: In contrast to Casts Shadows, picking Only - Disabled leaves the composition's shadow behavior untouched.

Wrap up your animation workflow, then export and render the composition the usual way.

## Embedded 3D model animations

Search Last updated on Apr 2, 2025

Learn to import 3D model files with embedded animations and incorporate them into your After Effects composition.

Embedded animation — even fully-rigged character motion — can travel inside GLB, GLTF, and FBX models. Bring such 3D model files into your After Effects project and the existing animation becomes available for you to fold into the composition. They behave like any other 3D layer: animate their transforms, reposition the camera, light them differently, and mix them with other models.

Before you begin:

Make sure you have on hand a GLB, GLTF, or FBX 3D model carrying embedded animations.

Start a fresh project and bring a 3D model file into After Effects.

Drop it into your composition and define the Model Settings.

Within the Timeline panel, twirl open the 3D model layer's properties.

Open the Animation Options and, from the Name dropdown menu, pick whichever animation belongs in your composition.

With a 3D model selected in the composition, the Properties panel offers another way to reach the embedded animations carried in the 3D models.

Run a preview of the composition to confirm the correct embedded animation is chosen. If it isn't, return to the dropdown menu and pick the right one.

### Result

The chosen embedded animation lands in the composition. Trim it the way you would a footage layer, or use Time Remapping to retime it.

## Shadow catchers

Search Last updated on Jun 18, 2024

Make composites over 2D content look more believable by dropping shadows onto a 3D shadow catcher.

Think of a shadow catcher as its own separate plane or surface, sitting behind or beneath the object, that receives the shadows other objects throw. Although built specifically to capture shadows, this 3D layer is otherwise see-through, which lets the shadows look as though they land on the 2D layer below.

Set Accepts Shadows to Only under a shadow catcher layer's Material Options properties, and After Effects renders the layer itself invisible (transparent) yet still able to catch shadows thrown by objects on the layers above.

A sample showing the shadow catcher layer both before and after Accepts Shadows is set to Only.

Before you begin:

Bring a video clip or image plus a 3d model into your project.

Drop a video or image onto the timeline to serve as the composition's background.

Bring in a 3D model whose job is to throw a shadow.

Place an Environment light to serve as the light source for the added 3D model's shadow.

Create a solid layer and turn it into a 3D layer. Using the X Rotation property beneath Transform, rotate it so it lines up with whatever surface should receive the shadow.

The easiest pick is a solid, though any 3D layer capable of accepting shadows works as a shadow catcher.

Position the Solid layer beneath the 3D model so it acts as a shadow catcher layer.

A. Layer with a 3D model that is to cast the shadow B. Solid 3D layer that acts as a shadow catcher C. Layer with a video or an image on which the 3D model shadow is cast

5. The sequence of layers in the timeline utilizes the shadow catcher layer for natural-looking shadows on the background.
   Confirm that Casts Shadows is enabled for the 3D model.

Twirl open the 3D solid layer's properties, and beneath Material Options, flip the Accepts Shadows option to Only.

7. Set the Accepts Shadows property as Only so that the layer accepts the shadows but is invisible in the composition.
   Should you want to fine-tune how the shadow catcher layer responds to light, change the values of the properties under Material Options.

Black is the Shadow Color default, but adjusting the Shadow Color property lets you push your shadows toward a more natural or imaginative tint.

9. Use the Shadow Color property to add a natural shadow tone and create a realistic composite.

Tip

Got embedded animations in your 3D model? Reach for the Animation Options to choose the animation for the composition. While that animation runs, the shadow on the shadow catcher layer updates and is recast to match.

### Result

The 3D model begins throwing its shadow onto the shadow catcher layer. Because that catcher layer holds nothing but the shadow and is otherwise transparent, the effect reads as if the 3D layer casts its shadow straight onto the background layer.

### More like this

- Import and add 3D models to your composition
- Image-Based Lighting
- Cast and accept shadows
- Modify materials properties of a 3D layer

## 3D depth data extraction

Search Last updated on Jun 18, 2024

Pull depth data out of a 3D scene and turn the resulting depth maps into more believable 3D composites.

Grabbing depth data from an Advanced 3D scene now works just as it does with the Classic 3D and Cinema 4D renderers. Depth maps built from that depth data let you craft more believable composites — by mimicking how a real camera behaves on 3D renders, or by targeting effects at one region of a 3D scene according to its depth.

After Effects gives you two routes for putting this depth data to work:

- Create a depth map via the 3D Channel Extract effect
- Apply one of the 3D Channel effects that can reference depth data directly

### Create a depth map using the 3D Channel Extract effect

3D Channel Extract produces a grayscale depth map: scene areas nearer the camera read brighter, while more distant elements read darker. Feed that map into other effects, such as a post-processing blur or color correction. Shifting the black and white point alters the map's range, and those same values double as a handy reference when you dial in other depth-aware effects.

The look before and after the 3D Channel Extract effect is applied to build a depth map from extracted depth data.

Build a 3D scene, then precompose it by picking the timeline layers > Layer > Pre-compose.

Name the precomposition.

Pick the precomp and choose Effect > 3D Channel > 3D Channel Extract.

With the effect applied, the Composition panel shows depth data that records how far each point on a surface sits from the camera. Distance from the camera reads as black, while the nearest points read as white.

Over in the Effect Controls panel, beneath the 3D Channel Extract effect, the Black Point and White Point options let you tune their values and range.

From here, layer effects onto this depth map to produce stylized animation variants.

A sample in which the Colorama effect is applied to the depth map built with the 3D Channel Extract effect.

### Apply 3D Channel effects that can reference depth data directly

There's no need for 3D Channel Extract with Depth of Field and Fog 3D. By imitating how a camera behaves, these effects yield more believable composites — and can just as easily push toward exaggerated, stylized results.

Depth Matte likewise taps depth data directly; animate it for depth-driven transitions, or leave its settings static to carve out a partial matte of a scene or to slot 2D layers into the heart of a 3D scene.

### More like this

- Advanced 3D renderer
- Embedded 3D model animations
- 3D Channel effects
- Blur and Sharpen effects

## Modify materials properties of a 3D layer

Search Last updated on Nov 13, 2025

Learn about working with material options in Adobe After Effects and how to modify them to create a wide variety of materials for 3D layers in your compositions.

Under Advanced 3D, anything built inside After Effects itself can render with Adobe Standard Material. Through Material Options you can tune the materials properties of synthetic 3D layers — text, shapes, solids — to build an assortment of materials that respond convincingly to light and reflection.

Drop a solid, text, or shape layer into the composition.

Switch on the layer's 3D Layer switch.

2. Identify the layer, activate the 3D Layer switch to convert the layer into a 3D layer, and use Material Options to work with the textures.
   With the 3D layer selected, twirl it down to Material Options, or press A + A on the keyboard.

3. Select the layer with the activated 3D switches to use Material Options and work with the textures.
   Change the values for these properties:

Ambient

How much of After Effects' ambient light reaches the layer, assuming any exists at all (sometimes there's none). It works much like the Adobe Standard Material emissive property, yet it throws no light onto neighboring objects.

Diffuse

Tied to the Adobe Standard Material (ASM) Base Color channel, this carries through the layer's own native color — the color shown when you view it in 2D. Push this to 100 and you'll land closest to a layer's 2D appearance.

Specular Intensity

Tied to the Adobe Standard Material (ASM) specular level.

Specular Shininess

Usually pictured as the inverse of Adobe Standard Material (ASM) roughness (0 is very rough, 100 is very shiny). Bear in mind the response isn't linear, so the clearest changes tend to show up around the middle of the range.

Metal

Governs the degree to which a surface shifts the color of specularly reflected light.

Tip

- For lights as physically accurate as your new physically accurate materials, switch the light's falloff to Inverse Square Clamped (Double-click the light layer in the Timeline panel > Falloff > Inverse Square Clamped > OK). The payoff is a natural, realistic gradient as objects drift away from the light.
- To get a 3D layer matching its 2D version as tightly as you can, raise Ambient and Diffuse to 100 while dropping Specular Intensity, Specular Shininess, and Metal to 0.
- Matching 3D renditions of 2D art can prove trickier with Environment Lights, since the lights and artwork interact a great deal more.
- For now, After Effects derives reflections only from Environment Lights. With 3D layers in a composition but no lights present, After Effects relies on a hidden default Environment Light, and that environment shows up reflected in your 3D object. Adding a light layer switches off that default Environment Light. To bring reflections back, hand-add an Environment Light that points at an .HDR file.
- Parametric meshes are yours to create, and you can apply Substance 3D Materials to them. (Currently in beta)

### More like this

- 3D Draft Preview in After Effects
- 3D Transform Gizmos
- Work in 3D Design Animation Space
- Tracking 3D camera movement
