# Batch/Exec

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | All |

As each document in a batch sequence is processed, this event fires. Scripts written into a batch sequence get at the event object when they run.

Doc is the target of this event.

This one does heed the rc return code: set rc to false and the batch sequence halts.
