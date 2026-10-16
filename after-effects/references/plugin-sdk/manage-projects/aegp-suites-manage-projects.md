# AEGP Suites — Manage Projects

Project data is read and altered through these functions. Although the API carries support for more than one project against possible future growth, today After Effects sticks to a one-project-at-a-time model.

If you need project-specific data kept in After Effects' preferences rather than inside the project file itself, reach for the Persistent Data Suite.

Be careful here: calling the open and create functions will not preserve unsaved edits in whatever project happens to be open at the time!
