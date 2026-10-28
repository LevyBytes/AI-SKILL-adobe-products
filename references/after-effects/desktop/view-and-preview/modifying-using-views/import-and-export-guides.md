# Import and export guides

Guide lines can be saved in After Effects and brought into other ae comps, projects, and layers. Those guides can also be exported to Premiere, where editors can lean on them to keep projects consistent.

Bringing existing guides into After Effects is done with View > Import Guides; exporting them uses View > Export Guides.

Exporting guides produces a template file (.guides) that's shareable or importable into a separate project, or into a different composition, layer, or footage view inside the same project. The JSON data in a guides template file captures the guide attributes. Every guide in the current view gets exported by After Effects. Bringing guides in adds them to the current view while preserving whatever guides already sit there.

After Effects guides can be imported into Premiere 13.1, and Premiere guides can be imported into After Effects. Note that not every guide feature Premiere offers — individual guide colors among them — is supported by After Effects. Importing a guide template built in Premiere does the following:

- Guide colors switch to whatever color is defined under Preferences > Grids & Guides.
- Guides set by percentage or pinned to the opposite side (right or bottom) land at the matching pixel value for the current viewer, but they stop being percentage-based or pinned once the composition, layer, or footage dimensions change.

Find out more about working with rulers and guides in the Program Monitor.
