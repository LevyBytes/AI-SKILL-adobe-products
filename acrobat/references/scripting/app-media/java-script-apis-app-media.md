# JavaScript APIs — app.media

Properties and functions handy for multimedia JavaScript code are what this object lays out.

A number of the app.media properties are enumeration objects spelling out the values various properties accept. Later Acrobat releases might tack on more such values, so JavaScript code ought to be ready to meet values beyond the ones spelled out here. By the same token, JavaScript code might run on an Acrobat build older than the one it targeted, in which event it has to fall back on whatever values that build supports.

Note

app.media belongs to the Acrobat 6.0 (and Later) Compatible Media JavaScript API. Multimedia assets built this way depend on the host operating system to track down and start a multimedia player already on the user's machine. Flash video (FLV) along with Flash applications (SWF) draw native support in Acrobat 9.0, and either can be embedded inside a PDF document or streamed to one. With Flash backed natively, playback holds up reliably across platforms. Nothing extra — no separate media player, no particular codec — is required.

The multimedia in Acrobat 9.0, which works through rich media annotations, takes over from Acrobat 6.0 (and Later) Compatible Media. That is why anyone developing PDFs that carry multimedia assets is urged in the strongest terms to adopt the rich media annotations of Acrobat 9. For the JavaScript that supports rich media annotations, turn to the AnnotRichMedia object.
