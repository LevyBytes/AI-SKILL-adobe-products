# Adding clips to the timeline with Source Patching

Source Patching tells Premiere exactly which timeline track should receive an asset, such as an image, video clip, or audio clip, when you place it. Use it while assembling a sequence in the timeline, especially when several video or audio tracks are present. By choosing the affected tracks first, you can edit the intended track without disturbing the others and keep tighter control over the edit.

Preparation

Set up a project, bring in media, and switch to the Editing workspace (Window > Workspaces > Editing). Confirm that the Source Monitor is visible (Window > Source Monitor).

Double-click an asset in the Project panel to load it in the Source Monitor.

After an asset is open in the Source Monitor, the timeline shows source patch indicators for the track currently chosen for patching.

In the Source Monitor, select Mark In and Mark Out to choose the part of the clip you want to source patch.

(Optional) Move the source patch indicator to another track if that is the track you need for patching.

Play the video in the Source Monitor. Use Mark In and Mark Out there to define the range for source patching. Keyboard alternatives are I for Mark In and O for Mark Out.

To insert the clip, use one of these methods:

- From the Source Monitor, drag the clip onto the Program Monitor (as shown in the video), then select Insert in the Program Monitor.
- Select Insert from the Source Monitor, then choose the track where the source clip should be inserted.
- Select the clip and press the comma (,) keyboard shortcut to insert a clip.

An Insert edit places the incoming clip into the sequence and pushes later clips forward to make room. While dragging a clip, pressing Ctrl (Win) or Command (macOS) switches the drag operation into Insert mode.

To replace existing timeline material, select Overwrite from the Source Monitor and choose the track where the clip should overwrite. You can also press period (.) to overwrite a clip.

Note

An Overwrite edit places a clip by replacing the sequence frames that run from the edit point through the clip's duration. For adding clips to sequences or moving clips within sequences, Overwrite is the default approach.
