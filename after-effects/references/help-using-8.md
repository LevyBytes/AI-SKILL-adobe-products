# Scene Edit Detection, Xmp Metadata

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Detect edit points using Scene Edit Detection; XMP metadata.

## Detect edit points using Scene Edit Detection

Search Last updated on Jan 21, 2026

Once your footage is inside After Effects, you can configure After Effects to spot the original cut points within it automatically.

### Why use Scene Edit Detection?

Built on Adobe Sensei, Scene Edit Detection scans an already-cut clip, spots where one shot gives way to the next, and drops those breaks in as either markers or layers so a project comes together more quickly. Before any editing begins, you first have to know where the original cuts in a video fall. This feature hands you those cut points automatically, sparing you a manual pass through the footage.

### Use Scene Edit Detection to add cut points

Once your footage sits on the Timeline in After Effects, highlight a footage layer (or several) and either pick Layer > Scene Edit Detection from the menu or right-click and choose Scene Edit Detection.

1. The controls in the Scene Edit Detection dialog box let you decide what happens whenever a cut is found in the footage.
   In the Scene Edit Detection dialog box, pick from these options:

- Create Layer Markers: numbered Segmentation markers get dropped onto the chosen footage layers at every detected scene break.
- Split Layer at Scene Edit: the chosen footage layers are carved up so that each scene lands on its own separate layer in the Timeline. With this choice active, the Create Pre-comps checkbox is also available, which pre-composes every layer that results. Any new pre-comps go into the Project panel inside a folder named after the footage layer, and that folder sits within a Scene Edit Detection folder to keep things tidy.

Once you've picked how Scene Edit Detection should run across the selected layers, click OK.

### Assign a type to Layer Markers

Layer Markers accept either of these two types:

- Comment
- Segmentation

A default label color ships with each type. If you want a different label color, head to Preferences > Labels. Whatever Scene Edit Detection generates arrives as Segmentation Markers.

Through the Preferences dialog box you can pick which colors the Segmentation markers from Scene Edit Detection wear.

Through the Preferences dialog box you can pick which colors the Segmentation markers from Scene Edit Detection wear.

Open the Layer Marker dialog box by double-clicking any marker sitting in the Timeline.

Pick between the Comment Marker and Segmentation Marker choices.

A color label gets attached to the marker once you open the dropdown menu and choose a color.

### Limitations

Only straight video footage works with Scene Edit Detection. Pre-comps, other kinds of layers, and Time-Remapped footage are all off-limits for it.

### Next steps

With cut points now sitting in your footage, the door is open to building and refining your graphics — pick up animation basics, build layers, drop in effects, bring text to life, and so on.

### Have a question or an idea?

Got something to ask or a suggestion worth sharing? Drop by our After Effects community and join in. Hearing from you and seeing what you've made would be a treat.

## XMP metadata

Search Last updated on May 5, 2026

### Working with XMP metadata in Adobe After Effects lets you read, change, and pass asset information between Adobe applications.

At its core, metadata is just data describing other data. Practically, it amounts to a standardized bundle of facts about a file — things like the author's name, resolution, color space, copyright, and any keywords tagged to it. Cameras, for instance, usually tack a few basics onto video files, among them the date, the duration, and the file type. Shot-list details are another source: those can come from OnLocation or get keyed in at the capture step inside Adobe Premiere. On top of that, you're free to layer in extra metadata covering properties like location, author name, and copyright. Since this metadata travels and stays usable across Adobe Creative Suite applications, you can lean on it to tidy up your files and smooth out your workflow.

Across Adobe applications, the Extensible Metadata Platform (XMP) is the agreed-upon metadata standard. Where metadata lives in other formats — Exif, IPTC (IIM), GPS, and TIFF among them — XMP brings it into sync and gives it a common description, which makes the whole lot easier to view and manage. Adjustments you make to images in Adobe Camera Raw, as one case, end up saved as XMP metadata. XML underpins the XMP standard.

