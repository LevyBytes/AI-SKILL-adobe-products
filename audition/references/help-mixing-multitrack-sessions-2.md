# Looping Clips, Clip Volume Matching Fading Mixing, Automating Mixes Envelopes1, Multitrack Clip Stretching

> Adobe Audition reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Looping clips; How to match, fade, and mix clip volume with Audition; Automating mixes with envelopes; Multitrack clip stretching.

## Looping clips

### Use looping in Adobe Audition to repeat audio segments and lengthen sections smoothly inside a project.

Loops make multitrack sessions highly flexible. A loop usually contains just one or two bars of music, or four to eight beats, but mouse dragging can extend and repeat it.

Identifying loops in the track display

A. No loop B. Single loop C. Extended (repeated) loop

Identifying loops in the track display

### Snap to loop beats

For tighter timing in a loop‑based session, switch to the Bars And Beats time format and turn snapping on. After that, add loops to form a rhythmic base that can support newly recorded audio clips. Existing audio clips can be added as well, but only their start points or end points align with loop beats.

Choose View > Time Display > Bars And Beats.

Open Edit > Snapping, then select any needed snapping mode:

Snap To Markers

Aligns clips and the playhead with marker positions on the timeline.

Snap To Ruler (Coarse)

Aligns to beats inside bars. Choose this mode for loop files measured in 1/4 or 1/2 bars.

Snap To Ruler (Fine)

Aligns to smaller ruler subdivisions, including fractions of seconds or beats. Use this option for fine timing edits.

Snap To Clips

Aligns to the beginnings and endings of audio clips.

Snap To Loops

Aligns to loop starts and loop ends inside clips.

Snap To Zero Crossings

Places edits at waveform crossings of zero amplitude to help avoid clicks and pops.

Snap To Frames

Aligns edits and clips with video frame boundaries. Use this option with video to maintain sync.

### Enable a looped clip and change its length

In the Multitrack Editor, right-click an audio clip and choose Loop from the context menu.

Move the pointer to the clip's left or right edge; the loop editing icon  appears. Drag to make the loop longer or shorter.

How far you drag determines whether the loop repeats as whole cycles or stops partway through a cycle. For example, a one-bar loop can be dragged out to 3‑1/2 bars so it ends on a beat inside the loop. Each time you cross a bar, a white vertical line appears in the clip. This snap‑to line shows exact beat alignment with other tracks.

Extending a loop

Extending a loop

## How to match, fade, and mix clip volume with Audition

Note

For fades on individual audio files, see Visually fading and changing amplitude. (The following topics cover multitrack clips.)

### Match multitrack clip volume

When multitrack clips differ sharply in volume and become hard to mix, matching their volumes can bring them closer together. Since the Multitrack Editor works nondestructively, this adjustment can be reversed. To permanently alter source-file volume instead, see Match volume across multiple files.

Activate the Move  or Time Selection  tool, then select multiple clips with Ctrl-click (Windows) or Command-click (Mac OS).

Run Clip > Match Clip Volume.

In the pop-up menu, select one option:

Loudness

Matches the clips to an average amplitude value you specify.

Perceived Loudness

Matches the clips to a perceived amplitude value you specify, with middle frequencies weighted because hearing is especially sensitive to them. This option usually works well unless frequency emphasis changes greatly, such as a passage with pronounced midrange frequencies and other sections with bass frequencies.

Peak Volume

Matches the clips to a maximum amplitude value you specify by normalizing them. Because dynamic range remains intact, this is useful for clips that will receive more processing or for highly dynamic audio such as classical music.

Total RMS Amplitude

Matches the clips to an overall root-mean-square amplitude value you specify. For example, when most of two files measures -50 dBFS, their total RMS values reflect that shared level even if one file has more loud passages.

Enter a Target Volume.

### Fade or crossfade multitrack clips

Fade and crossfade controls directly on clips give visual control over fade curve shape and duration. Fade-in and fade-out controls are always shown at the upper-left and upper-right clip corners. Crossfade controls appear only after clips overlap.

