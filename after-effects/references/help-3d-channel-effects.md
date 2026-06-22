# 3D Channel Effects

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Jun 26, 2025

These third-party effects ship with After Effects under this category:

EXtractoR effect

IDentifier effect

ID Matte

## About 3D Channel effects, including ProEXR effects

What the 3D Channel effects act on are 2D layers—specifically the kind that carry 3D information tucked into auxiliary channels. Image sequences standing in for 3D scenes rendered out of a 3D application are the sources behind those 2D layers.

Lean on 3D Channel effects when you want to fold 3D scenes into 2D composites and tweak those scenes. The 3D image files you can import are saved in RLA, RPF, Softimage PIC/ZPIC, and Electric Image EI/EIZ formats. With PIC and EI files, the 3D channel data lives in the ZPIC and EIZ files respectively. There's no need to import the ZPIC and EIZ files themselves; so long as they sit in the same folder as the PIC and EI files, the 3D Channel effects can reach their 3D channels. Files of other types stay untouched by the 3D Channel effects.

The extra channels of data that 3D Channel effects read and work with include z-depth, surface normals, object ID, texture coordinates, background color, unclamped RGB, and material ID. That lets you stack 3D elements along the z-axis, drop other elements into a 3D scene, soften regions within it, single out 3D elements, layer on a depth-driven foggy look, and pull 3D channel data out to feed as parameters into other effects.

Turn a layer that has a 3D Channel effect into 3D and look at it from anywhere other than dead front and center, and it won't show up the way you'd expect.

Note

Want a pixel's depth and other channel readouts to show in the Info panel? Apply a 3D Channel effect first; then, while it stays selected, grab the Selection tool and click that pixel inside either the Composition panel or the Layer panel.

## Using channels in OpenEXR files

Provided the channels carry tags, 3D Channel effects can tap the channels inside OpenEXR files, a depth channel among them. Some other formats, RPF for one, lock a fixed set of channels to always stand for particular scene properties; OpenEXR, by contrast, is just an open-ended bundle of channels with no built-in meaning. Red, green, blue, and alpha values stay tied to the reserved R, G, B, and A channels, but any other channel is free to carry whatever else you like. There's a file named OpenEXR_channel_map.txt you can use to bind channel names to values of a given type so other effects can read them. Drop that file in the same folder as the OpenEXR format plug-in, and the OpenEXR plug-in will draw on its contents to tag channels as it imports an OpenEXR file.

After Effects doesn't ship with an OpenEXR_channel_map.txt file, but the ProEXR package on the fnord software website includes one you can download. That sample OpenEXR_channel_map.txt file from the fnord software website ships with documentation explaining how it's used.

Bundled into the ProEXR package on the fnord software website is the ProEXR Comp Creator plug-in as well. From every channel in an OpenEXR file, this plug-in can spin up a layer. The layers might, for example, stand in for the output of a batch of render passes coming out of a 3D application.

## ProEXR plug-ins, IDentifier, and EXtractoR

To open up the many layers and channels inside OpenEXR files, After Effects bundles the EXtractoR and IDentifier plug-ins from fnord software.

You'll find documentation for the fnord ProEXR plug-ins in a PDF on the fnord software website. That document carries links to a sample multi-channel EXR file along with an After Effects project built around it. Whatever the fnord document says about pulling out the OpenEXR plug-ins has no bearing on After Effects CS5.

## 3D Channel Extract effect

Auxiliary channels become visible—rendered either as grayscale or as multichannel color images—through the 3D Channel Extract effect. The layer it hands back can then serve as a control layer for other effects. You might, say, pull the depth data out of a 3D channel image file and feed it as an influence map into the Particle Playground effect, or draw values from the unclamped RGB channel to build a matte that throws off glowing highlights.

Note

Want a pixel's 3D channel readouts to appear in the Info panel? Apply the 3D Channel Extract effect, set the channel via the 3D Channel menu inside the Effect Controls panel, then switch to the Selection tool and click that pixel within either the Composition panel or the Layer panel.

This effect works with 8-bpc and 32-bpc color.

Original (left), with 3D Channel Extract applied using Texture UV (right)

Original (left), with 3D Channel Extract applied using Texture UV (right)

White Point, Black Point

The value that gets mapped onto white or black.

3D Channel

Which channel to pull from the 3D image:

Z-Depth

Captures how far a given shaded pixel sits from the camera. The farthest distance shows up as white; the pixels nearest the camera read as black. Effects like the Lens Blur effect can draw on this to build depth-of-field looks. Apply the channel straight as a luma matte and you get fog.

