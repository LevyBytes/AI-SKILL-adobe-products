# Audio Track Mixer automation modes

Understand how Audio Track Mixer automation modes govern track changes during playback in Adobe Premiere.

Set automation modes from the menu at the top of each track. For instance, while playback is running, drag a track's volume fader or pan control. On later playback, if that track's automation menu is set to Read, Touch, or Latch, Premiere plays the track using the adjustments you recorded. As you change channels in the Audio Track Mixer, Premiere writes those changes to the matching tracks by adding track keyframes in the Timeline panel. In the other direction, audio track keyframes that you create or edit in the Timeline panel drive values, including fader positions, inside the Audio Track Mixer.

For each audio track, the automation options menu selection defines how the track behaves during mixing:

- Off: During playback, stored settings for the track are ignored. Off permits live use of Audio Track Mixer controls without existing keyframes taking over. Changes made to the audio track are not recorded while Off mode is active.
- Read: Track keyframes are read and used to control playback. When a track has no keyframes, changing a track option such as volume applies the change evenly to the whole track. If you change an option on a track in Read automation, that option returns to the value it had before the current automation pass after you stop changing it. The Automatch Time preference controls the return rate.
- Write: Premiere records changes to any automatable track setting that is not set to Safe During Write, then creates the matching track keyframes in the Timeline panel. Write mode begins writing automation as soon as playback begins, without waiting for you to move a control. To alter that behavior, open the Audio Track Mixer menu and choose Switch To Touch After Write. When playback stops or a playback loop finishes, the Switch To Touch After Write command changes every Write mode track to Touch mode.
- Latch: This mode matches Write except that automation begins only after you start changing a property. The starting property values come from the earlier adjustment.
- Touch: This mode matches Write except that automation begins only after you start changing a property. After you stop changing the property, its option settings move back to the previous state from before the current automation pass. The Automatch Time audio preference controls the return rate.
