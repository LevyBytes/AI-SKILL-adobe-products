# Control Surface Support, Viewing Zooming Navigating Audio, Customizing Workspaces, Connecting Audio Hardware

> Adobe Audition reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Control surface support — Support for PreSonus FaderPort V1; Viewing, zooming, and navigating audio; Customizing workspaces — About workspaces; Connecting to audio hardware in Audition.

## Control surface support — Support for PreSonus FaderPort V1

PreSonus FaderPort V1 is a USB-connected hardware control surface for transport and mixing operations. It can start or stop playback and recording, adjust volume through its motorized fader, handle pan, and manage automation. These controls operate in real time alongside other functions.

Note

FaderPort 8 is not supported by Audition.

Set up FaderPort V1 in Audition with these steps:

Choose Edit > Preferences > Control Surface (Windows) or Adobe Audition > Preferences > Control Surface (MAC).

In the Preferences dialog box, click Add.

Add Preferences

Add Preferences

In the Add Control Surface dialog box, select PreSonus FaderPort V1.

Add control surface

Add control surface

Click Settings to configure MIDI input devices and MIDI output devices.

Control surface settings

Control surface settings

Click Button Assignments to change button assignment settings.

Button Assignments setting

Button Assignments setting

Click OK.

After setup, PreSonus FaderPort V1 can be used with Audition.

### Control surface support — Support for Mackie HUI

HUI communications protocol can connect an audio control surface with Adobe Audition. Through this protocol, Audition and the attached hardware surface keep fader, button, jog wheel, and display states synchronized.

Note

Note: Whether Audition works with a control surface that emulates HUI depends on how that device implements the protocol.

Connect an HUI-compatible device to Audition with these steps:

Choose Edit > Preferences > Control Surface (Windows) or Adobe Audition > Preferences > Control Surface (MAC).

In the Preferences dialog box, click Add.

In the Add Control Surface dialog box, select HUI.

Add control surface

Add control surface

Click Settings to adjust settings.

Enable the Use Only Channel Strips check box to limit control surface controls to the control strips. User-defined buttons remain enabled for the device so commands can still be assigned through the Control Surface Button Assignments dialog.

Configure settings

Configure settings

Enable the Restrict Time Code to SMPTE check box when the device should show only SMPTE frame rates as its displayed time base. With this check box selected, Bar and Beats, Decimal, Compact Disc, and Custom do not appear on the control surface.

Restrict Time Code

Restrict Time Code

Use Button Assignments from the Add Control Surface dialog box when button assignments need changes.

Click OK.

## Viewing, zooming, and navigating audio

### View, zoom, and move through audio in Adobe Audition so edits can be made efficiently and with greater precision.

Different Audition views support audio-file editing and multitrack-mix creation. Use the Waveform Editor for individual file edits. Use the Multitrack Editor when mixing several files and combining them with video.

Waveform and Multitrack editors rely on distinct editing models, each with its own strengths. The Waveform Editor permanently changes audio data, including saved files, through destructive editing. Permanent edits are useful for sample-rate conversion, bit-depth conversion, mastering, and batch processing. The Multitrack Editor works nondestructively, so changes are temporary and immediate; it needs more processing power but offers greater flexibility. That flexibility helps when a multilayered music piece or video soundtrack is built and reassessed over time.

A project can use both destructive and nondestructive editing as needed. For example, double-click a multitrack clip that needs destructive editing to open it in the Waveform Editor. If recent waveform edits are not wanted, Undo can return to earlier versions because destructive changes are not committed until the file is saved.

### Basic components of the editors

Although available options vary between the Waveform and Multitrack editors, both views include shared basics such as the tool and status bars plus the Editor panel.

Basic Waveform view

Basic Waveform view

### Switch editors

Use any of these methods:

- Open the View menu and select Waveform Editor or Multitrack Editor.

- On the toolbar, click Waveform or Multitrack.

- From the Multitrack Editor, double-click an audio clip to open that clip in the Waveform Editor. You can also double-click a file in the Files panel.

- From the Waveform Editor, use Edit > Edit Original to return to the multitrack session that produced a mixdown file. Embedded metadata must be present in the file for this command to work.

