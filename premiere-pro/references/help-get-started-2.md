# Keyboard Shortcuts, Set Up Directx Hdr For Windows

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: About keyboard shortcuts; Default keyboard shortcuts; Customize keyboard shortcuts; Copy keyboard shortcuts from one computer to another; Assign multiple keyboard shortcuts to a command; Find keyboard shortcuts; Remove keyboard shortcuts; Print keyboard shortcuts; Supported operating systems, GPUs, and displays for Directx HDR support; Set up your system for Directx HDR; Supported and unsupported features with Directx HDR in Premiere; Set up Premiere for Directx HDR.

## About keyboard shortcuts

### How Premiere shortcuts are used, customized, edited, and conflict-checked with the visual keyboard layout and drag-and-drop tools.

### Visual keyboard layout for assigning keyboard shortcuts

Premiere's visual keyboard layout shows which keys already have commands and which remain available. Hovering over a key reveals the full command name. When you select a modifier key, the layout displays shortcuts that require that modifier. You can get the same view by pressing the modifier key on your hardware keyboard.

Selecting a key lists every command assigned to it, including modifier-based assignments. Premiere reads your keyboard hardware and displays the matching layout. Unsupported keyboards use the U.S. English layout by default. Once you change a shortcut, the preset menu changes to Custom, and the customized set can be saved as a preset.

### Color coding

Premiere color-codes shortcut keys so different shortcut scopes are easier to distinguish.

- Purple keys: indicate application-wide shortcuts.
- Green keys: indicate panel-specific shortcuts.
- Purple and green keys: indicate commands assigned at both the application and panel levels.

Application shortcuts help reveal which keys are mapped to commands available throughout all Premiere panels.

Application shortcuts help reveal which keys are mapped to commands available throughout all Premiere panels.

### Application shortcuts and panel shortcuts

Premiere supports shortcut assignment and management for commands that work application-wide as well as commands tied to individual panels.

- Application shortcuts: function regardless of which panel has focus, except in some cases.
- Panel shortcuts: function only while the relevant panel has focus.
- Specific panels: let the same key serve different commands because certain shortcuts are limited to particular panels.
- Pop-up window: shows shortcuts for particular panels, including the timeline.
- Shortcut conflicts: occur when a panel shortcut overrides an application shortcut, preventing the application shortcut from working while that panel is focused.
- Command List: lets you search for commands and assign shortcuts by clicking the shortcut column and pressing keys, with modifiers included when needed.

Shortcut work can surface conflicts. Warnings and available controls appear in these situations:

- Application shortcut conflict: means another application command already uses that application shortcut.
- Panel shortcut conflict: means another command in the same panel already uses that panel shortcut.
- Panel overrides application shortcut: means the panel shortcut takes priority while that panel is active.
- Assign commands manually: lets you customize shortcuts by dragging commands onto keys in the keyboard layout or modifier list.

Use this view to find keys that run commands for a specific panel while that panel has focus.

Use this view to find keys that run commands for a specific panel while that panel has focus.

### Shortcut assignment using Drag-and-Drop

In Premiere, drag-and-drop assignment gives you a quick, flexible way to set shortcuts.

- Drag a command: move a command from the Command list onto a key in the Keyboard Layout.
- Assign with modifiers: while dragging, hold a modifier such as Shift, Ctrl, or Alt to assign that modified shortcut.
- Use the Key Modifier List: place a command on a modifier combination shown in the Key Modifier List.

### Conflict resolution

Premiere makes shortcut conflicts visible so you can locate and resolve them.

- Warning message: appears in the editor's lower panel.
- Undo and Clear options: activate so assignments can be reverted or removed.
- Conflict highlight: marks the conflicting command in blue. Select it to jump to that command in the list.
- Easy reassignment: change or update the shortcut without searching through menus.

## Default keyboard shortcuts

### Premiere keyboard shortcuts can improve editing efficiency.

Many commands include keyboard shortcut equivalents, reducing the amount of mouse use needed to complete tasks. Custom shortcut creation and editing are also available.

