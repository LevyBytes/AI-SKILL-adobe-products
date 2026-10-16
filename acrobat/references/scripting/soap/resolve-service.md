# resolveService

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | Yes | All |

Ties a service name to a network address and port so a connection can be established. Because a service's network location can shift over time — a DHCP lease lapsing or the service migrating to another server, for example — the connection details come back asynchronously and ought to be treated as temporary.

Note

As of Acrobat 8.0 this method is deprecated; build new services on Net.Discovery.resolveService instead.

Parameters

| Parameter | Description |
| --- | --- |
| cType | The DNS SRV Service Name to resolve. |
| cDomain | The domain that the service was located in. |
| cService | The service name to resolve. |
| oResult | An object that will be called when the service is resolved. See oResult parameter. |

Returns

A service query object that controls how long the resolve lasts. Resolving carries on until any one of these holds:

The service query object handed back from resolveService gets garbage collected.

The resolve method on the oResult object runs, signaling that the operation finished (whether by resolving the service, hitting an error, or timing out).

The stop method on the service query object handed back from resolveService runs.

| Method | Description |
| --- | --- |
| stop | Brings the resolve to a halt. You may call it from inside a notification callback, but the actual stop waits for idle time. |

Exceptions

Standard Acrobat exceptions.

Additional notes on the
