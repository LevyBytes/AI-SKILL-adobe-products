# Gamut Compression options

Like tone mapping, gamut compression fits a broader color range into a smaller gamut by compressing it so the converted image remains perceptually close to the original. If wide gamut source media does not contain saturated highlights, Gamut compression may not create a visible change. When wide gamut sources do include saturated highlights, combining gamut compression with tone mapping can substantially improve the automatic conversion of wide gamut, extended, or high dynamic range media into SDR's narrower dynamic range. These gamut compression settings leave SDR clips unchanged.

Available gamut compression choices:

- Luminance Preserving: the default choice keeps brighter colors brighter by desaturating them enough to fit inside the gamut.
- Saturation Preserving: this choice protects highly saturated colors by making them darker, which may reduce highlight brightness.
