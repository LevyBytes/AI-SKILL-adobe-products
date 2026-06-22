# Troubleshoot, App Integrations

> Adobe Firefly reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Troubleshoot; Known limitations in Firefly; Error while signing in to the Firefly website; No image on the screen when using Generative fill; Prompt triggers a language warning; Unable to generate content or images; Prompts can't be processed; App integrations; Firefly plugin for Figma; Generate Images; Generate Similar images; Remove Background from images; Apply Generative Fill; Edit images with text prompts; Expand Images; Generate videos; Your stuff.

## Troubleshoot

Known limitations in Firefly

Error while signing in to the Firefly website

No image on the screen when using Generative fill

Prompt triggers a language warning

Unable to generate content or images

Prompts can't be processed

## Known limitations in Firefly

### Learn what Firefly can do, and why some limits may appear.

Review Firefly's known limitations so you can use it more effectively and make informed choices when working with features such as Text to image or Generative fill.

### Firefly access

### Unable to use Firefly features with Shared Device Licenses

Shared Device Licenses provide desktop app access only, not services such as Firefly. For Adobe Firefly generative AI features, contact your IT admin and ask for a named user license or an Adobe Express license.

### Prompt to Edit returns an error in Firefly

Prompt to Edit currently works only with premium models. If your plan does not provide these models, that feature will not be available; generate a new image instead.

### Prompts

### Prompts aren't accurately translated

Prompts are currently supported in more than 100 languages through machine translation into English provided by Microsoft Translator. Because languages differ in nuance, generations from translated prompts can be inaccurate or unexpected. The Firefly team continues identifying and fixing issues as they appear. To help, report unsuccessful results by selecting the icon available on each image and sending feedback.

### Prompt and style changes require refreshed images

On the Firefly website, creating image variations with a new prompt or changes to the current text prompt requires new images to be generated. Adobe is actively developing the ability to enter a new prompt and adjust the theme and style without refreshing images.

### Generated results

### Distorted text in generated images

Some scenarios may produce irregularities, and the Text to Image feature still needs support for text and symbol generation within images. To report images that contain distorted or unclear text, select the icon shown when hovering over the image and submit feedback.

### Unrealistic body features in generated images

Model quality will improve over time, and generated content will continue to follow prompts more closely. Use the icon to send feedback on distorted facial or body features.

### Famous people and brands may be blocked in generated content

Firefly generates only images of public figures that are available for commercial use on the Stock website, excluding editorial content. If a text prompt mentions a famous person, company, or branded item that is not available in Adobe Stock, Firefly cannot use that information to generate an image. Remove those references by revising the prompt.

### Artist, band, or song names are not used for music generation

Firefly is trained only on licensed audio and music. It cannot use details about specific artists, bands, or songs to create a soundtrack. Remove those references by revising the prompt.

### Favorited images

### Styles may not stay attached to favorited images

When a favorited image depends on reference images or was created through the Show similar feature, the result is not fully optimized yet and can vary unexpectedly. Very long prompts can also drop applied Styles after the favorite is saved. Adobe is working on fixes for these issues.

### Favorited generated images can be removed

Favorites rely on your browser data, so they do not carry over to another browser, incognito mode, or a browser after its data has been cleared. Open the Firefly website in the same browser you originally used when you saved those favorites.

Note

Starting August 27, 2025, favorites stored by the browser remain available only temporarily before permanent deletion. That removal cannot be reversed. To retain favorites, download them to your device or open each one so it is saved into your generation history.

## Error while signing in to the Firefly website

### Trouble signing in to the Firefly website? Use a few quick checks to resolve connectivity problems.

### Connectivity issues

Errors can appear during Firefly website sign-in or activation when connectivity fails, including problems reaching Adobe's activation servers or completing website authentication. Messages may include "We are unable to activate [product name]. Product activation is required to use this product." or "You may have limited access to Adobe apps or service". Work through these connectivity fixes one at a time, continuing to the next only if the issue remains.

