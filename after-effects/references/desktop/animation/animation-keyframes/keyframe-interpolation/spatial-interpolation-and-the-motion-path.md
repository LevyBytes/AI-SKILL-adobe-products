# Spatial interpolation and the motion path

Apply or alter spatial interpolation for a property like Position and you're reshaping the motion path inside the Composition panel. Each keyframe sitting on that motion path signals which interpolation type is in force at any given moment. The spatial interpolation method of the selected keyframe shows up in the Info panel.

Make spatial changes within a layer and After Effects falls back on Auto Bezier as its default spatial interpolation.

Note

Want linear interpolation as the default instead? Choose Edit > Preferences > Composition (Windows) or After Effects > Settings > Composition (macOS), then turn on Default Spatial Interpolation To Linear. Flipping that preference leaves untouched any keyframes that already exist as well as new keyframes added to properties that already carry keyframes.

Motion path interpolation

A. Linear B. Auto Bezier C. Continuous Bezier D. Bezier E. Hold

Motion path interpolation

Now and then, Auto Bezier spatial interpolation on Position keyframes triggers an unwanted back-and-forth (boomerang) motion between two keyframes holding equal values. When that happens, switch the earlier keyframe over to Hold interpolation, or set both keyframes to Linear interpolation.
