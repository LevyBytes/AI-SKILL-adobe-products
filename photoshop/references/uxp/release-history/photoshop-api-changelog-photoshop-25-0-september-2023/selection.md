# Selection

The new [Selection](../../host-api/selection/reference-index.md) class for pixel selection is available through [Document.selection](../../document/selection.md).
Properties: `typename`, `docId`, `parent`, `bounds`, `solid`.

And methods:
`contract`, `deselect`, `expand`, `feather`, `grow`, `inverse`, `load`, `makeWorkPath`, `selectAll`, `selectRectangle`, `selectEllipse`, `selectPolygon`, `selectRow`, `selectColumn`, `save`, `saveTo`, `selectBorder`, `smooth`, `translateBoundary`, `resizeBoundary`, `rotateBoundary`. (All methods here return `Promise<void>`.)
