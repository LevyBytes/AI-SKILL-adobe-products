# Audio Category Tagging, Enhance Speech, Audio Editing With Essential Sound Panel, Improve Dialogue Clarity ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Automatically tag audio; Apply Enhance Speech; Audio editing with Essential Sound panel; Improve dialogue clarity; Repair dialogue; Create a Reverb effect; Automatically duck audio; Create audio presets; Adjust gain in audio; Adjust track volume; Auto-match audio loudness; Monitor volume levels; Use Dynamic Audio Waveforms; Enhance Speech technical requirements; Live waveform editing; Global mute in Premiere.

## Automatically tag audio

### AI-powered Audio Category Tagging helps expose audio controls and build videos with polished sound in Adobe Premiere.

AI identifies clips as Dialogue, Music, SFX, or Ambience and adds an interactive badge. The badge provides quick entry to the most relevant Essential Sound panel tools for that audio type.

Select one or more audio files on the timeline, then select Auto Tag in the Essential Sound panel.

After auto-tagging finishes, each audio clip shows interactive Essential Sound badges.

Auto-tagged timeline audio clips show their category badges.

A. Music B. Dialogue C. SFX D. Ambience

Timeline audio clips that have been auto-tagged display category badges.

Select a badge to open the Essential Sound panel automatically and access the tools most relevant to that audio type.

## Apply Enhance Speech

### Improve voice recordings with one-click Enhance Speech, powered by AI.

In Adobe Premiere, Enhance Speech increases dialogue clarity and presence. The AI-powered tool reduces background noise and improves vocal quality so spoken audio comes through more clearly and with a more professional sound.

To enable Enhance Speech, do the following:

Choose a timeline audio clip that contains dialogue.

From the Essential Sound panel, select Enhance to begin the analysis.

A progress bar appears in the Essential Sound panel with an estimate for the selected audio clip enhancement time. The work runs in the background, allowing editing to continue while the speech is enhanced.

In the Essential Sound panel, use Enhance Speech controls to clean dialogue and strengthen vocal clarity.

Enhance Speech controls in the Essential Sound panel help clean dialogue and make voices clearer.

When processing finishes, the audio sounds clearer and the speech is more distinct, raising the overall quality of the dialogue recordings. Use the Mix Amount slider for additional balancing between the enhanced sound and the original audio.

## Audio editing with Essential Sound panel

### Adobe Premiere's Essential Sound panel gives fast access to audio controls, making editing simpler while helping creators produce professional-quality sound.

The Essential Sound panel is a streamlined workspace for mixing and improving audio. Capabilities include:

- Unify volume levels
- Enhance Speech
- Repair dialogue
- Improve clarity
- Apply Reverb effects

For repeatable results across projects, save the settings as presets.

Start audio editing by assigning each audio clip to a type: Dialogue, Music, SFX, or Ambience.

After an audio type is assigned, the Essential Sound panel displays several parameter groups. For Dialogue, these groups cover common work such as matching recordings to a shared loudness, lowering background noise, and applying compression and EQ.

Use Edit controls to apply presets, tune clarity, and balance levels for a professional, polished mix.

Edit options can apply presets, adjust clarity, and balance sound levels for a finished audio mix.

## Improve dialogue clarity

### Use the Essential Sound panel to improve dialogue clarity by reducing noise, enhancing speech, and balancing levels for crisp professional audio.

Dialogue-track clarity is affected by several factors, including human voice volume and frequency variation, which spans 50Hz to 2KHz, as well as the other tracks playing alongside it.

Common ways to make dialogue clearer include compressing or expanding the recording's dynamic range, changing its frequency response, and enhancing voices. To improve a clip's dialogue clarity, use these steps:

Open Clarity in the Essential Sound panel.

For the property you want to modify, select its checkbox and move the slider from 0 to 10:

- Dynamics: alters the recording's impact by compressing or expanding its dynamic range. Move the level between Natural, for less processed editing, and Focused, for stronger compression and leveling.
- EQ: cuts or raises selected frequencies in the recording. Choose a Preset from the dropdown list, then use the slider to set Amount.
- Vocal Enhancer: makes spoken words in an audio clip clearer. Choose High Tone or Low Tone so the dialogue is processed and enhanced at the matching frequency.

To make dialogue clearer, change settings in the Clarity section of the Essential Sound panel.

Dialogue clarity can be improved through the Clarity section controls in the Essential Sound panel.

## Repair dialogue

### Repair dialogue in Adobe Premiere by reducing noise, removing hum, and improving clarity with the Essential Sound panel.

