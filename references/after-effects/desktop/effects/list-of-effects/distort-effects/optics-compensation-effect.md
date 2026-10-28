# Optics Compensation effect

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
