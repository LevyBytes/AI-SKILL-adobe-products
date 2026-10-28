# Premiere and After Effects Color Management compatibility

Understand improved Color Management and Premiere interoperability with After Effects for consistent project color handling.

Alert

After Effects does not match Premiere's HDR monitoring capabilities. As After Effects HDR monitoring improves, SDR workflows show notable consistency between the two applications. In HDR workflows, a Dynamic Link After Effects composition that round-trips can appear as expected in Premiere while looking different in After Effects.

Premiere's newer Color Management gives sequence clips smoother interoperability and more consistent color when they round-trip to After Effects through Replace with After Effects composition.

Keep these points in mind while working:

- Premiere and After Effects interoperability supports every media format supported by Premiere, except some still formats such as PNG, TIFF, EXR, and JPEG where color consistency may not match to the same degree, and it works with every available sequence working color space.
- Override Media Color Space and Preserve RGB settings used in the Premiere sequence are passed to the After Effects composition.
- A LUT applied to a clip in Premiere through Lumetri is passed to the After Effects composition. A LUT applied through Modify > Color is not passed to the After Effects composition.
- Input Tone Mapping or Input Gamut Compression applied to a clip in Premiere is passed to the After Effects composition. Output Tone Mapping or Output Gamut Compression applied to a clip in Premiere is not passed to the After Effects composition.
- Graphics, color matte, and shapes added in the Premiere timeline are not color-consistent after clips round-trip between Premiere and After Effects.
- If After Effects is open with project color settings that differ from the Premiere sequence, then using Replace with After Effects Composition may or may not produce consistent clip color. The outcome depends on the Premiere sequence color space and the project settings in the currently open After Effects project; if they differ, a warning appears.

Note

Premiere uses sequence-based color settings, while changing color settings in After Effects affects the whole project.

- Color consistency has also been improved for outputs sent from After Effects to Adobe Media Encoder for rendering.
