# Generate Videos Using Text Prompts, Generate Videos Using Images, Generate Videos Using Non Adobe Models

> Adobe Firefly reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Generate videos using text prompts; Generate videos using images; Generate videos using partner models.

## Generate videos using text prompts

### Create videos from text descriptions

Generate Video, powered by Adobe Firefly and designed for commercial safety, creates new video clips from text prompts. With Text to video, written prompts can describe the content, emotional tone, setting, and camera angles so camera movement and the finished clip match the intended mood and message.

From the Adobe Firefly homepage, choose Text to video.

By default, the Model is Firefly Video.

For Generate video, Firefly Video is the preset generation model.

Firefly Video remains the preset model used by the Generate video feature.

In General settings, open the Model dropdown menu and choose Adobe or partner video models.

Partner video models can also be selected when creating videos from text prompts.

You can generate text-prompted videos with partner video models as well. Note

The settings shown for video generation can change based on the selected video model.

Choose a resolution: 540p, 720p, or 1080p.

Resolution determines the generated video's quality target and playback needs.

Resolution controls how closely the generated video matches the requested quality and playback requirements. Note

Generative credit usage changes by resolution. Learn more about it here.

For Aspect ratio, choose one value: Widescreen (16:9), Vertical (9:16), or Square (1:1).

Aspect ratio sets the output shape for the generated video, including standard widescreen and formats suited to particular social media platforms.

Use aspect ratio to align the generated video with the required output format, such as standard widescreen or social platform sizes.

Frames per second defaults to 24 FPS.

To make a generated video follow the outlines and composition of an existing video, add a reference video in Composition.

A video reference in Composition helps guide layout and visual style while generating a new clip from text descriptions.

Use a Composition reference video to steer the generated layout and look for text-to-video creation.

In Camera, open the Shot size dropdown menu to set how the main subject is framed in the videos.

- None: Default shot size.
- Extreme close up: moves very near the subject to stress tiny details, often one feature such as an eye or hand.
- Close up shot: frames a face or specific detail tightly so important elements stand out.
- Medium shot: shows the subject with enough surrounding context to establish the environment.
- Long shot: places the full subject inside the environment, adding background and context.
- Extreme long shot: shows a wide scene view and clarifies how the subject relates to the surroundings.

Use the Camera angle dropdown menu to choose one of these options:

- None: Default camera angle.
- Aerial shot: shows the scene from high above, similar to drone or helicopter footage.
- Eye level shot: positions the camera at the subject's height.
- High angle shot: looks down at the subject from above.
- Low angle shot: looks upward at the subject from below.
- Top down shot: looks straight down from directly overhead.

Pick from the available Motion choices to direct camera movement inside the generated video:

- Zoom in: brings the camera lens nearer to the subject so it grows larger as the video continues.
- Zoom out: pulls the camera lens away from the subject so it becomes smaller during playback.
- Move left: pans the camera horizontally toward the left side.
- Move right: pans the camera horizontally toward the right side.
- Tilt up: angles the camera upward along the vertical axis.
- Tilt down: angles the camera downward along the vertical axis.
- Static: leaves the camera locked in a single position with no movement.
- Handheld: recreates handheld camera footage with an unsteady or shaky look.

Note

- Unless you choose from the available camera Motion options or describe camera movement in the prompt, the camera has no assigned motion by default.
- Some camera controls can disappear when other settings are used, such as adding a composition reference video.

On Generate video, type a text prompt in the Prompt field.

Tip

- The Enhance prompt option beside the Generate button can enable prompt enhancement after you finish entering a prompt. When enabled, Firefly refines the original prompt.

To define the generated video's visual style, either write a descriptive prompt that covers the full video, including the desired style or look, or select a style preset in Style.

Preview style preset results by hovering over their thumbnails. Choose a thumbnail to apply that style to video generation.

A style preset guides generation toward visuals with a particular artistic look.

Use a style preset when the generated visuals should follow a specific artistic appearance.

In Advanced, the Seed option lets you add a seed number that initializes generation and influences AI randomness. Reusing the same seed, prompt, and control settings can produce similar video clips.

Select Generate.

Hover over the generated video to preview it, download it, rate it, and add sound effects with text prompts or with your own voice recording through Generate sound effects.

