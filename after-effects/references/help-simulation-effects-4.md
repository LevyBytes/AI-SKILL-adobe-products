# Simulation Effects (part 4)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## View controls

What the View control does is dictate precisely how a scene shows up in the Composition panel, offering these views:

Rendered

Shows the pieces complete with textures and lighting—the way they'll appear in the final output. Lean on this view when rendering the animation.

Wireframe Front View

Shows the layer head-on from a full-screen camera with no perspective. Turn to this view to tweak effect points and other parameters that are tough to make out at an angle. On top of that, the shatter map's outlines are visible, so you can position, rotate, and scale the shatter pattern exactly. Flipping between it and the perspective view you use for the scene is convenient.

Wireframe

Shows the scene in proper perspective so you can rapidly arrange the camera to your taste and fine-tune the Extrusion Depth.

Wireframe Front View + Forces

Shows the layer's wireframe front-view rendering plus a blue depiction of every force sphere.

Wireframe + Forces

Shows the wireframe view plus a blue depiction of the force spheres. Camera controls come with this view, letting you set everything precisely in 3D space.

## Render control

What the Render control does is render the entire scene (the default), the intact layer, or the broken pieces on their own. Suppose you want the Glow effect on the broken pieces alone and not on the parts of the layer that stay whole: build the explosion and duplicate the layer. Then, for the back layer, pick Layer from the Render menu, and for the front layer, pick Pieces. Now apply the Glow effect to the front layer.

## Shape controls

What Shape controls do is dictate the form and look of the broken pieces.

Pattern

Names the preset pattern the exploded pieces will follow.

Custom Shatter Map

Names the layer you'd like to shape the exploded pieces.

White Tiles Fixed

Keeps pure white tiles in a custom shatter map from exploding. Reach for this control to make certain parts of a layer stay whole.

Note

Turn to this control when your shatter map relies on images or letters like O: set the part you'd rather keep intact — say, the insides of the O and the background — to pure white, and the rest to some other pure color.

Repetitions

Names the scale of the tile pattern. It only works alongside the preset shatter maps, every one of which tiles seamlessly. Raising it multiplies the on-screen pieces by shrinking the shatter map, so the layer fractures into more, smaller pieces. Animating this control isn't advised, since it can trigger abrupt leaps in how many pieces appear and how big they are.

Direction

Spins the orientation of a preset shatter map against the layer. As with Repetitions, animating this control brings on sudden leaps in the animation and isn't advised.

Origin

Places a preset shatter map on the layer with precision. The option helps when you want to line up parts of an image with particular broken pieces. Animating this control brings on sudden leaps in the animation and isn't advised.

Extrusion Depth

Lends a third dimension to the exploded pieces. A higher value makes thicker pieces. Under Rendered view, you won't see this until the shatter begins or you swing the camera. Push this control higher and the pieces may overlap one another. That rarely causes trouble in full-speed animations, though it can show once the pieces turn thick and slow down.

## Force 1 and Force 2 controls

Two separate Forces drive the blast regions through the Force 1 and Force 2 controls.

Position

Sets where the blast is currently centered within (x,y) space.

Depth

Marks the present center along the z axis — that is, the blast point's distance ahead of or behind the layer. Tune Depth to govern how much of the blast radius reaches the layer. Since the radius traces a sphere while the layer stays a plane, the sphere meets the plane only along a circular slice. As the layer sits farther from the blast's center, that circular slice shrinks. Exploding pieces travel outward from the force center, and Depth dictates their direction: positive numbers throw the fragments forward toward the camera (given the default camera setting of 0, 0, 0), while negative numbers drive them backward, away from the camera. The Wireframe + Force Sphere view lets you observe what a given Depth setting does.

Radius

Sets how large the blast sphere becomes. Measured as the span from a circle's (or sphere's) center out to its edge, this value lets you dial in precisely which fragments break apart. Altering it shifts both how fast and how thoroughly the explosion plays out. Keyframing it from a small to a large value produces an expanding, shockwave-style burst.

Note