Think of a metadata schema as a bundle of properties built around one particular workflow. Take the Dynamic Media schema: it carries properties such as Scene and Shot Location, shaped for digital video work. Exif schemas head the other direction, packing properties suited to digital photography like Exposure Time and Aperture Value. Broader properties — Date and Title, say — turn up in the Dublin Core schema. Hover the pointer over any schema or property in the Metadata panel and a tooltip explains it. The Metadata panel's commands also let you build schemas of your own, and you can bring in schemas or hand them off to others as XML files.

Metadata splits into two broad buckets: static and temporal. The static kind covers an asset as a whole — the copyright and author details on a video clip, for example, hold true for the entire clip. Temporal metadata, by contrast, is pinned to a particular moment inside a dynamic media asset.

Adobe Bridge is where you can look over a file's static XMP metadata.

Data tucked inside markers is readable and usable by After Effects scripts and expressions. And because XMP metadata on source footage items can be turned into layer markers, both expressions and scripts get a way to work with that XMP metadata. Scripts can also handle a file's XMP metadata entirely apart from After Effects, whether to automate routine chores or to drive creative ideas.

Note

When you want to pick and choose what XMP metadata stays in a file — adding some, paring (thinning) out the rest — reach for export templates together with the Metadata Export dialog box in Adobe Media Encoder.

### Embedding XMP metadata versus including XMP metadata in sidecar files

Typically a file holds its own XMP metadata right inside it. When writing that information straight into the file isn't an option, XMP metadata instead lands in a companion file — a sidecar file — carrying the .xmp filename extension. Take a look at which file formats let After Effects write XMP metadata directly.

For the most part, XMP metadata travels along with a file even across a format change — going from PSD to JPG, for instance. It sticks around too whenever files get placed into a document or project within an Adobe Creative Suite application.

### Online resources about XMP metadata

Head over to the XMP Developer Center area of the Adobe website, where you'll find the XMP specification, guidance on weaving XMP metadata into your own software and workflow, the XMP SDK (software development kit), and forums centered on XMP metadata.

### XMP metadata in After Effects

Here's a primer on XMP metadata.

Import a file that carries XMP metadata into After Effects and you can read the static metadata in the Metadata panel, turn the temporal metadata into layer markers, put that metadata to work as you go inside After Effects, and fold it into output files.

For using and interacting with XMP metadata, the After Effects scripting interface hands you a further set of tools.

### Importing files with XMP metadata into After Effects

Plenty of formats can supply XMP metadata that After Effects imports, including these:

Camera formats: AVCHD, HDV, P2, XDCAM, XDCAM EX

Image formats: GIF, JPEG, PNG, PostScript, TIFF

Common multimedia container formats: FLV, F4V, QuickTime (MOV), Video for Windows (AVI), Windows Media (ASF, WAV)

Authoring formats: InDesign documents, Photoshop documents (PSD), and other native document formats for Adobe applications

MPEG formats (MP3, MPEG-2, MPEG-4)

SWF

Bring in a file holding XMP metadata and After Effects flashes a “Reading XMP metadata from footage” status message as it pulls the metadata out of the source file.

Among the handiest pieces of metadata on any asset is its unique ID number — a value that sets one asset apart from every other at each stage of the workflow. Thanks to that unique ID, the application can tell a file is the same one it ran into before, even after the filename has been changed. A nice payoff of these unique ID values: each application can use them to look after cached previews and conformed audio files, which heads off extra rendering and conforming.

XMP leans on Globally Unique Identifiers (GUIDs) for its ID values — 16-byte random numbers that are a common way to keep values from colliding.

When a file is imported, After Effects writes XMP ID values into the source file provided the Write XMP IDs To Files On Import preference is turned on in the Disk preferences category. That same preference reaches other Adobe applications too; consult the explanatory text in the Preferences dialog box to learn more. Should a file already carry an XMP ID, After Effects writes nothing new and leaves it untouched. Files made by recent Adobe application releases will usually come with an XMP ID already in place.

