# Set Up Toolbars Panels, Settings And Preferences

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Customize toolbar; Tooltips overview; Create tool presets; Use spring-loaded shortcuts; Use Undo and Redo commands; History panel settings; Set History Log preferences; View history logs; Use snapshots in the History panel; Paint with image states from the History panel; Manage image states; Restore parts of an image to a previous state; Adjust preferences; Backup and restore preferences; Reset preferences; View keyboard shortcuts; Change tool pointers.

## Customize toolbar

Customize the toolbar in Adobe Photoshop so tools and tool groups are arranged for your workflow.

The Photoshop toolbar gives direct access to common tools. You can add tools, remove them, and change their order to fit how you work. A customized toolbar can make the workspace more efficient.

Choose Edit > Toolbar. Photoshop opens the Customize toolbar dialog box.

Inside the dialog box, place related tools in groups so they are easier to reach:

- Reorganize the toolbar by dragging tools and groups.
- Put tools you use less often in Extra Tools.

Choose which tools stay visible and which tools move to Extra Tools to customize the workspace.

Customize the workspace by deciding which tools remain on the toolbar and which go into Extra Tools.

Select Toggle to make Extra Tools available from the final slot in the toolbar.

Use Save Preset to store the custom toolbar layout.

Use Load Preset to open a custom toolbar saved earlier.

Use Restore Defaults to return the toolbar to its default state.

Use Clear Tools to send all tools to Extra Tools.

Use Done to keep your changes, or use Cancel to discard them.

## Tooltips overview

Review what tooltips do in Adobe Photoshop and how to switch them on or off.

Tooltips give short help for tools and features. Hovering over a tool, panel option, or icon displays a tooltip with a brief description.

Photoshop includes two tooltip styles.

- Standard tooltips: show the tool name and keyboard shortcut.
- Rich tooltips: show a description plus a short video demonstrating the tool.

### Manage tooltip settings

Photoshop shows tooltips by default. You can choose whether standard tooltips or rich tooltips appear.

- To disable tooltips, open Edit > Preferences > Tools, then clear Show Tooltips and Show Rich Tooltips.
- To enable tooltips, open Edit > Preferences > Tools, then turn on Show Tooltips and Show Rich Tooltips.

## Create tool presets

Create custom tool presets in Adobe Photoshop so saved tool settings are ready to reuse quickly in later projects.

In Photoshop, tool presets store preferred settings for tools including brushes and selection tools, then make those settings easy to call up again. Using presets supports consistent work habits and fast access to customized tool configurations.

Choose a tool, then configure the Options bar with the settings that should become part of the tool preset.

Open Window > Tool Presets to show the Tool Presets panel.

Tip

The Tool Presets dropdown menu beside the tool at the upper-left of the Options bar provides another way to reach presets.

Select Create New Tool Preset icon.

Tool presets in Photoshop keep favorite settings available, make them quick to apply, and help simplify repeated workflows.

Saving Photoshop tool presets lets common settings be reused fast and keeps editing routines more consistent.

Type a name for the tool preset, then select OK. The Tool Presets panel now lists the new preset.

Choose a preset when you want the selected tool to take on the saved settings right away.

### Customize tool presets

Open the menu at the upper-right of the Tool Presets panel.

When you need to change how the preset list is shown, choose one of these options:

- Show All Tool Presets: shows every preset currently loaded.
- Sort by Tool: organizes presets according to their tool category.
- Show Current Tool Presets: limits the view to presets for the active tool.
- Text Only, Small List, or Large List: controls the visual presentation used for presets.

## Use spring-loaded shortcuts

Use spring-loaded tool shortcuts in Adobe Photoshop to make edits while temporarily switching tools.

Photoshop spring-loaded tool shortcuts work by holding a tool shortcut key only while the temporary tool is needed. After the key is released, Photoshop switches back to the previously active tool automatically. The behavior is useful when making quick adjustments and can make editing feel more fluid.

### Switch tools with shortcut keys

Pick a primary tool from the Tools panel, for example the Brush tool.

Hold the shortcut key for another tool when you need temporary access to it.

