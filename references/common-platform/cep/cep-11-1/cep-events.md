# CEP Events

CEP can send and receive events within one extension, among extensions in the same application, and among extensions in different applications. Because all extensions share a common communication layer and event data format, CEP events allow extension-to-extension communication. They can also communicate with native code when point products call `PlugPlugAddEventListener/PlugPlugDispatchEvent` as needed.

JavaScript provides `dispatchEvent/addEventListener/removeEventListener` APIs for dispatching events and listening for them. The sections below cover the CEP event data format and structure, the dispatch and listener APIs, and JavaScript sample code.
