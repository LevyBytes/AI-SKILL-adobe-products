# Apply Color LUT effect

Drop the Apply Color LUT effect onto a layer to remap its colors through a color lookup table (LUT). Manual color correction and color management chores sometimes call on LUTs.

Note

As a rule, color management inside After Effects runs through a standard workflow built on ICC profiles rather than color LUTs. (See Color management.)

You can use it in 8-bpc, 16-bpc, and 32-bpc color.

Applying the effect prompts you to pick a .3dl or .cube LUT file. To swap the LUT held in an Apply Color LUT instance, click Choose LUT among the effect's controls.

Apply Color LUT accepts .3dl files carrying floating-point values or 3DMESH/Mesh keywords, plus any saved out of an ASSIMILATE SCRATCH system—meaning the file's top comments include SCRATCH. Overrange IRIDAS .cube files, IRIDAS .look files, and cineSpace .csp files are handled too.

Think of a LUT as a three-dimensional coordinate system—a 3D cube—where each axis stands for the color transformations across every value of one color channel. The points sitting along each axis spell out that channel's color transformations. For a 3D LUT to be readable in After Effects, all three axes must share one length (an equal point count), and no axis may run past 64 points. A 17x17x17 3D LUT, for instance, qualifies.

Note

Commands sitting under File > Export—such as Autodesk > Smoke (3dl)—let you build LUTs from within the full interface of the Color Finesse plug-in.