Tip

For example, while using the Brush tool, hold V to use the Move tool briefly, then release V to go back to the Brush tool.

Make edits with the temporary tool while continuing to hold its shortcut key.

Let go of the shortcut key to return to the primary tool.

### Customize spring-loaded shortcut timing

Photoshop lets you control the delay before a held shortcut changes to its spring-loaded tool.

Go to Edit > Preferences > Tools (Windows) or Photoshop > Preferences > Tools (macOS).

Within that Preferences dialog box, verify that Spring-loaded Tool shortcuts is selected. This option is enabled by default.

Move the slider to set the delay time. Lower delay values make Photoshop switch tools sooner after the key is pressed. The default is 200 milliseconds.

Adjusting spring-loaded shortcut timing can make temporary tool switching faster and better suited to your editing rhythm.

Set the spring-loaded tool shortcut delay to make tool changes happen at the pace your workflow needs.

Select OK to keep the updated setting.

## Use Undo and Redo commands

Reverse or reapply recent work in Adobe Photoshop by using the Undo and Redo commands.

Undo takes back the most recent action, and Redo applies again an action that was just undone. Use these commands to fix mistakes, try alternate edits, and move through work more efficiently.

### Undo and redo actions

Use Ctrl + Z (Windows) or Command + Z (macOS) when you need to undo the most recent action.

Use Shift + Ctrl + Z (Windows) or Shift + Command + Z (macOS) to apply again the action you just reversed.

Choose File > Revert when you want to discard every change made since the file was last saved.

Open Edit > Undo or Edit > Redo to see the exact action name displayed with the command, such as Edit > Undo Typing or Edit > Redo Typing.

### Switch to legacy undo shortcuts

To bring back the older Photoshop undo behavior:

Open Edit > Keyboard Shortcuts and Menus.

Select Use Legacy Undo Shortcuts.

Select OK, then restart Photoshop.

## History panel settings

Use History panel settings in Adobe Photoshop to control image states, configure snapshots, and support a more flexible editing workflow.

The Photoshop History panel gives quick access to recent image states from the active session. Separate states are recorded for individual changes such as selections, paint strokes, and rotations. Selecting a state returns the image to the appearance it had when that change was applied, and you can continue working from there.

The History panel also supports deleting states and generating a new document from a chosen state or snapshot.

During a Photoshop session, use the History panel to inspect, restore, and manage recent editing steps.

The History panel helps you review recent edits, return to earlier states, and control session history in Photoshop.

For effective use of the History panel (Window > History), follow recommended practices and review the available customization settings.

### Best practices

- Use snapshots to keep important session states available.
- Set the number of history states under Preferences > Performance according to the needs of your workflow. The History panel shows 20 states by default. For more complex editing, the value can be raised to 1,000 states.
- Select Allow Non-Linear History to continue editing from any state while keeping later states available.
- Follow the chronological order to track edits efficiently. Earlier changes appear first, and newer changes are added as work continues.
- Use Undo to bring back deleted states after you edit from an earlier state. Learn more about the Undo and Redo commands overview.

Tip

When the document closes, all history states and snapshots are cleared. The initial state snapshot appears first in the History panel. Dimmed states indicate edits that will be removed if you keep working from the selected state.

### Menu options

Use the History Options dialog box to change history-state and snapshot behavior. Open it from the History panel through Menu > History Options.

## Set History Log preferences

Customize History Log preferences in Adobe Photoshop when you need edit tracking saved to metadata, to a text file, or to both destinations.

Photoshop's History Log records image edits, making it useful for personal notes, client records, and legal documentation. You can decide where the information is stored and how detailed the log should be.

### Configure History Log settings

On Windows, go to Edit > Preferences > History & Content Credentials. On macOS, go to Photoshop > Preferences > History & Content Credentials.

Select the History Log checkbox to enable logging.

Choose Metadata, Text File, or Both to set the destination for the saved history log.

If Text File or Both is selected, use Choose to define the log file's location and name. Specify where the log file should be stored and what it should be called.

Configure Photoshop History Log preferences so edit tracking matches your workflow and documentation requirements.