- Verify the connection to Adobe activation servers.
- Restore the hosts file.
- Confirm that secure sites are reachable.
- Inspect the GlobalSign Root CA certificate.

## No image on the screen when using Generative fill

### Resolve cases where Generative Fill does not load the uploaded image on the screen.

### Browser isn’t updated

Use a current version of your web browser. Browsers commonly show a notice or update option when an update is available; otherwise, open browser settings and check whether an update is needed.

- Google Chrome: Open the three-dot menu in the top-right corner, then choose Help > About Google Chrome.
- Safari: Open Safari in the top-left corner, then choose About Safari.

## Prompt triggers a language warning

### Steps to take after a language warning appears for Text to image prompts.

### Prompt is too short

Short English prompts can occasionally be classified as an unsupported language. Fix the issue by rewriting the prompt with three or more words.

## Unable to generate content or images

### What to check when content generation is unavailable on the Adobe Firefly website.

### Not enough generative credits available to generate content

Generative credits give access to generative AI features powered by Adobe Firefly. When a text or media-based prompt produces newly generated outputs, one credit is deducted from the monthly balance. The generative credit count refreshes each month according to the billing date for your plan. Learn more about how many generative credits you have in your account.

### Not adhering to the generative AI user guidelines or additional terms

Adobe may, at its sole discretion and at any time, limit, disable, suspend, or terminate access to generative AI features. Firefly use falls under the Creative Cloud generative AI additional terms as well as the generative AI user guidelines.

### Generative model is at maximum capacity due to high demand

When demand is high, capacity can be exceeded, including capacity for some partner model providers, and requests may time out. If the problem keeps happening, try another model.

## Prompts can't be processed

### Why Text to image prompts in Firefly may fail to process, plus how to address the problem.

### Prompt may not be aligned with Adobe generative AI user guidelines

If the message "We can't process this prompt" appears while you are generating image variations, revise the wording according to the generative AI user guidelines, then try again.

## App integrations

### Figma

Firefly plugin for Figma

Generate Images

Generate Similar images

Remove Background from images

Apply Generative Fill

Edit images with text prompts

Expand Images

Generate videos

Your stuff

## Firefly plugin for Figma

See how Firefly's generative AI capabilities fit into Figma-based design work.

A dedicated Firefly plugin now brings generative AI directly into Figma, so visual content can be generated, refined, and iterated within the design environment instead of moving between apps.

Through Figma's canvas and layer structure, the GenStudio plugin lets everyday-language prompts create and edit images on the canvas.

### Getting started

The Adobe GenStudio plugin is listed in the Figma marketplace alongside other plugins.

From the toolbar at the bottom of the workspace, choose the Actions icon.

Open the Plugins & widgets tab, then search for Adobe GenStudio.

On the Adobe GenStudio screen, choose Save to add the plugin to the workspace, then choose Run to launch it.

The Community tab in the left rail can also be used to find the plugin.

You can find the plugin from the Community tab in the left rail as well.

When the plugin asks you to sign in, provide the email address and password for the Adobe account so the plugin can be used in the Figma workspace.

Note

For later use, the GenStudio plugin can also export Photoshop format output from one Figma frame, multiple frames, or the entire document.

## Generate Images

Use text prompts and style references to create images inside the Figma workspace.

For design templates, images can be generated with Firefly Enterprise and GenStudio plugin in Figma. The feature takes text descriptions, supports settings such as aspect ratio and style, and places the images directly onto the canvas.

Before starting, confirm access to:

- The Figma desktop app, or Figma in the browser
- Firefly Enterprise plus the GenStudio plugin in Figma
- An active Adobe account that includes Firefly access

### Generate and configure your image

Choose Generate Image in the plugin panel.

Type a text prompt that describes the image to create.

From the Model dropdown menu, choose a model, or select a custom model that you created.