On-clip controls

A. Drag controls in clip corners to fade in and out B. Overlap clips to crossfade

On-clip controls

### Fade a clip in or out

Use the fade icon    in either upper clip corner: drag inward for fade length, and drag vertically to shape the fade curve.

### Crossfade overlapping clips

A crossfade between clips on the same track is created by overlapping them; a wider overlap produces a longer transition region.

Put two clips on the same track and move them until they overlap. (See Select and move clips.) At the top of the overlap, drag the left  or right  fade icon up or down to change the fade curves.

### Fade options

Select a clip, then open these fade options by right-clicking a fade icon in the Editor panel or by choosing Clip > Fade In or Fade Out.

No Fade

Removes the fade or crossfade.

Fade In, Fade Out, or Crossfade

When clips overlap, lets you select the fade type.

Symmetrical or Asymetrical (crossfades only)

Controls how the left and right fade curves respond when you drag them up and down. Symmetrical changes both fades the same way, while asymetrical allows separate adjustments.

Linear or Cosine

Applies either a steady linear fade or an S-shaped fade that begins slowly, changes amplitude quickly, and ends slowly.

Tip: While dragging fade icons, hold Ctrl (Windows) or Command (Mac OS) to toggle between Linear and Cosine modes.

Automatic Crossfades Enabled

Creates crossfades automatically for overlapping clips. Clear this option when automatic crossfades are unwanted or interfere with work such as trimming clips.

### Create a single audio clip from multiple clips

Several clips that occupy the same time span can be merged into one clip. The Multitrack Editor and the Waveform Editor both support quick edits to the resulting clip.

Creating single clip from multiple clips in Multitrack Editor

Creating single clip from multiple clips in Multitrack Editor

In the Editor panel, use any of these selections:

Choose a specific time range. (See Select ranges in the Multitrack Editor.)

Choose specific clips when bouncing to a new track.

Choose nothing when the goal is to mix down an entire session.

To combine the original clip contents, use either of these commands:

For a new Multitrack Editor track and clip, choose Multitrack > Bounce To New Track.

For a new Waveform Editor file, choose Multitrack > Mixdown To New File.

Note

For mixing down an entire session, see Export multitrack mixdown files.

### Create an audio clip from a bus or mix track

When audio from a bus or mix track needs editing, create a clip from that track.

In the Editor panel, mark the time span for the new clip. (See Select ranges in the Multitrack Editor.)

On the timeline, right-click a bus or mix track, then choose Bounce [track type] To New Track.

Adobe Audition adds a new track containing a clip that represents the bus or mix track.

### More like this

- Export multitrack mixdown files

## Automating mixes with envelopes

Mix automation changes mix settings across time. For example, volume can rise automatically during an important musical passage and later fall through a gradual fade out. A video tutorial demonstrates mix automation in use.

Automation envelopes show settings visually at particular points in time, and keyframes on envelope lines can be dragged to edit them. Because envelopes are nondestructive, they leave audio files unchanged. For example, if you open a file in the Waveform Editor, envelopes applied in the Multitrack Editor are not heard there.

Clip and track envelopes in the Editor panel

Clip and track envelopes in the Editor panel

### Automating clip settings

Clip envelopes let clip volume, pan, and effect settings be automated.

On stereo tracks, clip volume and pan envelopes appear by default; their colors and default locations identify them. A volume envelope starts as a yellow line across the upper half of a clip. A pan envelope starts as a blue line in the center. For pan envelopes, the top of a clip means full left, and the bottom means full right.

Note

Mono and 5.1 surround tracks do not include pan envelopes on clips.

Two clip envelopes

Two clip envelopes

### Show or hide clip envelopes

Audition shows clip envelopes by default. If those lines clutter the view or make editing harder, hide the envelope types you do not need.

Open the View menu and use any of these commands:

- Show Clip Volume Envelopes

- Show Clip Pan Envelopes

- Show Clip Effect Envelopes

### Show or hide individual automation parameters

Showing a parameter for an effect

