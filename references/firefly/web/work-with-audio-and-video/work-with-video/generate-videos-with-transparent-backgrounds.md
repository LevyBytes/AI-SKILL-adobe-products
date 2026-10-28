# Generate videos with transparent backgrounds

Use Text to video or Image to video to create foreground-only subjects with background transparency.

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

- [Style Presets](../../../cloud-services/style-presets.md)
