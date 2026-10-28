# JavaScript APIs - dbg

From a command-line console, the static dbg object lets you drive the JavaScript Debugger. Whatever the buttons on the JavaScript Debugger dialog box toolbar do, its methods do as well. On top of that, you can create, remove, and inspect breakpoints by means of the dbg object.

Only Acrobat Pro provides the dbg object together with the JavaScript Debugger.

Note

Should the viewer freeze mid-debugging-session, hitting Esc may clear it up.

You can't debug while a modal dialog box is showing, as happens when a batch sequence is under debug.

Debugging a script whose running event was kicked off by app.setInterval or app.setTimeOut can make alert boxes keep popping up. Once you dismiss the modal dialog box, press Esc to clear the problem.

(Acrobat 7.0) The Acrobat application stays unavailable for as long as the Debugger is open and a debugging session is in progress.