Animate the Radius property — not the Strength property — when you want shattering to begin at some moment other than layer time zero. Gravity drags any pieces sitting inside the force sphere defined by Radius out past the frame even with Strength at 0. Hold the Radius property at 0 using Hold keyframes right up until the moment shattering should kick off.

Strength

Sets how quickly the burst fragments move — that is, how forcefully they get flung from or drawn back toward the blast point. Positive values push the pieces outward from that point; negative values pull them inward toward it. A larger positive value sends them flying faster and farther from the center, whereas a larger negative value launches them more rapidly toward the heart of the force sphere. Once launched, the pieces escape the force sphere's influence and the Physics settings govern them instead. A negative Strength does not vacuum the fragments into a black hole; rather, they pass through one another and exit the far side of the sphere. A low Strength fractures the layer into shapes and opens cracks without actually scattering the pieces. Whenever gravity is set to anything but 0, the fragments drift along gravity's pull after they break up.

Note

Each shatter fragment comprises vertices (the dots or points marking the shape's corners), edges (the lines joining those dots), and planes (the shape's walls). To decide when a shape has touched a force sphere, Shatter watches for the moment a vertex meets the sphere.

## Gradient controls

Which gradient layer governs an explosion's timing, and which fragments the blast hits, is set through the Gradient controls.

Shatter Threshold

Sets which fragments inside the force sphere break apart, keyed to the matching luminance on the chosen gradient layer. At a Shatter Threshold of 0%, nothing in the force sphere shatters. At 1%, only the fragments matching white (or nearly white) regions of the gradient layer break. At 50%, every fragment matching the white-through-50%-gray regions shatters. At 100%, the whole force sphere shatters. With 256 gray shades in play (black and white counted), roughly 2.5 shades map to each percentage point.

Keyframing Shatter Threshold steers when the explosion happens. Held at 0%, the layer never blows apart. Set a Shatter Threshold keyframe at 50%, though, and the force-field fragments matching gradient-layer regions running from white to 50% gray explode. Push Shatter Threshold on up to 100% and the rest of the force sphere's fragments follow.

Gradient Layer

Sets which layer decides the moment particular regions of the target layer break apart. Regions that are white go first; black ones go last. Shatter maps pixels to fragments by carving the layer into pieces, each carrying a center or balance point. Overlay the shatter map onto the gradient layer, and the gradient-layer pixels lying exactly beneath each balance point drive the explosion.

Note

A handful of shapes — the letters C and U, say — carry a balance point that lands outside the shape's real boundaries. In that case, steer clear of grayscale renderings of letters when building a gradient layer. Reach instead for larger shapes that span each character's balance point.

Invert Gradient

Flips the gradient's pixel values: white turns to black and black turns to white.

## Physics controls

How the fragments travel and drop through space is set by the Physics controls.

Rotation Speed

Sets how fast fragments spin about the axis chosen with the Tumble Axis control, letting you mimic the differing spin rates of different materials. Out in nature, pieces of comparable shape rotate at varying rates according to their mass and air resistance — a brick, for instance, spins quicker than Styrofoam.

Tumble Axis

Sets which axis the fragments rotate about. Free lets them spin any direction; None shuts off rotation entirely; X, Y, and Z confine the spin to the chosen single axis; XY, XZ, and YZ confine it to the chosen pair of axes.

Note

Z-axis rotation shows up only once a second force strikes the layer. With only z-axis rotation chosen, the first blast leaves the pieces unrotated.

Randomness

Shapes the starting velocities and spins that the force sphere produces. Held at 0, fragments shoot straight out from a blast's center point (given a positive force). Because actual explosions are seldom tidy, Randomness lets you introduce a touch of variation.

Viscosity

Sets how rapidly fragments slow down after the blast scatters them. A higher Viscosity puts up more resistance to their motion and spin, and a high enough value brings them to a fast halt. Crank Viscosity high to mimic a blast in water or sludge, keep it medium for one in air, and drop it low or to 0 for one in space.

Mass Variance

Sets the notional weight the fragments carry as they blow apart. A large piece, being heavier than a small one, doesn't travel as far or as fast when the blast hits it. At its 30% default, Mass Variance models this physical law realistically. Raise Mass Variance to 100% to overstate the gap between how large and small pieces act; drop it to 0% to make every piece behave identically no matter its size.