### Zoom audio in the Editor panel

### Zoom into a specific time range

In the zoom navigator or the timeline ruler, right-click and drag across the target span. The magnifying glass icon creates a selection that identifies what will expand to fill the Editor panel.

### Zoom to preset

At the bottom of the Editor panel, click the Zoom to Time icon. Five preset slots are available for jumping to a particular time duration. From the Save Preset menu, the current selected duration can replace one of the preset slots.

Zoom to time

Zoom to time

### Zoom to selected clip

Use the Zoom menu command to jump quickly to the time span covered by one or more selected clips. With the Multitrack Editor active, use Zoom > Zoom To Selection.

### Zoom into a specific frequency range

In the spectral display's vertical ruler, right-click and drag through the frequency band you want to inspect. Additional guidance is available for viewing audio waveforms and spectrums.

### Extend or shorten the displayed range

Move the pointer onto the left or right boundary of the highlighted zoom navigator range, then drag the magnifying glass icon.

### Gradually zoom in or out

Use the Zoom In or Zoom Out button in the lower-right area of the Editor panel.

Note

Adjust Zoom Factor from General in the Preferences dialog box.

### Zoom out full (all tracks)

All tracks can be zoomed out to a shared height so the vertical space is fully used. The view adjusts track heights until they occupy the complete multitrack editor panel height. Tracks are given matching heights, while minimized tracks stay at their minimum size.

For the full zoom-out view, use View > Zoom Out Full (All Tracks).

### Mouse wheel and Mac trackpad zooming

Put the pointer over the zoom navigator or ruler, then roll the mouse wheel or drag up or down with two fingers. The same zoom technique works over the waveform in the Waveform Editor.

Note

When the pointer is over the spectral display, roll or drag and hold Shift to toggle between logarithmic and linear frequency scales. Logarithmic scaling is closer to human hearing, while linear scaling separates individual frequencies more clearly on screen.

### Magnify selected audio

In the lower-right corner of the Editor panel, click Zoom In at In Point, Zoom In at Out Point, or Zoom To Selection.

### Display the entire audio file or multitrack session

Click the Zoom Out Full button in the lower-right corner of the Editor panel.

Note

To put zoom buttons in their own panel, choose Window > Zoom.

### Navigate through time

At stronger zoom settings, the Editor panel can be navigated to reach other parts of the audio content.

### Navigate by scrolling

- Drag left or right inside the zoom navigator.

Scrolling with the zoom navigator

Scrolling with the zoom navigator

In multitrack and waveform views, move along the timeline with horizontal mouse scrolling or by dragging with the middle mouse button.

For spectral-display frequency scrolling, drag upward or downward in the vertical ruler.

### Navigate with the Selection/View panel

The Selection/View panel reports the start and end points for both the active selection and the visible range in the Editor panel. Values appear using the current time display format, including formats such as Decimal or Bars And Beats.

To show the Selection/View panel, choose Window > Selection/View.

Changing the values in the Begin, End, or Duration boxes adjusts the selection or the view.

Auto-scroll can help move through the Waveform and Multitrack editors. To pick the scrolling behavior, open Preferences > Playback and use the radio buttons to choose a scroll type for each editor.

- Pagewise scroll: The Playhead travels from left to right, then advances to the next frame after it reaches the right edge.
- Centered scroll: The Playhead stays centered while the track underneath moves, so the current playback time remains centered.

Auto-scroll under playback preferences

Auto-scroll under playback preferences

Turn on the checkbox for Enable auto-scroll when starting playback or recording to store that preference.

Enable auto-scroll on start

Enable auto-scroll on start

Use Toggle Playback Auto-Scroll in the Editor panel to turn auto-scroll on or off. The control is in the upper-right corner of the Waveform Editor and the upper-left corner of the Multitrack Editor. Manually repositioning the playhead while auto-scroll is on automatically turns the feature off.

## Customizing workspaces — About workspaces

Adobe video and audio applications use a workspace model that can be customized while remaining consistent across products. Individual applications have their own panels, such as Project, Metadata, and Timeline, but panel movement and grouping work the same way.

The program's main window is the application window. A workspace is the arrangement of panels inside that window. In the default workspace, some panels appear in groups and others remain separate.

