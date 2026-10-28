# After Effects 13.2 (CC 2014.2) (December 2014)

TextDocument gained read-only attributes:

- Boolean: `fauxBold`, `fauxItalic`, `allCaps`, `smallCaps`, `superscript`, `subscript`.
- Floating point: `verticalScale`, `horizontalScale`, `baselineShift`, `tsume`.
- Paragraph text only: `boxTextPos`, an array of [X,Y] coordinates.

AVLayer gained the coordinate conversion methods `sourcePointToComp()` and `compPointToSource()`.
