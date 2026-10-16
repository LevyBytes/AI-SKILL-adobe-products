# Frequently asked Productions questions for Adobe Premiere

No. Anyone who has Premiere can use productions. Multi-editor collaboration, however, depends on a networked shared storage solution.

Solo editors can still use productions and gain access to some of their features. Each editor should choose the structure that fits the work: a single project file, a production, or a Team Project.

No. You can save a Team Project as a stand-alone project file and add that file to a production, but the conversion does not work in the opposite direction.

Productions take the place of Shared Projects, while Premiere still keeps Shared Project-style behavior through a Project Shortcut. With the Project panel active, choose File > New > Project Shortcut. Project Shortcuts help editors who work in one project while still linking to projects used often. Project Shortcuts can also be made inside projects in production. For most workflows, using the Add Project command to move the project into the production is the stronger choice.

No. A single editor can keep productions wherever that editor would normally store an individual project file. Shared network storage is necessary only when multiple editors collaborate in the same production.

At a basic level, no. Project files made inside a production still use the .prproj extension and remain complete Premiere project files. They can be taken out of the production and opened as a stand-alone project.

When a sequence contains clips linked to master clips from another project, those master clips will not be visible after the project is opened outside the production. To make the project function independently, use the Generate Master Clips command.

Yes. Add an existing project file to the production with the Add Project command. If Premiere needs to update the project file during that process, it does so.

Yes. Productions can be used on macOS and Windows together, just as a stand-alone project file can be opened on either platform. When a production is opened on a new platform for the first time, Premiere may ask you to confirm the scratch disk location. Set it to the same server location, and Premiere translates the drive mounting between operating systems.

If the Renderer chosen in File > Production Settings > General is missing on one system, Premiere automatically selects the next best renderer. For example, a production created on Windows with CUDA selected will use Metal automatically when opened on macOS.

Only one production can be open at once, but you can create and use any number of productions. Choose File > Open Production to view a dropdown of recently opened productions, or open a recent production from the welcome screen's recent-items list.

Premiere uses this file for production settings and related information. Leave the file in place and do not change it.

The Production Settings dialog disables ingest settings because they are intended for one computer at a time. To work with Ingest Settings, close the production first, then create a stand-alone project saved outside the production folder. Configure the Ingest Settings you want and import the media. After ingest finishes completely, save and close that project. Reopen the production, then use the Add Project command to bring that project file into the production. The ingested clips can then be used normally.

Keep media and unrelated files out of the production folder. The Production panel displays only folders and project files, but Premiere scans every file placed in the production folder, which can create performance problems.

Adobe recommends doing organization tasks in the Production panel. Disk-level actions such as moving or renaming files are reflected there, but handling those changes inside Premiere is the preferred approach. Finder or Explorer, for instance, may allow a project file to be renamed while another editor is using it, while Premiere would block that action. Do not duplicate project files in Finder or Explorer.
