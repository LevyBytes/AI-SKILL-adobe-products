# Buttons, Hyperlinks, Qr Codes

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Interactive elements and forms; Create and add buttons; Convert buttons to objects; Create interactive buttons; Creating cross-document button jumps; Change and manage button appearance; Create multiple versions of an object; Create hidden buttons with rollover effects; Set the tab order; Create hyperlinks; Hyperlink appearance options; Manage hyperlinks; Generate QR codes; Modify and style QR codes.

## Interactive elements and forms

### Buttons

Create and add buttons

Convert buttons to objects

Create interactive buttons

Creating cross-document button jumps

Change and manage button appearance

Create multiple versions of an object

Create hidden buttons with rollover effects

Set the tab order

### Hyperlinks

Create hyperlinks

Hyperlink appearance options

Manage hyperlinks

### QR Codes

Generate QR codes

Modify and style QR codes

### Forms and PDFs

Interactive PDF options

Preview and present interactive documents

Accessible PDFs

Use tags to create accessible PDFs

Set reading order

Create fillable forms

Export to interactive PDFs

## Create and add buttons

Adobe InDesign can turn drawn objects into interactive buttons.

InDesign buttons can start from drawing tools or from the Buttons and Forms panel. With those approaches, you can define button type, events, and actions. Buttons support document navigation and other interactive behavior.

### Create a button from a drawn shape

Choose a drawing tool, and draw the shape that will become the button.

If the button needs text, add it with the Type tool.

Open Window > Interactive > Buttons and Forms, and then choose Object > Interactive > Convert to Button.

From the Type dropdown menu, choose Button.

Provide a name, and choose an event from the Event dropdown menu.

Use the Add new action for selected event icon to assign an action.

### Add a button from the Sample Buttons panel

Open Window > Interactive > Buttons and Forms.

Select the panel menu icon, and then choose Sample Buttons And Forms.

Place a button by dragging it onto the page or parent page.

With the Selection tool, select the button.

In the Buttons and Forms panel, edit the name, event, or actions.

Select the button, and edit its text with the Type tool.

In the Appearance section, select the Rollover state and paste the button text.

## Convert buttons to objects

Adobe InDesign can remove button interactivity by changing buttons back into ordinary objects.

When buttons are converted to objects in InDesign, the visible content stays while interactive properties are removed. Actions, events, and appearance states are discarded, leaving standard page objects. This permanent conversion is useful for print preparation or for editing button content.

With the Selection tool, select the button.

Choose Object > Interactive > Convert to Object.

Select OK.

## Create interactive buttons

Adobe InDesign buttons use actions to define how they behave interactively.

InDesign uses the Buttons and Forms panel to attach actions to interactive buttons. Those actions determine the response to user input. Events and actions can be configured so buttons provide navigation and interaction.

### Convert an object to a button

With the Selection tool, select the object.

Open Window > Interactive > Buttons and Forms, and then choose Object > Interactive > Convert to Button.

Type the desired value in the Name field.

### Add actions to a button

With the Selection tool, select the button.

Open Window > Interactive > Buttons and Forms.

From the Event drop-down menu, choose an event.

Select the Add new action for selected event icon, and choose an action from the actions list.

### Test button interactivity

Open Window > Interactive > EPUB Interactivity Preview.

Select the Play Preview icon.

## Creating cross-document button jumps

Adobe InDesign text anchors can link buttons to exact locations in another document.

InDesign supports cross-document button jumps by using text anchors as link destinations. A button triggers navigation to the anchor in the target document. This setup creates structured navigation between multiple documents.

### Create the text anchor destination

With the Type tool, select the text.

Open Window > Interactive > Hyperlinks.

Select the panel menu icon, and then choose New Hyperlink Destination.

From the Type menu, choose Text Anchor.

Enter a name, and then select OK.

### Create the button with the Go To Destination action

With the Selection tool, select the object.

Choose Object > Interactive > Convert to Button.

Confirm that On Release or Tap is selected from the Event dropdown menu.

Select the Add new action for selected event icon, and then choose Go To Destination.

From the Document dropdown menu, choose a destination file.

From the Destination dropdown menu, choose a text anchor.

