# XMP metadata

Search Last updated on May 5, 2026

Working with XMP metadata in Adobe After Effects lets you read, change, and pass asset information between Adobe applications.

At its core, metadata is just data describing other data. Practically, it amounts to a standardized bundle of facts about a file — things like the author's name, resolution, color space, copyright, and any keywords tagged to it. Cameras, for instance, usually tack a few basics onto video files, among them the date, the duration, and the file type. Shot-list details are another source: those can come from OnLocation or get keyed in at the capture step inside Adobe Premiere. On top of that, you're free to layer in extra metadata covering properties like location, author name, and copyright. Since this metadata travels and stays usable across Adobe Creative Suite applications, you can lean on it to tidy up your files and smooth out your workflow.

Across Adobe applications, the Extensible Metadata Platform (XMP) is the agreed-upon metadata standard. Where metadata lives in other formats — Exif, IPTC (IIM), GPS, and TIFF among them — XMP brings it into sync and gives it a common description, which makes the whole lot easier to view and manage. Adjustments you make to images in Adobe Camera Raw, as one case, end up saved as XMP metadata. XML underpins the XMP standard.

Think of a metadata schema as a bundle of properties built around one particular workflow. Take the Dynamic Media schema: it carries properties such as Scene and Shot Location, shaped for digital video work. Exif schemas head the other direction, packing properties suited to digital photography like Exposure Time and Aperture Value. Broader properties — Date and Title, say — turn up in the Dublin Core schema. Hover the pointer over any schema or property in the Metadata panel and a tooltip explains it. The Metadata panel's commands also let you build schemas of your own, and you can bring in schemas or hand them off to others as XML files.

Metadata splits into two broad buckets: static and temporal. The static kind covers an asset as a whole — the copyright and author details on a video clip, for example, hold true for the entire clip. Temporal metadata, by contrast, is pinned to a particular moment inside a dynamic media asset.

Adobe Bridge is where you can look over a file's static XMP metadata.

Data tucked inside markers is readable and usable by After Effects scripts and expressions. And because XMP metadata on source footage items can be turned into layer markers, both expressions and scripts get a way to work with that XMP metadata. Scripts can also handle a file's XMP metadata entirely apart from After Effects, whether to automate routine chores or to drive creative ideas.

Note

When you want to pick and choose what XMP metadata stays in a file — adding some, paring (thinning) out the rest — reach for export templates together with the Metadata Export dialog box in Adobe Media Encoder.
