# Perform Bulk Actions, Firefly Custom Models In Creative Cloud

> Adobe Firefly reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Perform bulk actions; Firefly Creative Production FAQ; Firefly Custom Models (beta) in Creative Cloud; Train Firefly Custom Models (beta); Best practices for creating custom models (beta).

## Perform bulk actions

Firefly Creative Production FAQ

## Firefly Creative Production FAQ

### Frequently asked questions about Adobe Firefly Creative Production for Creative Cloud

On October 28, 2025, customers on paid plans with premium generative features get access to Firefly Creative Production bulk presets: Remove Background, Color Grade, and Crop Image. Standardize Headshots and Upscale Images are scheduled as two later additions in the coming months.

Creative professionals face a business environment with heavier demands than ever. Timelines keep shrinking, expectations keep rising, and innovation continues at a relentless speed. Their daily work often spans several projects at once, all requiring original thinking, polished execution, and fast delivery.

These preset workflows for bulk actions can help customers automate repeated creative work and recover substantial time. That saved time can shift toward strategic, mission-critical work with higher business impact.

Access to Firefly Creative Production is included with any plan that provides premium generative AI features. Eligible plans include:

- Creative Cloud Pro
- Creative Cloud Pro for teams
- Creative Cloud Pro Plus for teams
- Creative Cloud for Enterprise V4 and V4+
- Firefly Standard, Firefly Pro, Firefly Premium
- Express Premium for teams
- Express Premium for Enterprise
- Express plus Firefly for Enterprise
- Acrobat Studio

When the October 28, 2025 change goes live, customers on these plans will automatically get Remove Background, Color Grade, and Crop Image on firefly.adobe.com.

Customers who already have premium generative AI features should receive these capabilities during the next few weeks. The rollout is gradual so Adobe can deliver the best possible experience to all customers.

Yes. These new preset bulk workflows are offered worldwide to every customer with a paid plan that currently includes premium generative AI features.

Yes. Running Remove Background, Color Grade, or Crop uses credits according to the number of assets processed.

When credits are exhausted, a Firefly credit subscription can be purchased to add more monthly generative credits. Customers with Creative Cloud for teams or enterprise plans should ask their plan admin to buy additional generative credits.

If indemnification is part of your Adobe plan, content created with the bulk workflow tiles is covered by the Creative Cloud plan's indemnification benefit, except for tiles that are still in beta.

## Firefly Custom Models (beta) in Creative Cloud

Train Firefly Custom Models (beta)

Best practices for creating custom models (beta)

## Train Firefly Custom Models (beta)

### Custom models give you more control when generating variations that match a specific illustration style, subject, or set of characters.

Firefly Custom Models let Text to image in Firefly and Firefly Boards produce image variations that consistently follow the illustration style, subject, or characters reflected in your training data. By training a custom model, you can test new ideas, preview alternate environments, and make consistent content personalized to that model.

Note

At this beta stage, Creative Cloud Individual subscribers and Creative Cloud Pro & ProPlus for Teams subscribers can use custom models. Enterprise customers can review information and buy custom models today.

Custom model training follows this sequence:

- Pick a use case
- Upload images
- Review and edit information
- Train
- Generate
- Share
- Store in projects
- Edit, duplicate, and delete

### Pick a use case

On the Adobe Firefly homepage, select Custom Models.

Review the available use cases for model training, then select one of the use cases:

### Upload images

To train the model, drag and drop 10-30 images and follow the best practices for training custom models.

Confirm that the images you add satisfy these requirements:

- Aspect Ratio: Maximum of 16:9
- File Format: JPG or PNG
- Resolution: Minimum of 1000 pixels

Train the model by dragging and dropping 10-30 JPG or PNG images, using an aspect ratio no greater than 16:9 and resolution of at least 1000 pixels.

Train the model by dragging and dropping 10-30 JPG or PNG images, using an aspect ratio no greater than 16:9 and resolution of at least 1000 pixels.

Problems such as low resolution can trigger image errors, and those issues should be fixed before training starts.

A training set score appears to the left of the train button. Select the score to open a panel with targeted recommendations for changing the training data so the model can produce higher-quality results. The score evaluates the training set as a whole against best practices for training custom models, then returns an overall rating and specific improvement suggestions.

Use Next and Previous to move through the suggestions.

Use Next and Previous to move through the suggestions.

For example, do not use a spec-specific product as training material, and remove images that break from the rest of the set's style. As a best practice, use training sets with a score of 85 or higher.

### Review and edit information

After you upload images, the following information is generated automatically so you can review and edit it:

In the Model Tags section, review the tags generated automatically from the uploaded images.

In the Model Tags section, check the automatically generated tags from the upload. Select an image to view its character details and edit them if needed.

Select an image to inspect its character details and make edits when needed.

- The model title, model description, and sample prompt are excluded from model training and do not affect generated output.
- After changing captions and tags, select Analyze to reanalyze the edits before training.

### Train

After the images are uploaded and information such as model tags and captions has been reviewed, select Train in the top right.

Training duration can range from 30 minutes to a couple of hours, based on model complexity and how many models are being trained.

