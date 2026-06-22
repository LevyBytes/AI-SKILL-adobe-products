# Essential Sound Panel, Clip Markers For Multitrack In Audition, Match Loudness, Displaying Audio Waveform Editor

> Adobe Audition reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Edit, repair, and improve audio using Essential Sound panel; Session Markers and Clip Markers for Multitrack in Audition; Matching loudness across multiple audio files; Displaying audio in the Waveform Editor.

## Edit, repair, and improve audio using Essential Sound panel

### Use the Essential Sound panel in Adobe Audition to enhance dialogue, music, and sound effects quickly with approachable presets and controls.

Essential Sound combines a broad mixing toolset in one panel. It also includes repair options for common audio-mixing work. The controls help standardize volume, repair sound, and improve clarity. Special effects can also be applied so video projects sound as though they were mixed by a professional audio engineer. Applied adjustments can be saved as presets for reuse, and those changes also appear in the full Audition toolset for additional refinement.

Audition lets you categorize audio clips as Dialogue, Music, SFX, or Ambience. Presets can be configured and applied to clips of the same type, or to several clips added as a sequence.

After a mix type is assigned, such as Dialogue for a voice-over clip, the Dialogue tab in the Essential Sound panel shows multiple parameter groups. Typical dialogue work can then be performed, including matching recordings to shared loudness, reducing background noise, and adding compression and EQ. Mix types in the Essential Sound panel are mutually exclusive, so choosing one mix type for a track replaces earlier changes made to that track with a different mix type.

The more advanced clip settings receive the adjustments made with Essential Sound panel controls. Restoration, clarity, and similar effects are inserted into the clip rack as audio effects. Advanced users can begin with primary edits in the Essential Sound panel, then continue into detailed internal effect settings for final adjustments.

Open Essential Sound by selecting a track in a multitrack sequence, then choosing Window > Essential Sound.

### Unify loudness in your audio

In the Essential Sound panel, set the clip type to Dialogue, Music, SFX, or Ambience.

To even out loudness across the clip, expand Loudness and click Auto Match. The loudness value in LUFS that Audition matched for the clip appears below the Auto Match button.

### Repair a dialogue track

For a clip with dialogue audio data, use the Dialogue tab options to repair audio by reducing noise, rumble, hum, and 'ess' sounds.

Place the audio clip on an empty track in a multitrack session.

With the audio clip selected, set the clip type to Dialogue in the Essential Sound panel.

Enable the Repair check box, then expand the section.

Check the property you want to adjust, then use the slider to set these properties from 0 through 10:

- Reduce Noise: lowers background noise, including studio floor noise, microphone background noise, and clicks. The best noise-reduction amount depends on the background-noise type and how much quality loss is acceptable in the remaining signal.
- Reduce Rumble: lowers rumble, a very low-frequency noise below 80 Hz. Examples include sound from a turntable motor or an action camera.
- DeHum: reduces or removes Hum. Hum is single-frequency noise; it may sit around the 50-Hz range (common in Europe, Asia, and Africa), while in other regions it may be around the 60-Hz range (common in North and South America). Electrical interference from power cables placed too close to audio cables can create this noise, for example. Choose the hum level based on the clip.
- DeEss: reduces harsh, high-frequency ess-like sounds. One example is sibilance in vocal recordings, where breathing or air moving between the microphone and the singer's mouth creates s-sounds.

### Improve the clarity of your dialogue track

Dialogue clarity in a sequence depends on several factors: the human voice's volume and frequency variation between 50-Hz and 2- kH, plus the content in the other tracks playing with it. Common ways to improve dialogue clarity include compressing or expanding recording dynamic range, changing the recording frequency response, and processing voices for enhancement.

Place the audio clip on an empty track in a multitrack session.

With the clip selected, set the clip type to Dialogue in the Essential Sound panel.

Enable the Clarity check box, then expand the section.

Choose the property check box you want to adjust, then use the slider to set these properties from 0 through 10:

