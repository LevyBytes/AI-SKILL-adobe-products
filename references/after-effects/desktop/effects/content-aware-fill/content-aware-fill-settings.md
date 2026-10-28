# Content-Aware Fill settings

Reach the Content-Aware Fill Settings dialog by clicking the menu icon (the three bars) along the Content-Aware Fill panel's title bar, then picking Content-Aware Fill Settings.

- Output Depth: How many bits per channel (8-, 16-, or 32-bpc) the fill layer sequence files are written with. Unless changed, Output Depth picks up whatever color depth the project uses.
- Output Location: Decides the destination where After Effects stores the fill layer sequence files. Out of the box, those files land in a folder called Fills that sits alongside the project file.
- Path Type: Choosing Project Relative stores the files at a spot defined relative to the project file, whereas Absolute pins down the folder's complete path.
- Path: Where the folder lives. Under Absolute, supply the folder's full path; under Project Relative, give the path measured from the project file. Within the path, one dot (.) stands for the folder holding the project file, and a pair of dots (..) moves a level up or down.
- Create Photoshop Reference Frame: Writes reference frames to a PSD and launches it in Photoshop. This is on by default. Switch it off and the reference frame is instead written as a PNG (8- or 16-bpc) or EXR (32-bpc) and opened in whatever application the system defaults to for those formats.
- Create Photoshop Sequence for Output: Writes fill layer sequences as PSD files. This sits off by default. When off, fill layer sequences are written instead as PNG (8- or 16-bpc) or EXR (32-bpc) files.
- Auto-manage Unused Fill Footage: Each time a fresh fill layer is produced, you're prompted about whether to discard fill layer footage no composition is using. Off by default.
