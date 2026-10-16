# App/Init

Firing when the viewer launches, this is the application initialization event. Script files known as folder-level JavaScripts get pulled in from both the application and user JavaScript folders, loading in this sequence: config.js, glob.js, every other file, and finally any user files.

The rc return code carries no weight for this event.
