# Resize Multiple Images Simultaneously, Technical Specifications For Creative Production Preset Workflow, Build Custom Workflows, Use Input And Output Nodes ...

> Adobe Firefly reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Resize multiple images simultaneously; Technical specifications for Creative Production preset workflows; Add and connect nodes; Use input and output nodes; Apply masks in compositing workflows; Use template and data merge nodes.

## Resize multiple images simultaneously

### Resize batches of images with focal point control and Generative Expand to set new output dimensions.

Note

Resize images is limited to Firefly Creative Production for Enterprise Plan users.

On the Firefly homepage, select Creative production.

Select the Resize module.

Use the Resize preset workflow when you need bulk image resizing with focal point control and Generative Expand for more refined results.

For bulk resizing, choose the Resize preset workflow so focal point control and Generative Expand can shape the outputs.

In Upload images, under Original images, choose From device to upload images or drag them into the Images tab.

Upload from the local device directly, or connect cloud storage and upload from there.

Bring images in from your device, or use a cloud storage connection for the upload.

You can also choose Connect to storage to upload images directly from cloud storage such as AEM.

Note

One upload can contain up to 1,000 images in JPEG or PNG format. No individual file can be larger than 100 MB.

After upload, the images appear in the Images tab. Each image includes an overlay showing the focal area, which marks the subject detected as the main point of interest.

An editable overlay on every image shows the detected focal point.

Each uploaded image displays an editable overlay for the focal point that was detected.

To change the focal area, select an image and then choose Edit focal area.

Every image has an overlay for the detected focal point, and you can adjust that marker when needed.

The detected focal point appears as an overlay on each image and can be modified as needed.

The Adjust Focal Points button in the upper-right corner can also be used to modify focal points for uploaded images.

In Edit focal point, resize the crop box with the crop handles, then drag it to the part of the image you want to emphasize. Select Back to leave the view and return to the uploaded-image gallery.

Adjust the resize crop box so the focal point stays centered and the composition matches the dimensions you want.

Tune the crop box for resizing so the focal point remains centered while the composition fits the requested output dimensions.

Use the image list at the bottom of the page to move quickly among uploads and edit each image's focal point individually, which helps place subjects accurately during resizing.

In Set layouts, under Sizes and focal points, browse the preset sizes and select the ones to use for image resizing.

Pick from preset sizes designed for social media platforms, website banners, and other common image outputs.

Use the available presets for quick resizing to common targets such as social media layouts, website banners, and more.

To add custom sizes, enter the width and height you want, then select the icon. Each custom size is added to the selected sizes list for image resizing, with a checkbox for selecting or deselecting it.

In addition to presets, define custom dimensions by entering width and height in pixels for the resized image.

You can add custom sizes alongside presets by specifying pixel width and height for the image resize.

After you finish choosing resize sizes, each one gets a composition layout. A dot marks the focal point's position in the final output image, and that position applies to every image using the same size.

The layout view uses a focal point marker to help keep every resized image framed well.

With the focal point marker in the layout view, each image can stay properly framed during resizing.

To modify the focal point for any added size, select the point and drag it to the desired grid position.

To inspect focal points for the final outputs, open the Previews tab and use the image list along the bottom to move through the uploads.

Use previews to check resized images with their chosen focal points and dimensions.

Use previews to inspect resized images with the selected focal points and dimensions.

When uploaded images are too small or fail to meet the required dimensions after resizing, the empty regions in the result appear as transparent boxes. If Apply GenExpand is turned on, generative AI automatically fills those empty spaces.

Resized images that fall short of the required dimensions show transparent areas, which AI-generated expanded content can fill.

When resized outputs do not satisfy the required dimensions, transparent regions appear and can be filled with AI-generated expansion. Note

- Apply GenExpand is turned on by default.
- Select Preview with GenExpand to see how the result will appear after GenExpand is applied. The preview generation can take a few seconds.

Turn on Apply GenExpand to fill transparent parts of resized images automatically with AI-generated content.

