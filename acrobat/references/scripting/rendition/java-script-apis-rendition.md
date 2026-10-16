# JavaScript APIs — Rendition

A Rendition holds everything required to play a media clip: the media data embedded inside it (or else a URL) plus its playback settings. It lines up with a Rendition over in Acrobat's authoring interface.

Rendition serves as a base type underlying either a MediaRendition or a MediaSelector. Wherever a function takes a Rendition, either of those two may be passed. Both MediaRendition and MediaSelector expose the properties and methods covered in this section. Read the type property to tell a MediaRendition apart from a MediaSelector.
