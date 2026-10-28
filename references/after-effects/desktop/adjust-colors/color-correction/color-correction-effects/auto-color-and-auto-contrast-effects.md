# Auto Color and Auto Contrast effects

By studying an image's shadows, midtones, and highlights, the Auto Color effect then tunes both its contrast and its color. The Auto Contrast effect, meanwhile, tunes contrast overall along with the blend of colors. In each case, the brightest and darkest pixels get pinned to white and black, and everything in between is spread out again. The upshot: highlights read lighter while shadows read darker.

Since neither Auto Contrast nor Auto Color treats channels one at a time, they neither add nor strip color casts.

Many of the controls behind the Auto Levels effect carry over from the Auto Color and Auto Contrast effects.

Note

Applying the Auto Color effect is a fast route to eliminating — or at minimum easing — the flicker that comes from frame-to-frame swings in exposure and color. It helps, say, when you're calming the flicker of aged film or correcting a light source whose color keeps shifting.

Color depths of 8-bpc and 16-bpc are supported by these effects.

Temporal Smoothing

The span of neighboring frames, measured in seconds, examined to gauge how much correction each frame needs relative to those around it. With Temporal Smoothing set to 0, every frame is judged on its own, ignoring its neighbors. Turning on Temporal Smoothing can yield corrections that look smoother as time passes.

Scene Detect

When this is on, any frames past a scene change are left out as surrounding frames get analyzed for temporal smoothing.

Black Clip, White Clip

The degree to which shadows and highlights get clipped to the image's new extreme shadow and highlight colors. Push the clipping values too far and you sacrifice detail in the shadows or highlights. Staying within a 0.0% to 1% range is advised. Out of the box, shadow and highlight pixels are clipped by 0.1% — in other words, the leading 0.1% at either end is skipped when the darkest and lightest pixels of the image are pinned down. Whatever the lowest and highest values are inside the post-clipping range then map to output black and output white. Doing it this way keeps input black and input white tied to representative pixel values rather than freak extremes.

Snap Neutral Midtones (Auto Color only)

Locates an average, near-neutral color within the frame, then tweaks the gamma values so that color becomes neutral.

Blend With Original

How transparent the effect is. The effect's output gets blended with the original image, the effect's result sitting on top. Raise this value and the effect grips the layer less. Set it to 100%, for instance, and the effect leaves no visible mark on the layer; set it to 0% and the original image stays hidden.
