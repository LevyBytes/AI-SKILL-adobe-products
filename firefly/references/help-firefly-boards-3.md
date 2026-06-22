# Linked Documents, Partner Models To Generate Videos

> Adobe Firefly reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Work with linked documents; Partner models to generate videos.

## Work with linked documents

### Create and use linked PSD or AI files directly inside Firefly Boards.

Images, PSD files, and AI files become linked documents when you upload them to Firefly Boards and place them on the canvas. Changes made to the original files in their source apps can be updated automatically on the canvas.

Access to linked documents is based on the user's role. Owners may open the linked file in its original app, edit it, and update the canvas version. Contributors may view the source file and use the linked asset for remixing, references, or sub-prompts.

When working with linked documents in Firefly Boards, assets can be added to the canvas from either Your device or Creative Cloud. The chosen source controls which features and editing capabilities are available for the linked asset.

### Linked documents from device

On the Firefly homepage, choose Boards.

Choose Create new board.

Choose the Upload button, then choose Your device to browse for files and upload them. Supported uploads include images, PSD, and AI files.

Uploaded files are stored in Creative Cloud. Each file shows a stamp thumbnail that identifies the source app it is linked to.

To see file details such as source, file owner, and file name, hover over the stamp thumbnail.

Hover over a stamp thumbnail to view details for the file, including its source, owner, and name.

Because you own uploaded files that remain linked to their source apps, these owner actions are available:

- Open the linked file in its source app
- Make edits to the linked asset in its source app
- Refresh the canvas file so every contributor sees the updated version

Contributors may inspect the linked file's source, remix the asset, use it for reference, create sub-prompts, and download it. They cannot edit another person's linked asset, remove its background, or open it in the source app.

This example shows a linked asset edited at the source in Photoshop on the web, with the changes appearing on the Boards canvas after refresh.

In the example, edits made to the linked asset in Photoshop on the web are reflected in Boards after the canvas is refreshed.

When one or more linked documents change in the source app, a notification tells you that linked assets have changed. Use Update on the canvas to display the latest version.

A toast notification tells you the source file was updated and must be refreshed before the changes appear.

The toast alert indicates that the source file changed and needs a refresh to show the update.

You can also use the Refresh icon, which becomes active after you select an element that has pending changes to update.

After selecting the linked asset, choose Refresh to update it and show the newest changes.

Select the linked asset, then use Refresh to bring in the latest source changes.

### Linked documents from Creative Cloud

Choose the Upload button, then choose Creative Cloud to browse for and upload an image, PSD, or AI file.

After the documents are placed on the canvas, each file displays a stamp thumbnail showing the source app it is linked to.

When one or more linked documents change in the source app, use Update on the canvas to apply those changes.

These linked documents can be used as references and remixed to create additional images.

Before using editing features such as Background remove, Generative fill, or Generative expand, unlink the document. If you select a linked file and attempt to use those features, Firefly prompts you to unlink it from the source app.

Choose Unlink to disconnect the linked asset from its source file so editing features such as Generative fill become available.

Use Unlink to separate a linked asset from the source file and enable features such as Generative fill.

After unlinking, the asset behaves as a normal canvas asset.

## Partner models to generate videos

Use partner models in Firefly Boards to create videos.

In Firefly Boards, generated videos can be created and placed on the canvas from the same workspace. Adobe models such as Firefly Video are available alongside partner models, including:

Choosing a partner model for video generation opens a confirmation message explaining that the model was not developed by Adobe and showing related details. Read that information, then choose OK when you are ready to generate videos.

Read the Start using the partner models prompt, then decide whether partner-model video generation should begin.

Read the Start using the partner models prompt, then decide whether partner-model video generation should begin. Note

The selected video model determines which video generation settings are available.

### Generate videos using Kling 3.0 and Kling 3.0 Omni

Start by creating a new board, then use Generate video at the bottom of the page to begin a video generation.

From the model dropdown menu, choose Kling 3.0 or Kling 3.0 Omni as the video model.

Choose Sample from canvas, then use the dropper tool to pick an image and add sub-prompts.

Open Effects to apply Popular, Lighting, Color, Subject, Scene, or Style effects.

Choose Video, then use the dropper to select a canvas video as the composition reference. The reference steers structure, depth, edge placement, and the broader composition of the generated video.

