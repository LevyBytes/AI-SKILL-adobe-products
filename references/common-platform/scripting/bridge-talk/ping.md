# BridgeTalk.ping()

BridgeTalk.ping(specifier, pingRequest)

### Description

Checks contactability by sending a message to another application.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| specifier | Application specifiers | A specifier for the target application |
| pingRequest | Identifying key string, one of: - STATUS: Returns the processing status; see getStatus(). - DIAGNOSTICS: Returns a diagnostic report that includes a list of valid ping keys. - `ECHO_REQUEST`: Returns `ECHO_RESPONSE` for a simple ping request. | Specific type of return value. |

### Returns

String
