# Frame blending

Stretching or remapping a layer down to a slower frame rate, or to one beneath its composition's frame rate, can leave movement looking jerky. That jerkiness comes about because the layer now carries fewer frames per second than the composition does. The same jerky look can equally show up when you stretch or remap a layer to a frame rate above its composition's. Frame blending is the tool for smoothing motion as you slow a layer down or speed it up. Hold off on frame blending unless a layer's video has actually been re-timed—meaning the video runs at a frame rate different from that of the source video.

Two flavors of frame blending ship with After Effects: Frame Mix and Pixel Motion. Frame Mix renders faster, while Pixel Motion delivers far superior results, particularly on footage that's been slowed down dramatically.

Frame blending is also shaped by whichever Quality setting you pick. With the layer at Best quality, frame blending yields smoother motion though it can take longer to render than at Draft quality.

Note

While handling a frame-blended layer in Draft mode, After Effects always falls back on Frame Mix interpolation to speed up rendering.

Frame blending can also be switched on for every composition when you render a movie.

Turn to frame blending to lift the quality of time-altered motion in a layer carrying live-action footage—video, say. A sequence of still images can take frame blending, but a lone still image cannot. When you're animating a layer—sliding a text layer across the screen, for instance—reach for motion blur instead.

Note

Frame blending won't apply to a precomposition layer (one whose source footage item is a nested composition). That said, you can apply frame blending to the layers inside the nested composition as long as those layers are themselves built on motion footage items, like video or image sequences.

Click the layer over in the Timeline panel.

Select Layer > Frame Blending > Frame Mix.

Select Layer > Frame Blending > Pixel Motion.

When the relevant Frame Blending command (Frame Mix or Pixel Motion) carries a check mark beside it, that tells you it's active on the selected layer. The Frame Blending switch also shows up in the Switches column for that layer in the Timeline panel. Strip frame blending off by either clicking the Frame Blending switch or picking the matching Frame Blending command a second time.

No matter what state the layer switches are in, frame blending being off for the composition means it's off for every layer in that composition. Switch frame blending on for the composition either through the Enable Frame Blending choice in the Timeline panel menu, or via the Enable Frame Blending button sitting atop the Timeline panel.

Note

Because motion blur can make it tougher for Pixel Motion to pick out distinct objects within each frame, the motion-vector calculation grows less dependable. When you're using Pixel Motion for slow motion, footage carrying less motion blur produces better results.

### More like this

- About animation, keyframes, and expressions
- The Graph Editor
- Preview video and audio
- Layer image quality and subpixelpositioning
