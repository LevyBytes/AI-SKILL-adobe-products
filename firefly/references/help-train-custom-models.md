# Custom Models Overview, Train Firefly Custom Models, Best Practices To Effectively Prepare And Create Custom Models, Generate Images Using Custom Models ...

> Adobe Firefly reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Custom models overview; How to train Firefly Custom Models; Best practices for training custom models; Generate images using Firefly Custom Models; Share custom models; Manage Firefly Custom Models; Custom model projects; Manage custom model project access; Retrain your custom models.

## Custom models overview

### Learn about custom models and how they help generate content that reflects your brand.

Note

Firefly Custom models are offered to organizations on select enterprise plans that use Adobe storage for business. For company plan details, contact Adobe Sales. Creative Cloud for enterprise customers can contact their Adobe Account Manager to add custom models.

Firefly custom models let you use Text to image to create image variations aligned with your brand. Train Firefly Custom Models with your own images to generate content that reflects your brand identity.

Use your style or subject to explore fresh ideas, visualize other surroundings, create innovative content, and tailor results to specific needs.

Note

Training custom models in Adobe Firefly requires entitlement as a trainer for Firefly custom models. If Firefly is provided through a company-owned account, contact your Adobe administrator to request access.

## How to train Firefly Custom Models

### Train custom models on chosen styles or subjects so visuals can be generated from text prompts.

Custom model training uses this sequence:

- Choose a use case
- Add images
- Review and revise information
- Train
- Preview and test
- Publish and share

### Pick a use case

On the Adobe Firefly homepage, choose Custom models.

Review the common training goals available for model creation, then pick the use case you want your custom model to support. The available choices include:

- Lifestyle photography
- Photoshoot of a person
- Still life photography
- Illustrated character
- Iconography
- Illustrations
- Isometric and 3D graphics
- Explore new brand expression possibilities
- Backgrounds for product shots

When the listed choices do not cover your goal, select Start with your own images.

If no listed use case fits, choose Start with your own images to begin from your own assets.

When none of the use cases match what you need, use Start with your own images as the starting point.

During custom model creation, the training target can be a subject, a style, or iconography.

### Upload images

Add 10-30 images by dragging them into the uploader, using the best practices for training custom models as the reference.

Check that every uploaded image follows these requirements:

- Aspect Ratio: no wider than 16:9
- File Format: JPG or PNG
- Resolution: for best quality, use 2048 pixels or greater

Training setup shows errors for problems such as low resolution; resolve those image issues before training starts.

### Review and edit information

Check the model version before training. Firefly Image Model 5 (preview) is available for custom model training. While preview is active, the earlier Firefly Image Model 4 remains selectable by choosing Image 4 in the model editor's right panel. Changing the model choice regenerates captions and model tags, replacing the current generated content.

Use Model properties when you need to inspect the custom model's model version.

Open Model properties to check which model version the custom model uses.

Inspect Model Score (beta) and the guidance it provides. The score appears to the left of the Train button. A 1-100 score measures the whole training set against custom-model best practices, and stronger training sets usually produce better outputs.

- For scores below 85, open Model Score to see a panel of targeted suggestions for the training set, such as swapping out images that do not match the rest of the style.
- Make those updates before sending the model into training.

The score reviews the complete training set against the best practices for custom model creation.

Review the metadata generated automatically from your uploads:

- Model title: the name shown when someone selects the model.
- Model description: text that explains what the model is intended to generate.
- Sample prompt: a starting example that helps model users decide how to prompt it.
- Model Tags: fixed characteristics of the trained subject or style, such as brown hair on a brunette character. Avoid putting temporary details in Tags, such as the object a character happens to hold.
- Captions: significant elements in each training image are described in wording close to how prompts will be written, such as "young woman in a green sundress carrying a seashell on the beach, photorealistic." For subject-trained models, including a character, person, or still-life object, each caption should contain the model Concept.

Tip

- After changing captions or tags, select Analyze and caption to save those edits; the Train button will return.
- Model title, model description, and sample prompt stay outside the actual training data and do not change what the model generates.

### Train

Select Train. Training can run for several hours, and Firefly shows a progress indicator estimating how much of the process is complete.

You can leave this tab, then reopen the model later from Model Inventory.

Model status usually follows these states:

- Draft: before training begins
- Training: while training is in progress
- Ready: after training completes

A model may instead show cancelled when you cancel training or when an unexpected error must be fixed before resubmission.

Tip

Custom models are saved automatically into a Custom Models project in your account. Review the projects documentation for details about projects and moving custom models between projects.

### Preview and test

Before publishing and sharing, test whether the model output matches the result you intended.

In the model inventory, hover over a model and choose More menu icon > Preview and Test. You can also open the model and select Preview and Test.

Type a prompt, then use Generate to preview the kinds of images the model creates. Run additional generations as needed.

Tip

- For a model trained on a subject, including a character, person, or still life object, Firefly reminds you to include the model Concept in the prompt.
- While generating, you may tune options such as Aspect ratio, Content type, Composition and Style references, and Effects.

### Publish and share

