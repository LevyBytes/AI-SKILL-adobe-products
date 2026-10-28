# Copy and paste keyframes in a Timeline panel

After keyframes are pasted in the Timeline panel, the earliest one is positioned at the current time and the rest keep their relative order. The pasted keyframes remain selected so their placement can be refined right away.

Keyframes can be pasted only onto a clip or track that is showing the same property as the copied keyframes. Premiere can paste at the Current Time Indicator on just one clip or track at a time. It chooses the paste target in this order:

- When the current-time indicator falls inside a selected clip, the keyframes are pasted into that clip.
- When audio keyframes have been cut or copied, Premiere searches for a corresponding effect property and pastes into the first matching track it finds: first the sequence's audio tracks, then submix tracks, and finally the master track.

If these rules do not identify a video or audio target with the same effects property and the same scope, whether clip or track, Paste is disabled. For example, copied audio track keyframes cannot be pasted when the targeted audio track is displaying clip keyframes.

In the Timeline panel, open the clip or track effect menu and display the property that contains the source keyframes.

Choose the keyframes to copy.

Use Edit > Copy.

In the destination sequence timeline, choose one target:

- Select the clip that should receive the keyframes.
- Target the video or audio track where the copied keyframes should be placed.

Confirm that the destination clip or track is displaying the same property as the keyframes you copied; otherwise, Paste is unavailable. If that property does not appear in the clip or track effect properties menu, apply the same effect used on the original clip or track.

Move the current-time indicator to the time where the keyframes should appear.

Select Edit > Paste.
