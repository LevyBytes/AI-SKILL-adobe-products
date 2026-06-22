# Delay Echo Effects, Diagnostics Effects Waveform Editor Only, Filter Equalizer Effects

> Adobe Audition reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Delay and echo effects; Diagnostics effects (Waveform Editor only); Filter and equalizer effects.

## Delay and echo effects

### Create ambient repeats and time-based sound effects with delay and echo effects.

A delay is a separate copy of the original signal that repeats only milliseconds later. An echo is delayed long enough to be heard as its own copy of the original sound. When reverb or chorus would clutter a mix, delays and echoes can add ambience to a track.

Note

For familiar hardware-delay style options, use the Echo effect in Adobe Audition.

### Analog Delay effect

Delay and Echo > Analog Delay recreates the warm tone of vintage hardware delay units. Its specialized options add characteristic distortion and control stereo spread. For distinct echoes, use delay times of 35 milliseconds or more; for subtler results, choose shorter times.

Analog Delay adds warm vintage-style echo repeats modeled after classic analog delay hardware.

Use Analog Delay for warm echo repeats with a vintage hardware-delay character.

Mode

Sets the hardware emulation type, which shapes equalization and distortion. Tape and Tube emulate the sonic character of vintage delay units, while Analog represents later electronic delay lines.

Dry Out

Sets the amount of original unprocessed audio.

Wet Out

Sets the amount of delayed processed audio.

Delay

Sets delay length in milliseconds.

Feedback

Builds repeating echoes by feeding delayed audio back through the delay line. For example, 20% returns delayed audio at one-fifth of its original volume, producing echoes that fade gently. At 200%, delayed audio returns at twice the original volume, so echoes intensify quickly.

Note

Lower system volume while trying extremely high Feedback settings.

Trash

Adds warmth by increasing distortion and boosting low frequencies.

Spread

Sets the stereo width of the delayed signal.

### Delay effect

Delay and Echo > Delay can create single echoes and several related effects. Delay values of 35 milliseconds or more create distinct echoes; values from 15-34 milliseconds can produce simple chorus or flanging. Because these delay settings do not vary over time, the results are less effective than the Chorus or Flanger effects in Adobe Audition.

Reducing delay further, to between 1 and 14 milliseconds, can position a mono sound spatially so it seems to come from the left or right even when actual left and right volume levels match.

Delay can make one-off echoes or repeated patterns, with timing, feedback, and mix levels available for adjustment.

Use Delay when single echoes or echo patterns need control over timing, feedback, and mix values.

Delay Time

Adjusts delay for left and right channels from -500 milliseconds to +500 milliseconds. A negative value moves a channel earlier in time rather than delaying it. For example, entering 200 milliseconds for the left channel makes the delayed part of the affected waveform play before the original part.

Mix

Sets how much processed wet signal and original dry signal are combined in the final output. A value of 50 blends them evenly.

Invert

Reverses the delayed signal's phase, producing phase-cancellation effects like comb filters. Learn about how sound waves interact.

### Echo effect

Delay and Echo > Echo adds repeated echoes that decay over time. Changing the delay amount can produce effects such as a Grand Canyon-type "Hello-ello-llo-lo-o" repeat or a metallic drainpipe clang. Equalized delays reshape the perceived room, making echoes brighter like reflective surfaces or darker like highly absorptive spaces.

Note

- For a single echo, use the Delay effect instead.
- Make sure the audio file lasts long enough for the echo to finish. If the echo stops abruptly before fully decaying, undo Echo, add several seconds of silence with Generate > Silence, and apply the effect again.

Echo controls add repeated echoes that fade gradually from a sound.

Use Echo controls to place a sequence of gradually fading repeats on a sound.

Delay Time

Sets the spacing between echoes in milliseconds, beats, or samples. For example, 100 milliseconds creates a 1/10th-second gap between successive echoes.

Feedback

Sets how much each echo falls off. Every following echo becomes a certain percentage lower than the one before it. A 0% decay setting creates no echo, while 100% decay creates an echo that never becomes quieter.

Echo Level

Sets the percentage of echoed wet signal mixed with the original dry signal in the final output.

Tip

Set different left and right values for Delay Time, Feedback, and Echo Level to create strong stereo echo effects.

