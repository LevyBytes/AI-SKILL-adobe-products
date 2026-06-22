# Bulk Actions Overview, Adobe Firefly Creative Production For Enterprise Faq, Run Workflows, Workflow Builder Rate Card ...

> Adobe Firefly reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Bulk Actions Overview; Adobe Firefly Creative Production for Enterprise FAQ; Run workflows; helpx_adobe_com_firefly_web_work_with_enterprise_features_creative_production_workflow_builder_rate_card_html; Create professional headshots in bulk.

## Bulk Actions Overview

Learn to run bulk actions in Firefly Creative Production, including background removal, image color grading, and video reframing.

Use Firefly Creative Production for Enterprise bulk actions to generate professional content at scale with little manual work.

The no-code Creative Production interface includes preset bulk actions for production work on batches of images and videos without technical dependencies. This saves time and can reduce or remove the need to outsource API integration work. These out-of-the-box preset workflows let teams scale asset production from a single image or video to thousands in only a few clicks.

### Creative Production preset workflows

Creative Production is built for creative teams that may lack dedicated IT support. Access requires an organizational Firefly Services or Firefly Creative Production entitlement. After enablement, users must be assigned access through the Adobe Admin Console. Ask your Adobe administrator for access if needed.

Admin Console administrators manage access, and the available path depends on the entitlement type:

- Firefly Services
- Firefly Creative Production

For more details, review assigning users to Firefly Creative Production. For questions about granting access, reporting, or limitations, use the FAQ.

Note

Image-editing tasks and preset workflows count against the number of operations included in your organization-wide Firefly Services API contract, with the count based on task complexity.

- English is currently the only supported language.

  - Desktop only; mobile is unavailable right now.
  - No minimum height is required; display width is 768 px.

- For AEM integration, use AEM as a Cloud Service at version 2024.10.18175 or later; only Author Tier is supported, not Delivery Tier.

## Adobe Firefly Creative Production for Enterprise FAQ

Find answers to common questions about Firefly Creative Production for Enterprise.

Organizations usually raise these questions while evaluating or onboarding Firefly Creative Production for Enterprise. The FAQ groups them around workflow capabilities, usage measurement, product overview, and access and entitlements.

Firefly Creative Production for Enterprise is Adobe's offering for scaled creative production. Teams can assemble and run governed, organization-ready workflows that automate repetitive creative tasks, including batch image operations and reframing.

The product is intended for creative, studio, and operations teams that need repeatable production pipelines. It supports organizations handling high-volume creative production tasks through automated workflows.

Users get access after an organization enables Firefly Creative Production for Enterprise. An admin assigns the correct product entitlement in Admin Console. If the product is not visible, ask your Adobe administrator to confirm the organization's entitlement and your user assignment.

Open Firefly, then select the Production tab. Users with entitlement can create and manage workflows there.

The product provides a no-code workspace for building and running workflows with modular steps, connected inputs and outputs, and assets produced for review. The exact feature set depends on organizational entitlements and what the admin has enabled.

In the Production experience on firefly.adobe.com, build workflows by adding and connecting steps, setting parameters, building, running, and publishing them.

Yes. Organizations commonly use APIs to integrate workflows and run automation at scale through batch or system-driven execution.

Workflow Builder tracks usage as operations rather than single actions. Total cost is determined by the workflow type, the count of generated assets or video seconds, and the contracted operations rate.

Customers with Firefly Creative Production or Firefly Services now receive entitlement to Firefly Creative Production for Enterprise, which enables workflow capabilities. The admin still assigns the proper product in Admin Console so each user receives the entitlement matching the organization's purchase.

See Common Questions about Firefly Creative Production for reporting, operations, Admin Console configuration, and purchasing.

## Run workflows

Use test runs to validate node execution, troubleshoot failures, and publish workflows for production use.

After the workflow structure is assembled, run it with sample inputs. Testing confirms whether each node behaves as intended and whether the full flow creates the desired output. After validation, the workflow can be published for reuse and integration with other tools.

### Test your workflow with sample data

After you add and connect the nodes, fill in any required sample inputs and select Run. When a node setup is invalid, or when the workflow is not arranged as a complete sequence, the workflow must be edited before it can run.

Processing can take a while; the time depends on how many nodes and operations are included.

Processing can take a while; the time depends on how many nodes and operations are included.

