# Enabling Cep Extensions, Effects Controls, Applying Effects Waveform Editor, Applying Effects Multitrack Editor ...

> Adobe Audition reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Enabling CEP extensions; Effects controls; Applying effects in the Waveform Editor; Applying effects in the Multitrack Editor; Adding third party plugins; Notch Filter effect; Fade and Gain Envelope effects (Waveform Editor only); Manual Pitch Correction effect (Waveform Editor only); Graphic Phase Shifter effect; How to apply the Doppler Shifter effect.

## Enabling CEP extensions

Use Audition with CEP extensions enabled.

Audition supports Common Extensibility Platform (CEP) extensions, allowing developers to create integrated panels for Adobe desktop applications.

Panels are built with HTML5 and JavaScript, and ExtendScript handles communication with the application.

The Adobe-CEP repository at Github includes source code, documentation, and extensions contributed by the community.

### Accessing the CEP extensions

Choose Window > Extensions > Adobe Audition Portal to open extensions.

Install extensions through Creative Cloud desktop application. Another path is to download extensions from Adobe Exchange and turn on File Sync in the application, which installs them automatically.

Create extensions with SDK. See SDK documentation and sample code for details.

Get the Audition SDK from Audition Developer Console.

## Effects controls

### Use Adobe Audition effects controls to refine audio effects during detailed sound editing.

The Effects Rack is where you add, edit, reorder as many as 16 effects, balance mix levels, and save favorite presets. Most rack controls are common to both editor types.

Controls shared by the Waveform and Multitrack editors

A. Rack Preset controls B. Effect slots C. Level controls D. Main Power button

Controls shared by the Waveform and Multitrack editors

### Controls unique to the Waveform Editor

In the Waveform editor, the Effects Rack includes a Process menu for changing a selection or the whole file, plus an Apply button that commits effects permanently.

Controls unique to the Waveform Editor Controls unique to the Waveform Editor

### Controls unique to the Multitrack Editor

The Effects Rack includes Pre-render Track and FX Pre/Post-Fader buttons for optimizing and routing effects. Every clip and track owns its own Effects Rack, and that rack is saved in the session.

Note

Buses and the mix track do not offer pre-rendering, because effects processing from every source track would slow the session.

Controls unique to the Multitrack Editor Controls unique to the Multitrack Editor

### Set input, output, and mix levels in racks

- For optimized volume, set Input and Output levels so meter peaks stay below clipping.
- For the amount of processed audio, move the Mix slider. 100% (Wet) means the sound is fully processed; 0% (Dry) means original, unprocessed audio.

### Insert, bypass, reorder, or remove effects in racks

In the Effects Rack, groups of effects are controlled through individual effect slots.

Note

In the Multitrack Editor, the fx section in the Editor or Mixer panels gives fast access to Effects Rack slots.

Insert an effect by choosing it from a slot's pop-up menu, then change settings as needed.

Bypass one effect by selecting its Power button.

Bypass the full rack by clicking the main Power button in the lower left corner. The fx power button in the Editor or Mixer panels also bypasses the rack.

For a selected group, choose Toggle Power State of Selected Effects from the panel menu.

Note

Use bypassing to compare processed audio with unprocessed audio quickly.

For one effect, use a slot's pop-up menu and choose Remove Effect; alternatively, select the slot and press Delete.

For all effects, choose Remove All Effects from the panel menu.

Change effect order by dragging effects to other slots.

Note

Different ordering changes the sound. For example, compare Reverb before Phaser with Phaser before Reverb.

### Copy or paste effects from Effects Rack

Effects can be copied or pasted between tracks in Waveform and Multitrack modes.

Select effects in Effects Rack (either Waveform or Multitrack mode), then choose Edit > Copy or press Ctrl + C.

Select the destination track or clip. Under Effects Rack (either Waveform or Multitrack mode), paste the effects by choosing Edit> Paste or pressing Ctrl + V.

### Use effect presets

Many effects include presets so favorite settings can be stored and recalled. Beyond presets for individual effects, Effects Rack has rack presets that save effect groups and their settings.

Apply a preset by choosing it from Presets menu.

Select Save effects rack as a preset save button to store current settings as a preset.

Delete a preset by selecting it and clicking Delete preset button.

Note

