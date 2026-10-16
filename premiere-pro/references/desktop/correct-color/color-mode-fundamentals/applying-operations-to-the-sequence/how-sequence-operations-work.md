# How Sequence operations work

At the Sequence level in a grade, an operation can target the whole sequence in one pass. That gives you a quick place to use Adjust or Style operations for corrective changes or creative treatments that should cover every clip in the program.

Within the image-processing order, Sequence operations come after compositing has already been resolved for the affected tracks. The color work is therefore applied on top of the composite result, unlike Custom Group operations, which are attached to each clip that belongs to that group.

In a grade, Sequence operations sit at the end of the color stack. That placement matters when a Style operation makes strong image changes, such as compressed contrast, major desaturation, or squeezed highlights: upstream Clip operations, which come first, and Custom Group operations, which sit between Clip and Sequence, still process the image before those more destructive-looking changes are applied.

Apart from that final position, Sequence-level operations behave like other operations. Use the Plus dropdown to add Adjust or Style operations, or move an existing operation into the Sequence level by dragging it from its current location.

You can also treat Sequence operations as project-wide baseline adjustments. For example, they can add overall contrast and warmth, or a small film-emulation color-and-contrast treatment, while Custom Group operations handle scene-by-scene differences. People often call this kind of Sequence operation a “show look,” but the workflow is intentionally flexible and the choice of level depends on how you want to manage the grade.

Tip

When a Style operation was added to the sequence but should later affect only selected clips, select those clips and drag the Style operation onto the selection. That moves the Style out of the Sequence and into a Custom Group.