To tailor a workspace, arrange panels into the layout that fits your work style. While panels are moved, neighboring panels resize automatically within the window. Multiple custom workspaces can be created and saved for separate tasks, such as editing and previewing.

Note

Floating windows can be used to build a layout closer to earlier Adobe application workspaces, or to spread panels over separate displays.

Example workspace

A. Application window B. Grouped panels C. Individual panel

Example workspace

### Customizing workspaces — Choose a workspace

Several predefined workspaces are included with each Adobe video and audio application, with panel layouts optimized for particular tasks. Selecting one of these workspaces, or a saved custom workspace, redraws the current workspace to match it.

Open the project you want to edit, choose Window > Workspace, and then select the workspace you need.

### Customizing workspaces — Dock, group, or float panels

Panels can be docked together, placed into or removed from groups, or undocked so they float above the application window. While a panel is dragged, highlighted drop zones show the places where it can be moved. The selected drop zone controls the insertion point and whether the panel docks beside others or joins a group.

Docking zones

Docking zones appear at the edges of a panel, group, or window. Dropping a panel on a docking zone places it next to the existing group and resizes the groups to make room.

Dragging panel (A) onto docking zone (B) to dock it (C)

Dragging panel (A) onto docking zone (B) to dock it (C)

Grouping zones

Grouping zones are located in the center of a panel or group and along panel tab areas. Dropping a panel on one of these zones stacks it with the panels already there.

Dragging panel (A) onto grouping zone (B) to group it with existing panels (C)

Dragging panel (A) onto grouping zone (B) to group it with existing panels (C)

Dock or group panels

When the panel to dock or group is hidden, select it from the Window menu first.

Use one of these actions:

To move a single panel, drag the gripper area at the upper-left corner of the panel tab onto the highlighted target.

To move a whole group, drag the group gripper at the upper-right corner onto the highlighted target.

Drag group gripper to move entire group

Drag group gripper to move entire group

The application places the panel by docking or grouping it according to the chosen drop zone type.

Undock a panel in a floating window

After a panel is undocked into a floating window, more panels can be added to that window and it can be adjusted much like the application window. Floating windows are useful on a second monitor or for recreating workspace behavior from earlier Adobe applications.

Select the panel to undock. If it is not visible, choose it from the Window menu, then use one of these actions:

Choose Undock Panel or Undock Frame from the panel menu. Undock Frame separates the entire panel group.

Hold Ctrl (Windows) or Command (Mac OS), then drag the panel or group away from its current position. After release, a new floating window contains the panel or group.

Place the panel or group beyond the application window. If the application window is maximized, move the panel onto the Windows taskbar.

### Customizing workspaces — Resize panel groups

Resize icons appear when the pointer is placed over dividers between panel groups. Dragging one of these icons resizes every group that shares that divider. For example, with three vertically stacked panel groups, dragging the divider between the lower two changes those two groups while leaving the top group unchanged.

Note

To maximize quickly the panel under the pointer, press the accent key without pressing Shift. Press the accent key again to restore the panel to its previous size.

Use either of these actions:

To resize horizontally or vertically, place the pointer between two panel groups. The pointer changes to a double-arrow.

To resize both directions in one action, place the pointer where three or more panel groups meet. The pointer changes to a four-way arrow.

Hold the mouse button while dragging to change panel group sizes. Dragging divider between panel groups to resize them horizontally

A. Original group with resize icon B. Resized groups

Dragging divider between panel groups to resize them horizontally

### Customizing workspaces — Open, close, and scroll to panels

Closing a panel group in the application window lets the remaining groups expand into the freed space. Closing a floating window also closes the panels contained in it.

- To open a panel, choose that panel from the Window menu.
- Close a panel or window with Control-W (Windows), Command-W (Mac OS), or its Close button.
- In a narrow panel group, reveal every tab by dragging the horizontal scroll bar.

Click the tab for the panel you want to bring forward.

Place the cursor over the tab area and turn the mouse scroll wheel. Each scroll step brings another panel to the front.

Drag panel tabs horizontally when you want to reorder them.

- The scroll bar above a narrow panel group reveals hidden panels when dragged.

