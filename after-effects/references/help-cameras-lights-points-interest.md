# Cameras Lights Points Interest (part 1)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Jan 21, 2026

### Build camera layers and adjust their settings inside Adobe After Effects.

## Create a camera layer and change camera settings

Camera layers let you take in 3D layers from any angle and any distance. Much as it's simpler in real life to move cameras through and around a scene than to haul and spin the scene itself, the easiest route to varied views of a composition is often to rig up a camera layer and move it around inside the composition.

You can tune and animate camera settings to line the camera up with the real-world camera and settings used to shoot the footage you're compositing. Those settings also let you fold camera-style behaviors — depth-of-field blur, pans, dolly shots — into synthetic effects and animations.

Cameras reach only 3D layers and 2D layers carrying an effect with a Comp Camera attribute. Through effects that have a Comp Camera attribute, the active composition camera or lights can view or light an effect from assorted angles to fake more elaborate 3D effects.

A composition can be viewed through the active camera or through a named custom camera. The active camera is whichever camera sits highest in the Timeline panel at the current time with its Video switch selected. That active camera view is the vantage point used for final output and for nesting compositions. With no custom camera created, the active camera matches the default composition view.

The 3D View menu down at the bottom of the Composition panel lists every camera, putting them within reach whenever you need.

Adjusting a camera tends to go easiest from one of the custom 3D views. Look through the camera itself and there's no way to see it well enough to manipulate it.

An example that shows Camera's point of interest, frame, and camera itself in the Composition panel.

A. Camera B. Point of Interest C. Frame

An example that shows Camera's point of interest, frame, and camera itself in the Composition panel.

## Create a camera layer

Choose Layer > New > Camera, or press Ctrl+Alt+Shift+C (Windows) or Command+Option+Shift+C (macOS).

By default a new layer starts at the top of the composition duration. You can instead have new layers start at the current time by clearing the Create Layers at Composition Start Time preference (Edit > Preferences > Composition (Windows) or After Effects > Settings > Composition (macOS)).

## Change camera settings

Camera settings stay editable throughout your work — adjust them whenever you need.

To open them, either double-click the camera layer in the Timeline panel, or highlight the layer and choose Layer > Camera Settings.

Note

Inside the Camera Settings dialog box, Preview comes turned on already. With it active, any edit you make is reflected live in the composition while the dialog box stays open.

Another route: pick the Camera layer and turn to the Properties panel, which gives fast access to the camera settings alongside the layer's transform controls.

Layer Transform and Camera Options in the Properties panel when a Camera layer is selected in a composition using the Classic 3D renderer.

Layer Transform and Camera Options in the Properties panel when a Camera layer is selected in a composition using the Classic 3D renderer.

## Camera settings

Type

Pick either One-Node Camera or Two-Node Camera. The one-node variety pivots about itself, while the two-node variety adds a point of interest and pivots about that point. Converting a camera to two-node is equivalent to switching its auto-orientation setting (Layer > Transform > Auto-Orient) over to Orient Towards Point of Interest.

Name

What this camera is called. The very first camera you add to a composition is labeled Camera 1 out of the box, with every camera after it numbered upward from there. When juggling several cameras, give each a memorable name so you can tell them apart.

Preset

Which group of camera settings to apply. Each preset carries the name of a focal length and is built to mimic how a 35mm camera behaves with a lens of that particular focal length. Choosing one therefore fills in the Angle of View, Zoom, Focus Distance, Focal Length, and Aperture values together. 50mm is the preset selected by default. Should you prefer, supply your own numbers for any of the settings to build a custom camera.

Zoom

How far the lens sits from the image plane. Put differently: sit a layer exactly the Zoom distance off and it shows at full size; place it twice that far and it renders half as wide and half as tall, continuing on that pattern.

Angle of View

How much of the scene the image takes in across its width. Three values — Focal Length, Film Size, and Zoom — set this angle. Widen the angle of view and you reproduce what a wide-angle lens would do.

Depth of Field

Feeds your own variables into four settings — Focus Distance, Aperture, F-Stop, and Blur Level. With those variables in play, you can shape the depth of field for camera-focus effects that read as more realistic. (Think of the depth of field as the span of distance over which the picture stays sharp; anything beyond that span comes out blurred.)

Focus Distance

How far the camera stands from the plane that lands in flawless focus.

Tip

Want the focal plane pinned to the camera's point of interest, keeping that point sharp? Attach the following expression to the Focus Distance property: length(position, pointOfInterest)

Lock to Zoom

Makes the Focus Distance value match the Zoom value.

Note