Published models can be shared for use by others through Text to image in Firefly and Express.

To publish, go to model inventory, hover over the model, and choose More Menu > Publish. Another path is to open the model and select Publish.

After publication, the model can be shared so other people can train, review, or use it.

## Best practices for training custom models

### Prepare and build custom models with effective best practices.

### Use quality images

- Provide JPG or PNG files.
- Select at least 10-30 strong images that demonstrate the brand-specific styles and concept subjects you want the model to produce.
- Build a diverse image set for the chosen style or subject.
- Keep every image file at 50 MB or less.
- For best quality, use images at 2048x2048 or higher; landscape images can be no wider than 16:9, and portrait images can be no taller than 9:16.
- Keep aspect ratios consistent across the training dataset. Square generations from a portrait-only training set can create cut-off issues.
- Crop samples around the key visual elements. For instance, avoid examples where a person or character is far away and has a tiny face or body.
- Use images with different viewpoints and backgrounds while keeping the overall aesthetic consistent.
- Check that the set does not repeat an accidental pattern you do not want learned, such as a white background in every image.
- Take out distracting elements the model should ignore, such as a collage behind a portrait or a hat on a character.
- Avoid images that use transparent backgrounds.

Tip

Adobe Stock images can be licensed for model training. For example, search for assets that share the visual style you want to generate.

### Review Model Tags

- Add stable characteristics of the subject or style being trained, such as brown hair on a brunette character.
- Keep temporary details out of Model Tags, including an object a character is holding.
- Do not place your trademarks in Model Tags; those tags are for visible traits such as hair color.
- Provide at least three Model Tags.

### Review Captions

- Captions add detail and teach custom models the concepts you want generated.
- Write image captions that are concrete, descriptive, and close to the wording you plan to use in prompts.
- Change sentence structure throughout the full set of image captions.
- Adjust auto captions when they need more detail about the concept.
- Trademarks may be included in captions so they can be used in prompts.
- Because the Firefly base model lacks knowledge of famous people and places, describe those subjects in captions to improve possible results.

### Use crisp prompts that align with your training data

- Reuse words and phrases from your captions in your prompts.
- Prompts that stay aligned with the custom model's training concepts preserve identity better than unrelated requests, such as asking a model trained on colorful lifestyle photography for a black-and-white illustrated rocketship.

### Use advanced style capabilities to further refine your image

- If the Visual intensity slider is available, it starts at the lowest setting to help preserve identity. For creative workflows such as Style reference, raising visual intensity can make results more vivid.
- For subject work with Composition references, choose reference images that show the subject in the desired pose on a white background or as sketches.

## Generate images using Firefly Custom Models

Firefly Custom Models generate image variations that match an organization's brand direction.

Teams can create new images in their own style by using custom models trained from brand assets.

- Use custom models for high-quality brand image production.
- Maintain campaign consistency by creating images and variations that fit the campaign style.
- Strengthen storytelling and brand engagement with characters and character content built around the brand aesthetic.

### Before you begin

Firefly Custom Models are available only to enterprises that purchased Firefly Custom Models. If the Model dropdown menu does not show custom models, the entitlement may be missing. Contact your Adobe administrator if you want access to use or train custom models.

Custom-model generation is supported in Firefly web, Photoshop with the available beta desktop app update, Express, GenStudio, and Firefly Services. The steps below cover generation on Firefly web:

On Firefly home, choose Generate in the left panel.

Next, select Generate image.

After you choose a custom model, a badge shows the Firefly Image Model.

Each custom model displays the name assigned during training.

The name set during training is shown for each custom model.

If needed, adjust Generation settings in the left-hand panel.

Enter a prompt and select Generate. Repeat the process as needed. Generated images can be downloaded or opened in other Adobe Creative Cloud apps for finishing touches.

Tip

When a model was trained on a subject, such as a character or person, Firefly prompts you to put the model Concept into the prompt.

### Image format for downloading

Downloads for raster images from custom models are available as JPEG, or as SVG files (beta).

SVG export notes:

- These custom models are built as image models rather than vector models. The beta export converts raster images into SVG files, similar to Illustrator's Trace Image function. Because of that conversion, these SVGs may contain more anchor points and more complex paths than traditional vectors. This appears most often in medium- to high-complexity images, and it can also show up as hallucinations in simple images. The first beta does not yet produce editable strokes.
- Conversion speed can differ by image and is usually slower with complex images.
- The beta option works only on Firefly.com and only for illustrations, not photographic generations.
- The beta option applies only to images made with enterprise custom models.
- CAI signatures are not currently applied to SVG files.

### Prompt Rewrite for Custom Models (beta)

This built-in Prompt Rewrite for Custom Models (beta) feature is enabled by default and improves prompts automatically, making them clearer and more detailed. It rewrites prompts into language that helps Firefly produce strong results from the beginning.

What it does: for custom models, Prompt Rewrite improves prompt coherence. It strengthens the content already present in the prompt by adding relevant details drawn from the model's captions and tags. That behavior is different from generic prompt enhancement, which adds new creative elements that were not in the original prompt.

