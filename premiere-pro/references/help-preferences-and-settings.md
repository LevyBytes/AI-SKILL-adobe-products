# Preferences Overview, General Preferences, Appearance Preferences, Ai Models Preferences ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Preferences overview; General preferences; Set Appearance preferences; AI Models preferences; Audio preferences; Audio Hardware preferences; Auto Save preferences; Collaboration preferences; Color preferences; Control Surface preferences; Graphics preferences; Labels preferences; Media preferences; Media Analysis & Transcription preferences; Memory preferences; Playback preferences; Timeline preferences; Trim preferences.

## Preferences overview

### Learn about Preferences in Adobe Premiere.

Premiere lets you adjust both appearance and behavior, including settings such as the default transition length and the user-interface brightness. Most preferences stay active until you edit them again. Scratch disk preferences are different because they are stored with projects. When a project opens, it automatically uses the scratch disks chosen during that project's setup.

- Use Edit > Preferences (Windows) or Premiere > Settings (macOS) to open Preferences, then choose the category you want to change.
- During application startup, hold Alt (Windows) or Option (macOS) to restore default preference settings. Release Alt or Option when the splash screen appears.
- During application startup, hold Shift+Alt (Windows) or Shift+Option (macOS) to restore default preference settings and the plug-in cache together. Release Shift+Alt or Shift+Option when the splash screen appears.

Preferences are stored in these locations:

- For Windows: <drive>\Users<user name>\Documents\Adobe\Premiere Pro<version>\Profile-<user name>
- For macOS: <drive>/Users/<user name>/Documents/Adobe/Premiere Pro/<version>/Profile-<user name>

## General preferences

### Examine Adobe Premiere General preferences so you can understand and adjust the editing environment.

The General section of the Preferences dialog box contains controls for several areas, including transition duration and tool tips.

General preferences define startup behavior, project-opening behavior, bin and project shortcuts, and toggles for features such as Event Indicator, Tool Tips, and other user interface elements.

General preferences define startup behavior, project-opening behavior, bin and project shortcuts, and toggles for features such as Event Indicator, Tool Tips, and other user interface elements.

## Set Appearance preferences

### Change Premiere appearance preferences to fit the workspace to your editing needs.

In the Preferences dialog box, Appearance includes three themes together with high-contrast and low-contrast controls.

Open Premiere > Settings > Appearance on macOS, or Edit > Preferences > Appearance on Windows.

Choose among Darkest, Dark, and Light.

Available appearances include two dark modes, one light mode, and a high-contrast accessibility mode.

Available appearances include two dark modes, one light mode, and a high-contrast accessibility mode.

Use high-contrast mode when visibility and accessibility need emphasis, or low-contrast mode when you want less interface distraction around the content.

Choose the settings that fit your work, then select OK.

## AI Models preferences

### How Premiere uses AI Models for Generative Extend features powered by Adobe Firefly

Premiere relies on AI Models support to make generative features powered by Adobe Firefly available.

Generative features powered by Adobe Firefly depend on Premiere AI Models support.

UI Option

Function

Learn more about the AI models

Opens information with frequent questions about Generative Extend and related AI tools.

User Guidelines for generative AI in Adobe apps

Opens the official Adobe guidance for responsible work with generative AI features.

| --- | --- |

## Audio preferences

### Audio preferences in Premiere

Use Audio preferences to set defaults for Automatch Time, 5.1 Mixdown Type, Large Volume Adjustment, and related audio behavior.

Defaults such as Automatch Time, 5.1 Mixdown Type, Large Volume Adjustment, and additional audio settings are managed here.

UI option

Function

Automatch Time

Sets how long an adjusted control in the Audio Track Mixer takes to return to its earlier value. It applies to Volume, Pan, Effect, and Send knobs for parameters on Audio and Submix tracks; in primary tracks, sends are excluded. For effects with keyframes, Automatch Time applies to properties in Touch and Read modes.

5.1 Mixdown Type

Controls the way Premiere combines source channels for 5.1 audio tracks.

Sum multichannel outputs to mono in Source Monitor

Combines several audio channels into one mono output while using the Source Monitor.

Play audio while scrubbing in Source and Program Monitors

Turns on audio scrubbing. A keyboard shortcut can also toggle audio during scrubbing, which is faster than reopening the Preferences dialog box whenever audio scrubbing needs to be switched on or off.

