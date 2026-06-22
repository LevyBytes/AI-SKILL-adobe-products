# Automated Rendering Network Rendering, Rendering Exporting Still Images Still

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Automated rendering and network rendering — Automating rendering with aerender; Rendering and exporting still images and still-image sequences.

## Automated rendering and network rendering — Automating rendering with aerender

With its command-line interface, the executable aerender.exe lets you script your rendering. You will find this executable sitting in the same folder as the main After Effects application. By default, the file lives here:

Windows: \Program Files\Adobe\Adobe After Effects CC\Support Files

Mac OS: /Applications/Adobe After Effects CC

Whether you spread the work across many machines as a render farm or keep it to one computer running a batch job, the aerender application handles both.

To drive it, type aerender at the command line — or inside a batch script — and follow it with whatever optional arguments you need. A few of these arguments are bare switches that carry nothing of their own (-reuse, say), while others expect a value to accompany them (for instance, -project project_path).

Note

Enter the command aerender -help to show usage information.

Standard output (stdout) receives the application's version and build number.

Either an instance of After Effects that is already up, or a freshly launched one, can carry out the render. Out of the box, aerender fires up a new After Effects instance regardless of whether one is already running. Point it at the instance currently running by supplying the –reuse argument instead.

The command in this example directs After Effects to render frames 1 through 10 of Composition_1 within project_1.aep, sending them to a numbered run of Photoshop files by way of a multi-computer render:

```
aerender -project c:\projects\project_1.aep -comp "Composition_1" -s 1 -e 10
-RStemplate "Multi-Machine Settings" -OMtemplate "Multi-Machine Sequence"
-output c:\output\project_1\frames[####].psd
```

To render just Composition_1 to a specified file, enter this command:

```
aerender -project c:\projects\project_1.aep -comp "Composition_1" -output c :\output\project_1\project_1.avi
```

To render everything in the render queue with current settings in the project file, enter this command:

```
aerender -project c:\projects\project_1.aep
```

Argument

Description

"-h"

"–help"

Print usage message.

"–version"

reports aerender's version number to the console. Renders nothing

"–v verbose_flag"

here verbose_flag picks which category of messages gets reported. The accepted values are ERRORS (only fatal and problem errors print) or `ERRORS_AND_PROGRESS` (rendering progress prints as well).

–reuse

set this flag when you would rather have aerender try to latch onto an already-running copy of AE for the render. On its own, aerender spins up a fresh After Effects instance even when one is open. Yet when AE is already up and you pass the "-reuse" flag, aerender hands the render off to that running AE instance. Any time aerender opens a new AE instance, it instructs AE to shut down once the render finishes; without that, AE stays open. The preferences likewise get saved to file on quit whenever "-reuse" is given; otherwise no save happens.

"–mem_usage image_cache_percentmax_mem_percent"

here image_cache_percent sets the ceiling, as a percentage of memory, for caching images and footage already rendered, and max_mem_percent sets the overall percentage of memory After Effects is allowed to consume.

"–project project_path"

here project_path is a file path or URI that names the project file to open. Supply none and aerender operates on whatever project is currently open. With no project open and none supplied, you get an error.

"–comp comp_name"

here comp_name names a comp to render. Should that comp already sit in the render queue in a queueable state, only its first queueable instance there gets rendered. Should the comp exist in the project yet be absent from the render queue, it is appended to the queue and rendered. Pass no -comp argument and aerender renders the render queue exactly as it stands. Under that condition (no -comp), the sole other arguments that apply are -project, -log, -v, -mem_usage, and -close; the -RStemplate, -OMtemplate, -output, -s, -e, and -i arguments get ignored.

"–s start_frame"

start_frame names the first frame to render. The default is the file's start frame.

"–e end_frame"

end_frame names the last frame to render. Bear in mind this is "inclusive;" the closing frame does get rendered.

"–i increment"