Low-quality dialogue can pull attention away from the video and weaken its effect. Fixing common audio problems, including background noise, clicks, and muffled speech, keeps the message clear, professional, and understandable.

Use these steps to repair dialogue:

Open the Essential Sound panel and select Repair.

Select the checkbox for the property you want to reduce, then set the amount with the slider from 0 to 10:

- Reduce Noise: recordings often include unwanted background noise, including studio floor sound, microphone noise, and clicks. The appropriate reduction amount depends on both the background-noise type and how much quality loss is acceptable in the remaining signal.
- Reduce Rumble: rumble is very low frequency noise below 80-Hz. A turntable motor or an action camera can produce it.
- DeHum: hum can come from single-frequency noise. It is commonly in the 50-Hz range in Europe, Asia, and Africa, or in the 60-Hz range in North and South America. One cause is electrical interference from power cables placed too close to audio cables.
- DeEss: harsh high-frequency S sounds, such as sibilance in vocal recordings from breathing or air movement between the microphone and the singer's mouth, can cause ess sounds.
- Reduce Reverb: reverb happens when sound waves bounce off environmental surfaces and merge with the original sound. Reducing it can make the audio feel as though it comes from a single source.

Use audio repair tools to reduce noise, correct distortions, and make dialogue clearer.

Dialogue can be enhanced by repair tools that lower noise, fix distortion, and clarify vocals.

Review the audio after applying the settings, then make further adjustments until the clarity is acceptable.

## Create a Reverb effect

### Create a Reverb effect that adds depth and ambiance to audio for a more professional result.

Reverb effects increase the perceived space in audio. Whether the goal is to suggest a large hall or a small room, reverb can give dialogue and other sounds a more natural, immersive feel.

Use these steps to create a Reverb effect:

In the Creative section of the Essential Sound panel, select Reverb.

In the Essential Sound panel, Reverb settings simulate acoustic spaces through preset choice and intensity adjustment.

Reverb controls in the Essential Sound panel let you choose an acoustic preset and control its strength.

Select an option from the Preset dropdown menu.

Adjust the Amount and Clip Volume sliders to control the Reverb Preset intensity and character.

## Automatically duck audio

### Use the Essential Sound panel in Adobe Premiere to duck audio automatically, lowering background music when dialogue or voiceover is detected for a balanced mix.

Open an existing multitrack session with the audio clip, or create one.

In the Essential Sound panel, tag content with its correct type. Clips tagged Music and Ambience can be ducked.

Turn on Ducking in the Essential Sound panel.

Note

Enabling ducking makes Premiere add an Amplify Effect to the clip. Auto Ducking calculates keyframes and places them on that effect's gain parameter, so they remain easy to modify or remove without disrupting other sound design. Assign audio types to the other audio tracks as well, because Premiere needs to know which track should drive the ducking.

Set the following auto-ducking options:

- Duck Against: choose the icons for the audio content types that should trigger ducking: Dialogue, Music, Sound Effects, Ambience, or Un-tagged clips.
- Sensitivity: controls the threshold where ducking starts. Higher or lower sensitivity settings create fewer changes, with the focus shifting toward keeping the music lower or louder, respectively. Middle-range values produce more frequent changes as music rises and falls quickly during pauses in speech.
- Duck Amount: sets the amount by which the music clip volume is lowered. Moving the setting right makes the reduction stronger; moving it left makes the change subtler.
- Fade Duration: determines how fast the volume change happens after ducking is triggered. Short fades suit fast music mixed with fast speech, while longer fades fit background music behind voiceover.
- Fade Position: sets the location where the background audio fade lands relative to the dialogue: outside the dialogue, inside, or in the middle.

Automatic ducking lowers background music smoothly while dialogue or voiceover is playing.

Use automatic ducking so background music drops smoothly under dialogue or voiceover.

Select Generate Keyframes to calculate and place keyframes for the Amplify effect that Premiere added to the clip.

Note

Generated keyframes can be edited manually afterward; however, selecting Generate Keyframes again replaces every manual keyframe change.

## Create audio presets

### Create audio presets in Adobe Premiere so custom settings can be reused and audio editing stays consistent.

Audio presets let you save and reuse adjustments across projects. For voiceovers, interviews, ambient recordings, and similar assets, presets efficiently reuse the same sound treatment.

Use these steps to create an audio preset:

Select an audio clip in the timeline, then select Window > Essential Sound. Confirm that the audio type has been automatically tagged.

In the Essential Sound panel, open the Preset dropdown list and choose from the available options.

Save audio presets to keep similar project assets consistent and reduce repeated work.