Set up Photoshop History Log options in the way that best supports the records you need to keep.

From the Edit Log Items menu, choose the amount of detail to record:

- Sessions Only: records when Photoshop opens or closes.
- Concise: includes History panel entries together with session details.
- Detailed: records Actions panel entries for full edit tracking.

Select OK to apply the settings.

After setup is complete, Photoshop records edits according to the selected preferences.

Note

For better log-file security, save the edit log in metadata and digitally sign it.

Caution

Detailed logs can make files larger and may reduce performance.

## View history logs

Review Adobe Photoshop edit history by opening logs saved in file metadata or in a text file.

History logs can help you inspect changes, evaluate the workflow, or keep records for personal, client, or legal needs.

In Photoshop, open the file whose history information you want to review.

Choose File > File Info.

Open the Photoshop tab.

Find the History section, then review the metadata logs there.

Tip

For text file logs, go to the saved location you chose earlier and open the log file in any text editor.

## Use snapshots in the History panel

Save different Adobe Photoshop image states by using snapshots in the History panel.

Photoshop snapshots are temporary saved versions of an image from particular editing stages. They stay available in the History panel for the current session until the document is closed. Snapshots make it easy to compare versions, return to a chosen state, or test edits without enlarging the file or creating additional files.

### Create new snapshots

Open Window > History.

In the History panel, choose Create New Snapshot.

Type a descriptive snapshot name in the New Snapshot dialog box.

From the From dropdown menu, select what the snapshot should include:

- Full Document: stores every layer in the image.
- Merged Layers: combines all layers in the image.
- Current Layer: stores only the layer that is currently selected.

Note

If you select a snapshot and then alter the image, all states currently shown in the History panel are deleted unless Allow Non-Linear History option is selected.

Select OK to make the snapshot.

Note

When Automatically Create New Snapshot When Saving is enabled in History Options, saving the file creates a snapshot.

### Snapshot actions

These snapshot actions are available from the History panel:

- Apply: choose a snapshot to move the image to that state.
- Rename: double-click the snapshot and type a new name.
- Delete: choose a snapshot, then select Delete current state. Confirm the deletion.
- Create file: select Create a new document from current state to produce a new file.

The History panel lets you apply snapshots, rename them, delete them, or create a new document from them.

Use snapshots in the History panel when you need to apply, rename, remove, or turn a state into a separate document.

## Paint with image states from the History panel

Paint selected parts of an Adobe Photoshop image from an earlier state or snapshot with the History Brush tool.

The History Brush tool can selectively paint using a previous state or snapshot. It samples an earlier version of the image and applies that sampled content only where you paint.

Use it when specific areas should return to an earlier appearance while other edits remain in place. For example, after applying a filter to the full image, you can restore the original look for selected elements.

Unless you use a merged snapshot, the tool paints from the same layer in the chosen state onto the same layer in the current state. The Art History Brush tool can also paint from history to create special effects in Photoshop.

Select Window > History to display the History panel.

In the History panel, click the left column beside the state or snapshot you want as the History Brush source. Photoshop marks that history state with a brush icon.

Select the History Brush tool (Y).

Use the Options bar to adjust tool settings such as Size and Hardness for the result you want.

Drag in the image to paint with the History Brush tool.

Use the History Brush tool when painting from image states stored in the History panel.

The History panel can provide image-state sources for painting with the History Brush tool.

## Manage image states

Use the History panel to make new documents, return to earlier edits, or delete changes you no longer want.

In Photoshop, the History panel provides fast access to recent image states. Each change is saved automatically as its own history state. You can go back to any state and continue editing from that point.

Before you begin

Open Window > History to show the History panel.

### Create documents from image states

Any image state or snapshot can be used to create a new document.

Choose the state or snapshot you want in the History panel.

At the lower-right of the History panel, select Create a new document from current state.

Create separate versions by making a new document from any state or snapshot.

Use any state or snapshot as the basis for a new document when you need to preserve another version.

To replace what is in an open document, drag a state onto that document so its content updates.

The new document contains only the Duplicate State in the History panel.