Showing a parameter for an effect

At the upper-right of a clip, open the parameter menu. Choose a Rack mixing option or an effect parameter. (Checkmarks in that menu identify parameters currently shown; choose the same parameter again to remove it from view.)

Once keyframes have been changed for a parameter, the menu marks that parameter with an asterisk (\*).

Note

Rack Power lets you automate whether a clip's Effects Rack is enabled or bypassed over time.

### Disable clip keyframe editing

Turn off keyframe editing when you want to avoid accidentally adding or moving keyframes.

From the Multitrack menu, clear Enable Clip Keyframe Editing.

### Automating track settings

Track envelopes provide automation for volume, pan, and effect settings across time. In Adobe Audition, an automation lane under each track displays those envelopes. Each automated parameter uses its own envelope, edited with the same gestures as a clip-level envelope.

Automating track settings in the Editor panel

Automating track settings in the Editor panel

### Create track envelopes

Use track envelopes when specific moments in the timeline need exact track-setting changes.

Showing automation lanes in Editor panel

Showing automation lanes in Editor panel

For the track you plan to automate, open the triangle beside the Track Automation Mode menu in the Editor panel. (That menu starts at Read.)

Use Show Envelopes to choose the parameter. To add keyframes, click the envelope line, then drag them into place.

### Record track automation

During session playback, Audition can capture changes you make to track volume, pan, and effects so the mix evolves over time. Adobe Audition turns those moves into track envelopes automatically, leaving them available for precise editing later.

Note

External controllers, including Mackie Control, can change several controls at once. See Control surface support.

1. In the Main panel, move the current-time indicator to the point where automation recording should begin.
2. Choose an option from the Track Automation Mode menu.
3. Begin playback to record automation. While audio runs, change track or effect controls in the Editor, Mixer, or Effects Rack panels.
4. End playback to finish recording automation.

Note

When recorded keyframes become overly dense or uneven, use Optimize recorded automation.

### Track Automation Mode options

For each track, select one of these modes in the Editor panel or Mixer:

Off

During playback and mixdown, track envelopes are ignored. The envelopes remain visible, so keyframes can still be added or adjusted manually.

Read

Playback and mixdown use the track envelopes, but changes you perform are not written. You can audition those moves; afterward, keyframes revert to recorded settings.

Write

As soon as playback begins, current settings replace existing keyframes. Recording of new settings continues until playback ends.

Latch

Keyframe recording starts with the first setting change, then keeps writing new settings until playback stops.

Touch

Works like Latch, except the settings ease back to previously recorded values after you stop changing them. Use Touch when only selected automation ranges should be overwritten and the rest should remain unchanged.

### Protect settings when recording automation

While automation is being recorded, protect parameters that should not change by accident while leaving other parameters adjustable.

1. At the left side of the Editor panel, go to the controls for the target track.
2. Use the Show/Hide Automation Lanes icon [ICON].
3. In Show Envelopes, choose the parameter.
4. Use the Protect The Parameter icon [ICON].

### Optimize recorded automation keyframes

To keep recorded automation from producing too many keyframes or unevenly spaced ones, tune these controls in the Multitrack section of the Preferences dialog box.

Automatch Time

Sets the return speed for parameters moving back to their original values in Touch mode. Accepts 0.00 through 5.00 seconds; 1.00 second is the default.

Linear Edit Point Thinning

Deletes keyframes whose values merely represent an unchanged static parameter setting.

Minimum Time Interval Thinning

Places keyframes only at intervals greater than the chosen amount. In Minimum Time, enter a value from 1 to 2000 milliseconds.

### Adjust automation with keyframes

Envelope-line keyframes drive clip and track parameter changes over time. Adobe Audition fills in, or interpolates, the values that fall between keyframes by using either transition method:

Hold transitions: values jump abruptly when each new keyframe is reached.

Linear transitions: values move in a steady, gradual way from one keyframe to the next.

Spline curves can also be applied to a full envelope. That choice overrides the per-keyframe transition setting above and produces natural-sounding movement whose speed changes around each keyframe. (See About spline curves for graphs.)

