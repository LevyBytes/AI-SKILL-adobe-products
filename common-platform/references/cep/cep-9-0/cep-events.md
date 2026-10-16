# CEP Events

CEP can send and receive events inside one extension, across extensions in the same application, and across extensions in different applications. Because extensions share a common communication layer and event data format, they can exchange CEP events with each other; they can also communicate with native code when point products call `PlugPlugAddEventListener/PlugPlugDispatchEvent` as needed.

JavaScript provides `dispatchEvent/addEventListener/removeEventListener` APIs for sending and listening to events. The sections below cover CEP event data format and structure, the dispatch/listen APIs, and matching JavaScript sample code.
