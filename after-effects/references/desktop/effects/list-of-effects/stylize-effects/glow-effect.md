# Glow effect

Glow picks out the lighter regions of a picture and then raises the brightness of those pixels along with the ones nearby, yielding a soft, radiant halo. The same effect can mimic the way brightly lit subjects blow out. The halo can draw either on the picture's native colors or on its alpha channel. When it draws on the alpha channel, the soft brightness shows up only along the picture's borders, where opaque meets transparent. Glow will also build a graded halo running between a pair of colors (the A and B colors) and, through looping, produce results with several colors.

Watch out: rendering Glow at Best quality may shift how the layer reads, particularly when you've colored the halos with Adobe Photoshop arbitrary maps. Always check a Best-quality preview ahead of the final render.

Note

Because a 32-bpc project's wide dynamic range keeps the halo's color values from being clipped, glows come out brighter and more lifelike there. That alone is reason enough to work in 32-bpc color, even when your footage items carry no high–dynamic range color values.

Color support: 8-bpc, 16-bpc, and 32-bpc.

Original (left), and with effect applied (right)

Glow Based On

Selects whether the halo keys off color values or off transparency values.

Glow Threshold

Establishes, as a brightness percentage, the level the halo skips. Drop the percentage and the halo spreads across more of the picture; raise it and the halo covers less.

Glow Radius

How far out, measured in pixels, the halo reaches from the picture's bright regions. Bigger numbers give soft, spread-out halos; smaller numbers give halos with crisp borders.

Glow Intensity

How bright the halo is.

Composite Original

Governs the way the effect output combines with the layer. On Top lays the halo over the picture using whatever blending Glow Operation is set to. Behind tucks the halo under the picture for a backlit look. None pulls the halo away from the picture entirely.

Note

Want only the halo left on the layer? Set both Composite Original and Glow Operation to None. To make text knock out (block) everything beneath it while still glowing, set Glow Operation to Silhouette Alpha. A feathered edge on the picture makes any of these glows stand out more.

Glow Colors

Which colors the halo uses. Pick A & B Colors and the halo becomes a gradient built from the Color A and Color B controls.

Color Looping

When A & B Colors is the choice for Glow Colors, this sets the shape of the gradient curve to follow.

Color Loops

Choose two or more loops and the halo picks up multicolor ringing. A lone loop runs once through whatever gradient (or arbitrary map) Glow Colors specifies.

Note

To make an arbitrary map (.amp) file, apply the Curves effect, choose the pencil icon, and then click the save (floppy disk) icon. To bring that arbitrary map file into Glow, click the Options link and pick the .amp file.

Color Phase

The point in the color cycle at which the color loops kick off. Out of the box, color loops start at the origin of the first loop.

A & B Midpoint

This midpoint sets how the gradient's two colors balance against each other. Smaller percentages lean away from the A color; larger percentages lean away from the B color.

Color A, Color B

The halo's color when you've picked A & B Colors for Glow Colors.

Glow Dimensions

Sets the halo to run horizontally, vertically, or in both directions.

For quicker rendering, Glow taps GPU acceleration.
