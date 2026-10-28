# Create 3D Layer Instance

A constraint of 3D layers is that 2D effects can't be applied to them straight away. The usual way around this is the CC Composite effect, which spins up a 2D copy of the 3D layer. With that copy in hand you can run 2D effects on it while the original 3D layer stays untouched, then the two get merged for one clean result.

In current builds of After Effects, choosing Layer > Create > Create 3D Layer Instance drops a solid at the top of your composition. That solid comes pre-loaded with the CC Composite effect pointed at whichever 3D layer you selected. From there you're free to apply 2D effects to the comp's 3D models without losing the original 3D look you were after.

Via the Create 3D Layer Instance command, a solid layer is produced that carries the CC Composite effect pointed at your chosen 3D layer.

Via the Create 3D Layer Instance command, a solid layer is produced that carries the CC Composite effect pointed at your chosen 3D layer. Note

The 3D layer being referenced gets switched off, though you can switch it back on if you want to hold on to that layer's shadow.