Add a text description so the generate button becomes active.

Provide a text description to enable the generate button.

Open the General settings panel with the settings icon, then adjust generation options:

- Aspect ratio: choose one or more aspect ratios that fit the design need, producing images at different aspect ratios.
- Style: choose Upload image to use a reference from your device or AEM, or choose Browse Gallery to pick from Adobe Stock images. Then adjust the Strength slider to set how strongly Firefly should follow the style reference.

The Strength slider is shown only after a reference image has been added.

After a reference image is added, the Strength slider becomes available.

Use the back button to return to the main generation screen.

Choose the generate icon to create the images.

Generated images appear in the plugin panel. To place one on the canvas, use one of these methods:

- Drag an image from the panel and drop it on the canvas
- Pick a canvas frame first, then choose an image in the plugin window to insert it
- Use the upload icon to put an image on the canvas
- Open the three dots icon, then choose Download all to Figma.

After images have been generated, open the three dots icon for these additional actions:

- Choose Generate more to make additional variations from the same prompt
- Choose Copy prompt to reuse the text description

Tip

For individual image refinement, choose the edit icon on any generated image, then choose Generative Fill or Generate Similar.

## Generate Similar images

Use the GenStudio plugin to produce variations from an existing image.

With Generate Similar in the Firefly plugin for Figma, a reference image can be turned into multiple variations. This helps explore design alternatives quickly without starting over.

Before starting, confirm access to:

- The Figma desktop app, or Figma in the browser
- Adobe GenStudio plugin in Figma
- An active Adobe account that includes Firefly access

In the Firefly plugin panel, choose Generate Similar.

Choose the source image in one of these ways:

- Select an image already on the Figma canvas
- Choose Upload image to upload from your device
- Choose Browse AEM assets to access assets from AEM.

Use the generate icon to create variations based on the reference image.

Choose the edit icon on individual images to continue editing them.

Use the edit icon on individual images when further editing is needed.

Place generated images on the canvas:

- Drag an image from the plugin and drop it onto the canvas
- Pick a canvas frame, then choose an image in the plugin window.
- Use the upload icon to place an image on the canvas.
- Open the three dots menu and choose Download all to Figma.

Tip

Open the three dots menu, then choose Generate more to create more variations from the same reference image.

## Remove Background from images

Use the GenStudio plugin to remove image backgrounds inside the Figma workspace.

Backgrounds can be removed from images without leaving Figma, which keeps the design workflow moving. In Figma projects, the Remove Background feature in the Firefly plugin detects image backgrounds automatically and removes them.

Before starting, confirm access to:

- The Figma desktop app, or Figma in the browser
- Adobe GenStudio plugin in Figma
- An active Adobe account that includes Firefly access

In the Firefly plugin panel, choose Remove Background.

Choose the image in one of these ways:

- Select an image already on the Figma canvas
- Choose Upload image to add from your device
- Choose Browse AEM assets to access files from Adobe Experience Manager

Choose Remove to process the image.

After the image background has been removed, a success message appears.

A success message appears once background removal is complete.

When the image came from the canvas, the processed image replaces it automatically. For an upload from your device or AEM, place the generated image by dragging it onto the canvas or choosing Insert Image.

Note

Images selected directly from the canvas keep their original position and size, so existing designs are easier to update.

## Apply Generative Fill

Use AI-powered masking in Figma to add image content or change existing areas.

In the Firefly plugin, Generative Fill lets you target a specific part of an image and add, replace, or modify what is there. Short text prompts let you make image edits inside your Figma workspace.

Before starting, make sure these requirements are in place:

- Access through the Figma desktop app or browser-based Figma
- The Adobe GenStudio plugin available inside Figma
- An Adobe account that includes Firefly access

### Create a masked area and generate content

In the Firefly plugin, choose Generative Fill.

Provide an image by using one of these options:

