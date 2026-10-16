# Copy a path from Illustrator or Photoshop

A path lifted from Illustrator or Photoshop can be pasted into After Effects to serve as either a mask path or a shape path.

For the data you copy out of Illustrator to play nicely with After Effects, the AICB option has to be turned on within the Files & Clipboard section of the Adobe Illustrator Preferences dialog box.

A path brought over from Photoshop scales correctly only when the Photoshop document sits at 72 dpi. That 72 dpi figure is the resolution carried by documents that Photoshop creates from a Film & Video preset.

A copied Illustrator or Photoshop path can also double as an After Effects motion path. Learn more about creating a motion path from a mask, shape, or paint path.

Path drawn in Adobe Illustrator (left) and pasted into After Effects as a mask (right)

Within Illustrator or Photoshop, select a whole path, then choose Edit > Copy.

- For a mask, select a layer.

- To swap out an existing mask path or shape path, select its Path property.

Pasting a path as a shape path requires that you first select the Path property of a shape already living in a shape layer. That choice is what tells After Effects where the paste should land; leave the target unspecified and After Effects takes the whole layer as the target, drawing a new mask as a result. When no Path property exists — say the shape layer has nothing in it — you can lay down a placeholder path with the Pen tool and paste the Illustrator path into that placeholder.

Choose Edit > Paste. Paste several paths into a shape path and the first one fills the shape path, while every remaining path lands in new mask paths.
