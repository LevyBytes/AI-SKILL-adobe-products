# Background exporting

Background exporting lets you keep working as PDFs are generated, but that same feature can sometimes leave export jobs stuck or unfinished.

Close InDesign completely.

Open a plain text editor such as Notepad (Windows) or TextEdit (macOS).

Create a new empty file, and do not enter any text.

Choose File > Save As.

Set the name to DisableAsyncExports.txt.

Place that file at C:\Program Files\Adobe\Adobe InDesign &lt;version&gt; (Windows) or /Applications/Adobe InDesign &lt;version&gt;/Adobe InDesign &lt;version&gt;.app/Contents/MacOS (macOS).

Start InDesign, open the document, and export to PDF.

The PDF export should now run in the foreground and finish. InDesign cannot be used while the export is running, but the export should not hang.
