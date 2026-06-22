# Writing Effective Text Prompts For Video Generation, Enhance Your Prompt For Video Generation, Use Video As Composition Reference, Use Style Presets For Video Generation ...

> Adobe Firefly reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Writing effective text prompts for video generation; Enhance your prompt for video generation; Use video as composition reference; Use style presets for video generation; Match camera motion to reference video; Generate videos with transparent backgrounds.

## Writing effective text prompts for video generation

### Write effective text prompts for video clips that match your creative direction

### Topics on this page:

Text to video and Image to video can convert simple text and image prompts into strong video results that express creative intent, fill timeline gaps, or add elements to an existing shot. The following guidance helps you use Generate Video in the Adobe Firefly web app.

Example showing images, text prompts, and camera motion combined to make a video that supports narration.

### Be clear and descriptive

When composing a prompt in Text to video or Image to video, include enough detail about lighting, cinematography, color grade, mood, and aesthetic style. A concise prompt with clear structure helps Firefly infer the type of video you want.

For scenes, actions, or settings, keep the language direct and unambiguous so Firefly can understand the intent. A useful prompt structure is Shot Type Description + Character + Action + Location + Aesthetic.

- Shot Type Description: define the camera perspective and movement, such as "a tight close-up with a gradual push in."
- Character Description: describe the subject, appearance, clothing, and emotion, such as "a large polar bear with bright white fur and a thoughtful expression."
- Action: explain what happens in the scene, such as "the polar bear pads steadily toward a hole it opened in the ice to hunt below the surface."
- Location: identify the place, weather, and terrain, such as "a barren snowy expanse, with gray clouds drifting far away."
- Aesthetic: state the shot style, ambience, and depth of field, such as "cinematic, 35mm film, highly detailed, shallow depth of field, bokeh."

Note

Firefly can become confused by more than four subjects, so keeping the subject count limited is recommended when building a prompt.

### Specify the visual style

Be precise about the video's visual tone and style, including the look you want to create. For example, choose whether the result should feel realistic, cinematic, animated, or surreal. Greater aesthetic specificity helps Firefly approach the intended result.

Example prompt - "Create a high-contrast animated clip of a snowmobile racing through dusk mountains."

Some visual style ideas you can try:

- Cinematic: use dramatic lighting, lens flares, and high contrast.
- Realistic: favor natural lighting, clear detail, and lifelike characters.
- Animated: include terms such as cartoonish, 3D animation, or 2D animated.
- Artistic: use descriptors such as impressionistic, minimalist, or abstract to steer the art direction.

### Define actions clearly

When the video should include movement or action by one or more characters, use specific verbs and adverbs. This gives Firefly clearer pacing, rhythm, and flow for the intended action. Dynamic verbs such as running, flying, swimming, or dancing are useful, along with pacing words such as slowly, quickly, or gradually.

Example prompt - "A cheerful dog races down the beach and leaps to catch a ball."

Example in which an image generated with Text to Image serves as the first keyframe and is paired with a text prompt to create a video.

### Use descriptive adjectives

The desired atmosphere matters when writing an effective prompt. Describe the overall feeling you want, such as calming, mysterious, or energetic. Strong descriptive adjectives that evoke the intended feeling help Firefly produce a more accurate result.

Example prompt - "A calm, mist-covered beach morning with gentle sunbeams passing through a beach chair."

### Provide context or background story

For more complex video work, Firefly may need defined plot points or characters. Supplying context or background can help it produce a coherent, engaging sequence. For example, you can take still frames from Premiere clips and use those stills to guide new action involving existing characters or actors. Uploaded still frames or images can preserve character continuity across generations, supporting longer and more detailed narratives.

### Use camera angles and movements

Firefly can often imitate real camera techniques, so specify the camera angles or movements that should shape the result.

Common camera directions include:

### Close-up

### Wide shot

### Move

### Shot From Above

### Shot From Below

### Include temporal elements (Time of day, weather)

Weather and lighting conditions shift over the course of a day. If those temporal elements matter to the story, describe them clearly to influence the video's mood. Foggy, cloudy, thunderstorms, and bright sunny days are examples.

### Use iterative prompting