Edit the Zoom or Focus Distance values from the Timeline panel and the Focus Distance value breaks free of the Zoom value. To adjust the numbers while keeping them tied together, reach for the Camera Settings dialog box rather than the Timeline panel. As a second option, attach an expression to the Focus Distance property within the Timeline panel — choose the Focus Distance property > Animation > Add Expression, then pull the expression pick whip onto the Zoom property.

Aperture

The size of the lens opening. Aperture feeds into depth of field as well — open it wider and the depth-of-field blur grows. Adjust Aperture and the F-Stop values shift to stay in step.

Note

On a genuine camera, a wider aperture lets in extra light and so alters exposure. After Effects, in keeping with most 3D compositing and animation tools, disregards that side effect of changing the aperture values.

F-Stop

Stands for focal length divided by aperture. Cameras typically state aperture as an f-stop figure, which is why many photographers would rather dial the aperture size in f-stop units. Adjust F-Stop and Aperture shifts to stay in step.

Blur Level

How much depth-of-field blur shows up in a picture. At 100% you get the natural blur that the camera settings call for. Dial it lower and the blur eases off.

Film Size

How large the exposed region of film is, a figure tied straight to the composition size. Adjust Film Size and the Zoom value shifts to keep the perspective true to a real camera.

Focal Length

How far the film plane sits from the camera lens. Within After Effects, the camera's position stands in for the middle of the lens. Adjust Focal Length and the Zoom value shifts to keep the perspective true to a real camera; the Preset, Angle of View, and Aperture values also move to suit.

Units

Which units the camera setting values are stated in.

Measure Film Size

The dimensions used to depict the film size.

## Camera Commands

A set of camera commands ships with After Effects, usable on their own or together with the Create Stereo 3D Rig function. To reach them, highlight a layer and go to Layer > Camera.

Link Focus Distance to Point of Interest

Places an expression on the chosen camera layer's Focus Distance property, fixing that property at how far the camera lies from its point of interest.

Link Focus Distance to Layer

Places an expression on the chosen camera layer's Focus Distance property that sets it to the gap between the camera's position and a different layer. With this in place, focus trails that other layer on its own.

Set Focus Distance to Layer

At the current time, writes into the Focus Distance property the distance — measured at that same moment — between the camera and the layer you selected.

Tip

Learn more about adjusting Default Camera Settings for 3D compositions with no camera layers.

## Create a light and change light settings

Depending on the light's own settings together with the Material Options properties of the 3D layers it reaches, a light layer can shift the colors of those layers. Every light, unless told otherwise, aims at its point of interest.

Use lights both to illuminate 3D layers and to throw shadows. They let you echo the lighting of whatever scene you're compositing into, or push toward bolder, more striking visuals. As one example, a light layer can mimic light pouring through a video layer as though that layer were stained glass.

Animation is open to every setting on a light save two — its type and the Casts Shadows property stay fixed.

Spot Light

Parallel Light

Point Light

Ambient Light

Environment Light

To control which 3D layers a given light touches, mark that light as an adjustment layer. Position it in the Timeline panel above whichever layers should catch its glow. Any layer sitting higher than a light adjustment layer in the Timeline panel's stacking order goes unlit, no matter where those layers sit in the Composition panel.

## Create a light

Choose Layer > New > Light, or hit Ctrl+Alt+Shift+L (Windows) or Command+Option+Shift+L (macOS).

Whatever light you make carries the name of its light type. Add a spot light, for instance, and it arrives labeled Spot Light 1.

Swap the light type and the type's name updates by itself. That renaming happens only while the name stays untouched, and only when the light type isn't being changed from the Timeline panel. So if Spot Light 1 becomes a point light, After Effects relabels it Point Light 1 on its own.

## Change light settings

Either double-click a light layer inside the Timeline panel, or highlight the layer and choose Layer > Light Settings.

Turn on Preview within the Light Settings dialog box so that your edits there appear in the Composition panel as you make them.

A second option: choose the Light layer and turn to the Properties panel for swift entry to the light settings, plus the layer's transform controls alongside them.

Use the Layer Transform and Light Options in the Properties panel to work with the selected Light layer.

Use the Layer Transform and Light Options in the Properties panel to work with the selected Light layer.

## Light settings

Light Type

Parallel throws directional light without bounds from a source infinitely far off, much like sunlight. Spot confines its light within a cone, as a flashlight or a stage spotlight does. Point sends out omnidirectional light in every direction without constraint, like a bare bulb's rays. Ambient supplies light that has no origin point but raises a scene's overall brightness and throws no shadows. Environment builds lifelike lighting, reflections, and shadows from an image-based environment map.

Note

Since an Ambient light's location in space has no bearing on how it affects other layers, no icon represents it in the Composition panel.

Color

Which color the light gives off.

Intensity

