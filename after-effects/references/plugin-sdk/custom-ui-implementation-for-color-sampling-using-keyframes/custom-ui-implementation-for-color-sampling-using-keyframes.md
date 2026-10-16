# Tips & Tricks — Custom UI Implementation for Color Sampling, Using Keyframes

Say a plug-in needs to sample a color from some layer inside a composition. To pick the point, the user either reaches for the eyedropper tied to a color parameter or works through the plug-in's own custom composition panel UI.

On the click event, the plug-in maps the click coordinates into layer space and tucks that away in sequence data. A re-render is then forced, and during it the plug-in can read the color of the layer point that matches the stored coordinates.

That color value gets saved into sequence data, the plug-in aborts the render, and it asks for a redraw of whichever parameter or parameters are involved.

At draw time, the plug-in then lays down the right keyframes on its color parameter stream by way of the `AEGP_KeyframeSuite`.

And yes, the upshot is that the effect has to resort to Cheating Effect Usage of AEGP Suites and tap the AEGP API.