- Select an image already on your Figma canvas.
- Use Upload image to add one from your device.
- Use Browse AEM assets to reach Adobe Experience Manager files.

To discard the current mask and begin again, use Reset in the upper-right corner of the canvas.

Use Reset in the canvas upper-right when you need to remove the mask and restart.

Choose the brush tool and paint the area you want to change. Adjust the brush size from Brush settings when needed.

Tip

Use the Select background icon when you want to isolate the subject before running generative fill. Once the background is selected, the brush tool becomes unavailable.

Type a prompt that describes what should be generated in the masked region.

Use the generate icon to create prompt-based variations.

Generated results show in the plugin panel. Add one to your canvas with any of these methods:

- Drag an image directly to the canvas and drop it there.
- Select a frame on the canvas, then choose an image in the plugin window to insert it into that frame.
- Use the upload icon to put an image on the canvas.
- Open the three dots icon, then choose Download all to Figma.

After image generation, the three dots icon gives you extra actions such as copying the prompt for reuse, and the pencil icon opens additional generative actions, including Generate Similar, for making variations from a single result.

## Edit images with text prompts

Use text prompts to change images without leaving your Figma workflow.

Describe the edits you want in everyday wording to transform an existing image. Firefly image editing can be used in your Figma workspace to adjust design elements, and Prompt to Edit targets particular image details while keeping the overall composition intact.

Before starting, make sure these requirements are in place:

- Access through the Figma desktop app or browser-based Figma
- The Adobe GenStudio plugin available inside Figma
- An active Adobe account that includes Firefly access

### Set up your image for editing

In the Firefly plugin, choose Prompt to Edit.

Provide an image by using one of these options:

- Select an existing image on the Figma canvas.
- Use Upload image to add one from your device.
- Use Browse AEM assets to reach assets from Adobe Experience Manager.

Open General settings with the settings icon, then change Aspect ratio as needed.

Use the back button to go back to the main generation screen.

Type a prompt that describes the image changes you want.

Adding a prompt enables the Generate icon.

The Generate icon becomes active after you provide a prompt.

Select the generate icon.

Move images onto the canvas with any of these methods:

- Drag an image directly to the canvas and drop it there
- Select a frame on the canvas, then choose an image in the plugin window to insert it
- Use the upload icon to put an image on the canvas
- Open the three dots icon, then choose Download to Figma.

Tip

The three-dot menu includes options such as Generate more for fresh variations and Copy prompt for reusing the same text description. On a generated result, the edit icon opens tools such as Generative Fill and Generate Similar.

## Expand Images

Use the GenStudio plugin to resize images, then fill the added space with generated content.

Generative Expand changes an existing image to fit a specific template size. It extends the original image with AI-generated surroundings so the result keeps visual continuity while reaching the target dimensions.

Before starting, make sure these requirements are in place:

- Access through the Figma desktop app or browser-based Figma
- The Adobe GenStudio plugin available inside Figma
- An active Adobe account that includes Firefly access

Select Generative Expand in the Firefly plugin panel.

Select an image on your Figma canvas.

Adjust the generative expand temporary frame to the new dimensions you want, or reposition the image anywhere inside that frame.

A Generative Expand temporary frame surrounds the selected image in the workspace.

The workspace shows a Generative Expand temporary frame around the selected image.

Type a prompt that describes what the new areas should contain, then select Generate.

Tip

For more accurate results, describe the environment, colors, or elements you want in the expanded areas.

Choose any one expanded image to replace the original image on the canvas.

## Generate videos

Create custom video content in the Firefly Enterprise and GenStudio plugin with prompts, frames, and camera controls.

With Generate video in the Firefly Enterprise and GenStudio Figma plugin, text and images can become videos. You can define first and last frames, set camera movement, apply styles, and use simple prompts to refine the result.

### Generate videos from text

On the Firefly Enterprise and GenStudio plugin homepage, choose Generate video.

