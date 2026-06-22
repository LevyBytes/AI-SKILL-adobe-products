# Merge Indesign Data, Merge Photoshop Data, Use 3D Digital Twin Workflows, Partner Models In Firefly Creative Production For Enterprise ...

> Adobe Firefly reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Merge InDesign data; Merge Photoshop data; Use 3D digital twin workflows; Partner models in Firefly Creative Production for Enterprise; Publish workflows.

## Merge InDesign data

Set up templates with merge fields, then attach data sources to create personalized documents in volume.

Use Data Merge fields in an Adobe InDesign (.indd) template, then upload the template to Merge InDesign data; Workflow Builder can use that setup to produce personalized, data-driven documents at scale.

### What this node does

Merge InDesign data takes a structured data source and an InDesign layout template, then creates merged output, usually one result for each record. The model is the same basic one described by Data merge in the InDesign user guide: keep the layout fixed in the .indd, while fields from the data source and workflow inputs supply variable text and images.

Examples include certificates, personalized brochures, product catalogs, price lists, and PDF- or print-ready documents whose design stays fixed while the content varies.

### Placeholders and fields in an InDesign template

InDesign Data Merge uses a data source file, commonly .csv, as its driver. Column headers become field names; InDesign lists those names in the Data Merge panel and places them in the layout as merge placeholders.

### Text fields

- Put the insertion point in a text frame, then choose fields in the Data Merge panel. Placeholders such as <<ProductName>> or <<Description>> appear in the document.
- Insert fields through the panel instead of typing << >> by hand, so the merge metadata remains valid.

### Image fields

- Add a data-source column with a header that starts with **@**, for example @ProductImage, and provide image paths for each row.
- Drag the image field from the Data Merge panel onto a layout frame to set where each record's image appears.

### Workflow Builder mapping

Once the template is uploaded to the node, those field names become configurable inputs. You can attach upstream nodes such as Generate text or Input images, assign static values, or leave fields unmapped when they should keep using values from the uploaded data source.

### Before you begin

- Create the .indd in Adobe InDesign; while designing, use Window > Utilities > Data Merge with an actual data source so previews and placeholders reflect what the node will parse.
- Consult Data merge (InDesign user guide) for the complete desktop process, including CSV limits, export options, and troubleshooting.

### Create a data source file

The data source contains the per-output values. Columns define fields, and rows define records.

In a spreadsheet or text editor, create the first row with column headers. Those headers become the field names placed in the template, such as ProductName, Price, and SKU.

When each record needs a different image, create a column whose header starts with '@', for example @ProductImage, then enter each image file path in the rows below.

Save the data source as comma-delimited (.csv), tab-delimited (.txt), or semicolon-delimited text.

### Build the InDesign template

Start with the InDesign document that will become the template, either by opening an existing file or creating one.

Open Data Merge by choosing Window > Utilities > Data Merge.

From the Data Merge panel menu, choose Select Data Source, then open the data source file created earlier. The panel lists the column headers as fields.

Click in a text frame where a value belongs, then choose the field name in the Data Merge panel to add a placeholder, for example <<ProductName>>. Do the same for every field.

For image placeholders, place an empty frame and drag the matching field from the Data Merge panel onto it.

Use Preview at the bottom of the Data Merge panel to move through records and check layout, text fit, and image placement. Fix overset text or missing images before the template is used for production work.

Save the document.

Store linked assets alongside the .indd, or maintain stable relative paths, so the node can resolve links during upload. Placeholders and fields explains how those fields turn into ports in Workflow Builder.

### Upload the template to the node

In Workflow Builder, place the Merge InDesign data node on the canvas.

Open the node, select Upload template, and choose the .indd file.

When the template depends on linked images, graphics, or packaged fonts, upload them under Assets or wherever the node directs you.

Wait for validation to finish. After it succeeds, fields from the template become configurable parameters.

If validation fails, read the error details. Confirm that placeholders came from the Data Merge panel, and include any linked assets or required fonts.

