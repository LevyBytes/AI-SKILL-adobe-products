# Blur and Sharpen effects — Applying Camera-Shake Deblur effect

Tip

You can also reach it through the Effect menu: select Effects > Blur & Sharpen > Camera-Shake Deblur.

Click the search box in the Effects & Presets panel and type Camera-Shake Deblur.

You'll find the effect listed in the Blur & Sharpen effect category.

Drag it onto the timeline to apply it to the composition.

A set of properties comes with Camera-Shake Deblur effect so you can steer how it performs.

Within the Effect Controls panel, twirl open Camera-Shake Deblur effect.

Adjust the properties shown beneath the effect.

- Blur Duration: Sets how many frames around the blurry one get compared to find a frame free of motion blur. This property governs the span of frames over which motion blur persists. Pick a smaller value when the shake is brief and a larger one when it runs longer.
- Deblur Method: Picks the optical flow method, which governs the way pixels move from the motion-blur-free frames onto the blurry frame. Your choices are High Quality (slower) and Standard quality. High Quality (slower) returns sharper accuracy at the cost of longer processing. Standard runs quickly and turns out standard production-quality results.
- Strength: Governs the amount of correction poured into the blurry frame. Depending on how blurry the frame is, you can dial the strength anywhere from 100% (default) up to 200%. Artifacts can creep in at higher values when the motion-blur-free frames inside the blur duration don't line up properly with the blurry ones.
- Shake Sensitivity: Sets the bar for deciding whether a frame counts as blurry enough to warrant deblurring. A lower Shake Sensitivity value treats only the very blurriest frames and might miss other motion blurs. A higher Shake Sensitivity value reacts to motion blur of every kind and attempts to deblur whatever it flags.

- You'll get the best out of the Camera-Shake Deblur effect by applying it once the footage is already stabilized. As an example, run the Warp Stabilizer VFX effect first and bring in the Camera-Shake Deblur effect afterward.
- When a shot resists deblurring, stacking several copies of the Camera-Shake Deblur effect each at a low Strength value can land a better outcome.