When generation finishes, the video appears in the history strip and can be downloaded to your local device. Generated images and videos are also auto-saved on the Generation History tab of the Files page.

Tip

Select the History icon to toggle the video generation history; selecting preview images loads the generated video together with its settings.

## Generate videos using images

### Create videos with keyframe images and text prompts

Generate Video uses Adobe Firefly and is commercially safe, allowing you to make new video clips. Combining prompts with keyframe images lets you animate still shots and illustrations into video clips.

On the Adobe Firefly homepage, select Generate in the left panel, then choose Generate Video.

In General settings, set Firefly Video as the preferred video generation model.

Generate video uses Firefly Video as its default model.

Firefly Video remains the default model for Generate video. Note

Generative AI availability, including Firefly video and audio models, can differ by geography, user type, and regulatory requirements.

Choose the resolution to set generated video quality. Generative credit usage varies across resolutions.

Use the Aspect ratio dropdown menu to choose the generated video's aspect ratio.

For every generated video, Frames per second defaults to 24 FPS across Adobe and partner models.

In Frame, select First, then upload an image from your device or Adobe cloud storage to use as the first frame of the generated video. If a video has already been generated, Current frame can capture a chosen frame as the first or last frame.

When an added keyframe image needs changes or is not what you expected, hover over it and choose:

- Crop Image: When the keyframe image does not fit the aspect ratio, hover over the thumbnail to show image tools, then select the Crop Image icon. Move the cursor over the preview and adjust the crop as needed.
- Edit Image: To revise the first or last frame image, hover over the thumbnail to show image tools, then select the Edit Image icon. On the edit with text prompts page, add or change image details and use Save to return to the Generate image page.
- Remove Image: To delete an image from the first or last frame, hover over it and choose the Remove Image icon.

Hovering over the image thumbnail reveals the image modification tools.

Move the pointer over the thumbnail to access tools for modifying the image.

You can upload a Last frame image in addition to the first-frame image to define how the video ends. First and end keyframes act as fixed points, guiding the video to begin and finish with those images.

If Frame contains only a first frame, use Motion under Camera to guide camera movement inside the generated video:

- Zoom in: brings the camera lens nearer to the subject so it grows larger as the video continues.
- Zoom out: pulls the camera lens away from the subject so it becomes smaller during playback.
- Move left: pans the camera horizontally toward the left side.
- Move right: pans the camera horizontally toward the right side.
- Tilt up: angles the camera upward along the vertical axis.
- Tilt down: angles the camera downward along the vertical axis.
- Static: leaves the camera locked in a single position with no movement.
- Handheld: recreates handheld camera footage with an unsteady or shaky look.

Note

Adding a first frame in Frame disables Shot size, Camera angle, Style, Composition reference, and Transparent background. Adding an end frame also turns off Motion options for video generation.

Enter a text prompt in the Prompt field.

Note

- A text prompt is required when only the first keyframe has been uploaded.
- When both first and end keyframe images are uploaded, a prompt is optional. Describing the keyframe content can still make the transition smoother because the text prompt directs how the two images connect.
- The Enhance prompt option next to the Generate button can enable prompt enhancement once you finish typing. With it on, Firefly improves the original prompt.

Select Generate.

Hover over the generated video and choose one of the available options:

Once generation is complete, the video is shown in the history strip and is ready to download to the local device. Generated images and videos are also auto-saved under Generation History on the Files page.

Tip

Select the History icon to show or hide video generation history; choosing preview images opens the generated video with its settings.

## Generate videos using partner models

### Use partner models with Text to video or Image to video

Generate video lets you choose among multiple video models, including Adobe models and partner models. The selected model determines which settings and controls appear during generation.

Text to video and Image to video both include partner models for video generation.

After selecting a partner model for video generation, a confirmation prompt explains that the model is not developed by Adobe and provides related information. Review the prompt, then select OK to begin generating videos.

Read the Start using the partner models prompt and choose whether to start video generation with partner models.

Review Start using the partner models, then decide if you want to proceed with partner models for generation.

### Generate videos using Kling 2.5 Turbo

From the Adobe Firefly homepage, choose Generate in the left panel, then select Generate video.

In General settings, open the Model dropdown menu and select Kling 2.5 Turbo for video generation.