### Configure parameters and connect your workflow

After the template validates:

- Map a field to an upstream node, such as sending generated product descriptions into the parameter that matches <<Description>>.
- Enter a static value for fields that should remain the same in every workflow run.
- Allow uploaded data source values to supply a field by leaving that field unmapped.

Route the merged result into a preview node, an output node, or another downstream action so the documents are captured.

## Merge Photoshop data

Prepare an Adobe Photoshop (.psd) template with Data Merge tags, then upload it to the Merge Photoshop data node.

Workflow Builder can produce image-based, data-driven outputs at scale when an Adobe Photoshop (.psd) template is tagged with Data Merge tags and sent to the Merge Photoshop data node.

### What the Merge Photoshop data node does

Merge Photoshop data uses the same broad pattern as Data merge in InDesign: the PSD template keeps the design fixed while each workflow run supplies different content. Workflow Builder Photoshop templates mark replaceable content with {{FieldName}} instead of InDesign's <<FieldName>> placeholders. After upload, the node detects those tags and exposes input ports so text, images, and other workflow outputs can be wired into the design.

Use this for localized social creatives, retail hero images with dynamic copy, product shots that need variable labels, and raster output whose layout is constant while text and imagery change.

### Tagging replaceable content in Photoshop

Workflow Builder detects double-brace tags: {{tagName}}. After the file is uploaded, the Merge Photoshop data node names its input port from the text inside the braces, such as heading, sub-heading, or background.

### Text layers

- Tag in the text content - Type {{heading}} or another tag name directly in the canvas text. During merge, workflow-provided copy can replace that string.
- Tag in the layer name - As an alternative, name the layer with the tag, for example a text layer named {{heading}}. Keep to one approach for each field so the Layers panel remains readable.

Both approaches can mark a replaceable text field; select the one that matches your layer-naming conventions.

### Smart Objects and image layers

For image-replacement layers, including Smart Objects and raster image layers, place the {{tag}} in the layer name. The merge uses that layer name to determine which workflow asset should replace the layer's pixels.

Example: naming a Smart Object layer {{background}} creates the background port, which supplies a run-specific background image.

Static artwork, such as a logo, can stay as a normal untagged layer when it should remain unchanged.

### Example layout

The screenshot shows a square canvas with three replaceable regions: two text tags in the copy, {{heading}} and {{sub-heading}}, plus a Smart Object with the layer name {{background}}.

Layers panel (summary): The Heading and SubHeading text layers hold the tag strings as text; the background Smart Object uses {{background}} for its layer name.

### Before you begin

- Author the .psd in Adobe Photoshop. Keep fonts plus embedded or linked assets aligned with what your organization permits in Workflow Builder.
- For general background on Photoshop data-driven assembly, see Create embedded Smart Objects in the Photoshop user guide, especially Smart Objects and layer naming; Workflow Builder uses the {{tag}} merge convention described here.
- For the related page-layout process in InDesign, see Data merge (InDesign) and Merge InDesign data.

### Decide your tags

Make a list of every content element that needs to vary between runs, including headlines, subheads, background art, product photos, and similar items. Assign a unique tag name to each one; tags cannot contain spaces, so use sub-heading or subheading rather than sub heading.

After upload, those names become node port names. Keep them brief, unique, and stable across template revisions whenever possible.

### Build the Photoshop template

Build or open the document at the final pixel dimensions and export resolution you need, for example 1080 x 1080 for a social square.

For text, either type {{yourTag}} into the layer content or use {{yourTag}} as the layer name, following Tagging replaceable content above.

When a Smart Object or image layer must change on each run, name that layer {{yourTag}}, such as {{background}}.

Do not tag layers that never vary, including logos, legal lines, and fixed backgrounds.

Save the Photoshop document as a .psd file.

Check the file in Photoshop for text fit and Smart Object scaling; correct overset text or clipping before upload.

### Upload the template to the node

In Workflow Builder, place the Merge Photoshop data node on the canvas.

