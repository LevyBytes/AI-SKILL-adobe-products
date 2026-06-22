# Xml, Structuring Documents Xml

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Working with XML; Structuring documents for XML — Structure pane overview.

## Working with XML

Adobe InDesign CS5 can both create and use XML, as can many other applications. After tagging content in an InDesign file, export and save the file as XML so the content can be reused in another InDesign file or in another application. You can also import an XML file into InDesign and tell InDesign how to display and format the XML data.

### About XML

XML (Extensible Markup Language) supports data reuse in a file and can automate replacing data in one file with data from another. XML uses tags to describe file parts, such as a heading or a story. Those tags identify data so it can be stored in an XML file and processed correctly during export to other files. Treat XML as a data-translation mechanism: XML tags label text and other content so applications can recognize the data and present it.

Extensible language

XML is extensible because people define their own XML tags. They can make one tag for each category of information they plan to reuse. XML tags do not specify how data should be displayed or formatted; they identify content only.

For example, in InCopy , you can create a Heading1 tag and apply it to every first-level heading in a document. After the document is saved as an XML file, any XML-capable application can import the Heading1 content and use it for a web page, printed catalog, directory, price list, or database table.

Many applications, including InDesign, can create and use XML. Once content in an InDesign file is tagged, you save and export the file as XML so it can be reused in another InDesign file or another application. Likewise, you can import XML into InDesign and direct InDesign to display and format the XML data however you choose.

Adobe InCopy is one of many applications that can create and use XML. After tagging content in an InCopy file, save and export it as XML so it can be reused in another InCopy file, an InDesign file, or a different application.

In InCopy , you can create XML tags and apply them to parts of a document even without XML experience. Behind the scenes, InCopy handles the XML programming and creates the XML during export to XML format.

Note

XML tags are not the same as InCopy tagged text. View the Tagged Text PDF at www.adobe.com/go/learn_id_taggedtext_cs5_en (PDF) for details on tagged text, which provides a separate export and import method for InCopy content.

XML data structure

In XML data, an element is the basic building block: it is data with a tag applied. XML files nest elements inside other elements to form a hierarchy.

The Structure pane shows the hierarchy and order of XML data. In the XML structure, child elements sit inside parent elements, and those parent elements can themselves be child elements. From the reverse perspective, a parent element can contain child elements that later function as parents for still other child elements.

In one example image, a chapter element contains, and is the parent of, several recipe elements. Each recipe element is then the parent of elements named recipename, ingredients, instructions, notes, and servings. The Root element contains all elements and is shown in the Structure pane's top position.

XML in InDesign Structure pane (left) and placed in layout (right)

XML in InDesign Structure pane (left) and placed in layout (right)

In another example image, a chapter element contains, and is the parent of, one recipe element. That recipe element is the parent of elements named recipename and ingredients. The Story element contains every element and is always shown in the Structure pane's top position.

InCopy document formatted with XML tags

InCopy document formatted with XML tags

### XML tools

For XML work, InCopy provides both the Structure pane and the Tags panel. The Structure pane shows every document element and its hierarchy. To make each element identifiable, InCopy shows the element tag and an icon for the type of content it contains. The Structure pane can also show the first few words of text inside an element, called a text snippet; this differs from snippet files, which hold reusable objects.

Structure pane (left) and Tags panel (right)

A. Triangle to expand or collapse elements B. Element (placed in layout) C. Element (not in layout) D. Text snippet E. Element tag

Structure pane (left) and Tags panel (right) Structure pane (left) and Tags panel (right)

A. Triangle to expand or collapse elements B. Element placed in layout C. Text snippet D. Element tag

Structure pane (left) and Tags panel (right)

The Structure pane is used to view, edit, and manage XML elements. It supports several XML workflows. For instance, imported XML content can be placed into the layout by dragging elements from the Structure pane directly onto a page. The Structure pane also lets you adjust element hierarchy. Through it, you can add elements, attributes, comments, and processing instructions.