For projects with similar audio assets, presets help preserve consistency and save time.

Customize the preset by changing properties such as clarity improvement, dialogue repair, loudness adjustment, or Reverb effects.

To store the customized preset, use the Save settings as a preset icon beside the Presets dropdown menu.

## Adjust gain in audio

### Adjust audio gain in Adobe Premiere to control an audio clip's overall volume and reach the sound level your project needs.

Gain boosts an audio signal and is measured in decibels (dB). During audio editing, it commonly controls the input level for an audio clip or track. Raising gain amplifies the audio so it becomes stronger and may sound louder. Lowering gain attenuates the audio, so it becomes weaker and quieter.

As a basic audio-processing tool, gain adjustment can fix recording levels, improve the signal-to-noise ratio, or align audio levels across clips or tracks.

Select one or more clips in the Timeline panel.

Right-click the selection and choose Audio Gain.

The Audio Gain dialog box automatically calculates peak amplitude for the selected clips. That number appears in the Peak Amplitude field. After calculation, the value is saved for the selection and can guide gain adjustment.

Choose an option below, then enter its value:

- Set Gain to: default value is 0.0 dB. Enter a specific gain value here. The value always reflects the current gain, even if this option is not selected, and the value is shown dimmed.
- Adjust Gain by: default value is 0.0 dB. Change gain by + or - dB. When a nonzero value is entered in this field, the Set Gain to dB value updates automatically to show the actual gain applied to the clip.
- Normalize Max Peak to: default value is 0.0 dB, though any value below 0.0 dB can be used. This option moves the selected clips' maximum peak amplitude to the user-specified value.
- Normalize All Peaks to: default value is 0.0 dB, though it can be set to any value below 0.0 dB. This normalization changes the selected clips' peak amplitude to the user-specified value.

Use the Audio Gain dialog to align audio levels between clips.

The Audio Gain dialog can match levels across selected clips.

## Adjust track volume

### Use keyframes in Adobe Premiere to adjust track volume and create dynamic volume changes across a project.

Before you begin:

Create a sequence and place an audio clip on the timeline.

Expand the audio track by double-clicking it in the timeline.

From the Audio Track header, select the Show Keyframes icon, then choose one of these menu options:

- Clip Keyframes: animate audio effects for a clip, including Volume Level. These keyframes affect only the selected clip.
- Track Keyframes: animate audio track effects such as Volume and Mute. These keyframes affect the whole track.
- Track Panner: change the track's volume level.

Use keyframes to adjust track volume and shape a clip's loudness.

Keyframes can manipulate clip volume through track-volume adjustments.

Play the clip, then create keyframes with Ctrl + click (Windows) or command + click (macOS).

Play back the clip to preview the changes, and refine keyframes as needed to smooth the volume transitions.

## Auto-match audio loudness

### Use Auto-Match audio loudness in Adobe Premiere to keep clip volume consistent and build a balanced, professional-sounding mix.

In the Essential Sound panel, Auto-Match normalizes loudness across separate audio clips. It reduces abrupt volume changes and makes playback feel more even to listeners.

To set matching loudness across clips, use this sequence:

Select an audio clip in the timeline and select Window > Essential Sound. Confirm that the clip already has an automatic audio type tag.

In the Essential Sound panel, open the Loudness tab.

Select Auto-Match.

Use Auto-Match when you need clips to avoid sharp volume changes.

Use Auto-Match when you need clips to avoid sharp volume changes. Note

Below the Auto-Match button, Premiere shows the clip's loudness in Loudness Units relative to Full Scale (LUFS).

## Monitor volume levels

### Monitor volume levels in an Adobe Premiere project with Audio Meters.

By watching volume levels, you can keep the mix clear and steady while avoiding distortion across the project.

To start checking a clip's volume level, follow these steps:

Select a clip in the Timeline panel.

Open the Audio Meters panel by selecting Window > Audio Meters.

Press the spacebar on your keyboard to play the clip.

Watch the Audio Meters panel while the clip plays so the audio stays consistent.

Watch the Audio Meters panel while the clip plays so the audio stays consistent.

As playback runs, check the Audio Meters and change levels if the signal reaches the red zone or falls too low.

## Use Dynamic Audio Waveforms

### Use Dynamic Audio Waveforms in Adobe Premiere to view live volume changes and edit audio more precisely in video projects.

Premiere's clip waveforms update as clip volume changes. Dynamic Audio Waveforms show those level changes visually in real time, so edits to audio can be judged immediately from the waveform. With the feature active, you can spot peaks, dips, and transitions while making precise level adjustments.

