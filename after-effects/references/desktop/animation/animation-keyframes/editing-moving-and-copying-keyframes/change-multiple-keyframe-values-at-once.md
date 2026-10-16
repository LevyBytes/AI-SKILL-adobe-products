# Change multiple keyframe values at once

Several keyframes across several layers can have their values changed in a single operation, provided every keyframe you've selected belongs to the same layer property. Exactly how the chosen values shift depends on the technique you pick to change them.

Edit a value by typing a number and every selected keyframe takes on that exact value — an absolute change, in other words. Say you pick several Position keyframes on a motion path and type a Position value into one of them; all of the selected keyframes jump to that identical position value.

Edit a value by dragging the underlined number instead and every selected keyframe shifts by the same delta — a relative change. For instance, select several Position keyframes on a motion path, drag the underlined value on one, and each selected keyframe value moves by an equal amount.

Edit a value graphically in the Composition or Layer panel and every selected keyframe shifts by the gap between the old and new values rather than adopting the new values outright — again a relative change. As an example, choose several Position keyframes on a motion path and nudge one of them 10 pixels to the left, and all of them slide 10 pixels left of where they started.

There's also the option to change several layers' values together in layer bar mode by parenting them.
