# Migration helper for ExtendScript developers

When your code frequently calls `executeAction` and `executeActionGet`, migration can be helped by [ExtendScript batchPlay logger](https://github.com/adobe-uxp/ps-es-to-uxp). Add the `ps-es-to-uxp` jsx code to your ExtendScript project; it prints your `executeAction` and `executeActionGet` methods in a format usable with the UXP equivalent API, [batchPlay](../batch-play/reference-index.md).