Transitions between keyframes

A. Hold B. Linear (the default) C. Spline curves

Transitions between keyframes

Add a keyframe

Do either of the following:

Move the pointer over an envelope line; click when a plus sign appears.

After setting the playhead at the parameter change time, use the track controls' Add Keyframe icon.

Navigate between track keyframes

At the bottom of the track controls in the Editor panel, use Select to pick the parameter.

Use the Previous Keyframe icon or the Next Keyframe icon.

Select several keyframes for one parameter

On any keyframe, open the context menu and choose Select All Keyframes.

Hold Ctrl (Windows) or Command (Mac OS) while clicking individual keyframes.

Hold Shift and click to select a range of keyframes.

Reposition keyframes or the envelope line

Drag selected keyframes to move them. (Hold Shift while dragging to constrain either the time position or the parameter value.)

For an envelope-segment move that does not create a keyframe, drag while holding Ctrl (Windows) or Command (Mac OS).

Change the transition between two keyframes

- On the first keyframe, open the context menu. Enable Hold Keyframe for an abrupt value change, or clear it for a gradual move between the two values.

Apply spline curves to an entire envelope

- Open an envelope line's context menu, then choose Spline Curves.

Delete keyframes

- Open an envelope line's context menu, then choose Delete Selected Keyframes. Another option is to drag a single keyframe away from the clip or track.

Disable clip keyframe editing

To avoid accidentally adding or moving keyframes, turn off keyframe editing.

- From the Multitrack menu, clear Enable Clip Keyframe Editing.

### Edit keyframe manually

Right-click a keyframe on either a Multitrack Session track automation envelope or clip automation envelope, then choose Edit Keyframe. A dialog box opens. Enter the time value and the parameter value for that keyframe. Parameters that are not numeric, such as on/off switches, show a tooltip on the dialog's second control with the parameter value name.

### More like this

- About spline curves for graphs
- Apply effects to clips or tracks
- Editing multitrack sessions in the Editor panel and Mixer

## Multitrack clip stretching

### Learn how Multitrack Editor clip stretching adjusts timing, matches durations, and lines audio up smoothly.

With clip stretching in the Multitrack Editor, timing and duration can be changed without altering pitch, which helps match a clip to a required length or align it to a picture edit.

Select Clip > Stretch > Enable Global Clip Stretching.

Use the white triangles on a clip's upper-left or upper-right corner in the Editor panel, dragging them to stretch the clip.

Note

Select more than one clip when they should stretch proportionally.

For selected clips, change these Stretch controls in the Properties panel:

Mode

Choose from the following:

- Off disables stretching and returns the clip to its original length.
- Realtime plays the stretch result while clips are being dragged. This mode works well while editing.
- Rendered (High Quality) takes more processing time but may prevent audible artifacts. Use it when Realtime mode causes slow playback or performance problems.

Type

Choose from the following:

- Monophonic works best for dialogue or a solo musical instrument.
- Polyphonic fits music with several instruments or complex ambient audio.
- Varispeed changes pitch along with duration, like speeding up or slowing down analog tape machines.

Note

To set the same mode quickly for every clip, choose Clip > Stretch > Realtime All Stretched Clips or Render All Stretched Clips.

Duration, Stretch, and Pitch

Use numeric fields when you need adjustments more exact than dragging clips in the Editor panel.

Advanced settings

Set these controls:

- Transient Sensitivity (available in Polyphonic mode) sets how responsive stretching is to transients, such as drum hits and note starts, that serve as anchor points. Raise the value if transients sound unnatural.
- Window Size sets each processed audio chunk's size in milliseconds. Change it only when echo or flanging artifacts appear.
- Precision settings (available in Rendered mode) choose between higher quality and faster processing.
- Preserve Formants (available when Rendered and Monophonic are selected) keeps instrument and voice timbre realistic when pitch changes are made.

Note

For making high voices low, or the reverse, enable Preserve Formants and use a large pitch change.
