# How Color Management works

See how Color Management keeps color interpretation and display accurate across devices and formats for smoother editing.

Color Management converts each source clip edited into a sequence into that sequence's working color space, where effects and color adjustments are applied. The full sequence is then converted to an output color space for monitoring and export. During this process, tone mapping may be used to compress highlight and shadow detail that would otherwise clip or distort, helping wide gamut source media, such as camera raw, fit narrow gamut output formats, such as Rec.709, without manual setup.

Color Management centers on two transformations: Input Color Space to Working Color Space, followed by Working Color Space to Output Color Space.