To begin, use this step:

Turn audio waveform updating on or off by selecting View > Dynamic Audio Waveforms.

Tip

A keyboard shortcut can also be assigned for toggling this behavior. The same toggle also affects Waveform Scaling for Audio Gain Adjustments (G).

Dynamic Audio Waveforms show volume changes made with keyframes or audio effects as they happen on clips.

Dynamic Audio Waveforms show volume changes made with keyframes or audio effects as they happen on clips.

Live waveform feedback is available when using:

- Clip rubber bands and keyframes (clip and channel volume, amplify)
- Controls in the Essential Sound panel (Volume, Mute, Auto-Ducking)
- Volume-parameter changes in the Effects Control panel (Clip and channel volume, amplify)
- Controls in the Properties panel (Volume and mute controls)
- Audio Gain

## Enhance Speech technical requirements

### Review the software and hardware setup needed for Enhance Speech.

### Minimum system requirements

Configure the system to meet Premiere specifications. Enhance Speech performs faster with this setup:

- OS version 13
- M1 processor

- Recommended configuration of the GPU

### Recommended audio plugins

Once audio has been enhanced, the clip behaves like any normal timeline audio clip. You can add multiple audio effects with audio plugins as needed.

### Supported file formats

- Enhance Speech works only with mono and stereo files; multichannel audio and nested sequences are not supported.
- Enhancing a stereo audio clip with Enhance Speech produces a mono downmix of that stereo clip.

## Live waveform editing

### Edit audio waveforms in Adobe Premiere with real-time visual feedback for more precise, direct audio editing.

Live waveform editing gives timeline-based audio edits a more exact visual reference. As you adjust clip volume, apply effects, or make edit decisions, the waveform redraws immediately, making the audio impact of each action visible.

Dragging the track resize handle changes track height continuously, and timeline contents reflow as the size changes. This lets you watch the result during the drag and stop exactly at the desired height in one smooth resize gesture.

Use live waveforms to perform precise timeline audio edits.

Open a sequence that contains audio clips in the Timeline panel.

While editing audio clips, watch for waveform updates in real time:

- Show waveform while moving a clip: While clips are dragged across the timeline, the audio waveform updates dynamically. Keyframes and markers remain visible beside the waveform during the drag, which helps maintain sync with important audio or visual points.
- Show waveform while copying a clip: During clip duplication, the waveform stays visible so placement and alignment can be judged accurately.
- Trim: Change a clip's in and out points while waveform updates appear immediately.
- Rolling Edit: Move the edit point between two clips without changing their combined duration, with waveform updates showing the content shift.
- Rate Stretch: Stretch or compress a clip to change its speed, and use the waveform change to understand the timing and pitch effect.
- Ripple Edit: Change a clip's in or out point while later clips shift in the timeline, using waveform feedback to preserve sync and rhythm.
- Slip Tool: Shift the media content inside a clip while keeping its duration and timeline position unchanged, with live waveform updates for accurate audio alignment.
- Slide Tool: Shift a clip's content within its existing duration and timeline position, using real-time waveform updates to keep audio alignment precise.

Use the visual feedback to refine edits, line up audio cues, or cut unwanted parts.

## Global mute in Premiere

Mute every audio source in a sequence at once in Adobe Premiere.

Global mute quickly silences sequence playback without modifying audio settings on clips or tracks. Use it to concentrate on visual edits, check timing, or temporarily turn off sound during playback. Premiere does not store this mute state with the project; it resets after closing and reopening Premiere.

Create a sequence or open an existing one in Premiere.

In the Premiere menu bar, find the Audio button.

Select the audio button to mute all sequence audio. The audio icon switches to the mute icon state. Audio meters throughout the application become gray to show muted playback.

The menu bar audio button also mutes playback in the Source Monitor and the Program Monitor.

The menu bar audio button also mutes playback in the Source Monitor and the Program Monitor.

Select the button again to turn audio back on and restore playback sound.

Note

Right-clicking the audio meters also opens choices for muting all audio, muting the Source Monitor, or muting the Program Monitor.

For more mute choices, hold the audio button and choose one of these:

- Mute All Audio: silences all playback audio.
- Mute Source Monitor: silences playback audio only in the Source Monitor.
- Mute Program Monitor: silences playback audio only in the Program Monitor.

Choose a mute option to control playback audio for all audio, the Source Monitor, or the Program Monitor.

Choose a mute option to control playback audio for all audio, the Source Monitor, or the Program Monitor. Tip

Mute commands can also be assigned to keyboard shortcuts.