Choose a zoom level from the Zoom dropdown menu.

### Export both documents to an interactive PDF

For the destination document, use File > Export.

From the Save as type dropdown menu, pick Adobe PDF (Interactive), and then use Save.

Export the source document the same way.

Put the two PDF files in one folder.

In the source PDF, activate the button and confirm that it jumps correctly.

## Change and manage button appearance

In Adobe InDesign, button states let you decide how buttons visually respond while a viewer interacts with them.

Use the Buttons and Forms panel in InDesign to set up and adjust appearance states for buttons. Those states control the visual form used for interaction stages including Normal, Rollover, and Click. Clear state management gives interactive documents understandable visual feedback.

### Activate and customize button states

With the Selection tool, select the button.

Open Window > Interactive > Buttons and Forms.

In Appearance, switch to Rollover.

Open Window > Control or Window > Stroke.

Change the button's visual formatting.

If an image is needed, use the Direct Selection tool and then choose File > Place.

In the Buttons and Forms panel, switch Appearance to Click and adjust that state's look.

### Manage and remove button states

Open Window > Interactive > Buttons and Forms.

Next to the appearance name, toggle the Enable/disable option state on export icon to set whether that state is visible.

Use the Delete icon when you need to remove the selected Rollover or Click state.

Open the panel menu icon, and then choose Panel Options.

Choose the Thumbnail Size value, and then use OK.

## Create multiple versions of an object

Adobe InDesign can place alternate versions of one object in a single location by using states.

Build object states in InDesign when one layout position needs to present alternate content. A state stores one version, and only a single state shows at any moment. This approach supports interactive items such as slide shows or image variations inside the same layout.

### Create a multi-state object

Select existing objects or create the objects that will become the separate states.

In the Properties (Window > Properties) panel, align them with Align Horizontal Centers and Align Vertical Centers.

Open Window > Interactive > Object States.

Use the Convert selection to multi-state object icon.

### Add navigation controls

Select or create the object that will serve as the button.

Open Window > Interactive > Buttons and Forms.

From the Type dropdown menu, pick Button.

From the Event dropdown menu, pick On Release or Tap.

Use the Add new action for selected event icon, and then choose Go To Next State or Go To Previous State.

From the Object dropdown menu, choose the multi-state object.

### Edit states in a multi-state object

Use the Selection tool to select the multi-state object.

Open Window > Interactive > Object States.

Select the object state that needs editing.

Update the object by adding strokes, adding fills, or changing its size.

### Configure multi-state object options

Use the Selection tool to select the multi-state object.

Open Window > Interactive > Object States.

Select the object state that needs editing.

Open the panel menu icon. Use either Hide Until Triggered or Reset All Multi-State Objects To First State.

## Create hidden buttons with rollover effects

Adobe InDesign can reveal hidden content through button rollover states.

Create hidden buttons with rollover effects in InDesign by configuring appearance states. Keep the Normal state empty and place the content in the Rollover state. The result reveals information during interaction while leaving the layout unchanged.

### Create a hidden button with image rollover

Select the image that has no border or fill.

Open Window > Interactive > Buttons and Forms.

In Appearance, choose Normal to turn the image into a button, and choose Rollover to enable the image.

Choose Normal, select the image with the Direct Selection tool, and remove that image.

### Set up source and target buttons

Select the source button.

Open Window > Interactive > Buttons and Forms.

For the target button, enable Hidden Until Triggered.

In the Event dropdown menu, set On Roll Over.

Use Add new action for selected event icon, and then choose Show/Hide Buttons and Forms.

In the Visibility list, select the target button and set it to Show.

From the Event drop-down menu, choose On Roll Off, and then add Show/Hide Buttons and Forms.

In the Visibility list, select the target button and set it to Hide.

## Set the tab order

In Adobe InDesign, tab order settings determine how buttons participate in keyboard navigation.

Set button tab order in InDesign to define the way focus travels among interactive elements. The tab order controls the sequence used when the Tab key is pressed. Setting it carefully keeps document navigation accessible and predictable.

### Set tab order using the Set Tab Order command

Choose the page that contains the buttons or form fields.

