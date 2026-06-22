# Audio Effects

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Jan 21, 2026

### Dig into the audio effects that ship with Adobe After Effects and find out how their controls let you tune and sharpen the sound across your compositions.

## Backwards effect

Backwards flips a layer's audio around, running it from the final frame back to the first. On the Timeline panel the frames keep their original order. Turn on Swap Channels to trade the left and right channels.

## Bass & Treble effect

Bass & Treble lets you lift (boost) or pull down (cut) either the low frequencies (bass) or the high frequencies (treble) in your audio. When you need finer command, reach for the Parametric EQ effect instead.

## Compressor effect

By shrinking the gap between your audio's loudest and softest moments, the Compression effect makes the whole thing steadier and more forceful. You'll lean on it for dialogue, music, and mixes that need to sound professional.

Threshold (dB)

Range -60dB to 0dB (default: -16dB). The volume mark where compression starts. Anything above it gets compressed; anything below it is left alone.

Ratio (x:1)

Range 0.4:1 to 30:1 (default: 3:1). The degree of compression applied. At a 4:1 ratio, every 4dB over the threshold comes out as just 1dB.

Knee (dB)

Range 0-30dB (default: 15dB). Eases the handoff right at the threshold point. The larger the value, the gentler compression comes on.

Attack (ms)

Range 0-400ms (default: 6ms). How fast compression engages after the audio crosses the threshold. A fast attack reins in sharp peaks.

Release (ms)

Range 1-4000ms (default: 440ms). How fast compression lets go once the audio falls back under the threshold. This shapes that "breathing" feel.

Auto Release

Switch this on and it works out the best release time for you while locking out the manual release control. It ships on by default.

Makeup Gain (dB)

Range -30dB to +30dB. Compression pulls the overall volume down, so this puts it back to keep levels right.

Output Limit (dB)

Range -30dB to 0dB. Serves as a last-stage limiter that holds off clipping.

Tip

On dialogue, start with the stock 3:1 ratio and a fast attack. On music, lean toward easier 2:1-4:1 ratios paired with slower attack times.

## Delay effect

After a delay you set, the Delay effect plays the audio back again. The result mimics sound rebounding off a surface like a wall.

For the acoustic feel of a room, turn to the Reverb effect instead.

Delay Time

The gap, in milliseconds, between the original sound and its echo.

Delay Amount

The loudness of that first delayed copy, given as a fraction of the original.

Feedback

How much of the echo loops back into the delay line to spawn the echoes that follow.

Dry Out, Wet Out

How much original (dry) sound and delayed (wet) sound land in the final mix. People often settle on 50% for each.

## Distortion effect

The Distortion effect clips and saturates your audio, conjuring harmonics and overtones that the signal never had. Reach for it whether you want a touch of warmth or all-out wreckage.

Type

Sets the flavor of the distortion. Its dropdown menu lists several choices, each delivering its own distortion style.

- Soft Clip
- Hard Clip
- Saturation 1
- Saturation 2
- Tube
- Fuzz

Drive

Range 0-100% (default: 25%). The degree to which you're "overdriving" the effect. Crank it up for more distortion intensity.

Gain

Range 0-300 (default: 25). A boost in amplification applied before the distortion.

Mix

Range 0-100% (default: 100%). Crossfades the original (dry) against the distorted (wet) signal. At 100% you hear only distortion; at 0% the effect drops out.

Volume

Range 0-100 (default: 11). Sets the final output level once distortion has been applied.

Resolution (bit)

Cuts digital bit depth for lo-fi results.

Downsample (x)

A multiplier that lowers the sample rate.

Tip Here are some creative ways to use the Distortion effect:

- For gentle warmth, pick the Soft Clip or Tube type and keep drive low (10-30%).
- For a radio-voice sound, set Hard Clip at medium drive and pull the mix back.
- For aggressive sound design, push Fuzz or Hard Clip to high drive (70-100%)
- For lo-fi, dial down resolution/sample rate over in the Bitcrusher section.