Note

To get the cleanest result, match the effect's White Point and Black Point against whatever near and far values the camera used back in the 3D application where the 3D image originated.

## Work with the anti-alias parameter

With the Anti-alias parameter you decide whether the effect's output gets anti-aliased. Smoothing the edges of depth passes helps when those mattes feed into depth compositing or color correction.

Switch this option off whenever you reach for Depth of Field or any effect that needs objects and their edges treated as sitting at one shared distance. Because anti-aliasing alters the gray values along an edge, it can shift how deep that edge reads and introduce artifacts in whatever effect relies on the matte.

Clamp Output Offered only in 32-bpc color mode, this pins the effect's grayscale output between 0 and 1.0. On by default.

Invert Depth Map flips the effect's grayscale output.

Object ID

Inside the 3D application, every object may carry its own ID value. A map drawn from this channel lets you target effects at specific objects within a 3D scene—say, for selective color adjustments. No anti-aliasing is applied to this channel.

Texture UV

Mapped into the red and green channels, this channel holds the texture mapping coordinates for your object. It receives no anti-aliasing. Reach for it when verifying UV maps or when feeding the Displacement Map effect.

Surface Normals

For each point across an object's surface, this channel writes the direction vector into the RGB channels, with those vectors measured relative to the camera. Dynamic relighting and relief rendering in third-party plug-ins can build on this channel. This channel is anti-aliased.

Coverage

How this channel behaves shifts from one 3D application to the next. Its job is to flag regions close to object edges and contours, signaling how anti-aliasing and overlap are handled there.

Background RGB

Every RGB pixel value of the background—minus any foreground objects—lives in this channel. Its typical use is holding the dynamic environmental effects that 3D programs generate, like skies or procedurally textured backdrops. This channel is anti-aliased.

Unclamped RGB

Here you get the colors exactly as the 3D application handed them to its renderer, before exposure and gamma adjustments were applied. This channel is anti-aliased.

Material ID

Within the 3D application, each material can receive its own ID value. Using a map built from this channel, you can direct effects at particular materials in a 3D scene. No anti-aliasing is applied to this channel.

## Depth Matte effect

By reading a 3D image's depth data, the Depth Matte effect lets you cut the image at any point along the z-axis. That makes it possible, for instance, to strip out a 3D scene's background or to drop new objects into a 3D scene.

Note

Inserting a layer into a 3D scene goes like this: apply Depth Matte to the layer holding the 3D scene, set the Depth property to the depth where the new layer should sit, duplicate the 3D scene layer, turn on Invert for the top 3D scene layer, then slot the new layer between the two 3D scene layers in the Timeline panel's stacking order.

Color depths of 8-bpc, 16-bpc, and 32-bpc are all supported.

Original (upper-left), with effect applied (lower-left), and with effect applied and Invert Alpha selected (lower-right)

Original (upper-left), with effect applied (lower-left), and with effect applied and Invert Alpha selected (lower-right)

Depth

The z-axis value at which to slice the image. Everything with a depth value less than this Depth value is matted out.

Note

To read an object's depth, pick the Selection tool and click the object in the Composition panel or Layer panel while the effect stays selected.

Feather

How far the feathering reaches in along the matte's edges.

Invert

When selected, anything whose depth exceeds the Depth value gets matted out. Deselect and it's everything below the Depth value that drops away instead.

## Depth Of Field effect

Mimicking a camera locked onto one depth—the focal plane—in a 3D scene, the Depth Of Field effect throws objects at other depths out of focus. It draws on the depth data carried in the auxiliary channel of an imported file that represents a 3D scene. If you instead want the depth After Effects works out for a camera layer, see how to create a camera layer and change camera settings.

Color modes of 8-bpc, 16-bpc, and 32-bpc are all handled.

Original (upper-left), and with Depth Of Field applied using different Focal Plane values (lower-left and lower-right)

Original (upper-left), and with Depth Of Field applied using different Focal Plane values (lower-left and lower-right)

Focal Plane

The distance along the z-axis of the focal plane from the camera.

Note

To surface an object's depth in the Info panel, grab the Selection tool and select the object in the Composition or Layer panel while the effect remains selected.

Maximum Radius

The degree of blur that lands on objects sitting off the focal plane.

Focal Bias

Crank this up and elements lose focus faster as they move away from the focal plane.

## Fog 3D effect

The Fog 3D effect fakes fog by acting as if a scattering medium hangs in the air, so objects grow hazier the farther they recede along the z-axis.

