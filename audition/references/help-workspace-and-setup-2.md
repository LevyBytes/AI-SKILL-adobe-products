# Customizing Saving Application Settings, Finding Customizing Shortcuts, Perform Mic Check

> Adobe Audition reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Customizing and saving application settings; Finding and customizing shortcuts; Recording audio.

## Customizing and saving application settings

### Customize and save application settings in Adobe Audition so the workspace fits your preferences and recurring work moves faster.

Preferences controls cover Audition’s display, editing behavior, disk-space use, and related application settings.

Open Edit > Preferences (Windows) or Adobe Audition > Settings (macOS), then pick the category you want to adjust.

For any specific option, point to it until its tooltip is displayed.

Note

In Media & Disk Cache preferences, assign Primary Temp folder to your fastest drive and use a different drive for Secondary Temp folder. Enable Save Peak Files so Audition keeps data used to display WAV files. Without peak files, large WAV files take longer to reopen.

### Restore preferences to default settings

Damaged preferences files can cause unexpected behavior. Re-create the preferences files with this step.

Start Adobe Audition while holding down the Shift key.

### Export and import customized application settings

Application settings files capture the current preferences, effect settings, and workspaces. Exporting and importing these files lets you keep customized setting groups for particular workflows or move favored settings to another machine.

Choose File > Export > Application Settings, then specify a filename and location.

Later, choose File > Import > Application Settings to apply the saved settings again.

## Finding and customizing shortcuts

Adobe Audition includes a default keyboard-shortcut set to make editing faster. In menus and tool tips, any available shortcut is shown beside the command or button name. Nearly every default shortcut can be changed, and additional functions can receive shortcuts too.

### Visual Keyboard Shortcut Editor

Use the Visual Keyboard Shortcut editor to inspect keys with assigned shortcuts, add new shortcuts, or remove existing assignments. It also improves navigation and workflow efficiency; hovering over a key in the Keyboard layout shows the full command name in a tool tip.

Selecting a key in Keyboard Layout shows the commands assigned to that key and to every other modifier combination.

- Audition identifies the keyboard hardware and displays the matching keyboard layout.
- If Audition finds a non-supported keyboard, the default view shows the U.S. English keyboard. Initially, the Adobe Audition Default preset is displayed.
- After a shortcut is changed, the preset pop-up menu switches to Custom. When the edits are finished, use Save As to store the customized shortcut set as a preset.

### Using and customizing the Visual Keyboard Shortcut

- To open Visual Keyboard Shortcuts, select Edit < Keyboard Shortcuts.

The Keyboard Shortcut window opens with a keyboard layout view. Keys that already have shortcuts are colored Purple. Shortcuts shown in purple apply across the application.

Visual Keyboard Shortcut Editor

Visual Keyboard Shortcut Editor

### Shortcut assignment using drag-and-drop

Assign shortcuts by dragging a command from the Command list onto a key in Keyboard Layout. You can also use the modifier combination for the selected key shown in Key Modifier List. The Command List and Modifier list are shown below the keyboard.

- For a command plus modifier assignment, hold the modifier keys while dragging.
- To remove the most recent assigned shortcut command, select the key and click Undo.
- To clear every assigned shortcut, click Clear.

Assign shortcut

Assign shortcut

### Conflict resolution

When a shortcut is already assigned to another command:

- A warning is shown at the bottom of the editor.
- The Undo and Clear buttons become available in the lower-right corner.
- The conflicting command is highlighted in blue; clicking the key also selects that command in the command list.

At that point, update the assignment for the conflicting command as needed.

### Avid ProTools shortcuts in Audition

Audition can use the default ProTools shortcuts. ProTools is a digital audio workstation that works as a multitrack tape recorder and audio mixer, with additional features.

### Using ProTools shortcuts

Use these steps to apply ProTools shortcuts in Audition.

Open Edit < Keyboard Shortcuts.

In the Keyboard Shortcuts window, choose Keyboard Layout Preset.

From the drop-down menu, choose ProTools (read only).

ProTools shortcuts are then available in Audition.

### Find shortcuts

Use any of these methods:

- For menu commands, check the area to the right of command names for shortcuts.

- For tools or buttons, check the right side of the tool tips for shortcuts. (Hold the pointer over a tool or button to show tool tips.)

