# Preparing and importing Photoshop files

Note

- For guidance and steps covering every kind of still image file, see preparing still-image files for importing and importing a single still image or a still-image sequence.
- After Effects has no support for video layers inside Photoshop .psd documents.

Since the Photoshop rendering engine ships inside After Effects, every attribute of a Photoshop file comes across on import—position, blending modes, opacity, visibility, transparency (alpha channel), layer masks, layer groups (which arrive as nested compositions), adjustment layers, layer styles, layer clipping paths, vector masks, image guides, and clipping groups.

Prep a layered Photoshop file well before importing it into After Effects to cut preview and rendering time. Sidestep trouble importing and updating Photoshop layers with these practices:

Organize and name layers. Rename a layer in a Photoshop file after importing it into After Effects and the link back to the original layer survives. Delete a layer, though, and After Effects loses the original and shows it as Missing in the Project panel.

Give every layer a name of its own. The software doesn't demand this, but it keeps confusion at bay.

Expecting to add layers to the Photoshop file later in Photoshop once it's already imported? Then go ahead and put in a few placeholder layers before importing the file into After Effects. Refreshing the file in After Effects won't bring across any layers added after the original import.

Unlock layers in Photoshop ahead of importing them into After Effects. Most layer types don't need this, but a few do. Background layers slated for conversion to RGB, for instance, may import wrong while they remain locked.

A handy command inside After Effects, Layer > New > Adobe Photoshop File, drops a layer into a composition and then opens that layer's source over in Photoshop so you can start building a visual element—a movie's background layer, perhaps. That Photoshop layer arrives set up correctly for your After Effects composition. Like many Creative Suite programs, After Effects lets you run Edit Original to open a PSD file in Photoshop, make and save edits, and watch those edits show up right away in the movie that points to the PSD source. Skip Edit Original and the Reload Footage command still works, pushing After Effects to update its layers from whatever version the PSD file is at now. Learn more about creating a layer and new Photoshop footage item and editing footage in its original application.

Note

One solid way to head off interlace flicker caused by thin horizontal lines in still images is to run Photoshop's Interlace Flicker Removal action on them before they come into After Effects. Photoshop bundles several video actions for utility jobs like this.