Drag horizontal scroll bar to see all panels in narrow group

Drag horizontal scroll bar to see all panels in narrow group

### Customizing workspaces — Working with multiple monitors

Multiple monitors provide more usable screen area. In a multimonitor setup, the application window can stay on one display while floating windows are placed on another, and that monitor arrangement is saved with the workspace.

### Customizing workspaces — Display the toolbar

The toolbar gives fast access to tools, the Workspace menu, and the controls that switch between the Waveform and Multitrack editors. Some tools exist only in one view, and some Waveform Editor tools appear only while using the spectral display.

The toolbar is docked directly below the menu bar by default. It can also be undocked, which turns it into the Tools panel; from there it behaves like other panels.

- To show or hide the toolbar, choose Window > Tools. A check mark next to Tools means it is visible.
- To detach the toolbar from its default position, drag the handle on the left edge to another place in the work area.
- To return the Tools panel to its default position, drag the Tools panel tab to the full-width drop zone just under the Adobe Audition menu area.

Available tools differ in each view.

A. Waveform Editor tools for spectral display B. Multitrack Editor tools

Available tools differ in each view.

### Customizing workspaces — Display the status bar

Across the bottom of the Adobe Audition work area, the status bar displays operational and file information. On the left, it reports the time needed to open, save, or process a file and shows the current transport state, such as Playing, Recording, or Stopped. On the right, it shows customizable status details.

Status bar

A. Time to open, save, or process file B. Video Frame Rate C. File Status D. Sample Type E. Uncompressed Audio Size F. Duration G. Free Space H. Detect Dropped Samples

Status bar

- To show or hide the status bar, choose View > Status Bar > Show. A check mark means the status bar is visible.

Show Data Under Cusror:

Shows frequency, time, channel, and amplitude details for the position under the cursor.

Video Frame Rate:

Shows the current frame rate and target frame rate for video files open in the Multitrack Editor.

File Status:

Reports when effects or amplitude adjustments are being processed.

Sample Type:

Shows sample details for the open waveform in the Waveform Editor or the open session file in the Multitrack Editor. For example, a 44,100 Hz, 16-bit stereo file appears as 44100 Hz - 16-bit - Stereo.

Uncompressed Audio Size:

Reports either the size the active audio file would have in an uncompressed format such as WAV or AIFF, or the combined size of a multitrack session.

Duration:

Displays the length of the active waveform or session. For example, 0:01:247 indicates a duration of 1.247 seconds.

Free Space:

Reports the available space on the hard drive.

Free Space (Time):

Shows remaining recording time according to the selected sample rate, using minutes, seconds, and thousandths of seconds. For example, if Adobe Audition records 8-bit mono audio at 11,025 Hz, the remaining time might show 4399:15.527 free. Switching recording options to 16-bit stereo at 44,100 Hz changes the remaining time to 680:44.736 free.

Tip: Free Space (Time) is hidden by default. To display it, right-click the status bar and choose Free Space (Time) from the pop-up menu.

Detect Dropped Samples:

Signals that samples were lost during recording or playback. If this indicator appears, consider recording the file again so audible dropouts are avoided.

### Customizing workspaces — Change interface colors, brightness, and performance

Choose Edit > Preferences > Appearance (Windows) or Audition > Preferences > Appearance (Mac OS).

Change any of the following settings, then click OK:

Presets

Applies, stores, or removes a saved combination of Colors and Brightness settings.

Colors

Click a swatch to set the color used for waveforms, selections, or the current-time indicator.

Brightness

Changes how light or dark panels, windows, and dialog boxes appear.

Use Gradients

When this option is deselected, panels, buttons, and meters appear without shadows and highlights.

The user interface appearance can be customized, including brightness choices for dialog boxes, panels, and windows.

Dialog boxes, panels, and windows can all have their brightness adjusted as part of user interface customization.

### Customizing workspaces — Save, reset, or delete workspaces

Save a custom workspace

While you modify a workspace, the application records the changes and keeps the latest layout. To keep a particular layout for later use, save it as a custom workspace. Saved custom workspaces are listed in the Workspace menu, where they can be selected again or reset.

