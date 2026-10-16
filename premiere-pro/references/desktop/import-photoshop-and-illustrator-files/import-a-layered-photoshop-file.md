# Import a layered Photoshop file

Premiere can import files from Adobe Photoshop 3.0 or later and from Adobe Illustrator. For layered files, you control how the layers come in. Empty transparent areas in non-flattened files stay transparent after import because that transparency is stored as an alpha channel. This makes it possible to place imported graphics over clips on other tracks without additional work.

Layered Photoshop files can be imported in several ways: selected layers as separate clips in a bin, selected layers as separate clips in both a bin and a sequence, or selected layers merged into one video clip.

Premiere can also import Photoshop files saved from Photoshop in timeline animation mode when they contain videos or animations.

Note

A layer brought individually from a Photoshop composition into Premiere may behave differently than expected.

From the original file, Premiere preserves attributes such as opacity, position, transparency (alpha channel), visibility, layer masks, adjustment layers, vector masks, layer clipping paths, clipping groups, and common layer effects. When Photoshop exports to a format that supports alpha channels, a white background exports as opaque white, while a checkerboard background exports as a transparent alpha channel.

Layered Photoshop import is a convenient way to use graphics created in Photoshop. If Premiere imports a Photoshop file as unmerged layers, every layer becomes its own clip inside a bin. Each clip name combines the layer name with the name of the file that contained it. Each layer also uses the default duration selected for still images in Preferences.

Video or animation stored in Photoshop files imports like any other Photoshop file. Each layer takes the default still-image duration, so playback after import may not match the timing in the Photoshop source. Before import, set the still image default duration to match the intended speed. For example, for a Photoshop animation made at 30 fps and a Premiere sequence also set to 30 fps, set the Premiere still image default duration to 30 frames in Preferences.

The choices in the Import Layered File dialog box control how Premiere interprets video or animation layers during import.

Selecting a Photoshop file with layers for import opens the Import Photoshop Document dialog box.

The Import Layered File menu provides these import choices:

- Merge All Layers: Combine every layer and import the file into Premiere as one flattened PSD clip.
- Merged Layers: Combine only the selected layers and import them into Premiere as one flattened PSD clip.
- Individual Layers: Bring in only the selected layers from the list, placing one clip per source layer in a bin.
- Sequence: Bring in only the selected layers, with each layer as a separate clip. Premiere also builds a sequence with each clip on its own track and places the clips in their own bin in the Project panel. When Sequence is chosen, the Footage Dimensions menu offers these choices:
- Document Size: Change the clip frame size so it matches the frame size defined in the Sequence Settings dialog box.
- Layer Size: Set each clip frame size to the dimensions of its source layer in the Photoshop file.

Note

When one layer is imported as a single clip, the Project panel name uses the layer name followed by the original filename.