Maintain pitch while shuttling

Keeps pitch stable during scrubbing and playback with the J, K, L keys. Enabling this preference can make speech clearer when playback runs faster or slower than normal speed.

Mute input during timeline recording

Stops the audio inputs from being monitored during timeline recording.

Generate waveforms automatically during import

Allows Premiere to create waveforms automatically as audio is imported. Disable this preference when audio waveforms should not appear.

Render audio when rendering video

Allows Premiere to render audio previews automatically whenever video previews are rendered.

Auto-tag audio types in the timeline

Applies audio type labels, such as mono or stereo, to timeline clips automatically from clip properties.

Always override audio tags

Makes Premiere replace clip audio type labels with new labels even when earlier labels already exist.

Automation Keyframe Optimization

Linear keyframe thinning

Adds keyframes only where values are not linear between the starting and ending keyframes. For instance, during a fade from 0 dB to -12 dB, enabling this option makes Premiere add only keyframes where the value rises away from the beginning (0 dB) and ending (-12 dB) keyframes. When the option is off, Premiere may add multiple identical-value keyframes between those two points, with the number depending on the speed of the value change. The option is on by default.

Minimum time interval thinning

Adds keyframes only when spacing is greater than the value you enter. Enter a value from 1 through 2000 milliseconds.

Large Volume Adjustment

Enter the decibel amount used by the Increase Clip Volume Many command.

Render Edit in Audition files to

For clips sent into Audition, pick one save destination:

- Scratch disk location for Captured Audio
- Next to original media files.

Audio plug-in management option:

Manage Audio Plug-ins

Opens the Audio Plug-in Manager for managing VST3 plug-ins from third parties and, on macOS, Audio Units (AU) plug-ins.

| --- | --- |
| | Describes the linear keyframe thinning and minimum time interval thinning controls. |

## Audio Hardware preferences

### Premiere Audio Hardware preferences

Use the Audio Hardware panel in the Preferences dialog box (Edit > Preferences > Audio Hardware) to choose the computer audio device and adjust its settings. Windows systems provide ASIO and MME choices, while macOS uses CoreAudio options for playback and recording. After an audio device is connected, Premiere loads that hardware's default input/output, clock, latency, sample rate, and related settings automatically.

### Configure audio inputs and outputs

When setting up recording and playback inputs and outputs, Adobe Premiere works with these sound card driver types:

- On Windows, ASIO drivers are used for professional cards, while MME drivers usually handle standard cards.
- On macOS, CoreAudio drivers work with professional and standard cards.

ASIO and CoreAudio drivers are preferred because they reduce latency and improve performance. They also let you monitor audio while recording and hear volume, pan, and effects changes immediately during playback.

Tune the audio setup in Audio Hardware preferences by changing input and output device settings.

Adjust input and output device settings in Audio Hardware preferences to tailor the sound setup.

## Auto Save preferences

### Auto Save preferences in Adobe Premiere

Auto Save preferences define how Local Projects and Team Projects are saved automatically.

Use Auto Save preferences to control automatic saving for Local Projects and Team Projects.

## Collaboration preferences

### Collaboration preferences in Adobe Premiere

Use Collaboration preferences to choose defaults for Unshared Team Project Changes and Project Locking.

Defaults for Unshared Team Project Changes and Project Locking are set through Collaboration preferences.

## Color preferences

### Adjust Premiere color display and color management

Premiere color preferences control display behavior so editing can use accurate, dynamic color output.

Display behavior for accurate and dynamic color output while editing in Premiere is configured here.

UI Option

Function

Display Color Management

Turns on more accurate color display on supported screens.

Extended Dynamic Range Monitoring

Enables a video preview with brighter, more colorful images on supported screens.

| --- | --- |

## Control Surface preferences

### Set up and manage external control surfaces in Premiere

Control Surface preferences configure external hardware so video editing can be more efficient and tactile. These surfaces can be physical devices with knobs, buttons, and sliders that give hands-on control over parts of the editing workflow.

In Premiere, configure a control surface to make compatible hardware support editing more directly.

Compatible hardware can streamline editing when a control surface is configured in Premiere.

UI option

Function

Add

Adds a device, EUCON or Mackie. EUCON is an Avid-developed control protocol. It is commonly used with Avid control surfaces and can also work with other devices.

Mackie is a broadly supported control-surface protocol used for communication with editing software.

