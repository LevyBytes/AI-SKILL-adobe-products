# Add temporal filtering to a layer

Run the Remove Grain effect on your image.

Set the Remove Grain preview region over whichever part of the image shifts most subtly from frame to frame or holds the most moving image detail.

Turn on Enable within the Temporal Filtering controls.

Push the Amount value to 100%.

Render the composition and export it.

Should streaking or blurring show up around moving objects, ease the Motion Sensitivity value down, then preview or render once more.

- For a quick noise cut on a movie riddled with buzzing noise, drop the Noise Reduction value to zero, push the Temporal Filtering Amount to 100%, and render the movie.
- To make previews faster, hold off on applying temporal filtering to your layer until every setting for a single frame is dialed in.
- To keep effects on a layer while still applying temporal filtering to it, precompose the chosen layer (choose Layer > Precompose), then run the Remove Grain effect on that layer.
