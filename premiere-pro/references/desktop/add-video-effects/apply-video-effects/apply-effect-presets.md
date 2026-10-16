# Apply effect presets

Place a preset that contains one or more effect settings onto a sequence clip.

In the Effects panel, expand the Presets bin, then use one of these actions:

- Drop the effect preset on the desired clip in the Timeline panel.
- Choose the clip in the Timeline panel, then drag the effect preset into the Effect Controls panel.

When the preset is dragged onto a clip in the Timeline panel, Premiere chooses the drop destination this way:

- If no clips are selected in the Timeline, the preset goes onto the clip where it is dropped.
- If clips are selected in the Timeline but the drop target is outside that selection, Premiere deselects the previous selection. The target clip and any linked track items become selected, and the preset is applied to that targeted clip plus linked track items.
- If clips are selected in the Timeline and the drop target belongs to that selection, Premiere applies the preset to all selected clips. Linked clips that are not selected are left unchanged.

When the preset is dragged into the Effect Controls panel, Premiere chooses the drop destination this way:

| Selected track items | Preset behavior |
| --- | --- |
| Video track item only | Audio effects in the preset are ignored. |
| Audio track item only | Video effects in the preset are ignored. |
| Both video and audio track items | When the preset is inserted into one audio track, the audio effects go into the targeted position. Premiere adds the video effects to the end of the video track item's effects list. |
| Both video and audio track items | When the preset is inserted into the video track, the video effects go into the targeted position. Premiere adds the audio effects to the end of the effects list for each linked audio track item. |