How bright the light shines. Drop below zero and you get nonlight, which pulls color out of a layer. For instance, aim a directional light carrying negative values at a layer that is already lit and an area of that layer goes darker.

Cone Angle

The spread of the cone around a light's source, which fixes how wide the beam grows over distance. This control comes alive only when Light Type is set to Spot. In the Composition panel, the light icon's shape signals a spot light's cone angle.

Note

From After Effects CS6 onward, a chosen spot light's cone can reach all the way to its point of interest.

Cone Feather

How soft a spotlight's edges look. It does nothing unless Light Type is set to Spot.

Falloff

Which falloff style applies to a parallel, spot, or point light. Falloff is the way a light loses intensity the farther it travels.

The available falloff types are:

- None: Brightness holds steady no matter how far the layer sits from the light.
- Smooth: Gives an even linear falloff that begins at the Falloff Start radius and runs for the span set by Falloff Distance.
- Inverse Square Clampe: Gives a physically faithful falloff that begins at the Falloff Start radius and drops in proportion to the inverse square of the distance away.

Radius

Sets how far a light's falloff reaches. Within this range the light stays steady; past it the light begins to drop off.

Falloff Distance

Sets the span over which a light falls off from a light.

Casts Shadows

Controls whether the light makes a layer throw a shadow. For a layer to take a shadow, its Accepts Shadows material option has to be On, which is how it ships. For a layer to throw shadows, its Casts Shadows material option has to be On, and that one is not the default.

Note

Hit Alt+Shift+C (Windows) or Option+Shift+C (macOS) to flip Casts Shadows on or off for the layers you've selected. With AA tapped, the Timeline panel surfaces the Material Options properties.

Shadow Darkness

How dark the shadow comes out. This control is active only if Cast Shadows is selected.

Shadow Diffusion

Governs a shadow's softness according to how far it seems to sit from the layer casting it. Bigger numbers yield softer shadows. This control is active only if Casts Shadows is selected.

## Enable lights to cast shadows

Use new beta features

The ability to let lights throw shadows is open for testing and feedback right now. Give it a go in After Effects (beta).

Get started

While the Advanced 3D render engine is active, you can drop in Spot, Parallel, and Environment lights and switch on shadow-casting for them. That lets you stack assorted shadow types drawn from whichever light sources are supported.

Adjust the lighting to create shadows, making the scene more realistic and ensuring it interacts naturally with other 3D objects.

Adjust the lighting to create shadows, making the scene more realistic and ensuring it interacts naturally with other 3D objects.

Learn more about enabling lights to cast shadows in your 3D compositions.

## Adjust a 3D view or move a camera, light, or point of interest

Both camera and light layers carry a Point Of Interest property, which marks the spot in the composition that the camera or light is aimed at. Out of the box, that point sits dead center in the composition. Relocate the point of interest whenever you like.

The point of interest means nothing to a one-node camera. Learn more about camera settings.

Want a light to disregard its point of interest? In the light's Auto-Orientation options, pick anything other than Orient Towards Point of Interest.

Note

Just like any other property, a camera's or light's properties can be edited straight from the Timeline and the Properties panels too.

## Create a camera linked to a light

Choose Layer > Create > Control Light with Camera to build a camera tied to a light, so the light tracks the camera's motion and holds a steady relationship between the camera's viewpoint and the light's location. Link a Spot light to a Camera this way, for example, and changing the light's Cone Angle drives the bound camera's zoom.

Tying the Camera to a light through Control Light with Camera makes positioning that light far simpler, above all when it sits well outside the frame.

## Move a camera, light, or point of interest with the Selection and Rotation tools

Highlight a layer that is either a Camera or a Light.

With the Selection or the Rotation tool active, take any one of these actions:

To shift the camera or light together with its point of interest, hover the pointer over the axis you want and drag.

To shift the camera or light along just one axis while the point of interest stays put, Ctrl-drag (Windows) or Command-drag (macOS) that axis.

To shift the camera or light freely while the point of interest stays put, drag the camera icon or light icon.

To shift the point of interest, drag the point of interest icon .

## Move or adjust a camera or working 3D view with the Camera tools

The Camera tools in the Composition panel let you tune a camera layer's Position and Point of Interest properties.

Those same Camera tools also work on a working 3D view — a 3D view with no camera layer behind it. Picture 3D views as virtual cameras you look through to view and preview a composition. Among the working 3D views are the custom views together with the fixed orthographic views (Front, Left, Top, Back, Right, or Bottom), and they come in handy for staging and previewing pieces of a 3D scene. Tune a working 3D view with a Camera tool and no layer property values shift at all.

Once you've changed a 3D view, restore it by choosing View > Reset 3D View. Learn more about choosing and using 3D views.

Note

