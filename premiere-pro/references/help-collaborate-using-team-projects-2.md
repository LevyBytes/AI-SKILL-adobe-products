# Specify Auto Save Cache Location, Sequence Locking, Sequence Locking For Offline Editing, View Auto Saves ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Specify Auto Save cache location; Sequence Locking; Sequence Locking for offline editing; View auto saves; Convert Premiere projects to Team Projects.

## Specify Auto Save cache location

### Setting where auto-save cache files are stored for Team Projects.

In a Team Project, each edit is saved locally without manual action. The project is also synced automatically to Adobe Cloud service.

You can choose a local system location for the Team Project Auto Save cache. As you make changes, Team Project auto-saves in the background to that chosen location.

Note

Local projects are automatically saved according to the time interval set by Automatically Save Every under Preferences. Team Project is different because every edit is saved. You do not need to manually save a Team Project after each edit or worry that recent changes were missed.

From the menu bar, open Premiere > Settings (macOS) or Preferences (Windows) > Auto Save.

In the Team Projects section, select Browse and choose the desired location on your system.

Set a location where each project edit is automatically saved locally.

Set a location where each project edit is automatically saved locally.

Afterward, the specified change applies to the next new Team Project you create.

Auto save files use the .tpr format and cannot be opened directly.

## Sequence Locking

### Sequence Locking and offline editing for conflict-free video collaboration in Team Projects.

Sequence Locking is a key video-editing concept for keeping work consistent and avoiding conflicts when several editors share a project. It is especially helpful in collaborative editing workflows.

During edit operations on a locked sequence, including trim, move, delete, and more, other collaborators have view-only access to earlier sequence versions until your changes are published.

Sequence Locking also displays visual indicators for collaborators in multiple panels, showing who is editing the sequence and which changes have been published. The Timeline panel, Project panel, and Program Monitor show these cues.

When you edit a sequence, other collaborators can play, seek, or scrub through it, duplicate it, and copy clips from it.

## Sequence Locking for offline editing

### Managing sequence locking for offline editing and conflict-free Team Projects collaboration.

If internet connectivity is lost while you edit a sequence in Team Projects, the Project panel shows disconnected asset status in addition to connectivity visual cues. Sequence Locking is also disabled, so another collaborator may lock the sequence and begin editing it.

During offline editing with Sequence Locking, the Project panel shows disconnected asset status.

During offline editing with Sequence Locking, the Project panel shows disconnected asset status.

You can keep working in disconnected status, but publishing is unavailable and your edits are stored locally in a duplicate sequence. After the connection returns, Premiere notifies you of the next actions based on whether a conflict is possible.

- No conflicts: After you reconnect to the internet, if no other person edited the sequence, you can update the changes made offline and continue editing that sequence.
- Conflict: If you edited an unlocked sequence while offline and another collaborator edited that same sequence at the same time, reconnecting to the internet triggers a conflict notification. Use the Duplicate option to duplicate the sequence and continue with unpublished changes.

When two or more collaborators edit the same sequence offline, the first collaborator to reconnect is the only one offered the chance to publish changes to the contentious sequence. Other collaborators are warned about the conflict after they reconnect, and their work is automatically saved to a new sequence.

## View auto saves

### Viewing auto-saved versions, saved-edit timing, and earlier versions.

With Auto Saves, you can review all auto saves, check the save time for edits, return to an earlier auto save, or make a Team Project from an auto-saved edit that already exists.

Select Edit > Team Project > Browse Auto-Saves to review personal auto saves for the Team Project that is currently open.

Alternatively, select the Team Project name in the Premiere header bar, then choose Version History from the dropdown menu.

Use the Team Project name in the Premiere header bar and Version History to show auto-saved versions in the Media Browser panel.

Use the Team Project name in the Premiere header bar and Version History to show auto-saved versions in the Media Browser panel.

Another path is to right-click Team Project under Creative Cloud and choose the Team Project Auto-Saves... menu item, which lists your Team Project auto saves. The Team Project Auto-Saves vertical slider also lets you move through them.

Select Make Auto-Save the Latest to make an earlier auto save current and undo a recent change.

To make Team Project from an auto save, right-click the Team Project under Creative Cloud, choose New Team Project From Auto-Save, then select OK. The dialog that appears:

- Automatically fills in the current Team Project name.
- Adds an auto-saved copy suffix.
- Carries over the collaborator list from the original Team Project.

Use New Team Project from the Auto-save to create a new Team Project from an auto-saved version.

Use New Team Project from the Auto-save to create a new Team Project from an auto-saved version.

## Convert Premiere projects to Team Projects

### Converting a Premiere project into a Team Project.

By converting a Premiere project for real-time collaboration, multiple users can work on the same project at once from different locations. Team members can edit, add effects, and review changes immediately, which improves productivity and keeps everyone aligned. The workflow also avoids repeated file transfers and manual version control.

Open the Premiere project, then select Edit > Team Project > Convert Project to Team Project to convert it to Team Projects.

Use Team Project under the Edit menu to convert a Premiere project to Team Projects.

Use Team Project under the Edit menu to convert a Premiere project to Team Projects.

Enter a name for the Team Projects, add a description, and begin adding collaborators.

Select OK to finish. Collaborators receive a notification in their Creative Cloud Desktop app, and the invite also appears in the Manage Team Projects dialog under the Invites tab.
