# Productions Faq, Bring Media Into The Editing Application, Edit And Enhance Content, Incorporate Branded Graphics And Audio Elements ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Productions FAQ; Bring media into the editing application; Edit and enhance content; Incorporate branded graphics and audio elements; Export for viewing platforms; Learning from broadcast production; Broadcast workflow lessons for individuals and small teams.

## Productions FAQ

### Frequently asked Productions questions for Adobe Premiere

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

## Bring media into the editing application

### Ingest, organize, and prepare media for broadcast editing

Many broadcasters settle on specific capture formats and mezzanine codecs for post-production so their pipelines are predictable and can be tuned for those formats. Actual deliveries are less tidy, and media can arrive in almost any format. Landmark productions have asked for 25 fps and received 29.97 fps. 8 K rushes may arrive for an HD show, and a shooting ratio can run as much as 40% over plan, creating a large volume of material to sort, transcode, and prepare before editing. Adobe applications and third-party integrations help automate and simplify ingest so broadcasters can manage media more efficiently.

### Too many formats

Premiere can edit camera formats natively, which suits news and other fast-turnaround media. Because the timeline accepts open formats, technology stays out of the editor's path and shortens the interval between filming and playout.

Some productions depend on batch transcoding rushes so the edit remains responsive for the editor. Transcoded media can improve storage use and editing performance with larger frame sizes and broader color spaces.

Transcoding inside the NLE can become repetitive and slow, particularly with CPU-intensive formats such as RED RAW or ARRI RAW. Through Adobe Media Encoder integration with render farm managers, broadcasters can use render farms on-premise or in the cloud, making media Edit-Ready sooner with less manual effort and less interruption for the creative team.

Adobe Media Encoder integration with Premiere lets the editor monitor transcode progress and receive notice when the media is ready. In that workflow, media can be dragged into bins or placed straight onto the timeline, helping the editor begin 50% faster than waiting until the first transcodes are complete.

### Too much media

Video represents 75% of the data moving around the world each day. In broadcast work, that large media lifecycle often starts with an ingest operator who names, tags, and organizes the material. Strong organization makes media far more useful to content creators.

Enterprise and boutique post houses already use standardized naming conventions and folder structures to save time, lower risk, and smooth the editing pipeline. AI and automation can accelerate that work dramatically.

Cognitive services can speed sorting and tagging with inputs that include brand recognition, facial recognition, detected onscreen text, speech-to-text analysis, shot size, and shot type. Those services can be trained to identify almost anything when the algorithm has enough training data. In the foreseeable future, a well-trained AI system could organize every shot by clapper board info, by presenter, or by recognized location.

Premiere panels can show both the media and its metadata, letting users sort, search, and retrieve clips and subclips from within Premiere. Connecting that metadata to Adobe Smart Bins gives editors access to media an ingest operator might not have marked as important, or lets editors reorganise the material.

When cognitive services are used to automate project set-up, the creative person can focus on creative work.

## Edit and enhance content

### Broadcast editing practices for efficient creative work in Adobe Premiere

Leaving Premiere during an edit can break creative momentum. Integrated panels and plug-ins bring bespoke third-party application capabilities into the editing workflow, so users can improve edits from one interface without interrupting the work. A common interruption during editing is the search for files, whether those files are on a local system or stock image websites.

### Find your media

Users usually locate media either by browsing file systems manually or by opening an asset management tool. When the media asset management system is separate, the editor must download the asset, move it to local storage, and then import it into the NLE. That sequence consumes time and commonly creates duplicate media.

Putting the Asset Management system inside Premiere makes the process much leaner by letting users search, preview, and drag media from the asset management system directly to the Premiere timeline. Reducing time spent searching for files returns valuable time to the edit.

### Access more assets

Editors may still lack needed shots even when they can access production rushes and an archive. Adobe Stock addresses that gap. Unlike many stock-content sites, Adobe Stock is available inside Adobe applications. Users can search more than 90 million stock images, videos, and graphics, including MOGRTs, to complete their creative idea. In comparison, the Adobe Stock workflow takes just 16 seconds. Adobe Stock footage does not have to be licensed before use: save the watermarked preview footage to Creative Cloud, then import it into the timeline. After approval, click download, and the licensed clip replaces the preview while keeping all adjustments.

## Incorporate branded graphics and audio elements

### Maintain brand consistency while producing high-volume versioned content

Content moves globally. As delivery platforms multiply and media is syndicated worldwide, an average video often needs delivery in several versions. Beyond multiple formats, each media item may also need adjustment for a geography, demographic, or individual viewer. The challenge is increasing content velocity while maintaining brand consistency.

Adobe recognizes that consistent deliverables are difficult across the industry, so it has enabled broadcasters and post-production companies to automate major workflow portions through third-party integrations.

### Content consistency

This challenge is especially sharp for promo content, where hundreds of versions may be required. A promo might need graphics for every day of the week, such as 'This Friday', 'Tomorrow at 9 pm', and 'Tonight at 9 pm'. Spread that across regions, languages, and delivery platforms, and one video can become hundreds of deliverables that must keep the same consistency and feel.

