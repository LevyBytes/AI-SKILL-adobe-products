# TextDocument.composerEngine

textDocument.composerEngine

Note

This functionality was added in After Effects 24.0

### Description

Selects which paragraph composer engine the Text layer uses. Fresh Text layers default to ComposerEngine.`UNIVERSAL_TYPE_ENGINE`; you will only run into the alternative enum on projects built before the Universal Type Engine (once called the South Asian and Middle Eastern engine) became standard in After Effects 22.1.1.

A mixed value across the layer reads back as undefined.

You can read and write this attribute, yet writing any enum besides ComposerEngine.`UNIVERSAL_TYPE_ENGINE` raises an exception.

Put differently, an older document can be moved from ComposerEngine.`LATIN_CJK_ENGINE` up to ComposerEngine.`UNIVERSAL_TYPE_ENGINE`, though never back the other direction.

Warning

Every paragraph in the Text layer is covered by this value.

Assigning a new value pushes that setting onto every paragraph in the Text layer.

### Type

A ComposerEngine enumerated value; read-write. One of:

- ComposerEngine.`LATIN_CJK_ENGINE`
- ComposerEngine.`UNIVERSAL_TYPE_ENGINE`