- Dynamics: changes the recording's impact by compressing or expanding dynamic range. The level can move from natural to focused.
- EQ: reduces or boosts chosen frequencies in the recording. Choose an EQ preset from the list to test it on the audio, then use the slider to change the amount. For preset editing, choose the preset, click the Edit icon, and use the Effect-Graphic Equalizer dialog box. It shows the graphic equalizer, which you can adjust during playback and save.

- Vocal Enhancer: choose High Tone or Low Tone so processing enhances the voice at the suitable frequency.

### Remix or stretch background music to fit a duration

Editors and remix engineers often make music fit a fixed length with hard fades, loops, or remixing. In Audition, the Remix and Stretch features help reshape music for almost any required duration quickly.

Audition Remix examines song files, finds hundreds of loops, transitions, and key segments, then lets you generate a remix at the duration you need.

Use Stretch when a short clip needs to fill a longer duration without using the Remix feature set.

### To remix a clip in your project

1. Place the audio clip on an empty track in a multitrack session.
2. Select the audio clip, then choose Window > Essential Sound > Music.
3. Under Duration, choose Remix. Audition analyzes the clip and prepares it for remixing.
4. In the Target box, enter the required length for the remixed audio clip.
5. Enable the Favor shorter segments check box so Audition can prefer shorter pieces with additional transitions, helping the remix sound more natural.
6. Optional: After playback, refine the remix with these controls in the Remix tab of the Properties panel:

- Edit length: sets whether the remix favors shorter segments with more transitions, or longer segments with fewer transitions. If the original song changes substantially between beginning and end, more transitions and shorter sections can help the remix flow naturally. Songs with steady structure and style may benefit from fewer transitions, which keeps changes minimal.
- Features: chooses whether transitions and crossfades emphasize Timbre (rhythmic elements) or Harmonic structure. For electronic or pop music, Timbre keeps the beat locked in place. For choral or softer tracks, Harmonic emphasis supports smoother blends.
- Minimum loop: defines the shortest permitted segment, measured in beats. This value helps when the algorithm picks very short transitions that are mathematically ideal but sound unnatural.
- Maximum slack: limits the remix duration so it stays close to the Target value. If exact timing is not required, adjusting this parameter can produce better-sounding remixes.

Remix in progress

Remix in progress

### To stretch a music clip to fit a duration

1. Place the audio clip on an empty track in a multitrack session.
2. Select the audio clip, then choose Window > Essential Sound > Music.
3. Under Duration, choose Stretch.
4. In the Target box, enter the required length for the stretched audio clip.

Stretch audio

Stretch audio

### Working with Sound effects clips

Audition can generate artificial sound effects for audio. SFX tools help create impressions such as sound coming from a chosen position in the stereo field, or room and field ambience shaped by reflections and reverberation.

### To add SFX and ambience to your audio

1. Place the audio clip on an empty track in a multitrack session.
2. Select the audio clip, then choose Window > Essential Sound > SFX.
3. Under Creative, turn on the Reverb knob to set the reverb effect.
4. In the Preset box, choose a Reverb preset that fits your needs.
5. Adjust the Amount slider to add the desired level of reflection and reverberation.
6. Under Pan, adjust the Position slider to place the sound at a particular position in the stereo field.
7. Under Stereo Width, turn on the Width knob and adjust the slider to set an appropriate stereo width for your composition.

### Creating presets

Professional Audition users can build presets for users and projects that rely on similar audio assets, helping maintain consistency and save time. Audio presets can target a particular type of sound, such as dialogue, music, SFX, or Ambience, while effects presets can be created for EQ, Reverb for SFX, and Reverb for Ambience.

### To create a preset

1. From the Essential Sound panel menu, choose Template View.
2. Beside the preset dropdown, click the + icon; examples include Dialogue, EQ, or Reverb.
3. Set the desired values, then use Save settings as a preset button beside Presets dropdown.
4. Enter the new preset name and click OK. The preset appears under the audio or effect type used to create it.

