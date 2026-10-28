# Output modules and output module settings

Output module settings ride along with each render item and govern how the rendered movie is handled on the way to final output. Reach for them to set the file format, output color profile, compression options, and the rest of the encoding options for final output.

They'll also crop, stretch, or shrink a rendered movie for you; running that after the render is handy when one composition feeds several flavors of output.

Whatever render settings produce as rendered output is what the output module settings then act on.

Certain formats pop open an extra dialog box once you pick the format in the Output Module Settings dialog. Tweak those settings as needed, and lean on settings presets for format-specific choices like compression options.

A single render item can carry several output modules — handy whenever one render needs to spin off more than one version of a movie. You might, for instance, automate a movie alongside its alpha matte, or turn out both high-resolution and low-resolution cuts of a movie.

Note

Ahead of rendering, look over the Audio Output settings in the Output Module Settings dialog box and confirm they're right. Audio Output has to be selected for audio to render. When your composition carries no audio, leave Audio Output unselected so the rendered file doesn't balloon for no reason.

Lean on the Output Module Settings to land the best results fit to what your particular project calls for.

Several render queue items can have their output module set in one go. Select the render queue items, then for any one of them pick an output module template from the Output Module Settings menu.

Drop an output module onto the Project panel to bring the finished movie — or a placeholder for it — into the project as a footage item.
