# Generate videos using Firefly models

Use Firefly Video model to create videos and place them on the Firefly video editor timeline.

In Firefly video editor (beta), generation can happen inside the editor, so you stay in the same workspace while making new clips. The built-in Firefly Video model exposes generation settings whose outputs can be placed immediately on the timeline, making style exploration and idea testing part of the edit session.

Start on the Firefly homepage: in the left panel, choose Create, then choose Edit video (beta).

Open an existing project, or make a new one so a timeline is available.

Choose the Generate media icon in the right panel; if Video is not active, choose Video.

Under General settings, open the Model dropdown menu and choose Firefly Video.

Add text that describes the video you want to make.

Type a prompt explaining the video to generate.

Provide the prompt text for the video generation.

Choose the resolution and aspect ratio for the generated clip.

Set the resolution and aspect ratio you want for the generated video.

Use the preferred resolution and aspect ratio for the new video.

Note

Generated videos use default settings of 24 frames per second (FPS) and 5 seconds.

To steer the video's visual path with images, upload a first keyframe, a last keyframe, or both in Frames. Firefly Video uses those images as visual guides so the result starts, ends, or both with the uploaded frames.

Use uploaded keyframes to guide the start, end, or both ends of the video.

Use keyframe images to define the beginning, ending, or both.

To use the image at the timeline playhead, go to Frames, choose First or Last, then choose Current Frame.

Note

When a First or Last frame is supplied, Firefly automatically turns off some controls: Reference in Composition setting, Motion reference, Shot size, Camera angle in Camera settings, and Style setting.

To use a video as a composition reference, open Reference under Composition and choose Upload video. Firefly combines that video with the prompt so the generated clip follows the reference layout while reflecting the prompt.

Upload a reference to steer the composition of the generated video.

Use a reference upload when the generated video should follow a particular composition.

You can also define camera behavior with these generation settings:

- Motion reference: aligns camera movement in the generated video to the uploaded reference video.
- Shot size: controls how much of the subject or scene appears inside the frame.
- Camera angle: sets the viewpoint from which the camera looks at the subject.
- Motion: describes camera movement during the shot.

Set shot size, angle, and motion to tune the camera behavior in the generated video.

Use shot size, angle, and motion controls to adjust camera behavior for the generated video.

Under Style, choose a style preset when the video needs a specific visual identity.

Use presets when you want to quickly stylize the video's appearance.

Apply a preset for a quick visual style change.

Note

Choosing a style turns off start and end frame controls in Frames.

In Advanced settings, Seed lets you enter a seed number that initializes generation and affects AI randomness. Reusing the same seed with the same prompt and control settings can produce similar video clips.

Choose Generate.

The output appears in Generation history panel, and you can drag it onto the timeline.
