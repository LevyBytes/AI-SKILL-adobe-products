# Audio preferences in Premiere

Use Audio preferences to set defaults for Automatch Time, 5.1 Mixdown Type, Large Volume Adjustment, and related audio behavior.

Defaults such as Automatch Time, 5.1 Mixdown Type, Large Volume Adjustment, and additional audio settings are managed here.

| UI option | Function |
| --- | --- |
| Automatch Time | Sets how long an adjusted control in the Audio Track Mixer takes to return to its earlier value. It applies to Volume, Pan, Effect, and Send knobs for parameters on Audio and Submix tracks; in primary tracks, sends are excluded. For effects with keyframes, Automatch Time applies to properties in Touch and Read modes. |
| 5.1 Mixdown Type | Controls the way Premiere combines source channels for 5.1 audio tracks. |
| Sum multichannel outputs to mono in Source Monitor | Combines several audio channels into one mono output while using the Source Monitor. |
| Play audio while scrubbing in Source and Program Monitors | Turns on audio scrubbing. A keyboard shortcut can also toggle audio during scrubbing, which is faster than reopening the Preferences dialog box whenever audio scrubbing needs to be switched on or off. |
| Maintain pitch while shuttling | Keeps pitch stable during scrubbing and playback with the J, K, L keys. Enabling this preference can make speech clearer when playback runs faster or slower than normal speed. |
| Mute input during timeline recording | Stops the audio inputs from being monitored during timeline recording. |
| Generate waveforms automatically during import | Allows Premiere to create waveforms automatically as audio is imported. Disable this preference when audio waveforms should not appear. |
| Render audio when rendering video | Allows Premiere to render audio previews automatically whenever video previews are rendered. |
| Auto-tag audio types in the timeline | Applies audio type labels, such as mono or stereo, to timeline clips automatically from clip properties. |
| Always override audio tags | Makes Premiere replace clip audio type labels with new labels even when earlier labels already exist. |
| Automation Keyframe Optimization | Describes the linear keyframe thinning and minimum time interval thinning controls. |
| Linear keyframe thinning | Adds keyframes only where values are not linear between the starting and ending keyframes. For instance, during a fade from 0 dB to -12 dB, enabling this option makes Premiere add only keyframes where the value rises away from the beginning (0 dB) and ending (-12 dB) keyframes. When the option is off, Premiere may add multiple identical-value keyframes between those two points, with the number depending on the speed of the value change. The option is on by default. |
| Minimum time interval thinning | Adds keyframes only when spacing is greater than the value you enter. Enter a value from 1 through 2000 milliseconds. |
| Large Volume Adjustment | Enter the decibel amount used by the Increase Clip Volume Many command. |
| Render Edit in Audition files to | For clips sent into Audition, pick one save destination:<br><br>- Scratch disk location for Captured Audio<br>- Next to original media files. |
| Manage Audio Plug-ins | Opens the Audio Plug-in Manager for managing VST3 plug-ins from third parties and, on macOS, Audio Units (AU) plug-ins. |

Audio plug-in management option: Manage Audio Plug-ins.
