# Distort Effects (part 1)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Jun 27, 2025

A huge selection of Distort effects ships with After Effects — native ones plus third-party plug-ins — all for morphing and distorting an image. Among the Warp effects is the option to fix or steady footage suffering from Rolling Shutter distortion.

## Bezier Warp effect

A closed Bezier curve traced along a layer's edge is what the Bezier Warp effect uses to mold an image. Four segments make up that curve, and every segment carries three points: one vertex plus two tangents.

Supported color depths: 8-bpc and 16-bpc.

Original (upper-left) and with variations of Bezier Warp applied (lower-left and right)

Original (upper-left) and with variations of Bezier Warp applied (lower-left and right)

Where the vertices and tangents sit dictates each curved segment's size and shape. Dragging those points reshapes the edge curves and so warps the picture. You might, for example, lean on Bezier Warp to mold one image onto another — wrapping a label around a jar, say. It's equally good for fixing lens aberrations like the fisheye (barrel distortion) a wide-angle lens can introduce; with Bezier Warp you bend the picture back toward a distortion-free look. Animate it at a high-quality setting and you can produce flowing effects, such as a wobbling gelatin dessert or a flag rippling in the wind.

## Bulge effect

Around a point you choose, the Bulge effect warps an image so it seems to swell either toward the viewer or away from them, whichever the options call for.

Color depths handled: 8-bpc and 16-bpc.

Original (upper-left), and with variations of Bulge applied (lower-left and right)

Original (upper-left), and with variations of Bulge applied (lower-left and right)

Horizontal Radius and Vertical Radius

The width and height of the distorted area, in pixels. Dragging the selection handles on the layer is another way to set these radius values.

Bulge Height

How deep the bulge looks. Pushing the bulge toward the viewer comes from positive values; pulling it away comes from negative ones.

Taper Radius

How gradual the bulge's sides are. Set the taper radius to 0 for a steep, sharply defined bulge.

Antialiasing

How much the edges along the bulge boundary are smoothed (colors blended together). Only when layer quality sits at Best does anti-aliasing take effect.

Pin All Edges

Stops the layer's edges from bulging.

## Corner Pin effect

Each of an image's four corners gets relocated by the Corner Pin effect to warp it. Lean on it to stretch, shrink, skew, or twist a picture, or to fake perspective or motion hinging from a layer's edge — a door swinging open, for instance. It also lets you pin a layer onto a moving rectangular region that the motion tracker is following. You can drag the corner pins from any of three places: the Composition panel, the Timeline panel, or the Effect Controls panel.

Color depths handled: 8-bpc, 16-bpc, and 32-bpc.

Original image (upper-left), corner moved (lower-left), and final image (lower-right)

Original image (upper-left), corner moved (lower-left), and final image (lower-right)

## Detail-preserving Upscale

Smart upscaling of a layer while holding onto sharpness and detail is what the Detail-preserving Upscale effect handles — a real help with low-res footage or images.

Tapping the Fit to Comp Width and Fit to Comp Height buttons scales the layer automatically to the composition's width or height. That's a fast way to match the size without scaling by hand.

Scale

Control how much you want to upscale the layer.

Reduce Noise

Strip out noise or grain ahead of upscaling. Lean on this when footage is grainy or compressed so the upscaler won't magnify the noise.

Detail

Decide how much sharpness and detail carries through after scaling. Pushing the value up keeps more edges and textures intact.

Alpha

Sets how the alpha channel (transparency) gets scaled. Two choices are available:

- Bilinear: scales more smoothly but can soften the alpha edges a touch.
- Bicubic: keeps alpha edges crisper — the pick for clean cutouts or for logos and text.

## Displacement Map effect

A layer is warped by the Displacement Map effect, which shifts pixels both horizontally and vertically according to the color values found in the control layer named by the Displacement Map Layer property. Just how the distortion turns out swings widely with the control layer and the options you pick.

Supported color depths: 8-bpc, 16-bpc, and 32-bpc.

Original (upper-left), displacement map (lower-left), and displaced image (lower-right)

Original (upper-left), displacement map (lower-left), and displaced image (lower-right)

