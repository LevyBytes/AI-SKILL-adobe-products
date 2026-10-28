# Exporting XMP metadata from After Effects

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
