# mail

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | Not available in Reader |

Wraps up report generation and sends the report by email.

See also mailGetAddrs, app. mailMsg, the Doc mailForm method, and the FDF object mail method.

Parameters

| Parameter | Description |
| --- | --- |
| bUI | (optional) Says whether a user interface appears. When true (the default), the remaining parameters preload the compose-new-message window shown to the user. When false, cTo becomes mandatory and the rest stay optional. - (Acrobat 7.0) Run this method outside a privileged context and bUI is ignored, defaulting to true. See Privileged context. |
| cTo | (optional) The message recipients, given as a semicolon-separated list. |
| cCc | (optional) The CC recipients, given as a semicolon-separated list. |
| cBcc | (optional) The BCC recipients, given as a semicolon-separated list. |
| cSubject | (optional) The message subject. It may run up to 64 KB. |
| cMsg | (optional) The message body. It may run up to 64 KB. |