## Flange & Chorus effect

You get flange by blending the original audio with a copy whose delay keeps changing on a cycle over time. That copy's frequency is also shifted by an amount tied to the delay. Chorus reaches for a bigger delay so a single voice or instrument comes across as several voices or instruments.

Out of the box, the Flange & Chorus effect is dialed in for flange. For a chorus result instead, try values along these lines:

- Voice Separation Time of 40 (push it past that to deepen the chorus)
- Voices set to 4
- Modulation Rate of 0.1
- Modulation Depth at 50%
- Voice Phase Change of 90
- Stereo Voices turned on

Voice Separation Time

The milliseconds of separation between each voice, every voice being a delayed take on the original sound. Keep it at 6 or below for flange, and go higher for chorus.

Voices

How many voices make up the processed (wet) audio.

Modulation Rate

The cycling speed of the modulation, measured in Hz.

Modulation Depth

How much modulation there is.

Voice Phase Change

The modulation phase gap, in degrees, from one voice to the next. For the best value, divide 360 by the voice count.

Invert Phase

Flips the phase of the processed (wet) audio to bring out more of the high frequencies; leaving the phase alone brings out more of the low frequencies.

Stereo Voices

Hands voices to the two channels in turn, so the first voice lands in the left channel, the second in the right, the third in the left, and onward. Preview or render in stereo to actually hear stereo voices.

Dry Out, Wet Out

How much original (dry) sound and delayed (wet) sound land in the final mix. People often settle on 50% for each.

## Gate effect

The Gate effect mutes any audio sitting under a set volume threshold. Put it to work tidying up noisy recordings, stripping out background hiss, or carving dramatic cuts in the audio.

Threshold (dB)

Range -60dB to 0dB (default: -60dB). Whatever sits below this level gets muted. Park it just over the level of your background noise.

Attack (ms)

Range 0-1000ms (default: 10ms). How fast the gate opens once the audio crosses the threshold. A fast attack opens it right away, while a slow attack fades it in gradually.

Hold (ms)

Range 0-2500ms (default: 40ms). How long the gate holds open after the audio dips below the threshold. It heads off rapid on/off chatter.

Release (ms)

Range 5-4000ms (default: 220ms). How fast the gate shuts after the hold time runs out. A fast release cuts off sharply, a slow release fades out gently.

Tip

Begin at the stock -60dB threshold and creep it upward until the background noise is gone, taking care not to clip the natural tail of your main audio.

## High-Low Pass effect

The High-Low Pass effect draws a line that frequencies may pass either above or below. High Pass lets frequencies over the set limit through and stops those beneath it. Low Pass works the other way, letting frequencies under the limit through and stopping those above. Put High-Low Pass to work like this:

Boost or attenuate (reduce) a sound. High Pass, for one, can cut traffic noise—often clustered down in the low frequencies—while barely touching a voice recording. Low Pass can strip away high-frequency sounds such as static and buzzing.

Shift the spotlight from one sound to another as time passes. In audio carrying both music and voice, for instance, you might fade the music out while easing the voice in.

Shield gear from frequencies that could damage it.

Route particular frequencies to particular gear. Use Low Pass, say, to pull out sounds meant for a subwoofer.

To hear which frequencies you're filtering out, flip the Filter Options to the opposite value and preview the audio.

Cutoff Frequency

Every frequency below this (High Pass) or above it (Low Pass) is stripped out. Should the unwanted sound shift over time, keyframe this property.

Tip

To pin down the frequencies of unwanted sound, lean on the Audio Spectrum effect.

Dry Out, Wet Out

How much original (dry) sound and delayed (wet) sound land in the final mix. When you're removing frequencies, the usual picks are 0% for Dry Out and 100% for Wet Out.

## Modulator effect

By modulating (varying) both frequency and amplitude, the Modulator effect lays vibrato and tremolo onto audio.

Modulation Type

