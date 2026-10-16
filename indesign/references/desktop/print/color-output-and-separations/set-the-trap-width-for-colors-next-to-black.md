# Set the trap width for colors next to black

Adjust how colors spread into solid black, or how support screens stay back from black edges, in Adobe InDesign.

For black elements in a design, careful trap-width control keeps edges clean and helps avoid unwanted halos around light or reversed-out elements.

Use this workflow when the document requires control over the way other colors interact with solid process black or rich black regions. The Black trap width setting defines either the distance that inks spread into solid black, or the holdback amount, which is how far support screens are choked back under black. If misregistration occurs during printing, this keeps support screens from showing along black edges.

Black trap width is commonly 1.5 to 2 times the default trap width. For example, with a default trap width of 0.25 points, the Black trap width could be 0.4 to 0.5 points. The larger amount accounts for black ink's visual weight and provides enough trapping at high-contrast edges.

Open Window > Output > Trap Presets.

In the Trap Presets panel, choose New Preset from the panel menu to make a preset, or double-click an existing preset to edit it.

Under Trap Width, enter a point value in the Black field for the distance other colors should spread into black, or for how far support screens should be choked back under black.

Under Trap Thresholds, enter values for Black Color and Black Density so InDesign can identify solid black or rich black.

Choose OK to save the trap preset.

Note

Black trapping features become active only when a color area uses an ink whose neutral density is greater than or equal to the Black Density value and whose percentage is greater than or equal to the Black Color value.

When trapping a thin element around graphics, such as a black keyline, the trapping engine overrides the Black trap width setting and restricts the trap to half of that thin element's width. This keeps the trap from overpowering delicate line work.