Use Apply GenExpand when transparent areas in resized images should be completed with AI-generated content.

After review and adjustment are complete, check the output count for post-processing and choose Continue.

In Final processing details, type the job name, choose JPG and PNG as the file types, and then choose Process.

Note

Total files in Final processing details reports the output-file count after uploaded images, selected sizes, and chosen output file types are factored in.

An email will provide the link for downloading the processed videos. You can also open the Job log tab to check status and download outputs.

## Technical specifications for Creative Production preset workflows

### Review technical requirements and specifications for using different preset workflows in Creative Production.

Creative Production preset workflows can replace image backgrounds, color grade images, reframe videos, or resize images in bulk. Before running those workflows, account for their requirements and specifications.

Important factors include resolution guidance, supported file formats, file size limits, and other technical parameters. Following these standards helps production workflows run better, keeps outputs aligned with their intended use, and supports consistent quality.

## Add and connect nodes

Learn to build automated creative tasks by adding and connecting input, output, and processing nodes.

Workflows combine input nodes - text, images, and videos - with processing nodes - generate, edit, and transform - and output nodes for final deliverables. These automated sequences help when content creation requires consistency across many assets or when you want to test different creative directions.

Use workflows when you need many versions of creative assets, repeated edits across a batch, or experiments with different generative-AI styles while keeping the same source materials.

### Build a workflow canvas

Open Production from the Firefly homepage left panel, or use the direct production page route.

Choose Create workflow; Firefly opens a new workflow screen.

By default, new pages show the Add nodes and AI Assistant panels.

Each new page opens with Add nodes and AI Assistant panels visible by default.

In Add nodes, drag the input nodes you need onto the canvas; available choices include Input Image, Input Text, and Input Video.

Add matching output nodes to specify the final deliverables, choosing from Output Image, Output Text, or Output Video.

After inputs and outputs are in place, add processing nodes to define the workflow.

From Image, Video, or Text and Data, select processing nodes that fit the creative result you want, for example:

- Image: Generate Image; also use Upscale Image; include Rescale Image; choose Auto Tone or Auto Straighten; add Crop, Expand, Photoshop actions, and other image nodes.
- Video: Generate Video; also Reframe Video and Translate Video.
- Text and Data: Generate Text, plus Merge InDesign Data.

Every processing node includes a function description; use that description to choose nodes that match your use case.

Read each processing node's function description so you can pick the nodes best suited to the task.

Drag the processing nodes you selected onto the canvas, positioning them between the input and output nodes.

Begin with a small set of nodes, then add or remove nodes as you refine the workflow.

Start with only a few nodes and adjust the workflow by adding or removing more later.

Hover over a node connection point until the Add icon appears, then select it to link that node to another function in the workflow.

Move the cursor over empty dots to reveal the add icon.

Hovering on the empty dots makes the add icon appear. Note

A node may expose more than one connection point. Generate Video, for example, can connect with two different inputs: Text Prompt and Reference Image. Individual connection points may also attach to different input or processing nodes.

If manual node setup feels confusing or complex, open the Assistant panel and type your question or desired result into the prompt box so the assistant can create the workflow you need.

After a basic workflow exists, you can edit it to better match your expectations.

Once the assistant creates a basic workflow, adjust it until it fits what you expect.

When all nodes are connected, test the workflow with sample inputs to confirm that it produces the expected results. Refine node settings and connections until the workflow meets your creative requirements.

## Use input and output nodes

Understand input and output nodes, how they operate, and how to use them.

Input nodes introduce assets into a workflow; output nodes determine where generated files are delivered so you can download them or send them to connected systems. In Workflow Builder, these two node types frame nearly every production workflow from start to finish.

### How input and output nodes work

Input nodes make one or more assets available to the rest of the workflow. You can provide those assets from your local drive as a single file or a multi-file upload, or from cloud-connected locations configured for your organization. Many environments expose Adobe Experience Manager (AEM) Assets plus Adobe cloud storage integrations; where configured, they can retrieve content from Adobe Cloud Storage, Frame.io, and similar services.

