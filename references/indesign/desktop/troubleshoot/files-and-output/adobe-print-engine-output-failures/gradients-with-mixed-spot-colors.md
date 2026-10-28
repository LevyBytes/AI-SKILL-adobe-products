# Gradients with mixed spot colors

Adobe Print Engine failures can occur when a gradient uses spot colors whose definitions come from different color spaces, such as CMYK mixed with LAB. The same problem can affect direct printing and PostScript-based output paths.

Open the Swatches panel with Window > Color > Swatches.

Locate the spot colors used in gradients; spot swatches show a dot icon.

Double-Select each spot swatch and check its color mode.

When needed, create the spot colors again in one consistent color space.

Make sure every spot color inside a single gradient uses the same color space.

Apply the corrected gradient again, then retry printing.

Choose File > Print, adjust the settings per your requirement and then choose Print.
