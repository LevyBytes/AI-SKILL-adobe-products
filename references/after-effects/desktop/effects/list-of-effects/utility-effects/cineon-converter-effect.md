# Cineon Converter effect

While the Cineon Converter effect hands you fine-grained control over color conversions of Cineon frames, color management features are the better route for converting colors in a Cineon file most of the time. (See Cineon and DPX footage items.)

It operates in 8-bpc, 16-bpc, and 32-bpc color.

Working with the Cineon Converter effect begins by importing a Cineon file and leaving it as is; depending on your working mode, After Effects either packs the colors down to 8 bpc or stretches them up to 16 bpc or 32 bpc. From there you can apply the Cineon Converter effect and fine-tune the colors while watching the results live in the Composition panel. Keyframes or expressions let you track tonal shifts over time—lean on keyframe interpolation and ease handles to nail even the most erratic lighting changes. As an alternative, the other Color Correction effects can handle these corrections. (See Color Correction effects.)

Because each Cineon channel carries 10 bits of data per pixel, it becomes simpler to lift an important band of tones while holding the overall tonal balance steady. Pin down the range with care and you can produce a rendition of the image that stays true to the original.

Note

Color perception varies with each monitor's own display traits. When judging tonal balance, get the most reliable read by checking pixels' true color values in the After Effects Info panel as you drag the pointer across them.

Conversion Type

Governs the way the Cineon file gets converted. Log To Linear takes an 8-bpc logarithmic non-Cineon layer you intend to render out as a Cineon sequence. Linear To Log takes a layer that holds a Cineon file's 8-bpc linear proxy and rebuilds it as an 8-bpc logarithmic file, so its display traits stay matched to the original Cineon file. Log To Log picks up on an 8-bpc or 10-bpc logarithmic Cineon file you plan to render as an 8-bpc logarithmic proxy.

Note

For backward compatibility, outdated versions of each option show up whenever you open a project built on an earlier Cineon Converter effect.

10 Bit Black Point

For a 10-bpc logarithmic Cineon layer's conversion, this is the black point, i.e. the minimum density.

Internal Black Point

The black point that After Effects applies to the layer.

10 Bit White Point

For a 10-bpc logarithmic Cineon layer's conversion, this is the white point, i.e. the maximum density.

Internal White Point

The white point that After Effects applies to the layer.

Gamma

Raise Gamma to lighten the midtones or lower it to darken them.

Highlight Rolloff

The rolloff value applied to tame bright highlights. When brightening the lightest areas leaves the rest of the image looking too dark, lean on Highlight Rolloff to rein those highlights in. Should highlights show up as white blotches, push Highlight Rolloff higher until the detail returns. High-contrast images can demand a steep rolloff value.
