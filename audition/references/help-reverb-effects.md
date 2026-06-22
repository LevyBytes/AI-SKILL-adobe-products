# Reverb Effects

> Adobe Audition reference. Original prose; identifiers preserved verbatim.

### Learn to apply and customize reverb effects so audio gains realistic space and depth.

Inside a room, sound reflects from walls, the ceiling, and the floor before reaching your ears. Those reflections arrive so close together that you hear them as ambience rather than separate echoes, creating a sense of space. This reflected sound is reverberation, or reverb. In Adobe Audition, reverb effects can model many different room environments.

Note

For the most flexible and efficient Multitrack Editor workflow, place reverb effects on buses and set their output levels to 100% Wet. Then route tracks into those buses and use sends to manage the dry-to-reverberant balance.

## Convolution Reverb effect

Reverb > Convolution Reverb can recreate spaces from coat closets through concert halls. Convolution reverbs rely on impulse files to model acoustic spaces, producing highly realistic, life-like results.

Impulse files can come from recordings you make in an ambient space or from impulse collections found online. For best results, use uncompressed 16- or 32-bit files whose sample rate matches the current audio file. Keep impulse length at 30 seconds or less. For sound design, experiment with different source audio to create distinctive convolution-based effects.

Convolution Reverb applies realistic acoustic spaces to audio by using impulse response recordings.

Convolution Reverb can use impulse response recordings to add realistic acoustic spaces to audio. Note

Because Convolution Reverb uses heavy processing, slower systems may produce clicks or pops during preview. Those artifacts go away after the effect is applied.

Impulse

Identifies the acoustic-space file. Use Load for a custom impulse file in WAV or AIFF format.

Mix

Sets the balance between the original sound and the reverberant sound.

Room Size

Sets a percentage of the complete room described by the impulse file. Higher percentages create longer reverb.

Damping LF

Lowers bass-heavy, low-frequency parts of the reverb to avoid muddiness and make the sound clearer and more articulate.

Damping HF

Lowers high-frequency transient parts of the reverb to avoid harshness and create a warmer, lusher sound.

Pre-Delay

Sets the number of milliseconds the reverb needs to reach maximum amplitude. For the most natural sound, use a short pre-delay from 0-10 milliseconds. For special effects, use a long pre-delay of 50 milliseconds or more.

Width

Sets stereo spread. A value of 0 produces mono reverb.

Gain

Raises or lowers amplitude after processing.

## Full Reverb effect

Reverb > Full Reverb uses convolution processing, which avoids ringing, metallic tones, and other artificial-sounding artifacts.

It includes unusual controls such as Perception for room irregularities, Left/Right Location for placing the source off-center, and Room Size plus Dimension for building customizable room simulations. To model wall surfaces and resonance, adjust the reverb's frequency absorption with the three-band parametric EQ in the Coloration section.

Changing reverb settings makes this effect generate a temporary impulse file representing the selected acoustic environment. The file can be several megabytes, so processing may take a few seconds before preview is available. The resulting sound is highly realistic and easy to customize.

Full Reverb creates rich, customizable reverberation for audio tracks.

Full Reverb can create rich, customizable reverberation for audio tracks. Note

Full Reverb requires substantial processing; for real-time multitrack work, pre-render the effect or use Studio Reverb instead.

## Reverb Settings

Decay Time

Sets the time, in milliseconds, for reverb to decay by 60 dB. Depending on the Coloration settings, some frequencies can take longer to reach 60 dB while others decay much sooner. Longer settings create longer reverb tails and require more processing. The practical limit is about 6000 milliseconds, a 6-second tail, although the generated tail is much longer so it can fade into the background noise level.

Pre-Delay Time

Sets how many milliseconds pass before reverb builds to maximum amplitude. Reverbs usually build quickly and then decay far more slowly. Extremely long pre-delay values of 400 milliseconds or more can create interesting effects.

Diffusion

Sets the speed of echo buildup. High diffusion values, above 900 milliseconds, create very smooth reverb without obvious echoes. Lower values make distinct echoes easier to hear because the starting echo density is lower, even though density increases through the reverb tail.

Tip

Bouncy echo effects can be made with low Diffusion values and high Perception values. With long reverb tails, combining low Diffusion with somewhat low Perception can suggest a football stadium or similar arena.

Perception

Models environmental irregularities such as objects, walls, and connecting rooms. Low values produce a smooth, plain decay. Higher values create more distinct echoes from different locations.

Tip

If reverb is too smooth, it may sound unnatural. Perception values up to about 40 simulate typical room variation.

Room Size

Sets the virtual room volume in cubic meters. Larger rooms produce longer reverb. Use this control for spaces ranging from a few square meters to giant coliseums.

Dimension

Sets the ratio of room width, left to right, to room depth, front to back. A sonically suitable height is calculated and shown as Actual Room Dimensions at the bottom of the dialog box. In general, width-to-depth ratios between 0.25 and 4 create the best-sounding reverbs.

Left/Right Location

For stereo audio only, this positions early reflections away from center. Use Include Direct in the Output Level section to put the original signal at that same location. Singers placed slightly off center, 5-10% left or right, can create very nice effects.

High Pass Cutoff

Protects low-frequency sounds at 100 Hz or below, such as bass or drums, from being lost. In small rooms, those sounds can phase out when early reflections mix with the original signal. Specify a frequency above the sound you want to preserve. Useful settings are generally 80 Hz to 150 Hz. If the cutoff is too high, the room-size image may become unrealistic.

Set Reverb Based On Room Size

