# Load and run scripts

Scripts sitting in the Scripts folder get loaded the moment After Effects launches. Out of the box, that Scripts folder lives where After Effects keeps it at these paths:

Windows: Program Files\Adobe\Adobe After Effects &lt;version&gt;\Support Files

macOS: Applications/Adobe After Effects &lt;version&gt;

A handful of scripts ship with After Effects and drop into the Scripts folder on their own. and all loaded scripts are available from the File > Scripts menu.

Note

- Should you tweak a script while After Effects is open, the edits won't take hold until you save them.
- Drop a script into the Scripts folder while After Effects is open and it won't show up in the Scripts menu until you relaunch the app — though the Run Script File command lets you run it straight away.

The bottom of the Window menu lists scripts kept in the ScriptUI Panels folder. Any script built to show its interface inside a dockable panel belongs in the ScriptUI folder. ScriptUI Panels behave very much like the panels native to the After Effects interface.

Note

Out of the box, scripts are barred from writing files or sending and receiving anything across a network. To grant scripts the ability to write files and reach the network,

- Windows: Select Edit > Preferences > Scripting & Expressions > select Allow Scripts To Write Files And Access Network.
- macOS: Select After Effects > Settings > Scripting & Expressions > select Allow Scripts To Write Files And Access Network.

To run a loaded script, choose File > Scripts > [script name].

When a script hasn't been loaded yet, pick File > Scripts > Run Script File, track down and select the script, then click Open.

Hit Esc to halt a script mid-run.

Running a script from the command line means invoking afterfx.exe there. Supply the -r switch along with the script's full path as the arguments. No fresh copy of After Effects opens — the script executes inside the instance already running.

For example (Windows): afterfx -r c:\script_path\example_script.jsx

Note

Pair this command-line approach with the utility bundled with a programmable keyboard, and you can map a script's launch onto a keyboard shortcut.

After Effects keeps a roster of the last 10 scripts you ran available for viewing. Pull it up through File > Scripts > Recent Script Files.

To fire off any of those 10 most recent scripts again,

- macOS: Cmd + Option + Shift + D
- Windows: Ctrl + Alt + Shift + D

Note

Over on the AE Scripts site, Lloyd Alvarez shares a workaround for running .jsxbin scripts when the Scripts or ScriptUI Panels folder is off-limits to you.