Output nodes take the files created by the workflow. They serve as the handoff point for exporting finished assets to local download locations and supported cloud systems. This lets workflow runs move assets between Workflow Builder and a Digital Asset Management system or review tools.

For local-file uploads, cloud processing handles the workflow and places completed files on output nodes according to the original connections. Download finished products from an output node location when you need them in local storage. Generated files are also listed in generation history: open Canvas View, use the right-hand toolbar, then open history. That view lets you review, inspect, and download outputs without checking only one node at a time.

### When to use which

- Start a branch with inputs when downstream nodes need images, video, text, or documents from disk or cloud sources.
- End a branch with outputs when final assets need predictable delivery, whether for local archiving or for pushing to the cloud storage your team uses for approval and distribution.
- Use generation history for a run-level inventory of everything produced, especially when comparing workflow runs or grabbing quick downloads.

### Working with local uploads

1. Add the appropriate Input node to the canvas, such as Input images, Input videos, or Input text.
2. In that node, upload one or multiple files from your device. Where the node catalog permits batch or list inputs, multi-asset inputs are supported.
3. Connect the node outputs to processing nodes, including adjustment, generative, merge, or similar nodes.
4. Add an Output node, or the output type required by the workflow, and connect the final results into it.
5. Run the workflow. The output node destination receives the processed files, which you can download to local storage from that node or from generation history.

### Working with cloud sources and destinations

1. Confirm that your account and organization can use the required integrations, such as AEM, Adobe cloud storage, Frame.io, or other options shown in the product.
2. On an input node, pick the cloud source instead of local upload, then choose the asset or folder for the workflow.
3. On an output node, set the cloud destination so Workflow Builder can import/export merged or generated files through those systems.
4. Run or publish the workflow normally. Permissions and entitlements still matter; if a source is missing, check connectivity and catalog availability for your workspace.
5. Control names and supported storage types may differ by node and release. When the UI varies from this guide, use the labels shown in Workflow Builder for your build.

### Providing inputs programmatically (API)

- Invoking a published workflow through the API, rather than from the canvas, means the request payload carries the inputs and upload dialogs are not used. The workflow's published parameters receive the same logical inputs: binary assets and simple values.
- Binary inputs, including images, video, documents, and comparable file-backed assets, are commonly supplied as pre-signed URLs for objects your integration already saved in a supported location. During the run, the service fetches those assets from the URLs you send.
- Simple types, including plain text, flags, or scalar fields exposed by input or configuration nodes, are carried inline by the payload. Represent them as structured fields such as strings, numbers, or booleans, and include them next to any binary references.
- Parameter names, nesting, and required fields come from the way the workflow was authored and published; your integration has to pass values for every required input declared by that published workflow.
- The Workflow Builder API on Adobe Developer covers end-to-end examples for API integration and workflow scaling, along with authentication, request and response formats, batch execution, and error handling.

## Apply masks in compositing workflows

Learn to use masks in composite workflows so only part of an image is edited.

During compositing, filling, and placement operations, masks target particular image regions. They let you change only the needed areas while leaving the rest intact.

### Binary mask interpretation

Binary image masks are accepted by masking nodes and mask inputs. These grayscale or single-channel images use pixel values to control where effects apply.

- White, or high luminance, identifies areas where edits occur, including compositing, generative fills, or adjustments.
- Black identifies areas that should stay unchanged.

Check the documentation for each node to learn its exact behavior. Details can differ because some operations invert the meaning or allow soft masks.

For precise art direction, create masks manually in external apps, or generate them inside workflows with luminosity-driven or segmentation nodes.

### Create masks in external apps

In Photoshop, Illustrator, or another editor, make a grayscale or black-and-white layer that matches the target image size and alignment.

Use white paint for areas the workflow should change and black paint for protected areas. Only add soft edges when feathered masks are supported by the target node.

Choose PNG or another compatible format when saving the mask.

