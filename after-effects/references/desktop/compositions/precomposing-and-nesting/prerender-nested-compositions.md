# Precomposing, nesting, and pre-rendering - Pre-render a nested composition

Rendering an elaborate nested composition — whether for previews or the final cut — can eat up considerable time. For a nested composition you figure you're finished editing, you can trim the time spent on every render by pre-rendering it into a movie and swapping the composition out for that rendered movie. The original nested composition stays editable, since it sticks around in the Project panel. Make a meaningful change to that original nested composition and you'll want to render it once more.

The payoff from pre-rendering a nested composition grows the more often you reuse it across a project.

Note

Set your final output settings before you pre-render the nested composition.

Pick the composition in the Project or Composition panel.

Choose Composition > Pre-render.

Issuing the Pre-render command drops the composition into the render queue and configures the Import & Replace Usage post-render action to swap in the rendered movie for the composition.

2. Have the rendered file pulled into your project on its own, standing in for the footage or composition it came from.
   Over in the Render Queue panel, tweak settings however you need, then click the Render button to render the composition.

Note

Rather than swapping the composition for the movie, you can instead set the rendered movie up as a proxy for the nested composition.