A progress indicator estimates how much of the training is complete. You can close the tab during training and later reopen the model from Model Inventory. When training finishes, a notification is also sent to your email.

The following model statuses explain the current training state and progress:

- Draft: The state before training begins.
- Trained: The state shown after training completes successfully.
- Cancelled: This state can appear if you cancel training, or if an unexpected error needs attention before the model is submitted for training again.

Use the indicator to check training progress and see the completed amount.

Use the indicator to check training progress and see the completed amount. Note

- Training a model uses generative credits; see the generative credits guidance for what they are and how they work.
- Generative credits are used immediately when model training begins. Cancelling training does not refund credits. If training fails because of an internal error, the credits are refunded.
- Before a custom model is trained, you must confirm that you have the required rights and permissions for the uploaded images, that images showing people may be analysed to create the model, and that your custom model use will not infringe anyone else's copyright, IP, likeness, or privacy rights.

### Generate

After training is complete, the model can generate images from several places:

From Model Inventory, select the new model.

In Firefly, select Create, Generate, or Boards from the left panel, then choose the custom model you created.

All created and shared custom models appear in the Custom models section of the Model drop-down menu.

All created and shared custom models appear in the Custom models section of the Model drop-down menu.

Complete the required steps to generate images with your custom model. Each generation returns two images.

After images are created, you can generate more, or:

- Select the download icon to download.
- Add finishing touches by opening images in Express or Photoshop on the web.

Tip

- Image generation uses generative credits; see the generative credits guidance for what they are and how they work.
- When images are generated with a character-trained model, the model prompts you to include the model Concept in the prompt.
- During generation, settings such as Aspect ratio, Content type, Composition, Style references, and Effects can be adjusted if desired.

### Share

Models can be shared with other people so they can generate images in Firefly or Firefly Boards.

On the Your models page, find a custom model whose status is Trained, then select Share from the More menu.

To reach the model's actions, select the model and choose Share from the More menu.

To reach the model's actions, select the model and choose Share from the More menu.

In the Invite people dialog box, use the Can use tab to add one or more email addresses for users who should receive access to the custom model.

Optionally add a note for the invited user, then select Invite to generate.

The invited user receives an email containing a link to the custom model. Copy link can also be used to copy and share a direct model link. The user can then select the model to generate images in Firefly or Boards.

Note

Giving another person access to generate images with a model does not let them edit that model or share it with other people.

### Store in Projects

Training a custom model saves it into a project so the work stays organized. To access and manage projects and the custom models inside them, visit Adobe Home and navigate to Files > Projects. You can see all of your projects there, along with projects where you have been invited to collaborate.

Anyone who can access the project that stores a custom model automatically receives access to that model and to the other models saved in the same project. If needed, you can move the model to a new folder.

### Edit, duplicate, and delete

To duplicate or delete a custom model, select the model, open the More menu, and choose one of these options:

- Duplicate: Copies the images from an existing model so you can begin training a new model.
- Delete: Removes the model along with the assets and captions that were used to train it.

Note

A trained custom model cannot be retrained.

## Best practices for creating custom models (beta)

### Best practices for preparing and creating custom models effectively.

### Use quality images to train your model

- Use JPG or PNG files.
- Select at least 10-30 high-quality images that present the exact style, concept subjects, or character you want to explore.
- Use a varied image set that represents the style or subject.
- Keep each image file size at 20 MB or less.
- Use images with resolution above 1024x1024 pixels and a maximum aspect ratio of 16:9 for landscape or 9:16 for portrait.
- Match the aspect ratio across the training dataset. Portrait-oriented training sets can produce cut-off results if you generate square images.
- Crop sample images around the most important visual elements. For example, avoid images where a person or character is far away and has a very small face or body.
- Use images with different viewpoints and backgrounds while keeping the aesthetic consistent.
- Check that images do not contain unintended patterns you want to avoid, such as a white background repeated in every image.
- Remove distracting details the model should not learn, for example a portrait background collage or a character's hat.
- Avoid images with transparent backgrounds.

Tip

Adobe Stock images can be licensed for model training. For example, search for images with a visual style similar to the one you want to generate.

### Review Model Tags

- Add stable attributes for the subject or style being trained, such as brown hair for a brunette character.
- Leave changeable details out of Tags, such as the object a character is holding.
- Add at least three Model Tags.

### Review Captions

- Use automatically generated captions to add detail and train custom models on the concepts you want them to generate.
- Review captions for correctness, especially when a character appears in unusual poses. Edit captions when you want generation to respond to specific wording.
- Make image captions concrete and descriptive, using language like the wording you expect to use in prompts with the model.
- Change sentence structure across image captions so the set has diversity and wider concept coverage.
- Adjust auto captions as needed so the model receives details about the concept.
- Add descriptive context for recognizable people or places because the Firefly base model does not identify famous people or landmarks.

### Use crisp prompts that align with your training data

- Use prompts that include words and phrases similar to the ones used in captions.
- Build prompts around concepts closely related to the model's training data. Unrelated or new concepts can produce poor image output; for example, a model trained on colorful lifestyle photography is a poor match for a black-and-white illustrated rocketship request.