Open that node, then choose Upload template, or the matching control in your interface, and pick the .psd file.

Finish any extra requirements shown by the node, such as supplying custom fonts when the template depends on non-standard typefaces.

Let validation complete. After a successful check, the tags you created become input ports that can be connected.

When validation reports an error, inspect the message. Typical causes are malformed tags, such as mismatched braces; repeated tag names when uniqueness is required; or fonts that are not available.

### Configure parameters and connect your workflow

Once validation has passed:

- Map each port to an upstream node that provides the expected kind of data, using text for text tags and images for image or Smart Object tags; where the node supports it, type a static value instead.
- Configure the node output settings, such as JPEG / PNG and quality, according to the delivery target.
- Route the node's image or file output into a preview node, an output node, or the next processing step.

If a tag is not mapped, it may act as a blank input or keep the document default. Test this behavior in your workflow when leaving a port disconnected on purpose.

## Use 3D digital twin workflows

Use cloud workflows with 3D product models to create marketing assets without arranging physical photoshoots.

With 3D digital twin workflows, photorealistic 3D product models are paired with cloud rendering and generative AI so teams can produce marketing imagery at scale. Outputs can range from standardized product views to lifestyle scenes, while avoiding high-end local desktop requirements and physical photography.

These workflows fit cases where you already have a USDZ product file and need consistent marketing output across many angles, environments, or formats. Real-time 3D previews rely on NVIDIA Omniverse pixel streaming, and final renders use Adobe Substance 3D Automation Services. Firefly Creative Production for Enterprise includes the three starter templates: Standardized Packshots, 360° Spin Video, and Composite Imagery.

Adobe and NVIDIA built the cloud-native platform together. In one USD interoperability-based workflow, it combines Frame.io asset management, Firefly Creative Production Workflow Builder, Adobe Substance 3D services, and NVIDIA Omniverse RTX rendering.

- Firefly Creative Production for Enterprise account
- USDZ file for the 3D product model, including geometry, materials, and scene data
- Frame.io or AEM access for optional 3D asset storage

### 3D Digital Twin workflows

The Firefly Creative Production for Enterprise home page offers every 3D Digital Twin workflow as a starter template. Choosing one opens the workflow preloaded on the canvas.

- Standardized Packshots (3D): Generates detailed, high-fidelity product images from a digital twin at predefined angles, using consistent lighting and backgrounds for e-commerce and product display pages. This keeps brand accuracy and visual consistency scalable while cutting the time, cost, and variation associated with traditional photoshoots.
- 360° Spin Video (3D): Creates a seamless turntable-style 360° spin video from a digital twin. The result gives shoppers an in-store-like product view that can increase engagement and buying confidence without physical photography.
- Composite imagery (3D): Combines 3D digital twins with generative AI-created environments for photorealistic lifestyle imagery that keeps product representation accurate. Teams use it across e-commerce, marketing, and campaigns to create scalable product visuals and place products in varied lifestyle contexts without physical photoshoots.

### Create composite imagery from a 3D digital twin

Open Firefly.adobe.com and choose Production.

Choose the Composite Imagery (3D) starter template so the workflow opens on the canvas.

In the Input 3D Node, choose Upload, then select your USDZ file from local storage, Frame.io, or AEM.

Describe the background environment you want in the prompt field.

In the 3D Viewer, frame the product by using toolbar controls to pan, tilt, or zoom, or choose a predefined camera angle from the USDZ file.

Open Advanced Options and configure these settings:

- Output resolution: sets the final image dimensions and detail level (e.g., 2688 × 1536 for high-definition output)
- Content type: selects the output look; choose photo when aiming for realistic, lifelike results
- Auto-generate ground plane: adds a surface under the product so it sits naturally in the scene
- Variations: sets how many alternate results are produced in one run for composition exploration
- Seeds: controls generation randomness so results can be reproduced
- Lighting seeds: changes lighting variation separately, giving control over shadows, highlights, and the overall scene mood