Lock Left & Right

Links the Decay, Delay, and Initial Echo Volume sliders so both channels keep the same settings.

Echo Bounce

Makes echoes alternate between left and right channels. To create one echo that bounces between sides, set the initial echo volume to 100% for one channel and 0% for the other. Otherwise, each channel's settings bounce to the opposite side, producing two sets of echoes on each channel.

Successive Echo Equalization

Sends each successive echo through an eight-band equalizer, simulating natural room absorption. A value of 0 leaves a frequency band unchanged, while the maximum value of -15 lowers that frequency by 15 dB. Because -15 dB is applied to each successive echo, some frequencies decay much faster than others.

Delay Time Units

Sets milliseconds, beats, or samples as the units for Delay Time.

### More like this

- Applying effects in the Waveform Editor
- Applying effects in the Multitrack Editor
- Use effect presets

## Diagnostics effects (Waveform Editor only)

### Diagnostics effects: remove clicks, distortion, or silence, and mark silent sections.

Diagnostics effects can be opened from the Effects menu or directly in the Diagnostics panel through Window > Diagnostics. They quickly remove clicks, distortion, or silence from audio, and can also add markers at silent sections.

Note

For the most control in audio restoration, combine diagnostics with Spectral Display tools and Noise Reduction effects.

### Diagnose and repair, delete, or mark audio

Diagnostics differ from conventional noise-reduction effects because they do not simply process the entire selection. Instead, they scan for problem areas or silence and let you decide which detections to handle.

Choose an option from the Effect dropdown menu in the Diagnostics panel.

Select Scan.

At the panel bottom, choose any of these actions:

- In the list, select one or more detected items, then select Repair, Delete, or Mark. The diagnostic effect determines which actions are available. To mark detected clicks or clipping, right-click the selected list entries and choose Create Markers from the context menu.
- To handle every detected item, select Repair All, Delete All, or Mark All.
- Use the magnifying glass icon to zoom the Editor panel into a selected problem. Select the same icon again to zoom back out.
- Select Clear Repaired, Deleted, or Marked to remove items that were already handled from the list.

### DeClicker options

Diagnostics > DeClicker cleans clicks and pops detected in sources such as wireless microphones, vinyl records, and other audio.

DeClicker uses the same options as Automatic Click Remover, which can be combined with other effects in the Effects Rack and used in the Multitrack Editor. Automatic Click Remover also runs multiple scan-and-repair passes on its own; matching that amount of click reduction with DeClicker requires applying it manually multiple times. DeClicker, however, lets you review detected clicks and choose the ones to fix.

In the Diagnostics panel, select Settings to access these options:

DeClicker removes clicks and pops from sources such as wireless microphones and vinyl recordings.

Use DeClicker to clean clicks and pops from audio including vinyl recordings and wireless microphones.

Threshold

Controls noise sensitivity. Lower values find more clicks and pops but may also catch audio you want to keep. Values run from 1 to 100, and the default is 30.

Complexity

Sets how complex the noise is considered. Higher values add more processing, but audio quality can suffer. Values run from 1 to 100, and the default is 16.

Note

To spot clicks visually, zoom in and use Spectral Frequency Display at 256 bands. This setting is available in the Spectral Display tab of the Preferences dialog box. Most clicks show up as bright vertical bars running from the top to the bottom of the display.

### DeClipper options

Diagnostics > DeClipper repairs clipped waveforms by generating new audio data for clipped sections. Clipping happens when amplitude goes beyond the maximum level supported by the current bit depth, commonly because recording levels were set too high. During recording or playback, watch the Level Meters for clipping; when it occurs, the boxes at the far right turn red.

In the waveform view, clipped audio looks like wide flat areas along the top. To the ear, it sounds like static-like distortion.

Note

When clipped audio also needs DC offset correction, apply DeClipper first. If DC offset is adjusted first, DeClipper will not detect clipped areas that sit below 0 dBFS.

DeClipper settings can rebuild distorted peaks, restore clipped audio, and improve the overall sound.

Use DeClipper settings when clipped audio needs restored peaks and better sound quality.

Select Settings in the Diagnostics panel to access these options:

Gain

Sets how much attenuation happens before processing. Select Auto to derive the gain setting from average input amplitude.

Tolerance

