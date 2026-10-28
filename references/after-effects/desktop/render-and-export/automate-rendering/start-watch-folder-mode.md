# Automated rendering and network rendering - Start in watch-folder mode

Only renders from a folder on your own local computer fall under watch-folder mode.

- Have After Effects launch straight into watch-folder mode by saving a project named Watch This Folder.aep. Open that project and After Effects watches whichever folder holds it.
- To kick off watch-folder mode the moment your computer starts, make a shortcut (Windows) or alias (macOS) pointing at the Watch This Folder.aep project and drop it into your Startup folder (Windows) or Startup Items folder (macOS). Open that project and After Effects watches the folder it sits in.
- (Windows only) To launch watch-folder mode from the command line, pick Start > Run and type the following, swapping in the exact name of the folder where you installed After Effects and replacing C:\[temp] with your watch folder's path: "C:\Program Files\Adobe\Adobe After Effects CC\Support Files\afterfx.exe" -wf C:\[temp]

Note

Add the -re option to the command to fire up the After Effects render engine rather than the full version. This command line works in batch files as well.
