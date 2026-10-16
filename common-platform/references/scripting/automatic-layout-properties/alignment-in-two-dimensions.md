# Alignment in two dimensions

Instead of a single string, alignment can be set to a two-string array. The first string gives the horizontal alignment and the second gives the vertical alignment. This enables horizontal placement of children in a row-oriented container and vertical placement of children in a column-oriented container.

The next figures use the sample script SnpAlignElements.jsx to show two-dimensional alignment.

- In the first figure, each control sits vertically centered in its row, while a value such as ["left", "center"] assigns that element's horizontal position:
- The vertical alignment example builds four columns and positions the controls within each column along the vertical axis. It uses values such as ["fill", "top"] to spread controls through the column while preserving their relative vertical positions:
