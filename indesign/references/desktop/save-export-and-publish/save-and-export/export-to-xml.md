# Export to XML

Save tagged Adobe InDesign content as XML files when another application or workflow needs the structured data.

XML export lets tagged content be reused without losing its structure. You may export a whole document or a selected portion, and the output includes only tagged items, including tables. Before export, create or load tags, apply them to the content, and adjust the hierarchy if required.

Select File > Export.

If only part of the document should be exported, select the starting element in the Structure panel (View > Structure > Show Structure).

Enter a File name and location. For Save as type (Windows) or Format (macOS), choose XML.

Select Save in the Export dialog box.

On the General tab of the Export XML dialog box, set these options:

- Include DTD Declaration: includes the DTD reference with the XML file. This option appears only when the Structure panel contains a DOCTYPE element.
- View XML Using: sends the exported file to a browser, an XML editor, or a text editor. Choose the browser or application from the list.
- Export From Selected Element: begins export at the selected element in the Structure panel. This option appears only if an element was selected before File > Export.
- Export Untagged Tables as CALS XML: writes untagged tables as CALS XML. For export, the table must sit in a tagged frame and remain untagged.
- Remap Break, Whitespace, and Special Characters: writes break, whitespace, and special characters as decimal character entities instead of literal characters.
- Apply XSLT: uses a stylesheet to transform exported XML into outputs such as modified XML or HTML. Use Browse (Windows) or Choose (macOS) to pick an XSLT file, or select Use stylesheet from XML to apply the stylesheet referenced in the XML.

Choose an encoding type from the Encoding menu.

On the Images tab, choose one or more of these image export options:

- Original Images: creates copies of the original image files in an Images subfolder.
- Optimized Original Images: compresses and enhances originals, then puts copies in an Images sub-folder.
- Optimized Formatted Images: processes transformed images, including rotated or scaled items, and writes them to an Images subfolder. It copies only changed images.

If Optimized Original Images or Optimized Formatted Images is selected, set the additional image-refinement options.

Select Export to create the XML file.

Note

XML does not support every special character, such as the Automatic Page Number character. InDesign displays a warning when a character cannot be included in the exported XML file. The same warning appears when a table has not been tagged.