Edit

Lets you choose both MIDI Input Device and MIDI Output Device for that control surface.

Remove

Deletes Control Surfaces from the current configuration.

| --- | --- |

## Graphics preferences

### Graphics preferences in Adobe Premiere

The preferences below apply when working with text and graphics. Changes are used the next time a text layer or shape layer is created.

Graphics preferences set defaults for Text Styling and Missing Font Replacement.

Use Graphics preferences to define Text Styling and Missing Font Replacement defaults.

## Labels preferences

### Labels preferences in Adobe Premiere

Labels preferences define defaults for Label Colors and Label Defaults.

Use Labels preferences to set default Label Colors and Label Defaults.

## Media preferences

### Media preferences in Adobe Premiere

Change media settings to support smooth editing and playback.

For smoother editing and playback, adjust the media settings.

## Media Analysis & Transcription preferences

### Transcription settings in Adobe Premiere

Speech to Text accuracy, language support, and speaker labeling can be improved by customizing transcription settings.

Premiere uses these settings to control speech-to-text processing and visual analysis for media.

Visual analysis and speech-to-text processing are controlled through these media settings.

Configure Visual Analysis and Transcription options in Media Analysis & Transcription preferences to tailor media processing.

UI option

Function

Cache analysis results for re-use

Chooses the cache location for media analysis and transcription results:

- Next to the media as a sidecar file: stores media analysis and transcriptions in sidecar files beside the media. Importing the media into another project on any computer will not require analysis again.
- In the Media Cache: stores media analysis and transcriptions in the Media Cache folder. Importing the media into another project on the computer will not require analysis again.
- Do not cache: keeps media analysis and transcriptions only in the project file. Importing the media into another project on any computer will require analysis again.

Analyze all imported media to visually search your projects

Turns on automatic visual analysis for each clip imported into the project.

Automatically transcribe clips

Creates speech-to-text transcripts automatically for imported clips or for all clips in a sequence.

Transcription preferences

Chooses which media should be transcribed:

- Select Auto-transcribe all imported clips to transcribe all current and newly imported clips with the chosen language.
- Select Auto-transcribe only clips in sequence to transcribe every clip in the sequence with the chosen language.

Speaker Labeling

Chooses how speakers are labeled:

- Select Yes, separate speakers to label individual speakers separately.
- Select No, don't separate speakers to turn off speaker separation and treat all dialogue as one speaker.

Enable language auto-detection

Detects the spoken language in a clip automatically during transcription. When enabled, the default language is used for locale selection or as a fallback if detection fails.

Default language

Chooses the language used to transcribe clips.

| --- | --- |

## Memory preferences

### Memory preferences in Adobe Premiere

In the Preferences dialog box, the Memory panel lets you set how much RAM is reserved for other applications and for Premiere. For example, lowering RAM reserved for other applications increases the RAM available to Premiere.

Memory preferences set defaults for Installed RAM and RAM reserved for other applications.

Use Memory preferences to define Installed RAM and RAM reserved for other applications defaults.

## Playback preferences

### Playback preferences for devices, timing, and capture hardware

Playback preferences control media playback, including device choice, timing around edits, and capture card setup.

In the Playback panel, set the default audio and video player, change Preroll and Postroll timing, and configure third-party capture card devices. Premiere uses this player for previews in Effect Controls, Multi-Camera Monitor, Trim modes, Project panel, Program Monitor, and Source Monitor. The default computer player can be used, and some capture cards support third-party players.

These settings tune playback across editing views and external devices for smoother previews and better sync.

Playback behavior across editing views and external devices can be configured for smoother previews and better sync.

UI option

Function

Preroll

Enter the number of seconds to play before the edit point during playback.

Postroll

Enter how long playback continues after the edit point, measured in seconds..

Step forward/back Many

Enter how many frames are skipped.

Pause Media Encoder queue during playback

Pauses encoding in Adobe Media Encoder while sequences play.

Enable Mercury Transmit

Enables video output to external devices through Mercury Transmit.

Offset

Enter a millisecond value for adjusting audio timing offset.

Primary Audio Device

Select the audio output device used for playback.

Transmit Device Playback

Controls external playback devices.

- Device Name: shows the connected external output device used for playback, such as Adobe SRT.
- Video Stream: toggles the external device's video output on or off.
- Video Offset: accepts a value for syncing video timing with audio on external displays.
- Audio Stream: toggles audio output to the external device on or off.
- Settings: opens device-specific settings for customizing output format and additional playback choices.