Sets amplitude variation for clipped regions. At 0%, only perfectly horizontal lines at maximum amplitude are detected as clipping; at 1%, detection begins 1% below maximum amplitude, and so forth. A 1% value detects most clipping.

Min. Clip Size

Sets the shortest run of clipped samples that will be repaired. Lower values repair a larger percentage of clipped samples; higher values repair only clipped samples that are preceded or followed by other clipped samples.

Interpolation

- Cubic uses spline curves to rebuild the frequency content of clipped audio. It is generally faster in most cases, but it can add unwanted new frequencies.
- FFT uses Fast Fourier transforms to rebuild clipped audio. It is usually slower, but it works best for severe clipping. From the FFT Size menu, choose how many frequency bands to analyze and replace. More bands improve accuracy while increasing processing time.

Note

To preserve amplitude while restoring clipped audio, apply DeClipper with Gain set to zero, then apply Hard Limiting with Boost set to zero and Limit set to -0.2 dB.

### Delete Silence and Mark Audio options

Diagnostics > Delete Silence and Mark Audio find silent passages and either remove them or mark them. Deleting silence automatically can tighten tracks without changing foreground audio. Marking silence automatically helps you jump quickly to audio cues while editing.

Delete Silence settings remove silent sections from audio quickly.

Use Delete Silence settings when audio has silent parts that should be removed quickly.

Select Settings in the Diagnostics panel to access these options:

Define Silence As

Sets the amplitude and duration treated as silence.

Define Audio As

Sets the amplitude and duration treated as audio content.

Find Levels

Calculates silence and audio signal levels automatically from the file's content.

Fix By (Delete Silence only)

Choose Shortening Silence to reduce silent passages to the specified number of milliseconds. Choose Deleting Silence to mute silent passages while keeping the file length unchanged. Deleting Silence helps keep video synchronized with audio clips in video-editing applications.

Tip

To split sound or speech sections separated by silence into separate files, apply Mark Audio, select Mark All, and then refer to saving audio between markers to new files.

### Mic check

Mic Check tests microphone setup and placement. After analyzing the signal, Adobe Audition suggests improvements related to microphone distance, gain, background noise, and echo. See Mic Check for more information.

### More like this

- About process effects
- Apply individual effects in the Waveform Editor
- Use effect presets
- Create silence

## Filter and equalizer effects

### Shape and polish audio with filters and frequency-content adjustments.

### FFT Filter effect

Because Filter and EQ > FFT Filter is graph-based, you can sketch frequency curves or notches that either reduce or raise selected ranges. FFT means Fast Fourier Transform, a method for rapidly examining amplitude and frequency.

With this effect, you can build wide high- or low-pass filters that keep the upper or lower range, tight band-pass filters that mimic telephone audio, and notch filters that target small frequency spans.

Apply the FFT Filter effect for noise reduction based on frequency content and for tonal shaping.

Use the FFT Filter effect when tonal shaping or frequency-focused noise cleanup is required.

Scale

Sets how the horizontal x-axis lays out frequencies:

For more precise work in the low range, choose Logarithmic. A logarithmic scale is closer to human hearing.

For evenly spaced frequency intervals and detailed high-frequency edits, choose Linear.

Spline Curves

Smooths movement between control points with curved transitions instead of sharper straight-line changes. Learn more about spline curves for graphs.

Reset

Returns the graph to its default, unfiltered state.

FFT Size

Sets the Fast Fourier Transform size and therefore balances frequency detail against time accuracy. Higher values suit steep, exact frequency filters. Lower values reduce transient artifacts in percussive material. For most audio, values between 1024 and 8192 are effective.

Window

Sets the Fast Fourier Transform shape; every choice produces a different frequency response curve.

The functions appear from the narrowest through the widest. Narrower functions use fewer nearby, or sidelobe, frequencies, though they identify center frequencies with less precision. Wider functions include more neighboring frequencies while representing center frequencies more accurately. Hamming and Blackman are strong general-purpose choices.

### Graphic Equalizer effect

Filter And EQ > Graphic Equalizer raises or lowers selected frequency bands and displays the EQ curve that results. Rather than the Parametric Equalizer approach, the Graphic Equalizer works from preset bands so equalization can be done quickly.

