# Simulate spot ink overprinting

Use overprint simulation in Adobe InDesign to preview how overlapping spot inks with different neutral density values will interact during composite printing.

Overprint simulation previews interactions between overlapping spot inks, such as red and blue producing a third color. It is limited to composite output, including PDFs and desktop printers, and it works by translating spot colors to process equivalents. Because that translation changes output color behavior, do not use overprint simulation for RIP-based separations.

Choose File > Print.

In the Print dialog box, choose Output from the list on the left.

From the Color menu, choose a composite output choice, for example Composite RGB or Composite CMYK.

Enable the Simulate Overprint checkbox. If Composite Leave Unchanged is selected in the Color dropdown menu, overprinting cannot be simulated.

Set any other required print options, then choose Print.

The resulting print or exported PDF shows the visual interaction of overlapping spot colors. If the simulation does not match the intended design, adjust the overprint settings in the Attributes panel (Window > Output > Attributes) before finalizing the print-ready files.

For an on-screen check of overprint effects without printing, use either Overprint Preview from View > Overprint Preview or the Separations Preview panel at Window > Output > Separations Preview. The panel lets you isolate individual ink plates and inspect their interaction, including transparent areas where varnishes or coatings are used.