The Orbit Camera tool won't operate on the fixed orthographic views.

From the 3D View menu along the bottom of the Composition panel, pick the camera or 3D view you want to tune.

Activate a Camera tool.

Turn on a Camera tool either by clicking it in the Tools panel or by pressing C to step through the Camera tools. Selecting the Unified Camera tool and working the buttons of a three-button mouse is the quickest way to jump between the various Camera tools.

Orbit Camera

Spins the 3D view or camera by circling the point of interest. (With the Unified Camera tool active, hold the left mouse button to call up the Orbit Camera tool for a moment.)

Hold Shift while dragging with the Unified Camera tool active and the Orbit Camera tool kicks in briefly, locking rotation to a single axis.

Track XY Camera

Shifts the 3D view or camera side to side or up and down. (With the Unified Camera tool active, hold the middle mouse button to call up the Track XY Camera tool for a moment.)

Track Z Camera

Shifts the 3D view or camera along the line running to the point of interest. With an orthographic view, this tool instead resizes the view's scale. (With the Unified Camera tool active, hold the right mouse button to call up the Track Z Camera tool for a moment.)

Drag inside the Composition panel. Once a drag has started within the panel, you can carry it on beyond the panel's edges.

Whenever a 3D view has been altered, send it back to default through View > Reset 3D View.

## Move or adjust a camera or working 3D view to look at layers

A camera can also be moved, or a 3D view adjusted, so the focus falls on certain layers or every layer. After Effects then shifts the viewpoint and viewing direction to frame whichever layers you've picked.

- To aim a camera or 3D view at the layers you've selected, choose View > Look at Selected Layers.
- To aim a camera or 3D view at every layer, choose View > Look at All Layers.

The keyboard shortcuts that drive these commands are covered under 3D layers (keyboard shortcuts).

## Material Options properties

Every 3D layer carries Material Options properties, and these govern the way the layer responds to light and shadow.

Casts Shadows

Sets whether a layer throws shadows onto other layers. Where those shadows fall and at what angle follows the direction and angle of the light sources. Switch Casts Shadows to Only when you want the layer itself hidden yet still throwing a shadow.

Note

Pair the Only setting with a Light Transmission value above zero to cast the colors of an invisible layer onto another layer.

Light Transmission

What share of light makes it through the layer, throwing that layer's colors onto others as a shadow. At 0%, nothing passes through and the shadow comes out black. At 100%, the full color values of the shadow-casting layer land on the layer that accepts the shadow.

Note

Lean on partial light transmission to fake the look of light streaming through a stained glass window.

Accepts Shadows

Sets whether the layer displays shadows that other layers cast onto it. The Accepts Shadows control includes an Only choice for moments when you want a layer to render nothing but a shadow.

Accepts Lights

Sets whether the light landing on a layer changes that layer's color. Shadows stay unaffected by this setting.

Ambient

How much ambient (nondirectional) reflectivity the layer holds. 100% gives the greatest reflectivity; 0% gives none at all.

Diffuse

How much diffuse (omnidirectional) reflectivity the layer holds. Adding diffuse reflectivity is like laying a flat, plastic sheet across the layer — incoming light bounces off evenly in every direction. 100% gives the greatest reflectivity; 0% gives none at all.

Specular Intensity

How much specular (directional) reflectivity the layer holds. Specular light bounces off the layer the way it would off a mirror. 100% gives the greatest reflectivity; 0% gives none at all.

Specular Shininess

Fixes how large the specular highlight is. This value comes into play only when the Specular setting sits above zero. 100% yields a reflection bearing a small specular highlight; 0% yields one bearing a large specular highlight.

Metal

How far the layer's own color feeds into the color of the specular highlight. 100% means the highlight takes on the layer's color — picture a gold ring set to a Metal value of 100%, which throws back golden light. 0% means the specular highlight instead takes the color of the light source — for instance, a layer at a Metal value of 0% beneath a white light shows a white highlight.

## Specify resolution to use for rendering shadows

Compositions holding intersecting 3D layers are rendered by the Advanced 3D renderer. For shadows it relies on shadow maps — images rendered from each light source's vantage point. As a rule, shadow resolution is worked out for you from the composition resolution and the layers' quality settings. When that automatic resolution falls short of the quality you're after, or drags the render down, you can change the shadow map resolution yourself. Say shadows look blurry while the Shadow Diffusion material option reads 0 — then raise the shadow map resolution. Or, when shadows render too slowly, lower the shadow map resolution.

Where a shadow-casting layer cuts across another layer, a tiny gap behind the intersection that ought to be in shadow can sometimes appear. Raise the shadow map resolution to shrink that gap.

## Stereoscopic 3D

Adobe After Effects lets you build stereoscopic 3D videos.
