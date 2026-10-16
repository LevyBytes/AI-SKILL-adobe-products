# Troubleshooting

A greyed-out or absent Variable Font Axes button usually means one of two things: the active font isn't a variable font, or no text layer is currently selected.

To confirm whether a font is variable, open the Character panel and look for 'Variable' or 'VF' somewhere in the font name.

This crops up when the font in play simply doesn't carry the axis you're trying to animate. To work past it, try the following:

- Pull up the Variable Font Axes pop-up over in the Properties panel and confirm the font really does carry that axis
- Working with a mix of fonts? Make sure every one of them includes the axis
- Switching the font after the animator already exists can leave the animator pointing at an axis that's no longer there
- Set the right font first, then scrap the animator and build it fresh

Range Selector settings target different characters than intended.

- Look at the Based On choice: Characters, Characters Excluding Spaces, Words, or Lines.
- Double-check that your Start and End figures map to the span you meant.
- Mind the Units, since Percentage and Index behave differently.
- Offset, too, can nudge the range somewhere you didn't expect.

Two likely culprits here are a CTI that's parked at the wrong time, or stale cached frames. Work through these fixes to sort it out:

- Slide the CTI over so you're sitting on the keyframe you mean to be on
- Trigger a RAM Preview to refresh the cache (hit the spacebar or 0 on the numeric keypad)
- Look for stray keyframes that might be overriding what you set
- Shut the composition and open it again for a clean refresh

Every font sets its own floor and ceiling for each axis. To dig deeper, reach for these methods:

- Consult whatever spec or docs ship with the font
- Pop open the Variable Font Axes pop-up in the Properties panel to read off the legal range
- Certain fonts keep their ranges tight, for instance Weight 300-700 rather than the full 100-900
- If you need more room, reach for a different variable font that opens the range wider

Swap to a font after an axis is already applied, and if that same axis lives in the new font but with a different floor or ceiling, your original range sticks around until you reapply the axis (at which point it resets and refreshes).

The usual reason is that the destination font doesn't share the axes the source font had. To track down a fix, try this:

- Confirm the destination font carries the same axis tags, things like wght, wdth, and so on.
- Anything custom (INFM, BNCE, and the like) is tied to its own font and simply won't carry over
- For fonts whose axes differ, you'll have to rebuild the animators by hand
- Sticking to fonts from one family or designer gives you smoother compatibility

Run past the ceiling of 8 distinct axes per text layer for animation, and you'll need to thin out the active animators by removing the ones you aren't using.
