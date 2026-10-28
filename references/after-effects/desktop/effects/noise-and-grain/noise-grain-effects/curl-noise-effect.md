# Curl Noise effect

Use new beta features

You can put the Curl Noise effect through its paces and send feedback right now — find it in After Effects (beta).

Get started

When you're chasing a noise effect with the feel of smoke, flowing water, or swirling ink, the Curl Noise effect is the one to reach for. What it makes is smooth, animated 2D noise with a fluid, organic character — a natural fit for backgrounds, texture overlays, abstract motion, and anywhere you'd rather have movement that flows than flickers.

What sets it apart from other noise effects is that the noise field gets curled: the vectors defining the noise are rotated to flow tangentially at all times, which is what hands the result its signature fluid character.

Loop Evoluation

Input Noise from another layer with CC Particle World

With Internal Noise Speed and Direction

Smoke and Fire

- Internal: draws on noise the effect makes itself. It's the most self-contained choice and the only one that switches on Speed and Direction. Speed (0–100) sets how fast the noise field drifts over time. At 0 it's dead still. Direction fixes the angle the field travels in.
- This Layer: takes its noise input from the luminance of whatever layer the effect sits on. Wherever your layer is brighter becomes a peak in the noise field, and the curl follows from the gradients across that image. Because the layer's own content is what drives the field here, Speed and Direction are switched off.

  - Source Mapping: Fill or Center governs the way the source layer maps onto the curl layer whenever their sizes don't agree. With Fill the source is stretched to fill the layer; with Center a 1:1 pixel mapping centers it instead. A source smaller than the curl layer leaves its surroundings reading as neutral (mid-gray, which throws no gradient and hence no curl along the edges); a source that's bigger gets cropped around its center.

  - Off eases the edges down to neutral, so the curl tapers off naturally as it nears the source's edge.
  - On mirrors the source along its edges, building a seamless tile that carries the field on endlessly every direction with no edge artifacts.

- Softness: 0–100, available solely when the source is layer-based, puts a blur on the input noise field. Hold it at 0 and the source rides through untouched. Push it up and the source's fine detail smooths away, yielding gentler, more gradual shifts in curl direction. When your source carries sharp edges or fast brightness changes, raising Softness is usually the cure.

  - Transform : Scale, Offset, Rotation, and other options place and size the noise field in space. This section behaves much like the Transform group in the Fractal Noise effects.

  - Evolution: a rotation angle laid globally over every swirl calculation. Animate it over time and the whole pattern cycles through different states — ideal for loops or for nudging the overall look without disturbing the underlying structure. For a looping Evolution pattern, be sure Turbulence Speed and Input Noise Speed are both set to 0.
  - Turbulence Speed: 0–200 sets how fast the noise field shifts over time. At 0 the turbulence is frozen. Crank it up and it boils and seethes faster. It runs independent of Input Noise Speed, gauging the pace at which the internal perturbation evolves rather than any motion of the Input Noise.
  - Swirl: -360 to 360 is the chief control for animating the noise pattern over time. Higher values spin up tighter, more dramatic swirling and coiling. Lower values run gentler and more flowing. Negative values flip the swirl's direction.
  - Density: -100 to 100 sets how tightly the noise's variation packs together. Go positive and complexity gathers near the center; go negative and it spreads outward. Held at 0, the distribution stays even.
  - Smoothness: 0–100 sets how crisp or soft the curl structure reads. Keep it at 0 for fine, detailed curl; raise it and the curl softens and smooths out.
  - Blend X/Y: 0–100 tips the flow's leading direction one way or the other along the horizontal-to-vertical axis. Near 0 the flow stays largely horizontal; up at 100 it turns largely vertical.

- Sample Count: 3–24 sets how smooth and continuous the flow lines look. Adding samples yields longer, more cohesive lines; fewer leave a rougher, more broken-up result.

  - Sample Radius: 0–200, where 0 leaves the soft underlying noise with no flow lines and 200 yields fully defined, elongated line structures. Larger values lean toward broader, more sweeping structures; smaller values catch finer detail.
  - Flow Softness : 0–100 sets the gap between the bright flow lines and the darker regions around them. Low values give a softer, more diffuse look where everything blends together by degrees. Crank it higher and those bright lines read more sharply set off from a darkened backdrop.
  - Edge Definition: 0–100, where lower values yield soft, feathered edges that bleed into one another. Higher values lean toward sharper, brighter, more distinct strands.
  - Flow Falloff: 0–100, where 0 keeps the flow lines even from edge to edge of the frame. Push it up and the result reads more organic and irregular, with some patches brightening as others drop away.

  - Input Noise: displays the raw noise before anything is done to it.
  - Curl Generation: displays the stage where that noise becomes flowing motion.
  - Final Render: displays the completed look, flow lines and all, smoothed out.

- Contrast: tune the gap between light and dark regions in the noise to raise or lower visual intensity.
- Brightness: set an offset to the noise's overall luminance, making the result lighter or darker while leaving its structure intact.
- Clip HDR Results: cap values to the displayable 0–1 range so bright HDR values don't run past standard color bounds.
- Channel: pick the target for the Curl Noise output among the color channel(s) — RGB, individual channels, or Alpha.