It's the displacement map's color values that drive the displacement. Those values span 0 to 255, and each one is remapped onto a scale running from -1 to 1. Multiplying that remapped value by the maximum displacement you set yields the displacement amount. Maximum negative displacement (–1 \* maximum displacement) comes from a color value of 0, while 255 gives maximum positive displacement and 128 leaves things unmoved.

When the effect reads the control layer named by Displacement Map Layer, it ignores any effects or masks on it. Precompose that layer first if you want its effects included. Should the control layer differ in size from the layer the effect sits on, it gets centered, stretched, or tiled per the Displacement Map Behavior setting.

Turning on Expand Output lets the effect's output spill past the original layer's edges. Turn on Wrap Pixels Around and pixels shoved outside the original layer boundaries get copied to the layer's opposite side — whatever runs off the right edge reappears on the left, and so forth.

## Liquify effect

Pushing, pulling, rotating, growing, and shrinking regions of a layer is what the Liquify effect lets you do. As you click or drag, a set of Liquify tools warps the brush area. That warping piles up at the brush area's center and grows stronger the longer you keep the mouse down or drag back over a spot repeatedly.

Freeze Area Mask lets you fence off how much of a layer gets distorted. Lean on Reconstruction mode to ease off or undo the distortions you've made.

The Liquify effect is free to reach past the edges of the target layer — handy whenever that layer is smaller than the composition.

Color depths handled: 8-bpc and 16-bpc.

Original (upper-left), and with variations of Liquify applied (lower-left and right)

Original (upper-left), and with variations of Liquify applied (lower-left and right)

## Mask properties

Freeze Area Mask

Sets which region of the image has its distortion governed by mask opacity and feather settings. Anything outside the mask gets distorted; anything inside follows the Mask Opacity and Mask Feather settings.

Mask Opacity

Governs how the distortion reaches the region inside the mask. At a Mask Opacity of 100%, the distortion leaves the masked region alone; at 50%, that region is affected. When you push Mask Opacity to 100%, feather the mask too so its edges don't turn jagged.

Mask Feather

How wide the feather runs when blending pixels across the masked and nonmasked regions.

## Tools

Warp

Pushes pixels forward as you drag.

Turbulence

Gently jumbles pixels. Handy for conjuring fire, clouds, waves, and the like.

Twirl Clockwise

Spins pixels clockwise while you hold the mouse button down or drag.

Twirl Counterclockwise

Spins pixels counterclockwise while you hold the mouse button down or drag.

Pucker

Pulls pixels in toward the brush area's center while you hold the mouse button down or drag.

Bloat

Pushes pixels out away from the brush area's center while you hold the mouse button down or drag.

Shift Pixels

Slides pixels at right angles to the direction of your stroke.

Reflection

Copies pixels to the brush area.

Clone

Duplicates the distortions surrounding a source spot onto wherever the mouse currently sits. Pick the source spot by Alt-clicking (Windows) or Option-clicking (macOS) the source point.

Reconstruction

Undoes distortions or reapplies them in other ways.

## Distort an image with the Liquify effect

Pick the layer, then go to Effect > Distort > Liquify.

Over in the Layer panel, draw a mask to freeze regions of the image, then set its mask properties.

Within the Effect Controls panel, do the following:

From the Freeze Area Mask pop-up menu, pick the mask you drew.

Dial in a brush size and brush pressure. With low brush pressure the changes build up more gradually, making it simpler to halt them at exactly the right instant.

Dial in a turbulent jitter to govern how tightly the Turbulence tool jumbles pixels.

Under the View Options control, switch on View Mesh.

If you like, give the distortion mesh an offset.

To dial in how much distortion is applied, drag the Distortion Percentage slider.

4. Use the tools to distort the preview of the image.
   Reach for the Reconstruction tool to undo the distortions wholly or partly, or to rework the image in fresh ways.

## Undo distortions with the Liquify effect

Lean on the Reconstruction tool and its modes to undo distortions or rework them in fresh ways.

Pick the Reconstruction tool, then pick a mode out of the Reconstruction Mode pop-up menu:

Revert

Returns unfrozen areas to the state they held before distortion.

