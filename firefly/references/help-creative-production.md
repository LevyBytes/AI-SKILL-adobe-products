# Creative Production Overview, Remove Or Replace Backgrounds On Multiple Images, Crop Multiple Images Simultaneously, Color Grade Multiple Images Simultaneously ...

> Adobe Firefly reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Firefly Creative Production for Enterprise overview; Remove or replace backgrounds on multiple images; Crop multiple images simultaneously; Color grade multiple images simultaneously; Best practices for background removal in Creative Production; Reframe multiple videos simultaneously; Best practices for Reframe Videos in Creative Production.

## Firefly Creative Production for Enterprise overview

### How Firefly Creative Production for Enterprise supports automation, scaling, and governance for high-volume content workflows across the full content supply chain.

### What is Firefly Creative Production for Enterprise?

Adobe positions Firefly Creative Production for Enterprise as an enterprise-scale content automation offering for the content supply chain. Under that product umbrella are workflow authoring, headless creative services, production runtime, and operational infrastructure that help teams generate on-brand outputs at scale.

Organizations use it when they need governed, repeatable systems instead of one-off creative production. Common scenarios include campaign variants, localization, merchandising, templated asset production, and additional high-volume content workflows.

### What is included in Firefly Creative Production for Enterprise?

Depending on the plan and enabled services, Firefly Creative Production for Enterprise may provide capabilities and infrastructure for building and operating content workflows.

- Visual workflow authoring and orchestration through workflow building capabilities
- Firefly Services API access for headless or programmatic use cases
- Operations backed by an organization-level pool of credits for usage
- Enterprise cloud storage together with Adobe App Builder access for custom actions and extensions
- Packaged bulk actions and other focused production tools, when enabled for the organization
- On some plans, engineering support deployed forward to customize workflows, connect systems, and assist with deployment

Note

- Organizations on select enterprise plans can use Firefly Creative Production. For company-specific plan details, contact Adobe Sales. If your organization has Creative Cloud for enterprise, ask your Adobe Account Manager about adding Firefly Creative Production.
- Plans that include premium generative AI features also include Remove background, Crop, and Color grade preset workflows. The complete plan list is available here.

### Who is Firefly Creative Production for Enterprise for?

Firefly Creative Production for Enterprise serves enterprise marketing, creative, production, operations, and technical teams that must scale content while maintaining control over quality, brand standards, governance, and cost.

Across many organizations, creative leads and creative technologists establish templates, rules, and workflow logic. Developers, systems integrators, or technical operators attach those workflows to the surrounding stack. Marketing and production groups run the published workflows to create outputs.

- Creative teams establish the templates, hero assets, and brand guardrails.
- Creative technologists and technical operators convert those rules into reusable workflows.
- Marketing and production teams generate outputs at scale through published workflows, guided experiences, APIs, or bulk actions.

### Availability

Availability is determined by your organization's Adobe enterprise offering, purchased entitlements, and admin configuration. Users do not all require identical access levels.

Some organizations reserve workflow authoring and admin access for a smaller specialist group, while a broader user group can run published workflows, guided experiences, APIs, or bulk actions.

### How to get value from Firefly Creative Production for Enterprise?

### Workflow building

Teams build workflows by converting an existing production playbook into a reusable system. The work includes defining inputs, assembling workflow steps, adding logic, testing the flow, and verifying that expected outputs are produced.

- Assemble repeatable steps on a visual workflow canvas.
- Begin with a template, or create a use-case-specific workflow from scratch.
- Before production use, test the workflow, refine it, and validate the results.

### Workflow integration and extension

At this stage, teams link the workflow with the broader content supply chain. Source systems, review tools, storage locations, APIs, and custom actions are connected so the workflow can operate inside the current environment.

- Link workflows with Adobe systems and third-party systems.
- Include custom actions, models, or agents as needed.
- Keep metadata and handoffs intact along the production path.

### Workflow deployment

Deployment makes a validated workflow available for other teams to use safely. The stage can package the workflow as reusable template content, present it as a guided experience, or expose API-backed functionality for embedding elsewhere.

- Publish workflows so teams can reuse them.
- Make workflows available through guided run experiences or programmatic endpoints.
- Enforce governance, permissions, and change controls.

### Workflow execution