Disable video output when in the background

Stops video from being sent to external devices while Premiere is not active.

| --- | --- |

## Timeline preferences

### Timeline preferences in Adobe Premiere

Premiere assigns default durations to audio, video, and still images.

Timeline preferences set defaults for the Video Transition Default Duration setting, the Audio Transition Default Duration setting, the Still Image Default Duration setting, and other options.

Use Timeline preferences to define related defaults, including Video Transition Default Duration, Audio Transition Default Duration, and Still Image Default Duration.

## Trim preferences

### Trim preferences in Adobe Premiere

Trimming behavior in Adobe Premiere can be adjusted for precision and a more efficient editing workflow.

Trim preference covers settings and configurations that affect clip trimming in Premiere.

Select Trim to change trimming preferences.

Choose Trim to adjust the trimming preference set.

UI option

Function

Large Trim Offset

The Trim Monitor has Large Trim Offset buttons. When one is clicked, the trim point moves earlier or later. In the Trim section of the Preferences dialog box, enter the frame count used when Large Trim Offset buttons move the selected point.

Allow Selection tool to choose Roll and Ripple trims without modifier key

Turn this on to make ripple and rolling edits without a modifier key.

Shift clips that overlap trim point during ripple trimming

Turn this on during ripple deletes to move track items that overlap the trim.

Ripple trim adds edits to keep both sides of trim in sync

Turn this on to add edit points to clips that overlap a trim. Those new edit points are trimmed with the selected edit points so clip alignment is preserved on both sides of the edit.

Playhead position determines trim monitor loop playback

Turn this on so loop playback is based on the playhead position rather than the full edit point selection.

| --- | --- |

## Display video on a second monitor

### Send Premiere video output to a second monitor

A second monitor can show only the video output. This helps during color grading when you need to evaluate color in another color space or watch playback full screen.

Change the Playback preference setting in Premiere to send Program Monitor output to a second computer monitor.

Choose Premiere > Settings > Playback (macOS) or Edit > Preferences > Playback (Windows).

Choose Enable Mercury Transmit so video can output to a secondary monitor. Next, choose the monitor that should display the video.

- Adobe DV: FireWire output.
- Adobe Monitor x: connected computer displays that receive video preview data through the graphics card.
- Third-party video hardware: entries vary with the third-party hardware connected. Common examples include AJA Kona 3G, Blackmagic Playback, and Matrox Player.

For second-monitor video, turn on Enable Mercury Transmit in the Playback preference.

Enable Mercury Transmit in the Playback preference when video should appear on another monitor.

Choose Disable video output when in the background to stop playback on the second monitor after switching to another application. The monitor then returns to the normal desktop or computer screen.

Choose OK.

After playback begins in a project, the second monitor switches automatically to video playback so the program video can be viewed separately.

## Best practices for film and TV productions

### Best Practices and Workflow Guide for Long Form and Episodic Post Production

Industry experts and Adobe engineers contribute advice and examples in the guide.

Download Best Practices and Workflow Guide for Long Form and Episodic Content.

The document spans key production topics, including setting configuration, optimization, offline dailies best practices, workflow navigation, turnovers, and final deliverables.

Rather than a universal one size fits all answer, the guide presents a detailed view of recommended, vetted procedures used by award-winning customers.

Adobe intends this guide to be a practical production reference and invites feedback about successful Premiere workflows.

## Display Premiere interface on a second monitor

### Set up a second monitor for a larger Premiere workspace

Premiere interface elements can be shown on a second monitor.

Before you begin:

Connect the monitor to the computer and confirm that the display works. Most computers include DVI or HDMI ports, while some laptops provide only Thunderbolt, USB ports, and an HDMI adapter. For example, when both the monitor and computer have HDMI, connect them with an HDMI cable.

Place the pointer over the panel that should move to the second monitor.

Drag the panel to the desired location on the second monitor.

Move any needed panels to the second monitor, creating a larger workspace that can hold the tools you need.

Using a second monitor for panels can reduce clutter and make editing easier.

Choose Window > Workspaces > Save as New Workspace to store the setup as a custom workspace for later use. Multiple workspaces can be created, such as one for editing and another for grading, and you can switch between them quickly when needed.
