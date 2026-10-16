# After Effects 14.2 (CC 2017.1) (April 2017)

- Added: TextDocument.leading

- Added: Project.newTeamProject()
- Added: Project.openTeamProject()
- Added: Project.shareTeamProject()
- Added: Project.syncTeamProject()
- Added: Project.closeTeamProject()
- Added: Project.convertTeamProjectToProject()
- Added: Project.listTeamProjects()
- Added: Project.isTeamProjectOpen()
- Added: Project.isAnyTeamProjectOpen()
- Added: Project.isTeamProjectEnabled()
- Added: Project.isLoggedInToTeamProject()
- Added: Project.isSyncCommandEnabled()
- Added: Project.isShareCommandEnabled()
- Added: Project.isResolveCommandEnabled()
- Added: Project.resolveConflict()

- On Windows HiDPI displays, drop-down menus inside ScriptUI panels are no longer cut off.
- Buttons, sliders, disclosure triangles ("twirly arrow"), the scroll bar, progress bar, radio buttons, and checkboxes inside embedded ScriptUI panels were restyled so they line up with native After Effects controls.
- Using AVLayer.compPointToSource() against a 3D text layer no longer brings After Effects down.
- The Fast Box Blur effect carries the match name "ADBE Box Blur2". Its earlier match name, "ADBE Box Blur", still functions: pass it when adding the effect and you get the Fast Box Blur, though under the legacy label "Box Blur", and its Iterations parameter takes the new default value of 3.