### Revert to previous image states

In the History panel, choose the state name. Photoshop restores the image to the appearance it had when that change was first created.

To move one state forward or backward, use Step Forward or Step Backward from the History panel menu.

Tip

Edit > Step Backward and Edit > Step Forward also move through image states.

Note

File > Revert restores the most recently saved version. Photoshop adds Revert to the History panel as a history state, so you can undo it.

### Delete image states

Choose a state name in the History panel.

Use Delete current state in the lower-right corner to remove that edit along with every later edit.

When the confirmation dialog appears, choose Yes to delete the states or No to leave them intact.

To remove every history state while leaving the image unchanged, choose Clear History from the History panel menu.

For a memory-clearing purge, hold Alt (Windows) or option (macOS) while choosing Clear History.

Edit > Purge > Histories removes history states from every open document.

## Restore parts of an image to a previous state

Adobe Photoshop can bring selected image areas back to earlier states without reversing later edits across the whole document.

Use tools such as the History Brush tool, Eraser tool, and Fill tool when only certain parts of an image need restoration. They can recover texture or detail while keeping broader improvements in place, which keeps the edit flexible and the workflow efficient.

### Restore with the History Brush tool

Open the History panel with Window > History.

Beside the state or snapshot you want, choose the box labeled Sets the source for the History Brush so that state becomes the restore source.

Choose the History Brush tool.

Brush over the parts of the image that should return to that source state. For more detail on painting from image states, use the History panel information.

### Restore with the Eraser tool

Choose the Eraser tool.

In the Options bar, enable Erase To History.

Drag across the area that should be restored. For more detail, review how the Eraser tool removes parts of an image.

### Restore with the Fill tool

Make a selection around the area you want to restore.

Choose Edit > Fill.

From the Contents dropdown menu, choose History.

Choose OK to apply the restore to the selected area.

Tip

In History Options, enable Automatically Create First Snapshot to keep the starting state available.

## Adjust preferences

In Adobe Photoshop, the Preferences dialog lets you change and save app behavior for display, file saving, performance, presets, plug-ins, and related settings.

Photoshop records settings when the app closes normally; a force quit or crash can discard unsaved preference changes.

Preferences from an earlier version migrate to an updated version by default, and uninstalling a version lets you decide whether to keep or remove those settings.

Open the Preferences dialog with Edit > Preferences (Windows) or Photoshop > Settings (macOS).

Tip

The shortcut Ctrl + K (Windows) or Command + K (macOS) opens the same dialog.

Choose a Preferences category such as General, Interface, Workspace, or another listed category, then adjust its settings.

Customize Photoshop settings in the Preferences panel.

Customize Photoshop settings in the Preferences panel.

Choose OK.

## Backup and restore preferences

Backup and restore preferences help move settings to another computer or recover a familiar setup quickly after reinstalling Adobe Photoshop.

Create backups of customized Photoshop preference files so crashes or updates do not wipe out your configuration.

Photoshop keeps personalized settings in preference files, and crashes or updates can damage or remove them. Backing up those files makes it easier to restore your workspace, keyboard shortcuts, and other custom settings whenever needed.

### Backup preferences

Quit Photoshop completely.

Find the Preferences folder here:

- macOS: Users/<user name>/Library/Preferences/Adobe Photoshop <version> Settings
- Windows: Users/<user name>/AppData/Roaming/Adobe/Adobe Photoshop <version>/Adobe Photoshop <version> Settings

Copy the Adobe Photoshop <version> Settings folder to a different location.

Name the backup with the date and Photoshop version so you can identify it later.

### Restore preferences from backup

Quit Photoshop completely.

Find the Preferences folder here:

- macOS: Users/<user name>/Library/Preferences/Adobe Photoshop <version> Settings
- Windows: Users/<user name>/AppData/Roaming/Adobe/Adobe Photoshop <version>/Adobe Photoshop <version> Settings

Rename or move the current Adobe Photoshop <version> Settings folder so it remains available as a temporary backup.

Copy the earlier backup of the Adobe Photoshop <version> Settings folder into this location.

