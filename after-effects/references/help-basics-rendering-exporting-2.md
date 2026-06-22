# Basics Rendering Exporting (part 2)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Collect files in one location

Copies of every file across a project or composition get pulled together into one spot by the Collect Files command. Reach for it ahead of rendering, when archiving, or when relocating a project to another computer system or user account.

Running the Collect Files command has After Effects build a new folder, where it stores the following:

- A freshly duplicated project
- Duplicates of the footage files
- Whichever proxy files you specified
- A report naming the files, effects, and fonts required to rebuild the project and render its compositions.

Collecting files won't stop you from carrying on with edits to a project afterward, but keep in mind those edits attach to the original project rather than the freshly collected copy.

Pick File > Dependencies > Collect Files.

Within the Collect Files dialog box, settle on a fitting option for Collect Source Files.

All

Pulls in every footage file, unused footage and proxies included.

For All Comps

Pulls in all footage files and proxies that any composition in the project draws on.

For Selected Comps

Pulls in all footage files and proxies drawn on by whichever compositions are selected right now in the Project panel.

For Queued Comps

Pulls in all footage files and proxies used — whether directly or indirectly — by any composition holding a Queued status in the Render Queue panel.

None (Project Only)

Drops the project at a new location and leaves all source footage behind.

Generate Report Only

Pick this and no files or proxies get copied.

Obey Proxy Settings

Turn to this option for compositions carrying proxies, to set whether the copy should keep the present proxy settings. With it selected, only the files the composition actually uses are copied. Leave it unselected and the copy holds both proxies and source files, so down the road you can swap proxy settings inside the collected version.

Pick For Queued Comps in the Collect Source Files dialog and After Effects pulls proxy settings off the render settings instead of the composition.

Reduce Project

Strips every unused footage item and composition out of the collected files whenever these options are picked under the Collect Source Files menu:

- For All Comps
- For Selected Comps
- For Queued Comps

Change Render Output To

Turn to this to point the output modules at a named folder inside the collected files folder for rendering. Picking it guarantees your rendered files stay within reach when you render the project off another computer. Rendering status has to be valid (Queued, Unqueued, or Will Continue) before the output modules will render files into that folder.

Enable ‘Watch Folder’ Render

The Collect Files command can save projects into a designated watch folder, after which watch-folder rendering kicks off over a network. After Effects also drops in a render control file named [project name]\_RCF.txt, the cue that tells watching computers the project is up for rendering. After Effects together with any installed render engines then teams up over the network to render that project. Learn more about setting up watch-folder rendering.

Maximum Number Of Machines

Turn to this to set how many render engines, or licensed After Effects copies, you'd like assigned to render the collected project. Underneath the option, After Effects tells you how many project items will render across more than one computer.

When rendering drags on far too long, odds are Maximum Number Of Machines is set too high, and the network overhead of tracking render progress across every computer outweighs the time actually spent rendering frames. So many variables tied to the network setup and its computers feed into the best figure; test it out to land on the optimal number for your own network.

Want your own notes in the report it generates? Pick Comments, type your notes, and pick OK. Those comments land at the report's end.

Pick Collect. Give the folder a name and pick a spot for your collected files.

The moment file collection begins, After Effects builds the folder and copies over the files you specified. That folder's structure mirrors how folders and footage items are arranged in your project. Inside the new folder sits a (Footage) folder, and possibly an output folder too (assuming you picked Change Render Output To).

Wrapping those folder names in parentheses is the cue to any render engines on the job that these folders aren't to be scanned for projects.

## Specify filenames and locations for rendered output

Note

To track down an item rendered earlier, or to confirm where a queued render item is headed, open up the Output Module group in the Render Queue panel and click the underlined file path — or right-click (Windows) or Control-click (macOS) on the Output Module heading.

## Specify the filename and location for a single render item

- To key in a filename and destination folder by hand, click the underlined text beside the Output To heading.
- To name a file off a file naming template, click the triangle beside the Output To heading and pick a template from the menu.

## Create and use a custom file naming template

Custom templates let you derive the output filename from properties of the project and composition.

Note

If you want a particular file naming template set as the default, hold down Ctrl (Windows) or Command (macOS) while picking the template from the Output To menu.

Within the Render Queue panel, pick Custom from the Output To menu.

To start the new file-naming template from one that already exists, pick that existing template from the Preset menu.

Click inside the Template box at the spot where the file-naming rule should go, then do any of the following:

Pick a property from the Add Property menu to drop a preset property into the filename.

Type your own text into the Template box.

Keep the insertion point clear of the square brackets [ ] that surround preset properties.

Click the Save button to store the file-naming template as a preset that the Output To menu can reuse later. When the Choose Name dialog box opens, type a name for the file-naming template and click OK.

Click Default if the chosen file-naming template should always be applied.

Click OK to put the chosen file-naming template to work on the current Output Module.

## Name output files automatically