During production, teams execute published workflows for one-off jobs or large batches, watch progress, inspect results, and spend review time on exceptions instead of every asset.

- Run a single job or a batch of jobs from structured inputs.
- Monitor status, logs, and outputs while work is running.
- Inspect flagged items and rerun only the pieces requiring changes.

### How does pricing work?

Workflow Builder tracks consumption in operations, not in individual actions. Total cost is based on workflow type, generated asset count or video seconds, and the contracted operations rate. Refer to the rate card for more information.

## Remove or replace backgrounds on multiple images

### Bulk-remove image backgrounds and replace them with another image or with a colored background.

Before you begin:

Review the technical specifications and best practices so the Remove background preset workflow can produce optimal results.

Select Production on the Firefly homepage.

Select Remove background.

Select From device for multiple local JPG, PNG, or TIFF uploads, or use Connect to storage for images coming directly from cloud storage such as Dropbox.

Pick the upload method that matches where the images are stored, either locally or in the cloud.

Choose the upload path that fits your image location, whether on a device or in cloud storage.

To remove backgrounds from every uploaded image and replace them with transparent backgrounds, turn on Transparent background under Background variations.

Transparent background removes the background from each uploaded image.

The Transparent background option clears the background from all uploaded images.

To replace every background in a batch, enable Image backgrounds and upload the replacement background image from your local device or cloud storage.

Upload the images that should become the new background in place of the current one.

Add the images you want to use as replacement backgrounds for the existing background.

You can add several background images for replacement after the background is removed, but the longest side (width or height) of each image must not be greater than 8190 pixels.

For a solid-color replacement across the whole batch, choose Color backgrounds, provide a HEX value, then select the button.

Create one consistent colored background across all uploaded images.

Create one uniform color background for all uploaded images. Tip

The count shown below the Continue button previews how many total outputs will be generated after background removal. This number is calculated from the uploaded original images plus the selected background variations.

Select Continue.

In the Final processing details dialog box, choose the file types for the processed images. Select JPG, PNG, PSD, or any combination, then select Process.

Open the Job log tab to check processed-file status or download the files. After batch processing finishes, you also receive an email containing a link for downloading all images.

The following images show results created with different background variations in Remove background.

### PSD as output file type

Choosing PSD as the output file type creates a processed file with these parts:

- One layer containing the image and mask
- One layer for every background color or image
- One color decontamination layer used to refine edges

Example showing the original image in a masked layer, with uploaded background images placed beneath it as separate layers.

Example with the original image held in a masked layer and the uploaded background images below it on separate layers.

For example, when you specify three solid colors and add one background image, the PSD file contains six layers:

- Layer 1: Color decontamination layer
- Layer 2: Original masked object layer
- Layers 3, 4, and 5: Three solid color backgrounds
- Layer 6: Background image

## Crop multiple images simultaneously

### Crop thousands of image files in one run for social media, email, web banners, and other uses.

On the Firefly website, choose Creative production.

Open the Crop module.

For uploads, choose From device for multiple local JPG or PNG files, or use Connect to storage for direct cloud uploads such as Dropbox.

Bring in images from either a device or cloud storage.

Add image files from local storage or cloud storage.

In Custom, enter a custom pixel width or height. When you need several crop dimensions, use the button to add multiple custom options, then select the checkboxes that appear.

Select from different size options, and the output includes multiple versions of the same image, cropped to match each selection.

Choose different size options to receive multiple versions of the same image, with each crop matching your selections. Note

Each selected size creates a new image. For example, selecting 10 different size options from presets or custom sizes produces 10 resized versions for each image.

You can also select any standard social media preset in the Presets dropdown.

Presets provide sizes tuned for social media platforms and websites.

The Presets dropdown helps size uploaded images for social media platforms and websites.

Select Continue. When Final processing details opens, choose JPG or PNG as the file extension, then select Process.

When batch processing completes, Adobe Firefly emails you a link for downloading the cropped images.

## Color grade multiple images simultaneously

### Color grade multiple image files at the same time for a consistent visual result.

On the Firefly homepage, choose Creative Production.

Open the Color grade module.

Use one operation to apply color grading across multiple image files and create a consistent appearance.

Use one operation to color grade multiple image files and keep the outputs visually consistent.