The Tags panel shows element tags. From the Tags panel, you can import, export, add, delete, and rename tags. Use the Tags panel to apply element tags to content intended for XML export, and to apply tags to frames before XML content is imported into those frames.

The Tags panel shows element tags. From the Tags panel, you can import, export, add, delete, and rename tags. Use the Tags panel to apply element tags to content intended for XML export.

### About DTD files

Sharing XML data with other people requires agreement on a standard collection of tag names and element attributes, so everyone in the group applies tags consistently. One way to manage this shared XML structure is to use a document type definition (DTD) file.

A DTD file supplies group members with a defined set of elements and attributes. It also sets rules for where elements may appear in the structural hierarchy. For example, because a title belongs inside a story, the DTD file might require the Title element to be placed under the Story element. If you tag a title but do not tag the story containing it, the DTD file identifies the Title element as invalid. Searching for and flagging invalid structure in an InDesign file with a DTD file is called validating.

To use a DTD file when the document does not already contain one, load it into the document. Loading imports the element names from the DTD into the Tags panel. Other users who load the same DTD file get matching element names, helping everyone in the group use the same elements. Imported elements are locked, so they cannot be deleted or renamed unless the DTD file is removed from the document.

InCopy cannot import a DTD file directly, but DTD files imported in InDesign are available while you edit the story in InCopy. InCopy lets you view the DTD file and validate stories against it to confirm correct tag application.

DTD file opened for viewing in InCopy

DTD file opened for viewing in InCopy

### XML rule sets

XML rule sets are instruction groups written in a scripting language, such as JavaScript or AppleScript. They evaluate XML data and perform actions when that data satisfies specified conditions. Every rule includes at least one condition and at least one action. The rule tests XML data against its conditions; when a condition is satisfied, the matching action is performed. For example, an XML rule can say that whenever the Paragraph element appears under the Subhead element, which is the condition, a specific style is applied, which is the action. Another rule could state that whenever the Product element appears, which is the condition, a new frame is created and a product image is imported, which are the actions. XML rules let XML drive layout creation and formatting dynamically.

### Preparing XML files for K4 or InCopy workflows

Preparing XML-tagged files for K4 or InDesign/InCopy workflow environments may require changes to the way you build structure and import XML into InDesign files.

XML can be imported into InDesign in two ways: merge and append. Merge can replace the current structure, while append adds to any structure that already exists. In either case, keep the root element separate from text frames. Use the default element named "Root" or rename this element to fit the current workflow or requirement, while still leaving it unassociated with a text frame.

Ask your system administrator for guidance about XML use in K4 or InCopy workflows.

### More like this

- Structure pane overview
- Use DTD files to validate XML

## Structuring documents for XML — Structure pane overview

In the Structure pane, XML-tagged document items are shown as a hierarchy. These tagged items are elements. Reordering elements in the Structure pane changes the sequence and parent-child arrangement of the items. Each element shows an icon for its type plus a tag name.

Structure pane

A. Triangle to expand or collapse elementsÂ B. ElementÂ C. Text snippetÂ D. Attribute

Structure pane Structure pane

A. Triangle to expand or collapse elementsÂ B. ElementÂ C. Text snippetÂ D. Attribute

Structure pane

Elements can also show these cues:

Blue diamond

When an element icon has a blue diamond, that element is linked to a page item; without the blue diamond, it is not linked to any page item.

Underline

An underlined tag name identifies the element that corresponds to the selected page item. For instance, after selecting text tagged with Title, the word Title for that text element is underlined in the Structure pane. The underline lets you match page selections with their Structure pane elements.

Text snippet

A text snippet can appear to the right of an element and contains the first 32 characters of tagged text. Use these snippets to recognize which page item belongs to an element.

Dot and attribute

Attributes store metadata about elements. When an element has attributes, a black dot appears below it along with the attribute names and values.

### Structuring documents for XML — Use the Structure pane

