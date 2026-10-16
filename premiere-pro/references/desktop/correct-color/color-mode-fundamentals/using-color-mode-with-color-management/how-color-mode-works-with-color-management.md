# How Color mode works with Color Management

Color mode is built to work with Color Management so color adjustment begins from an optimized baseline. When Color Management is enabled and source media is tagged correctly, it transforms all source media automatically to the target output format and places adjustment work inside an optimized image-processing pipeline. With strong source media, major corrections should be less necessary, letting you focus on the smaller refinements that elevate good images.

Every color adjustment tool in Color mode is designed to cooperate with the Color setup applied to the sequence's color management. Direct Rec. 709 (SDR) and Wide Gamut (Tone Mapped) should both yield strong results. The tools are also designed to perform well for SDR (Rec. 709) output and for HDR (Rec. 2100 HLG or PQ) output.

Caution

Always verify that sequences are using the right color setup before grading begins. The wrong setup can create unexpected results, and switching the setup after adjustments are made can change how clips look, so it is not recommended.

Wide Gamut (Tone Mapped) is where Color mode is especially effective because output tone-mapping creates a pleasing roll-off in highlights and shadows, making it easier to push the signal without constant clipping concerns. This behavior is supported by improved default Tone Mapping and Gamut Compression settings for graphics and SDR media, controlled through Apply Inverse Tone Mapping and Gamut Compression in Advanced settings.

Note

During the public beta, Adobe is still refining Apply Inverse Tone Mapping and Gamut Compression in Advanced settings. Testing Wide Gamut (Tone Mapped) and sending feedback helps confirm that the final behavior meets user needs.

Use Advanced settings when you need to manage tone mapping, gamut compression, or the working color space.

Advanced settings provide controls for tone mapping, gamut compression, and working color space choices.
