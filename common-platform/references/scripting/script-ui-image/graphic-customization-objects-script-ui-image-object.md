# Graphic customization objects — ScriptUIImage Object

ScriptUIImage is a helper wrapper for a set of images that a control can draw. Alternate image versions can represent control states, for example a dimmed image for a disabled control.

When a script sets the image property of an Image, IconButton, or ListItem object with a pathname or File object, this type is created automatically and becomes that property's value.

Scripts can also create the object directly with the ScriptUI class's newImage() method. In that form, the script may provide alternate images for control states such as enabled, disabled, and rollover.

Pass this object as the argument to drawImage().