Select From device for multiple local JPG or PNG uploads, or choose Connect to storage for direct cloud uploads such as Dropbox or AEM.

Upload multiple images for color grading with Auto-tone preset or custom presets.

Add multiple images so Auto-tone preset or custom presets can be used for color grading.

In Preset variations, turn on Auto-tone preset so Firefly automatically applies suitable tonal adjustments to uploaded images. The adjustments tune brightness, contrast, exposure, shadows, highlights, and color balance.

To automatically enhance uploaded-image tone, enable Auto-tone preset in the Preset variations section.

Enable Auto-tone preset in the Preset variations section to automatically improve tone for uploaded images.

If you have custom presets to apply for a different group of processed outputs, enable Custom presets. Then upload XMP files containing custom presets from your device or online storage.

Select Custom preset to upload XMP files and apply your personalized color grading adjustments.

Choose Custom preset when uploading XMP files to apply personalized color grading adjustments.

After uploading multiple custom preset files, choose any subset to apply.

Use multiple presets to color grade images together and create multiple processed outputs.

Add several presets so the images are color graded simultaneously and multiple outputs are produced.

Example: uploading 100 images and applying three custom presets to each image creates 300 processed images. Each image receives three versions, one per preset. Selecting Auto-tone preset as well raises the total to 400, because Auto-tone preset processes another 100 outputs separately.

Select Continue.

When Final processing details opens, enter a job name and select Process.

You receive an email with a link for downloading the images in JPG format. You can also open the Job log tab to view status and download the outputs.

These examples show the original image beside processed versions, one using Auto-tone preset and another using a custom preset.

### View Color grade job status and details

To view every processed color grading job, see its details, and download final outputs, go to the Job log tab on the Creative Production page. Job listings remain available for 30 days and then stop appearing on the page.

The job log page gives one centralized view of all processed jobs from the previous 30 days.

The job log page centralizes all processed jobs from the past 30 days.

## Best practices for background removal in Creative Production

Last updated on Sep 4, 2025

### Ways to use Firefly Creative Production's background removal feature for optimal results.

For the strongest results with Remove background, choose images that make the intended subject easy to identify; those images usually produce the most accurate removal and replacement. When the subject is less distinct, precision can vary. Knowing these differences helps you choose suitable images, increase automated background removal effectiveness, and improve outcomes.

### Background

### Uniform backgrounds

For strongest results, choose studio-shot images with balanced lighting and a plain or uniform backdrop. Clean, neutral backgrounds reduce color interference and make accurate background removal or replacement easier, helping produce the desired outcome.

### Complex backgrounds

Busy outdoor scenes, crowded indoor settings, or backgrounds that closely resemble the subject's texture or pattern can make processing more difficult and may reduce precision.

### Contrast

### High-contrast images

For background removal, choose images where color or tone clearly separates the subject from the background. Well-lit images with sharp, clearly defined edges further improve accuracy and make the process more efficient.

### Low-contrast images

Subjects that closely match background color or tone, dim lighting, excessive brightness, or soft edges can make accurate background detection and removal harder.

### Subjects

### Well-defined subjects

Effective background removal is easier with products or models that have clear edges and distinct outlines, along with objects that use simple geometric shapes or distinct textures. This mix can produce cleaner, more precise results.

### Indistinct subjects

Highly reflective or transparent objects in images, such as glass, mirrors, chrome finishes, or transparent plastics, can confuse edge detection and cause unintended background removal results.

### Lighting

### High-quality lighting

Even, diffused lighting, minimal shadows, and consistent exposure help processing detect subjects precisely, improving background removal efficiency and quality.

### Poor lighting conditions

Strong shadows, glare, uneven exposure, or photos captured under mixed or changing lighting can affect background removal output quality.

### Image details

### Complex details

Background removal depends on the object's specific characteristics in the image and may be imperfect with extremely small or intricate details.

### Examples of images following the recommended best practices

These sample images are organized by category and show inputs that tend to work well when the Remove background feature removes or swaps a background. Strong automatic background removal usually depends on conditions like these:

- Clear images with strong separation between subject and background
- Plain backgrounds, including uniform or solid-color areas
- Consistent, high-quality lighting
- Subjects with clearly visible edges
- Matte or semi-gloss materials that avoid strong reflective glare

