# Firefly Design Intelligence Overview, Firefly Design Intelligence For Illustator

> Adobe Firefly reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Firefly Design Intelligence; Firefly Design Intelligence overview; Create Style IDs; Train Style IDs; Generate new designs using Style IDs; Best practices for creating and training Style IDs; Supported and unsupported elements; Assign channels to layouts; Best practices for using channels; Known and fixed issues; Refresh, Resize, and Clone generated designs.

## Firefly Design Intelligence

### Firefly Design Intelligence for Illustator

Create Style IDs

Train Style IDs

Generate new designs using Style IDs

Best practices for creating and training Style IDs

Supported and unsupported elements

Assign channels to layouts

Best practices for using channels

Known and fixed issues

Refresh, Resize, and Clone generated designs

Firefly Design Intelligence overview

## Firefly Design Intelligence overview

See how this AI-powered in-app feature supports scaled content production while preserving consistency with campaign-level design rules.

Firefly Design Intelligence gives creative teams a way to scale content while keeping output consistent. It pairs AI with human guidance so each design, across regions or campaigns, can remain consistent, customizable, and aligned with the intended identity.

### How Firefly Design Intelligence works

Firefly Design Intelligence is an integrated plugin for familiar Adobe apps such as Adobe Illustrator, and it can be installed from the Creative Cloud marketplace. Using in-app training, Firefly Design Intelligence learns visual and layout guidelines for a brand, then brings that knowledge into the design workflow. The result is faster, easier creation of on-brand content without giving up quality or control.

The brand identity is captured through Style IDs, intelligent design systems that keep campaign identity intact while automating generation of new design variations. During campaign work, these Style IDs apply the appropriate colors, fonts, logos, and layouts so the visual system stays consistent.

### Creation of Style IDs

Style IDs support scaled content creation while preserving brand consistency and creative quality. They do this by:

- Learning the brand's rules and aesthetic direction, including brand colors, logos, typography standards, and editorial voice.
- Capturing campaign guidelines for design decisions, so the system can automatically choose the most appropriate assets within layout constraints when producing new designs.
- Understanding relationships among design elements, including which images and text tend to pair naturally.
- Including human-defined rules and creative direction, so explicit instructions describe how elements should behave on their own and in combination.

After training, the same apps already used by creative teams provide access to these Style IDs.

### Generating content at scale

When a campaign's Style IDs have been created, trained, and published, they serve as reusable creative frameworks. Generating new designs applies the Style ID's rules and relationships to assemble layouts automatically, choose and place assets, and keep formats and channels consistent. Teams can therefore create many on-brand variations quickly while still preserving the original creative vision set by designers.

## Create Style IDs

### Create Style IDs for training Firefly Design Intelligence with existing brand creatives in Adobe Illustrator.

Use existing brand creatives in Adobe Illustrator to create Style IDs for Firefly Design Intelligence training. Begin from a new document built with approved brand layouts; afterward, use the Style ID panel to create and manage Style IDs. After creation, review visual elements, layouts, and spatial rules so the brand system is learned correctly and can produce consistent design variations. Before starting:

- Confirm that artboards are clean, correctly aligned, and non-overlapping.
- Remove unsupported features, including effects, distorted text, and drop shadows.
- Trim linked files properly so the artwork has no extra empty space around it.
- Arrange layers and groups clearly enough to follow.
- Configure compound paths correctly.
- Merge or convert large path groups when they contain more than 10 paths, as needed.

### Create and define a unique Style ID

In Adobe Illustrator, choose Window > Extensions > Style ID; this opens the trainer panel.

In the Style ID Trainer panel, choose a profile from the Profile dropdown menu to start training the Style ID.

Choose a profile from the Profile dropdown to show the related Style IDs.

Choose a profile from the Profile dropdown to show the related Style IDs.

Use the icon beside Style ID library to create a new one and connect it to the open document.

Use the plus icon to create a new Style ID and connect it with the open document.

