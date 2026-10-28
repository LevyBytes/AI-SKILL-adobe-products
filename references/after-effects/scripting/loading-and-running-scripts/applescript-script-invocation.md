# How to include After Effects scripting in an AppleScript (Mac OS)

What follow are three sample AppleScript scripts that deliver an existing JSX file holding an After Effects script to the application, skipping the After Effects user interface as the way to run it.

In the first, you drop your After Effects script straight into the Script Editor and run it. Since the script text sits inside quotation marks after the DoScript command, any quotes within the script itself need the backslash escape character, like so:

```applescript
tell application "Adobe After Effects CS6"
    DoScript "alert(\"You just sent an alert to After Effects\")"
end tell
```

A second option is to throw up a dialog box that asks where the JSX file to run is located, like this:

```applescript
set theFile to choose file
tell application "Adobe After Effects CS6"
    DoScriptFile theFile
end tell
```

This last one earns its keep most when you're actively editing a JSX script and want to ship it to After Effects to test or run. Using it well means switching into the application holding the open JSX file (here it's TextEdit); if the application's exact name escapes you, type your best guess in place of "TextEdit" and AppleScript will ask you to find it.

Just select the script text you mean to run, then trigger this AppleScript:

```applescript
(*
This script sends the current selection to After Effects as a script.
*)

tell application "TextEdit"
    set the_script to text of front document
end tell

tell application "Adobe After Effects CS6" activate
    DoScript the_script
end tell
```