For the reference input, use either a composition-reference video or a first or last frame.

For the reference input, use either a composition-reference video or a first or last frame.

To set the video's start frame or end frame, either use Sample from canvas directly or choose First frame or Last frame, then do one of the following:

- With the Sample from canvas tool, pick a canvas image, then choose Use as first frame or Use as last frame.
- Use Your device to upload a local image for the start frame or end frame.

Use Add shot to add and configure shots for the video. A single video generation supports a maximum of 5 shots.

For each shot, type a text prompt in the Prompt field describing the action in that shot.

Choose Aspect ratio from these options:

- Widescreen
- Square
- Vertical

Choose Resolution from 720p or 1080p.

Open Duration and move the slider to set a duration up to 15 seconds. With Kling 3.0 and Kling 3.0 Omni, duration can be adjusted per shot, so move the slider on each added shot as needed.

Move the slider for a shot to set that shot's duration.

Move the slider for a shot to set that shot's duration.

Selecting the settings icon lets you enter a seed number, which initializes generation and influences AI randomness. Reusing the same seed, prompt, and control settings can produce similar video clips.

For more controls, choose the Generation settings icon next to Duration.

Choose Generate.

Note

After the video is on the canvas, select it, open the More menu, and choose Open in Firefly video editor (beta) to send it into a new video-editor project. Multiple media files can also be selected; Firefly adds them to the video editor timeline automatically, preserving the order in which you selected them.

### Generate videos using Kling 3.0 and Kling 3.0 Omni — Generate a video using Marey

Start by creating a new board, then use Generate video at the bottom of the page to begin a video generation.

Set Marey as the video model.

When you have images intended for the first and last frames of the generated video, place them under First frame and Last frame, respectively.

Add images for the first and last frames, or choose those images from the canvas for video generation.

Add images for the first and last frames, or choose those images from the canvas for video generation.

The images uploaded for the first and last keyframes act as anchors, guiding the generation so the video begins and ends with them.

If a canvas image should become the first frame, choose Sample from canvas, then pick the image with the eyedropper tool.

Choose a canvas image to use as the generated video's first or last frame.

Choose a canvas image to use as the generated video's first or last frame.

As another method, use Upload image reference to upload a reference image.

Choose the aspect ratio for the generated video: Landscape, Portrait, Square, or Widescreen.

Open extra controls with the Generation settings icon beside Aspect ratio.

In Generation settings, change or fine-tune the configured video-generation settings.

In Generation settings, change or fine-tune the configured video-generation settings.

Enter a text description in the prompt bar.

Choose Generate.

Note

After the video is on the canvas, select it, open the More menu, and choose Open in Firefly video editor (beta) to send it into a new video-editor project. Multiple media files can also be selected; Firefly adds them to the video editor timeline automatically, preserving the order in which you selected them.

### Generate videos using Kling 3.0 and Kling 3.0 Omni — Generate a video using Ray2, Ray3, and Ray3.14

Start by creating a new board, then use Generate video at the bottom of the page to begin a video generation.

Set the video model to Ray2, Ray3, and Ray3.14.

When you have images intended for the first and last frames of the generated video, place them under First frame and Last frame, respectively.

Add images for the first and last frames, or choose those images from the canvas for video generation.

Add images for the first and last frames, or choose those images from the canvas for video generation.

The images uploaded for the first and last keyframes act as anchors, guiding the generation so the video begins and ends with them.

If a canvas image should become the first frame, choose Sample from canvas, then pick the image with the eyedropper tool.

Choose a canvas image to use as the generated video's first or last frame.

Choose a canvas image to use as the generated video's first or last frame.

As another method, use Upload image reference to upload a reference image.

From the Aspect ratio drop-down, choose the preferred aspect ratio for the generated video.

Open extra controls with the Generation settings icon beside Aspect ratio.

Enter a text description in the prompt bar.

Choose Generate.

### Generate videos using Kling 3.0 and Kling 3.0 Omni — Generate a video using Runway Aleph

Start by creating a new board, then use Generate video at the bottom of the page to begin a video generation.

Set Runway Aleph as the video model.

Under Composition, select Video to turn on the eyedropper tool. Then choose the canvas video you want as the reference, which helps the new video follow that reference video's composition.

Choose a canvas video to act as the composition reference for a new video generation.

Choose a canvas video to act as the composition reference for a new video generation.

