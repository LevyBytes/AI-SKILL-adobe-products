# FontObject.fontID

app.fonts.allFonts[0][0].fontID

Note

This functionality was added in After Effects 24.2

### Description

At creation each FontObject instance receives a one-of-a-kind number, never below 1. That value holds steady throughout an application session, though a later launch of the application may assign a different one.

It serves to test whether two FontObject instances point at the same underlying native font instance.

Use getFontByID to retrieve FontObjects by their fontID.

### Type

Integer; read-only.
