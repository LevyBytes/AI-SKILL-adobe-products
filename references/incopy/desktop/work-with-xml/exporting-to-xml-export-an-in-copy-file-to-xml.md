# Exporting to XML - Export an InCopy file to XML

Before converting InCopy stories to XML data, complete these tasks:

Create or load element tags.

Apply tags to items in stories.

Rearrange elements in the Structure pane, if needed.

You may export all XML content in the document or only part of it. Export is limited to tagged content.

If only part of the document should be exported, select the Structure pane element where the export should start. Use File > Export. Set Save As Type (Windows) or Format (Mac OS) to XML. Enter the file name, choose the location for the XML file, and click Save. In the Export XML dialog box, select UTF-8 or UTF-16 as the encoding scheme. Available choices include:

Include DTD Declaration

Exports the loaded DTD file together with the XML file. The control appears only after a DTD file has been loaded into the document.

View XML Using

Sends the exported file to a browser, XML-editing application, or text editor. Pick the browser or application from the list.

Export From Selected Element

Begins export at the Structure pane element you selected. This choice is available only when an element was selected before choosing File > Export.

Export Untagged Tables AS CASL XML

Writes untagged tables in CALS XML format.

Remap Break, Whitespace, And Special Characters

Writes break, whitespace, and special characters as decimal character entities instead of plain characters.

Apply XSLT

Applies a stylesheet for transforming the exported XML to HTML or another format. Use Browse (Windows) or Choose (Mac OS) to choose an XSLT file.

Click Export to export the XML file.
