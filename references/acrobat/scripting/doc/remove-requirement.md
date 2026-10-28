# removeRequirement

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0.5 | D | Yes | Not allowed in Reader: Only available in Acrobat products |

Strips an existing requirement out of a PDF document. Once a requirement is gone, Acrobat no longer has to satisfy it to open the document. Pull a requirement and the document might stop working right.

Note

A console or batch event is the only place this method can be called from.

Parameters

| Parameter | Description |
| --- | --- |
| cType | Which kind of requirement gets removed. The Requirements Enumerator object describes the types. |
