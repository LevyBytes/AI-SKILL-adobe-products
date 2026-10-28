# Import Defaults

- Use Dropframe: Takes any NTSC footage to be timed with drop frame timecode.

  - Use Non-Dropframe: Takes any NTSC footage to be timed without drop frame timecode.

  - Ask User: With each import of footage carrying an unlabeled alpha channel, After Effects checks with you first so the interpretation is your call.
  - Guess: After Effects has a go at working out on its own whether the alpha is straight or premultiplied; lacking certainty, it either asks you or settles on its best guess.
  - Ignore Alpha: The alpha channel gets disregarded and After Effects handles the footage as wholly opaque, with no transparency.
  - Straight (Unmatted): Reads the alpha as straight, confining transparency to the alpha channel alone.
  - Premultiplied (Matted with Black): Reads the alpha as premultiplied over a black background.
  - Premultiplied (Matted with White): Reads the alpha as premultiplied over a white background.

  - Footage: Builds a single footage layer.
  - Composition: Builds a composition out of the footage.
  - Composition - Retain Layer Sizes: Builds a composition while holding each layer's original dimensions.

Footage Interpretation on Replacement: Governs what happens to interpretation settings as you swap footage inside a project:

- Reset: Wipe every interpretation setting back to its default for the incoming footage.
- Remember: Carry over the frame rate, alpha interpretation, and the rest of the settings from the footage being swapped out.