Choose Aspect ratio from these options:

- Widescreen (16:9)
- Square (1:1)
- Vertical (9:16)

Note

Resolution defaults to 1080p, Frames per second defaults to 24 FPS, and Duration defaults to 5 seconds.

To set the video's starting frame, go to Frames and select First to add a start image. For more edits to keyframe images, choose:

- Crop Image: When the keyframe image does not fit the aspect ratio, hover over the thumbnail to show image tools, then select the Crop Image icon. Move the cursor over the preview and adjust the crop as needed.
- Edit Image: To revise the first or last frame image, hover over the thumbnail to show image tools, then select the Edit Image icon. On the edit with text prompts page, add or change image details and use Save to return to the Generate image page.
- Remove Image: To delete an image from the first or last frame, hover over it and choose the Remove Image icon.

Kling differs from the other partner models because a first frame is required before generation can start.

For Kling, generation cannot begin unless a first frame has been added, unlike the other partner models.

In Advanced, the Seed option lets you add a seed number that initializes generation and influences AI randomness. Reusing the same seed, prompt, and control settings can produce similar video clips.

Enter a text prompt in the Prompt field.

Select Generate.

### Generate videos using Ray2, Ray3, Ray3 HDR, Ray3.14, and Ray3.14 HDR

Note

Generating with the Ray models, including Ray2, Ray3, Ray3 HDR, Ray3.14, and Ray3.14 HDR, has several differences, such as video duration, output quality, and generative credit usage.

From the Adobe Firefly homepage, select Generate in the left panel, then choose Generate video.

On Generate video, in General settings, the Model dropdown menu includes Ray2, Ray3, Ray3 HDR, Ray3.14, and Ray3.14 HDR.

Use the Resolution dropdown menu to choose among these available options:

- Ray2: offers 540p, 720p, and 1080p
- Ray3 and Ray3 HDR: include 360p, 540p, 720p, and 1080p
- Ray3.14 and Ray3.14 HDR: include 720p, 1080p, and 4K.

Use the Aspect ratio dropdown menu to choose the generated video's frame size from these options:

- Option: Ultra Wide (21:9)
- Option: Widescreen (16:9)
- Option: Landscape (4:3)
- Option: Square (1:1)
- Option: Portrait (3:4)
- Option: Vertical (9:16)
- Option: Ultra Tall (9:21)

Frames per second defaults to 24 FPS for the generated video.

Choose generated video duration from these options:

- Ray2 duration: 5 or 9 seconds
- Ray3 duration: 5 or 10 seconds
- Ray3 HDR, Ray3.14, and Ray3 HDR default duration: 5 seconds

Ray3 can create videos that last either 5 or 10 seconds.

With Ray3, generated videos may be 5 seconds or 10 seconds long.

To use a particular image as the video's first frame, choose First in Frames to add a start image. Optionally, select Last to upload an end-frame image for the video conclusion. For additional keyframe edits, choose:

Upload and crop an image to use as the generated video's starting frame.

Add an image, then crop it so it becomes the start frame for the generated video.

- Crop Image: When the keyframe image does not fit the aspect ratio, hover over the thumbnail to show image tools, then select the Crop Image icon. Move the cursor over the preview and adjust the crop as needed.
- Edit Image: To revise the keyframe image, hover over the thumbnail to show image tools, then select the Edit Image icon. On the edit with text prompts page, add or change image details and use Save to return to the Generate video page.
- Remove Image: To delete a keyframe image, hover over it and choose the Remove Image icon.

For Ray2, turn on Loop video when the video should return to the start and play continuously.

Use the prompt bar to enter a text description of the video to generate.

Select Generate.

### Generate videos using Runway Gen-4.5

From the Adobe Firefly homepage, select Generate in the left panel, then choose Generate video.

In General settings, choose Runway Gen-4.5 from the Model dropdown.

For video generation, Resolution stays at its 720p default, Aspect ratio stays Widescreen (16:9), and Frames per second defaults to 24 FPS.

Open the Duration dropdown and choose 5, 8, or 10 seconds as the generated video's duration.

Choose the generated video's duration.

Set which duration the generated video should use.

To use a specific image as the video's starting frame, select First in Frames to add a start image. For more keyframe image changes, choose:

- Crop Image: When the keyframe image does not fit the aspect ratio, hover over the thumbnail to show image tools, then select the Crop Image icon. Move the cursor over the preview and adjust the crop as needed.
- Edit Image: To revise the keyframe image, hover over the thumbnail to show image tools, then select the Edit Image icon. On the edit with text prompts page, add or change image details and use Save to return to the Generate video page.
- Remove Image: To delete a keyframe image, hover over it and choose the Remove Image icon.

In Advanced, the Seed option lets you add a seed number that initializes generation and influences AI randomness. Reusing the same seed, prompt, and control settings can produce similar video clips.

In the Prompt field, type a text prompt and select Generate.

### Generate videos using Sora 2

From the Adobe Firefly homepage, select Generate in the left panel, then choose Generate video.

In General settings, select Sora 2 from the Model dropdown.

Video generation resolution defaults to 720p.

Choose Aspect ratio from these options:

- Widescreen (16:9)
- Landscape (9:16)

Note

Frames per second defaults to 24 FPS.

Choose the generated video duration: 4, 8, or 12 seconds.

The Sora 2 model supports generated videos with multiple duration choices.

Sora 2 can generate videos in different durations.

To use a specific image as the video's starting frame, choose First in Frames to add a start image. Optionally, choose Last to upload an end-frame image for the conclusion. For additional keyframe image changes, choose:

- Crop Image: When the keyframe image does not fit the aspect ratio, hover over the thumbnail to show image tools, then select the Crop Image icon. Move the cursor over the preview and adjust the crop as needed.
- Edit Image: To revise the keyframe image, hover over the thumbnail to show image tools, then select the Edit Image icon. On the edit with text prompts page, add or change image details and use Save to return to the Generate video page.
- Remove Image: To delete a keyframe image, hover over it and choose the Remove Image icon.

Audio is enabled by default, so generated videos automatically include synchronized sound.

In the Prompt field, type a text prompt and select Generate.

### Generate videos using Veo 2, Veo 3.1, and Veo 3.1 Fast

On the Adobe Firefly homepage, select Generate in the left panel, then choose Generate Video.

In General settings, use the Model dropdown to pick Veo 2, Veo 3.1, or Veo 3.1 Fast.

For Veo 2, resolution defaults to 720p.

Veo 3.1 and Veo 3.1 Fast allow 720p and 1080p selections.

Choose Aspect ratio as Widescreen (16:9) or Vertical (9:16).

Note

Frames per second defaults to 24 FPS.

For Veo 2, the generated video duration defaults to 5 seconds. If the generation model is Veo 3 or Veo 3 Fast, choose from:

- 4 seconds
- 6 seconds
- 8 seconds

After those duration choices, note that Veo 3.1 and Veo 3.1 Fast can also generate audio with the video. Enable Audio to create synchronized sounds or music for the generated video.

Turn on Audio to generate synchronized sounds or music with the video.

Enable Audio when the generated video should include synchronized sound or music.

Under References, go to Frames and select the First or Last icons to add a first or last frame image. To modify keyframe images further, choose:

- Crop Image: When the keyframe image does not fit the aspect ratio, hover over the thumbnail to show image tools, then select the Crop Image icon. Move the cursor over the preview and adjust the crop as needed.
- Edit Image: To revise the keyframe image, hover over the thumbnail to show image tools, then select the Edit Image icon. On the edit with text prompts page, add or change image details and use Save to return to the Generate video page.
- Remove Image: To delete a keyframe image, hover over it and choose the Remove Image icon.

Select Frames to set the generated video's first and last frame.

Use Frames to define the first and last frame for the generated video. Note

Veo 2 supports only the first frame. For reference-image generation in Veo 3.1, use a 16:9 aspect ratio and an 8 seconds duration.

When using Veo 3.1, an image can be added as a video reference. Under References, open Images and use the upload icon to bring in images from your device or Adobe cloud storage. Up to three reference images can be uploaded.

Add one or more images so they are included as part of video generation.

Use single or multiple images as inputs for the video generation.

In Advanced, the Seed option lets you add a seed number that initializes generation and influences AI randomness. Reusing the same seed, prompt, and control settings can produce similar video clips.

In the Prompt field, type a text prompt and select Generate.