here increment is the count of frames to skip ahead before a new frame renders. With a value of 1 (the default), every frame renders in the usual way. Larger increments hold the same frame for (frame increment-1) repeats, then render a new one, and the cycle restarts. Bigger values render quicker but make motion choppier. Default is 1.

"–OMtemplate output_module_template"

here output_module_template names a template to apply to the output module. A nonexistent template is an error. By default, whatever template is already set on the output module is used.

"–RStemplate render_sett ings_template"

here render_settings_template names a template to apply to the render queue item.A nonexistent template is an error. By default, whatever render template is already set on the item is used.

"–output output_path"

here output_path is a file path or URI naming where the render file goes. The default is whatever path the project file already holds.

"–log log_file_path"

here logfile_path is a file path or URI naming where the log file goes. The default is stdout.

"–sound sound_flag"

here sound_flag controls whether a sound plays once rendering wraps up. The accepted values are "ON" or "OFF". Default value is "OFF".

"–close close_flag"

here close_flag controls whether the project closes when rendering is done, and whether changes get saved. With `DO_NOT_SAVE_CHANGES`, the project closes and changes are discarded. With `SAVE_CHANGES`, the project closes and changes are kept. With `DO_NOT_CLOSE` the project stays open; but it remains open only when an already-running instance of AE is in use, since a freshly launched AE has to close and quit when finished. Default value is `DO_NOT_SAVE_CHANGES`.

"-rqindex index_in_render_queue"

here index_in_render_queue names a render queue item to render. The options that apply when rendering one render queue item match those available with the -comp flag.

"-continueOnMissingFootage"

Keep rendering even when footage is missing. Log it and render placeholder color bars in its place.

| --- | --- |
| "-mfr mfr_flag max_cpu_percent" | here mfr_flag ("ON"\|"OFF") sets whether Multi-Frame Rendering is used, and max_cpu_percent (1-100) sets the top share of CPU power to draw on while rendering. Since Multi-Frame Rendering can drive your CPU at full capacity, you may want to cap that power so other applications stay usable. max_cpu_percent is disregarded once the mfr_flag reads "OFF" |

Over on his After Effects Scripts site, Lloyd Alvarez offers a script that grabs render-ready items from the queue and pushes them off to render in the background through aerender.

### Automated rendering and network rendering — Network rendering with watch folders and render engines

Spreading one or several compositions from a project across multiple networked computers lets you finish in a fraction of the time one machine would take. The workflow means copying the project and its source files into a folder on the network, then rendering from there. People sometimes call a cluster of computers rendering one composition together a render farm.

When a group of networked machines renders a single composition as a team, that is render farming. You can wire it up to run against render-only builds of After Effects known as render engines.

Installing a render engine works the same way as installing the full application. Launch it through the Adobe After Effects Render Engine shortcut found in the Adobe After Effects CC folder.

Follow these steps to set up a render-only copy of After Effects CC:

Head to the product page to download and install After Effects CC.

After the install finishes, open After Effects.

From the Help menu, pick Sign Out.

Quit After Effects.

Create and place the ae_render_only_node.txt file.

A single movie file cannot be rendered at the same time by a watch folder paired with several render engines. In render farming, though, you can let several render engines turn out a movie as a run of still-image files. A post-render action can then stitch that still-image sequence into one movie file. For more information, see Post-render actions.

### Network considerations

As you run several render engines spread over several computers, hold these pointers in mind:

Wherever you can, name folders with absolute file paths so every render engine reads them the same way. Doing that may call for mapping network drives to one consistent drive letter on every machine (H:\renders\watch\, for example). Steer clear of relative paths (such as \\renders\watch).

No two Macintosh computers watching the watch folder may share a name. Since machines so often ship with the same default name, rename yours away from that default.

See to it that every server and client — that is, each computer watching the watch folder — has hard drives whose names are unique.

Never let one computer both host a watch folder and run After Effects in Watch Folder mode. Hand the watch folder to a dedicated server that all the render engines can reach.