Use Object > Interactive > Set Tab Order.

In the Tab Order panel, select an item and reorder it with Move Up or Move Down, or drag it into position.

Continue until every needed item is ordered, and then use OK.

Use File > Export, and then choose Adobe PDF (Interactive).

In Advanced, enable Use Structure for Tab Order.

### Set tab order using the Articles panel

Open Window > Articles.

With the Selection tool, drag the buttons or form fields into the required order.

Open the panel menu icon, and then select Use for Tagging Order in Tagged PDFs.

Use File > Export, and then choose Adobe PDF (Interactive).

Enable Create Tagged PDF.

## Create hyperlinks

In Adobe InDesign, hyperlinks can connect selected text or objects to websites, files, email addresses, or another document section.

### Hyperlink to external locations and URLs

After export to Interactive PDF, ePub, or HTML, external hyperlinks allow readers to leave an InDesign document for a website, file, or email address. Supported destinations include URLs, file paths, and email addresses. For file links, package the linked files with the exported document so those links remain usable.

Select the text, text frame, or graphic frame that should become the hyperlink.

Use Type > Hyperlinks & Cross-References > New Hyperlink.

In the New Hyperlink dialog box, choose URL, File, or Email from the Link To menu.

Provide the needed information under Destination:

- For URL: type the complete web address, including http:// or https://.
- For File: type the file path.
- For Email: type the email address and, if needed, a subject line.

Enable Shared Hyperlink Destination if the destination should be stored for later reuse in the Hyperlinks panel.

When text is selected, InDesign assigns the Hyperlink character style by default. The Appearance tab lets you change hyperlink text formatting, and the Accessibility tab lets you supply alternate text. Hyperlinks can also be edited through the Hyperlinks panel.

Use OK.

### Hyperlink to a section in the document

Create internal hyperlinks when readers should land on particular pages, text anchors, or saved destinations inside the same InDesign document. These links make long documents easier to navigate and remain selectable after export to Interactive PDF, ePub, or HTML. Before building the link, decide which page, anchor, or shared item is the destination.

Select the text, frame, or graphic that will act as the hyperlink source.

Use Type > Hyperlinks & Cross-References > New Hyperlink.

From the Link To drop-down, choose Page, Text Anchor, or Shared Destination.

From the Document drop-down, choose the required document.

Enter the destination details:

- For Page: type the page number and choose a Zoom Setting from Fixed, Fit View, Fit in Window, Fit Width, Fit Height, Fit Visible, or Inherit Zoom.
- For Text Anchor: choose an existing text anchor.
- For Shared Destination: from the Name drop-down, choose an anchor or a saved URL, file, or email destination.

Tip

To create a shared destination, enable Shared Hyperlink Destination when creating hyperlinks to external locations.

Use OK.

## Hyperlink appearance options

Adobe InDesign exported documents provide visual formatting controls for hyperlink rectangles, highlight effects, and character styles.

While creating or editing hyperlinks in InDesign, adjust appearance settings to define how hyperlink sources appear in exported Adobe PDF, EPUB, and HTML files. These controls are available on the Appearance tab in the New Hyperlink or Edit Hyperlink dialog box. For hyperlink management, use the Hyperlinks panel instead.

### Hyperlink identifiers

Note

InDesign automatically adds the Hyperlink character style to the document's character styles list. The style is included when the document prints and exports.

## Manage hyperlinks

Use Adobe InDesign to maintain hyperlinks already in a document: edit them, rename their sources, remove them, or jump to their locations.

The Hyperlinks panel is where link destinations are adjusted, link lists are kept organized, and problems are investigated. Its list covers every hyperlink and shows source/destination information for targets including URLs, files, pages, and text anchors.

### Edit hyperlinks

Open Window > Interactive > Hyperlinks.

In the Hyperlinks panel list, choose the hyperlink source you need to change.

Use the panel menu icon and choose Edit Hyperlink. Another route is to right-click a hyperlink source in the document and choose Hyperlinks > Edit Hyperlink, which opens the Edit Hyperlink dialog box.

Revise Destination, Appearance, or Accessibility as needed.

For hyperlink-text color or underline changes, adjust the Hyperlink character style from Window > Styles > Character Styles.

