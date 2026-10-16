# historyStateInfo (default: none)

As of Photoshop 2022, this option is deprecated. New JavaScript should rely on [executeAsModal](../executeasmodal.md) for history suspension.

Ask Photoshop to represent the full batchPlayed action sequence as one history state. History state should include two properties:

- `name`: A string displayed as the history event name in the History panel
- `target`: A document reference indicating where to create the history state. If the reference points to another document, or if the batchPlay calls do not all operate on the same document, behavior is undefined.

Plugins using api version 2 may prefer the history state feature available through the executionContext object.