Keep rendering and Watch Folder mode off the root of any volume, and off any shared folder that shows up as the root when another computer looks at it. Point them at a subfolder instead. Likewise, keep high-ASCII or other extended characters, along with slashes, out of your filenames. For rendering across several machines, After Effects bundles the Multi-Machine sample template you can build from.

Note

When you render across a network spanning volumes on different network or operating systems — Windows, macOS, Novell, and UNIX among them — be sure to name output files with a convention every rendering or destination volume can handle.

### Project considerations

Be sure every font, effect, and encoder (compressor) the project uses is installed on each computer watching the watch folder. Should a watching computer fail to locate a font, effect, or encoder the project relies on, the render fails.

A render engine installed on a computer brings along all the plug-ins that ship with After Effects. When a composition draws on a plug-in from a different maker, that plug-in has to be on every computer for the composition to render. Support for network rendering, however, differs from one plug-in maker to the next. Before building a network to render effects from third-party plug-ins, check your plug-in documentation or reach out to the plug-in makers, and get answers to these questions:

Under the plug-in's license terms, are you permitted to put several copies on a network just to render with them?

When the plug-in is used for network rendering, do any further caveats or pointers come into play?

### Collect Files folder considerations

Running the File > Collect Files command gathers a project's relevant files into one folder. Inside that folder go a copy of the project file, a render control file (RCF), and additional files that vary with the choices you make in the Collect Files dialog box. Should you place the Collect Files folder on a networked computer that is not a server, keep any render engine off that machine. Don't save the Collect Files folder to a local disk, to the root level of a disk (C: in Windows or the Mac HD in macOS, for instance), or to a shared folder — each of those can point to different spots for different render engines. Every render engine has to read the path identically.

Note

The moment the collected files land in the watch folder, each monitoring render engine begins rendering on its own. If you would rather, the Collect Files command can park compositions and their source footage at a chosen spot, leaving you to launch the watch-folder rendering later. Going that route renders the projects alphabetically rather than in the order they were saved to the spot.

### Automated rendering and network rendering — Track dependencies of a watch-folder render

Setting Post-Render Action options lets you follow render dependencies during a network render. With those options in place, After Effects verifies that everything slated to render is on hand and ready. Say one item leans on another: if that first item has not finished rendering or has hit an error, the second one holds off.

This is how you turn a watch-folder render into a single QuickTime or AVI movie. Just one computer produces the movie.

Note

A multiple-computer watch-folder is taken for granted here as something you have set up beforehand.

Within the Render Queue panel, pull the output module over to the Project panel. A placeholder for that item's output is created by After Effects.

Drag the placeholder back to the Render Queue panel.

Dial in the render settings and output module settings on the placeholder, then click Render.

### Automated rendering and network rendering — Start in watch-folder mode

Only renders from a folder on your own local computer fall under watch-folder mode.

- Have After Effects launch straight into watch-folder mode by saving a project named Watch This Folder.aep. Open that project and After Effects watches whichever folder holds it.
- To kick off watch-folder mode the moment your computer starts, make a shortcut (Windows) or alias (macOS) pointing at the Watch This Folder.aep project and drop it into your Startup folder (Windows) or Startup Items folder (macOS). Open that project and After Effects watches the folder it sits in.
- (Windows only) To launch watch-folder mode from the command line, pick Start > Run and type the following, swapping in the exact name of the folder where you installed After Effects and replacing C:\[temp] with your watch folder's path: "C:\Program Files\Adobe\Adobe After Effects CC\Support Files\afterfx.exe" -wf C:\[temp]

Note

Add the -re option to the command to fire up the After Effects render engine rather than the full version. This command line works in batch files as well.

### Automated rendering and network rendering — Render farming - Render a still-image sequence with multiple computers