The plus icon starts a new Style ID that is linked to the current document.

Enter a name and description for the Style ID, then choose Create.

Enter the name and description for the Style ID you are creating.

Enter the name and description for the Style ID you are creating.

If a warning appears about changes to the document, choose Continue.

After a Style ID is created, three tabs are shown:

Visual elements: individual design components extracted from the original files during training. Visual elements can include headlines, body text, logos, images, shapes, and background elements. You can edit, replace, or configure these elements so they behave dynamically during generation while still following brand rules.

Layouts: rules for arranging visual elements within an artboard. Layouts record positioning, hierarchy, alignment, and group relationships between elements. One Style ID can include several layouts for different formats, sizes, and campaign variations. This helps generated outputs remain structurally consistent across variations.

Spatial rules: definitions for how elements relate to one another and to the artboard. They manage pin relationships, such as a logo pinned to the top-right, along with margins and safety zones, relative positioning between elements, and responses to resizing. Spatial Rules help preserve brand integrity across multiple formats and aspect-ratio targets.

After the Style ID is created, the Visual elements, Layouts, and Spatial rules tabs appear.

The Style ID workspace then shows tabs for Visual elements, Layouts, and Spatial rules.

## Train Style IDs

### Train and test Style IDs to define layouts and spatial rules, maintain brand consistency in generated designs, and publish them with Firefly Design Intelligence.

Training Style IDs teaches Firefly Design Intelligence the brand's design system, element relationships, and layout rules. That knowledge keeps visuals consistent as designs are resized or adapted. After the rules are established, you can generate multiple design layout variations with confidence that they will follow design standards. To train Style IDs, you need:

- Adobe Illustrator, with Firefly Design Intelligence turned on
- An existing Style ID that already has design assets assigned
- Familiarity with the brand's layout and spacing requirements

### Work with Visual elements, Layouts, and Spatial rules

Note

Before starting, create a Style ID so visual elements can be extracted from the Illustrator document and so the layout and spatial rules in the design assets can be understood.

Open the Visual elements tab to review every element extracted from the original files.

Use Visual elements to inspect the extracted file-layer elements.

The Visual elements tab lists elements extracted from the source layers.

Expand an element to inspect each layer and add instructions when needed. For some layers, visual assets can also be added or removed.

Add assets to a layer, remove existing assets, or add instructions for extracted visual elements.

Layer entries can be updated with more assets, removals, or instructions for the extracted elements.

Open the Layouts tab to review the layouts and orientations learned by Firefly Design Intelligence.

From the Channels dropdown menu, select suitable platforms. Use the checkboxes on detected options to choose preferred layouts for training the Style ID.

Open Layouts to review the layouts and orientations learned by Firefly Design Intelligence.

The Layouts tab shows the learned arrangement patterns and orientations.

Open the Spatial rules section to specify how elements relate when aspect ratios change.

Choose an element in the design to activate the Pin section. Then use the dropdown menu to select a second element to pin to the first.

In Pin, choose the second element from the dropdown menu to attach it to the first.

The Pin dropdown defines which element is pinned to the initial selection.

Choose Pin to set the relationship between the two elements.

Tip

Pinning creates reference points that tell Firefly which design elements should keep their relationship during resizing. This is useful for logos, headlines, and other elements that must keep a defined placement relative to another item.

In the Fit mode section, choose how the design should occupy different aspect ratios:

- Cover: fills the area fully while preserving aspect ratio; overflow gets cropped.
- Contain: keeps the whole element inside the area while preserving aspect ratio; empty space may remain.
- Fit width: uses the target width, with height changing proportionally.
- Fit height: uses the target height, with width changing proportionally.
- Stretch: fills both dimensions without preserving aspect ratio, which may distort the element.
- Repeat to width: tiles horizontally until the width is filled. Images only.
- Repeat to height: tiles vertically until the height is filled. Images only.