Let the workflow finish processing. The duration changes with the count of nodes and operations.

After the run finishes, inspect the visual status indicators:

- Nodes completed successfully are shown in green.
- Nodes that fail, or contain failed operations, are shown in red.

On the failed node, select the red triangle icon.

To open the error message, hover over the icon or select it.

To open the error message, hover over the icon or select it.

Read the message to identify the cause. Possible error sources include:

- Missing or incompatible inputs
- Incorrect node connections
- Unsupported parameter combinations

Use the error details to decide whether nodes should be added, removed, or adjusted.

AI Assistant can also help with troubleshooting:

- Ask AI Assistant to identify the reason for the failure
- Explain the outcome you were trying to create
- Ask the assistant for suggested revisions
- Tell the assistant to insert or remove nodes that would improve the flow

To resolve failures through AI Assistant, explain the result you want and ask it to optimize the workflow structure directly.

Select Run again after making changes so you can test them.

Note

To locate or download assets produced by workflows, open the right rail and select the Generation history icon.

Output nodes also provide a download button for downloading assets.

From the right rail, select the clock icon to open generation history; from an output node, use the download icon to download a file.

From the right rail, select the clock icon to open generation history; from an output node, use the download icon to download a file.

## helpx_adobe_com_firefly_web_work_with_enterprise_features_creative_production_workflow_builder_rate_card_html

Search

Last updated: Apr 27, 2022

Page-not-found notice:

- English: The page is unavailable; get help through Adobe Support.
- Japanese localization: the page is unavailable; for help, use Adobe Support.
- German localization: the page is unavailable; help is available from Adobe Support.
- French localization: the page is unavailable; contact Adobe support for assistance.
- Korean localization: the page is unavailable; visit Adobe Support when help is needed.
- Spanish localization: the page is unavailable; visit Adobe support for help.
- Portuguese localization: the page is unavailable; get help from Adobe Support.
- Russian localization: the page is unavailable; contact Adobe Support for assistance.
- Simplified Chinese localization: the page is unavailable; visit Adobe Support if help is needed.
- Traditional Chinese localization: the page is unavailable; visit Adobe Support for assistance.

### Get help faster and easier

Sign in

New user?

Create an account › Manage account

Quick links

View all your plans
Manage your plans
View quick links
Hide quick links

## Create professional headshots in bulk

### Create professional headshots in large batches with custom backgrounds, color choices, and multiple output sizes.

Standardize Headshots applies consistent edits to many headshots at once. Cropping, color correction, and background replacement options help produce uniform professional results without manual per-image work.

From the Firefly homepage, choose Production in the left panel.

On the Creative production page, choose Standardize Headshots.

On the Headshots page, use Upload images to add up to 1000 images in JPG or PNG format.

Add images in Upload images to start setting up headshot variations.

Add the image set in Upload images when you are ready to customize the headshot variations.

Open the Crop section, provide either width or height in pixels, and use the add button for that value.

Use Crop to set the final output height and width in pixels.

Set the output dimensions in pixels through the Crop section.

In Color Grade Preset Variations, turn on Auto-tone preset so the uploaded images receive suitable tonal adjustments automatically.

Turn on Custom presets when you have your own presets to apply and need another set of processed outputs. Then upload XMP files containing custom presets from your device or from online storage.

Apply a custom preset to the outputs by uploading XMP files from a device or online storage.

Use XMP files from local or online storage to apply a custom preset to the output set.

To remove every uploaded image background and replace it with transparency, turn on Transparent background under Background variations.

To swap all backgrounds across a batch, turn on Image backgrounds and upload the replacement background image.

Multiple background images can be added for the removed background, but the longest side of each image, whether width or height, must not exceed 6000 pixels.

Use Background Variations to change headshot backgrounds by uploading a new image.

Upload a new image in Background Variations when changing the headshot background.

To replace every background in a batch with a solid color, choose Color backgrounds, enter a HEX value, and then select the button.

Turn on Color backgrounds and use HEX codes to set solid-color headshot backgrounds.

Enable Color backgrounds and customize the headshot backgrounds with solid colors by using HEX codes.

Tip

The number shown below Continue previews the total output count that will be generated after processing.

Select Continue.

In the Final processing details dialog box, choose the file types for processed images. Select JPG, PNG, or both, and then select Process.
