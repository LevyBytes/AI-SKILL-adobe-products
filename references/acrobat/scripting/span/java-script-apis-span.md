# JavaScript APIs - Span

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

A general-purpose object standing for a run of text plus its formatting properties inside a rich text form field or annotation. Any rich text value is built from an array of span objects that together hold the text and its formatting.

Note

A span object is merely a snapshot of the field's or annotation's rich text value. To change it and push the update back so the field refreshes, work through the Field object richValue property, or the Annotation object property richContents, together with the event object properties richValue, richChange, and richChangeEx.
