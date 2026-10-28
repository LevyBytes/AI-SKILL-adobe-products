# Creating isolated operations

To build an isolation, attach a mask to a Clip operation. Group or Sequence operations cannot be masked because tracking and keyframing do not operate across multiple clips at the same time.

Premiere (beta) includes several mask tools for different masking tasks: Object Mask, Ellipse, Rectangle, and Pen. Any of these tools can create isolated adjustments by masking an operation.

To isolate a subject by adding a mask to an operation:

Select the Clip operation you want to isolate. Keep the first Clip operation unmasked when possible so it can act as the primary operation for whole-frame adjustment, then create another clip-level operation for the mask.

Choose a mask tool from the toolbar; available choices include Object Mask, Ellipse, Rectangle, and Pen. This example uses Object Mask.

With Object Mask selected, move the pointer over the subject in the frame to preview the mask that will be created, then select the subject to apply it. Other mask tools may require dragging or clicking to draw the needed mask.

After the mask exists, select it in the Monitor to edit, resize, or track it.

With a mask selected, right-click the mask in the Monitor, or right-click the mask icon to the right of the operation where it is applied, to use these functions:

- Invert: reverses the image region isolated by the mask. When a face is masked, inverting affects everything outside the face.
- Track: follows the masked object when the subject moves.
- Change to Unassigned Mask: detaches a mask that was created for the wrong operation so it can be assigned to the correct operation or effect.
- Edit Properties: opens the Effects Control panel for additional mask properties.

Mask options let you refine, track, or invert isolated adjustments.

For a moving subject, select the mask, right-click it, and choose Track. Premiere plays through the clip and fits the mask to the subject's motion as closely as it can.

If the track needs manual cleanup, or the mask must follow a specific animated path, enable Frame mode so keyframed mask transforms can be created over time. Return the mode to Clip when you need overall size changes that apply through the clip's duration.

When the mask is correctly following the subject, select the operation connected to that mask and make the required color adjustments.
