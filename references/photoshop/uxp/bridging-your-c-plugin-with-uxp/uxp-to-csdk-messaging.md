# UXP to CSDK messaging

For messages from a UXP plugin to a C plugin, create a listener inside the CPlugin, then call `AddUXPMessageListener` and `RemoveUXPMessageListener` at the appropriate points.
