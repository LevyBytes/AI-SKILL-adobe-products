# Access HTML DOM from extend script

Application ExtendScript cannot directly access an HTML extension's JavaScript DOM. When access is needed, CEP event-based communication can stand in for direct DOM access.

CEP supplies a library that uses the ExtendScript External Object mechanism to send CSXS events. That external object exposes an ExtendScript class named CSXSEvent for creating and dispatching application-level CSXS events. On the HTML extension side, listeners can be registered with the `addEventListener` API in `CSInterface.js`.

Some CC applications, including Photoshop, Illustrator, and Premiere Pro, integrated the PlugPlugExternalObject library and began supporting this feature in the CC 2014 release. Audition supports it starting with CC 2015.1.
