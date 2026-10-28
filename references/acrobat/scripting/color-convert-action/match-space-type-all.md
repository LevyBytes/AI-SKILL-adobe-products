# matchSpaceTypeAll

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 8.0 | No | No | Acrobat Pro only | Integer | R/W |

A bitmap of color space attributes (flags) earmarked for matching is what the matchSpaceTypeAll property holds. Only when every flag lines up — a full match — does the action fire.

Color space attributes to be matched fill both of these bitmap fields. A full match across all flags is the only thing the first field responds to. The second field responds when any flag lines up.

You get at these flags via the colorConvertAction object's constants.spaceFlags object, laid out like so:

constants.spaceFlags object

| Flag name | Description |
| --- | --- |
| DeviceSpace | Color space is one of DeviceRGB, DeviceCMYK, or DeviceGray. |
| CalibratedSpace | Color space is ICCBased, CalRGB, CalGray, or Lab. |
| AlternateSpace | This color space is the alternate space of a DeviceN, Separation, or ICCBased. |
| BaseSpace | This color space is the base space of an Indexed space. |
| IndexedSpace | This color space is an indexed space. |
| SeparationSpace | This color space is a Separation color space. |
| DeviceNSpace | This color space is a DeviceN color space. |
| NChannelSpace | This color space is a DeviceN color space with NChannel attributes. |
| RGBSpace | This space is RGB. This flag should only be used in combination with DeviceSpace or CalibratedSpace. |
| CMYKSpace | This space is CMYK. This flag should only be used in combination with DeviceSpace or CalibratedSpace. |
| GraySpace | This space is Grayscale. This flag should only be used in combination with DeviceSpace or CalibratedSpace. |
| LabSpace | This space is CIELAB. This flag should only be used in combination with DeviceSpace or CalibratedSpace. |

Note

Pairing the bitwise operators with the constants.spaceFlags bit flags lets you assign matchSpaceTypeAll.
