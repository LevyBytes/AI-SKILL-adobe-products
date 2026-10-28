# Set Gyoudori for Japanese text

This section explains how to make Japanese text occupy a specified number of grid lines in Adobe InDesign, for both vertical and horizontal layout grids.

Gyoudori is a Japanese composition control that makes a paragraph span a chosen number of lines, independent of character size or ordinary line spacing. It is useful in vertical text and Japanese layout grids, where text elements need consistent line alignment and spacing.

Gyoudori distributes a paragraph across a fixed line count by adjusting line spacing automatically. It is especially useful for headlines, pull quotes, and decorative text that must align precisely with the document layout grid. Gyoudori works in horizontal and vertical text frames and performs best inside a frame grid. Before using Gyoudori, set the document up with a frame grid. Japanese-composition text with suitable Mojikumi settings gives the best results.

Select the Japanese text paragraph with the Type  tool.

Open the Paragraph panel (Window > Type & Tables > Paragraph).

Open the panel menu icon and choose Gyoudori.

Enter the number of lines that the paragraph should occupy.

Open Type > Character.

Open the panel menu icon and choose Character Alignment.

Choose an alignment option: Top, Center, Bottom, or Justify.

Select OK. InDesign changes line spacing so the paragraph fits the requested line count.

For consistent handling across several paragraphs, create a paragraph style that stores the Gyoudori settings. Open Window > Styles > Paragraph Styles, then include Gyoudori specifications in the Japanese Composition Settings section.

The chosen alignment option controls how InDesign places the extra space produced by the Gyoudori line count. Center alignment divides the space above and below the text, while top or bottom alignment gathers that space at one end.

Gyoudori settings take precedence over the normal line spacing (Leading) values in the Character panel. To turn Gyoudori off and restore standard spacing, select the paragraph, choose Gyoudori from the Paragraph panel menu, and select None.

When a layout mixes horizontal and vertical text, Gyoudori helps maintain even line distribution through a continuous text passage, producing a more balanced and cohesive result. It works with Japanese composition controls such as Mojikumi and Kinsoku for professional typography.

For documents based on layout grids, Gyoudori calculations follow the grid structure so text elements fit into the overall page design. That alignment is especially important for multi-column layouts and for coordinating text across facing pages.

## See also

- [Characters](../../../document-model/characters/reference-index.md)
- [Paragraph Styles](../../../document-model/paragraph-styles/reference-index.md)