Displace

Rebuilds unfrozen areas so they line up with the displacement at the reconstruction's starting point. Displace can shift all or part of the preview image somewhere else.

Amplitwist

Rebuilds unfrozen areas so they line up with the displacement, rotation, and overall scaling present at the starting point.

Affine

Rebuilds unfrozen areas so they line up with all the local distortion at the starting point — that is, displacement, rotation, skew, plus horizontal and vertical scaling.

2. Drag across the region you want restored. Restoration runs fastest at the center of the brush.

## Magnify effect

All or part of an image is enlarged by the Magnify effect. It can behave like a magnifying glass held over one spot of the picture, or you can push the whole image well past 100% and still hold onto resolution.

Color depth handled: 8-bpc.

Original (upper-left), and with variations of Magnify applied (lower-left and right)

Original (upper-left), and with variations of Magnify applied (lower-left and right)

Shape

The shape of the magnified area.

Center

The center point of the magnified area.

Magnification

Percentage by which to scale the magnified area.

Link

Sets how the Magnification setting drives the size and edge feathering of the magnified area. Any Link value other than None switches off the Resize Layer option.

None

Magnification has no bearing on the magnified area's size or edge feathering.

Size To Magnification

Multiplying the Magnification value (a percentage) by the Size value sets the magnified area's radius.

Size & Feather To Magnification

Here the magnified area's radius again comes from Magnification (a percentage) multiplied by Size, while the edge feather's thickness comes from Magnification multiplied by Feather.

Size

The magnified area's radius, given in pixels.

Feather

How much edge feather to apply, measured in pixels.

Opacity

How opaque the magnified area is, stated as a percentage of the underlying layer's own opacity.

Scaling

The type of scaling used to magnify the image:

Standard

Sharpness in the picture holds up under this method, though edges turn pixelated at higher values.

Soft

Leans on spline algorithms. Scale the picture past 100% and Soft tones down edge pixelation while keeping image quality intact. Soft does well at heavy magnification amounts.

Scatter

Introduces scatter or noise into the picture as it grows.

Blending Mode

Decides how the magnified area is merged with the layer beneath it. Pick None and transparent pixels surround the magnified area.

Resize Layer

With Resize Layer turned on, the magnified area is allowed to spill past the original layer's edges.

## Mesh Warp effect

A grid of Bezier patches is laid over a layer by the Mesh Warp effect, and working that grid lets you distort regions of an image. At every patch corner sits a vertex plus two to four tangents (the points steering the curvature of the line segment forming the patch edge). Whether the vertex falls in a corner, along an edge, or inside the grid decides how many tangents there are. Shifting the vertices and tangents reshapes the curved line segment. A finer grid lets you make tighter adjustments to the slice of the image within the patch.

Morphing a pair of images into a transition from one to the other is a frequent job for the Mesh Warp effect.

Color depths handled: 8-bpc and 16-bpc.

Original (upper-left), with distortion mesh (lower-left), and with Mesh Warp applied (lower-right)

Original (upper-left), with distortion mesh (lower-left), and with Mesh Warp applied (lower-right) Note

To select multiple vertices, Shift-click the vertices.

Rows, Columns

Set as many as 31 patches down the frame (Rows) or across it (Columns). Fewer patches suit broad distortion; more patches give finer control. Drag the vertices and tangents to reshape the grid. How closely the image tracks that grid shape depends on the elasticity setting and on the boundary the neighboring patch establishes.

Quality

Sets how tightly the image hugs the shape the curve defines. The higher the quality value, the closer the image tracks that shape. Steeper quality settings cost more rendering time.

Distortion Mesh

Click the stopwatch to drive the distortion as an animation across time.

Note

Every patch turns into a boundary for the distortion. Stretch a patch, for instance, and the image inside it stretches, compressing the image inside the neighboring patch. That neighboring patch's boundary keeps the image within it from being crushed down to nothing — put another way, you can't shove an image out of its own patch.

## Mirror effect

Along a line, the Mirror effect cuts the image and mirrors one half over onto the other.

Reflection Center

Where the mirroring line is positioned.

Reflection Angle

