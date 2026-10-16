# Asymmetrical trimming

Make asymmetrical trims in Adobe Premiere so edits can change differently across tracks while sync is preserved.

Asymmetrical trimming occurs when different tracks contain a selected mix of Ripple In and Ripple Out edit points, with no more than one selected edit point on each track. This setup lets clips be trimmed in opposite directions while alignment is maintained. If a track has multiple selected edit points, every selected point on that track moves in the same direction.

Asymmetrical trimming is available in both the Timeline and Trim Edit modes.

For an asymmetrical trim, all tracks use the same trim duration, while each edit point may move left or right according to its type.

- The primary trim direction identifies the main edit point. You can set it with a tool, keyboard shortcut, or button, and it affects every track whose edit point matches that primary trim type.
- Edit points with a different trim type than the primary one move the other way.
- In the Timeline, the primary direction determines which edit point controls the asymmetrical trim.

During asymmetrical trimming, all clips shift consistently across tracks, keeping the edit synchronized. As Ripple In and Ripple Out edits change clips differently, trailing clips still move in the same direction on every track, which preserves alignment.

For example, with the Ripple Edit tool, dragging an edit point 10 frames right adds 10 frames to other edit points configured as Ripple Out. In the same operation, edit points configured as Ripple In lose 10 frames.

Note

- The edit points do not move; instead, more head material from the clip is revealed. Trailing clips on all tracks move right by 10 frames.
- Trim In and Trim Out pairings do not count as asymmetrical trimming. Even when the edit point sides are different, they travel in the same direction and trailing clips do not shift.
