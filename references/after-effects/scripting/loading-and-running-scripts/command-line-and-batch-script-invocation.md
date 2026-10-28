# Running scripts from the command line, a batch file, or an AppleScript script

If running a script from the Windows command line or by way of AppleScript is familiar territory, you can hand a script straight to the open After Effects application so it runs the script for you automatically.

Run a script from the command line by calling afterfx.exe there. Pass the -r switch plus the script's full path as arguments. Rather than spinning up a fresh copy of After Effects, this command runs the script inside the instance already open.

Example (for Windows):

```bat
afterfx -r c:\script_path\example_script.jsx
```

Paired with the software bundled with a programmable keyboard, this command-line trick lets you tie a script's launch to a keyboard shortcut.

Below are sample Windows command-line entries that push an After Effects script to the application without going through the After Effects user interface to run it.

The first one has you copy and paste your After Effects script straight onto the command line and then run it. Following the afterfx.exe -s command, the script text shows up inside quotation marks:

PowerShell invocation; the outer single quotes preserve the double-quoted JavaScript alert message.

```powershell
afterfx.exe -s 'alert("You just sent an alert to After Effects")'
```

Or you can point to where the JSX file lives so it gets executed. For example:

```bat
afterfx.exe -r c:\myDocuments\Scripts\yourAEScriptHere.jsx
afterfx.exe -r "c:\myDocuments\Scripts\Script Name with Spaces.jsx"
```

Should the program shut immediately once the command runs, try stripping the quotes off the script path in this command line:

```bat
afterfx.exe -r c:\myDocuments\Scripts\Script Name with Spaces.jsx
```