The tilt of the mirroring line. At 0° the left half flips onto the right; at 90° the top flips down onto the bottom.

Color depths handled: 8-bpc and 16-bpc.

## Offset effect

Within a layer, the Offset effect slides the image around. Whatever visual detail is pushed off one edge of the picture reappears on the opposite edge. Building a looping background out of a layer is one thing the Offset effect is good for. Set quality to Best and the panning is carried out with subpixel precision.

Shift Center To

Where the original image's center point now sits.

Blend With Original

How transparent the effect is. The effect's output is blended over the original picture, composited on top of it. Raise this value and the effect leaves less of a mark on the layer — set it to 100% and the effect shows no visible result at all, while at 0% none of the original picture comes through.

This effect works with 8-bpc and 16-bpc color.

## Optics Compensation effect

Reach for the Optics Compensation effect to put in or take out camera lens distortion. When composited elements carry mismatched lens distortion, the animation picks up anomalies. Tracked objects inside a distorted scene, for example, fail to line up with the scene area, since straight-line objects don't bend along with the scene's distortion.

Supported color depths: 8-bpc, 16-bpc, and 32-bpc.

Field Of View (FOV)

Sets the distorted footage's field of view (FOV). Both the source layer's size and the chosen FOV Orientation factor into this FOV, and the degree of distortion tracks it. There's no blanket rule pairing an FOV value with a particular lens. Zooming in narrows the FOV while zooming out broadens it, so any footage whose zoom changes will need its FOV value animated.

Reverse Lens Distortion

Undoes the lens distortion. To strip wide-angle lens distortion, for instance, set Field Of View to 40.0 and turn on Reverse Lens Distortion. Turning on Reverse Lens Distortion makes the Resize control available.

FOV Orientation

Which axis the Field Of View value keys off of. This setting earns its keep when you're matching computer-generated elements to the rendered view angle.

View Center

Names an alternate center point of view. It comes in handy with custom lenses that sit off-center, though as a rule you should leave this control alone.

Optimal Pixels

Holds onto as much pixel detail as it can through the distortion. Switch it on and FOV values stop being reversible.

Resize

Resizes the layer whenever the applied distortion pushes the layer past its boundaries. Reach this control by turning on Reverse Lens Distortion and then picking an option. The layer stays put under Off. Max 2X holds the layer to double its starting width and height; Max 4X holds it to quadruple those dimensions. Unlimited lets the layer grow to whatever the stretch demands — a choice that can be heavy on memory.

## Add and match lens distortion with Optics Compensation

Matching FOV values requires that the layers share identical dimensions. That said, selecting Resize lets you run Optics Compensation a second time and undo the distortion with the same value (reversed), so another effect can be slotted in between the paired Optics Compensation instances.

Should you resize a layer through Optics Compensation and afterward precompose it inside a larger composition, undoing the distortion at that same value won't work until the precomposed layer has been enlarged to fit the expanded layer.

Pick the layer carrying the distortion, then choose Effect > Distort > Optics Compensation.

Within the Effect Controls panel, tweak the FOV until some warped edge or line reads as straight, and make a note of that FOV value.

Choose the computer graphic layer that needs distorting, and apply Optics Compensation to it with the FOV value you recorded in step 2.

Select Reverse Lens Distortion.

Take Optics Compensation off the footage layer.

## Polar Coordinates effect

What the Polar Coordinates effect does is warp a layer by mapping every pixel from the layer's (x,y) coordinate system over to its matching spot in the polar coordinate system, or vice versa. The distortions that result are odd and unexpected, shifting widely with the image and the controls you pick. In the standard coordinate system, a point is pinned down by how far it sits horizontally (x-axis) and vertically (y-axis) away from the origin, with each point given as (x,y). In the polar coordinate system, a point is fixed by the radius length out from the origin (r) together with its angle off the x-axis (), each point given as (r,).

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

Original (upper-left), and with variations of Polar Coordinates applied (lower-left and right)

Original (upper-left), and with variations of Polar Coordinates applied (lower-left and right)

Interpolation

Sets how much distortion is applied. There's no distortion at 0%.

Type of Conversion

Which conversion process gets used:

Rect To Polar

Relocates pixels by treating each pixel's (x,y) coordinates as (r, ) coordinates. As an example, an (x,y) coordinate of (2,3) turns into a polar coordinate whose radius is 2 and whose degree is 3. This bends horizontal lines into circles and vertical lines into radial lines.

Polar To Rect

Relocates pixels by treating each pixel's (r,) coordinates as the (x,y) coordinates. As an example, polar coordinates of radius 10 and 45° turn into (x,y) coordinates of (10,45).

## Reshape effect

With the Reshape effect, one shape on a layer morphs into a different shape, hauling the image beneath it along and distorting that image to match the contours of the new region. To mark off the region you intend to distort, you build or bring in as many as three masks: a source mask, a destination mask, and an optional boundary mask.

This effect works with 8-bpc and 16-bpc color.

Original including three masks (upper-left), and with variations of Reshape applied (lower-left and right)

Original including three masks (upper-left), and with variations of Reshape applied (lower-left and right)

Out of the box, the role each mask plays — source, destination, or boundary — is handed out by After Effects according to the sequence in which you draw or import them, though you're free to designate other masks instead. Give every mask a closed path. Each of the three masks has to sit on the layer where the Reshape effect is applied, but copying masks over from a different layer is allowed.

Source Mask

This is the mask holding the image region you intend to reshape. When left unspecified, the second mask you created is what After Effects treats as the Source mask. A red outline marks the source mask within the Composition and Layer panels.

Destination Mask

This mask sets the shape the finished image takes. When left unspecified, the third mask you created is what After Effects treats as the Destination mask. A yellow outline marks the destination mask within the Composition and Layer panels.

Boundary Mask

Sets which portion of the image gets reshaped — nothing beyond the boundary is touched. When left unspecified, the first mask you created is what After Effects treats as the Boundary mask. A blue outline marks the boundary mask within the Composition and Layer panels.

Percent

How much reshaping happens. The value comes in handy for building partial distortions that grow over time.

Elasticity

Sets how tightly the image tracks the shape the curve lays out. Stiff behaves like cold rubber, letting the image distort as little as possible, while Super Fluid behaves like hot rubber, letting the image distort freely; the remaining settings sit somewhere in between. Settings toward the more fluid end take longer to render. When the finished image fails to track the curve the way you expected, lean on these elasticity guidelines:

Stick with the stiffest setting that still avoids a polygonal image. Bump the elasticity up a notch when the finished image comes out polygonal even though the curves themselves are smooth.

Reach for Stiff, Less Stiff, or Below Normal when the source and destination masks resemble each other in shape and curve gently (a handful of curved segments that swing direction sharply).

Reach for Normal, Absolutely Normal, or Above Average when the source and destination masks differ and curve only mildly.

Reach for Loose, Liquid, or Super Fluid when the masks differ and curve extremely.

Correspondence Pairs

Displays how many points on the source mask are paired with, or mapped onto, points on the destination mask. Showing up in the Composition panel, these points govern how the distortion interpolates across space. For fine control over the distortion, you can add, remove, or reposition the points on either mask.

Correspondence points are repositioned with the Selection tool, while you add and remove them using the Add Vertex and Delete Vertex tools — held active by pressing the Alt (Windows) or Option (macOS) keys. Correspondence points can only be handled while the effect instance sits selected in the Effect Controls panel.

A mask may carry any number of correspondence points, yet the more it carries, the longer the effect needs to render. When the distortion comes out twisted, drop in extra correspondence points at telling spots along the masks. (Twisting can crop up when the arc lengths of the curves separating correspondence points differ too much.)

Interpolation Method

Sets how After Effects works out the distortion for each video or animation frame across the gap between keyframes, or when no keyframes are present.

Discrete

Needs no keyframes since it computes the distortion at every frame. Discrete delivers the most precise results but eats up more rendering time.

Linear

(Default) Needs two or more keyframes and runs a straight-line interpolation across them. Linear yields even changes between keyframes and abrupt ones at the keyframes themselves.

Smooth

Needs three or more keyframes and approximates the distortion with cubic curves, yielding distortions that move gracefully.