Gravity

Sets what becomes of the fragments after they fracture and scatter. A higher gravity value drags the pieces faster along the heading fixed by Gravity Direction and Gravity Inclination.

Gravity Direction

Sets which heading in (x,y) space the gravity-affected fragments follow. That heading is measured relative to the layer. Should Gravity Inclination read -90 or 90, Gravity Direction stops mattering.

Gravity Inclination

Sets which heading in z space the fragments take once they blow apart. At 90 the pieces blast forward relative to the layer; at -90 they blast backward relative to it.

## Textures controls

The look of the fragments' surfaces is set through the Textures controls.

Color

Sets the fragment's color, governed by the Front Mode, Side Mode, and Back Mode menus. Whether this color shows depends on the Mode choices: when a Mode reads Color, Tinted Layer, Color + Opacity, or Tinted Layer + Opacity, the chosen color feeds into how the fragment looks.

Opacity

Governs the opacity tied to the matching Mode setting. The opacity changes a fragment's look only when a Mode is set to Color + Opacity, Layer + Opacity, or Tinted Layer + Opacity. Pair the Opacity control with texture maps to fake the appearance of semitransparent materials.

Front Mode, Side Mode, Back Mode

Set how the front, sides, and back of the fragments look. Color paints the chosen color onto the relevant face of the fragment. Layer grabs whatever layer is picked in the matching Layer menu and wraps it onto the relevant face. Tinted Layer mixes the picked layer with the chosen color, yielding something like looking at the layer through a tinted filter. Color + Opacity merges the chosen color with the Opacity amount: at Opacity 1 the relevant face takes the chosen color, and at Opacity 0 it goes transparent. Layer + Opacity merges the picked layer with the Opacity amount: at Opacity 1 the picked layer wraps onto the relevant face, and at Opacity 0 it goes transparent. Tinted Layer + Opacity merges the tinted picked layer with the Opacity amount: at Opacity 1 the tinted picked layer wraps onto the relevant face, and at Opacity 0 it goes transparent.

Note

When you apply Shatter to a layer whose alpha channel you intend to use for transparency, give the fragments' front, sides, and back the same texture — or at minimum another layer carrying an identical alpha channel — so that every face turns transparent.

Front Layer, Side Layer, Back Layer

Set which layer gets wrapped onto the matching face of the fragment. Front Layer wraps the picked layer onto the fragment's front. Back Layer wraps the picked layer backward onto the layer. Set Front Mode and Back Mode both to Layer, feed each the same layer, and every shattered fragment ends up with matching pixel data on both faces. Side Layer wraps an extrusion of the picked layer onto the fragment's extruded sides, as though that layer also covers the front and back and the layer has been cut clean through.

Note

Pick a layer that has an effect applied, and the effect stays absent from the texture unless you precompose that layer. Choose None, though, and the layer you applied Shatter to — together with any effects landing ahead of Shatter — serves as the texture map with no precomposing needed.

## Camera System and Camera Position controls

Camera System

Picks the source for rendering 3D images: this effect's Camera Position properties, its Corner Pins properties, or else the composition's default camera and light positions.

X Rotation, Y Rotation, Z Rotation

Turn the camera about the matching axis. Reach for these to view the cards from above, the side, behind, or any other vantage.

X, Y Position

The spot in (x,y) space where the camera sits.

Z Position

The spot along the z axis where the camera sits. Lower numbers bring the camera nearer the cards; higher numbers pull it back from them.

Focal Length

The zoom amount. Lower numbers zoom in.

Transform Order

The sequence in which the camera turns about its three axes, plus whether that turning happens before or after the other Camera Position controls set its position.

## Corner Pins controls

A second camera-control scheme is corner pinning. Lean on it when compositing the effect's output onto a flat plane within a scene, where that plane sits tilted against the frame.

Upper Left Corner, Upper Right Corner, Lower Left Corner, Lower Right Corner

The point where each of the layer's corners attaches.

Auto Focal Length

