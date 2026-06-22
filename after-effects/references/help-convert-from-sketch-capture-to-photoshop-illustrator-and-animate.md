# Convert From Sketch Capture To Photoshop Illustrator And Animate

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Feb 23, 2026 | Also applies to Adobe Capture, Adobe Illustrator, Adobe Photoshop

Turn shapes from Sketch and Capture into Illustrator files and bring them to life with After Effects

The Adobe Sketch and Adobe Capture mobile apps put artwork creation in your hands anywhere inspiration hits. With them, you can produce shapes that drop straight into After Effects, or get routed to Illustrator or Photoshop for more editing and polish. From there, those shapes are ready to use inside your Adobe After Effects compositions.

Vector graphics objects known as shapes live inside shape layers. A shape, by default, is built from a path, a stroke, and a fill.

Shapes can be imported into After Effects, or you can make shape layers yourself by drawing in the Composition panel with either the shape tools or the Pen tool.

## Create a shape in Sketch

Launch Adobe Photoshop Sketch on your iPhone, iPad, or iPad Pro and sign in using your Adobe ID.

Tap + to begin a fresh project, then tap a blank canvas to begin a new sketch.

2. Begin a project built around a sketch or an image through the Sketch Layer or Image Layer options.
   For a stock image to sit behind your artwork, tap the Images icon and pick Adobe Stock from the Images menu.

3. Place an image onto the canvas by way of the Image import options.
   When you'd like an image as a tracing reference, drop it beneath your artwork with the stacking icon, lower its opacity, then click outside the box to commit the changes.

Lay down your sketch with the built-in brushes, shapes, color tool, and perspective.

5. Reach into the built-in brushes, then pick and apply them on the canvas.
   Store your shape in a fitting Creative Cloud library within your collection, or reach for Send to Photoshop or Send to Illustrator to turn it into a layered vector image.

Want to learn more about Adobe Sketch? The tutorial titled Draw and share concepts in Adobe Photoshop Sketch is worth a look.

## Create a shape in Capture

Launch Adobe Capture on your iPhone, iPad or iPad Pro and sign in using your Adobe ID.

Tap the Shapes menu option, then tap the icon.

Aim your camera at the object and work the slider to dial detail up or down in the image. Tap the screen and experiment with the options to find the one that serves you best.

3. Aim the camera toward the object, then fine-tune the level of detail with the slider.
   Hit the Capture button to capture.

Tap Deselect, then run your finger across whichever parts of the shape you'd like gone.

5. Brush your finger across the regions of the shape that should be removed.
   When you're finished, tap Next and let Capture render the smooth outlines that form your shape.

Look the drawing over, then tap Next and type in a name for your shape.

Pick the right library from the Creative Cloud Library panel and tap Save Shape.

For more details, refer to Preparing and importing Illustrator files.

## Import a shape into After Effects and animate it as 2D or 3D

Shapes can come in straight from mobile applications, whether as local files or as assets stored in a Creative Cloud library. If you've routed them out of the mobile apps for more work, you can also pull them in as Photoshop or Illustrator files.

Say you want to bevel and extrude your vector: build a shape layer out of a vector art footage layer, then edit that shape layer. Once a vector layer has become a shape layer, beveling and extruding are open to you. An extruded object is one that reads as three-dimensional. That 3D quality stands out most when you move the object or sweep a camera around it. Bevel governs the edges of an extruded object.

The procedure below walks you through getting started with animating your shape in both 2D and 3D:

To bring in a vector file or a shape saved as PNG, or as an Illustrator or Photoshop file, drag the graphic into your composition, or go to File > Import > File, choose the file, and click Import.

When the file you imported is a layered vector graphic, right-click its vector layer and choose Create > Create Shapes from Vector Layer. After Effects then turns the vector layer into a shape layer you can animate.

2. Turn the chosen vector layer into an editable Shape layer, leaving the original layer where it sits in the timeline.
   For a quick animation using the imported shape, open up the layer and the Transform option beneath it. Suppose you want to rotate the shape:

1. Drag the shape into your composition. After Effects makes a new shape layer.
1. Slide the Current Time Indicator to where you want the rotation finished.
1. Press R. The Rotation property shows up under the shape layer.
1. Click the stopwatch icon to switch on rotation.
1. Set a keyframe at the destination by clicking the keyframe icon sitting just left of the rotation property.
1. Spin the shape within your composition, or in the Rotation properties change the spin angle and how many full turns you'd like.
1. Select Composition > Preview > Play Current Preview.

1. Over time, spin the chosen layer about its anchor point by means of the timeline's Rotation property.
   Go to Composition > Composition Settings to turn the composition into a ray-traced 3D composition you can animate.

Within the 3D Renderer tab, set the renderer to Cinema 4D. Your composition becomes a Cinema 4D composition, which opens the door to extruded text and shapes.

5. Pick Cinema 4D, which is what lets you handle extruded text along with shapes.
   To turn your shape layer into a 3D layer, take one of these routes:

- To make a layer a 3D layer, flip the 3D Layer switch for that layer in the Timeline panel, or select the layer and choose Layer > 3D Layer.
- To make a text layer a 3D layer with per-character 3D properties switched on, choose Animation > Animate Text > Enable Per-Character 3D.

From the broad set of 3D animation tools in After Effects, pick one or more. For instance:

- To spin or orient your 3D layer from the Timeline panel, select the 3D layer and adjust the Rotation or Orientation property values there. Press R to reveal Rotation and Orientation properties.
- To reposition a 3D layer, use the Selection tool in the Composition panel to drag the arrowhead on the 3D axis layer control for whichever axis you want to move along, and Shift-drag to move it faster. Editing the Position property values over in the Timeline panel accomplishes the same thing.
- To animate your 3D layer through changing viewing angles and distances, as though seen through one or more cameras, use the camera option. Choose Layer > New > Camera, or press Ctrl+Alt+Shift+C (Windows) or Command+Option+Shift+C (macOS). Slide the current time indicator to the target time, drop a keyframe, and move the shape.