With the Use Default File Name And Folder preference turned on, every composition you add to the render queue gets its own unique output filename automatically — the lone exception being files written when you save previews, which keep the composition name. While that option stays selected, each new render item inherits the folder of the render item before it until you point the path somewhere else. Render the same composition again and After Effects tacks a number onto the filename (for example, composition_name_1).

Note

For projects that move between platforms or render through a watch folder, steer clear of high-ASCII and other extended characters in filenames.

Pick Edit > Preferences > Output (Windows) or After Effects > Settings > Output (macOS).

Turn on Use Default File Name And Folder.

## Support for paths in templates

Templates accept paths as well. You're free to write an absolute path right into a template — say, one saved to always drop its rendered files at E:\Output\[compName].[extension].

## Render settings

Every render item carries its own render settings, which govern how that one render item turns the composition into output. Out of the box, those settings come from whatever project settings, composition settings, and switch settings already apply to the composition behind the render item. You're free, though, to adjust any render item's settings and thereby override some of those inherited values.

Both the root composition behind a render item and any compositions nested inside it fall under that render item's render settings.

Note

Render settings shape only the output produced by the render item they belong to; the composition itself stays untouched.

Render Settings give you the levers to dial in quality, tailor the output, keep file size in check, and render faster.

Render Settings give you the levers to dial in quality, tailor the output, keep file size in check, and render faster.

## Change render settings

- Want to adjust a render item's render settings? Click the render settings template name beside the Render Settings heading in the Render Queue panel, then pick your values in the Render Settings dialog box.
  - Best Settings: A common pick when rendering to final output.
  - Draft Settings: Generally fine when you're reviewing or testing motion.
  - DV Settings: Mirrors Best Settings except Field Rendering is on and set to Lower Field First.
  - Multi-Machine Settings: Mirrors Best Settings except Skip Existing Files is selected so multi-machine rendering can kick in.

Note

When a render item is created, it picks up the default render settings template. Want a different template as the default? Hold down Ctrl (Windows) or Command (macOS) while choosing a render settings template from the menu.

## Create, edit, and manage render settings templates

The Render Settings Templates dialog box is where you handle the tasks below. Open it by either of these routes:

Pick Edit > Templates > Render Settings; alternatively, inside the Render Queue panel, click the triangle that sits beside the Render Settings heading.

Click Make Template.

- Build a new render settings template by clicking New, dialing in render settings, and clicking OK. Then type a name for it.
- Revise an existing render settings template by picking it from the Settings Name menu, clicking Edit, and adjusting the render settings.

Note

Render items already sitting in the render queue won't feel any change you make to an existing template.

- To pin down a default render settings template for rendering movies, individual frames, pre-rendered movies, or proxies, pick a template from one of the menus in the defaults area of the Render Settings Templates dialog.
- Click Save All to write every render settings template currently loaded out to a file.
- Click Load to bring back a saved render settings template file, select the file, then click Open.

## Render settings reference

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

## Output modules and output module settings

Output module settings ride along with each render item and govern how the rendered movie is handled on the way to final output. Reach for them to set the file format, output color profile, compression options, and the rest of the encoding options for final output.

They'll also crop, stretch, or shrink a rendered movie for you; running that after the render is handy when one composition feeds several flavors of output.

Whatever render settings produce as rendered output is what the output module settings then act on.

Certain formats pop open an extra dialog box once you pick the format in the Output Module Settings dialog. Tweak those settings as needed, and lean on settings presets for format-specific choices like compression options.

A single render item can carry several output modules — handy whenever one render needs to spin off more than one version of a movie. You might, for instance, automate a movie alongside its alpha matte, or turn out both high-resolution and low-resolution cuts of a movie.

Note

Ahead of rendering, look over the Audio Output settings in the Output Module Settings dialog box and confirm they're right. Audio Output has to be selected for audio to render. When your composition carries no audio, leave Audio Output unselected so the rendered file doesn't balloon for no reason.

Lean on the Output Module Settings to land the best results fit to what your particular project calls for.

Lean on the Output Module Settings to land the best results fit to what your particular project calls for.

Several render queue items can have their output module set in one go. Select the render queue items, then for any one of them pick an output module template from the Output Module Settings menu.

Drop an output module onto the Project panel to bring the finished movie — or a placeholder for it — into the project as a footage item.

## Change output module settings

- Want to revise a render item's output module settings? Click the underlined output module settings template name beside the Output Module heading in the Render Queue panel, then pick your values in the Output Module Settings dialog box.
- To push an output module settings template onto selected render items, head to the Render Queue panel, click the triangle beside the Output Module heading, and pick a template off the menu.

Your options run from a custom output module settings template to any of the preset ones. A handful of templates ship with the app, the Lossless template among them, which is meant for movies headed to video, film, or an NLE system.

Note

When a render item is created, it picks up the default output module settings template. Want a different template as the default? Hold down Ctrl (Windows) or Command (macOS) while choosing an output module template from the menu.

