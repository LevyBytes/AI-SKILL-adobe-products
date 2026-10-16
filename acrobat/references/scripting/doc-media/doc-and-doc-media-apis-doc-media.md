# Doc and Doc.Media APIs — Doc.media

Within every document, the media property holds an object whose multimedia properties and methods operate on that document.

Note

Doc.media belongs to the Compatible Media JavaScript API introduced with Acrobat 6.0 (and Later). Multimedia assets built this way lean on the host operating system to find and start up a multimedia player already installed on the user's machine. Beginning with Acrobat 9.0 (and Later), Flash video (FLV) and Flash applications (SWF) gain native support and may be embedded within a PDF or streamed into one. Thanks to this native Flash support, playback works dependably regardless of platform. Nothing extra in the way of a media player or particular codec is required.

The Acrobat 9.0 (and Later) multimedia layer, which works through rich media annotations, replaces the older Acrobat 6.0 (and Later) Compatible Media. For that reason, anyone building PDFs that carry multimedia assets is urged in the strongest terms to adopt the rich media annotations from Acrobat 9 (and Later). For JavaScript coverage of rich media annotations, consult the AnnotRichMedia object.
