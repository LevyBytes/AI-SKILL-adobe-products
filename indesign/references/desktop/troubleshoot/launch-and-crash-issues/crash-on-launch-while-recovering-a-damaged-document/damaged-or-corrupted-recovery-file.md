# Damaged or corrupted recovery file

Exit InDesign.

Remove all items inside the InDesign recovery folder C:\Users&lt;username&gt;\AppData\Local\Adobe\InDesign&lt;version&gt;&lt;language&gt;\Caches\InDesign Recovery (Windows) or /Users/&lt;username&gt;/Library/Caches/Adobe InDesign/&lt;version&gt;/&lt;language&gt;/InDesign Recovery (macOS).

Start InDesign again.

If InDesign now opens normally, a damaged recovery file was one of the files in that folder.

If the issue continues, inspect the recovery-folder setting in InDesign: use Edit > Preferences > File Handling (Windows) or InDesign > Preferences > File Handling (macOS), then check the document recovery path.
