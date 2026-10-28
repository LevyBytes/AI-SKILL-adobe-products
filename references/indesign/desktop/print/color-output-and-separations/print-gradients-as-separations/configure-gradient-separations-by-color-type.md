# Configure gradient separations by color type

For gradients that contain only process colors, use Window > Output > Separations Preview to confirm separation behavior.

For gradients that blend two tints of the same spot color, use the Separations Preview panel to confirm that the gradient separates onto a single spot color plate.

To build a gradient that fades from a spot color to white on one plate, use the Swatches panel (Window > Color > Swatches) and create the gradient between the Paper swatch and the spot color.

When the Paper swatch is paired with a spot color, the result is a one-plate separation that fades to the unprinted paper color and avoids unnecessary plates.

For gradients that mix spot and process colors, expect output on both the process plates and the spot color plate(s). Preview every affected plate in the Separations Preview panel before printing.

Consider screen angle configuration only when generating host-based separations.

Open Window > Output > Separations Preview to identify all spot colors in the gradient.

When producing host-based separations, choose File > Print and choose Output.

In the Color menu, choose Separations (host-based) or In-RIP Separations as the workflow requires.

Click the Ink Manager button to open ink settings.

From the ink list, select every spot color.

If manual screen angles are required, ask the prepress provider before changing angle or frequency settings.

When multiple spot colors are screened, assign distinct angles to reduce interference patterns.

Choose OK to close the Ink Manager, then finish the print settings.

Alert

Matching angles and frequencies across multiple screened spot colors in host-based separations can cause interference patterns or moiré.

A common offset-printing halftone angle set is C 105°, M 75°, Y 90°, K 45°, but exact values vary by press and RIP configuration.
