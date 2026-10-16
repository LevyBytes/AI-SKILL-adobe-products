# CEP Events

CEP can send and receive events inside one extension, between extensions in one application, and between extensions in different applications. Because extensions share the same communication layer and event data format, CEP events allow them to exchange messages with each other and, when point products invoke `PlugPlugAddEventListener/PlugPlugDispatchEvent`, with native-side code as well.

JavaScript provides `dispatchEvent/addEventListener/removeEventListener` for sending events and registering listeners. The next sections cover the CEP event data format and structure, the dispatch/listen APIs, and a related JavaScript sample.