In Apply to, choose which layouts should receive these spatial rules for new designs.

Apply to controls where the spatial rules are used during design generation.

In the Apply to section, choose the layouts where these spatial rules should apply during new-design generation. Choose Select all when the spatial rules should apply to all orientations.

### Test and publish your trained Style ID

After the visual elements, layouts, and spatial rules meet your needs, create new artboards with different aspect ratios inside the same Illustrator document.

Choose the Test button to fill the artboards with new designs.

Check the generated designs against the brand standards and the established layout and spatial rules. When they are acceptable, choose the Publish icon.

In the Confirmation Required dialog box, choose Confirm to publish the Style ID.

You can switch between generator and trainer mode from the hamburger menu on the top-right of the Style ID panel, then choosing Switch to Generator mode or Switch to Trainer mode.

Choose Reload Panel to refresh the panel.

Choose Reload Panel to refresh the panel.

Test the Style ID across several aspect ratios before production use, so any needed spatial-rule adjustments can be found. If generated layouts are not what you expect, refine the chosen settings in the Visual elements, Layout, and Spatial rules section.

Note

Training is iterative. Reaching optimal results for every target design and aspect ratio can require several rounds of adjusting settings, defining rules, and retesting.

## Generate new designs using Style IDs

Create new brand-consistent designs from text prompts by using Style IDs in Firefly Design Intelligence.

Style IDs represent a designer's layout and aesthetic decisions for a campaign, helping generated content align with enterprise design standards. After an organization's Style IDs are created, trained, and published, they can be used for new design generation.

Access to published Style IDs in your organization is required for generating new designs. Before starting, confirm that you have:

- Adobe Illustrator, with Firefly Design Intelligence available under a select enterprise offering.
- Published Style ID access for your organization, supplied as tokens by the enterprise administrator through email or another channel.
- One or more artboards placed on your canvas.

### Generate designs using text prompts

Open the Style ID panel in Illustrator.

Use the Profile menu to select the organization name and display available Style IDs.

From the published options under the Style ID library, choose the Style ID to use.

Note

If a published Style ID is not visible, access may be missing. Ask your admin to resolve the issue.

In the Style ID panel, type a text prompt in the Generate text box describing the desired content.

Type a prompt for the needed asset, or select Generate to create new assets.

You can describe the asset requirement or use Generate to create assets. Tip

Write prompts that are clear, concise, and focused on the desired content. The StyleID shapes the output's tone, voice, and formatting by applying the stylistic rules and brand guidelines established during training.

Choose Generate to create multiple design variations.

Firefly Design Intelligence produces several variations for each artboard, with all results following the organization's brand standards defined in the Style ID.

### Customize generated designs

After generation, choose a design or asset to open the Modify tab.

In the Assets section, choose the asset type to change, such as images, taglines, logos, or other design elements.

After editing the selected elements, open Apply to and choose one of these options:

- Specific selection: updates only the current design.
- Matching assets: applies changes across every similar asset in all designs.

Use the Quick actions section to keep design consistency and brand standards while adapting to new artboard dimensions. Choose from these options:

- Refresh: changes artboard aspect ratios and adapts the design to those ratios.
- Clone: updates artboard dimensions and duplicates a design across multiple artboards.
- Resize: automatically adjusts designs to match new artboard dimensions.

Note

Quick actions keep element relationships and brand standards intact while adapting to new dimensions.

## Best practices for creating and training Style IDs

### Prepare, create, and train Style IDs effectively

Before you build and train Style IDs from existing brand creatives in Adobe Illustrator, review these key practices.

## Supported and unsupported elements

Learn which Illustrator elements Firefly Design Intelligence supports, does not support, or handles with caution.

Use the table as a quick reference while creating artwork for Style ID training, testing, and publishing. It identifies supported and unsupported Illustrator elements and combinations, along with cases that require extra care in Firefly Design Intelligence.

## Assign channels to layouts