- To display the Structure pane, choose ViewÂ > StructureÂ > Show Structure.
- To hide the Structure pane, choose ViewÂ > StructureÂ > Hide Structure, or click the splitter button.
- To reveal or hide an element's child elements, click the triangle next to the element.
- To resize the Structure pane, drag the splitter button.
- To open or close an element together with every element inside it, hold down Ctrl (Windows) or Command (MacÂ OS) while clicking the triangle next to the element.
- To display or suppress text snippets, use the Structure pane menu command Show Text Snippets or Hide Text Snippets.

### Structuring documents for XML — Structure pane icons

These icons are used in the Structure pane:

Icon

Name

Use

Root element

Every document has one root element at the top; it can be renamed, but it cannot be moved or deleted.

Story element

Indicates tagged stories, including one or more linked frames.

Text element

Indicates tagged text inside aÂ frame.

Graphic element

Indicates a tagged frame containing a placed image. Each graphic element carries an href attribute whose value points to the linked file's path or URL.

Unplaced text element

Not yet connected to any page item.

Unplaced graphic element

Not yet connected to any page item.

Table element

Indicates a table.

Header cell element

Indicates a table cell in the header row.

Body cell element

Indicates a table cell in the table body.

Footer cell element

Indicates a table cell in the footer row.

Empty element

ThisÂ element is associated with an empty frame.

Attribute

Contains metadata, for example keywords or the location of a linked image (HREF attribute).

Comment

Contains comments that are present in the XML file but absent from the InDesign document.

Processing instruction

Contains a directive that causes an action in applications that can read processing instructions.

DOCTYPE element

Identifies the DTD file InDesign should use for XML file validation.

| --- | --- | --- |

### Structuring documents for XML — Rearrange structured elements

Within the Structure pane, you can reorder elements and change their hierarchy level. Keep these constraints in mind:

An XML document must contain exactly one root element at the top of the structure. That root element is the parent container for all other elements. In the Structure pane, only the DTD shown as a DOCTYPE element, comments, and processing instructions can be placed before the root element.

Changing the XML hierarchy can change how tagged items appear on InCopy pages. For example, if you make a text element a child of an element elsewhere in the structure, the text also shifts in the layout.

A table cell element cannot be dragged into a table element, and elements cannot be moved into a table element.

In the Structure pane, use any of these methods:

To move an element, drag it to a different position in the structure. While you drag, a line shows the insertion point, and the line width indicates the hierarchy level.

To make an element a child of another element, drag it onto the intended parent until that parent is highlighted, or place it with the other children under that parent before releasing the mouse button.

To demote an element one hierarchy level, drag it just above another parent element, then move it slightly left until the placement line spans the parent element's width.

To copy or cut an element, select one or more elements in the Structure pane, and then choose EditÂ > Copy or EditÂ > Cut. Select the element immediately before the desired insertion point, and choose EditÂ > Paste.

Note

Cutting an element places the element and its contents on the clipboard, while the frame itself stays in place.

### Structuring documents for XML — Insert a parent element

Use a parent element in the Structure pane when the XML structure needs to stay valid or the content needs clearer organization. First select the elements that should become children of the new parent. After insertion, the selected children move down one level in the structure.

With child elements selected (left); a newly inserted parent element includes the child elements (right).

With child elements selected (left); a newly inserted parent element includes the child elements (right). With child elements selected (left); a newly inserted parent element includes the child elements (right).

With child elements selected (left); a newly inserted parent element includes the child elements (right).

In the Structure pane, select the elements that should become child elements of the new parent element. Observe these requirements:

The Root or a root-level element cannot be selected.

The Story or a story-level element cannot be selected.

All selected elements must occupy the same level in the structural hierarchy.

The selected elements must be contiguous.

Do not include table cells or attributes in the selection.

Use New Parent Element from the Structure pane menu, or right-click (Windows) or Control-click (MacÂ OS) and choose New Parent Element.

Choose the tag to assign to the new parent element, and click OK.

Note

For a faster insertion, select Add Tag in the Tags panel, and then click a tag in that panel. You can also right-click (Windows) or Control-click (MacÂ OS) a selected Structure pane element, choose New Parent Element, and then choose an element.

