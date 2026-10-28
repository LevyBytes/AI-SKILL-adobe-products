# Access HTML DOM from extend script

Application ExtendScript cannot directly reach the JavaScript DOM for an HTML extension. When that bridge is needed, CEP event communication can stand in for direct DOM access.

CEP supplies a library that sends CSXS events through the ExtendScript External Object mechanism. That external object adds the ExtendScript class CSXSEvent for creating application-level CSXS events and dispatching them. In the HTML extension, listeners can be attached with the `addEventListener` API in `CSInterface.js`.

PlugPlugExternalObject support arrived in the CC 2014 release for several CC applications, including Photoshop, Illustrator, and Premiere Pro. Audition added support in the CC 2015.1 release.
