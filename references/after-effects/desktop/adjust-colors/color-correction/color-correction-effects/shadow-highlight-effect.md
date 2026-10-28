# Shadow/Highlight effect

What the Shadow/Highlight effect does is lift shadowed subjects out of darkness while pulling an image's highlights down. Rather than dimming or brightening the whole frame, it treats shadows and highlights on their own, working from the pixels nearby. Overall image contrast is adjustable too. Out of the box, the settings target images plagued by backlighting.

This effect works with 8-bpc and 16-bpc color.

Original (left), and with effect applied (right)

Auto Amounts

Turning this on causes the Shadow Amount and Highlight Amount values to be skipped; in their place the effect works out suitable amounts on its own for brightening the shadows and bringing back their detail. Switching it on also enables the Temporal Smoothing control.

Shadow Amount

How far the image's shadows get brightened. The control only responds while Auto Amounts is turned off.

Highlight Amount

How far the image's highlights get darkened. The control only responds while Auto Amounts is turned off.

Temporal Smoothing

How wide a span of neighboring frames, in seconds, gets examined to gauge the correction each frame needs against the frames around it. At a Temporal Smoothing of 0, every frame is judged on its own with no reference to its neighbors. Corrections can read more smoothly over time when you use Temporal Smoothing.

Scene Detect

When this is on, any frames past a scene change are left out as neighboring frames get examined for temporal smoothing.

Blend With Original

How transparent the effect is. The effect's output is mixed with the source image and laid over the top of it. Push this value up and the effect bites less; at 100% the clip shows no visible change from the effect, while at 0% none of the original image comes through.

Open the More Options category to expose these controls:

Shadow Tonal Width and Highlight Tonal Width

How broad a tonal range stays adjustable in the shadows and in the highlights. Smaller values pin the adjustable range down to just the darkest and just the lightest areas, respectively, while larger values widen it. These come in handy for fencing off regions to work on. To brighten a dark patch without disturbing the midtones, for instance, keep the Shadow Tonal Width low so that adjusting the Shadow Amount lightens only an image's darkest areas. Pushing a value too high for a given image can spawn halos along strong dark-to-light edges. Those artifacts are something the default settings try to keep down. Such halos can crop up when the Shadow or Highlight Amount runs too high; dropping those values also tames them.

Shadow Radius and Highlight Radius

The radius, in pixels, of the zone around a pixel that the effect samples to judge whether that pixel belongs to a shadow or a highlight. As a rule, keep this value close to the size of the image's subject of interest.

Color Correction

How much color correction the effect lays onto the shadows and highlights it has adjusted. Raising the Shadow Amount, for example, surfaces colors that sat dark in the original image — colors you might want looking richer. A higher Color Correction value makes them more saturated. The larger the correction you push onto the shadows and highlights, the wider the color-correction range you get to work with.

Note

To recolor the entire image, reach for the Hue/Saturation effect once the Shadow/Highlight effect is in place.

Midtone Contrast

How much contrast the effect lays onto the midtones. Raising the value sharpens contrast in the midtones alone while at the same time deepening the shadows and brightening the highlights. Drop it negative and contrast eases off.

Black Clip, White Clip

The share of shadows and highlights that gets clamped to the image's new extreme shadow and highlight colors. Push the clipping values too far and you lose detail in the shadows or highlights. Staying somewhere from 0.0% to 1% is advised. The default clips shadow and highlight pixels by 0.1% — meaning the outermost 0.1% at each end is set aside while the image's darkest and lightest pixels are pinpointed and then mapped to output black and output white. Going this route keeps input black and input white anchored to representative pixel values instead of extreme ones.
