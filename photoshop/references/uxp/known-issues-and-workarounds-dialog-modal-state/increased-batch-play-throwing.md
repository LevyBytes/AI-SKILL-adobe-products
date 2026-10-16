# Increased batchPlay throwing

Photoshop introduced a change that makes `batchPlay` calls throw more frequently for bad requests. In Photoshop 23.4.1, layer `move` commands can be more dependent on the current Document state and may now throw in cases that previously did not.

When `batchPlay` is used to extend a plugin, guard those calls with a suitable try-catch block, or choose DOM APIs where they fit the task.

## See also

- [Known Issues](../known-issues/reference-index.md)