Sets Decay and Pre-Delay times according to the selected room size for a more convincing reverb. You can fine-tune Decay and Pre-Delay afterward if needed.

## Coloration options

Note

To adjust Coloration options visually, drag directly in the graph.

Frequency

Sets the low-shelf and high-shelf corner frequency, or the middle band's center frequency. For example, to make reverb warmer, lower the high shelf frequency and reduce its gain.

Gain

Raises or lowers reverb level in different frequency ranges.

Tip

For subtle enhancement, boost reverb frequencies near the natural frequency of an important sonic element. With a singer's voice, for example, boost 200 Hz to 800 Hz to add resonance in that range.

Q

Sets the middle band's width. Higher values affect a narrower frequency range, and lower values affect a wider one.

Tip

For clear resonance, use values of 10 or higher. To boost or cut a broad frequency span, use lower values such as 2 or 3.

Decay

Sets how many milliseconds pass before the Coloration curve is applied to the decaying reverb. Values up to 700 work well. For more colored reverb, use lower values such as 100 to 250.

## Output Level options

Dry

Sets the amount of original signal mixed with reverb. Low levels make the source sound distant. High levels near 100%, combined with low reverberation and reflection levels, create a close-to-source impression.

Reverberation

Sets the level of the dense reverberant layer. The dry-to-reverberant balance changes the perceived distance.

Early Reflections

Sets the level of the first echoes that reach the listener, which suggests overall room size. Too high a value can sound artificial, while too low a value can remove audible room-size cues. A useful starting point is half of the Dry signal volume.

Include Direct

Applies a slight phase shift to the original signal's left and right channels so they match the early-reflection location set by Left/Right Location on the Early Reflections tab.

Sum Inputs

Mixes stereo or surround waveform channels together before processing. Select this for faster processing, or deselect it for fuller, richer reverb.

## Reverb effect

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

## Studio Reverb effect

Like Audition's other reverb tools, Reverb > Studio Reverb models the sound of a physical acoustic space. Since it does not rely on convolution processing, it runs with less CPU load and responds faster than the other reverb effects. That makes it practical to adjust settings in real time in the Multitrack Editor without rendering the track's effects first.

The Studio Reverb effect dialog box presents room-size, decay, diffusion, and early-reflection controls.

The Studio Reverb effect dialog box includes controls for room dimensions, decay, diffusion, and early reflections.

Room Size

Chooses the modeled room dimensions.

Decay

Changes the reverberation tail length, measured in milliseconds.

Early Reflections

Sets how much of the first-arriving echo content is included, which helps communicate the perceived room dimensions. Very high settings can sound artificial, while very low settings may remove the cues that indicate room size. A useful initial setting is half the original signal's volume.

Stereo Width

Sets how far the reverb spreads between stereo channels. 0% makes the reverb mono, while 100% gives the widest stereo separation.

High Frequency Cut

Sets the upper frequency limit for generated reverb.

Low Frequency Cut

Sets the lower frequency limit for generated reverb.

Damping

Controls how strongly the high frequencies in the reverb signal fade as time passes. Larger percentages apply more damping, creating a warmer reverb color.

Diffusion

Models how surfaces such as carpeting and drapes absorb reflections from the reverberated signal. Lower values leave more distinct echoes, while higher values make the reverb smoother and reduce echo definition.

Dry

Sets how much unprocessed source audio is included in the output.

Wet

Sets how much reverb signal is included in the output.

## Surround Reverb effect

Reverb > Surround Reverb is designed mainly for 5.1 material, though it can add surround ambience to mono and stereo files too. In the Waveform Editor, use Edit > Convert Sample Type to turn a mono or stereo file into 5.1 before applying Surround Reverb. In the Multitrack Editor, send mono or stereo tracks to a 5.1 bus or combine them with Surround Reverb in the mix.

Input, Center

Sets the amount of the Center channel that becomes part of the processed output.

Input, LFE

Sets how much of the Low Frequency Enhancement channel drives reverb in the other channels. The LFE signal itself does not receive reverb.

note: The effect always uses 100% of the Left, Right, and rear surround channel inputs.

Impulse

Selects the file used to represent an acoustic space. Click Load to import your own impulse file; it must be 6-channel and use WAV or AIFF format.

Room Size

Sets how much of the impulse file's full room is used. Larger percentages create longer reverb.

Damping LF

Attenuates bass-heavy, low-frequency reverb content to reduce muddiness and make the sound clearer and more articulate.

Damping HF

Attenuates transient high-frequency reverb content, reducing harshness and making the result warmer and fuller.

Pre-Delay

Sets, in milliseconds, how long the reverb needs to reach full amplitude. For a natural result, use a short 0-10 milliseconds pre-delay. For more obvious special effects, use a longer setting of 50 milliseconds or more.

Front Width

Sets the stereo spread across the three front channels.

A setting of 0 for width creates mono reverb.

Surround Width

Sets how widely the rear surround channels (Ls and Rs) spread the reverb.

C Wet Level

Sets the amount of reverb sent to the Center channel. Because this channel often carries dialog, its reverb level is usually kept lower.

L/R Bal.

Sets the left-right balance for both the front and rear speakers. 100 sends reverb only left, while -100 sends it only right.

F/B Bal.

Sets front-back balance for the left and right speakers. 100 sends reverb only to the front, while -100 sends it only to the back.

Wet/Dry Mix

Sets the balance between original sound and reverberated sound. At 100, the output contains reverb only.

Gain

Raises or lowers amplitude after the effect processes the audio.

### More like this

- Delay and echo effects
- Use effect presets
- Applying effects in the Waveform Editor
- Applying effects in the Multitrack Editor