Traditional broadcast teams have often relied on branding toolkits stored across multiple folders, requiring manual workflows that take a long time. Consistency can unravel quickly when those toolkits are updated or replaced. Adobe Creative Cloud lets businesses build toolkits and distribute them to promo teams worldwide, with access through an Adobe panel in whichever application the team is using. When an asset needs revision, the graphics department updates it once in the shared library, and the toolkits update globally.

### Content velocity

For short-form broadcast content such as promos, news, or digital marketing, the central difficulty is hitting tight deadlines without lowering quality. Adobe Motion Graphics templates (MOGRTs), based on the .mogrt file format, bring After Effects capabilities into Premiere. Create the motion graphic in After Effects, export it, add it to Creative Cloud, and make it available to editors inside Premiere. Keeping the editor in the application improves efficiency, including for editors without deep After Effects or motion graphics knowledge.

MOGRTs can also be updated dynamically without an operator manually touching them. By integrating a master spreadsheet, alternate graphics can be produced automatically. Many third-party integrations extend this further, including auto-filling projects from API calls, CMS systems, and MAMs, plus auto-transcoding or uploading to particular delivery destinations.

## Export for viewing platforms

### Export workflows for broadcast-ready viewing-platform delivery

When deadlines compress, a streamlined delivery workflow can determine whether a team hits or misses the deadline. The more work completed before export, the better the odds of on-time delivery.

### Getting broadcast ready

Adobe Media Encoder provides additional time-saving features, including Time Tuner, Loudness normalizer, and the option to apply an overall image correction so media meets broadcast compliance without returning to the timeline. After export, other tools can automate the rest of delivery by asking users for the right metadata, generating more versions, QCing the media, and delivering it to different destinations. Integrating a workflow orchestration tool into Premiere helps ensure media compliance and also shortens delivery time.

### Quality control

Third-party integration time savings are especially visible in compliance and QC workflows. It is now straightforward to import XML and JSON report files from a QC tool, then fill a Premiere timeline with markers for errors at their matching timecodes. This approach accelerates QC and lowers the chance of delivering the wrong file.

## Learning from broadcast production

### Broadcast production lessons for efficient operations

Broadcast places unusually high demands on production. Quality and consistency matter intensely. Delivery dates cannot slide. Turnaround estimates must be exact. Everything must function every day. For that reason, broadcast is an excellent test bed for post-production efficiency.

### What can we learn from broadcast production?

The same core ideas that make broadcast production efficient apply to every video content creator:

- Keep it simple: Do not keep several applications open, move constantly between windows, or leave your NLE unnecessarily. Pick a core platform for the business, then make sure additional applications and tools can operate inside or complement that platform.
- Standardize workflows: Chart the edit process, identify bottlenecks, remove them, and then push for consistency. This not only shows where tools and integrations may improve the workflow, but also helps the team scale during busy periods.
- Automate repetitive tasks: Large amounts of time go into laborious repeated work that automation can often replace. Once the workflow is mapped, review every stage and ask whether that step is a good use of time. This often exposes processes that are candidates for automation. If a task seems ideal for automation, there is a strong chance an application exists that can be integrated into the workflow.
- Concentrate on content, not codecs: Technology should be set up and deployed so it stays out of the way and lets the team focus on making content. Too often, technology limitations, inflexibility, or weak workflows cause production teams to spend their attention on technology rather than the content. Production and technical teams should be confident that technology supports their requirements, not the reverse.

The basic broadcast-production stages also match the stages in general video production.

- Stage: Bring media into the editing application
- Stage: Edit and enhance content
- Stage: Incorporate branded graphics and audio elements
- Stage: Collaborate with other teams and team members
- Stage: Export for viewing platforms

### Integrating production tools

At a basic level, integrations make additional capabilities immediately available. By keeping people out of constant app and system hopping, they reduce wasted time and cost. The value goes beyond speed: strong integrations can reshape the way broadcasters, and video professionals more broadly, produce content.

Premiere and the Adobe Creative Cloud applications serve as open platforms with broad APIs for third-party technologies. Many hundreds of companies build extensions and integrations that improve productivity and reduce costs. Adobe technology partners are available here.

## Broadcast workflow lessons for individuals and small teams

### Review broadcast workflow ideas that can help any studio or editor, no matter the budget or pipeline.

### Keep it simple

Keep the number of open applications low, minimize window switching, and stay inside your NLE when possible. Pick one central platform for the business, then make sure every added application or tool fits into that platform or complements it.

### Standardized workflows

Chart the editing process, identify bottlenecks, remove those blockers, and then standardize the approach. That work reveals where tools and integrations can strengthen the workflow, and it also makes scaling easier during heavier production periods.

### Automate repetitive tasks

Repetitive, labor-heavy work consumes a large amount of production time, and automation can often handle it instead. After the workflow is mapped, examine each stage and judge whether it deserves manual attention. That review often exposes processes suitable for automation. When a task seems ideal for automation, there is a strong chance that an application can plug into the workflow to perform it.

### Concentrate on content, not codecs

Set up and deploy technology so it stays out of the way and leaves attention on content creation. Production teams too often end up concentrating on technical limits, rigid systems, or weak workflows instead of the material they are making. Both production and technical teams should be confident that the technology serves their requirements, rather than forcing the team to adapt around it.
