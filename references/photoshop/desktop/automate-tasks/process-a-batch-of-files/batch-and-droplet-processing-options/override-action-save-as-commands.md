# Override Action "Save As" Commands

When this option is not enabled and the action contains a Save As command, Photoshop writes output to the action's recorded folder rather than to the Batch destination. If that Save As step also recorded a filename, each processed image is saved over the same file.

This option works only when the action includes a Save As step. Without that step, Batch does not save the output files. Only the filename and folder recorded by Save As are overridden; the rest of the Save As settings are kept.

For files that should keep their original names inside the Batch destination, record a Save As step in the action, enable Override Action 'Save As' Commands, and choose a destination folder. If you set renaming rules in the Batch dialog box but leave this option disabled, Photoshop creates two files: a renamed copy in the Batch folder and an original-name copy in the folder stored by the action.

Batch and Droplet dialog boxes do not expose every Save setting, including options such as JPEG compression or TIFF settings. To use those choices, record a Save As step with the needed settings in the action, then enable Override Action "Save As" Commands so Photoshop keeps those settings while saving into the folder you choose.