### Structuring documents for XML — Work with attributes

Attributes add information to XML elements. Each one has both a name and a value. In the Structure pane, attributes are visible, but they are not placed into the document and do not become document content. Add attributes to elements when downstream files or applications need that data from XML files created in InCopy .

When an image is tagged, InDesign automatically adds an href attribute whose value records the image file's disk location. Other files and applications can use that href attribute to find the image on disk and display it.

An attribute includes a name (href, in this case) and a value.

An attribute includes a name (href, in this case) and a value.

You can add attributes to elements other than the DOCTYPE element (a DTD file), comments, and processing instructions. As one example, create an attribute named keywords if another application will need searchable keywords. You can also use attributes for substituted text, article titles, or other information about the content.

Note

When working with a DTD file, check its contents to determine which attributes are permitted. Like tag names, attribute names have to follow the DTD.

Note

InCopy recognizes special namespace attributes for paragraph or character styles, table and table-cell styles, and whitespace control. For details, consult the XML technical reference and www.adobe.com/go/learn_id_XMLscript.

### Structuring documents for XML — Add an attribute

Select an element. Use one of these options:

Use the Add An Attribute button .

From the Structure pane menu, choose New Attribute.

Open the selected element's context menu with right-click (Windows) or Control-click (MacÂ OS), and choose New Attribute.

Enter the attribute name and value, and then clickÂ OK.

### Structuring documents for XML — Show or hide attributes in the Structure pane

From the Structure pane menu, choose Show Attributes or Hide Attributes.

To see an element's attributes, you may first need to click the triangle icon next to that element.

### Structuring documents for XML — Edit or delete an attribute

In the Structure pane, select an attribute. Then do one of the following:

To change the attribute, double-click it, or use Edit from the Structure pane menu.

To remove the attribute, click the Delete icon, or use Delete from the Structure pane menu.

### Structuring documents for XML — Edit href attributes

InCopy automatically creates href attributes for image-file handling. The href attribute stores the disk location of the image file so the file can be displayed. When you tag a placed image, InCopy writes an href attribute value containing the image path and filename.

Valid paths include absolute links, relative links beside the XML file, and relative links into the Images subfolder under the XML file's folder. Relative paths depend on the saved document path.

An href attribute with an absolute link looks like theÂ following (in Windows and the MacÂ OS):

href=file:///C:/Images/Meadow.psd

href=file:///Users/abhayc//Desktop/abc.jpg

An href attribute to an image file in the same folder as the XML file looks like the following:

href=file:Meadow.psd

An href attribute to an image file in the Images subfolder looks like the following:

href=file:///Images/Meadow.psd

Edit the href attribute when you need to point to a different image link. For instance, an absolute link can be changed into a relative link so the image remains accessible after export.

Double-click the href attribute in the Structure pane. (You may need to click the triangle icon beside the image element before the attribute appears.) For Value, enter the new path to the image, and then clickÂ OK.

### Structuring documents for XML — Add comments and processing instructions

InCopy lets you add comments and processing instructions to an XML file. Add a comment when an element needs descriptive information. Web browsers and text editors can display comments, which can help others interpret the XML structure and tags. A processing instruction is an application-specific command. For example, a page-break processing instruction can tell the application receiving exported XML where a page break should go. Processing instructions created by an InCopy user are intended for other programs; InCopy does not execute them.

The Structure pane displays comments and processing instructions. You can move, edit, and delete them just as you do other Structure pane elements. However, attributes and child elements cannot be added to them.

InDesign Structure pane with text snippets showing

A. Processing instructionÂ B. Comment

InDesign Structure pane with text snippets showing

### Structuring documents for XML — Add a comment

Select the element that should receive the comment. Note

For a table comment, select a table cell element. Comments can be added to table cells, but not to tables.

In the Structure pane menu, choose New Comment. Enter the comment in the New Comment dialog box.

### Structuring documents for XML — Add a processing instruction