Select Run to process the workflow and create the composite image.

Find generated outputs on the Creative Production home page under Job log.

Generated outputs are also available from the Creative Production home page under Job log.

Tip

Interacting with the 3D Viewer creates a custom camera angle, and that camera is passed automatically into the compositing pipeline. To reproduce successful generations across later runs, record the seed values that produced them.

### Workflow Node Usage Tips

### 3D Viewer

The 3D viewer streams a live pixel-rendered view of the 3D object. Use the bottom toolbar to pan, tilt, or zoom the object; that interaction creates a custom camera angle for compositing.

### Composite images (3D)

Choose a hero asset and a camera. If you have moved the 3D viewer, the workflow creates a custom camera that can be sent into the compositing pipeline.

### Running Composite Imagery (3D) interface

Marketing creatives can use this interface to build composite images from 3D digital twins and AI-generated backgrounds.

Go to the Firefly Creative Production home page and open Bulk Actions.

Upload the USDZ file, choose a hero asset plus camera, or manipulate the 3D object in the viewer to create a custom camera, then enter a background-generation prompt.

To review the result before processing, select the "Preview" button at the bottom of the left control pane.

After the preview output meets your needs, select "Run" so the job can process.

Look for completed outputs on the Creative Production home page under Job log.

### Building Standardized Packshots (3D) workflow

With Firefly.adobe.com already open, choose Production. Selecting the Composite Imagery (3D) starter template loads the workflow on the canvas.

In the Input 3D Node, upload a USDZ file; the file can come from local storage or Frame AEM.

The Render node contains the controls needed to produce high-quality output from the 3D scene.

- Output Size: sets resolution and aspect ratio
- Zoom Factor: changes object framing and scale
- Background Color: applies a solid background when no image is supplied
- Ground Plane: toggles the shadow-catching surface on or off
- Exposure (EV): changes overall scene brightness. Rotation: changes lighting direction and reflections

Choose predefined views from the USDZ file for rendering.

### Workflow Node Usage Tips

### 3D Viewer

In this workflow, the 3D viewer previews the 3D asset only. It does not define the angle used to render packshots, so the USDZ preview is its sole purpose.

### Render 3D Scene

Choose the camera angles for product packshot rendering, then refine any other visual parameters you need.

### Building 360 Spin/ Turntable Video workflow

### Workflow Node Usage Tips

- 3D Viewer: In this starter workflow template, the 3D viewer shows a preview of the 3D asset only; it does not create the angle used for spin video rendering. Use it just to preview the USDZ.
- 360 Spin Video/Turntable: Pick an output video duration of up to 5 seconds and set any other available parameters.

## Partner models in Firefly Creative Production for Enterprise

### Review third-party AI models available in Firefly Creative Production for Enterprise, along with their capabilities and access controls.

Partner models are third-party generative AI models surfaced by Adobe inside Firefly Creative Production for Enterprise. They give enterprise teams more model choices within governed creative-production workflows, so an organization can choose the model suited to a task while workflow orchestration, governance, and execution remain in one environment.

Note

This reference covers only partner models in Firefly Creative Production for Enterprise. Other Adobe products or plans may provide partner model experiences with different features, entitlements, terms, and policies.

### Available partner models

Adobe supports production models that are fully released and adds additional models when they become available.

Customer demand, feasibility, and quality guide Adobe's partner model evaluation. For Firefly Creative Production for Enterprise, selected models must fit the product's enterprise workflow and production scenarios.

### Access control in Adobe Admin Console

System administrators manage partner model access by assigning user roles in the Adobe Admin Console. The console shows only the permission sets available to your organization.

### Role configuration

Use Manage user roles and role settings in the Enterprise administration guide to review how roles correspond to permissions for Firefly, partner models, and related capabilities.

### Custom role creation

Custom roles can narrow access, for example by granting particular partner models instead of all partner models, or by combining other product permissions. Access to partner models usually also requires Firefly access. Full steps are provided in How to create custom roles.

For simpler administration, assign roles to groups.