Create a preset

Create a preset Note

Presets are tied to the templates selected for them. Selecting a different template for a preset, or creating a template, gives you another preset selection and different sound settings.

### Select all the clips of the same mix type

Audition can select every clip of a chosen mix type, such as dialogue, music, SFX, or ambience, so the same audio edits can be applied across that full group.

For example, to select dialogue clips by mix type, choose Edit > Select > Clips of Mix Type > Dialogue.

### Customize and share settings for consistency

For a large project or a multi-editor, multi-session environment that needs consistent standards or signature sound settings, a professional audio engineer can create a template with custom ranges.

In Template View, you can customize and share ranges plus default effect settings with the project team, which helps apply them uniformly across sessions and projects. The Template is useful for sharing common min/max ranges or EQ/reverb settings within the team.

1. From the Essential Sound panel menu, choose Template View.
2. Choose the mix type whose settings need adjustment.
3. Open the effect whose minimum and maximum limits need changes; for example, Reduce Noise.
4. For that effect, use Set Minimum or Set Maximum.
5. Enter values in the Effect dialog box, then preview them with the Play button or the Toggle Loop button before saving.

Choose Template View from the Essential Sound panel menu.

Step text

Step text

Step text

Step text

When large projects or multi-editor, multi-session work require consistent standards or signature sound settings, professional audio engineers can define a template with custom ranges.

Using Template View, ranges and default settings for project effects can be customized and shared with the team, allowing consistent use across sessions and projects. The Template helps when common min/max ranges or EQ/reverb settings need to be shared within the team.

1. From the Essential Sound panel menu, choose Template View.
2. Choose the mix type whose settings need adjustment.
3. Open the effect whose minimum and maximum limits need changes; for example, Reduce Noise.
4. For that effect, use Set Minimum or Set Maximum.
5. Enter values in the Effect dialog box, then preview them with the Play button or the Toggle Loop button before saving.

Note

Presets are linked to a template. Because user mode presets depend on settings configured in template mode, editing a template or making a new template can change the sound of existing presets. When an EQ preset is deleted in the template, every ESP preset that refers to that EQ preset stops working.

### Auto-ducking using the Essential Sound panel

During project editing, auto-ducking can lower music and ambience behind dialogues, vocals, sound effects, and other audio files. To set up auto-ducking:

Create or open a Multitrack Session that contains the audio clip.

With Essential Sound Panel, assign the content to its specific type. Clips tagged as music and ambience can be ducked.

In Music and/or Ambience mode, turn on the Ducking section with its checkbox.

The Ducking section provides these controls.

- Duck Against: selects the target audio types that your music ducks beneath.
- Sensitivity: adjusts the target-clip threshold where the music clip begins ducking.
- Reduce By: sets how much the clip is attenuated.
- Fades: sets the speed at which music begins ducking, including fading in/out.
- Monitor Clip Changes: when enabled, Ducking updates automatically after Clip edits are made.
- Reanalyze Clips: manually triggers Ducking when Monitor Clip Changes is disabled.

Music beneath dialogue tracks ducks automatically, as shown in the image below, making editing more seamless.

Auto ducked track

Auto ducked track

## Session Markers and Clip Markers for Multitrack in Audition

Learn to create Session Markers and Clip Markers for Multitrack in Audition. You can add, edit, and move clip markers for each track in multitrack mode.

Clip Markers flag important points in an audio file. They help with positioning, arranging, and synchronizing clips, and they also support comments.

Audition can create Clip Markers for Multitrack using M (Windows and macOS). Previously, Clip Markers could be created only in Waveform view.

### Creating Clip Markers and a Session Markers

Markers can be created for an individual track and for the full session. Add Session Markers where needed in the session you have created.

Use the upper-left Multitrack option, or press 0, to choose Multitrack view.

Multitrack view selection

