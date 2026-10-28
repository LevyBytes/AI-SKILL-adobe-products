# CEP Events

CEP can send and receive events within one extension, across extensions in one application, and across extensions in different applications. Because extensions use the same common communication layer and event data format, they can communicate through CEP events. They can also communicate with native-side code when point products call `PlugPlugAddEventListener/PlugPlugDispatchEvent` as needed.

JavaScript provides `dispatchEvent/addEventListener/removeEventListener` APIs for dispatching and listening to events. The following sections cover the CEP event data format and structure, the dispatch/listen APIs, and related JavaScript sample code.
