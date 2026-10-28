# CEP Events

CEP can send and receive events inside one extension, across extensions in one application, and across extensions in different applications. Because every extension uses the same communication layer and event data format, extensions can communicate through CEP events; they can also communicate with the native side when point products invoke `PlugPlugAddEventListener/PlugPlugDispatchEvent` as needed.

JavaScript provides `dispatchEvent/addEventListener/removeEventListener` APIs for dispatching and listening to events. The next sections cover the CEP event data format and structure, the APIs for dispatching and listening, and related JavaScript sample code.