By default, the Write XMP IDs To Files On Import preference is switched on.

Note

- All the Write XMP IDs To Files On Import preference governs is whether unique ID values get written to files automatically at import time. It has no say over whether XMP metadata is written to a file in other situations, such as editing metadata in the Metadata panel.
- Since writing the ID counts as a change to the file, a source file's modification date might shift the very first time you import it.

### Working with XMP metadata in After Effects

### The Metadata panel

Inside After Effects, only static metadata turns up in the Metadata panel (Window > Metadata). Project metadata rides at the top of the panel while Files metadata sits at the bottom. Temporal metadata surfaces in After Effects solely as layer markers.

The moment you open the panel, Project metadata appears in it. Any of the metadata categories can take new or revised information. What you enter shows up in Bridge whenever the project file is selected, and it also rides along — embedded — in files rendered and exported through the render queue, as long as the Include Source XMP Metadata output module option is on.

Before Files metadata will show in the Metadata panel, you first have to select a file over in the Project panel. From there you can add to or revise any of the metadata categories. Select several files and whatever you change gets written across all of them. Edits to source file metadata write straight back to the source files on the spot.

Reach for the Metadata panel menu and its Project Metadata Display or Files Metadata Display command whenever you need a different set of categories and fields shown.

### Conversion of XMP metadata to layer markers

Build a layer from a footage item that carries XMP metadata and its temporal metadata can be turned into layer markers.

For automatic conversion of XMP metadata into layer markers, head to the Disk preferences category and enable Create Layer Markers From Footage XMP Metadata. While that conversion runs, After Effects shows a “Reading XMP markers from footage” status message.

You can edit these layer markers freely, exactly like any other layer markers. Reworking the layer markers that came from a source file's XMP metadata leaves the XMP metadata in the source file alone.

Note

Want a layer's markers reset to whatever its source's XMP metadata originally supplied? On any of that layer's markers, right-click (Windows) or Control-click (macOS), then pick Update Markers From Source. That same command strips out any markers you added to the layer yourself. It also gives you a manual way to spin up layer markers from XMP metadata if the Create Layer Markers From Footage XMP Metadata preference wasn't on back when you made the layer.

For how to pair expressions with what's inside layer markers, see MarkerKey attributes (expression reference).

### Exporting XMP metadata from After Effects

As you render and export a composition, the output file can be written with XMP metadata that pulls in everything from that composition's sources. That sweep takes in every composition marker and layer marker the composition holds, all the XMP metadata off the source files its layers rest on, whatever sits under the Comments columns over in the Project and Timeline panels, plus the XMP metadata at project level for the project that contains the composition. XMP metadata sitting in nested compositions gets processed recursively and folded into the output too.

To commit the full body of XMP metadata, find the output file's output module settings and enable Include Source XMP Metadata there. Leave Include Source XMP Metadata off and the output file gets nothing but a unique ID for its XMP metadata.

Note

With Include Source XMP Metadata switched on, rendering and exporting can drag in some cases, simply because gathering and stitching XMP metadata together from the source files takes time. That's exactly why the option ships off by default.

Beyond keeping XMP metadata in After Effects project (AEP, AEPX) files and the source documents Adobe applications rely on (PSD, for one), After Effects is able to embed XMP metadata straight into the files of many container formats, these among them:

QuickTime (.mov)

Video for Windows (.avi)

Windows Media (.wmv)

Note

For a handful of MPEG formats, XMP metadata goes into sidecar (.xmp) files.

Files of any other type leave the Include Source XMP Metadata option grayed out.

When you render and export a file with the source XMP metadata folded into the output, that XMP metadata gets written to the output file ahead of the composition's first frame being rendered. With the Render Details section of the Render Queue panel open, After Effects puts up a “Gathering XMP Metadata from Sources” status message as it assembles the metadata from the sources feeding the composition being rendered.

