# Access HTML DOM from extend script

Application ExtendScript cannot directly reach an HTML extension's JavaScript DOM. When that access pattern is needed, CEP event-based communication can act as the replacement.

CEP includes a library that uses the ExtendScript External Object mechanism to send CSXS events. The external object supplies the ExtendScript class CSXSEvent for creating and dispatching application-level CSXS events. On the HTML extension side, register listeners through the `addEventListener` API in `CSInterface.js` to receive those events.

The CC 2014 release brought this PlugPlugExternalObject support to some CC applications, including Photoshop, Illustrator, and Premiere Pro. Audition added the same capability in CC 2015.1.
