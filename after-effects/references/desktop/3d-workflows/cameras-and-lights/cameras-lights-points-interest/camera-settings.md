# Camera settings

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
