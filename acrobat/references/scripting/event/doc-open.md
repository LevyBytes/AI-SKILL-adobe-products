# Doc/Open

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 4.0 | No | No | All |

Opening a document is what fires this event. At open time, the document-level script functions are scanned and any exposed scripts run.

Doc is the target of this event, which additionally defines the targetName property.

The rc return code carries no weight for this event.
