# Render settings reference

Each setting here takes precedence over the matching composition, project, or layer switch setting.

Log

Decide how much detail After Effects records in a render log file.

- Errors Only: After Effects writes the file only when rendering runs into errors.
- Plus Settings: Produces a log file spelling out the render settings in effect.
- Plus Per Frame Info: Produces a log file that spells out the current render settings plus details on how each frame rendered.

Once a log file exists, its path shows up beneath the Render Settings heading and the Log menu.

Quality

Which quality setting applies across every layer. Learn more about working with layer image quality and subpixel positioning.

Resolution

How the rendered composition's resolution compares to the original composition dimensions.

Note

Dropping the resolution? Switch the Quality option to Draft. Holding Quality at Best while you shrink resolution yields a muddy image and drags on longer than Draft does.

Disk Cache

Controls whether rendering taps the disk cache preferences.

- Read Only: While After Effects renders, no fresh frames go to the disk cache.
- Current Settings (default): By default, this honors the disk cache settings from the Media & Disk Cache preferences.

Proxy Use

Controls whether proxies come into play during rendering. With Current Settings, each footage item's own setting applies.

Effects

Current Settings honors the existing Effect switches . All On renders every applied effect. All Off renders none of them.

Solo Switches

Current Settings honors each layer's existing Solo switches. All Off renders as though every Solo switch were turned off.

Guide Layers

Current Settings renders guide layers that sit in the top-level composition. All Off (the default setting) leaves guide layers out. Guide layers buried in nested compositions never render at all.

Color Depth

Current Settings honors the project bit depth. Learn more about color depth and high dynamic range color.

Frame Blending

On for Checked Layers limits frame blending to layers whose Frame Blending switch is set, no matter how the composition's Enable Frame Blending setting is configured.

Field Render

Sets which field-rendering technique applies to the rendered composition. Pick Off when your target is film or a computer screen. Learn more about interlaced video and separating fields.

3:2 Pulldown

Sets the phase of the 3:2 pulldown.

Motion Blur

Current Settings honors the existing Motion Blur layer switch along with the Enable Motion Blur composition switch. On for Checked Layers limits motion blur to layers whose Motion Blur layer switch is set, no matter how the composition's Enable Motion Blur setting is configured. Off For All Layers strips motion blur from every layer, regardless of the layer switch and composition switch settings.

Time Span

Decide how much of the composition to render. Pick Length Of Comp for the whole thing. Pick Work Area Only to limit it to the stretch marked by the work area markers. Pick Custom to set your own time span. Learn more about Work area.

Frame Rate

Which sampling frame rate to use while rendering the movie. Pick Use Comp's Frame Rate to adopt the rate from the Composition Settings dialog, or pick Use This Frame Rate to enter a different one. This leaves the composition's actual frame rate alone. As for the final encoded movie, its frame rate falls to whatever the output module settings dictate.

Skip Existing Files

Rerender just a slice of a file sequence with this option, and the frames you already finished won't cost you any time. As it renders a file sequence, After Effects scans for files belonging to the current sequence, works out which frames are missing, renders just those, and slots them into their proper place in the sequence. The same option also lets an image sequence render spread across several computers.

Note

Your current image sequence needs the same name as the one already there; on top of that, these have to line up: starting frame number, frame rate, and time span. Render into the same folder that already holds the previously rendered frames.