### Fashion

### Beauty

### Packaged goods

### Technology

### Recommended output formats

Use the following guidance after images have been processed with the Remove background feature.

- Reserve the results for digital web display. Do not use them for Out-of-home (OOH) placements, including billboards or public digital signage.
- When replacing a removed background, choose a color close to the original background where possible. A similar background color lowers the chance that unwanted color contamination appears in the processed output.

## Reframe multiple videos simultaneously

### Reframe many videos at once for different screen formats, with scene-change detection helping place the crop accurately.

Note

- Reframe videos is limited to Firefly Creative Production for Enterprise Plan users.
- Review the technical specifications and the best practices for bulk video reframing when using the Reframe videos (beta) preset workflow.

On the Firefly homepage, choose Production.

Choose Reframe Video (Beta).

Use From device to upload as many as 10 videos from your local device, or choose Connect to storage to upload straight from cloud storage such as Dropbox or AEM. Uploaded videos must use MP4 or MOV and each file must be 1 GB or smaller.

Add the videos for reframing in MP4 or MOV format, keeping every file at or below 1 GB.

For reframing uploads, use MP4 or MOV files and keep each one no larger than 1 GB.

To guide the reframe focus, type keywords that identify subjects in the videos, such as "coffee mug", "car", or "bird". Those keywords help Firefly find the subjects and frame around them.

Use subject keywords so the videos can be searched for the items that should drive the reframe.

Enter keywords for the subjects to help Firefly identify where reframing should center in each video.

You may leave this step out and allow Firefly to detect the video subjects automatically for focus.

In Size variations, select from available presets that provide ready-made frame sizes. These choices cover many output dimensions, helping you resize video for platforms such as Reels for Instagram, Video Ads for LinkedIn, and others.

Select presets when you need to reframe many videos quickly for destinations such as social media.

Use preset sizes to generate bulk reframes for different platforms, including social channels.

For dimensions that are not covered by presets, choose Custom and enter the width and height values you need.

When the output requires a custom frame size, define it in Custom and add it for the job.

Create custom frame dimensions in Custom when your video outputs need a size outside the presets.

After you enter the frame width and height in pixels, select the icon to add that size. Every custom ratio appears under Custom, where it can be selected or removed when needed.

When more than one frame size is selected, the number below Continue shows how many output videos processing will create.

For example, uploading five videos and choosing three social media presets plus two custom sizes produces 25 processed videos. Each of the five uploaded videos receives three versions from the selected presets and two versions from the custom selections.

Select Continue.

In the Final processing details dialog box, provide a job name and select Process.

An email will include the download link for the processed videos. The Job log tab also lets you check status and download outputs.

The job log page collects processed jobs from the previous 30 days in one view.

Processed jobs from the past 30 days are available together on the job log page.

## Best practices for Reframe Videos in Creative Production

### Use Firefly Creative Production's video resize and reframe preset workflow effectively for better output results.

Before preparing videos for automatic resizing and reframing with the Reframe Videos (beta) preset workflow in Creative Production, keep these points in mind.

### Videos with a single subject

- Use center-cut safe footage with one clear subject so the video can be cropped successfully into different aspect ratios.
- When the intended subject is not the strongest visual element in the frame, add focal point keywords that identify what should be highlighted.

### Videos with multiple subjects

During processing, Reframe Videos (beta) changes the frame as attention moves from one subject to another. For smoother tracking and steadier framing across a multi-subject video:

- Choose videos with limited motion so focus remains stable when subjects change.
- Prefer one continuous shot and avoid frequent cuts, angle shifts, or abrupt transitions.

### Videos with graphics and text

- Keep text, logos, and other graphics aligned with the main subject, or adjust them to match scene changes. For example, wide-screen graphics can be cropped away when the camera automatically chooses and reframes the subject, particularly while motion or scene transitions occur.

### Other considerations

- With focal point keywords, Reframe Videos (beta) identifies the visually largest subject and uses it as the reframe focus.
- For footage shot on a wide-angle lens, keep the subject centered in the source video. This helps avoid lens distortion when a subject near the video edge is reframed.
- Reframing may follow the subject to keep it visible. That tracking can make camera artifacts such as shake, jitter, or rolling shutter more noticeable.
