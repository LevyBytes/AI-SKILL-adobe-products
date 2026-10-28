# Freeze a frame in the middle of the duration of a layer

From a Composition or Timeline panel, choose the layer you mean to remap.

Select Layer > Time > Enable Time Remapping.

Right away this command sets down a pair of Time Remap keyframes—one marking the layer's opening, the other its close.

Move the current-time indicator onto the frame you'd like frozen, then set a Time Remap keyframe at that spot by clicking the Time Remap property's keyframe navigator diamond.

Grab the final pair of Time Remap keyframes—that's the second and third—and drag the two of them rightward.

Hit F2 to clear the selection, then click the middle keyframe—the second one—to single it out.

Copy that keyframe by pressing Ctrl+C (Windows) or Command+C (macOS).

Paste the keyframe at the current time with Ctrl+V (Windows) or Command+V (macOS). The current-time indicator should have stayed put ever since step 3.

If you'd like to lengthen the layer so its duration grows to cover the time the freeze-frame added, press the K key twice to send the current-time indicator to the final Time Remap keyframe, then press Alt+] (Windows) or Option+] (macOS).

Between the first and second keyframes the layer runs at an unchanged rate (matching the non-time-remapped layer), and so does the stretch between the third and fourth keyframes. Since the second and third keyframes are the same, one frozen frame holds across the span separating those two.