Firefly responds well to iteration. Begin with a simple prompt, then add more detail each time you revise it.

For example, try prompts like these:

Prompt - "Full scene, eye level, wide shot, a huge mech standing in the street, high quality, rich details."

Prompt - "Full scene, eye level, wide shot, a huge mech with yellow and orange armor in empty streets, wires, LEDs, cybernetic parts, high quality, rich details."

Prompt - "Full scene, eye level, wide shot, a massive black-and-yellow mech with orange neon LED highlights, marching, firing lasers, scanning, on a ruined city street, rubble, fires, decayed buildings, desolate, ominous, high quality, strong details."

Prompt - "Cinematic action scene, giant mechs invade the city, menacing black and yellow machines with yellow and orange matte armor, dystopian future, destroyed city street, rubble, fires, decayed buildings, desolate, ominous, high quality, high details, volumetric lighting."

### Add elements to existing videos

Firefly also supports editorial-style generation workflows that can expand what you create during an edit.

Examples include:

- Build transition masks for Premiere that move between two separate clips. The mask determines the areas that reveal the outgoing clip and the areas that reveal the incoming clip, making effects possible beyond common transitions such as cross-dissolves or wipes.

- Produce assets including animations, graphics, effects, and objects against green or black backgrounds for compositing in Premiere or After Effects.

- Produce overlays, like light flares, particle effects, or fire, on a black background for blending over footage in Premiere.

### Additional prompt considerations

### Prompt length

Firefly does not set a strict minimum or ideal prompt size, but prompts can contain at most 1800 words. More words in a prompt do not automatically improve the result.

### Language style

Specific details and concrete wording usually make results easier to predict. Poetic or abstract phrasing can lead to unexpected outcomes, so choose or combine styles based on the result you want. With practice, you can experiment with prompt structure, length, and tone for video generation.

### Additional descriptors

For more control over generated video content, add descriptors such as:

- Cinematography: shallow depth of field, shot on film, and cinematic.
- Composition: wide, close up, shot from above, and shot from below.
- Lighting: backlight, soft light, and hard light.
- Color grading: saturated colors, high contrast, and warm or cool tones.
- Mood or tone: somber, tense, euphoric, and mysterious.
- Camera movement: pan right, pan left, tilt up, tilt down, dolly in, and dolly out.

## Enhance your prompt for video generation

### Use Enhance prompt to refine the text prompt automatically before generating video.

For Text to video or Image to video generation, the text description you entered in the prompt field can be enhanced before the video is created. The Enhance prompt option rewrites the original prompt into clearer, richer, and more useful input for producing the video you intended.

On the Firefly homepage, choose Text to video or Image to video.

In the General settings section, set Model to Firefly Video.

Use the left panel for generation settings such as Resolution, Aspect ratio, Composition, Style, and Camera.

In the Prompt field, enter a text description of the video you want.

Use Enhance prompt when you want to improve the description you added for video generation quickly.

Enhance prompt can rapidly refine the text description supplied for generating the video.

Select the Enhance prompt icon to have the text description refined and optimized automatically for video generation.

The Prompt field is updated with the enhanced description, replacing the original text with a stronger prompt input.

After enhancement, the original Prompt field text is swapped out for a more polished and effective version.

Enhance prompt analyzes your original wording and revises it so the goal is clearer, more detailed, and better matched to what you want. This can improve accuracy and overall output quality.

If you change the enhanced text, the prompt bar shows an Edited indicator. An undo icon also appears, letting you return to the enhanced version.

Your choices are the original prompt, the enhanced prompt, or the edited enhanced prompt.

Note

Running Enhance prompt more than once on the same prompt produces the same output each time because the system applies the same process.

Select Generate to start video generation.

After generation finishes, you can preview the video and download it.

Tip

To add sound effects to a text-prompt video, or bring in your own voice recording, hover over the generated video and choose Generate sound effects.

## Use video as composition reference

### Use an existing video as a composition reference while generating video from text descriptions.

When you want a new Text to video result to follow the structure of an existing clip, upload a reference video that shows the edge layout, depth, and composition you want. Combining that video reference with your text prompt lets the generated video keep the source composition while still reflecting your creative direction.

Before you begin:

Prepare a reference video that is 5 to 10 seconds long and less than 200 MB. Available resolution choices are 540p, 720p, and 1080p; for strongest results, use 1080p.

From the Firefly homepage, choose Text to video.

In the General settings section, set Model to Firefly Video.

Choose one of these available resolutions:

- 540p
- 720p
- 1080p

For aspect ratio, choose one of these values:

- Widescreen (16:9)
- Vertical (9:16)
- Square (1:1)

Frames per second uses the default 24 FPS, and Duration is 5 seconds.

In the Composition section, upload the reference video whose edges and depth should be carried into the generated video.

Use a video composition reference to steer the layout and visual style when creating a new video from text descriptions.

A composition reference video helps guide both layout and visual style during text-driven video generation.

Use these requirements for a composition reference upload:

- Video length must be 5 to 10 seconds. Firefly trims anything longer to the first 5 seconds.
- Keep file size at 200 MB or less.
- For best results, use 1080p resolution.

Note

If an image has been added as a keyframe under the Frame option for video generation, the Composition section is not available.

Enter the text description for the video in the Prompt field.

Tip

- Strong prompts for composition references are descriptive. For example, write 'The yellow ball bounces across the screen,' instead of a command-style prompt such as 'Change the red ball to a yellow ball.'
- Next to the Generate button, the Enhance prompt option can enable prompt enhancement after you finish writing. Once enabled, Firefly improves your original prompt.

To define the generated video's visual style, either write a descriptive prompt that covers everything in the video, including the desired style or look, or select a style preset from the Style section.

If needed, open Advanced settings and use the Seed option to add a seed number that starts the process and influences the video model's randomness. Reusing the same seed, prompt, and control settings can produce similar video clips.

Select Generate to start video generation.

Note

Learn how generative credits are used whenever you generate a video, or use the sparkles icon beside the Generate button to view credit-usage details.

When the video is ready, you can preview it and download it.

To add sound effects to a text-prompt video, or bring in your own voice recording, hover over the generated video and choose Generate sound effects.

Create sound effects for the generated video by guiding the result with your voice or simple text descriptions.

Sound effects can be generated for the created video using either voice guidance or short text descriptions.

Firefly also stores the generated video on the Generation history page. To see all videos you have generated, use Files in the top menu bar.

## Use style presets for video generation

### Apply style presets during video generation to give the result a specific visual identity.

In Text to video, style presets provide a set of visual looks you can apply during generation. Each preset acts as a predefined theme, such as 2D animation or 3D rendering, and guides Firefly toward visuals in that artistic style.

### Examples of videos generated using different style presets

The examples below apply different style presets to the prompt shown here:

"A rabbit running from left to right of the frame, cerulean background."

From the Firefly homepage, choose Text to video.

Add the video description you want in the Prompt field.

In the General section, set Model to Firefly Video.

For the video generation model, choose Firefly Video from the Adobe and partner model list.

In the Adobe and partner model list, select Firefly Video to generate video.

For resolution, choose one of these values:

- 540p
- 720p
- 1080p

For aspect ratio, choose one of these values:

- Widescreen (16:9)
- Vertical (9:16)
- Square (1:1)

Frames per second uses the default 24 FPS, and Duration is 5 seconds.

In the Camera section, choose the settings you want:

- Shot Size: sets how much of the subject or scene appears inside the frame.
- Camera Angle: sets the position or angle the camera uses to view the subject.
- Motion: sets the camera movement during the shot.

In the Style section, choose from the presets to define the visual style of the generated video.

Choose a style preset to direct generation toward visuals with a specific artistic look.

Use a style preset when you want the generation process to follow a particular artistic appearance.

Select Generate to start video generation.

Note

Learn how generative credits are used whenever you generate a video, or use the sparkles icon beside the Generate button to view credit-usage details.

When the video is ready, you can preview it and download it.

To add sound effects to a text-prompt video, or bring in your own voice recording, hover over the generated video and choose Generate sound effects.

Firefly also stores the generated video on the Generation history page. To see all videos you have generated, use Files in the top menu bar.

## Match camera motion to reference video

### Upload a reference video so generated video can follow its camera motion.

