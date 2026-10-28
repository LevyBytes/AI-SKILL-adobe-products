# Tweaking controls for Grain effects

A shared group of Tweaking controls is common to both the Match Grain and Add Grain effects. These controls let you reshape the noise's intensity and size and work in blur, any of which you can apply across all three channels at once or to each channel on its own. The applied grain's aspect ratio is yours to change as well.

Note

The Tweaking controls' values are measured relative to the noise sampled in the source layer: at 1.0 that property of the source noise stays put, while higher and lower values shift the applied noise.

Adjust any of the controls below in the Tweaking controls group:

- Intensity: governs how much the brightness and color strength vary between pixels in the generated noise, which sets how visible the noise is. Raising it leaves each grain's position and size alone but makes the grain seem to pop more; lower values read as more subtle and muted.
- Size: sets the generated grain's size in pixels.
- Softness: sets how much softness the grain carries.
- Aspect Ratio: governs the generated grain's width relative to a fixed height of 1; it comes in handy for faking anamorphic lenses or for aesthetic effects. Above 1 the grain stretches horizontally; below 1 it squashes horizontally.
- Channel Intensities: governs the contrast between pixels in the generated noise on a per-channel basis. You might, for example, want extra grain on the blue channel to mimic film.
- Channel Size: sets the generated grain's size in pixels separately for each channel.
