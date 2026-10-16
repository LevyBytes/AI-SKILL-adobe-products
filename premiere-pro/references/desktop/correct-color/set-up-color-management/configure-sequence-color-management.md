# Configure sequence Color Management

Configure Premiere sequence color settings with SDR and HDR presets for color workflows and output formats.

Color settings are defined per sequence so Color Management can be tailored to the deliverable. Different sequences can use different Color Management settings for different outputs. For instance, you can duplicate a color-adjusted sequence and change the duplicate's Output Color Space to create another deliverable. A common workflow is to grade an HDR program, duplicate the sequence, and set the duplicate output color space to Rec.709 for a down-converted version.

New sequences use the Broadcast 709 (SDR) color setup preset by default, and Output Color Space starts as Rec.709. If your workflow needs another setup, presets are the fastest way to change a sequence's Color Management configuration.

Use this workflow to change a color setup preset for either a new sequence or an existing one:

Begin from the appropriate sequence state:

- For a new sequence, use the New Sequence dialog's Color tab.
- For an existing sequence, select the sequence, choose Sequence > Sequence Settings, and open the Color tab of the New Sequence dialog.

In Color setup, choose one of these presets:

- Direct 709 (SDR): the default preset is mainly for SDR workflows that use a Rec.709 SDR working color space and output to Rec.709. SDR media is passed through, while input processing tone-maps and gamut-compresses wide-gamut camera raw sources and log-encoded sources.
- Direct HDR (HLG): this broadcast-oriented preset uses a Rec.2020 HDR (HLG) working color space and outputs to Rec.2020 HDR (HLG). HLG media passes through, while other wide gamut media receives input tone mapping and gamut compression.
- Direct PQ (HDR): this broadcast-oriented preset uses a Rec.2020 HDR (PQ) working color space and outputs to Rec.2020 HDR (PQ). HDR PQ media passes through, while other wide gamut media receives input tone mapping and gamut compression.
- Wide Gamut (Tone Mapped): this wide gamut working space keeps the most image data available for SDR sources, HDR sources, and wide gamut camera raw or log-encoded sources during import. It is well suited to creative grading.
- Wide Gamut (Minimal Tone Mapping): this preset converts SDR and wide gamut media into a shared high-quality working space. Its output tone mapping preserves shadows, mid-tones, and low highlights for both SDR and wide gamut media while tone mapping upper highlights.
- Wide Gamut (No Tone Mapping): this preset performs a direct conversion from SDR and wide gamut media into a shared high-quality working space without tone mapping or gamut compression changing highlights. Video signal values above Output Peak Luminance are clipped.
- Disable Color Management: this turns off automatic conversion from input to working color space and from working to output color space, leaving LUTs and color adjustment effects to handle the workflow manually.

The Color setup menu determines how Color Management is applied in the sequence.

After you select a preset, Premiere automatically applies that preset's default Output Color Space. You can still adjust it here for the monitor or delivery workflow.

Confirm with OK.

Advanced controls for a custom Color Management workflow - Most projects are covered by the available Color Management options. For workflows with specific requirements, these settings let you customize Color Management for an individual sequence.

Note

Output tone mapping in the Wide Gamut (Tone Mapped) preset can slightly darken SDR media as that media is converted into a wide gamut working color space. For camera-original SDR footage that will be color-adjusted anyway, this generally is not an issue because every color adjustment occurs before output tone mapping, meaning you still adjust the source levels. Mastered SDR media that was already graded can be more problematic because it may now appear different. The Wide Gamut (Minimal Tone Mapping) preset can reduce the issue by applying tone mapping only to SDR clip highlights, with the additional advantage of handling out-of-gamut highlights.
