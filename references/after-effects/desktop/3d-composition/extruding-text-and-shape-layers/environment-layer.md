# Environment layer

Within the Ray-traced renderer, a piece of 3D footage or a nested composition layer can serve as a spherically mapped environment surrounding the scene. Reflective objects pick up this environment map layer.

Designating a footage or nested composition layer as an environment layer is done through Layer > Environment Layer. That layer becomes a 3D layer, a tiny "globe" icon shows up beside its name, and the Timeline panel surfaces this trimmed-down set of properties (under "Options"):

- Orientation and X/Y/Z Rotation: Spins the backdrop environment and the way it reads in reflections, which comes in handy for concealing the seam where the layer's edges meet.
- Opacity: Sets how opaque the environment is as a backdrop, though not within reflections.
- Appears in Reflections: Decides how the scene draws on the environment map. The environment can show in reflective objects on top of serving as a backdrop (On), show only in reflective objects and not as a backdrop (Only), or serve purely as a backdrop with no presence in reflections (Off).

Any footage or nested composition layer is eligible as an environment layer, yet — as with cameras — whichever non-muted environment layer sits highest at the current time is the one applied. Furthermore, environment layers feeding reflections stay hidden in Fast Draft mode. Wherever the environment layer is partly transparent, the backdrop shows the composition's background color, but reflections do not.

Note

- Just like adjustment lights, flipping on the Adjustment Layer switch for an environment layer confines it to the 3D reflective layers stacked beneath it.
- Parenting an environment layer to a layer that has a negative scale flips the orientation (which is the expected behavior).