Whatever XMP metadata lands in a file is placed in an XML data structure kept apart from the audio and video data itself. That plain-text XML is yours to read like any other plain-text data, and scripts of every kind can use and reshape it.

Note

After Effects records startTimecode and altTimecode values inside XMP metadata. Those values are visible in the Start Timecode and Alternate Timecode fields under the Dynamic Media schema in the Metadata panel.

### Re-importing XMP metadata into After Effects

Import into After Effects a file that was rendered and exported out of After Effects with the Include Source XMP Metadata option, and every bit of XMP metadata written to that output file shows up as layer markers once the file feeds a layer in a composition. None of that XMP metadata appears in the Metadata panel, though.

Note

Bring in a file carrying XMP metadata and put it to use as a layer's source, and After Effects weeds out redundant XMP metadata. That keeps duplicate markers from piling up when you reuse a file in After Effects that came out of the very same project — say, after pre-rendering one slice of a project.

### About file, clip, and project XMP metadata

By and large, Adobe's video and audio applications treat XMP metadata in much the same way. A few minor differences do crop up, each one mirroring the particular workflow stage a given application is built for. Running these applications side by side, grasping their slightly varied approaches can help you squeeze the most from your metadata.

Adobe Premiere

Splits metadata into these sections:

Clip

Shows properties for the clip instances you pick in the Project or Timeline panels. Project files are where this metadata lives, so it surfaces only in Adobe Premiere.

File

Shows properties for the source files you pick in the Project panel. This metadata is kept right in the source files, which is why it turns up in other applications, Adobe Bridge included.

After Effects

Splits metadata into these sections:

Project

Shows properties covering the project overall. Selecting Include Source XMP Metadata in the Output Module Settings dialog box bakes this information into the files you send out of the Render Queue.

Files

Shows properties for the source files you pick in the Project panel. (Pick a proxy and you'll see properties for the actual file instead.)

In After Effects, both Project and File properties are tucked straight into files, so Adobe Bridge can reach this metadata.

### Show or hide XMP metadata

Tune the Metadata panel to suit how you work by revealing or hiding whole schemas or single properties, leaving on view only what you actually need.

In the Metadata panel's options menu, pick Metadata Display.

Select or clear items from the list to reveal or hide schemas or properties.

### Save, switch, or delete metadata sets

Juggling several workflows that each call for a different set of displayed metadata? You can save sets and flip between them.

In the Metadata panel's options menu, pick Metadata Display.

Take any of these routes:

Saving a custom set of displayed metadata starts with Save Settings. Then type a name and click OK.

To bring up a set you saved earlier, choose it from the menu.

To remove a set you saved earlier, choose it from the menu, then click Delete Settings.

### Create schemas and properties

When your workflow is one of a kind and the stock metadata options can't keep up, roll your own schemas and properties.

In the Metadata panel's options menu, pick Metadata Display.

Pick New Schema and type a name.

Within the list, find Add Property off to the right of the schema name and select it.

Type a property name, then pick one of these for Type:

Integer

Shows whole numbers you change by dragging or selecting.

Real

Shows fractional numbers you change by dragging or selecting.

Text

Shows a text box (for properties along the lines of Location).

Boolean

Shows a check box (for On or Off properties).

### Edit XMP metadata

Within Adobe's video applications, properties that share a name stay linked across the Metadata and Project panels. That said, the Metadata panel carries a richer set of properties and lets you edit them across several files at once.

Pick the files or clips you're after.

Over in the Metadata panel, revise text or nudge values however you need. With more than one item selected, the panel shows properties like so:

When a property lines up across every item, that shared entry is shown.

When a property doesn't line up, <Multiple Values> shows instead. To push one matching value across, click the text box and type.

### More like this

- MarkerKey attributes (expression reference)