Type a prompt that describes the scene to create.

A prompt is required before the Generate button becomes active.

The Generate button becomes available after you add a prompt.

Use the settings icon when you want more control through additional video settings and more precise generation.

Select Generate to create the video.

When generation finishes, preview the video and compare the available variations. The first results can be used as a base for later refinement.

### Add frame guidance to generate videos from images

Select Generate video to open the video creation interface.

In First frame, define the opening visual by using a canvas image, uploading through Your device, or choosing an image from Adobe Experience Manager.

After a First frame is added, the Last frame option becomes available.

Adding First frame makes Last frame available.

In Last frame, define the ending visual by using a canvas image, uploading through Your device, or choosing an image from Adobe Experience Manager.

Type a prompt that describes the scene you want.

Use the settings icon when you want more control through additional video settings and more precise generation.

Select Generate to create the video with frame guidance.

Tip

Combine prompts with frames for results that are more controlled and consistent. Frames guide the video's visual style and composition from start to finish.

### Customize video settings

Before creating a video, tune the settings that affect frame use, camera treatment, and style:

The Settings panel controls camera motion, angle, and shot size.

Camera motion, angle, and shot size are adjusted in the Settings panel.

- Resolution: choose 560p, 720p, or 1080p as the target resolution.
- Aspect ratio: choose Widescreen (16:9), Square (1:1), or Vertical (9:16) for the preferred frame shape.
- Frames: use First and Last frames to set the generated video's beginning and ending points.
- Camera: sets the way the scene is captured.
- Shot size: choose framing such as Extreme close up, Close up, Medium shot, Long shot, or Extreme long shot.
- Camera angle: set the viewing angle with choices such as None, Aerial shot, Eye level, High angle, and more.
- Motion: choose camera movement such as Zoom in, Zoom out, Pan left, Pan right, and more.
- Style: choose the generated video's look from options such as 2D, 3D, Anime, Black and white, Cinematic, and more.
- Seed: enter a seed number to initialize generation and influence the AI's randomness.

Note

A first frame can be used by itself, but a last frame requires a first frame. When either a first or last frame is present, options including Shot size, Camera angle, and Style may be unavailable.

## Your stuff

Learn how to keep generated assets and project files organized in the central workspace named Your stuff.

Within the Firefly Enterprise and GenStudio plugin interface, Your stuff is the second tab along the top. It acts as the management hub for items you create with Fireflu, grouping content into practical sections so assets are easier to find and use no matter what type they are or when they were made.

Your stuff separates content into two primary sections, each supporting a different part of the creative workflow.

### Projects

Projects help group related files into folders based on your project needs or preferred organization. Instead of leaving every asset in one flat list, projects let you collect content by purpose or by another structure that fits your workflow.

Projects provide these workflow benefits:

- Sort files into folders so they are easier to access and organize.
- Control permissions for an entire project instead of handling each file separately.
- Share full collections with collaborators in one action rather than sharing individual files.
- Keep content from different Adobe apps in one central area with filtering options.
- Manage files efficiently with commands such as Place on canvas, Download, or Delete permanently.

Use the Your stuff tab to browse, manage, and create projects.

Projects can be browsed, managed, and created from the Your stuff tab.

For more detail on creating and organizing projects across Adobe apps, review project management in Firefly Creative Cloud.

### Generation history

Generation history keeps a full record of generative AI work created in Firefly Enterprise and GenStudio. Each image or video you generated is listed there, so you can follow your creative iterations and return to earlier explorations.

Activity history supports several workflow actions for previously generated assets, including previewing them and:

- Opening them on the Firefly web for more editing.
- Using Place on canvas to add them to your Figma canvas.
- Downloading them to your local device.
- Using Delete permanently to remove them from the collection.
- Marking them as a Favorite by selecting the star icon.

The Generation history panel also supports multi-select for managing assets.

You can multi-select assets and manage them in the Generation history panel as well.
