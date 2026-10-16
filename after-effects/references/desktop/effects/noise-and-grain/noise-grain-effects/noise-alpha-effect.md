# Noise Alpha effect

Noise lands on the alpha channel courtesy of the Noise Alpha effect.

Supported color depth is 8-bpc.

- Unique Random lays down matching amounts of black and white noise.
- Squared Random lays down high-contrast noise.
- Uniform Animation lays down animated noise.
- Squared Animation lays down animated high-contrast noise.

- Amount: Sets the strength of the noise.

  - Add: Drops the same amount of noise into both the transparent and the opaque parts of the clip.
  - Clamp: Drops noise only into the opaque parts.
  - Scale: Scales the noise to track opacity, leaving 100% transparent areas free of any noise.
  - Edges: Drops noise only into partly transparent parts, such as the rim of the alpha channel.

  - Clip: Anything over 255 maps to 255, and anything under 0 maps to 0.
  - Wrap Back: Values past 255 or beneath 0 bounce back into the 0-255 range. A value of 258 (255+3), for instance, reflects to 252 (255-3), and a value of ‑3 reflects to 3.
  - Wrap: Values past 255 or beneath 0 roll around into the 0-255 range. A value of 258, for example, wraps to 2, a value of 256 wraps to 0, and a value of ‑3 wraps to 253.

- Random Seed: Feeds a value into the noise's random number generator. This control is live only when you pick Uniform Random or Squared Random.

Note

For flashing noise, keyframe the Random Seed control. For noise that animates smoothly, keyframe the Noise Phase value.

- Cycle Noise: Lays down a cycle of noise that runs through once across the time span you set.
- Cycle (in Revolutions): Sets how many Noise Phase revolutions the noise runs through before repeating (offered only while Cycle Noise is on).

Note

To spare yourself the work of keyframing the Noise Phase value, lean on the Cycle Noise option to build a seamless noise loop. Then render the layer and bring it back in as a new source footage item.
