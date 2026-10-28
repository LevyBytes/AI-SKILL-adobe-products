# Graphic customization objects - ScriptUIPath Object

ScriptUIPath is a helper wrapper for a drawing path that a control can render as a figure. Create it with newPath(), then define path segments with the ScriptUIGraphics object's moveto(), lineto(), rectPath(), and ellipsePath() methods.

Assign it to currentPath; closePath() and related methods operate on it there.

You may pass it as an optional argument to fillPath() and strokePath(); without that argument, those methods use currentPath.

The class defines no properties or methods.