Arrange frames and panels as needed, then choose Window > Workspace > New Workspace. Enter a workspace name and click OK.

Note

(After Effects, Premiere, Encore) When a project that uses a custom workspace is opened on another system, the application searches for a workspace with the same name. If no match is found, or if the monitor configuration differs, the current local workspace is used instead.

Reset a workspace

Restore the current workspace to its originally saved panel layout.

Use Window > Workspace > Reset workspace name.

Delete a workspace

Use Window > Workspace > Delete Workspace.

Select the workspace to remove, then click OK.

Note

The currently active workspace cannot be deleted.

### More like this

- Comparing the Waveform and Multitrack editors
- Basic components of the editors

## Connecting to audio hardware in Audition

### Connect audio hardware in Adobe Audition for accurate recording, monitoring, and playback.

Adobe Audition can work with many hardware inputs and outputs. Sound card inputs bring audio in from devices such as microphones, tape decks, and digital effects units. Sound card outputs send monitoring audio to destinations such as headphones and speakers.

A. Sound card inputs connect to sources such as microphones and tape decks. B. Sound card outputs connect to speakers and headphones.

### Configure audio inputs and outputs

When inputs and outputs are set up for recording and playback, Adobe Audition can work with these sound card driver types:

On Windows, professional cards are supported through ASIO drivers, while standard cards usually use MME drivers.

On macOS, CoreAudio drivers support standard cards as well as professional cards.

ASIO and CoreAudio are preferred because they reduce latency and improve performance. They also allow monitoring while recording and make volume, pan, and effects changes audible immediately while playback is running.

Go to Edit > Preferences > Audio Hardware (Windows) or Adobe Audition > Settings > Audio Hardware (macOS).

In the Device Class menu, select the driver for the sound card being used.

Select a Default Input and Default Output from that card.

Note

Defaults can be overridden for individual tracks in the Multitrack Editor.

For Clock, select the input or output that other digital audio hardware should synchronize to so samples stay aligned accurately.

For I/O Buffer Size (ASIO and CoreAudio) or Latency (MME), use the lowest value that does not cause audio dropouts. Because the best value depends on system speed, some testing may be needed.

Choose a Sample Rate for the audio hardware.

To tune ASIO and CoreAudio card performance, click Settings. Consult the sound card documentation for additional details.

Note

By default, Audition controls ASIO sound cards during playback or monitoring. To make the card available to another application, select Release ASIO Driver In Background. Audition continues controlling the card during recording so recordings do not stop unexpectedly.

### Default audio device switching (macOS only)

In the Audio Hardware preferences window, set Default Input to System Default to use the audio device currently selected by the operating system. As devices are connected or plugged in, this setting switches automatically.

Note: System Default is now the default choice for Adobe applications and is intended to support normal workflows for users who do not have dedicated audio interfaces.

Audio Hardware Preferences

Audio Hardware Preferences Note

Some devices, including Apple Airpods, might not support symmetrical sample rates. These devices often provide standard sample rates for output but very few microphone sample rates. Because that limitation could reduce playback quality, Adobe applications do not automatically switch to such an input and instead warn you about the issue. You can override the restriction by selecting that input manually in the Audio Hardware preferences.

### Apply machine-specific hardware settings for network users

In networked setups, Audition preferences are saved per user account. That user-specific storage is useful for editing, interface, and similar preferences. Audio hardware preferences usually need to stay tied to the physical machine instead, so Audition can access the inputs and outputs on the installed audio interface.

Go to Edit > Preferences > Audio Hardware (Windows) or Adobe Audition > Settings > Audio Hardware (macOS).

In the lower part of the Audio Hardware settings, enable Use machine-specific device defaults. Turn it off only when users carry an assigned audio interface between machines.

Note

To copy hardware settings from one computer to others instead, find and copy the MachineSpecificSettings.xml file.

### Assign file channels to inputs and outputs

Go to Edit > Preferences > Audio Channel Mapping (Windows) or Adobe Audition > Settings > Audio Channel Mapping (macOS).

For each file channel, use the triangles at the far right of the Input and Output lists to choose the hardware port.

Note

This procedure also defines the default outputs for the Mix track in the Multitrack Editor.
