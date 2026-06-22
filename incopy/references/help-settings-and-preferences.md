# Customizing Preferences Defaults, Default Keyboard Shortcuts, Recovery Undo, Usability Productivity ...

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Customizing preferences and defaults — About preferences; Default keyboard shortcuts; Recovery and undo — Recover documents; Usability and productivity; In depth: Custom solutions — Solution providers.

## Customizing preferences and defaults — About preferences

Preferences cover settings such as panel placement, measurement choices, and display behavior for graphics and typography.

Preferences and defaults differ by where they take effect. Certain InCopy features get their initial look and behavior from preference settings. Default settings are applied to InCopy documents.

Note

InCopy preference settings can be controlled completely by scripts. To distribute the same preference configuration across a group, create a script that sets those preferences, and have each user in the group run that script on their computer. Avoid copying one user's preference files onto another computer, because that can make the application unstable.

### Customizing preferences and defaults — Set defaults

When settings are changed while no documents are open, those changes become the defaults for new documents. If settings are changed while a document is open, only that document is affected.

Likewise, settings changed with no selected objects become defaults for newly created objects.

### Customizing preferences and defaults — Change default settings for new documents

Close every document. Change any menu items, panel settings, or dialog box settings. Note

When most documents use the same page size and language, set those defaults while no document is open. For example, close all documents before changing the default page size, then choose File > Document Setup and select the page size you want. For the default dictionary, close every document, choose Edit > Preferences > Dictionary on Windows or InCopy > Preferences > Dictionary on Mac OS, and choose an option from the Language menu.

### Customizing preferences and defaults — Specify default settings for new objects in a document

With a document open, choose Edit >Deselect All. Change any menu items, panel settings, or dialog box settings.

### Customizing preferences and defaults — Customize user interface scaling

Set InCopy scaling preferences to scale the user interface consistently according to screen resolution. User-interface elements scale with the setting, which improves viewing comfort on high-resolution monitors. When InCopy starts with new preference settings, it detects the screen resolution and applies UI scaling to match. Note: UI scaling is not available on low-resolution screens.

To configure user interface scaling:

- (Win) Choose Edit > Preferences > User Interface Scaling
- (macOS) Choose InCopy > Preferences > User Interface Scaling

In the User Interface Scaling dialog, use these options to customize the user interface:

- UI: Use the UI Sizing slider to raise or lower UI scaling as needed. High-resolution monitors generally require a higher scaling factor. A preview beside the slider shows the scaled UI. Restart InCopy to use the updated settings. If you restart later, the changes apply the next time InCopy launches. Note: The number of slider stops depends on screen resolution. Screens with higher resolutions show more stops.
- Scale Cursor Proportionately: When this option is enabled, which is the default ON state, cursor icons scale in proportion to the UI.
- Bounding Box Display Size: Use the slider to scale the bounding box display size.

For issues on scalable UI, see FAQ.

### Customizing preferences and defaults — Restore all preferences and default settings

Use one of these actions:

- (Windows) Start InCopy and press Shift+Ctrl+Alt. When InCopy asks whether to delete the preference files, click Yes.

(macOS) Hold Shift+Option+Command+Control while starting InCopy. Click Yes when InCopy asks whether to delete the preference files.

Note

This procedure returns the application to its default state by resetting all preferences and customizations made to InCopy.

### Customizing preferences and defaults — Reset warning dialog boxes

Open Edit > Preferences > General (Windows) or InCopy > Preferences > General (Mac OS).

Enable Reset All Warning Dialogs so every warning appears again, including warnings dismissed earlier. When a warning is shown, its option can be used to keep that warning from appearing again.

### More like this

- Adding text

## Default keyboard shortcuts

Adobe® InCopy® includes keyboard shortcuts for faster document work. In menus, many commands show their shortcuts beside the command name. You can work with the default InCopy shortcut set, the Microsoft® Word shortcut set, or a custom shortcut set you define.

Note

To list the active keyboard set, choose Show Set in the Keyboard Shortcuts dialog box. That option is useful when you need to print a reference copy of custom shortcuts.

### Keys for tools

This shortcut table is selective rather than exhaustive. It includes shortcuts missing from menus and tool-tip displays.

### Keys for navigating through documents

This shortcut table is selective rather than exhaustive. It includes shortcuts missing from menus and tool-tip displays.

Result