Select the element for the processing instruction. Note

For a table processing instruction, select a table cell element. Processing instructions can be added to table cells, but not to tables.

In the Structure pane menu, choose New Processing Instruction. For Target, supply a name that lets an application reading exported XML identify the processing instruction. For Data, enter the value that tells that application what to do with the processing instruction.

### Structuring documents for XML — View comments and processing instructions

In the Structure pane menu, choose Show Comments or Show Processing Instructions.

### Structuring documents for XML — Edit comments and processing instructions

Select the comment or processing instruction. Use any of these actions:

Open the comment or processing instruction by double-clicking it.

Choose Edit on the Structure pane menu.

Modify the comment or processing instruction, and click OK.

### Structuring documents for XML — Use DTD files to validate XML

XML validation checks the document's structure, element tag names, and attributes against a DTD file's rules. Before validating against a DTD file, load it into the document in InDesign.

Note

Loading a DTD file brings its tag names into the Tags panel. Imported tag names are locked; to delete or rename them, first remove the DTD file from the document.

After a DTD file is loaded into a document, the Structure pane shows the DOCTYPE element at the top. DTDs may also load automatically during XML import. To use a different DTD file in a document, remove the DTD already in place before loading the replacement.

Working with DTD files in InDesign

A. DOCTYPE element from the DTD file (Structure pane)Â B. Locked tag from the DTD file (Tags panel)

Working with DTD files in InDesign

### Structuring documents for XML — Load a DTD file

Loading a DTD file embeds that file in the InDesign document.

Use one of these methods:

From the Structure pane menu, choose Load DTD.

From the Tags panel menu, choose Load DTD.

Select a DTD file to import, and click Open. Note

To see tags defined by the DTD file, open the Tags panel with WindowÂ > Utilities > Tags.

### Structuring documents for XML — View a DTD file

DTD files use ASCII text. They can include embedded instructions and explanations about proper tag usage and element order. In InDesign, only a DTD loaded in the document can be viewed.

DTD file opened for viewing

DTD file opened for viewing Use one of these methods:

In the Structure pane menu, choose ViewÂ DTD.

In the Structure pane, double-click the DOCTYPE element.

Note

To print a DTD file, copy the code shown in the View DTD window, and paste it into a text editor.

### Structuring documents for XML — Delete a DTD file

Choose Delete DTD from the Structure pane menu.

InDesign removes the DTD copy stored inside the InDesign document, while leaving the original DTD file untouched. Tags imported with the DTD file remain in the Tags panel, but become unlocked.

### Structuring documents for XML — Validate XML structure

During validation, InCopy warns you when the XML does not follow the rules defined by the DTD file. It offers fixes that can bring the XML into compliance with DTD file requirements. You can address errors individually or display every error in a separate window.

Structure pane with Suggestions pane

A. Loaded DTDÂ B. Error or invalidating conditionÂ C. Description of error with suggested fixÂ D. Error countÂ E. Validate buttonÂ F. View all errors in a separate window

Structure pane with Suggestions pane Structure pane with Suggestions section

A. DOCTYPE element from assigned DTD fileÂ B. Error or invalidating conditionÂ C. Description of error with suggested fixesÂ D. Error countÂ E. Validate buttonÂ F. View all errors at once in a separate window

Structure pane with Suggestions section Use ViewÂ > StructureÂ > Show Structure. In the Structure pane, click the Validate buttonÂ  . Note

To change the root element used by InDesign for validation, choose DTD Options in the Structure pane menu.

To resolve errors shown in the Suggestion pane, click a suggested fix to test it, or directly adjust the XML structure and tags with the Structure pane and the Tags panel. To inspect other errors, use one of these options:

Click the Left arrowÂ  or Right arrowÂ .

Click the Error Window buttonÂ  to open every error in a separate window.

Use the Structure pane menu command View List Of Errors.

Note

After finding 250 errors, InCopy stops validation. When this limit is reached, the Error Count box shows a plus sign.

### More like this

- Exporting to XML
- About DTD files
