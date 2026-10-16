# CompItem.displayStartTime

app.project.item(index).displayStartTime

### Description

The composition's start point, measured in seconds. In the Composition Settings dialog box this is the same as the Start Timecode or Start Frame setting.

Note

Starting with After Effects 17.1, this bottoms out at -10800.0; in releases prior to 17.1 the floor sat at 0.0

### Type

Floating-point valuem in the range [-10800.0..86339.0] (-3:00:00:00 to 23:59:00:00); read/write.
