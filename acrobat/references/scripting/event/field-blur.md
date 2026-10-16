# Field/Blur

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 4.05 | No | No | All |

Trailing every other event, this one fires right as a field gives up focus. It is raised whether or not a mouse click did the deactivating — a tab key, for instance, works just as well.

Additional properties defined:

target: whichever field is running its validation script.

modifier, shift, targetName, and value.

The rc return code carries no weight for this event.
