# Interactive Pdf Options, Preview And Present Interactive Documents, Accessible Pdfs, Use Tags For Accessible Pdfs ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Interactive PDF options; Preview and present interactive documents; Accessible PDFs; Use tags to create accessible PDFs; Set reading order; Create fillable forms; Export to interactive PDFs.

## Interactive PDF options

Review the settings available for exporting interactive PDFs from Adobe InDesign.

These controls define interactive PDF output, including the initial view and security behavior. To reach them, choose File > Export, then choose Adobe PDF (Interactive).

### General tab options

The General tab sets which pages export, how layout is handled, and which interactive features are included in the PDF.

### Pages and layout

Note

For filenames that need to work across platforms, do not use illegal or reserved characters (< > : " / \ | ? \*). During export, InDesign skips those characters automatically.

### View settings

### Page Transitions

### Forms and Media

### Additional options

### Compression tab options

Use the Compression tab to balance image quality against exported PDF file size.

### Compression

### JPEG Quality

Tip

When Compression is set to JPEG 2000 (Lossless), JPEG Quality cannot be changed.

### Resolution

### Advanced tab options

Use the Advanced tab for document metadata and language configuration.

### Security tab options

Use the Security tab to apply passwords and permission restrictions to the exported PDF.

### Password protection

Caution

Set different values for Document Open Password and Permissions Password so the two access levels remain separate.

### Printing permissions

### Editing permissions

### Content access permissions

## Preview and present interactive documents

Use Adobe InDesign preview and presentation features to check interactive content and present documents.

Before export, InDesign lets you test interactive elements and display documents in full-screen mode. Use the EPUB Interactivity Preview panel for interactivity testing and Presentation Mode when you need an uncluttered viewing environment.

Before you begin

Have Adobe Connect or other screen-sharing software ready for web meetings.

### Preview interactive elements

Open Window > Interactive > EPUB Interactivity Preview.

Choose the preview scope:

Set Preview Spread Mode : previews the current spread.

Set Preview Document Mode: previews the whole document.

Click Play Preview to start the preview.

Within the preview panel, test interactivity by clicking buttons, playing animations, or triggering multimedia.

Move between pages with the left and right arrows at the bottom of the panel.

Tip

To replay from the start, Alt-click (Windows) or Option-click (macOS) the Play Preview button. Choose Clear Preview to reset the preview state.

### Present documents in Presentation Mode

Choose View > Screen Mode > Presentation.

Move to the next spread with a mouse click, the Right Arrow key, or Page Down.

Go back to the previous spread by Shift-clicking, using the Left Arrow key, or pressing Page Up.

Press Esc when you need to leave Presentation Mode.

### More Presentation Mode keyboard shortcuts

## Accessible PDFs

See how Adobe InDesign uses structured tagging and alternative text so screen readers and search engines can work with PDF documents.

An accessible PDF serves all readers, including people who depend on assistive technologies such as screen readers. In InDesign, accessibility features add structure, readability, and navigation that go beyond the visual page layout.

The main ingredients are tagged content, a sensible reading sequence, heading structure, and image-level alternative text. These signals let assistive technologies interpret the content and present it accurately. They also raise overall PDF quality by making files easier to navigate, search, and reuse across devices.

### How accessibility works in PDF documents

Accessibility in a PDF comes from semantic structure as well as visual appearance. Tags (such as H1 and H2) identify items including lists and tables, and a logical reading order lets assistive technologies present the material correctly.

Alternative text supplies descriptions for images and other non-text elements, so meaningful content remains available to everyone.

### How InDesign supports accessible PDFs

InDesign can place accessibility structure in the source document before export, which reduces repair work after the PDF is created. Updates are easier, and accessible PDFs can be regenerated from a stronger source file. A reliable base depends on structured content plus a defined reading order:

- Paragraph styles: Build a clear hierarchy and map styles to PDF tags (such as headings and paragraphs), giving assistive technologies the semantic cues they need.
- Reading order: Define logical content flow in the Articles panel separately from the visual layout.
- Anchored objects: Keep images in the text flow so each one appears at the intended point in the reading sequence.
- Alternative text: Describe images so non-text content remains accessible.

When these elements are added during design, exported PDFs keep their structure, meaning, and accessibility.

### Essential accessibility components

Accessible PDFs depend on several components working together:

- Metadata: Title and description carry into the PDF export and identify the content.
- Navigation elements: Table of contents entries, bookmarks, hyperlinks, and cross-references give assistive technologies efficient ways through the document.
- Interactive elements: Form fields and buttons need labels and descriptions so keyboard and screen reader users can understand them clearly.

## Use tags to create accessible PDFs

Find out how structure tags in Adobe InDesign enable screen reader access and improve content reflow in exported PDFs.

Before exporting to PDF, tag frames and graphics so accessibility improves and screen readers can interpret visual content. Page items can receive tags, and graphics can receive descriptions, without changing the document's appearance.

### Apply tags to text frames and graphics

Choose View > Structure > Show Structure.

From the Structure pane menu, choose Add Untagged Items.

Choose Window > Utilities > Tags.

In the Tags panel, check that Story, Figure, and Artifact tags are listed.

Using the Selection tool, select a text frame or graphics frame.

In the Tags panel, choose the appropriate tag for the selected frame.

Check the Structure pane to verify the tag assignment.

### Label graphics for screen reader software

Choose Window > Utilities > Tags.

Select the graphic and use the Tags panel to confirm it is tagged as Figure.

Choose View > Structure > Show Structure.

In the Structure pane, select the Figure element that corresponds to the graphic.

From the Structure pane menu, choose New Attribute.

In the Name field, type Alt (case-sensitive).

In the Value field, enter descriptive text for the image content or function.

Select OK.

Note

When a graphic is actually text, such as an ornate drop cap, use ActualText rather than Alt in the Name field.

### Group related items into Article elements

When several page items belong together, for example a headline, image, and caption telling one story, place them in an Article element so screen reader navigation and comprehension improve.

Choose View > Structure > Show Structure.

In the Structure pane, choose New Element from the panel menu.

Choose Window > Utilities > Tags.

In the Tags panel, select the Article element.

Drag page elements such as Story and Figure tags into the Article element in the Structure pane, arranging them in a hierarchy that matches the content.

Open the context menu for the Article element, then choose New Attribute from that menu.

In Name, type Title (case-sensitive).

In Value, enter a descriptive name that identifies the article content.

Select OK.

Article elements keep related material grouped even when it crosses page breaks or spans columns. When a user enters the group, the screen reader announces the article title, adding context before the content begins.

If Create Tagged PDF is enabled for Adobe PDF export (File > Export > Adobe PDF (Print)), InDesign writes the tag and attribute data into the PDF structure. To inspect the result, open the exported PDF in Acrobat and view the Tags panel (View > Show/Hide > Navigation Panes > Tags).

## Set reading order

See how the Articles panel in Adobe InDesign sets content order for accessible PDFs and digital exports.

Reading order controls the sequence used when content is exported to accessible PDFs, EPUB, or HTML. Because screen readers and reflowable formats use that sequence to present page elements, it is a core accessibility setting.

The Articles panel offers a straightforward way to arrange content while leaving the page layout unchanged.

Choose Window > Articles to open the Articles panel.

Select the page objects to include in the reading order.

From the panel menu, choose New Article to open the New Article dialog box.

Type a descriptive name, select Include When Exporting, and select OK.

Within the Articles panel, drag items until they match the desired reading sequence.

From the Articles panel menu, select Use for Tagging Order in Tagged PDF.

Note

If Create Tagged PDF is enabled in the Export Adobe PDF dialog box during PDF export, InDesign uses the reading order defined in the Articles panel.

.

## Create fillable forms

See how Adobe InDesign uses the Buttons and Forms panel to place interactive form fields.

InDesign can build basic fillable forms that work after export to an interactive PDF. For validation, calculations, and other advanced behavior, continue editing the PDF in Acrobat and test the exported form.

### Add form fields to your document

Draw a frame where the form field should go with the Rectangle Frame tool.

Choose Window > Interactive > Buttons and Forms.

With the frame selected, use the Buttons and Forms panel's Type list to choose the form element type.

Type a form field name in the Name field.

### Customize form field appearance

Select the form field frame.

Choose Window > Interactive > Buttons and Forms.

Use the Event list in the Buttons and Forms panel to choose an event, for example On Release or On Tap.

In Actions, click Add new action for selected event icon, then choose Submit Form, Clear Form, or Print Form.

For Submit Form actions, use the URL field for mailto:address@example.com.

For Button, Radio Button, and Check Box, choose the Appearance state to edit: Normal, Rollover, or Click.

For Text Field, Combo Box, and List Box, adjust Font and Font Size.

Under PDF Options, add tooltip text in the Description field.

### Set form field tab order

Keyboard navigation works more easily when tab order follows a logical sequence.

Choose Window > Articles to open the Articles panel.

Place the form field frames in the Articles panel in the order you want.

Drag items up or down to refine the tab sequence.

From the panel menu, choose Use for Tagging Order in Tagged PDF.

Note

Tab order from the Articles panel applies only when Create Tagged PDF is enabled in the Export to Interactive PDF dialog box during export to an interactive PDF.

## Export to interactive PDFs

See how Adobe InDesign's built-in PDF export features produce digital documents with multimedia.

Interactive PDF export supports InDesign documents up to 200" × 200" and keeps features such as buttons, multimedia, hyperlinks, bookmarks, and page transitions.

For noninteractive PDFs, use File > Export > Adobe PDF (Print); before export, test interactive elements with Window > Interactive > EPUB Interactivity Preview.

Choose File > Export.

Enter a PDF location and file name.

Select Use InDesign Document Name as the Output Filename when future exports should keep the document name.

Choose Adobe PDF (Interactive) in the Save as type (Windows) or Format (macOS) menu.

Use Save to open the Export to Interactive PDF dialog box.

Set the options in the Export to Interactive PDF dialog box, then select OK.
