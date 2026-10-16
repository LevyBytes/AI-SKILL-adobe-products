# Motion blur

Look at any single frame of film or video that holds a moving subject and you'll usually see blur, because each frame captures a slice of time rather than an instant—on film, one frame lasts 1/24 of a second. During that slice the subject sweeps through several positions on its way across the frame, so it can't read as a crisp, frozen object. Speed makes it worse: the quicker the subject travels, the more it smears. The look of that blur also rides on the camera's shutter angle and shutter phase, which set how long the shutter stays open and how its opening lines up with the start of the frame.

Computer-generated animation behaves the opposite way—within a lone frame, moving elements can look every bit as crisp as stationary ones, so you may not even spot which ones are in motion. Skip the motion blur and animated layers march in discrete, strobing steps rather than flowing smoothly. Switching motion blur on for the layers you animate in After Effects gives that motion a softer, more lifelike feel.

Motion blur is something you switch on per layer, and you separately decide whether it renders for previews versus final output. The Enable Motion Blur composition switch sitting at the top of the Timeline panel toggles motion-blur rendering for previews. For final output, that toggle lives in the Render Queue panel's render settings. When the Switches Affect Nested Comps preference under the Appearance category is on, nested compositions inherit the setting of whatever composition holds them.

Because motion blur drags rendering down, a common habit is to leave the composition switch off while you work and flip it on only to check the final look.

To enable motion blur for a layer, do one of the following:

- Tick the Motion Blur layer switch for that layer over in the Timeline panel.
- Select the layer, then choose Layer > Switches > Motion Blur.

How many samples After Effects spends calculating a layer's motion blur scales to that layer's own movement. That adaptive approach delivers quality blur without burning as many samples on a slow layer as it would on a fast one. The catch is that heavy sampling rates eat into rendering performance.

With motion blur on for a composition and the Timeline panel zoomed close enough to read individual frames, a pale gray band hugging the current-time indicator stands in for the shutter phase and shutter angle. That band's width maps to the shutter angle, and how far it sits off-center maps to the shutter phase. It's a visual cue for how the composition samples each frame when computing motion blur.

Motion blur is meant for movement you animate—sliding a text layer across the screen, say. What you can't do with the Motion Blur layer switch and the Enable Motion Blur switch is add blur to motion already baked inside a layer.

When the goal is smoothing live-action footage whose assigned frame rate sits well below or above the original, frame blending is the tool to reach for instead of motion blur.

Refer to Apply motion blur to create a fake motion blur,
