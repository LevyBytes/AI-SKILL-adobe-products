# Cameras Lights Points Interest (part 2)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Stereoscopic 3D camera rig

By way of its Create Stereo 3D Rig menu command, After Effects converts a 3D composition into a stereoscopic 3D one. Every element gets built for you by the Stereo 3D Rig, the 3D Glasses effect included.

To assemble a stereoscopic 3D camera rig, begin by making a composition that holds 3D elements. One containing things such as a 3D collapsed precomposition, or 3D elements placed in the composition itself, suits the job. Should a camera already be in play, you can select it as you create the stereoscopic 3D camera rig; with none selected, a fresh camera gets made. Choose Layer > Camera > Create Stereo 3D Rig. Only two-node cameras work with the rig.

The rig comes together either by making a primary camera or by drawing on the existing camera you've selected in the composition. It yields a left eye [compare Left Eye] composition and a right eye [compare Right Eye] composition. Inside each sits a camera bound to the primary camera, the original composition nested within, plus an output stereo 3D composition [compare Stereo 3D]. That output stereo 3D composition nests both eye compositions and holds a layer named Stereo 3D Controls. On that layer live a Stereo 3D Controls effect that drives the rig and a 3D Glasses effect that merges the left and right eye compositions into one stereo image.

Note

Built as part of the Stereo 3D Rig, the Stereo 3D Controls effect is not found in the Effects & Presets panel.

For Camera Separation and Convergence, the Stereo 3D Controls effect offers these settings:

Configuration

Center sets the left and right camera on opposite sides of the master camera. Hero Left parks the left camera right where the primary camera sits, putting the right camera off to the right. Hero Right does the reverse, parking the right camera at the primary camera's spot with the left camera off to the left.

Stereo Scene Depth

Sets the interaxial gap between the cameras as a share of the composition's width, so that resizing the composition keeps the separation amount fixed. It opens low at 3% to keep things understated. For believable 3D footage this value rarely has to climb past 14%-30%, though it may go larger depending on factors like scene content (objects packed tightly together) and the camera field of view.

Note

Move this value and you change how far the Stereo 3D dips into and out of the scene. Drive it too high and eye strain can result.

Converge Cameras

Off, and the cameras stay parallel to the primary camera yet shifted to either side. On, and the offset position holds, but the left and right cameras' Points of Interest meet at a spot set by the two properties below.

Converge To and Convergence Z Offset

Fixes the Z distance from the camera at which the screen seems to sit when viewed through 3D glasses. Anything deeper in Z space looks pushed back into the screen, and anything nearer looks like it pops forward out of it. With the converge the cameras check box left off and the cameras parallel, altering the scene convergence does the same thing as altering the Z offset. In that situation, use difference mode to assign various scene elements to screen space. Learn more about 3D Glasses effect.

## Getting started with stereoscopic 3D

Stereoscopic 3D work doesn't oblige you to own a 3D television. Anaglyph (red-cyan) 3D glasses, for one, let you watch 3D stereoscopic footage straight in the Composition panel. That said, a 3D television paired with active shutter glasses also supports live editing. To go that route, line up a few things first:

- A display or TV set capable of 3D stereoscopic playback.
- A pair of glasses made for watching stereoscopic 3D on a television.

Either stereoscopic footage or a 3D composition.

Note

This workflow calls for active shutter glasses, which depend on an emitter device. Stick with the glasses your television's maker advises.

With those items in hand, proceed as follows:

Hook the 3D TV up to your computer using an HDMI cable (DVI will serve if HDMI isn't on hand).

Build a 3D composition in After Effects. See that its size lines up with your output monitor's present resolution.

Open a fresh Composition panel for your Stereo 3D composition. Lock that composition, then drag it across to your 3D TV monitor.

Confirm the Composition panel sits at 100%.

Press Control + \(backslash) twice so the composition fills the screen on the 3D TV. Match the composition's dimensions to those of the 3D TV.

In the 3D Glasses effect, switch the 3D view to one of these:

- Stereo Pair
- Over Under
- Interlaced

Switch your 3D TV into 3D mode and align its format with whatever you chose under 3D View for the 3D Glasses effect. (Most 3D TVs handle Stereo Pair and Over Under.

Slip on your 3D glasses and edit the composition in genuine stereoscopic 3D.

Tip

Stereoscopic 3D Tips

- Working on 3D stereoscopic footage in the Composition panel without a 3D television on hand? Switch to the anaglyph format. Plain red and cyan anaglyph 3D glasses do the best job for this 3D stereoscopic workflow.

Raise or lower Stereo Scene Depth to alter how deep the 3D environment reads.

Switch Converge Cameras on and adjust the Convergence Z Offset to push assorted objects behind and ahead of the screen. Objects nearer the camera than the Z offset land in front of the screen; those farther off land behind it.

To line up your composition's depth of field with your stereoscopic camera's convergence, take one of these approaches:

Turn on Link Focus Distance to Point of Interest for the primary camera, then converge the rig's cameras; the depth of field now falls into line with the stereoscopic 3D convergence.

Should you want the depth of field shifting over time, animate the primary camera's focus distance. After that, set the convergence point to converge from Camera Position, and add an expression tying the primary camera's Focus Distance to the convergence Z offset

### More like this

- Auto-Orientation options
- Effects with a Comp Camera attribute
- Choose a view layout and share view settings
- Auto-Orientation options
- Adjustment layers
- Choose a 3D view
- Choose a view layout and share view settings
- 3D layers
