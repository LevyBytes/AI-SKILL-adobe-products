# Corner Pins controls

Corner Pinning offers a second way to control the camera. Turn to it when compositing the effect's result onto a scene that sits on a flat surface tilted relative to the frame.

Upper Left Corner, Upper Right Corner, Lower Left Corner, Lower Right Corner

Where to attach each of the corners of the layer.

Auto Focal Length

Manages the effect's perspective throughout the animation. Leave Auto Focal Length off, and the focal length you set is used to work out a camera position and orientation that drop the layer's corners onto the corner pins where it can; failing that, the layer collapses to its outline drawn between the pins. Switch Auto Focal Length on, and the focal length needed to line up the corner points is used where possible; failing that, the right value is interpolated from neighboring frames.

Focal Length

Takes precedence over the other settings when the results you've got fall short. Dial in a Focal Length that wouldn't actually match the pins in their current configuration and the image can turn strange — oddly sheared, say. But when you already know the focal length you're aiming to match, this control is the simplest path to correct results.
