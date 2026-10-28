# Collect Files folder considerations

Running the File > Collect Files command gathers a project's relevant files into one folder. Inside that folder go a copy of the project file, a render control file (RCF), and additional files that vary with the choices you make in the Collect Files dialog box. Should you place the Collect Files folder on a networked computer that is not a server, keep any render engine off that machine. Don't save the Collect Files folder to a local disk, to the root level of a disk (C: in Windows or the Mac HD in macOS, for instance), or to a shared folder — each of those can point to different spots for different render engines. Every render engine has to read the path identically.

Note

The moment the collected files land in the watch folder, each monitoring render engine begins rendering on its own. If you would rather, the Collect Files command can park compositions and their source footage at a chosen spot, leaving you to launch the watch-folder rendering later. Going that route renders the projects alphabetically rather than in the order they were saved to the spot.