When a group of networked machines renders a single composition as a team, that is render farming. You can wire it up to run against render-only builds of After Effects known as render engines. By spreading the job out, render farming trims the time one machine would spend exporting a composition. Several computers and several copies of After Effects can render a composition together over a network. That said, multiple computers only work for still-image sequences — you cannot point them at a single movie.

### Set up the network

Walk through the steps shown in the image to grasp what the network setup requires.

A. Computer with full version of After Effects B. Save a project and all source files to a folder on a server C. Computers with the render engine installed D. Open the project and render a still-frame sequence to a designated output folder on the server

Bring as many computers to bear as you like; generally, more of them means faster rendering. Push too many onto a congested network, though, and the resulting traffic can drag the whole process down. To detect such a slowdown, keep an eye on the dwell time of the Compressing & Writing stage, shown within the Render Queue panel under Current Render.

Note

General network setup falls outside Adobe's technical support; turn to your network administrator for that.

### Render a still-image sequence with multiple computers

Things worth keeping in mind as you render a still image sequence across several computers:

- Any number of computers will do for rendering a still-image sequence this way.
- As a still-image sequence renders across several computers, each copy of After Effects begins rendering at roughly the same moment.
- Where your queued render items have Skip Existing Files (a Render Settings option) turned on, the render passes over frames already present or currently being made.
- Several computers can render the project at once, all writing the still-image sequence into one folder.

To render a still-image sequence, follow these steps:

Put After Effects on each computer that will render the project. Confirm the same fonts are installed everywhere.

Keep plug-ins off the network — don't share them. Make sure a copy of the plug-ins folder sits on every computer running After Effects. With third-party plug-ins, double-check that the identical plug-ins are present on all computers and that you hold enough licenses for them.

On one of the computers, open the project, then choose Composition > Add To Render Queue.

Within the Render Queue panel, set a format under Output Module and pick a folder under Output To. Every computer doing the rendering has to be able to reach that folder.

Heading into the Render Settings section of the Render Queue panel, turn on Skip Existing Files (allow multi-machine rendering); that keeps two machines from rendering the same frames. When skip existing files is on, steer clear of attaching several output modules to one render item.

5. Save the project on the same computer where you opened it back in step 2.
6. On every computer that will render, open the project and save it. That save lets After Effects log the fresh relative paths to each computer in the step that follows.
7. Unless the network moves large files quickly, copy the project file along with all its source footage onto each rendering computer.
   On every machine, bring up the Render Queue panel and hit Render. Starting them all at the same instant is not required, yet launching them roughly together evens out the load. The moment a computer finishes a frame, After Effects scans the Output folder for the next frame still missing and renders that one.

8. Stopping and starting any computer is fine at any point. Stop one and never restart it, though, and the frame it was working on may be left unfinished. Should one or more computers halt mid-render, starting any single one of them guarantees every frame in the sequence gets rendered.

### Run aerender in non-royalty bearing mode

Licensing rules meant render-only machines running After Effects CS5.5 had to be serialized. From After Effects CS6 onward, aerender and Watch Folder can both run in a non-royalty bearing mode, which drops the serialization requirement.

Confirm After Effects runs in non-royalty bearing mode by dropping an empty file called ae_render_only_node.txt at the location below:

On the render-only machine, get After Effects installed first.

Mac locations:

/Users/<username>/Documents/

/Users/Shared/Adobe/

Windows locations:

C:\Users<username>\Documents

C:\Users\Public\Documents\Adobe

### Automated rendering and network rendering — Segment settings

You will find Segment settings within the Output preferences category.

Note

Choose Edit > Preferences > Output (Windows) or After Effects > Preferences > Output (Mac OS).

Sequences and movie files can be split by After Effects into segments held to a set file count or a set file size. That comes in handy when prepping a movie for media like CD-ROM, where file or folder size might have to stay within chunks of 650 MB or under. The Segment Video-only Movie Files At value caps a segment's size in megabytes. The Segment Sequences At value caps how many still-image files land in one folder.