Frequency bands can be spaced at these intervals:

One-octave spacing (10 bands)

One-half-octave spacing (20 bands)

One-third-octave spacing (30 bands)

Fewer bands make a graphic equalizer faster to adjust; additional bands give finer control.

Use the Graphic Equalizer effect for fixed-band slider adjustments to selected frequencies during tonal shaping.

Apply the Graphic Equalizer effect when specific frequency bands need tonal changes through fixed-band sliders.

Gain sliders

Set the precise boost or reduction, in decibels, for the selected band.

Range

Sets the span available to the sliders. Enter any value between 1.5 and 120 dB. Standard hardware equalizers, by comparison, are typically around 12 to 30 dB.

Accuracy

Sets how accurately equalization is processed. Higher accuracy improves response at lower frequencies, at the cost of longer processing. For equalizing only higher frequencies, lower accuracy can be used.

Tip

When equalizing extremely low frequencies, set Accuracy to between 500 and 5000 points.

Gain

Balances overall output if the EQ adjustments make the result too soft or too loud. A default of 0 dB means no gain change is applied.

The Graphic Equalizer uses FIR (Finite Impulse Response) filtering. Compared with IIR (Infinite Impulse Response) filters such as the Parametric Equalizer, FIR filters preserve phase somewhat better but are a little less exact in frequency.

### Notch Filter effect

Filter and EQ > Notch Filter can remove as many as six frequency bands defined by the user. Use it for very narrow targets, for example 60 Hz hum, without changing the surrounding frequencies.

Tip

For harsh “ess” sounds, apply the Sibilance Softener preset. DTMF presets can remove standard analog telephone-system tones.

Use the Notch Filter effect for the highest degree of control in tonal equalization.

Apply the Notch Filter effect when tonal equalization requires very targeted control.

Frequency

Sets the center frequency used by each notch.

Gain

Sets the amplitude for each notch.

Notch width

Sets the frequency span shared by all notches. The choices run from Narrow, a second order filter that also removes some neighboring frequencies, through Super Narrow, a highly specific sixth order filter.

Note

As a general limit, use no more than 30 dB attenuation with Narrow, 60 dB with Very Narrow, and 90 dB with Super Narrow. Stronger attenuation may remove many adjacent frequencies.

Ultra-Quiet

Almost removes noise and artifacts entirely, with extra processing required. The difference is audible only through high-end headphones and monitoring systems.

Fix Attenuations To

Sets whether notches use matched attenuation values or separate ones.

### Parametric Equalizer effect

Filter And EQ > Parametric Equalizer gives detailed tonal-equalization control. In contrast to the Graphic Equalizer, which supplies a fixed set of frequencies and Q bandwidths, the Parametric Equalizer lets you control frequency, Q, and gain directly. For example, you can reduce a tight range centered around 1000 Hz, raise a wide low-frequency shelf around 80 Hz, and add a 60 Hz notch filter at the same time.

The Parametric Equalizer is built on second-order IIR (Infinite Impulse Response) filters, so it runs quickly while offering highly accurate frequency resolution. One example is boosting a precise 40 to 45 Hz range. FIR (Finite Impulse Response) filters such as the Graphic Equalizer offer slightly better phase accuracy instead.

Identify band-pass and shelving filters in the Parametric Equalizer.

A. High- and low-pass filters B. High and low shelving filters

Identify band-pass and shelving filters in the Parametric Equalizer.

Gain

Offsets overall level when EQ changes make the result too loud or too soft.

Graph

Displays frequency on the horizontal ruler, or x-axis, and amplitude on the vertical ruler, or y-axis. The graph orders frequencies logarithmically from low to high, with octave-based spacing.

Frequency

Sets the center frequency for bands 1-5 and sets the corner frequencies for band-pass and shelving filters.

Note

Reduce low-end rumble, hum, and other unwanted low-frequency content with the low shelving filter. Use the high shelving filter for hiss, amplifier noise, and similar high-frequency problems.

Gain

Sets boost or attenuation for the frequency bands, plus the per-octave slope used by band-pass filters.

Q / Width

Sets how wide the affected frequency band is. Low Q values cover a broader frequency range. Very high Q values, near 100, act on a very narrow band and work well for notch filters aimed at specific tones such as 60 Hz hum.

