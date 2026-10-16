# Automated rendering and network rendering — Network rendering with watch folders and render engines

Spreading one or several compositions from a project across multiple networked computers lets you finish in a fraction of the time one machine would take. The workflow means copying the project and its source files into a folder on the network, then rendering from there. People sometimes call a cluster of computers rendering one composition together a render farm.

When a group of networked machines renders a single composition as a team, that is render farming. You can wire it up to run against render-only builds of After Effects known as render engines.

Installing a render engine works the same way as installing the full application. Launch it through the Adobe After Effects Render Engine shortcut found in the Adobe After Effects CC folder.

Follow these steps to set up a render-only copy of After Effects CC:

Head to the product page to download and install After Effects CC.

After the install finishes, open After Effects.

From the Help menu, pick Sign Out.

Quit After Effects.

Create and place the ae_render_only_node.txt file.

A single movie file cannot be rendered at the same time by a watch folder paired with several render engines. In render farming, though, you can let several render engines turn out a movie as a run of still-image files. A post-render action can then stitch that still-image sequence into one movie file. For more information, see Post-render actions.
