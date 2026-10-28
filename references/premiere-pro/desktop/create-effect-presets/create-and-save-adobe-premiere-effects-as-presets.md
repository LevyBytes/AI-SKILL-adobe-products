# Create and save Adobe Premiere effects as presets.

Saving effect presets in Premiere can reduce repeated video-editing work. A custom effect preset can be applied to many clips with one action, helping keep repeated edits consistent.

In the timeline, choose the clip that has one or more effects with settings you want to store as a preset.

In the Effect Controls panel, choose one or more effects to save. Ctrl-click (Windows), or Command-click (macOS) effects to choose more than one.

Open the panel menu by selecting the panel menu icon at the upper-right of the Effect Controls panel.

Select Save Preset.

In the Save Preset dialog box, enter a preset name. Add a description if needed.

Choose one of these preset types. The type controls how Premiere treats keyframes when the preset is applied to a target clip.

- Scale: adjusts the source keyframes proportionally to match the target clip length, and removes any keyframes already present on that target clip.
- Anchor To In Point: keeps the original spacing between the clip In point and the first effect keyframe. For a source clip whose first keyframe sits 1 second after its In point, Premiere puts the matching keyframe 1 second after the target clip's In point. All remaining keyframes are placed relative to that location, with no scaling.
- Anchor To Out Point: keeps the original spacing between the clip's Out point and the last effect keyframe. For a source clip whose final keyframe sits 1 second before its Out point, Premiere puts the matching keyframe 1 second before the target clip's Out point. All remaining keyframes are placed relative to that location, with no scaling.

Select OK.