Keyboard shortcuts for Menu items

Keyboard shortcuts for Panel items

File

Audio Track Mixer

Edit

Effect Controls

Clip

Effects

Sequence

History

Markers

Media Browser

Graphics and Titles

Metadata

Window

Program Monitor

Projects

Timeline

| --- | --- |

### File menu

Commands

Windows

macOS

New Project …

Ctrl + Alt + N

Opt + Cmd + N

New Sequence…

Ctrl + N

Cmd + N

Open Project...

Ctrl + O

Cmd + O

Close

Ctrl + W

Cmd + W

Close Project

Ctrl + Shift + W

Shift + Cmd + W

Save

Ctrl + S

Cmd + S

Save As...

Ctrl + Shift + S

Shift + Cmd + S

Save a Copy...

Ctrl + Alt + S

Opt + Cmd + S

Import from Media Browser

Ctrl + Alt + I

Opt + Cmd + I

Import...

Ctrl + I

Cmd + I

Export Media

Ctrl + M

Cmd + M

Send to Media Encoder

Alt + Shift + M

Opt + Shift + M

Get Media File Properties for Selection...

Ctrl + Shift + H

Shift + Cmd + H

Exit

Ctrl + Q

Cmd + Q

| --- | --- | --- |

### Edit menu

Commands

Windows

macOS

Undo

Ctrl + Z

Cmd + Z

Redo

Ctrl + Shift + Z

Shift + Cmd + Z

Cut

Ctrl + X

Cmd + X

Copy

Ctrl + C

Cmd + C

Paste

Ctrl + V

Cmd + V

Paste Attributes

Ctrl + Alt + V

Opt + Cmd + V

Clear

Delete

Forward Delete

Ripple Delete

Shift + Delete

Shift + Forward Delete

Duplicate

Ctrl + Shift + /

Shift + Cmd + /

Select All

Ctrl + A

Cmd + A

Deselect All

Ctrl + Shift + A

Shift + Cmd + A

Find...

Ctrl + F

Cmd + F

Edit Original

Ctrl + E

Cmd + E

Keyboard Shortcuts

Ctrl + Alt + K

Cmd + Opt + K

| --- | --- | --- |

### Clip menu

Commands

Windows

macOS

Make Subclip...

Ctrl + U

Cmd + U

Audio Channels...

Shift + G

Shift + G

Audio Gain…

G

G

Speed/Duration...

Ctrl + R

Cmd + R

Insert

,

,

Overwrite

.

.

Enable

Shift + E

Shift + Cmd + E

Link

Ctrl + L

Cmd + L

Group

Ctrl + G

Cmd + G

Ungroup

Ctrl + Shift + G

Shift + Cmd + G

| --- | --- | --- |

### Sequence menu

Commands

Windows

macOS

Render Effects In to Out

Enter

Enter

Match Frame

F

F

Reverse Match Frame

Shift + R

Shift + R

Add Edit

Ctrl + K

Cmd + K

Add Edit to All Tracks

Ctrl + Shift + K

Shift + Cmd + K

Trim Edit

Shift + T

Cmd + T

Extend Selected Edit to Playhead

E

E

Apply Video Transition

Ctrl + D

Cmd + D

Apply Audio Transition

Ctrl + Shift + D

Shift + Cmd + D

Apply Default Transitions to Selection

Shift + D

Shift + D

Lift

;

;

Extract

'

'

Zoom In

=

=

Zoom Out

-

-

Next in Sequence

Shift + ;

Shift + ;

Previous in Sequence

Ctrl + Shift + ;

Opt + ;

Snap in Timeline

S

S

Make Subsequence

Shift + U

Cmd + U

Add new caption track

Ctrl + Alt + A

Opt + Cmd + A

Add caption at playhead

Ctrl + Alt + C

Opt + Cmd + C

Go to the next caption segment

Ctrl + Alt + Down

Opt + Cmd + Down

Go to the previous caption segment

Ctrl + Alt + Up

Opt + Cmd + Up

| --- | --- | --- |