Start Photoshop and confirm that the restored preferences are in effect.

Note

On macOS, Finder hides the user Library folder by default. To open it, hold Option while using the Go menu in Finder, then choose Library.

Tip

Keep a recurring backup routine for preferences, especially before major updates or after substantial workspace or keyboard shortcut changes.

## Reset preferences

Returning Adobe Photoshop preferences to their defaults can help diagnose problems and make work faster again.

If Photoshop shows unexpected behavior or performance trouble, a preference reset often helps because it restores the application to its default state.

Preference files store many Photoshop settings, including display options, file-saving options, performance settings, and tool presets. Damage in those files can produce unexpected behavior. Before resetting them, back up the files so customized settings can be restored later if needed.

### Reset preferences using keyboard shortcut

Quit Photoshop completely.

Hold Alt + Ctrl + Shift (Windows) or Option + Command + Shift (macOS), then launch Photoshop.

When Delete the Adobe Photoshop Settings file? appears, choose Yes.

Photoshop opens with default preferences.

### Reset preferences using the Preferences panel

In Photoshop, choose Edit > Preferences > General (Windows) or Photoshop > Settings > General (macOS).

Choose Reset Preferences On Quit.

Choose OK.

Quit Photoshop. On the next launch, the application loads default preferences.

### Manually reset preferences

Quit Photoshop completely.

Find the stored preference files here:

- Windows: C:\Users<username>\AppData\Roaming\Adobe\Adobe Photoshop <version>\Adobe Photoshop [version] Settings
- macOS: /Users/<username>/Library/Preferences/Adobe Photoshop <version> Settings

Copy the Adobe Photoshop <version> Settings folder to another location.

Remove or rename the original Adobe Photoshop <version> Settings folder.

Start Photoshop. It creates fresh preference files automatically with default settings.

## View keyboard shortcuts

Open Adobe Photoshop's full keyboard shortcut list when you want faster access to commands and a more efficient workflow.

Key combinations can make routine work much quicker because common actions do not require menu or panel navigation.

Choose Edit > Keyboard Shortcuts.

Tip

Alternative shortcut: Alt + Shift + Ctrl + K (Windows) or Option + Shift + Command + K (macOS).

Inside Keyboard Shortcuts and Menus, set Shortcuts For to the shortcut group you want to inspect: Application Menus, Panel Menus, or Tools.

View the default keyboard shortcuts in the Keyboard Shortcuts and Menus dialog.

View the default keyboard shortcuts in the Keyboard Shortcuts and Menus dialog.

Scan the list for the command or tool shortcut you need.

Choose OK.

## Change tool pointers

For better accuracy and control, change tool cursor display among standard icons, precise crosshairs, and brush-size indicators.

Photoshop provides multiple cursor styles so different tools can be used more precisely. A tool pointer includes a hotspot, the image location where the action or effect starts. Adjusting the cursor display helps make that hotspot easier to see and improves placement accuracy.

Most tools use their Tools panel icon as the default pointer. For detailed edits, a more exact cursor can be useful because it shows where the change will land.

Choose Edit > Preferences > Cursors (Windows) or Photoshop > Settings > Cursors (macOS).

Under Painting Cursors, choose one of these options:

- Standard: shows pointers as tool icons.
- Precise: shows pointers as cross hairs.
- Normal Brush Tip: shows an outline for about 50% of the area affected by the tool.
- Full Size Brush Tip: shows an outline for nearly 100% of the area affected by the tool.
- Show Crosshair in Brush Tip: places cross hairs in the middle of the brush shape.
- Show Only Crosshair While Painting: can make large-brush painting faster.

Change the tool pointers from the Cursors section of the Preferences panel.

Change the tool pointers from the Cursors section of the Preferences panel.

For Other Cursors, choose Standard or Precise.

Choose a color from Brush Preview.

Choose OK to apply the changes.

Tip

To make the brush cursor larger or smaller, hold Alt + right-click mouse (Windows) or Control + Option (macOS) and move horizontally.

To change brush hardness, hold Alt + right-click mouse (Windows) or Control + Option (macOS) and move vertically.