To revise an existing preset, apply it, make the changes, and save a new preset with the same name.

### Control effect settings with graphs

Many Audition effects have graphs for changing parameters. Control points added to the graph can be moved to shape effect settings precisely.

Graph control points work with related numerical settings. When a numerical setting changes or is disabled, its matching graph control updates as well.

In the effects control graph, the Frequency Spectrum shows movement by audio frequency in real time. Use the frequency spectrum to find audio imbalances and correct them with control points.

Frequency Spectrum

Frequency Spectrum

Move a graph point by dragging it to a new location.

Note

Do not use the next techniques with graphs for DeHummer, Mixing, Full Reverb, Parametric Equalizer, or Track EQ.

Add a control point by clicking the grid where the point should go.

Enter numeric values for a control point by right-clicking it and choosing Edit Point

Remove a point by dragging it off the graph.

Return the graph to its default state by clicking Reset button.

### About spline curves for graphs

Graphs normally show straight lines between control points. Some graphs, however, have Spline Curves option, which creates curved transitions between the points for smoother changes.

With spline curves, lines do not pass straight through the control points. The points instead define the curve shape. To pull the curve closer to a control point, click near that point several times.

Graph with straight lines compared to graph with spline curves

Graph with straight lines compared to graph with spline curves

## Applying effects in the Waveform Editor

### Apply effects in Waveform Editor to fine-tune and improve individual audio clips.

Note

During effect preview, selections and Playhead in Editor panel can still be adjusted. The Normalize and Stretch effects are exceptions.

### Apply groups of effects in the Waveform Editor

In the Waveform Editor, use the Effects Rack when several effects should be applied together. Process effects such as Noise Reduction are not available there, because those must be run one at a time.

Open Window > Effects Rack.

Use the numbered list to fill as many as 16 effect slots.

Begin playback so you can hear the result, then adjust, mix, or change the effect order as needed.

Note

For an A/B check against the unprocessed audio, toggle the rack's main Power button at lower left, or toggle the Power button for an individual effect.

To write the result into the audio data, click Apply.

Note

Save a rack preset when you want to keep the settings.

### Apply individual effects in the Waveform Editor

Choose an effect from the appropriate submenu of the Effects menu.

Click the Preview button , then revise settings until the effect behaves as needed.

Note

While changing settings, use the Levels panel to keep amplitude optimized.

To switch between the source audio and the processed version, toggle the Power button .

To commit the processing to the audio data, click Apply.

### About process effects

Menu commands that include the word process identify process effects. These effects require substantial processing and can be used only offline in the Waveform Editor. Process effects differ from real-time effects because they run only one at a time and therefore do not appear in the Effects Rack.

## Applying effects in the Multitrack Editor

### Apply effects in the Multitrack Editor when you need to shape and refine audio across several tracks.

In the Multitrack Editor, each clip, track, and bus can host up to 16 effects, and you can alter them while the mix is playing. Use clip effects when one track contains several clips that need separate processing.

Effects can be added, rearranged, or deleted from the Editor, Mixer, or Effects Rack panel. The Effects Rack is the only place where favorite configurations can be saved as presets for reuse across multiple tracks.

Multitrack Editor effects are nondestructive, so later revisions remain possible. For another project, reopen the session and adjust the effects to create a different sound.

Display Editor panel effect slots

To make the slots visible, use one of these actions:

- After selecting a clip, click Clip Effects at the top of the Effects Rack.

- With a track selected, use Track Effects at the top of the Effects Rack.

- Show the fx controls from either the Mixer or the Editor. When using the Editor panel, use the upper-left button .

Fill as many as 16 list slots with effects.

Press the spacebar to play the session, then adjust, move, or remove effects as needed.

Note

Use envelopes when effect settings need to vary over time.

### Pre-render track effects to improve performance

In the Multitrack Editor, pre-rendering track effects lowers CPU demand and can help complex mixes or low-latency recording run more smoothly. Latency is the time between user input and audio output from the computer; high latency creates a noticeable echo while recording, which can throw off musician timing.

Track settings remain editable in the usual way; Audition performs the pre-rendered processing whenever playback or editing stops.

Click the Pre-Render Track button from the Editor panel, Effects Rack, or Mixer.

