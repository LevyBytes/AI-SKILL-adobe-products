# Animating added or matched grain

Out of the box, the grain or noise the Add Grain and Match Grain effects throw off travels at the same pace as the source material, faithfully mimicking real noise. Easing the noise down can pay off for an aesthetic touch or to stop the added noise from buzzing and calling attention to itself. An internal randomizer inside these effects shuffles the noise pixels' positions from frame to frame. Yet you can also shift how the noise looks between layers on one frame while holding every other parameter steady.

The Animation controls group for the Add Grain or Match Grain effect lets you do the following:

- Set the added grain's frame rate — given as a multiple of the destination frame rate — through the Animation Speed value, which lives in the Animation controls group within the Effect Controls panel. The higher the Animation Speed, the shorter the grains live. Held at the default of 1, the grain moves in step with the frames. Drop it lower and the grain shifts more gradually, which can lend the feel of film grain. At zero the grain stays put over time.
- Smooth the transitions between generated noise frames through interpolation by turning on Animate Smoothly. This control only counts when Animation Speed is below 1.
- Shift how the noise looks between layers on one frame by changing the Random Seed value. Each Random Seed value stands for one of 100 possible looks; changing it doesn't push the results toward more or less randomness.
