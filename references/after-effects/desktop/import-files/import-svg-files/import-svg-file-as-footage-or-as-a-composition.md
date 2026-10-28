# Import SVG file as footage or as a composition

How SVG files land in your project gets a more flexible, finer-grained handling in After Effects. The newest version offers a fork the moment you import an SVG file: bring it in as footage, or bring it in as a composition.

| Import as footage | Import as a composition |
| --- | --- |
| Imports the SVG as a single, continuously rasterizable vector layer. | Imports the SVG as a composiiton made of editable shape layers. |
| Maintains a connection to the external SVG file. | Every element is converted into its own editable shape. |
| Good for single‑layer vector graphics when you don't need to break the artwork into parts. | Good for editing paths, shapes, and layer‑level details when you need to animate individual elements. |

Inside the Import preferences sits the Drag Multiple File Items As option, and that is where you fix which import route SVG files take by default.

- macOS: After Effects > Settings > Import > Drag Multiple File Items As
- Windows: Edit > Preferences > Import > Drag Multiple File Items As

Set the default preference for importing an SVG file, choosing whether it is imported as footage or as a composition.

Either double-click somewhere inside the Project panel or go through File > Import > File to track down and bring in the SVG file.

Through the Import As dropdown menu inside the Import file dialog box, pick one of these:

- Footage
- Composition - Retain Layer Sizes

Pick Footage and the file comes in as one flattened layer with no reach into the separate elements—fine for static use or any time animation isn't needed. Pick Composition – Retain Layer Sizes and a new composition appears with every source layer imported on its own, each sized to the content it actually holds, which tidies up anchor points and smooths out transformations for animation.

macOS

Windows

Where they apply, turn on the following options:

- Create Composition: Spins up a new composition on default settings and auto-drops the imported SVG—footage or shape-layer composition alike—straight into the timeline, sparing you the manual step of building a composition and dragging the SVG into it.
- Scalable Vector Graphics Sequence: Pulls in a batch of numbered SVG files and handles them as a frame-by-frame vector image sequence.

Brought the SVG in as a composition? Then the Layer Contents section of the Properties panel, or the layer's Contents section down in the timeline, is where you view and work the individual elements and their properties.

Brought in as footage, it acts like an ordinary layer and bends to the standard Transform properties.

As with Illustrator files, a vector file imported as footage can be picked in the timeline, then right-clicked, where Create > Create Shapes from Vector Layer turns it into editable shape layers—and from there individual paths, strokes, and fills are all animatable.

Import an SVG as footage and After Effects holds a live link back to the original file, so whatever you change in that SVG outside the app flows back into your project automatically.
