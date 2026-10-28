# Apply morph cut to smoothen jump cuts

Apply Morph Cut in Premiere to refine interviews by smoothing jump cuts between sound bites.

Before you begin

Import media and build a sequence. Ideally, the sequence contains one talking head and a static background.

On the Timeline, set In and Out points around the section of the clip you intend to remove.

Clip removal can be done several ways, including lift and extract, delete, and ripple-delete. Repeat this for every part of the clip that should be removed.

In the Effects panel, choose Video Transitions > Dissolve > Morph Cut, then drag the effect onto the edit point separating the Timeline clips.

Note

To reduce lip sync problems, place Morph Cut where the last or first words of speech reach their peaks. Audio waveforms can also help you find natural pauses and place cuts there.

After Morph Cut is applied, analysis starts right away in the background. When analysis begins, the Program Monitor displays an Analyzing in background banner to show progress.

After adding the Morph Cut transition, double-click the effect in the Timeline panel to set its transition duration.

Set the duration by applying the Morph Cut transition and double-clicking the effect in the Timeline panel.

You can keep editing the footage or work elsewhere in the project during analysis. When analysis is finished, Premiere creates a symmetrical transition centered on the edit point. The transition duration uses the 30 frames default set by Video Transition Default Duration. You can adjust that default duration in the Preferences dialog.

If lip movement and audio are not precisely aligned, or if the result does not look right, adjust the In and Out points or change the transition duration.

Note

- A typical effective transition duration is about 10-20 frames.
- Premiere starts a new analysis every time a selected Morph Cut changes, including after an undo. Previously analyzed data does not need to be deleted.
