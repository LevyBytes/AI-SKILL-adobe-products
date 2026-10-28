# Example: Animate text tracking

This example shows how painless it is to single out characters while tracking a row of text. The Tracking and Line Anchor animator properties let you readily move every character bar one or a handful.

Animating the tracking values for the characters 3579 (left and center) so that only the 7 in the middle remains (right)

1. Create a new composition.
2. Create a new text layer and type 3579.
   Keep the text layer selected and click the Center Text button over in the Paragraph panel.

Select View > Show Grid.

Back in the Timeline panel, with the text layer picked, head to Animation > Animate Text > Tracking.

Confirm that Before & After is what's set in the Track Type menu.

Click the Tracking Amount stopwatch and let the value stay at 0 at 0 seconds.

Move the current-time indicator out to 5 seconds and pull the Tracking Amount value until every character has left the screen.

9. Preview the animation.
   With the current-time indicator sitting at 0, grab a snapshot of the Composition panel. That snapshot, together with the grids, is what you'll lean on to pin down where the number 7 originally sat once the animation ends.

10. Slide the current-time indicator out to the 5-second mark.
    Click the Show Snapshot button.

Back in the Timeline panel, with Animator 1 picked, grab Line Anchor off the Add menu.

Pull the Line Anchor value along until the 7 lands roughly back where it started, centered in the Composition panel.

Hitting the Show Snapshot button inside the Composition panel reveals the 7's exact starting spot. Adjust the Line Anchor value so the character drops back into that original location.

16. Preview the animation.
