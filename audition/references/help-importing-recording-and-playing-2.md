# Monitoring Recording Playback Levels, Strip Silence

> Adobe Audition reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Monitoring recording and playback levels; Remove silences from your audio recordings.

## Monitoring recording and playback levels

### Use Adobe Audition level meters to watch recording and playback levels, protect audio quality, and prevent distortion.

Level meters show incoming and outgoing signal amplitude while recording or playing back. In the Waveform editor, these meters appear only in the Levels panel. In the Multitrack editor, they appear in the Levels panel for mix-output amplitude and in track meters for individual-track amplitude.

The Levels panel can be docked horizontally or vertically. With horizontal docking, the left channel appears in the top meter and the right channel appears in the bottom meter.

Note

To toggle panel visibility, choose Window > Level Meters.

Meters report signal level in dBFS (decibels below full scale), where 0 dB is the highest possible amplitude before clipping. Yellow peak indicators stay visible for 1.5 seconds, making peak amplitude easier to read.

When amplitude is too low, audio quality suffers. When amplitude is too high, clipping creates distortion. The red clip-indicator at the right of the meters turns on when levels pass the 0 dB maximum.

Note

To clear clip indicators, click individual indicators or right-click the meters and choose Reset indicators.

### Effects Rack Input/ Output monitor

In the Effects Rack, two-level meters show Input signal level, meaning the clips and tracks routed through the effects, and Output signal level, meaning the level leaving the effects chain.

Most effects change overall signal level by amplifying or reducing it. Watching these meters lets you adjust the knobs beside each one to fine-tune how much signal enters the effects, which can affect processing, or leaves the effect, where you can verify that the result is audible enough and not clipping.

### Variable playback speed

Play audio at custom speeds such as 1.1x, 1.2x, etc. Set that customized playback speed with JKL Shuttle Speed.

Select Adobe Audition > Settings > Playback and Recording.

Select JKL Shuttle Speed to choose the desired speed. The available choices are Slow Speed (0.1X), Half Speed (0.5x), Normal Speed (1x), and Double Speed (2x).

For a customized playback speed, open the JKL Shuttle Speed panel, choose the increment, start playback, and press the l key repeatedly until you reach the required speed. Display speed of playback in the playback control shows the current speed.

### Customize level meters

Right-click the meters and choose any of these options:

Meter Input Signal

Shows the default hardware input level in the Waveform editor. Double-click the meters to turn this option on or off quickly.

Range options

Adjusts the decibel range being displayed.

Show Valleys

Displays valley indicators at low-amplitude points. When valley indicators sit near peak indicators, dynamic range, or the difference between quietest and loudest sounds, is low. Wide spacing between those indicators means dynamic range is high.

Show Color Gradient

Blends the meter color gradually from green, to yellow, to red. Turn this option off to use abrupt color changes to yellow at -18 dBFS, and red at -6.

Show LED Meters

Shows an individual bar for each whole decibel level.

Dynamic or Static Peaks

Changes how peak indicators behave. With Dynamic peaks, after 1.5 seconds the yellow peak level indicators update to the newest peak level, making recent peak amplitude easier to see. As audio becomes quieter, those peak indicators move back. Static peaks keep peak indicators visible so you can read the maximum signal amplitude since monitoring, playback, or recording began. You can still reset peak indicators manually by clicking clip indicators.

Tip: To learn how loud audio will become before recording, choose Static peaks. Then monitor input levels; the peak indicators report the loudest-part level.

## Remove silences from your audio recordings

### Use Strip Silence in Adobe Audition to find quiet sections automatically, remove them, and tighten audio.

Strip Silence identifies and removes silent or inactive areas from recorded clips while preserving synchronization in multitrack audio. It is useful for cleaning voice recordings and interviews, as well as preparing multitrack edits such as podcasts or audio documentaries. You can tune Strip Silence parameters for conditions such as noisy backgrounds or uneven participant volume, helping the editor locate and remove empty track regions more quickly.

### Apply Strip Silence to a track and edit the settings

Start in Multitrack mode, then use Effects > Diagnostics > Deleting Silence (process). This opens the Diagnostics panel on the left side of the UI.

In the Preset dropdown, choose one of the standard options or set a preset that fits the audio.

Presets dropdown

Presets dropdown

To look for issues in the audio track with the Deleting Silence effect, click the Scan button. To find appropriate silence and audio levels for recordings, similar to the former waveform view behavior, click Find Level.

Below the Find Level button, a region list appears for areas identified as silence, including Start time, Duration, and Clip details.

Detected clips

Detected clips

After issues are found, fix them with either option:

- Strip Silence - cuts out and deletes the silence completely.
- Split Silence - cuts the clip but keeps the resulting sections selected so you can confirm that the correct part was chosen.

Select to Strip or split the silence

Select to Strip or split the silence

Use the choice that fits the recording.

Strip Silence works best for podcast interviews or audio with clearly separated silences. For more complicated audio, with fewer silent portions and more voice modulation, Split Silence may be preferable.

When multiple audio tracks should receive the same settings, select Split Scene > Split All. In the clip list, Split Silence affects only the selected clip. If all clips are selected, or if none are selected, it is applied to every clip.

The waveform indicates silence and noise in the audio. Brighter areas are treated as noise, while darker waveform areas are treated as silence. Drag the brighter portions down to empty tracks to verify whether the selections are right.

Waveforms with sections selected for splitting

Waveforms with sections selected for splitting

### Edit effect parameters

Depending on the audio, the Deleting Silence effect automatically chooses suitable decibel and time settings. You can still set the threshold yourself when the workflow requires it.

Edit Effect parameters

Edit Effect parameters

To open or close effect parameters, click the Settings button next to Scan. Adjust these settings:

- Define Silence As: detects silence according to the threshold. Any signal below the threshold is classified as silence. Drag the Signal is below slider to set decibels manually in dB, and drag the For more than slider to set duration in ms.
- Define Audio As: detects audio according to the threshold. Any signal below the threshold is classified as audio. Drag the Signal is below slider to set decibels manually in dB, and drag the For more than slider to set duration in ms.