Bring a file into Multitrack. Select a clip and press M. Audition places a Clip Marker on that clip at the current playhead position.

Clip Markers

Clear all selected tracks and press M to create Session Markers.

Session Markers

### Editing a Multitrack Clip Marker

Clip Markers can be edited from Multitrack view.

Use '0', or choose Multitrack in the upper-left menu, to switch to Multitrack view.

From the Session, import any file into Multitrack view. Select the Clip Marker head, then right-click. The drop-down list provides edit choices for the Clip Markers.

### Moving a Clip Marker

To move a Clip Marker in Multitrack view, reposition the Marker head.

Use the upper-left Multitrack menu option, or press 0, for Multitrack mode.

Moving the Marker head relocates a Clip Marker within Multitrack view.

### View clip markers

Use the upper-right icon in the Markers panel to view all Clip Markers and Session Markers.

Note

- Markers remain consistent across Waveform and Multitrack view. You can add markers in either mode, and the changes appear in both modes.
- Clip Markers in Multitrack do not apply to remixed and stretched clips.

### Add Clip Markers

Before adding a Clip Marker, save the source file in the session, then save the session itself.

Select the Marker and press command + s (macOS) and ctrl + s (Windows), or choose File > Save.

A dialog box asks whether both the file and session should be saved. Select Yes if the source file should store the markers permanently.

Note

Save the files and the session again in Multitrack so that, when reopened, all Markers are visible there. The changes are saved in the source file.

## Matching loudness across multiple audio files

In Audition, you can measure loudness in audio clips and apply correction for different loudness standards and true peak limiting.

### Match loudness across multiple audio files

Use Window > Match Loudness to open the Match Loudness panel.

Drop one or more audio files into the panel.

Click Scan so Audition analyzes each clip's current loudness values.

Open the loudness parameter group by clicking Match Loudness Settings.

In the Match To drop-down list, choose the loudness standard for your region.

Set the Maximum True Peak Level, loudness and tolerance levels, then click Run.

Note

Maximum True Peak Limiting stops a signal from crossing a defined limit; without that limit, speakers and other output devices can be damaged. True Peak Limiting keeps the signal within the limit.

### List of loudness standards in Audition

- ITU BS1770-2

  - ITU BS1770-3 changes ITU BS1770-2 by removing filters that had previously been optional in true peak level measurement.

  - EBU TECH3341 defines measurement methods for momentary, short-term and integrated loudness, using ITU BS1770-2 as the basis
  - EBU TECH3342 defines loudness range (LRA) from short-term loudness, with a -20LU relative gate instead of -10LU, and uses the 10th and 95th percentile
  - EBU TECH3343 covers the correction stage of the loudness workflow (see chapter 4.4 and 6)
  - EBU TECH3344 covers loudness meter use for distribution systems
  - EBU R128 s1 defines short form content loudness measurement, including commercial spots

- ATSC A/85 (Target Loudness: -24 LUFS +/-2 LUFS, True Peak: -2dB) standard
- FreeTV OP59
- ARIB TR-B32
- PRSS (National Public Radio)

## Displaying audio in the Waveform Editor

### Display and interpret waveforms in Adobe Audition's Editor to visualize audio detail and make precise edits.

In the Waveform Editor, the Editor panel shows sound waves visually. Under the panel's default waveform display, which is useful for evaluating audio amplitude, the spectral display can show frequencies from low bass to high treble.

To view the spectral display, use either of these methods:.

- In the toolbar, use the Spectral Display button.

- In the Editor panel, move the divider between the waveform and spectral displays to adjust their relative proportions. For a quick spectral-display toggle, double-click the handle or select the adjacent triangle.

Viewing the waveform and spectral displays

A. Drag the divider to change the proportion of each. B. Click the triangle to show or hide the spectral display.

Viewing the waveform and spectral displays Note

For stereo and 5.1 surround files, indicators in the vertical ruler identify specific channels.

### About the waveform display

