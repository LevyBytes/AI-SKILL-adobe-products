# PDFMaker exports PDFs without markup by default

Note

Inside Microsoft Word, go to Acrobat > Preferences > Word and verify that Convert displayed comments to notes in Adobe PDF stays unchecked.

To carry markup over into exported PDFs:

Press Win + R to open the Run dialog box.

Type regedit and press Enter.

Navigate to: `HKEY_CURRENT_USER`\Software\Adobe\Adobe Acrobat\DC\PDFMaker\Word

Tip

Swap DC for whatever Acrobat version you run, if it differs.

In the right pane, right-click and select New > DWORD (32-bit) Value.

Name the new value: bEnableMarkupExport.

Double-click the new value and set it to 1.

Select OK and close Registry Editor.

Restart Microsoft Word.

Once those steps are done, PDFMaker carries the markup through when it exports PDFs from Word.