Where it works: English prompts are rewritten for custom models that use Firefly Image Model 4. It does not apply to other foundation models, custom models on Firefly Image Model 3, or prompts written in other languages.

How to view changes: once an image is generated, choose Show Enhanced to inspect the rewritten prompt. The enhanced prompt can be edited before the next generation when further changes are needed.

When it's enabled: this feature is active for models trained on:

- Specific subjects, for example a photoshoot of a person or an illustrated character
- Photorealistic styles, for example lifestyle photography

It is not active for models trained on non-photorealistic styles, including illustrations, iconography, and 3D graphics.

Can you turn it off? Yes, Prompt Rewrite can be disabled with a toggle, although keeping it on is recommended. Firefly enables it when the feature is likely to improve results.

## Share custom models

Share custom models with collaborators by sending email invitations.

Sharing allows collaborators to edit, review, or generate with custom models in Firefly and other Creative Cloud apps. The access each invitee receives depends on the permissions you assign.

### Share a custom model with collaborators

Open Your models and find the custom model you plan to share.

Choose the more menu icon next to that model.

Pick Share from the dropdown menu.

In the recipient field under Add people or groups, enter one or more email addresses.

From the permissions dropdown, choose the collaborator's access level.

- Editor: May edit or review the model with you, and may generate from the published model in Creative Cloud apps.
- Reviewer: May review the model with you, but editing and generation are not allowed.
- Generator: May generate from the published model in Creative Cloud apps, but cannot edit or review it.

Use Invite to... to send the invitations.

Invitation emails give recipients access to the custom model according to the permission level you selected.

## Manage Firefly Custom Models

### Edit, duplicate, or delete custom models.

Before you begin:

Train a custom model, then use Preview and Test to confirm that it matches your intended result.

On the Adobe Firefly homepage, choose Custom models.

On the Model Inventory page, open the More menu for the custom model you identified.

In the context menu, pick one of these options:

- Edit: change the training dataset by adding or removing images. Only datasets that have not been trained can be edited. To edit a trained model, duplicate it first, then modify the new version.
- Duplicate: make a copy of the model for editing or versioning.
- Delete: remove the model along with the assets and captions used to train it.

## Custom model projects

### Create a custom model and save it in a project for easier management.

Training a custom model saves it into a project so the work stays organized. To access and manage projects and their custom models, go to Adobe Home and navigate to Files > Projects. There you can see both projects you created and projects where you were invited to collaborate.

On the Files page, the Projects tab lists projects you created as well as projects where you have collaboration access.

The Projects tab within Files shows your own projects and the ones shared with you for collaboration.

## Manage custom model project access

Project collaborator access levels can be changed or removed when needed. Manage them from the Projects tab under Files on Adobe Home, or use the Share option on a custom model.

### Manage project access in Adobe Home

In Adobe Home, open the Projects tab under Files.

Select the More menu for the chosen project, then choose Share.

The Share option shows everyone invited to the project and the permissions assigned to them.

Use Share to inspect the full invitee list for the project along with each person's permissions.

In the Share project dialog box, select Who has access.

Choose Who has access to see all invited project collaborators and their permission assignments.

Who has access displays the people invited to the project and the permissions each person has.

The Invite people to project dialog box lists collaborators who can access the project and shows each permission set. To change a collaborator's project permission level, select the dropdown next to that person's name.

Use the Invite people to project dialog box when you need to change collaborators' access permissions and levels.

The Invite people to project dialog box also lets you edit collaborator permission levels.

New collaborators can also be added through the Invite people to project dialog box.

Use Invite people to project to add another collaborator and define that person's project access level.

Within Invite people to project, you can add a new collaborator and set the access level for the project.

### Manage project access using shared custom models

On the Your models page, find the custom model tied to the project whose access you need to administer.

Open the More menu, then choose Share.

In the Share custom model dialog box, choose the project's name.

Project access for custom models can be administered from a custom model's Share option.

The Share option on a custom model also provides direct access controls for its related project.

When you own the project, you can edit permission levels for every listed project member or remove members from the project.

### More like this

- Custom model projects
- Train custom subject models
- Train custom style models
- Preview and test custom models

## Retrain your custom models

Retrain Adobe Firefly Custom Models so they can move to newer versions.

Adobe improves image generation quality and accuracy by releasing newer Firefly Image Model versions. Retraining produces another version of an existing custom model, so updated data and settings can improve generation results and image quality.

Go to Firefly and open the Inventory tab.

Find the custom model to retrain, then select it to open. If Model Type is set to Style, a prompt asks you to choose a type before you proceed:

- Iconography: choose this for icons or simple, symbolic graphics.
- Style: choose this for any other style, including illustrated or photographic styles.

Setting the model type helps optimize the model for stronger output quality.

Choose the correct Model Type to retrain and duplicate the model.

Pick the proper Model Type before retraining and duplicating the model.

Select Duplicate.

Inspect your training data and settings, then adjust anything that needs changes.

Select Train. Firefly creates a new model version and adds it to Inventory, while leaving the original model unchanged. Remove the older model if you no longer need it.