- To see the full shortcut list, choose Edit > Keyboard Shortcuts.

### Customize shortcuts

Nearly all default keyboard shortcuts can be customized, and shortcuts can also be added for other commands.

Choose Edit > Keyboard Shortcuts. In the Command column, choose the command to change. To replace or delete an existing shortcut, select it from the Shortcuts For Command menu. Then use one of these actions:

- To add a shortcut, click in the Press Shortcut box, press the desired key combination, and then click Assign.

- To delete a shortcut, click Remove.

Audition warns you if the key combination is already assigned. Click Yes to move the shortcut to a different command, or click No to keep the current assignment.

Note

Assign shortcuts to Workspace commands when you want fast switching between custom panel layouts.

### Save or delete custom sets of shortcuts

Choose Edit > Keyboard Shortcuts, then use one of these actions:

- For saving a custom set, click Save As, enter a name, and click OK.

- For deleting a custom set, open the Set menu, choose that set, and click Delete.

### Restore the default shortcuts

Choose Edit > Keyboard Shortcuts. In the Set menu, choose Default Set.

## Recording audio

### Record audio in Adobe Audition with waveform and multitrack editors, punch-in and timed recording, plus input monitoring tools.

### Record audio in the Waveform Editor

Audio can be recorded from a microphone or from any device connected to a sound card’s Line In port. Before recording, adjust the input signal so signal‑to‑noise levels are optimized.

Set audio inputs.

Use one of these actions:

- Create a file.
- Open an existing file when you need to overwrite or append audio, then put the current‑time indicator where recording should begin.

At the bottom of the Editor panel, select the Record  button to begin recording and select it again to stop.

### Correct DC offset

Some sound cards add a slight DC offset during recording; direct current enters the signal and shifts the waveform center away from the zero point, or center line, in the waveform display. DC offset can create a click or pop when a file starts or finishes.

In the Waveform Editor, choose Favorites > Repair DC Offset.

Use Analyze amplitude. to measure DC offset.

### Direct‑to‑file recording in the Multitrack Editor

In the Multitrack Editor, Adobe Audition automatically writes every recorded clip directly to a WAV file. With Direct‑to‑file recording, you can quickly record and save many clips, giving the session substantial flexibility.

Each recorded clip is located inside the [session name]\_Recorded folder in the session folder. Clip filenames start with the track name and then the take number, for example, Track 1_003.wav.

After recording, edit takes to build a polished final mix. For example, if you have several takes of a guitar solo, combine the strongest sections from each solo. You can also use one solo version for a video soundtrack and another version for an audio CD.

### Record audio clips in the Multitrack Editor

In the Multitrack Editor, overdubbing lets you record audio on multiple tracks. During overdubbing, previously recorded tracks play back while you perform with them, creating sophisticated layered compositions. Each recording is added to a track as a new audio clip.

For a track source, use the track’s Input menu in the Editor panel’s Inputs/Outputs area.

To revise the available input list, select Audio Hardware, and then select Settings.

For the track, select the Arm For Record button.

Track meters show the input so you can optimize levels. (To turn off this default, go to the Multitrack preferences and deselect Enable Input Metering When Arming Tracks so levels appear only during recording.)

To monitor hardware inputs after any track effects and sends are applied, select the Monitor Input  button.

Note

Routing inputs through effects and sends uses substantial processing. You can also reduce latency (an audible delay) if it interferes with performers' timing.

To record on several tracks at the same time, repeat steps 1‑3.

In the Editor panel, move the current‑time indicator where the new clip should start, or mark the range it should occupy.

At the bottom of the panel, select the Record  button to begin recording, and select it again to stop.

### Punch into a selected range

When a recorded clip contains an unsatisfactory time range, select that range and punch in a new recording while keeping the original clip intact. Recording directly into a range is possible without punching in, but punch-in playback includes audio just before and after the range, giving context for natural transitions.

For important or difficult sections, create multiple punch-in takes, then choose or edit takes for the best performance.

In the Editor panel, use the Time Selection Tool in the appropriate track to mark the clip’s time range.

Choose the correct track input.

For the track, select the Arm For Record  button.

Place the current‑time indicator several seconds ahead of the selected range.

In the lower area of the Editor panel, select the Record button.

Adobe Audition plays audio before the selection, records through the selected range, and then resumes playback.

