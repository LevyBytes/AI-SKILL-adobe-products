# Link And Update Content Across Documents, Automate Workflows With Scripts, Structure And Tag Documents For Xml, Automated Workflows Overview ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Link and update content across documents; Automate workflows with scripts; Structure and tag documents for XML; Automated workflows overview; Import XML data into InDesign.

## Link and update content across documents

Replicate and refresh content across documents with linked content in Adobe InDesign.

Linked content allows page items to be reused in the same document or in multiple documents. The original object serves as the parent, and placed duplicates serve as linked items. When the parent changes, linked items are marked for synchronization.

### Collect and place linked content

Choose the Content Collector tool, select an object, and add it to the conveyor.

Turn on Create Link and place the object in the document.

When the conveyor contains several objects, use the Previous and Next icons to choose the needed object. The selected object is shown with a blue outline.

### Place and link content directly

With the Selection tool, choose a page item, or use the Type tool to put the insertion point inside text.

Choose Edit > Place and Link.

Place the loaded content into the document. The item you place is then visible in the Links panel as a linked object.

### Update linked content

When the source item changes, the Modified icon appears on the frame and also in the Links panel.

Choose Window > Links.

In the Links dialog box, move the pointer over the Modified icon, then double-click it to refresh the linked content.

The update operation swaps the linked item for the newest version of its parent object.

### Key considerations

- Linked items stay associated with their source, so you can update them whenever needed.
- The Links panel lists linked content and reports its current state.
- Edits made locally to linked items may be replaced when an update is applied.
- Linked workflows make reused content practical across documents, orientations, and alternate layouts.

## Automate workflows with scripts

Use the Scripts and Script Label panels in Adobe InDesign to automate work and keep repeated production steps faster and more consistent.

InDesign provides two scripting panels for workflow automation: the Scripts panel and the Script Label panel.

### Scripts panel

Run automation for repeated operations from the Scripts panel. It shows scripts found in the Scripts folders under the InDesign application and Preferences folders.

Open it with Window > Utilities > Scripts. To make scripts available there, put them in the Scripts Panel folder. Script storage locations

- macOS: Users/[username]/Library/Preferences/Adobe InDesign/[version]/[language]/Scripts/Scripts Panel
- Windows: Users\[username]\AppData\Roaming\Adobe\InDesign\[version]\[language]\Scripts\Scripts Panel

Tip

In the Scripts panel, right-click (Windows) or control-click (macOS) any script, then choose Reveal in Explorer or Reveal in Finder; that opens the Scripts Panel folder.

### Script Label panel

Use the Script Label panel when page items, including text frames or shapes, need labels. Scripts can use those labels to find particular objects. Open the panel with Window > Utilities > Script Label.

Scripting can automate anything from basic commands to more elaborate functionality. You may write scripts yourself or run scripts supplied by others, using the available scripting guides and developer resources.

### Available sample scripts in InDesign

Sample scripts can be installed and used. In the Scripts panel, double-click a script to run it.

### UXP plugin development

Scripts automate operations, while UXP scripting gives developers a way to create plugins with rich, interactive user interfaces.

### Community-contributed scripts

Use open-source scripts from the Adobe InDesign community when you need added functionality or automation for specialized production tasks.

Adobe hosts an open source community scripts repository on GitHub. To learn about the InDesign Community Script repository, consult the ReadMe file. The ReadMe file explains how to contribute a script and provides links to the scripters.

## Structure and tag documents for XML

Prepare Adobe InDesign content for export workflows by structuring it and applying XML tags.

The Structure dialog box shows every XML-tagged item in a hierarchy. These tagged items are elements, and they specify the document content order and relationships.

### Use the Structure dialog box

Open the Structure dialog box with View > Structure > Show Structure.

Close the Structure dialog box with View > Structure > Hide Structure.

To expand or collapse an element, and therefore show or hide its child elements, select the triangle beside that element.

Resize the Structure pane by moving over the panel border until the resize cursor appears, then dragging the border.

To expand or contract an element together with every element inside it, hold Ctrl (Windows) or Command (macOS) while selecting the triangle beside the element.

For text snippets, open the Structure panel menu icon. Choose Show Text Snippets to display them, or Hide Text Snippets to conceal them.

### Rearrange structured elements

Open the Structure dialog box by choosing View > Structure > Show Structure.

To turn an element into another element's child, drag it over the intended parent until that parent highlights, then release the mouse button.

You can also make an element a child of another element by placing it among the existing children of the parent, then releasing the mouse button.

To move an element down one level in the hierarchy, drag it just above a different parent element, then shift it slightly left until the placement line stretches across the parent element's width.

