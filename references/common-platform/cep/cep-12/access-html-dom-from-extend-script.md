# Access HTML DOM from extend script

Application ExtendScript cannot directly access an HTML extension's JavaScript DOM. When that bridge is needed, use CEP event-based communication instead.

CEP supplies a library that uses the ExtendScript External Object mechanism to send CSXS events. The external object exposes the ExtendScript class CSXSEvent, which creates and dispatches application-level CSXS events. On the HTML extension side, register listeners through the `addEventListener` API in `CSInterface.js`.

Photoshop, Illustrator, and Premiere Pro added PlugPlugExternalObject support in the CC 2014 release. Audition added the same capability in the CC 2015.1 release.
