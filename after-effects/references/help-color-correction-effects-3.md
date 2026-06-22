# Color Correction Effects (part 3)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## PS Arbitrary Map effect

The only reason the PS Arbitrary Map effect exists is backward compatibility with projects from older After Effects releases that relied on the Arbitrary Map effect. Reach for the Curves effect on anything new.

What the PS Arbitrary Map effect does is lay a Photoshop arbitrary map file onto a layer. Such a map reworks an image's brightness levels, pushing a chosen brightness band toward darker or lighter tones. Photoshop's Curves window is where you build an arbitrary map file, either across the whole image or per channel.

This effect works with 8-bpc and 16-bpc color.

Bringing in and applying an arbitrary map file happens through Options in the Effect Controls panel. Once it loads into After Effects, the map gets applied to the layer — or to one or several of its channels — according to how the file was authored. When no arbitrary map is chosen, After Effects falls back on the default map, which spreads brightness linearly across the layer. Direct import of .acv files or Photoshop spline files into the PS Arbitrary Map effect isn't supported, but converting them in Photoshop yields files the After Effects Curves effect can read.

Note

Converting .acv and Photoshop spline files goes like this: open the .acv file (Windows) or the Photoshop spline file (Mac OS) inside the Curves dialog box, pick the Pencil tool, then write the result out as an .amp file (Windows) or Photoshop lookup file (Mac OS).

Phase

Steps through the arbitrary map cyclically. Raising the phase nudges the map rightward (the way it looks in the Curves dialog box), while lowering it slides the map to the left.

Apply Phase Map To Alpha

Puts the chosen map and phase onto the layer's alpha channel. Should the chosen map lack an alpha channel, After Effects substitutes the default map — a linear brightness spread — for that alpha channel.

## Selective Color effect

Scanners and separation software rely on selective color correction to retune how much process color sits in each primary color component of an image. Targeting one primary color at a time, you can change its process-color amount while the rest of the primaries stay put. Say you wanted to pull cyan out of an image's green component yet keep the cyan in its blue component intact — selective color correction does exactly that.

Note

After Effects ships the Selective Color effect chiefly so documents brought in from Photoshop that use the Selective Color adjustment layer type keep their fidelity.

Although CMYK colors drive the way Selective Color tweaks an image, it works perfectly well on RGB images.

This effect works with 8-bpc and 16-bpc color.

Pick one of two settings under the Method menu:

Relative

Shifts whatever cyan, magenta, yellow, or black is already present by a percentage of the whole. Take a pixel that's 50% magenta: add 10% and you tack on 5% magenta (since 10% of 50% is 5%), landing at 55% magenta total. (Pure specular white, having no color components, can't be touched by this option.)

Absolute

Tunes the color using absolute values. Take that same 50%-magenta pixel: add 10% and the magenta ink lands squarely at 60% total.

Note

How much a color gets adjusted depends on its proximity to one of the entries in the Colors menu. Sitting halfway between white and pure magenta, 50% magenta picks up a balanced blend of the corrections set for those two colors.

Whichever color you pick in the Colors menu is the one that gets affected.

For an alternate way to adjust colors, the Details property group mirrors the properties laid out in the Timeline panel.

## Shadow/Highlight effect

What the Shadow/Highlight effect does is lift shadowed subjects out of darkness while pulling an image's highlights down. Rather than dimming or brightening the whole frame, it treats shadows and highlights on their own, working from the pixels nearby. Overall image contrast is adjustable too. Out of the box, the settings target images plagued by backlighting.

This effect works with 8-bpc and 16-bpc color.

Original (left), and with effect applied (right)

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

## Tint effect

By swapping every pixel's color values for some value sitting between the colors named in Map Black To and Map White To, the Tint effect tints a layer. Pixels whose luminance lands between black and white pick up the in-between values. The strength of the effect is governed by Amount To Tint. Rendering is faster here because this effect is GPU accelerated. Hit the Swap Colors button to trade the color values held by the Map Black To and Map White To parameters.

When you need richer tinting, turn to the Colorama effect.

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

Original (left), and with effect applied (right)

Original (left), and with effect applied (right)

GPU acceleration drives the Tint effect for quicker rendering.

## Tritone effect

By mapping a layer's bright, dark, and midtone pixels to colors of your choosing, the Tritone effect reworks that layer's color information. Think of the Tritone effect as the Tint effect with the added wrinkle of midtone control.

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

Blend With Original

How transparent the effect is. The effect's output is mixed with the source image and laid over the top of it. Push this value up and the effect bites less; at 100% the layer shows no visible change from the effect, while at 0% none of the original image comes through.

## Vibrance effect

The Vibrance effect tunes saturation in a way that holds clipping to a minimum as colors near full saturation. Colors that started out less saturated in the original image feel the Vibrance adjustments more strongly than colors that were already saturated to begin with.

Where the Vibrance effect really shines is pushing saturation up across an image while keeping skin tones from going overcooked. Colors whose hues fall between magenta and orange are touched less by Vibrance adjustments.

This effect works with 8-bpc and 16-bpc color.

Adjust the Vibrance property when you want less-saturated colors pushed harder than already-saturated ones and skin tones shielded. Reach for the Saturation property instead when every color's saturation should move by the same amount.

The Vibrance effect takes its cue from the Vibrance adjustment layer type in Photoshop.

## Video Limiter effect

Within the project working space, the Video Limiter effect clamps video signals down to legal ranges. Those ranges run in IRE units for broadcast. A 1.0 channel value in a 32-bpc project — or 255 in an 8-bpc project — equals 100 IRE.

To satisfy broadcast specifications, you can rein in the chrominance and luminance of the video signals. Apply this GPU-accelerated effect by choosing Effects > Color Correction > Video Limiter. It can go onto individual layers, or onto an adjustment layer when you want to limit the whole composition. The Video Limiter effect serves as a stand-in for the comparable but older, 8-bpc-only Broadcast Colors effect.

### More like this

- Color correction, color grading, and color adjustment
- Gamma and tone response
- Adjust exposure for previews