Then add the mask file through Input images or through the mask-specific input exposed by the node.

Use this method when silhouettes, logos, product cutouts, or hand-refined regions require exact control.

### Generate masks inside workflows

Not every mask must be created manually. Workflows include nodes that generate masks programmatically, such as luminosity-driven or segmentation-style masks, so later nodes receive a ready-made mask input.

For the base image, add an input node.

Attach a masking or analysis node that produces a mask image, such as Apply luminosity mask or Remove background.

Route the mask output into an operation that accepts mask inputs; examples include Composite images (2D), Fill region, or similar operations.

Unless the node states otherwise, generated masks use the white-applies, black-protects interpretation.

### Connect masks in the graph

Check the target node first: it may need a standalone mask input, or it may accept one combined parameter containing both mask and image.

Confirm compatibility for dimensions and color space against the node requirements; when they do not match, resize or convert earlier in the graph.

Validate the downstream node so mask issues are caught, including absent connections, mismatched sizes, and masks that are entirely black or entirely white.

### Use cases

- Selective compositing: Keep subjects or products confined to white mask regions.
- Generative edits: Limit Firefly-style fills or expansions to masked areas while nearby content stays unchanged.
- Batch consistency: Use rule-based masks (luminosity, subject separation) to process many images the same way without manual brushing.

### Troubleshooting

## Use template and data merge nodes

Templates can be uploaded so repeatable workflows get mappable ports for data insertion.

Nodes built around templates, including Merge InDesign data, Merge Photoshop data, and 3D composition workflows, convert an authored document or scene into a reusable pipeline. After one template upload, the workflow routes upstream data into the positions defined by that template.

### How template nodes differ from simple inputs

Input ports on these nodes are exposed in a template-specific way:

Start by uploading a document or scene template, such as an InDesign .indd, a Photoshop .psd, or the 3D scene asset required by a composition node.

The service reads the template, then creates mappable ports that match placeholders, layers, fields, or scene inputs present in the file.

Connect workflow inputs, including text, images, tables, or other assets, to those ports. At run time, the template receives those values and generates the outputs.

Before the template is uploaded and validated successfully, the complete set of mappable parameters is usually hidden. Treat template upload as the required first step, just as each merge type's single-node documentation does.

### Authoring templates in external applications

For effective use of these nodes, build the template in the proper source application before upload:

- InDesign: Create layouts with Data Merge and <<field>> placeholders; Merge InDesign data covers data sources, assets, and upload steps.
- Photoshop: Identify replaceable layers by placing {{tag}} in text or layer names; Merge Photoshop data explains Workflow Builder tagging rules and upload steps.
- 3D composition: Build scene or package files according to nodes such as Composite images (3D); after a template or scene upload step, scene data feeds the composition.

Save or package the file together with any required linked assets and fonts, then upload the primary template file, plus bundled assets if requested by the node, into Workflow Builder.

### Upload, map, and connect

Add the node. Put Merge InDesign data, Merge Photoshop data, or the relevant 3D composition node onto the canvas.

Upload the template. Choose the node's upload control for the document or scene. Include Assets or font uploads whenever validation asks for them.

Wait for inspection. After validation passes, the file-derived mappable ports and parameters appear, including text fields, image slots, and other merge targets.

Map inputs - Link upstream nodes, such as generative text or input images, to each port, or enter static values where the workflow should stay unchanged.

Connect downstream - Route the node's outputs to previews, output nodes, or later processing, as with any other graph node.

Fields left unmapped may use template defaults or embedded values, depending on the node. Review validation messages before publishing.

### Template preparation

For field-level setup in InDesign and Photoshop, including data sources, placeholders, and layer naming, combine Adobe product guides with the workflow topics below:

- Data merge (InDesign user guide)
- Merge Photoshop data: upload flow for the Merge Photoshop data node, {{tag}} notation, and text-layer versus image-layer handling
- Merge InDesign data: upload flow for the Merge InDesign data node, <<field>> placeholders, and data-source setup
