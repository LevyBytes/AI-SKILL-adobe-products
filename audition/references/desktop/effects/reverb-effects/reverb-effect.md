# Reverb effect

Reverb > Reverb models acoustic spaces with convolution-based processing. It can reproduce environments including coat closets, tiled bathroom showers, concert halls, and grand amphitheaters. Echo spacing can be tight enough that the reverberated tail fades smoothly over time, creating a warm, natural sound. Pre-Delay Time can also be changed to suggest room size.

Compared with Reverb, Full Reverb has additional controls and better rendering quality. For quick edits, the smaller control set in Reverb may be preferable.

Note

Reverb is processing-heavy. In real-time multitrack sessions, pre-render it or switch to Studio Reverb. See Pre-render track effects to improve performance.

Reverb simulates acoustic spaces and adds depth and ambience to audio.

Reverb can model acoustic spaces while adding depth and ambience to audio.

Decay Time

Defines, in milliseconds, how long the reverb takes to fade to infinity, about -96 dB. For small rooms, use values below 400; for medium-sized rooms, use 400 to 800. Values above 800 suit very large rooms, for example concert halls. Enter 3000 milliseconds to make reverb tails for a giant amphitheater.

Tip

To model rooms containing both echo and reverb, apply Echo first to establish room size, then apply Reverb to make the result more natural. Even a Decay Time of 300 milliseconds can give dry sound more perceived space.

Pre-Delay Time

Sets the number of milliseconds before reverb reaches maximum amplitude. With a short Decay Time, Pre-Delay Time should also be shorter. A value around 10% of Decay Time usually sounds most realistic, though longer Pre-Delay Time with shorter Decay Time can produce interesting effects.

Diffusion

Models natural absorption by reducing high frequencies during reverb decay. Faster absorption times emulate occupied, furnished, carpeted spaces such as nightclubs and theaters. Slower times, over 1000 milliseconds, suggest empty rooms such as auditoriums where high-frequency reflections are more common.

Perception

Changes the reflection character inside a room. Lower values make smoother reverb with fewer clear echoes. Higher values suggest larger rooms, add more amplitude variation, and create spaciousness through distinct reflections over time.

A Perception value of 100 with a Decay Time of 2000 milliseconds or more can create interesting canyon effects.

Dry

Sets the percentage of source audio sent to output. In most cases, 90% works well. Raise Dry for subtle spaciousness, or lower it for a special effect.

Wet

Sets the percentage of reverb sent to output. For subtle spaciousness on a track, keep Wet below Dry. Increase Wet to suggest that the source is farther away.

Sum Inputs

Combines stereo or surround waveform channels before processing. Select it for faster processing, or deselect it for fuller, richer reverb.
