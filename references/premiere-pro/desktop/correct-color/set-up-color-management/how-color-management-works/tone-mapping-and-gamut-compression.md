# Tone mapping and Gamut Compression

Camera raw and log-encoded media often contain more latitude and color than local monitoring, streaming, or broadcast delivery can show. Out-of-range values therefore need to be clipped or compressed into the displayable range. Manual adjustment is possible, but tone mapping quickly compresses a broad luminance range into the selected signal range, and Gamut Compression quickly compresses a broader color range into that signal range.

Whether you use the default SDR image processing preset or an optional wide gamut image processing preset, tone mapping and Gamut Compression can accelerate the workflow in these ways:

- Input Tone Mapping and Input Gamut Compression happen during the first conversion from input to working color space, so image conversion occurs before imaging effects. This can make SDR workflows simpler, though highlight detail that has been compressed too much may be harder to recover. Because these operations are tied to clips, they can be adjusted clip by clip.
- Output Tone Mapping and Output Gamut Compression happen after all effects are processed, within output color space conversion. In wide-gamut workflows, this keeps Lumetri panel color adjustments at the highest quality and leaves source highlight and shadow detail recoverable. Since the operations are applied at output, each sequence can have only one setting, ensuring composited clips receive identical tone mapping.

Tip

Output Tone Mapping as set in the Wide Gamut (Tone Mapped) preset can slightly darken SDR media when it is converted into a wide gamut working color space. That is usually acceptable for camera-original SDR media that will be color adjusted anyway, because all color changes occur before output tone mapping and you are adjusting source levels. It can be an issue for previously graded mastered SDR media, which may now look different. The Wide Gamut (Minimal Tone Mapping) preset reduces the problem by applying tone mapping only to SDR clip highlights and also mapping highlights that fall outside the gamut.

Tone mapping and gamut conversion are optional and can be disabled whenever necessary. With them off, out-of-range highlights and shadows are clipped instead of compressed, and bright image areas may look harsh unless you manually adjust those levels.

Different tone mapping and gamut compression algorithms create slightly different results depending on the image's color and contrast range. Quality is subjective, and one algorithm may be preferable for particular media or preferences. The defaults are selected to produce generally good results across a wide range of media.