### Punch in during playback

When you do not need to target an exact punch range, playback can continue while you drop into recording around the area you choose.

Arm one or more tracks for recording.

Use the Play button at the bottom of the Editor panel.

At the point where recording should start, choose the Record button. Choose the same button again when the recording is complete.

### Punch and Roll

Punch and Roll record mode supports the punch-and-roll workflow by combining pre-roll, an onscreen countdown, and Punch Again functionality. In this mode, playback first runs for the specified pre-roll amount, then recording punches in at the intended point. Set the pre-roll duration from the Playback and Recording preferences page.

Use this procedure to record:

Right-click the Record button and choose Punch and Roll Mode to toggle the mode on. The keyboard shortcut Shift+Alt+Space also performs this action.

Move the playhead to the desired punch-in point. Press Record to start recording.

For pre-roll length changes, go to Preferences > Playback and Recording. By default, pre-roll is 5 seconds.

Punch Again stops the current playback or recording operation, then begins Punch and Roll recording again from the previous punch-in point. Keyboard shortcuts can be assigned for this command.

With video files, the countdown appears as an overlay in the Video panel, and a flash frame marks the start of recording.

### Punch again

Punch Again ends any active playback or recording, then starts Punch and Roll recording from the most recent punch-in location.

Punch again keyboard shortcut in Adobe Audition.

Punch again keyboard shortcut in Adobe Audition.

### Choose punch-in takes

When multiple punch-in takes are recorded, Adobe Audition stacks those takes in layers in the Editor panel. To select the take you want, use this process:

Using the Time Selection Tool, select a range that snaps to the beginning and ending edges of the punch-in takes.

On the track, hover over the clip header. That header shows the track name and then the take number.

Move the uppermost take somewhere else, commonly to the end of the session, so it does not play unintentionally.

Play back the session. If one of the moved takes is the one you want, drag it into the selected range again. Note

To silence the original clip while the punch-in range plays, change the volume envelope.

### Timed Record Mode

Timed Record Mode schedules a recording for a later moment, useful when you cannot be present to start or stop recording yourself. Use these steps to record:

Right-click the Record button and choose Timed Record Mode.

Place the playhead where recording should start, then press Record. Audition opens the Timed Recording dialog.

- Start Time: change the date and time that recording should begin. The default Start Time is 15 minutes after the command is invoked. To start without waiting, choose Immediately.
- Recording Time: set how long recording should continue. Choose No TIme Limit when recording should run until you stop it by hand.

While Audition is armed and waiting, the Record button blinks with a blue highlight.

Note

Avoid doing more editing during this waiting period. If you try to open another file or switch files, a warning appears to indicate that a Timed Recording is scheduled, as shown below. Audition records into the active file in the Editor panel, so leaving Audition idle helps prevent existing data from being overwritten.

After the recording time limit is reached, Audition stops recording. The file is not saved to disk automatically; preview the material before you export or save it.

### Overwrite and Insert modes in Waveform editor

- Overwrite: choose this mode, place the playhead at the audio you want to replace, and press Record.
- Insert: use this mode to add audio at a chosen point without replacing the existing clip. Put the playhead at the desired recording start point, then press Record.

### Input monitoring

Input monitoring lets you check the signal from the recording device before the actual take starts, either by watching level meters or by listening. Enable it by choosing the [I] button in the track header controls or in the mixer. The [R] button arms the track to record. Your preferences determine how this changes audio routing.

Track level meters show the audio received from the input device and routed to the track output. When a track is armed for recording, Adobe Audition can use either of two input monitoring modes.

### Input metering

Turn on the input metering checkbox when you want input levels shown on the track-level meter while transport is stopped or during recording. Use this sequence to enable input metering:

Choose Adobe Audition > Preferences > Multitrack.

Enable the input metering checkbox.

### Smart monitoring

Smart monitoring turns input monitoring on automatically during recording and when the player is stopped, which makes overdubbing easier.

When transport is stopped, incoming audio can be heard; for instance, you can talk with the speaker. Once playback starts, Audition ignores the input and plays only the track's existing content. That behavior helps locate the right punch-in spot. Afterward, you can listen to the audio you recorded.

Use these steps to enable input monitoring:

Choose Adobe Audition > Preferences > Multitrack.

Enable the Enable smart monitoring checkbox.
