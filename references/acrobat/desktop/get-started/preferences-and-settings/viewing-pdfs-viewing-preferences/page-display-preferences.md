# Page Display preferences

Default Layout And Zoom

- Page Layout: Fixes which page layout scrolling uses the first time you open a document. Automatic is the default. Whatever sits under File > Properties > Initial View for Page Layout takes precedence over this.
- Zoom: Fixes the magnification a PDF opens at initially. Automatic is the default. The Magnification value under File > Properties > Initial View overrides this.

Note

A pair of conditions can sway page layout and zoom. 1) Someone has already given a particular PDF a different initial view through File > Properties. 2) You have Restore Last View Settings When Reopening Documents turned on in the Edit > Preferences > Document category.

Resolution

- Use System Setting: Falls back on the system's monitor-resolution settings.
- Custom Resolution: Lets you fix the monitor resolution yourself.

Rendering

- Smooth Text: Chooses which kind of text-smoothing gets applied.
- Smooth Line Art: Smooths lines so their sharp angles disappear.
- Smooth Images: Smooths images to soften abrupt shifts within them.
- Use Local Fonts: Decides whether the app draws on or skips the local fonts installed on your system. Deselect it and substitute fonts fill in for any font the PDF does not embed. When no substitute exists for a font, its text turns into bullets and an error message shows up.
- Enhance Thin Lines: Turned on, it sharpens thin lines on screen to make them stand out.
- Use Page Cache: Loads the upcoming page into a buffer before you reach the current one, trimming the wait as you page through a document.
- Use 2D Graphics Acceleration (Windows only): (Shows up only when your computer hardware can do 2D graphics acceleration.) Quickens zooming, scrolling, and page redraws, and speeds how 2D PDF content renders and responds. It is on by default.

Note

Should this option be missing from the Page Display preferences, your GPU card driver may need updating to switch on the hardware feature. Reach out to your card vendor or computer manufacturer for a newer driver.

Page Content And Information

- Show Large Images: Puts large images on screen. If image-heavy pages bog your system down, clear this option.
- Use Smooth Zooming (Windows only): Deselected, it kills the animation effects, which lifts performance.
- Show Art, Trim, & Bleed Boxes: Reveals whatever art, trim, or bleed boxes a document defines.
- Show Transparency Grid: Puts the grid on view behind transparent objects.
- Use Logical Page Numbers: Switches on the Number Pages command so a page's spot in the PDF lines up with the number printed on it. The Page Navigation toolbar and the Go To Page and Print dialog boxes then show a page number with its position in parentheses — for example, i (1 of 1) when the first page's printed number is i. Leave it off and pages carry Arabic numbers counting from 1. Switching it on guards against surprises after a tap on your browser's Back or Go Back control.
- Always Show Document Page Size: Puts the page measurements alongside the horizontal scroll bar.
- Use Overprint Preview: Sets whether Overprint Preview mode runs only for PDF/X files, never, always, or by automatic decision. On Automatic, the mode switches on whenever a document carries overprints. Overprint Preview mode lets you preview on screen how ink aliasing will look in print — a printer or service provider might, for instance, alias an ink when a document holds two close spot colors but needs only one.
- Default Transparency Blending Color Space: Picks the default color space for transparency blending, either Working RGB or Working CMYK.

Reference XObjects View Mode

- Show Reference XObject Targets: Sets which kinds of documents allow reference XObjects to be viewed.
- Location Of Referenced Files (Optional): Points to a location for the referenced documents.
