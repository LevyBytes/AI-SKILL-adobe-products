# Apply Sharp And Smooth Modes In Object Masking

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

Set mask-edge quality so it fits both the footage and the creative goal in Adobe Premiere.

Premiere's Object Masking includes controls for refining edges, which helps separate subjects from the rest of the frame with more precision.

Edge quality modes determine how Object Masking draws the border between the selected subject and the background. Sharp mode fits high-contrast subjects or firm edges, while smooth mode works better for softer transitions, including hair or translucent materials. These modes make complex masks easier to manage while preserving quality.

When Object Masking is used for the first time, Premiere downloads the needed AI models automatically. Object Masking cannot be used while that download is still in progress. The Progress panel shows the download status.

## Adjust edge quality mode

Select the Object Mask Tool from the toolbar.

Before drawing the mask, set the quality option to Sharp or Smooth mode.

In the Program Monitor, use Smooth or Sharp to determine the object mask's edge softness.

In the Program Monitor, use Smooth or Sharp to determine the object mask's edge softness.

Hover over the Program Monitor to reveal highlighted objects, then select the subject to isolate.

After the object is selected, open the Effect Controls panel.

Locate an effect in the Effect panel, such as Gaussian Blur, and drop that effect onto the clip in the timeline; the mask is applied to the effect automatically.

Tip

- For subjects with fine details, including hair, fur, or intricate textures, choose Smooth mode.
- For objects with clear, well-defined edges, choose Sharp mode.
- If the workflow needs mask expansion, use Sharp mode because Smooth mode does not support it.
- Begin from a frame where the subject is easiest to see.
- Try both modes on a representative frame before committing to the full track.

## Viewing mask quality

After creating an Object Mask, you can check which quality mode was used:

Open the Effect Controls panel.

Find the mask in the effects stack. Under Mask Quality, either Sharp or Smooth is shown to identify the active mode for that mask.

Use the Effect Controls panel to view and change object mask settings.

Use the Effect Controls panel to view and change object mask settings.

## Limitations

### Smooth mode masks and Premiere version 26.0 compatibility

Opening a project that contains a Smooth mode mask in Premiere version 26.0 prevents the mask from rendering correctly. Editing and saving the project in version 26.0 can permanently damage the mask data. Keep projects containing Smooth mode masks out of version 26.0.

### Team Projects limitations for Smooth mode

Team Projects do not support Smooth mode masks. In a Team Project, Object Masks cannot be created with Smooth mode.

When a standard project is migrated into a Team Project, Smooth mode masks that already exist are removed during conversion. The same drop occurs when sequences, clips, or effects containing Smooth mode masks are copied and pasted into a Team Project.
