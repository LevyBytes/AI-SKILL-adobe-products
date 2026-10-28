# intent

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 7.0 | D | No | C | string | R/W |

Through this property a markup annotation can take on distinct behavior according to how it is meant to be used. The Callout Tool, say, is really a free text annotation whose intent reads FreeTextCallout.

Although every annotation defines the property, at present only free text, polygon, and line annotations ever assign intent a non-empty value.

Annotations: All

Listed below are the UI tools for creating annotations that carry special appearances.

| UI | Annotation type | Intent |
| --- | --- | --- |
| Callout Tool | FreeText | FreeTextCallout |
| Cloud Tool | Polygon | PolygonCloud |
| Arrow Tool | Line | LineArrow |
| Dimensioning Tool | Line | LineDimension |