Choose OK.

### Rename hyperlink sources

Open Window > Interactive > Hyperlinks.

In the Hyperlinks panel, choose the hyperlink source that needs a new name.

From the panel menu icon, choose Rename Hyperlink.

Type the replacement name in the Rename Hyperlink dialog box.

Choose OK.

### Delete hyperlinks

Open Window > Interactive > Hyperlinks.

In the Hyperlinks panel, choose one or more hyperlinks.

Click the Delete selected hyperlinks icon. Removing a hyperlink deletes the interactive link only; the source text or graphic frame stays in the document and keeps its original formatting.

### Navigate to hyperlink sources

Open Window > Interactive > Hyperlinks.

In the Hyperlinks panel, choose a hyperlink.

From the panel menu icon, choose Go To Source.

### Navigate to hyperlink destinations

Open Window > Interactive > Hyperlinks.

In the Hyperlinks panel, choose a hyperlink.

From the panel menu icon, choose Go To Destination.

When the destination is a page or text anchor in the same document, InDesign moves to that spot. For external targets, InDesign opens the default web browser or email application.

### Update or reset hyperlinks

Choose the text, text frame, or graphics frame that should become the new or revised hyperlink source.

Open Window > Interactive > Hyperlinks.

In the Hyperlinks panel, choose an existing hyperlink.

From the panel menu icon, choose one of these commands:

- Reset Hyperlink: replaces the hyperlink source with the current selection.
- Update Hyperlink: refreshes hyperlinks that point to external documents.

### Manage hyperlink destinations

Open Window > Interactive > Hyperlinks.

Choose any hyperlink in the Hyperlinks panel list.

From the panel menu icon, choose Hyperlink Destination Options.

Change Destination and Type using the drop-down menus.

Enter a new Name if you want to store it as a shared destination that can be reused.

To remove destinations, choose one of these commands:

- Delete: removes the selected destination.
- Delete Unused: removes every destination that is not currently connected to a source.

## Generate QR codes

Use Adobe InDesign's built-in QR code generator to make codes that scanners can read.

QR codes (Quick Response codes) can carry websites, contact details, messages, or plain text for scanning. InDesign supplies a built-in QR code generator that outputs scalable vector graphics, so the result can be resized and formatted like other vector objects.

Choose Object > Generate QR Code to open the dialog box.

On the Content tab, use the Type dropdown to choose the content kind:

- Web Hyperlink
- Plain Text
- Text Message
- Email
- Business Card

Fill in the fields shown for the selected type.

On the Color tab, choose a swatch to set the QR code color. Black on a transparent background is the default.

Choose OK.

Add the QR code to the document at the default size (30 × 30 mm), place it inside an existing frame so it replaces that frame's content, or drag to draw a custom-sized frame.

## Modify and style QR codes

Apply colors, effects, and transformations to QR code graphics in Adobe InDesign when custom branding is needed.

After generation, QR codes in Adobe InDesign function as vector graphics that support standard tools and effects. You can adjust the QR code itself and its frame without making the code unscannable.

### Change QR code content and colors

Select the QR code object or frame with the Selection tool.

Choose Object > Edit QR Code. You can also right-click and choose Edit QR Code from the panel menu.

On the Content tab, change the data type or revise the content fields as needed.

On the Color tab, choose a swatch to set a QR code color other than the default black.

Choose OK.

### Apply frame styling

Select the QR code frame.

Use the Swatches panel or Color panel to apply fill or stroke color to the frame.

Use the Stroke panel to set line weight, style, and corner options.

Choose Object > Corner Options when frame corners need rounding or another corner treatment.

### Scale and transform QR codes

Select the QR code frame.

For proportional frame resizing: drag a corner handle while holding Shift.

For simultaneous scaling of the frame and QR content: drag while holding Ctrl (Windows) or Cmd (macOS).

For resizing outward from the frame's center point: drag while holding Shift + Alt (Windows) or Shift + Option (macOS).

Rotate the object with the Rotate tool.

Choose the Free Transform tool when scaling, rotation, and shearing should happen in one operation.

## See also

- [Character Styles](uxp-character-styles.md)
