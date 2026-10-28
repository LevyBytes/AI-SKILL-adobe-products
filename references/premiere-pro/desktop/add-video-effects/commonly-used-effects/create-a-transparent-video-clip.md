# Create a transparent video clip

Use an empty video layer in Adobe Premiere for alpha-based effects that should not cover lower video.

Transparent video is a generated clip, similar to `Black Video`, `Bars and Tone`, or `Color Matte`. Use it when an effect creates the visible image and keeps transparency intact, such as the `Timecode` or `Lightning` effect. Treat transparent video as a clear matte that carries effects while leaving underlying layers visible.

At the lower-right of the Project panel, select the New Item icon, then choose `Transparent Video`.

In the New Transparent Video dialog box, set `Width`, `Height`, `Timebase`, and `Pixel Aspect Ratio` to the values for the sequence where the transparent video will be used.

Select `OK`.

Move the transparent video clip from the Project panel to the top track in the sequence, extend it to the needed duration, and add an effect.

Note

Transparent video works only with effects that use the alpha channel, such as `Checkerboard` and `Grid`. Some third-party lens flare effects and other effects that include an alpha channel can also work well on transparent video.
