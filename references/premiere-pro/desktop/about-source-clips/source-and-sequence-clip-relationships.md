# Adobe Premiere source clips and their relationship to edited sequence clips

Importing media into Premiere creates a source clip for each file in the Project panel. That source clip stands for the original media asset. Whenever the item is placed in a sequence, Premiere adds a sequence clip that points back to the same underlying file. This arrangement lets one media asset appear in multiple sequences while the project keeps one central reference for it.

Source clips are controlled from the Project panel rather than stored inside a sequence. Sequence clips receive their media from the source, but each timeline instance can be edited, trimmed, layered, and adjusted on its own.

Premiere can attach source-level video effects directly to a source clip. After an effect is added at source level, every sequence clip made from that source receives the effect automatically. With the clip selected in the Project panel, those global effects are shown in the Source tab of the Effect Controls panel. This level supports video effects only.

Any source-level effect set in the Effect Controls panel is carried into every sequence instance that uses the clip.

Every timeline instance based on the clip receives source-level effects configured through the Effect Controls panel.

Some effects are unavailable on source clips. Intrinsic effects including Motion, Opacity, and Speed, plus Warp Stabilizer and Rolling Shutter Repair, belong only on sequence clips in the timeline and therefore do not appear in the Source tab. Audio effects are excluded from source-clip processing as well.

For certain formats, especially camera RAW media, source clips provide Source Settings for values such as exposure, color temperature, or gamma before editing begins. These settings affect all timeline instances, giving later grading work a consistent starting point.