Boosting an extremely narrow band can make audio ring or resonate at that frequency. For general EQ work, Q values of 1-10 are usually best.

Band

Turns on as many as five intermediate bands, along with high-pass, low-pass, and shelving filters, so the equalization curve can be shaped very precisely. Select a band button to enable its corresponding settings above.

For low and high shelving filters, the slope buttons can change the shelves by 12 dB per octave instead of the default 6 dB per octave.

To adjust active bands directly in the graph, drag their control points.

Constant Q, Constant Width

Expresses a frequency band's width either as a Q value, which is the width-to-center-frequency ratio, or as an absolute width in Hz. Constant Q is used most often.

Ultra-Quiet

Almost removes noise and artifacts entirely, with extra processing required. The difference is audible only through high-end headphones and monitoring systems.

Range

Changes the graph to 30 dB for fine adjustments or 96 dB for more extreme edits.

### Scientific Filter effect

For advanced audio manipulation, use the Scientific Filter effect (Effects > Filter and EQ). It is also available from the Effects Rack for individual assets in the waveform editor and for clips or tracks in the Multitrack editor.

Use the Scientific Filter effect for exact frequency filtering during technical cleanup or experiments.

Apply the Scientific Filter effect when technical audio work calls for precise frequency filtering.

Types

Sets which scientific filter type is used. The available choices are:

- Bessel: Gives accurate phase response without ringing or overshoot. Its pass band slopes at the edges, though, and stop-band rejection there is the weakest among these filter types. Bessel is therefore useful for percussive, pulse-like signals. For other filter jobs, choose Butterworth.

- Butterworth: Produces a flat pass band with little phase shift, ringing, or overshoot. It rejects the stop band far better than Bessel and only slightly less than Chebychev 1 or 2. Taken together, those traits make Butterworth the strongest default for most filter tasks.

- Chebychev: Delivers the strongest stop-band rejection, but it has the poorest phase response, ringing, and overshoot in the pass band. Use it only when stop-band rejection matters more than keeping the pass band accurate.

- Elliptical: Offers a sharp cut-off and a narrow transition width. Unlike Butterworth and Chebychev filters, it can also remove frequencies with a notch. It may add ripples to both the stop band and pass band.

Modes

Selects the filter mode. The available choices are:

- Low Pass: Lets low frequencies through and removes high ones. You need to set the cutoff point where removal begins.

- High Pass: Lets high frequencies through and removes low ones. You need to set the cutoff point where removal begins.

- Band Pass: Keeps a band, meaning a frequency range, and removes everything outside it. Two cutoff points define the band's edges.

- Band Stop: Removes frequencies inside the specified range. Band Stop, also called a notch filter, is the reverse of Band Pass. Two cutoff points define the band's edges.

Gain

Offsets overall volume if filter changes leave the result too loud or too soft.

Cutoff

Sets the frequency boundary between material that passes and material that is removed. At this frequency, the filter changes from passing to attenuating, or the reverse. For range-based filters, Band Pass and Band Stop, Cutoff sets the lower frequency boundary and High Cutoff sets the upper boundary.

High Cutoff

Sets the upper frequency boundary for filters that use a range, which are Band Pass and Band Stop.

Order

Sets filter precision. Higher orders make the filter more exact, with steeper slopes at cutoff points and similar behavior. Very high orders can also create substantial phase distortion.

Transition Bandwidth

(Butterworth and Chebychev only) Sets how wide the transition band is. Lower values create steeper slopes. If a transition bandwidth is entered, Order is calculated automatically, and the reverse is also true. For Band Pass and Band Stop filters, this is the lower-frequency transition, while High Width sets the upper-frequency transition.

High Width

(Butterworth and Chebychev only) For Band Pass and Band Stop filters, this is the upper-frequency transition; Transition Bandwidth sets the lower-frequency transition.

Stop Attn

(Butterworth and Chebychev only) Sets the amount of gain reduction applied to removed frequencies.

Pass Ripple/ Actual Ripple

(Chebychev only) Sets the largest ripple amount allowed. Ripple means unwanted boosting and cutting around cutoff.

### More like this

- About process effects
- Control effect settings with graphs
- Applying effects in the Waveform Editor
- Applying effects in the Multitrack Editor