### Insert effects before or after sends and EQ

Each track can place effects pre-fader or post-fader. Pre-fader effects are calculated before sends and EQ, while post-fader effects are calculated after sends and EQ. Most mixes work well with the default pre-fader behavior; post-fader routing is useful when a complex mix needs extra signal-flow control.

Use the FX Pre-Fader/Post-Fader button in the Editor panel or Mixer fx section to route effects before sends and EQ , or after .

Note

When changing effect settings inside the Effects Rack, use the lower-left FX Pre-Fader/Post-Fader button.

Effect and send routing for each track, pre- and post-fader:

A. Input B. EQ C. Volume D. Mute E. Send F. Effects Rack

Effect and send routing for each track, pre- and post-fader:

## Adding third party plugins

### Add third-party plug-ins in Adobe Audition when you want more effects and broader audio-editing capability.

Third-party plug-ins expand the effects that ship with Audition. Audition accepts VST3 and VST plug-ins on Windows and macOS, and it also accepts Audio Units plug-ins on macOS.

Use plug-in effects the same way you use built-in effects. For details about a specific plug-in, refer to the documentation from that plug-in's manufacturer.

Enable VST3, VST and Audio Units plug-ins

Third party effects are available only after Audition scans the plug-ins. Click Scan for Plug-in button so Audition checks the system audio plug-in folders. To keep application menus manageable, use the check boxes beside effect names to enable or disable those effects in the application.

Note

Close any multitrack session that is currently using effects.

Open Effects > Audio Plug-in Manager.

Audio plug-in manager

Audio plug-in manager

Within the VST Plug-in Folders section, click Add when you need to include custom folders for plug-in scanning. Click Default to use the standard VST folder for the current operating system. Note: Folders section is only for legacy VST effects; do not add the VST 3 folder here.

In the Available Plug-ins section, click Scan For Plug-ins. If a plug-in was updated recently, select Rescan Existing Plug-ins.

Audition enables every valid effect automatically. To remove an effect from the Audition effects list, clear the Enable checkbox. If a plug-in appears as Not Working, click Reload to scan it again. Select the desired plug-ins for Audition access, and click OK.

## Notch Filter effect

### Use the Notch Filter effect in Adobe Audition to suppress selected frequencies and reduce unwanted audio noise.

The Filter and EQ > Notch Filter effect can cut as many as six frequency bands chosen by the user. It is intended for extremely tight frequency removal, such as a 60 Hz hum, while preserving nearby frequencies.

Note

For sharp "ess" sounds, apply the Sibilance Softener preset. DTMF presets are available for removing standard analog telephone-system tones.

Frequency

Sets the center frequency used by each notch.

Gain

Sets each notch's amplitude.

Notch width

Controls the frequency span used by every notch. The choices run from Narrow, a second order filter that removes some neighboring frequencies, through Super Narrow, a very specific sixth order filter.

Note

As a rule, stay at or below 30 dB of attenuation with Narrow, 60 dB with Very Narrow, and 90 dB with Super Narrow. Higher attenuation can cut a broad area of adjacent frequencies.

Ultra-Quiet

Almost removes noise and artifacts entirely, but it needs additional processing. The difference is audible only through high-end headphones and monitoring systems.

Fix Gain To

Chooses whether the notches share one attenuation amount or use separate levels.

## Fade and Gain Envelope effects (Waveform Editor only)

The Amplitude and Compression > Fade and Gain Envelope effects behave similarly, but they alter audio in different ways:

- Choose Fade Envelope to lower amplitude by different amounts as time passes.
- Choose Gain Envelope to raise or lower amplitude across time.

In the Editor panel, click the yellow envelope line to create keyframes, then drag those keyframes upward or downward to alter amplitude. See Adjust automation with keyframes for quick selection, repositioning, or deletion of multiple keyframes.

Note

Select the Spline Curves option when you want curved, smoother movement between keyframes instead of straight-line transitions. See About spline curves for graphs.

## Manual Pitch Correction effect (Waveform Editor only)

### Use the Manual Pitch Correction effect in Adobe Audition to refine vocal pitch and correct pitch variation precisely.

The Manual Pitch Correction effect gives you visual pitch editing through the Spectral Pitch Display. The Spectral Pitch Display represents fundamental pitch with a bright blue line and shows overtones from yellow through red. Corrected pitch is drawn as a bright green line.

