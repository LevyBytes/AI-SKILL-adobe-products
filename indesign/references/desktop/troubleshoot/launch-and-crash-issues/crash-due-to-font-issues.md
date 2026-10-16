# Crash due to font issues

Use font management and system troubleshooting for Adobe InDesign launch crashes and font-related failures.

Fonts can make InDesign crash when you open or edit a document, usually when the application loads fonts that are corrupted, incompatible, or installed incorrectly. Symptoms can include a splash screen followed by a freeze, a font-related error, or an unexpected quit. The trigger may be opening a specific file, scrolling through pages, or editing text, and some affected text can show pink highlighting before the crash. Corrupted font cache files are often the source, and InDesign normally rebuilds those files automatically at the next launch, which often clears startup crashes.

Quit InDesign completely.

Open C:\Users\AppData\local\Adobe\Adobe\InDesign&lt;version&gt;\Caches (Windows) or /Users/Library/Caches/Adobe InDesign/&lt;version&gt;/ (macOS).

Delete all files named AdobeFnt\*.lst (such as AdobeFnt10.lst, AdobeFnt12.lst).

Restart InDesign so clean font cache files are regenerated.

Before opening documents, wait until InDesign finishes activating fonts.

The table below lists the default paths you can check to see which fonts are installed on your machine. Fonts can also be stored in other locations, so treat the list as a starting point rather than a complete inventory.
