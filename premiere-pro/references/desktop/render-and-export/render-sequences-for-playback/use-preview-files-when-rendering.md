# Use preview files when rendering

Use preview files during export to make rendering much faster, which is especially useful for complex sequences or urgent deadlines.

Preview files are temporary render files made during editing so playback performs better. During export, those same files can prevent Premiere from rendering identical content again. Benefits include:

- Faster exports, particularly with long sequences or effects-heavy timelines.
- Consistent quality when preview settings and export settings match.
- Lower computer load because less rendering is required.

When previews are rendered, Premiere writes files to the hard disk. These preview files store the results of effects that Premiere processed for the preview. If you preview an unchanged work area again, Premiere plays the existing preview files immediately instead of processing the sequence another time. Premiere saves preview files in a folder you choose. Preview files can also shorten final export time by reusing already processed effects.

Premiere keeps existing preview files whenever it can to save more time. As you edit, preview files move with their related sequence segment. When a segment changes, Premiere trims the matching preview file automatically and preserves the part that did not change.

In Export Settings, go to the GENERAL section and enable Use Previews.

Choose Export to render directly from Premiere. Choose Send to Media Encoder when the export should go to Adobe Media Encoder.

Note

Media Encoder does not use Premiere preview files for encoding automatically. To use Premiere preview files, select Use Previews in Adobe Media Encoder for each encode.

After a project is completely finished, deleting preview files can free disk space.