Learn how platform identifiers on layouts determine which designs are offered during content generation.

Channels function as filters so layouts are surfaced for the correct platforms during generation. They can organize layouts by platform type, including social media, digital advertising, and print. Adding channel tags helps the system choose designs appropriate for each platform and avoid mismatches, such as a vertical story layout appearing among billboard choices.

This procedure is for users with Trainer access in Firefly Design Intelligence. During generation, layouts are available only when they carry the channel selected by the user.

### Add channels to layouts

Open the Layouts tab.

Choose one or more layouts to tag.

In the channel input area, enter or choose a channel name so it is added to the selected layouts.

For a multi-layout selection, the interface separates channels applied to every selected layout from those present on only part of the selection. That view makes channel assignments across the layout library easier to compare.

### Remove channels from layouts

Open the Layouts tab, then choose the layouts that include channels to remove.

Find the channel tag that should be removed.

Click the channel tag's delete button so the layout no longer includes that tag.

Multiple channels can be assigned to a single layout. For instance, a flexible design could carry both "Social Media" and "Digital" when it suits both uses. Reflowing a layout to produce new size or orientation variants automatically copies its channels to the new versions, keeping market categorization consistent across the design system.

## Best practices for using channels

Find out how channel tags determine which layouts appear during generation, and when blank channels are appropriate.

Use this reference when applying channels to layouts or choosing channels before content generation. Knowing how channels behave helps the Generator choose layouts that match the intended platform or context.

In the Generator panel, channel tags are shown as clickable buttons under the prompt field. Each button represents a channel assigned to at least one layout in the design.

### How channel selection works

Selecting one or more channel buttons before generation makes the system filter layouts according to that selection:

- The Generator uses only layouts tagged with every selected channel
- The LLM is instructed to honor the channel filter and choose from matching layouts only
- The layout preview under the prompt changes in real time to display matching layouts

### Universal layouts with ‘Blank Channels’

Layouts that have no assigned channels are treated as universal. They can still be used for generation no matter which channel is selected. This remains the default behavior when filtering is not applied.

Use Blank Channels for layouts that should work on every platform (ex, social media, print, and others) instead of being limited to specific contexts.

### Channel assignment guidelines

- Start simple: If a layout's channel is uncertain, leave channels blank. Channels can be added later.
- Custom channels: Enter a new name in the input field. The channel is stored automatically and can be reused across all designs.
- Per-layout assignment: Channel tags belong to individual layouts rather than full designs. Separate layouts within one design can use different channels, letting the system pick the layout that fits each platform.

## Known and fixed issues

Review where Firefly Design Intelligence issues currently stand, including items already known or fixed.

Text Tie layout refresh may miss recent updates

Under review

| App version | v1.0.16 |
| --- | --- |
| Impacted device types | Mac and Windows |
| Last updated | May 5, 2026 |

Summary

Refresh operations for Text Tie layouts may not show the newest changes after updating.

Next steps

Trigger the layout again manually, or relaunch the component so the update is forced.

Copy-pasted artboards can create element name collisions

Under review

| App version | v1.0.16 |
| --- | --- |
| Impacted device types | Mac and Windows |
| Last updated | May 5, 2026 |

Summary

When artboards are copied and pasted with Adobe Illustrator's native functionality, element names can be duplicated and create conflicts that interfere with element swapping.

Next steps

If element swapping is needed, rely on the native generation workflows in Firefly Design Intelligence rather than manual copy-paste.

Long layout names can be truncated in Grid View

Under review

| App version | v1.0.16 |
| --- | --- |
| Impacted device types | Mac and Windows |
| Last updated | May 5, 2026 |

Summary

In Grid View, long layout names may be shortened, which can make those layouts difficult to identify completely.

Next steps

No workaround is available at this time. The issue is being actively investigated.

Meals V3 style can apply one text edit to several items

Under review

