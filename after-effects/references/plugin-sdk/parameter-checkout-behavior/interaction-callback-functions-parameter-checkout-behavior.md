# Interaction Callback Functions — Parameter Checkout Behavior

No matter whether the layer's in and out points were trimmed, the frames you receive run valid from the start of the source footage through its end, with transparency on either side of that span.

When a layer parameter runs at a slower frame rate than the composition checking it out, it refreshes only as frequently as that slower rate demands.

Take a 10fps layer checked out within a 30fps composition: a refresh is needed only every third frame. Should your effect need to vary its output on every frame even though the input layer holds still, you would set `PF_Outflag_NON_PARAM_VARY`.

Whenever an effect checks out an Adobe Illustrator layer set to continuous rasterization, After Effects renders that Illustrator layer with its geometrics applied into a composition-sized buffer.
