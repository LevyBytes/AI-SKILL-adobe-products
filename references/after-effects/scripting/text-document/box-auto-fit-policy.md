# TextDocument.boxAutoFitPolicy

textDocument.boxAutoFitPolicy

Note

This functionality was added in After Effects 24.6

### Description

Switches on the automatic resizing of the box height so it accommodates the text inside. Growth happens downward only.

Defaults to BoxAutoFitPolicy.NONE.

Will be disabled if TextDocument.boxVerticalAlignment is anything other than BoxVerticalAlignment.TOP.

### Type

A BoxAutoFitPolicy enumerated value; read-write. One of:

- BoxAutoFitPolicy.NONE
- BoxAutoFitPolicy.`HEIGHT_CURSOR`
- BoxAutoFitPolicy.`HEIGHT_PRECISE_BOUNDS`
- BoxAutoFitPolicy.`HEIGHT_BASELINE`
