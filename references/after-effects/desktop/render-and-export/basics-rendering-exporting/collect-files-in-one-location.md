# Collect files in one location

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