With Generate video, you can upload a reference clip and use its camera movement, such as pans, zooms, tilts, and motion path, to guide the new generation. This lets the output echo the cinematic movement and dynamic pacing of the reference.

Before you begin:

Prepare a motion reference video that is 5 to 10 seconds long and under 200 MB.

On the Adobe Firefly homepage, select Generate in the left panel, then choose Generate Video.

In the General section, set Model to Firefly Video.

To use Motion reference for video generation, select Firefly Video as the model. Firefly Video must be selected for the Motion reference option.

Set Resolution and Aspect ratio for the generated video using the available choices.

Frames per second uses the default 24 FPS, and Duration is 5 seconds.

If the generated video should start or finish with specific images, use the Frames section and add the first frame, the last frame, or both.

Tip

If an uploaded reference image does not match the selected Aspect ratio, Firefly crops it automatically. Hover over the thumbnail to view it, then move the cursor onto the preview to activate the crop tool and make any needed crop adjustment.

In the Camera section, under Motion reference, use Upload video to add a camera-motion reference video.

Match the generated video to the camera motion from the uploaded reference clip.

Use the uploaded reference clip's camera motion to guide the generated video.

Note

The reference video needs to be 5 to 10 seconds long and under 200 MB. When it exceeds 5 seconds, Firefly uses only the first 5 seconds as the reference for video generation.

To set the generated video's visual style, choose from the available style presets.

Note

If you add a reference image under Frames, the Style section might not be available.

In Advanced settings, use these options as needed:

- Transparent background: creates a video that has no background.

- Seed: add a seed number when you want to influence randomness and generate similar videos.

On the Generate video page, type a text prompt in the Prompt field.

Tip

Select Enhance prompt beside the Generate button to improve the original prompt.

After the video is generated, you can preview and download it.

Hovering over the generated video also gives options to preview, download, rate, and add sound effects through Generate sound effects, using either text prompts or your own voice recording.

## Generate videos with transparent backgrounds

### Use Text to video or Image to video to create foreground-only subjects with background transparency.

Transparency matters when a video contains several visual layers. Making selected parts of the upper layers transparent reveals the visuals below, helping the content blend into other scenes or sit naturally on different backgrounds.

Firefly provides transparency controls during video generation. With either a text prompt or a prompt combined with a start frame, an end frame, or both, you can create videos that have transparent backgrounds and solid foreground elements.

From the Firefly homepage, choose Generate with transparent background.

When you choose Generate with transparent background, the module opens with Firefly Video selected and Transparent background turned on.

If you started from Text to video or Image to video, use the left panel's General settings and set the video-generation Model to Firefly Video.

Choose Firefly Video as the model when creating a video that uses a transparent background.

Use Firefly Video as the video model when generating a transparent-background video.

Under Advanced settings, enable Transparent background.

Enable Transparent background to create a video without any background.

Turn on Transparent background when the generated video should not include a background.

When Transparent background is enabled, unsupported generation settings are hidden.

Select the generated video's resolution and aspect ratio.

Frame per second is 24 FPS and duration is 5 seconds by default.

To make an image the starting frame or ending frame, upload it in the Frame section under First frame or Last frame, respectively.

For transparent-background generation, add transparent PNG files as the first and last frames.

First and last frames for transparent-background generation should be PNG files that include transparency.

Note

Only transparent PNG files are supported for first and last frames in transparent-background image generation.

In the prompt bar, enter a text prompt describing the video you want to generate.

After the video is generated, select the Background icon to view preset color backgrounds and preview how each one appears behind the video.

Available presets:

- Transparent background
- White background
- Black background
- Green background
- Foreground only
- Alpha mask only

Use the background style choices to preview the generated transparent video in different environments.

Multiple background styles let you inspect how the transparent generated video will look against different settings.

If the generated video meets your needs, select Download to save it.

The download is a zipped file containing two video assets:

- Foreground video: the main visual content, with the subject preserved and the background removed.
- Alpha video: this file contains transparency data, also called an alpha channel, that specifies which foreground areas stay visible and which become transparent.

Import these two files into your preferred video editing program to build the transparency required for your project.

## See also

- [Style Presets](api-style-presets.md)
