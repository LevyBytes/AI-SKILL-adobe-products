# Adjust data content to fit in a barcode field

Double-click the barcode field to reach its settings.

On the Options tab, apply whichever of these changes you need:

- Select Custom and enter lower values for Error Correction Level and Y/X Ratio.
- Select a different Symbology option.
- If you are using an Adobe software decoder (available separately), go to the Options tab and select Compress Data Before Encoding to Barcode.

On the Value tab, apply whichever of these changes you need:

- Select Tab Delimited rather than XML as the data-encoding format, since XML eats up more room when it encodes.
- In the Options tab, select a different Symbology option.
- Select Pick and deselect any fields that don't need encoding.
- Enter a custom script that forces user-entered text entirely to lowercase or entirely to uppercase as it encodes.

Note

Guidance from the National Association of Computerized Tax Processors (NACTP), which the United States Internal Revenue Service and state tax agencies follow, calls for all uppercase characters in 2D barcode data.

For a smaller barcode, double-click the barcode field, head to the Value tab, and add a script that holds input to alphanumeric characters plus either all uppercase or all lowercase letters.

Tip

A handy approach is to add a few more barcode fields and route different data into each one.
