# Export HDR content

Exporting your composition in HDR keeps high dynamic range (HDR) traits — contrast, color fidelity, and brightness — in the finished output. Part of this is writing out CICP metadata, which lets devices read the HDR content correctly so what appears on HDR-capable displays lines up with the intended HDR result.

For an export carrying CICP Metadata, drop your composition into the Render Queue.

From the Output Module, pick PNG Sequence.

2. For high-quality image sequences that hold onto color information and transparency, the PNG Sequence format is the pick.
   Within the Color tab, either choose the output color space you want or leave it in the working space, then select OK.

3. Setting Output Color Space to Rec 2100 PQ makes certain your project's colors convert accurately into high dynamic range (HDR) color space.
   Choose Render to kick off rendering and export. Should the chosen color space be representable as CICP metadata, that metadata gets embedded into the rendered output on its own.

Tip

Working across After Effects and Premiere, you can route compositions that already carry HDR and embedded CICP straight into Premiere via Dynamic Link, or as a Motion Graphics template.
