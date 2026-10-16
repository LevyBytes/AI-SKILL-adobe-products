# Pause or stop rendering

Should the disk an output module writes to fill up, After Effects suspends the render. Free up some additional space and rendering and exporting will pick back up.

- Pick Pause to suspend rendering. Pick Continue to start it again.

Note

You can't adjust settings or otherwise touch After Effects for as long as rendering sits paused.

- Windows: Alt-click + Stop
- macOS: Option-click + Stop

Whichever render item got halted is tagged with the User Stopped status, while a fresh item tagged Queued joins the Render Queue panel. That new item carries the same output filename and runs the same duration as the one it came from.

- Pick Stop when you mean to halt rendering yet pick up the very same render later.

Whichever render item got halted is tagged with the User Stopped status, while a fresh item tagged Unqueued joins the Render Queue panel. This new item gets an incremented output filename and starts rendering again at the frame just before where it stopped—so its opening frame matches the last frame the halted item rendered cleanly.