Which waveform to use. Sine gives smoother modulation; Triangle gives more abrupt modulation.

Modulation Rate

The modulation's rate, in Hz.

Modulation Depth

How much frequency modulation there is.

Amplitude Modulation

How much amplitude modulation there is.

## Parametric EQ effect

Particular frequency ranges get lifted or pulled down by the Parametric EQ effect. One handy use is sweetening music — for instance, lifting the low end so the bass comes through more strongly.

When a clip carries a noise you'd rather remove (say, a forklift's beep buried in the background), you can pinpoint that beep's frequency range and pull it down to soften it.

The effect gives you as many as three separate audio bands to shape. While you tweak the controls, a frequency-response graph shows the overall equalization curve being built; red marks band 1, green marks band 2, and blue marks band 3. Sketching out the frequency-response curve you're after beforehand often makes the controls simpler to dial in.

Tip

The Audio Spectrum effect helps you pin down which frequencies the unwanted sound occupies.

Band Enabled

Switches on an equalization band together with its controls.

Frequency

Where the band you're adjusting is centered.

Bandwidth

How wide the band you're adjusting spans.

Boost/Cut

How far to lift (boost) or lower (cut) the amplitude of frequencies sitting in the chosen band. Cutting comes from negative values, boosting from positive ones.

## Reverb effect

By mimicking the way sound bounces randomly off a surface, the Reverb effect re-creates the feel of a roomy or acoustically live space.

Reverb Time

On average, how many milliseconds separate the source audio from its reverberated version.

Diffusion

How widely the effect scatters the source audio. Pushing diffusion higher can place the sound seemingly farther from the mic.

Decay

How long the effect takes to fade out. Larger spaces are simulated by raising this value.

Brightness

How much of the source audio's detail survives. A room with live, highly reflective acoustics is simulated by high brightness.

Dry Out, Wet Out

How much original (dry) and delayed (wet) sound ends up in the final mix. A setting of 50% is a common choice for both.

## Stereo Mixer effect

Left and right audio channels are blended by the Stereo Mixer effect, which also lets you pan the whole signal across from one channel toward the other.

Invert Phase

Flips the phase on both channels of the stereo signal. Reach for this control when two tones at one frequency would otherwise cancel each other out.

## Tone effect

Simple audio tones are generated by the Tone effect to build sounds — think of a submarine's deep rumble, a phone ringing off in the distance, sirens, or a laser blast. Each instance can stack as many as five tones together to form a chord. Apply it to a layer that already carries audio and the dry (original, unprocessed) track is dropped, leaving only the tone audible.

You can equally drop the Tone effect onto a layer with no audio at all, such as a solid layer, to manufacture sound from scratch.

Waveform Options

Picks which waveform type is used.

- The cleanest tones come from sine waves, whereas square waves yield the harshest, most distorted ones.
- Triangle waves blend traits of sine and square waves yet sit nearer the sine side.
- Saw waves likewise mix sine and square traits but lean closer to square.
- Square waves carry harmonics at odd-number multiples of their fundamental frequency. Those harmonics plus the main tone are what give the wave its signature square profile.
- White Noise waves sit at the far opposite of sine waves. Every frequency is present at equal strength, which yields a steady hiss or static-like sound.

Frequency

Frequency in Hz. Silence a given tone by dropping its frequency to 0.0.

Level

Adjusts the amplitude across every tone in this instance of the effect. Keep the Level value at or below 100 divided by how many frequencies you're running so you avoid clipping and popping. As an example, all five frequencies in use calls for 20%.

Note

- On a placeholder layer the Tone effect produces nothing; swap the placeholder for a footage item before it can generate audio.
- Clicks at a tone's tail can be sidestepped by keyframing the Level you want on the frame just ahead of the tone's end, then keyframing Level to 0.0 right at the end. The same trick suits any audio you cut off sharply.

### More like this

- Preview video and audio
- Audio Spectrum effect
- Set or add keyframes