When the movie you are exporting outgrows the largest file your hard disk's formatting scheme allows, drop the Segment Video-only Movie Files At value below that ceiling. Windows hard disks may be formatted under the FAT, FAT32, or NTFS scheme. FAT tops out at a 2 GB file, FAT32 at a 4 GB file. NTFS allows files so large (roughly 16 terabytes) that one movie is unlikely ever to hit the limit.

Segmenting is reserved for movies carrying no audio. Where an output module takes in audio, that item simply ignores the Segment Video-only Movie Files At preference.

Any render item with Skip Existing Files turned on in its render settings ignores the Segment Sequences At preference. (See Render settings reference.)

Note

A segmented movie won't render and export to the root directory (C:\, for example) in After Effects. Pick an output directory other than the root to render and export a segmented movie. (See Specify filenames and locations for rendered output.)

### More like this

- Basics of rendering and exporting
- Render and export with the Render Queue panel

## Rendering and exporting still images and still-image sequences

Search Last updated on Jan 19, 2026

### Learn to render and export still images and image sequences from your After Effects compositions.

### Render and export a sequence of still images

A rendered movie can go out as a run of still images, each movie frame written to its own still-image file. Render one movie over a network of computers and the output always takes the form of a still-image sequence. Sequences of still images feed neatly into many 3D animation programs. For moving visual elements from After Effects into Flash Professional, sequences of PNG files are frequently a solid pick.

Building a movie bound for film means producing a sequence of still images that a film recorder can then transfer to film.

A run of PSD files makes a handy route for handing frames off to Photoshop for cleanup and editing. The image sequence can then be imported back into After Effects.

To name the output for a still-image sequence, what you really supply is a file-naming template. Your name has to include pound signs wrapped in square brackets ([#####]). As each frame renders and earns a filename, After Effects swaps the [#####] piece of the name for a number marking that frame's place in the sequence. Specifying mymovie\_[#####].tga, for instance, would name the output files mymovie_00001.tga, filmout_00002.tga, and on down the line.

A still-image sequence can hold no more than 32,766 frames.

### Render and export a single frame of a composition

A single frame can leave a composition either as an Adobe Photoshop (PSD) file with its layers untouched or as a rendered image. That helps when you want to edit files in Adobe Photoshop, build a proxy, or pull an image out of a movie for posters or storyboards.

Every layer from one frame of an After Effects composition survives into the resulting Photoshop file when you use the Photoshop Layers command. Nested compositions as deep as five levels carry over into the PSD file as layer groups. From the After Effects project, the PSD file takes on the color bit depth.

The layered Photoshop file also tucks in a composite (flattened) image built from all the layers. That guarantees the file opens correctly in applications with no Photoshop-layer support; those applications show the composited image and pass over the layers.

Should a frame lean on features Photoshop lacks, a layered Photoshop file saved out of After Effects can differ from how that frame looks inside After Effects. Take a frame with a blending mode Photoshop does not offer: the layer picks up the closest available blending mode, yet the embedded composite image — which only applications without Photoshop-layer support display — is unchanged. A different route is to render the frame via Composition > Save Frame As > File, which writes out the file as a flattened, rendered PSD.

When color management is switched off for a project (its working color space reads None), PSD files that Save Frame As > Photoshop Layers turns out carry the sRGB IEC61966-2.1 ICC color profile. Switch color management on (the project's working color space set to anything but None) and those Save Frame As > Photoshop Layers PSD files instead embed the color profile matching the project's working color space.

Move to whichever frame you plan to export so that it appears in the Composition panel.

For a single rendered frame, choose Composition > Save Frame As > File, tweak whatever you need in the Render Queue panel, and then select Render.

For a single frame exported as a layered Adobe Photoshop file, choose Composition > Save Frame As > Photoshop Layers.

Note

Want different defaults for the Save Frame As > File command? Edit the Frame Default render settings template.

### More like this

- Render and export with the RenderQueue panel
- Automated rendering and network rendering