Note

To revise output module settings across several output modules at once, select those output modules and then pick an output module template. Every selected output module then takes on that template.

## Create, manage, and edit output module templates

The Output Module Templates dialog box is where you handle the tasks below. To open it, pick Edit > Templates > Output Module; or, inside the Render Queue panel, click the triangle beside the Output Module heading and then click Make Template.

- Build a new output module settings template by clicking New, dialing in output module settings, and clicking OK. Then type a name for it.
- Revise an existing output module settings template by picking it from the Settings Name menu, clicking Edit, and adjusting the output module settings.

Note

Render items already sitting in the render queue stay unaffected by changes you make to an existing template.

- To pin down a default output module settings template for processing movies, individual frames, previews, pre-rendered movies, or proxies, pick a template from one of the menus in the Defaults area of the Output Module Templates dialog box.
- Click Save All to write every output module template currently loaded out to a file.
- Click Load to bring back a saved output module template file, select the file, then click Open.

## Add output modules to and remove output modules from render items

- Add a fresh output module carrying default settings to one render item by clicking the plus (+) sign to the left of the Output To heading on that render item's last output module.
- Strip an output module off a render item by clicking the minus (-) sign to the left of that output module's Output To heading.
- Add a fresh output module carrying default settings to the render items you've selected by picking Composition > Add Output Module.
- Copy the output modules you've selected by pressing Ctrl + D (Windows) or Command + D (macOS).

## Output module settings

Note

For help with the controls in the color management area of the Output Module Settings dialog box, see Assign an output color profile.

Format

Sets the format that the output file — or sequence of files — comes out in.

Include Project Link

Sets whether the output file carries information linking back to the source After Effects project. Open that output file in another application — Adobe Premiere, say — and the Edit Original command lets you edit the source project back in After Effects.

Include Source XMP Metadata

Sets whether the output file picks up XMP metadata from the files that served as sources for the rendered composition. XMP metadata can ride the whole way through After Effects — from source files, into footage items, into compositions, and on into rendered and exported files. Across every default output module template, Include Source XMP Metadata starts out deselected.

Post-Render Action

Sets an action for After Effects to carry out once the composition has rendered. Learn more about post-render actions.

Format Options

Brings up a dialog box where you set format-specific options.

Channels

Which output channels the output movie holds. Choose RGB+Alpha and After Effects builds a movie with an alpha channel, which implies a depth of Millions of Colors+. Alpha channels aren't something every codec handles.

Note

Any file built at a color depth of Millions of Colors+, Trillions of Colors+, or Floating Point + carries labeled alpha channels — the description of the alpha channel lives inside the file. That spares you from having to set an alpha interpretation every time you import something made in After Effects.

Depth

Sets the output movie's color depth. Some formats put limits on depth and color settings.

Color

Sets how colors get built alongside the alpha channel. Pick either Premultiplied (Matted) or Straight (Unmatted).

Starting #

Sets which number the sequence's starting frame carries. Set it to 38, for instance, and After Effects labels the first frame [file_name]\_00038. The Use Comp Frame Number option folds the work area's starting frame number into the sequence's starting frame.

Resize

Sets your output movie's size. Turn on Lock Aspect Ratio To to hold the current frame aspect ratio while you resize the frame. Reach for Low Resize Quality on test renders and High Resize Quality for a final movie. Learn more about scaling a movie down and scaling a movie up.

Crop

Adds or removes rows or columns of pixels at the edges of the output movie. Spell out how many rows or columns of pixels to add or remove along the top, left, bottom, and right of the movie. Positive values crop; negative values tack on rows or columns of pixels. Turn on Region Of Interest to export nothing but the region of interest you marked in the Composition or Layer panel.

Note

Tack one row of pixels onto the top while trimming one row off the bottom of a movie and you flip the field order.

Audio Output

Three things you set here: playback format (Mono or Stereo), sample depth (8 Bits or 16 Bits), and sample rate. Match the sample rate to what the output format can handle. For playback on the computer, go with an 8-bit sample depth; a 16-bit depth is the one to reserve for CD playback, for digital audio, or for any hardware built around 16-bit playback.

Note

Some formats' specifications cap the audio parameters. When that happens, the audio options may be locked in the Output Module Settings dialog box. Audio options for certain formats also live in that format's export settings dialog box. To set audio output options for Windows Media, for instance, click Format Options in the Output Module Settings dialog box.

## Warning for mismatch in frame rate or dimensions

A few formats lock down both frame dimensions and frame rate.

Pick one of those constrained output formats and, should your composition or its render settings or its output module settings fall outside the constraints, After Effects throws up a yellow warning icon along with the message "Settings mismatch" at the foot of the Output Module Settings dialog box.

Click the warning icon for a detailed message laying out how the output file gets adjusted to satisfy the format constraints. If you'd rather After Effects not adjust the output module on its own, you can step back and revise composition settings, render settings, and output module settings.