### Frequently asked questions

Within Firefly Creative Production for Enterprise, Adobe exposes selected third-party generative AI models as partner models. Enterprise teams get more model options while the workflow engine, governance controls, and execution stay together in the same managed production environment.

Adobe added partner models so creative-production teams have more flexibility in the models they use. Firefly Creative Production for Enterprise lets teams call both Adobe capabilities and approved partner capabilities from the same enterprise workflow environment, choosing a model by task while keeping orchestration, governance, and execution unified.

Under the customer's applicable Adobe terms, Adobe provides indemnification for certain copyright infringement claims when eligible Google and OpenAI media generation models are generally available and provided through Firefly Creative Production for Enterprise.

That coverage is separate from Firefly indemnification. It excludes trademark, publicity-rights, and privacy-rights claims. It also may not apply if a customer knew, or should have known, that an output infringed; lacked rights for the input; or failed to follow the applicable safety features or usage guidelines.

Adobe reviews partner models using factors including customer demand, feasibility, and quality. Models added to Firefly Creative Production for Enterprise are chosen because they match the product's enterprise workflow and production use cases.

Where partner model access is enabled, supported workflow steps let you choose between Adobe models and partner models in Firefly Creative Production for Enterprise. Adobe can also make other third-party model access available through organization-specific custom nodes or custom actions.

When a partner model is used, Adobe may send the prompt plus the input files or references required for the requested generation. This is the minimum data needed to perform the generation or edit.

No. Adobe models and partner generative AI models do not train on your content. Adobe surfaces partner models only when the developer or hosting platform has contractually agreed to that restriction. Prompts and inputs are used solely to generate your content.

If partner model access is available in Firefly Creative Production for Enterprise, selection between Adobe and partner models happens in the supported model picker or workflow step.

No. Indemnification applies only to Google and OpenAI media generation models that are generally available and that Adobe makes available in Firefly Creative Production for Enterprise. Models in beta, preview, early access, or another pre-GA state are excluded. Do not assume the coverage applies to every model, provider, or Adobe product.

Organizations can connect other third-party models through custom nodes or custom actions that use their own API key. In those cases, Adobe is not supplying the same built-in model access that partner models receive when surfaced directly in Firefly Creative Production for Enterprise. Provider terms, pricing, and responsibilities can differ.

Use of Adobe-surfaced partner models in Firefly Creative Production for Enterprise is controlled by the customer's applicable Adobe agreement and the product terms for Firefly Creative Production for Enterprise. Separate partner terms are not required for Adobe-surfaced partner models. A custom node or custom action that uses the customer's own provider key may also be subject to the customer's direct terms with that provider.

No. Only partner models provided through Firefly Creative Production for Enterprise are covered by this reference. Experiences involving partner models in Adobe Firefly, Adobe Express, Photoshop, Illustrator, or other Adobe products follow the documentation and terms for those products.

For purchasing, Admin Console setup, operations, and reporting, consult Common Questions about Firefly Creative Production.

## Publish workflows

Use test runs to validate node execution, investigate failures, and publish workflows for production use.

After workflows are built and validated, publishing makes them available for reuse, scaling, and integration with other tools.

### Publish your workflows after running them

After a workflow run succeeds, select Publish in the upper-right corner.

Allow the publishing process to finish because it can take some time. When the workflow is ready, the Publish dialog box opens automatically.

The Publish dialog box presents two options- Copy and Get your token.

The Publish dialog box presents two options- Copy and Get your token.

From the Publish dialog box, choose:

- Copy: copies the cURL command for the workflow so it can be used in external environments.
- Get your token: opens access to the developer workflow guide for integrating the published workflow into other applications.

Using a cURL command to test API-based workflow integration is developer-oriented work. For developer documentation and information, visit developer.adobe.com.

Publishing moves a workflow from experimentation into deployment, which makes it reusable across teams, projects, and production systems. Published and drafted workflows are available on the Creative Production homepage under the Workflows tab.
