# Dynamic Graphics Render Overview, Capabilities Supported By Dynamic Graphics Render Api, Modify Videos By Editing Frames

> Adobe Firefly reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Dynamic Graphics Render API overview; Capabilities supported by Dynamic Graphics Render API (DGR); Modify videos by editing frames.

## Dynamic Graphics Render API overview

### Understand how Dynamic Graphics Render API (DGR) links motion graphics templates (MOGRTs) made in Adobe After Effects to an API-led automation workflow.

Dynamic Graphics Render API combines motion graphics templates (MOGRTs) with a data-driven automation workflow that connects a structured data source, such as CSV, to rendering at scale. Compared with traditional MOGRT use, the DGR API makes many video variants possible while preserving brand consistency and production quality. Benefits include:

- Scale from a single template: Produce many video variants from one template by dynamically updating images, audio, text, CTAs, and personalized elements, which is useful for campaign optimization.
- Localization made easy: Bring customer-supplied localized text from outside datasets into structured templates so language- and region-specific versions render automatically without rebuilding the video.
- Efficient workflows: Reduce production bottlenecks and automate manual video editing work, letting creative teams render many video variations without depending on After Effects experts.

What is a Motion Graphic Template?

Motion Graphics Templates, or MOGRTs, are reusable templates built in Adobe After Effects and commonly used in Adobe Premiere to standardize approved graphics elements. They let motion designers build professional video graphics, including lower thirds, titles, intros, and outros, with text, colors, and images that can be customized. In the usual workflow, Premiere users update those elements without opening After Effects, helping branding stay consistent while editing moves faster.

### Key features and capabilities

### Customizing MOGRTs

- Content swap (text, image, audio, or video): Generate multiple variations from a single template while keeping composition, timing, and animation intact. Examples include new offer copy for e-commerce video ads, different featured products in product explainer videos, and on-screen text replacement for localization.
- Expression controls support: Uses sliders, checkboxes, and dropdowns for configuration and control.
- Full 2D and classic 3D capabilities: Gives full creative control in 2D and classic 3D compositions for audience-focused graphics. Support does not extend to Advanced 3D, Substance 3D, or Maxon Cinema 4D.
- Custom encoder presets: Configure the video encoder for common formats, including Apple ProRes and H264. This supports file-size and quality management while matching video pipeline settings.
- Custom fonts, vertical text, and copyfitting: Lets any licensed font-face be used for brand consistency, language needs, and creative control. After Effects font features, expressions, and layout are supported.

### Helpful resources

- Learn how to get started with Dynamic Graphics Render API
- Explore Firefly Audio and Video APIs

## Capabilities supported by Dynamic Graphics Render API (DGR)

### Compare Dynamic Graphics Render API (DGR) support for Motion Graphics Template (MOGRT) capabilities with MOGRT use in Adobe Premiere.

Note

The After Effects Project (AEP) file format is outside Dynamic Graphics Render API (DGR) support.

## Modify videos by editing frames

### See how to modify a frame from a generated or uploaded video in Adobe Firefly, then use that edit to create a new video.

In the Firefly Generate video module, you can select any frame from generated or uploaded footage, edit that frame as needed, and use the edited frame to generate a new video that includes your changes.

On the Firefly homepage, choose Generate in the left rail, then choose Generate video.

Add a video:

- Open Edit at the top of the page, then upload a video from your local device or Adobe cloud storage.
- Create a new video in the Generate tab, then choose Edit at the top of the page.

In the Edit tab, choose Edit frame from the left rail.

Choose Edit frame in the left rail to show frame-editing choices for the video.

Use Edit frame from the left rail to open the available frame-editing options.

Choose the model that will generate the video from the edited frame. The current partner model choices are:

- Runway Aleph 2
- Ray3.14 Modify
- Ray3 Modify

Pick a partner model for generating the new video from the edited frame.

Choose the partner model that should produce the new video from the edited frame.

The options shown below the video preview depend on the selected model:

- Runway Aleph 2 model: Edit current frame
- Ray3 models: Edit first frame, Edit last frame

Move through the video until you reach the frame to change, then pick one of the Edit frame options. The chosen frame opens on the Edit image page.

Select the source for the frame to edit: a frame from the video, an uploaded file, or Adobe Cloud Storage.

Choose whether the editable frame comes from the video, an upload, or Adobe Cloud Storage.

Edit the image with options such as Prompt, Markup, Remove, and more.

Use the tools in the left rail to change the selected frame before you generate the next video.

Before generating the new video, modify the chosen frame with the editing tools in the left rail.

When the edits are ready, choose Save in the upper-right corner. The edits are saved and you return to the video edit page.

Add a prompt for the video you want, then choose Generate to create a new video from the edited frame.

Inspect the generated video, update the prompt or model if necessary, and choose Generate to make another version.

Review the resulting video, refine the prompt or model when needed, then choose Generate for a new version. Tip

When using Runway, include directional guidance in the prompt. State how subjects move, when actions occur, and whether motion should obey realistic physics for more predictable video results.
