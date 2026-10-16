# Choose the right Network API

UXP offers three main APIs for network communication:

| API | Best For | Supported Features |
| --- | --- | --- |
| fetch | Modern, promise-based HTTP requests | JSON, text, binary data, streaming |
| XMLHttpRequest | Legacy compatibility | Progress events, upload tracking |
| WebSocket | Real-time communication | Persistent bidirectional data flow |

These network APIs are globally available in UXP, so imports are unnecessary. The sections below cover each option.
