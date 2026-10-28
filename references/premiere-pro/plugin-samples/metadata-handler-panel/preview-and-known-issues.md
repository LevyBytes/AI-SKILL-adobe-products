# Preview and Known Issues

- At present, when multiple project items are selected, metadata changes are applied separately to each item. With large selections, those per-item actions can overload the history/undo queue. The result may be that broad metadata edits cannot be fully undone, and earlier UI actions may also drop out of the undo history. This is unintended behavior and remains under investigation.
