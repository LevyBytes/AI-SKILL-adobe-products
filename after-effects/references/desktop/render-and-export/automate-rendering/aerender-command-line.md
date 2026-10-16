# Automated rendering and network rendering — Automating rendering with aerender

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

```powershell
aerender -project "c:\projects\project_1.aep" -comp "Composition_1" -s 1 -e 10 `
-RStemplate "Multi-Machine Settings" -OMtemplate "Multi-Machine Sequence" `
-output "c:\output\project_1\frames[####].psd"
```

To render just Composition_1 to a specified file, enter this command:

```powershell
aerender -project "c:\projects\project_1.aep" -comp "Composition_1" -output "c:\output\project_1\project_1.avi"
```

To render everything in the render queue with current settings in the project file, enter this command:

```powershell
aerender -project "c:\projects\project_1.aep"
```

| Argument | Description |
| --- | --- |
| `-h`, `-help` | Print usage message. |
| `-version` | reports aerender's version number to the console. Renders nothing |
| `-v verbose_flag` | here verbose_flag picks which category of messages gets reported. The accepted values are ERRORS (only fatal and problem errors print) or `ERRORS_AND_PROGRESS` (rendering progress prints as well). |
| `-reuse` | set this flag when you would rather have aerender try to latch onto an already-running copy of AE for the render. On its own, aerender spins up a fresh After Effects instance even when one is open. Yet when AE is already up and you pass the "-reuse" flag, aerender hands the render off to that running AE instance. Any time aerender opens a new AE instance, it instructs AE to shut down once the render finishes; without that, AE stays open. The preferences likewise get saved to file on quit whenever "-reuse" is given; otherwise no save happens. |
| `-mem_usage image_cache_percent max_mem_percent` | here image_cache_percent sets the ceiling, as a percentage of memory, for caching images and footage already rendered, and max_mem_percent sets the overall percentage of memory After Effects is allowed to consume. |
| `-project project_path` | here project_path is a file path or URI that names the project file to open. Supply none and aerender operates on whatever project is currently open. With no project open and none supplied, you get an error. |
| `-comp comp_name` | here comp_name names a comp to render. Should that comp already sit in the render queue in a queueable state, only its first queueable instance there gets rendered. Should the comp exist in the project yet be absent from the render queue, it is appended to the queue and rendered. Pass no -comp argument and aerender renders the render queue exactly as it stands. Under that condition (no -comp), the sole other arguments that apply are -project, -log, -v, -mem_usage, and -close; the -RStemplate, -OMtemplate, -output, -s, -e, and -i arguments get ignored. |
| `-s start_frame` | start_frame names the first frame to render. The default is the file's start frame. |
| `-e end_frame` | end_frame names the last frame to render. Bear in mind this is "inclusive;" the closing frame does get rendered. |
| `-i increment` | here increment is the count of frames to skip ahead before a new frame renders. With a value of 1 (the default), every frame renders in the usual way. Larger increments hold the same frame for (frame increment-1) repeats, then render a new one, and the cycle restarts. Bigger values render quicker but make motion choppier. Default is 1. |
| `-OMtemplate output_module_template` | here output_module_template names a template to apply to the output module. A nonexistent template is an error. By default, whatever template is already set on the output module is used. |
| `-RStemplate render_settings_template` | here render_settings_template names a template to apply to the render queue item.A nonexistent template is an error. By default, whatever render template is already set on the item is used. |
| `-output output_path` | here output_path is a file path or URI naming where the render file goes. The default is whatever path the project file already holds. |
| `-log log_file_path` | here logfile_path is a file path or URI naming where the log file goes. The default is stdout. |
| `-sound sound_flag` | here sound_flag controls whether a sound plays once rendering wraps up. The accepted values are "ON" or "OFF". Default value is "OFF". |
| `-close close_flag` | here close_flag controls whether the project closes when rendering is done, and whether changes get saved. With `DO_NOT_SAVE_CHANGES`, the project closes and changes are discarded. With `SAVE_CHANGES`, the project closes and changes are kept. With `DO_NOT_CLOSE` the project stays open; but it remains open only when an already-running instance of AE is in use, since a freshly launched AE has to close and quit when finished. Default value is `DO_NOT_SAVE_CHANGES`. |
| `-rqindex index_in_render_queue` | here index_in_render_queue names a render queue item to render. The options that apply when rendering one render queue item match those available with the -comp flag. |
| `-continueOnMissingFootage` | Keep rendering even when footage is missing. Log it and render placeholder color bars in its place. |
| "-mfr mfr_flag max_cpu_percent" | here mfr_flag ("ON"\|"OFF") sets whether Multi-Frame Rendering is used, and max_cpu_percent (1-100) sets the top share of CPU power to draw on while rendering. Since Multi-Frame Rendering can drive your CPU at full capacity, you may want to cap that power so other applications stay usable. max_cpu_percent is disregarded once the mfr_flag reads "OFF" |

Over on his After Effects Scripts site, Lloyd Alvarez offers a script that grabs render-ready items from the queue and pushes them off to render in the background through aerender.