Windows

Mac OS

Go to first/last page (Layout view)

Ctrl+Shift+Page Up/ Page Down

Command+Shift+Page Up/Page Down

Go to previous/next page (Layout view)

Shift+Page Up/Page Down

Shift+Page Up/Page Down

Move right/left one character

Right Arrow/Left Arrow

Right Arrow/Left Arrow

Move up/down one line

Up Arrow/Down Arrow

Up Arrow/Down Arrow

Move right/left one word

Ctrl+Right Arrow/Left Arrow

Command+Right Arrow/ Left Arrow

Go to beginning of sentence forward/backward (Galley and Story views)

Ctrl+]/[

Command+]/[

Go to beginning/end of line

Home/End

Home/End

Go to previous/next paragraph

Ctrl+Up Arrow/Down Arrow

Command+Up Arrow/Down Arrow

Go to next story (Galley view)

Ctrl+Alt+]

Command+Option+]

Go to previous story (Galley view)

Ctrl+Alt+[

Command+Option+[

Go to beginning/end of story

Ctrl+Home/End

Command+Home/ End

Select one character to the right/left

Shift+Right Arrow/Left Arrow

Shift+Right Arrow/Left Arrow

Select one word to the right/left

Ctrl+Shift+Right Arrow/Left Arrow

Command+Shift+Right Arrow/Left Arrow

Select to the start/end of the line

Shift+Home/End

Shift+Home/End

Select current paragraph (Galley and Story views)

Ctrl+Shift+P

Command+Shift+P

Select sentence forward/backward (Galley and Story views)

Ctrl+Alt+Shift+Right Arrow/Left Arrow

Command+Option+Shift +Right Arrow/Left Arrow

Select one line above/below

Shift+Up Arrow/Down Arrow

Shift+Up Arrow/Down Arrow

Select one paragraph before/after

Ctrl+Shift+Up Arrow/ Down Arrow

Command+Shift+Up Arrow/Down Arrow

Select to beginning/end of story

Ctrl+Shift+Home/End

Command+Shift+Home/End

Delete word in front of insertion point (Galley and Story views)

Ctrl+Backspace or Delete

Command+Delete or Del (numeric keypad)

Delete current sentence (Galley and Story views)

Ctrl+Shift+Backspace or Delete

Command+Shift+Delete

Delete current paragraph (Galley and Story views)

Ctrl+Alt+Shift+Delete

Command+Option+Shift +Del on number pad

Recompose all stories

Ctrl+Alt+/

Command+Option+/

Toggle current and previous view

Ctrl+Alt+2

Command+Option+2

Go to Next window

Ctrl+F6

Command+F6

Go to Previous window

Ctrl+Shift+F6

Command+Shift+F6

Scroll up/down one screen

Page Up/Page Down

Page Up/Page Down

Go to first/last spread

Alt+Shift+Page Up/ Page Down

Option+Shift+Page Up/ Page Down

Go to first previous/ next spread

Ctrl+Alt+Page Up/Page Down

Command+Alt+Page Up/Page Down

Fit selection in window

Ctrl+Alt+=

Command+Option+=

Increase screen to 50%/ 200%/400%

Ctrl+5/2/4

Command+5/2/4

Access view percent field

Ctrl+Alt+5

Command+Option+5

| --- | --- | --- |

### Keys for moving and transforming graphics

This shortcut table is selective rather than exhaustive. It includes shortcuts missing from menus and tool-tip displays.

Result

Windows

Mac OS

Increase/Decrease size/scale by 1%

Ctrl+. [period] or, [comma]

Command+. [period] or, [comma]

Increase/Decrease size/scale by 5%

Ctrl+Alt+. [period] or, [comma]

Command+Option+. [period or, [comma]

Move selection\*

Left Arrow, Right Arrow, Up Arrow, Down Arrow key

Left Arrow, Right Arrow, Up Arrow, Down Arrow

Move selection by 1/10th\*

Ctrl+Shift+ Left Arrow, Right Arrow, Up Arrow, Down Arrow

Command+Shift+Left Arrow, Right Arrow, Up Arrow, Down Arrow

Move selection by 10 times\*

Shift+Left Arrow, Right Arrow, Up Arrow, Down Arrow

Shift+Left Arrow, Right Arrow, Up Arrow, Down Arrow

\*The movement amount comes from Edit > Preferences > Units & Increments (Windows) or Adobe InCopy > Preferences > Units & Increments (Mac OS).

| --- | --- | --- |

### Keys for working with text

This shortcut table is selective rather than exhaustive. It includes shortcuts missing from menus and tool-tip displays.

Result

Windows

Mac OS

Enables the Position tool in text

Esc

Esc

Normal horizontal scale

Ctrl+Shift+X

Command+Shift+X

Normal vertical scale

Ctrl+Alt+Shift+X

Command+Option+Shift+X

Increase/Decrease text point size

Ctrl+Shift+>/<

Command+Shift+>/<

Increase/Decrease text point size five times

Ctrl+Alt+Shift+>/<

Command+Option+Shift+ >/<

Increase/Decrease leading (horizontal text)

Alt+Up Arrow/Down Arrow

Option+Up Arrow/ Down Arrow

Increase/Decrease leading (vertical text)

Alt+Right Arrow/Left Arrow

Option+Right Arrow/Left Arrow

Increase/Decrease leading five times (horizontal text)

Ctrl+Alt+Up Arrow/Down Arrow

Command+Option+Up Arrow/Down Arrow

Increase/Decrease leading five times (vertical text)

Ctrl+Alt+Right Arrow/Left Arrow

Command+Option+Right Arrow/Left Arrow

Auto leading

Ctrl+Alt+Shift+A

Command+Option+Shift+ A

Increase/Decrease kerning/tracking

Alt+Right Arrow/Left Arrow

Option+Right Arrow/Left Arrow

Increase/Decrease kerning/tracking five times

Ctrl+Alt+Right Arrow/Left Arrow

Command+Option+Right Arrow/Left Arrow

Reset all manual kerning preferences (reset track to 0)

Ctrl+Alt+Q

Command+Option+Q

Increase/Decrease baseline shift (horizontal text)

Alt+Shift+Up Arrow/Down Arrow

Option+Shift+Up Arrow/Down Arrow

Increase/Decrease baseline shift (vertical text)

Alt+Shift+Right Arrow/Left Arrow

Option+Shift+Right Arrow/Left Arrow

Increase/Decrease baseline shift five times (horizontal text)

Ctrl+Alt+Shift+Up Arrow/Down Arrow

Command+Option+Shift+Up Arrow/Down Arrow

Increase/Decrease word space kerning

Ctrl+Alt+\ or Backspace

Command+Option+\ or Delete

Increase/Decrease word space kerning five times

Ctrl+Alt+Shift+\ or Backspace

Command+Option+Shift +\ or Delete

Align text left/center/right

Ctrl+Shift+L/C/R

Command+Shift+L/C/R

Justify with last line aligned left

Ctrl+Shift+J

Command+Shift+J

Justify all lines

Ctrl+Shift+F

Command+Shift+F

Insert right indent tab

Shift+Tab

Shift+Tab

Update missing font list

Ctrl+Alt+Shift+/

Command+Option+Shift+/

Toggle typographer’s quotes preference

Ctrl+Alt+Shift+'

Command+Option+Shift+'

Expand/Collapse all notes except current note

Alt+click expanded/collapsed note bookend

Option+click expanded/collapsed note bookend

| --- | --- | --- |

### Keys for working with type

This shortcut table is selective rather than exhaustive. It includes shortcuts missing from menus and tool-tip displays.

Result

Windows

Mac OS

Open Justification dialog box

Ctrl+Alt+Shift+J

Command+Option+Shift+J

Open Keep Options dialog box

Ctrl+Alt+K

Command+Option+K

Open Paragraph Rules dialog box

Ctrl+Alt+J

Command+Option+J

Redefine character style

Ctrl+Alt+Shift+C

Command+Option+Shift+C

Open Drop Caps and Nested Styles dialog box

Ctrl+Alt+R

Command+Option+R

Redefine paragraph style

Ctrl+Alt+Shift+R

Command+Option+Shift+R

Toggle all caps (on/off)

Ctrl+Shift+K

Command+Shift+K

Toggle small caps (on/off)

Ctrl+Alt+L

Command+Option+H

N/A

Superscript

Ctrl+Shift+=

N/A

Command+Shift+=

Subscript

Ctrl+Alt+Shift+=

Command+Option+Shift+=

Underline

Ctrl+Shift+U

Command+Shift+U

Strikethrough

Ctrl+Shift+/

Control+Command+Shift+/

Bold

Ctrl+B, Ctrl+Shift+B

Command+B, Command+Shift+B

Italic

Ctrl+Shift+I

Command+Shift+I

Normal

Ctrl+Shift+Y

Command+Shift+Y

Toggle align to grid (on/off)

Ctrl+Alt+Shift+G

Command+Option+Shift+G

Toggle auto-hyphenate (on/off)

Ctrl+Alt+Shift+H

Command+Option+Shift+H

| --- | --- | --- |

### Keys for tables

This shortcut table is selective rather than exhaustive. It includes shortcuts missing from menus and tool-tip displays.

Result

Windows

Mac OS

Clear cell

Backspace or Delete

Delete

Move to next cell

Tab, Left Arrow, or Right Arrow

Tab, Left Arrow, or Right Arrow

Move to previous cell

Shift+Tab

Shift+Tab

Move up/down through table cells

Up Arrow/Down Arrow

Up Arrow/Down Arrow

Move to first/last cell in column

Alt+Page Up/Page Down

Option+Page Up/Page Down

Move to first/last cell in row

Alt+Home/End

Option+Home/End

Move to first/last row in frame

Page Up/Page Down

Page Up/Page Down

Select cells above/below

Shift+Up Arrow/Down Arrow

Shift+Up Arrow/Down Arrow

Select cells to the right/left

Shift+Right Arrow/Left Arrow

Shift+Right Arrow/Left Arrow

Start row on next column

Enter (numeric keypad)

Enter (numeric keypad)

Start row on next frame

Shift+Enter (numeric keypad)

Shift+Enter (numeric keypad)

| --- | --- | --- |

### Other useful keyboard shortcuts

This shortcut table is selective rather than exhaustive. It includes shortcuts missing from menus and tool-tip displays.

Result

Windows

Mac OS

Close current document

Ctrl+Shift+W

Command+Shift+W

Close all documents

Ctrl+Alt+Shift+W

Command+Option+Shift+W

Save all documents

Ctrl+Alt+Shift+S

Command+Option+Shift+S

Expand all stories

Ctrl+Alt+Z

Command+Option+Z

Collapse all stories

Ctrl+Alt+Shift+Z

Command+Option+Shift+Z

Show/Hide all toolbars and panels

Ctrl+Alt+Tab

Command+Tab (Conflicts with Mac OS)

New default document

Ctrl+Alt+N

Command+Option+N

Display Links panel

Ctrl+Shift+D

Command+Shift+D

Activate last-used field in panel

Ctrl+Alt+` [accent grave]

Command+Option+` [accent grave]

Update beginning to cursor info

Ctrl+Alt+Shift+6

Command+Option+Shift+6

Update copyfit progress info

Ctrl+Alt+Shift+8

Command+Option+Shift+8

Update cursor to end info

Ctrl+Alt+Shift+7

Command+Option+Shift+7

Update selection info

Ctrl+Alt+Shift+5

Command+Option+Shift+5

Update whole story info

Ctrl+Alt+Shift+4

Command+Option+Shift+4

Force redraw

Shift+F5

Shift+F5

Toggle units

Ctrl+Alt+Shift+U

Command+Option+Shift+U

New text macro

Ctrl+Alt+F8

Command+Option+F8

Edit text macro

Ctrl+Alt+Shift+F8

Command+Option+Shift+F8

Insert macro text

Alt+Shift+F8

Option+Shift+F8

| --- | --- | --- |

### Keys for resolving conflicts between Mac OS 10.3x and 10.4

This shortcut table is selective rather than exhaustive. It includes shortcuts missing from menus and tool-tip displays.

### More like this

- Use keyboard shortcut sets

## Recovery and undo — Recover documents

InCopy uses automatic recovery to protect work when power or system problems interrupt a session. The recovered information is stored in a temporary file instead of in the original document file on disk. In ordinary use, no action is required for that temporary recovery data: document changes held there are written back to the original file when you use Save or Save As, or when InCopy closes normally. Recovery data matters only when the interruption prevents you from saving first.

Still, save frequently and keep backup copies so unexpected power or system failures do not put work at risk.

### Recovery and undo — Find recovered documents

Restart the computer, then open InCopy.

When recovered data is present, InCopy opens the recovered document automatically. The document window title adds [Recovered] after the filename, signaling unsaved edits restored by automatic recovery.

Note

If InCopy crashes while opening a document with recovered changes, assume the recovery data may be damaged.

Choose one of these options:

For Adobe InCopy® files linked to an InDesign publication, use File > Save.

For stand-alone InCopy files, use File >Save As, choose a location and new filename, and click Save. Save As writes a new file containing the recovered data.

To discard recovered changes and return to the last saved file version, use File > Revert Content.

Choose one of these options:

To keep the recovered data, use File >Save As, choose a location and new filename, and click Save. Save As preserves the recovered version that contains the recovery data; [Recovered] is removed from the title bar.

To throw away recovered changes and return to the latest document version explicitly saved to disk before the failure, close without saving and reopen the disk file, or use File > Revert.

### Recovery and undo — Change the location of recovered documents

Open Edit > Preferences > File Handling (Windows) or InCopy  > Preferences > File Handling (Mac OS). In Document Recovery Data, choose Browse (Windows) or Choose (Mac OS). Select the new location for the recovered document, then click Select (Windows) or Choose (Mac OS), followed by click OK.

### Recovery and undo — Undo mistakes

For long-running commands, you can stop the operation before it finishes, reverse recent edits, or return to a saved version. InCopy can undo or redo several hundred recent actions, with the exact depth depending on available RAM and the action types involved. That action history is cleared when you use Save As, close the document, or quit the program.

Choose one of these options:

To reverse the latest edit, use Edit > Undo [action]. Some operations, such as scrolling, cannot be undone.

To repeat an undone action, use Edit > Redo [action].

To remove every change made after the last save, use File > Revert (InDesign) or File > Revert Content (InCopy).

To exit a dialog box without committing edits, click Cancel.

## Usability and productivity

Enhanced layers

With InCopy's Layers panel, document control is more granular. Individual page items in a layer can be hidden or locked. See Use layers.

Save performance improvements

Multithreading makes closing documents and saving changes across multiple stories quicker. Track active processes in the Background Tasks panel (Window > Utilities > Background Tasks).

Tool Hints panel

The Tool Hints panel shows each hidden modifier-key behavior for the selected tool. See View tool hints.

Community Help

Adobe Community Help brings together full Adobe product documentation, community-created learning material, and additional Adobe.com learning resources. An AIR-based viewer is included; it shows current online Help when connected, or falls back to local Help without a web connection.

It also supports ratings from users and expert-moderated comments across Adobe documentation, knowledgebase articles, tutorials, and other material.

Edit Original for multiple selected items

When several placed images are selected on the page or in the Links panel, the Edit Original command opens each image in its own editing application. See Edit original artwork.

Miscellaneous enhancements

Zoom from dialog boxes

Keyboard shortcuts now zoom the document while a modal Layout view dialog box is active. Use Ctrl+- or Ctrl+= (Windows) or Command+- or Command +=.

Sticky Preview check boxes

After quit and restart, InCopy keeps the dialog-box state of the Preview checkbox.

Collate option

Collate in the Print dialog box reduces the need to sort printed pages by hand.

New default font

For new defaults, Minion Pro Regular becomes the crossplatform OpenType replacement for Times (Mac) and Times New Roman (Windows).

Collapse multiple links to same source

In InCopy CS5, repeated placements of the same image source appear as one collapsed row in the Links panel. Panel Options includes a new setting that turns that behavior off.

Menu commands changed or moved

Some menu commands moved to new locations.

Tip: Use Window > Workspace > [New in CS5] to highlight updated commands and added features.

InCopy CS4 command

InCopy CS5 command

View > Show/Hide Frame Edges, Show/Hide Assigned Frames, Show/Hide Hyperlinks

View > Extras > Show/Hide Frame Edges, Show/Hide Assigned Frames, Show/Hide Hyperlinks

Window > Type & Tables > Cell Styles / Character Styles / Paragraph Styles > Table Styles

Window > Styles > Cell Styles / Character Styles / Paragraph Styles / Table Styles

Window > Tags

Window > Utilities > Tags

Window > Scripts

Window > Utilities > Scripts

| --- | --- |

## In depth: Custom solutions — Solution providers

Remember that many systems integrators maintain offices, services, and solutions outside the country where their headquarters are based.

Go more in-depth:

Automation

Plug-ins
