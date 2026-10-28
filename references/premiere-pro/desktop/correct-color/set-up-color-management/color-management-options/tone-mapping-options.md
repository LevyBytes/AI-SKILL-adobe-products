# Tone mapping options

Tone mapping changes the dynamic range of a video signal. In Premiere Color Management, highlight compression is used to convert wide gamut, extended, or high dynamic range (HDR) media into the narrower SDR (standard dynamic range) range while keeping the result perceptually close to the original.

Each tone mapping algorithm handles the conversion in its own way, especially with clips that contain extremely bright or highly saturated highlights. Hue Preservation is a strong general-purpose choice and offers the most flexibility through its adjustable knee. By Channel and Max RGB are available for cases where highlight color shifts or other visible highlight artifacts appear in sequence media.

Tone mapping can be applied as input tone mapping or output tone mapping, with the controls located in the Advanced area of the Color tab in Sequence Settings. Input tone mapping can vary by clip and happens before effects and color adjustments, so some highlight detail may be impossible to recover later if the result needs correction. Output tone mapping runs after effects and color work, but a single tone mapping algorithm is used for the entire sequence.

Note

To compare tone mapping algorithms quickly, go to the Settings tab in the Lumetri panel, open Sequence Controls, and expand Advanced. Changes made in Advanced Color Management controls appear immediately in the Program Monitor.

The available tone mapping algorithms are:

- Highlight Saturation: controls the amount of highlight saturation allowed in the tone-mapped image. The default is 0.5, which works well for many images. Reducing the value can create results similar to the By Channel algorithm.

- Highlight Saturation: adjusts how much saturation may remain in highlights after tone mapping. The default value is 0.5 and suits many images. Lower values can move the result toward the By Channel algorithm's behavior.
- Knee: sets the threshold below which highlight tone mapping leaves the image unchanged. Higher thresholds protect more of the picture, but the resulting tone mapping can look less gradual depending on the media.

- Highlight Saturation: sets the permitted saturation level in tone-mapped highlights. It defaults to 0.5, which is appropriate for many images. Decreasing it can resemble the output from the By Channel algorithm.

Choose an output tone mapping method to control highlight rendering in HDR color spaces.

Tip

The tone mapping algorithm that gives you the best starting point for additional color correction is often not the one that looks most pleasing immediately. During grading, smooth movement between tonal levels matters, and saturation needs to remain adjustable without warping the image. As a result, media being converted with no later color adjustments may need different settings than media that is part of a full grading pass.