An image can be supplied as the opening frame of the video. That first-frame reference helps establish the initial frame and guide the narrative direction from the start.

Choose the aspect ratio for the generated video: Landscape, Portrait, Square, or Widescreen.

Use the Generation settings icon beside Aspect ratio for more controls.

Note

Aspect ratio selection is unavailable when a video composition has been added.

Enter a text description in the prompt bar.

Choose Generate, then drag the created video onto the canvas.

The generated video follows the composition of the video used as the reference.

The generated video follows the composition of the video used as the reference.

### Generate videos using Kling 3.0 and Kling 3.0 Omni — Generate a video using Runway Gen-4 and Runway Gen-4.5 Video

Start by creating a new board, then use Generate video at the bottom of the page to begin a video generation.

From the Model dropdown menu, choose Runway Gen-4 or Runway Gen-4.5.

Select Sample from canvas or Image (required), then pick the image on the canvas with the eyedropper tool. In the context menu, choose Use as image reference and, if needed, add a sub-prompt to the main prompt.

Pick a canvas image as the reference, with optional auto-generated sub-prompts to enrich the video generation.

Pick a canvas image as the reference, with optional auto-generated sub-prompts to enrich the video generation. Note

The Image option is not offered for Runway Gen-4.5. You can still use the Sample from canvas icon to pull sub-prompts and add more context to the generated output.

Choose the aspect ratio for the generated video: Landscape, Portrait, Square, or Widescreen.

Note

Runway Gen-4.5 keeps Widescreen as the default Aspect ratio.

Use the Generation settings icon beside Aspect ratio for more controls.

Enter a text description in the prompt bar.

Choose Generate, then drag the created video onto the canvas.

Drag the generated video and drop it on the canvas.

Drag the generated video and drop it on the canvas.

### Generate videos using Kling 3.0 and Kling 3.0 Omni — Generate a video using Sora 2 and Sora 2 Pro

Start by creating a new board, then use Generate video at the bottom of the page to begin a video generation.

Set the video model to Sora 2 and Sora 2 Pro.

If reference images are already on the canvas, choose Sample from canvas, then use the eyedropper tool to select an image as the reference.

Use Upload image reference to upload a reference image.

Use Upload image reference to upload a reference image.

As another method, use Upload image reference to upload a reference image.

Choose the aspect ratio for the generated video: Widescreen or Portrait.

Use the Generation settings icon beside Aspect ratio for more controls.

For Sora 2 Pro, turn on Audio to create video with synchronized sound.

Enter a text description in the prompt bar.

Choose Generate.

### Generate videos using Kling 3.0 and Kling 3.0 Omni — Generate a video using Veo 2, Veo 3.1, and Veo 3.1 Fast

Start by creating a new board, then use Generate video at the bottom of the page to begin a video generation.

On the Firefly homepage, choose Ideate, then choose Create a board.

Choose Generate video at the bottom of the page.

Set the video model to Veo 2, Veo 3.1, or Veo 3.1 Fast.

To use an image as the opening frame of the generated video, add it under Image.

If a canvas image should be used as the first frame, choose Sample from canvas and pick the image with the eyedropper tool. In the context menu, choose Use as image reference; you may also attach a sub-prompt to the main prompt.

Choose Use as image reference to make a canvas image the first frame for video generation.

Choose Use as image reference to make a canvas image the first frame for video generation.

As another method, use Upload image reference to upload a reference image.

For the generated video's aspect ratio, choose Portrait or Widescreen. With Veo 3.1 Fast, landscape is the default.

Turn on Audio to create synchronized sound or music for the generated video.

Use Audio to generate sound together with the video.

Use Audio to generate sound together with the video. Note

Only Veo 3.1 and Veo 3.1 Fast can generate audio together with video.

Use the Generation settings icon beside Aspect ratio for more controls. This opens the right-side panel with these additional settings:

- Sub-prompts: browse a range of sub-prompts, from lighting through styles. Selecting a sub-prompt preview thumbnail adds it to the prompt bar.

- Seed: enter a seed number to initialize the process and influence AI randomness. Using the same seed, prompt, and control settings can create similar video clips.

Enter a text description in the prompt bar.

Choose Generate.

Preview the generated video, then drag and drop it onto the canvas.

Preview the generated video, then drag and drop it onto the canvas.
