# Vulcan Interface: Communicating across plugins within Photoshop

The older Adobe Vulcan library handled communication between plugins across Adobe host applications. UXP cannot call these APIs, although UXP 6.0.2 added APIs for communication between plugins.

In UXP 6.0.2 (manifest v5), set the needed manifest flags, then use `invokeCommand` for command execution and `showPanel` to reveal panels from other plugins.
| Type | CEP | UXP |
| --- | --- | --- |
| Plugin communication across host applications | Yes | Not yet Plugin communication within the same host application Yes Yes, UXP 6.0.2+ |