Governs the effect's perspective across the animation. Leave this option off and the focal length you enter drives a search for a camera position and orientation that, where possible, seat the layer's corners at the corner pins; failing that, the layer gives way to its outline drawn between the pins. Turn this option on and the focal length needed to hit the corner points gets used where possible; failing that, the right value is interpolated from neighboring frames.

Focal Length

Takes precedence over the other settings whenever the results you've got fall short. Set the Focal Length to a value that wouldn't match the focal length implied by the pins actually sitting in that arrangement, and the image can look odd (oddly sheared, for one). Yet when you already know the focal length you're aiming to match, this option is the simplest route to correct results.

## Creating a custom shatter map

Every layer in After Effects — monochrome images included — is held as an RGBA image. To build a custom shatter map, the Shatter effect works out each channel's luminance threshold. It computes the 50% luminance threshold per channel, producing an image made of just eight colors: red, green, blue, yellow, magenta, cyan, white, and black. Those eight arise as the channel combinations driven fully on (255) or fully off (0). Along the borders between these differently colored regions, the shatter layer divides.

When you build custom shatter maps, manually fixing each image channel's threshold at 50% can help (the Curves effect handles that). Setting the threshold reveals how the image will fracture. As an alternative, draw a custom shatter map using only the eight colors named above, with no in-between shades or anti-aliasing.

Note

Reach for the Colorama effect to posterize an image's colors down to these eight. Switch off Interpolate Palette in the Colorama effect controls.

Whether a shattered fragment exists comes down to the alpha channel: a white alpha value yields a fragment, a black one yields none. Working through an alpha channel, you can build a tile map riddled with holes or turn out simple 3D models such as extruded text.

Note

What shapes a layer breaks into is set by the custom shatter map, yet when those fragments break is not. The Force controls handle the timing, which a gradient layer can refine further.

## Wave World effect

Reach for this effect to build a grayscale displacement map feeding other effects like Caustics or Colorama. Drawing on a simulation of how liquids behave physically, it generates waves. They spread out from an effect point, interact, and reflect off their surroundings true to life. Put Wave World to work creating a top-down view of a logo, the waves bouncing off both the logo and the layer's edges.

This effect works with 8-bpc color.

Wireframe view (upper-left), Height Map view (lower-left), and resulting image (lower-right). Result is used as Water Surface source for Caustics effect example.

Wireframe view (upper-left), Height Map view (lower-left), and resulting image (lower-right). Result is used as Water Surface source for Caustics effect example. Wireframe view (left), Height Map view (center), and resulting image (right). Result is used as Input Phase for Colorama effect example.

Wireframe view (left), Height Map view (center), and resulting image (right). Result is used as Input Phase for Colorama effect example.

Some background on wave physics helps clarify how this effect operates: a peak and a trough together make up a wave. Its amplitude is the height — the gap — separating peak from trough. Its wavelength spans one peak to the following one. Frequency counts how many waves sweep past a fixed point each second.

## View controls

Which method previews the Wave World effect is set by the View controls. Pick one of these views:

Height Map

Renders the tallest points as bright pixels and the shortest as dark ones. Lean on this view while building a displacement map.

Wireframe Preview

Gives a visual read on how the wave is taking shape. Its grayscale output stands in for a height map: white marks the tallest wave possible, black the lowest. Two rectangular outlines mark those two extremes — the cyan rectangle stands for pure white, the violet one for pure black. A green grid stands for the ground layer, flat by default though a grayscale image can warp it. A white grid stands for the water's surface.

## Wireframe controls

The wireframe model's look gets fine-tuned by the Wireframe controls. They leave the grayscale output untouched.

Horizontal Rotation

Spins the wireframe preview about the horizontal axis (left and right). Adjusting it warps the wireframe model while keeping the whole model in full view.

Vertical Rotation

Spins the wireframe preview about the vertical axis (up and down).

Vertical Scale

Warps the wireframe preview along the vertical so heights read more easily. The grayscale output stays unaffected.

## Height Map controls

The height map's look is set through the Height Map controls.

Note

