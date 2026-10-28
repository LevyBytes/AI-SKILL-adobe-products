# In-RIP separations

Modern PostScript 3 RIPs can run color separation internally, so the output device performs the calculations rather than the computer. In this workflow, InDesign sends one composite PostScript file to the RIP, and the RIP produces the individual plates.

In-RIP separation has several benefits. Computer processing is faster because InDesign creates one composite file instead of multiple separation files. Less data is sent to the output device, which shortens transmission time. Complex features such as transparency flattening and trapping can also be handled by the RIP more efficiently than by host-based workflows.

To use in-RIP separations, the setup must include a supporting PPD file plus a PostScript 3 output device. Another valid setup is a PostScript Level 2 device paired with an in-RIP separation-capable RIP. Documents that contain Photoshop duotones require PostScript 3.

Note

Some prepress service providers prefer composite files for in-RIP processing instead of preseparated files, because that gives them greater control over final output settings such as trapping and color management.