Support spans 8-bpc, 16-bpc, and 32-bpc color.

Note

Like every effect under the 3D Channel effects category, Fog 3D leans on depth data drawn from image sequence files of the sort a 3D application renders out.

For more on 3D Channel effects—ProEXR effects and creating fog in After Effects among them—read on.

Original (upper-left), Gradient Layer (lower-left), and with Fog 3D applied (lower-right)

Original (upper-left), Gradient Layer (lower-left), and with Fog 3D applied (lower-right)

Fog Start Depth

Where along the z-axis the diffuse scattering begins.

Note

To read an object's depth, pick the Selection tool and click the object in the Composition or Layer panel while the effect stays selected.

Fog End Depth

The z-axis point at which diffusion hits its peak.

Scattering Density

Sets the rate at which scattering builds up. Raise the value and the fog thickens as it spreads outward from where it began.

Foggy Background

Produces a foggy background (the default). Turn it off to leave transparency behind the 3D scene so you can composite it over another layer.

Gradient Layer

(Optional) A grayscale layer that serves as a control layer, whose luminance values drive fog density. As an example, the Turbulent Noise effect can build a swirling control layer for atmospheric fog. Confirm the gradient layer is sized at least as large as the 3D scene layer.

Layer Contribution

The degree to which the gradient layer sways fog density.

## Depth passes for 3D compositions

Black-and-white data that tracks distance is what a depth pass holds. Picture a scene full of black fog and white objects: the objects sitting farther from the camera read darker than those nearer to it.

The 3D channel effects can pull Z-depth out of a nested composition that holds 3D layers. Use that to drive 3D depth effects on the composition layer—a depth of field blur, for instance—or to build a matte for depth compositing or color correction.

Either composition renderer—Classic 3D or Cinema 4D—supports depth passes.

Extract depth pass

Extract depth pass

Pulling Z-depth out of a nested 3D composition is possible with these 3D channel effects:

- 3D Channel Extract
- Depth Matte
- Depth of Field
- Fog 3D

## Extract a depth pass

Pulling a depth pass starts in the Effects panel: apply the 3D Channel Extract effect onto a nested composition layer.

Keep these points in mind:

- Once 3D Channel Extract sits on a nested composition layer, the 3D Channel parameter is grayed out.
- The depth range's start and end come from the Black Point and White Point properties, both gauged in pixels out from the camera position.
- By default Black Point reads 5000.0 and White Point reads 0.0. Should your 3D scene reach beyond 5000 pixels from the camera, you'll have to bump the Black Point value up.
- With the project at 32-bpc, the depth output is clamped to 0-1 across the same range that gets clamped for 8- or 16-bpc.

## Use the EXtractoR effect to extract a depth pass

The EXtractoR effect can also pull a depth pass from a nested composition, though anti-aliased edges set against a transparent background may end up rendering with a fringe.

Follow these steps to see the edges:

In the Effects panel, drop the Shift Channels effect onto the nested composition and set its Take Alpha From parameter to Full On.

Alternatively, switch the Channel View option along the bottom of the Composition panel to Straight RGB.

## ID Matte effect

A lot of 3D programs stamp every element in a scene with its own Object ID. Drawing on that data, the ID Matte effect builds a matte that leaves out everything in the scene apart from the element you're after.

Color depths of 8-bpc, 16-bpc, and 32-bpc all work here.

Original (upper-left), with ID Matte applied using the near alien as the ID Selection (lower-left), and composited over a new background (lower-right)

Original (upper-left), with ID Matte applied using the near alien as the ID Selection (lower-left), and composited over a new background (lower-right)

Aux. Channel

Isolate elements based on Object ID or Material ID.

Note

To find an object's ID, choose the ID type from the Aux. Channel menu over in the Effect Controls panel, then grab the Selection tool and click the object in the Composition or Layer panel while the effect is selected. When Aux. Channel is set to Object ID, ID Selection refreshes on its own to match the Object ID of whatever object you click.

Feather

How far the feathering extends in along the matte's edges.

Invert

Flips the selection. Tick it to matte out whatever object ID Selection points to. Leave it off to matte out all but that object (the default).

Use Coverage

Yields a tidier matte by stripping the colors held behind the object away from the pixels lining the matte's edge. It does something only when the 3D image carries a coverage channel that records which colors sit behind each object.

### More like this

- Importing and using 3D files from other applications
- 3D layers

## See also

- [Channel Effects](help-channel-effects.md)