### Markers menu

Commands

Windows

macOS

Mark In

I

I

Mark Out

O

O

Mark Clip

X

X

Mark Selection

/

/

Go to In

Shift + I

Shift + I

Go to Out

Shift + O

Shift + O

Clear In

Ctrl + Shift + I

Opt + I

Clear Out

Ctrl + Shift + O

Opt + O

Clear In and Out

Ctrl + Shift + X

Opt + X

Add Marker

M

M

Go to Next Marker

Shift + M

Shift + M

Go to Previous Marker

Ctrl + Shift + M

Shift + Cmd + M

Clear Selected Marker

Ctrl + Alt + M

Opt + M

Clear All Markers

Ctrl + Alt + Shift + M

Opt + Cmd + M

| --- | --- | --- |

### Graphics and Titles menu

Commands

Windows

macOS

New Layer

Text

Ctrl + T

Cmd + T

Rectangle

Ctrl + Alt + R

Opt + Cmd + R

Ellipse

Ctrl + Alt + E

Opt + Cmd + E

Arrange

Bring to Front

Ctrl + Shift + ]

Shift + Cmd + ]

Bring Forward

Ctrl + ]

Cmd + ]

Send Backward

Ctrl  + [

Cmd + [

Send to Back

Ctrl + Shift + [

Shift + Cmd + [

Select

Select Next Layer

Ctrl + Alt + ]

Opt + Cmd + ]

Select Previous Layer

Ctrl + Alt + [

Opt + Cmd + [

| --- | --- | --- |

### Window menu

Commands

Windows

macOS

Workspaces

All Panels

Alt + Shift + 1

Opt + Shift + 1

Assembly

Alt + Shift + 2

Opt + Shift + 2

Audio

Alt + Shift + 3

Opt + Shift + 3

Captions and Graphics

Alt + Shift + 4

Opt + Shift + 4

Color

Alt + Shift + 5

Opt + Shift + 5

Editing

Alt + Shift + 6

Opt + Shift + 6

Effects

Alt + Shift + 7

Opt + Shift + 7

Essential

Alt + Shift + 8

Opt + Shift + 8

Learning

Alt + Shift + 9

Opt + Shift + 9

Reset to Saved Layout

Alt + Shift + 0

Opt + Shift + 0

Maximize Frame

Shift +

Shift +

Audio Clip Mixer

Shift + 9

Shift + 9

Audio Track Mixer

Shift + 6

Shift + 6

Effect Controls

Shift + 5

Shift + 5

Effects

Shift + 7

Shift + 7

Media Browser

Shift + 8

Shift + 8

Program Monitor

Shift + 4

Shift + 4

Projects

Shift + 1

Shift + 1

Source Monitor

Shift + 2

Shift + 2

Timeline

Shift + 3

Shift + 3

| --- | --- | --- |

### Audio Track Mixer panel

Commands

Windows

macOS

Show/Hide Tracks

Ctrl + Alt + T

Opt + Cmd + T

Loop

Ctrl + L

Cmd + L

Meter Input(s) Only

Ctrl + Shift + I

Ctrl + Shift + I

| --- | --- | --- |

### Effect Controls panel

Commands

Windows

macOS

Remove Selected Effect

Backspace

Delete

Loop During Audio-Only Playback

Ctrl + L

Cmd + L

| --- | --- | --- |

### Effects panel

Commands

Windows

macOS

New Custom Bin

Ctrl + /

Cmd + /

Delete Custom Item

Backspace

Delete

| --- | --- | --- |

### History panel

Commands

Windows

macOS

Step Backward

Left

Left

Step Forward

Right

Right

Delete

Backspace

Delete

| --- | --- | --- |

### Media Browser panel

Commands

Windows

macOS

Open in Source Monitor

Shift + O

Shift + O

Select Directory List

Shift + Left

Shift + Left

Select Media List

Shift + Right

Shift + Right

| --- | --- | --- |

### Metadata panel

Commands

Windows

macOS

Loop

Ctrl + L

Cmd + L

Play

Space

Space

| --- | --- | --- |

### Program Monitor panel

Note

For graphic-layer nudging, keep the Program Monitor active and select one or more layers inside the same graphic; Premiere indicates the selection with a blue box.

Commands

Windows

macOS

Show Rulers

Ctrl + R

Cmd + R

Show Guides

Ctrl + ;

Cmd + ;

Snap in Program Monitor

Ctrl + Shift + ;

Shift + Cmd + ;

Lock Guides

Ctrl + Alt + Shift + R

Opt + Shift + Cmd + R

Nudge Selected Object up by five frames

Shift + Ctrl + Up

Shift + Cmd + Up

Nudge Selected Object right by five frames

Shift + Ctrl + Right

Shift + Cmd + Right

Nudge Selected Object left by five frames

Shift + Ctrl + Left

Shift + Cmd + Left

Nudge Selected Object down by five frames

Shift + Ctrl + Down

Shift + Cmd + Down

Nudge Selected Object up by one frame

Ctrl + Up

Cmd + Up

Nudge Selected Object right by one frame

Ctrl + Right

Cmd + Right

Nudge Selected Object left by one frame

Ctrl + Left

Cmd + Left

Nudge Selected Object down by one frame

Ctrl + Down

Cmd + Down

| --- | --- | --- |

### Project panel

Commands

Windows

macOS

New Bin

Ctrl + B

Cmd + B

Delete

Backspace

Delete

List

Ctrl + Page Up

Cmd + Page Up

Icon

Ctrl + Page Down

Cmd + Page Down

Hover Scrub

Shift + H

Shift + H

Delete Selection with Options

Ctrl + Delete

Cmd + Forward Delete

Extend Selection Down

Shift + Down

Shift + Down

Extend Selection Left

Shift + Left

Shift + Left

Extend Selection Right

Shift + Right

Shift + Right

Extend Selection Up

Shift + Up

Shift + Up

Move Selection Down

Down

Down

Move Selection End

End

End

Move Selection Home

Home

Home

Move Selection Left

Left

Left

Move Selection Page Down

Page Down

Page Down

Move Selection Page Up

Page Up

Page Up

Move Selection Right

Right

Right

Move Selection Up

Up

Up

Next Column Field

Tab

Tab

Next Row Field

Enter

Return

Open in Source Monitor

Shift + O

Shift + O

Previous Column Field

Shift + Tab

Shift + Tab

Previous Row Field

Shift + Enter

Shift + Return

Thumbnail Size Next

Shift + ]

Shift + ]

Thumbnail Size Previous

Shift + [

Shift + [

Toggle View

Shift + \

Shift + \

Zoom In

=

=

Zoom Out

-

-

| --- | --- | --- |

### Timeline panel

Commands

Windows

macOS

Clear Selection

Backspace

Delete

Decrease Audio Tracks Height

Alt + -

Opt + -

Decrease Video Tracks Height

Ctrl + -

Cmd + -

Increase Audio Tracks Height

Alt + =

Opt + =

Increase Video Tracks Height

Ctrl + =

Cmd + =

Nudge Clip Selection Left Five Frames

Alt + Shift + Left

Shift + Cmd + Left

Nudge Clip Selection Left One Frame

Alt + Left

Cmd + Left

Nudge Clip Selection Right Five Frames

Alt + Shift + Right

Shift + Cmd + Right

Nudge Clip Selection Right One Frame

Alt + Right

Cmd + Right

Ripple Delete

Alt + Backspace

Opt + Delete

Set Work Area Bar In Point

Alt + [

Opt + [

Set Work Area Bar Out Point

Alt + ]

Opt + ]

Show Next Screen

Page Down

Page Down

Show Previous Screen

Page Up

Page Up

Slide Clip Selection Left Five Frames

Alt + Shift + ,

Opt + Shift + ,

Slide Clip Selection Left One Frame

Alt + ,

Opt + ,

Slide Clip Selection Right Five Frames

Alt + Shift + .

Opt + Shift + .

Slide Clip Selection Right One Frame

Alt + .

Opt + .

Slip Clip Selection Left Five Frames

Ctrl + Alt + Shift + Left

Opt + Shift + Cmd + Left

Slip Clip Selection Left One Frame

Ctrl + Alt + Left

Opt + Cmd + Left

Slip Clip Selection Right Five Frames

Ctrl + Alt + Shift + Right

Opt + Shift + Cmd + Right

Slip Clip Selection Right One Frame

Ctrl + Alt + Right

Opt + Cmd + Right

| --- | --- | --- |

## Customize keyboard shortcuts

### Set up Premiere keyboard shortcuts by assigning commands, handling conflicts, and saving custom key sets for a personalized editing setup.

Adjust Premiere shortcuts so they line up with keystrokes you rely on in other apps. That reduces switching friction and keeps editing movements familiar across programs.

Premiere includes built-in shortcut sets, including layouts modeled on other Adobe apps and widely used software. Choose one from the Set menu in the Keyboard Customization dialog box.

To open Keyboard Shortcuts in Premiere:

- Windows: choose Edit > Keyboard Shortcuts.
- macOS: choose Premiere > Keyboard Shortcuts.

In the Commands dropdown menu, choose a panel or Application.

- Application: displays menu bar commands grouped by category.
- Panels: shows commands associated with panels and menus.

In the Command column, locate the command you plan to change.

Choose the shortcut field for that command, then press the shortcut you want to assign.

If another command already uses that shortcut, Premiere shows a warning.

When conflicts appear, resolve them:

- Select Undo to restore the shortcut to the command it originally belonged to.
- Select Clear to delete the shortcut assignment.

After assigning the shortcuts you want, select Save As, enter a name for the custom key set, then select Save.

Some shortcuts are reserved by the operating system and cannot be reassigned in Premiere. Avoid the numeric keypad plus (+) and minus (-) keys because Premiere uses them for relative timecode entry. The minus (-) key on the main keyboard remains available.

## Copy keyboard shortcuts from one computer to another

### Move custom Premiere keyboard shortcut sets between computers or folders with .kys files.

### Save a keyboard shortcut preset

Choose Edit > Keyboard Shortcuts.

Set up the shortcuts you need, select Save As, type a preset name, and select Save.

### Copy the preset to another computer

Preset file locations:

- Windows: Users\[user name]\Documents\Adobe\Premiere Pro\[version)\Profile-username\Win\
- macOS: Users/[user name]/Documents/Adobe/Premiere Pro/[version]/Profile-username/Mac/

Copy the .kys file to removable storage such as a USB thumb drive. On the new computer, place that .kys file in the matching preset folder.

## Assign multiple keyboard shortcuts to a command

### Manage several shortcuts for one Premiere command by assigning, adding, changing, or deleting them.

One command can have more than one keyboard shortcut. In the Keyboard Shortcuts dialog box, shortcuts are shown as editable buttons so you can create, revise, or remove assignments.

Select an existing shortcut when you want to add another. If the command has no shortcut yet, click in the Shortcut column and enter the assignment in the editable button Premiere creates.

Customize shortcuts for the Track Select Backward Tool.

Customize shortcuts for the Track Select Backward Tool.

To change a shortcut, select its text in the Shortcut column, then type the replacement shortcut. Premiere displays an alert if that shortcut is already assigned.

Edit or remove the shortcut key for the Selection Tool.

Edit or remove the shortcut key for the Selection Tool.

To remove a shortcut, select X in the editable shortcut button.

Delete the assigned shortcut (Shift+A) for the Track Select Backward Tool.

Delete the assigned shortcut (Shift+A) for the Track Select Backward Tool.

## Find keyboard shortcuts

### Find and tailor Premiere keyboard shortcuts for tools, buttons, and menu commands quickly

### Find shortcuts for tools or buttons

Place the pointer on the tool or button. Premiere displays a tooltip; when that item has a shortcut, the shortcut is shown after the tool description.

### Locate shortcuts for menu commands

Display the menu, then check the area on the command's right side. When a keyboard shortcut is assigned, Premiere lists it there.

### Check common shortcuts

For common shortcuts that are not shown through tooltips or menus, review the shortcut tables.

### View the list of default and custom shortcuts

- In Premiere (Windows), use Edit > Keyboard Shortcuts.
- In Premiere (macOS), use Premiere > Keyboard Shortcuts.

### Search for specific commands

In the Keyboard Customization dialog box, enter a command name in the search field to locate its shortcut quickly.

- In Premiere (Windows), choose Edit > Keyboard Shortcuts, then use the search field.
- In Premiere (macOS), choose Premiere > Keyboard Shortcuts, then use the search field.

## Remove keyboard shortcuts

### Remove single shortcuts or full shortcut sets in Premiere from the Keyboard Shortcuts menu.

Use Premiere's Keyboard Shortcuts menu to clear shortcuts you no longer need, or remove a whole set. Clearing unused or conflicting shortcuts keeps editing cleaner, reduces unintended triggers, and can make creative work faster.

Access the Keyboard Shortcuts menu:

- Windows: choose Edit > Keyboard Shortcuts.
- macOS: choose Premiere > Keyboard Shortcuts.

Choose the shortcut to remove, then select X to delete that individual shortcut.

To remove a key set, choose the set in Preset.

Select Delete > OK.

## Print keyboard shortcuts

### Copy customized Premiere keyboard shortcuts into another file for fast reference.

A searchable document helps many editors keep shortcuts handy. Premiere can copy the shortcut list so it can be pasted into a document.

From the Keyboard Shortcuts dialog box, copy the shortcut data and paste it into a text document or spreadsheet. This method also creates printable shortcut references for Final Cut Pro, Avid Media Composer, or custom sets.

Use the platform command:

- Windows: hold Ctrl + Shift, then choose Edit > Keyboard Shortcuts.
- macOS: hold Command + Shift, then choose Premiere > Keyboard Shortcuts.

Select Copy To Clipboard to place the shortcut list on the clipboard.

In a spreadsheet program or text editor, create a blank document.

Insert the shortcuts you copied into that document.

Save the file, then print it.

## Supported operating systems, GPUs, and displays for Directx HDR support

### Review the Windows system specifications needed for Premiere DirectX HDR support.

### Minimum requirements to run Directx HDR on Windows

Requirement type

Specification

Operating system

Windows 10, version 1709.

Display

GPU

- Nvidia GeForce 1000 series (Pascal) or newer.
- AMD Radeon RX 400 series (Polaris) or newer.
- Intel Core 7 series (Kaby Lake) or newer.

| --- | --- |
| | Use a display that supports the HDR10 standard. For the best experience, choose a display that's VESA DisplayHDR certified. |

## Set up your system for Directx HDR

### Verify DirectX HDR support on the system, then turn it on.

Right-click anywhere on your desktop, then select Display Settings.

Find Play HDR games and apps.

Switch it On to turn HDR on.

The system is now in advanced color mode.

Note

When Play HDR games and apps is missing, the hardware does not support HDR. If the system does not satisfy DirectX specifications, Premiere falls back to OpenGL display graphics.

## Supported and unsupported features with Directx HDR in Premiere

### Check which Premiere features are available or unavailable when DirectX HDR is active.

Features supported with DirectX HDR in Premiere

Features unsupported with DirectX HDR in Premiere

Program Monitor: shows HDR content accurately.

Export Window: cannot display HDR content.

Source Monitor: plays back HDR content.

Transit: sends HDR content to external devices.

| --- | --- |

## Set up Premiere for Directx HDR

### Configure GPU acceleration and turn on display color management in project settings.

GPU acceleration can make editing faster, increase performance, and help the display present color accurately.

Open Premiere.

Go to File > Project Settings > General.

In the Renderer drop-down, select Mercury Playback Engine GPU Acceleration (OpenCL).

Choose OK.

Go to Edit > Preferences > Color.

Select Display Color Management.

Choose OK.