Note

Pitch can be monitored visually even when the Manual Pitch Correction effect is not in use. Click the Spectral Pitch Display icon in the options bar. Change Pitch Display settings in the Spectral Displays preferences when resolution, decibel range, or gridlines need adjustment.

Open Effects > Time and Pitch > Manual Pitch Correction.

Set these options in the Manual Pitch Correction window:

Reference Channel

Choose the source channel where pitch movement is easiest to detect. The analysis uses only that selected channel, but the resulting correction is applied equally to every channel.

Spline Curves

Makes transitions smoother when envelope keyframes vary pitch correction over time.

Pitch Curve Resolution

Defines the Fast Fourier Transform size for each processed data segment. Smaller values generally work better for correcting higher frequencies. For voice material, 2048 or 4096 usually sounds the most natural, while 1024 gives a robotic character.

In the Editor panel, choose one of these actions:

- For uniform pitch changes, use the Adjust Pitch knob in the heads-up display.
- For pitch changes across time, place keyframes on the yellow envelope line at the center of the waveform display.

Note

To focus the view on particular pitch ranges, right-click and drag in the vertical ruler at the right side of the Spectral Pitch Display. To restore the zoom level or change the scale being shown, right-click the ruler and select options from the pop-up menu.

## Graphic Phase Shifter effect

### Use the Graphic Phase Shifter effect in Adobe Audition to add phase modulation, depth, and motion to audio.

The Stereo Imagery > Graphic Phase Shifter effect changes waveform phase by placing control points on a graph.

Note

Right-click points to open the Edit Point dialog box when exact numeric adjustment is needed.

Phase shift graph

The horizontal ruler (x-axis) represents frequency, and the vertical ruler (y-axis) represents the amount of phase shift; zero means no phase shift. A simulated stereo effect can be made by drawing a zigzag pattern on one channel that becomes stronger toward the high end.

Frequency Scale

Sets whether horizontal ruler (x-axis) values use a linear or logarithmic scale. Select Logarithmic for finer control in lower frequencies. The logarithmic scale tracks the way human hearing emphasizes frequency more closely. Select Linear when higher-frequency work needs finer detail.

Range

Sets whether vertical ruler (y-axis) values use a 360° or 180° scale.

Channel

Chooses the channel or channels that receive the phase shift.

Note

For the strongest result, process one channel only. Applying the same phase shift to both stereo channels leaves the file sounding unchanged.

FFT Size

Sets the Fast Fourier Transform size. Larger sizes produce more exact results, but processing takes longer.

## How to apply the Doppler Shifter effect

### Use the Doppler Shifter effect in Adobe Audition to imitate movement and change how pitch and distance are perceived.

The Effects > Special > Doppler Shifter effect reproduces the pitch rise and fall heard as an object approaches and then moves past, such as a police car with a siren passing by. As the car approaches, forward movement compresses each sound wave, so the listener hears a higher frequency. After it passes, the waves stretch, producing a lower-pitched sound.

Note

The Doppler Shifter graph differs from many Audition effect graphs because it is not directly editable. The graph updates in response to parameter changes rather than direct manipulation.

Path Type

Sets the apparent route followed by the sound source. The available controls change according to the selected path type.

### Controls

Straight Line options:

- Starting Distance Away sets the effect's virtual start position, measured in meters.
- Velocity sets the effect's simulated speed, measured in meters per second.
- Coming From sets the apparent source direction, measured in degrees.
- Passes In Front By sets how many meters in front of the listener the effect appears to pass.
- Passes On Right By sets how many meters to the listener's right the effect appears to pass.

Circular options:

- Radius sets the effect's circular size, measured in meters.
- Velocity sets the effect's simulated speed, measured in meters per second.
- Starting Angle sets the effect's initial virtual angle, measured in degrees.
- Center In Front By sets the distance, in meters, from the listener's front to the sound source.
- Center On Right By sets the distance, in meters, from the listener's right to the sound source.

Adjust Volume Based on Distance or Direction

Changes the effect volume automatically from the specified values.

Quality Level

Offers six processing-quality levels. Lower settings finish with less processing time, while higher settings usually create better-sounding output.
