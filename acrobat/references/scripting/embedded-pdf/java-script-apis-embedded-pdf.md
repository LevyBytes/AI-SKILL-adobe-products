# JavaScript APIs — Embedded PDF

What this object lays out is an API surfaced to a container application's object model, letting that application trade messages with an embedded PDF document. Take a PDF embedded inside an HTML document via the &lt;OBJECT&gt; tag: the PDF object then gets scripted within the browser's scripting context.

On the PDF side of the scripting model, the HostContainer object supplies the matching interface. For security's sake, both the container and the PDF document have to grant permission before any such exchange can take place.
