# JavaScript APIs — ScreenAnnot

On the page as rendered on screen, a ScreenAnnot stands for a screen annotation — a rectangular region inside a PDF. To drive multimedia playback, Renditions and RenditionActions can be attached to that ScreenAnnot.

Note

Within the Acrobat 6.0 (and Later) Compatible Media JavaScript API sits the ScreenAnnot object. Under that scheme, multimedia content leans on whatever multimedia player the host operating system can find and start on the user's machine. From Acrobat 9.0 (and Later) onward, Flash video (FLV) and Flash applications (SWF) are handled natively and may be embedded into a PDF or streamed to it. Because Flash is supported natively, playback stays dependable across platforms. There is no need for an extra media player or a particular codec.

The rich media annotations introduced with Acrobat 9.0 (and Later) replace Acrobat 6.0 (and Later) Compatible Media. For that reason, anyone authoring PDFs that carry multimedia is urged strongly to adopt the rich media annotations of Acrobat 9 (and Later). For the JavaScript side of rich media annotations, consult the AnnotRichMedia object.
