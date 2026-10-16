# Automated rendering and network rendering — Segment settings

You will find Segment settings within the Output preferences category.

Note

Choose Edit > Preferences > Output (Windows) or After Effects > Preferences > Output (Mac OS).

Sequences and movie files can be split by After Effects into segments held to a set file count or a set file size. That comes in handy when prepping a movie for media like CD-ROM, where file or folder size might have to stay within chunks of 650 MB or under. The Segment Video-only Movie Files At value caps a segment's size in megabytes. The Segment Sequences At value caps how many still-image files land in one folder.

When the movie you are exporting outgrows the largest file your hard disk's formatting scheme allows, drop the Segment Video-only Movie Files At value below that ceiling. Windows hard disks may be formatted under the FAT, FAT32, or NTFS scheme. FAT tops out at a 2 GB file, FAT32 at a 4 GB file. NTFS allows files so large (roughly 16 terabytes) that one movie is unlikely ever to hit the limit.

Segmenting is reserved for movies carrying no audio. Where an output module takes in audio, that item simply ignores the Segment Video-only Movie Files At preference.

Any render item with Skip Existing Files turned on in its render settings ignores the Segment Sequences At preference. (See Render settings reference.)

Note

A segmented movie won't render and export to the root directory (C:\, for example) in After Effects. Pick an output directory other than the root to render and export a segmented movie. (See Specify filenames and locations for rendered output.)

### More like this

- Basics of rendering and exporting
- Render and export with the Render Queue panel