| App version | v1.0.16 |
| --- | --- |
| Impacted device types | Mac and Windows |
| Last updated | May 5, 2026 |

Summary

With Meals V3 style, editing text in one instance can update text in several instances because layer names are shared.

Next steps

This behavior is expected for global editing. For localized edits, change the text manually in each separate instance.

Peripheral artboard generation locations can be less stable

Under review

| App version | v1.0.16 |
| --- | --- |
| Impacted device types | Mac and Windows |
| Last updated | May 5, 2026 |

Summary

Artboards generated from edge or peripheral positions in the workspace can be less stable than generations started from central artboards.

Next steps

Start generation from the central artboard for better reliability. Avoid artboards positioned at the edge.

Style ID extension may fail during first startup

Under review

| App version | v1.0.16 |
| --- | --- |
| Impacted device types | Mac and Windows |
| Last updated | May 5, 2026 |

Summary

On initial launch, the Style ID extension may not load correctly and may need manual action before it appears as expected.

Next steps

Undock the Style ID tab to resolve the issue. Afterward, the tab can be docked again without additional problems.

Large pasted text during copy variant generation can freeze Illustrator

Under review

| App version | v1.0.16 |
| --- | --- |
| Impacted device types | Mac and Windows |
| Last updated | May 5, 2026 |

Summary

Adobe Illustrator may become unresponsive if large volumes of text are pasted while generating copy text variants.

Next steps

Use Command + Option + Esc to force-quit Illustrator, then open the app again. To avoid recurrence, paste smaller sections of text.

Insufficient layout variations can leave some artboards ungenerated

Under review

| App version | v1.0.16 |
| --- | --- |
| Impacted device types | Mac and Windows |
| Last updated | May 5, 2026 |

Summary

If selected layout variations are fewer than target artboards with the same size and aspect ratio, some artboards are not generated.

Next steps

Before generation starts, confirm that the selected layout variations are equal to or greater than the number of target artboards.

Note

For technical support, feature requests, or more issue reports, reach the Adobe FDI team through the official Adobe Marketplace support channel. Feedback from this release cycle will be used in future plugin updates.

## Refresh, Resize, and Clone generated designs

Learn how to change designs by making layout variations, adjusting dimensions, and duplicating them while preserving brand standards.

Quick Actions let you revise generated designs without rebuilding them from the beginning. The feature keeps the Style ID structure and brand consistency intact while you explore variations, change sizes, and scale designs across formats.

- Refresh creates alternative compositions with new image-based text.
- Resize adapts designs to new artboard dimensions and automatically keeps element relationships intact.
- Clone creates layouts by duplicating design elements changed during last-mile edits.

### Before you begin

Generating new designs requires access to published Style IDs in your organization. The required setup includes:

- Adobe Illustrator with Firefly Design Intelligence turned on
- Published Style IDs provided by your enterprise administrator
- At least one artboard on the canvas

### Refresh generated layout variations

Refresh creates new layout variations for the selected design while keeping Style ID structure and brand consistency. It changes the text copy so alternate compositions can be produced within the same aspect ratios.

Generate a design in Illustrator.

Open the Quick Actions section.

Select the artboard to modify, then choose Refresh.

Review the generated layout, or use refresh again to try other text variations while leaving every other visual element unchanged.

### Resize generated designs

Use Resize when a layout must fit a different size or aspect ratio while keeping element relationships, spacing logic, and brand standards.

Select the artboard or generated design to resize.

Change the artboard dimensions in Illustrator.

Open Quick Actions and choose Resize.

### Clone generated designs

Use Clone to copy a generated design to multiple artboards while keeping its visual elements. The Clone feature uses modified elements from the edited artboard, including images, text, logos, and other visual elements, to make more layouts.

Open the Illustrator design that was generated.

On the canvas, add multiple artboards or select existing ones.

From the Modify tab, open the Quick actions section.

Choose Clone and wait briefly, then review the duplicated layouts generated across the selected artboards.