As you tune Brightness and Contrast, hold the wave surface layer inside the cyan and violet rectangles. A peak that pushes past the cyan rectangle clips to pure white; a trough that drops below the violet rectangle's base clips to pure black. If a displacement map is your goal, dodge clipping, since it surfaces as flat peaks and valleys that look unnatural.

Brightness

Tunes the water surface's overall height. Adjusting it lightens or darkens the grayscale output as a whole. Used for displacement in Wave World, this control raises or lowers the water's surface.

Contrast

Shifts the spread between the grays of peaks and troughs, widening or narrowing it. Lower values flatten the grays together; higher ones stretch the range from black to white (right up until clipping sets in).

Gamma Adjustment

Governs how steep the waves run relative to Brightness. The effect shows only in the Height Map view. Higher values round the peaks and pinch the valleys, while lower ones smooth the valleys and sharpen the peaks.

Render Dry Areas As

Sets how the water surface renders wherever a dry area turns up. Dry areas form when part of the ground layer climbs above the water's surface. The Steepness control lets you shape that dry area.

This control earns its keep when compositing a Wave World effect into a scene. You might, for instance, feed a precomposed Wave World scene with transparency into the Caustics effect as a displacement map and also use it as a track matte for the effect layer.

Transparency

Sets how clear the water looks by tuning the alpha channel's opacity across shallower regions. Fresh water in a pool lets you see clear to the bottom, say, whereas a coffee-filled pool gives you only an inch or two of visibility. This control proves most valuable when compositing a Wave World effect into another scene. You could, for example, drive Caustics from a Wave World composition while also using it as a track matte for the effect layer.

## Simulation controls

How finely the water surface and ground grids resolve is set by the Simulation controls.

Grid Resolution

Sets how many horizontal and vertical subdivisions build up the wave surface and ground grids. Higher values sharpen the simulation's precision considerably but eat more memory and lengthen render time.

Grid Res Downsamples

Drops the internal simulation resolution whenever the output resolution falls, which speeds rendering up. The trade-off is that the output can end up looking quite different.

Wave Speed

Sets how quickly waves move out from their origin.

Damping

Sets how fast the liquid soaks up a wave's energy. A higher value drains that energy quicker, so the wave covers less ground.

Wave Speed, Damping

Together they set the liquid's apparent viscosity and the apparent size of its body. Waves in water, for one, run faster and farther than waves in honey; waves in a sink race along and die out far quicker than waves in a lake.

Note

Wave World is tuned for small to medium bodies of water — anything between a teacup and a small lake. Big bodies such as an ocean carry swells, those wide steady waves that show no real slowdown. Even at its lowest settings, Wave World can't produce swells, because its waves die out fairly fast.

Reflect Edges

Sets how waves rebound off the layer's edges and return into the scene.

Pre-roll (seconds)

Sets when the waves get going. By default the effect opens on a still surface free of waves or ripples. Use this control to set the waves in motion ahead of the layer's start. Whatever the settings read at the effect's first frame is what gets applied to the layer through the pre-roll.

## Ground controls

The ground layer's look is set through the Ground controls.

Ground

Sets which layer shows at the water's floor. Feed it an animated layer and Wave World reads only the first frame. Wave World works out where the water surface meets the ground's edge, calculates the waves rebounding off the shore, and tunes wave speed to suit the depth. The layer's brightness fixes the ground surface: white stands for higher ground, black for lower.

Steepness

Tunes how steep the ground runs by stretching and squeezing the displaced wireframe's height. The mesh is pinned at the black level, so it always rises from the floor. Put another way, you can't dig the bottom of a canyon deeper; you can only lift its rim higher. To deepen the canyon, pair a higher Steepness with a lower Height.

Height

Governs the gap between the water surface and the ground's lowest possible point. Use it to deepen or shallow the body of water. Change the water's depth and the waves respond in kind — running faster in deep water, slower in shallow. (Tuning the Height control with the wireframe preview up may look like it drops the ground level, but the wireframe camera always tracks the water level.)

Wave Strength

Governs how large the resulting waves grow when the ground's height or steepness is animated. At 0, no waves form.

Note

You can build a pulsing wave effect by animating the ground's steepness so it pokes up through the water and throws off waves. Then turn to the Wave Strength control to amplify it.