In the waveform display, audio appears as positive and negative waveform peaks. The x-axis (horizontal ruler) tracks time, while the y-axis (vertical ruler) tracks amplitude, meaning the loudness of the signal. Compared with loud audio, quiet passages sit closer to the center line with smaller peaks and shallower valleys. Adjust the vertical scale and colors to tailor how the waveform display looks.

Because amplitude shifts are easy to see here, the waveform display works well for spotting percussive changes in vocals, drums, and similar material. For instance, when searching for one spoken word, use the peak from the first syllable and the valley after the final syllable as visual cues.

Stereo file in waveform display

Stereo file in waveform display

### About the spectral display

The spectral display represents a waveform through its frequency content: the x-axis (horizontal ruler) shows time, and the y-axis (vertical ruler) shows frequency. Use this view to examine audio and identify which frequencies dominate. Higher-amplitude components appear in brighter colors, with the palette moving from dark blue for low-amplitude frequencies to bright yellow for high-amplitude frequencies.

For unwanted material such as coughs and other artifacts, the spectral display is especially useful during cleanup.

Spectral display, with high frequencies selected

Spectral display, with high frequencies selected

### View layered or uniquely colored waveform channels

For stereo and 5.1 surround files, channels can be shown either layered together or with separate colors. Layered channels make broad volume changes easier to compare, while unique colors make individual channels easier to tell apart visually.

Open View > Waveform Channels. Pick Layered, or pick Uniquely Colored.

Channel View options

A. Uniquely Colored B. Layered (with Uniquely Colored still selected)

Channel View options

### Customize the spectral display

Use the Spectral Display preferences to bring out different kinds of detail and separate artifacts more effectively.

Open Edit > Preferences > Spectral Displays (Windows) or Adobe Audition > Settings > Spectral Displays (macOS).

Set the following options

Windowing Function

Controls the Fast Fourier transform shape. The available functions are ordered from the narrowest through the widest. Narrow functions capture less of the surrounding frequency content but describe center frequencies with lower precision. Wider functions include more nearby frequencies and represent center frequencies more accurately. Hamming and Blackman are strong general-purpose choices.

Spectral Resolution

Sets how many vertical bands are used when frequencies are drawn. Raising the resolution improves frequency precision but reduces time precision. Test different settings to find the best compromise for the material you are editing. Audio with sharp transients, such as highly percussive content, may display better at lower resolution.

Note

To change resolution from the Editor panel itself, right-click the vertical ruler beside the spectral display and select Increase or Decrease Spectral Resolution.

Decibel Range

Adjusts the amplitude span used for displaying frequencies. A larger range makes colors stronger, which can reveal more detail in quieter material. This setting affects only the spectral display view and does not alter the audio amplitude.

Play Only Selected Frequencies When A Spectral Selection Exists

Turn this option off when you want playback to include every frequency in the same time range as the selection.

### Change the vertical scale

Inside the Waveform Editor, the vertical ruler can use either an amplitude scale or a frequency scale.

Set waveform-display amplitude scaling

While viewing the waveform display, right-click the vertical ruler, and choose one of these options:

Decibels

Shows amplitude on a decibel scale from -Infinity through zero dBFS.

Percentage

Shows amplitude on a percentage scale from -100% through 100%.

Sample Values

Shows amplitude using the data-value range supported by the file's current bit depth. For 32-bit float values, use the normalized scale shown below.

Normalized Values

Shows amplitude on a normalized scale from -1 through 1.

Set spectral-display frequency scaling

From the spectral display, right-click the vertical ruler, and choose one of these options:

More Logarithmic or Linear

Moves the frequency view gradually toward a more logarithmic scale, matching human hearing more closely, or toward a more linear scale, making high frequencies stand out more clearly.

Note

Hold down Shift while rolling the mouse wheel over the spectral display to make frequencies appear more logarithmic when scrolling up or more linear when scrolling down.

Full Logarithmic or Linear

Shows frequencies using a fully logarithmic or fully linear scale.
