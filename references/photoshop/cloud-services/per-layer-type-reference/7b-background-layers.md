# 7b. Background layers

**V2 cannot create or edit background layers (`backgroundLayer`).** The V2 layer create/edit enum for `edits.layers` omits `background_layer`. When a V1 workflow creates or changes the document background layer, substitute a standard pixel layer (`layer`). Manifest responses may still report background layers as `type: "background_layer"`; background-layer response details are covered in [Manifest Response Format](../manifest-response-migration.md).