For copying or cutting, select one or more elements in the Structure dialog box, then choose Edit > Copy or Edit > Cut. Select the element immediately above the insertion point, then choose Edit > Paste.

### Insert a parent element

Choose View > Structure > View Structure.

From the Structure panel menu icon, choose New Parent Element.

In the Select Tag for Element dialog Box, choose a Tag from the dropdown.

Select OK.

### Add an attribute

Choose View > Structure > View Structure.

Select an element.

In the Structure dialog box, select the Add an attribute icon.

In the New Attribute dialog box, enter a Name and Value.

Select OK.

### Show or hide attributes in the Structure pane

Choose View > Structure > View Structure.

In the Structure dialog box, select the Structure panel menu icon.

From the Structure panel menu icon, choose Show Attributes or Hide Attributes.

### Edit or delete an attribute

Choose View > Structure > View Structure.

In the Structure dialog box, select an Attribute, then right-click and choose one of these actions: choose Edit and change the Name and Value to update the attribute. Choose Delete to remove the attribute.

### Create an XML tag

Open the Tags dialog box by choosing Window > Utilities > Tags.

From the Tags panel menu icon, choose New Tag.

In the New Tag dialog box, enter a Name and choose a Color from the dropdown menu.

Select OK.

## Automated workflows overview

In Adobe InDesign projects, XML, IDML, and scripting technologies can automate publishing work and raise production efficiency.

InDesign automation cuts down repeated production effort while making documents more consistent. It can generate, refresh, and publish content from structured data sources, which helps organizations produce high volumes of material more efficiently.

### What is document automation?

Document automation relies on XML, IDML, scripting, and related technologies for efficient content generation, assembly, and publishing. Typical uses include building catalogs from product databases, making directories from structured records, and producing newspapers from news feeds and editorial material.

- Dynamic document construction: InDesign can build documents automatically from databases, XML sources, and news feeds. After generation, documents can be reviewed and edited in InDesign or Adobe InCopy before they are published.
- XML-based workflows: XML keeps content separate from layout, which supports content reuse, automated document generation, and smoother publishing processes. Import XML data into InDesign when XML content needs to be added to documents.
- IDML-based workflows: IDML is an XML-based representation of InDesign documents. Publishing systems can programmatically create, change, assemble, and exchange IDML files, then bring them into InDesign or InCopy for review and production.
- Script-based automation: Scripts can handle repeated work such as image placement and replacement, text corrections, content formatting, and output preparation. Automate workflows with scripts for both simple production work and advanced publishing workflows.

Automated publishing environments commonly use XML, IDML, and scripting technologies together. XML supplies structured content, IDML represents document structure, and scripts automate assembly and output. InDesign also includes metadata capabilities that assist applications in identifying, managing, and processing content.

For large-scale publishing needs, organizations can use InDesign Server as well. It uses the same codebase as InDesign and adds capabilities for automated, server-based publishing workflows.

### What is metadata technology

XMP places information inside files so applications and workflows can identify, manage, and process content throughout publishing.

- Metadata integration: XMP keeps information about content within the file, allowing those details to move with the asset across applications and workflows. This method improves content management and workflow efficiency.
- Metadata development: The XMP Toolkit helps developers add metadata functionality to products and solutions. It provides samples, documentation, source code, and project files for working with XMP.

## Import XML data into InDesign

Import XML data from external sources when Adobe InDesign needs structured content.

Bringing in XML content adds structured elements to the document. They appear in the Structure pane and can be placed in the layout or merged into tagged placeholders. InDesign provides two separate import modes that control how XML content is integrated with the document:

Import XML in append mode

When you append imported content, the document's existing structure and content remain unchanged. The new XML content is added as elements at the end of the Structure panel.

Open an existing document that should receive the XML content, or create a new document.

Choose View > Structure > Show Structure to open the Structure pane.

Choose File > Import XML.

Choose the XML file for import.

Turn on Show XML Import Options.

Choose Append Content.

Use Open; the XML Import Options dialog box appears.

When appropriate, enable Create Link, Apply XSLT, and Import CALS tables as InDesign tables.

Select OK.

### Import XML in merge mode

During a merge import, InDesign checks the arriving XML against the document's existing element structure and element names. Matching elements allow the imported XML to update current content and flow into the appropriate tagged frames, or into matching placeholders, in the layout.

Open the target document for the XML material, or start with a new document.

Use View > Structure > Show Structure so the Structure pane is visible.

Choose File > Import XML.

Pick the XML file for the import.

Enable Show XML Import Options.

Choose Merge Content.

Choose Open to display the XML Import Options dialog box.

In the XML Import Options dialog box, enable or disable options as required.

Choose OK.
