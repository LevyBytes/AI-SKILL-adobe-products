# XMPMeta.registerNamespace()

XMPMeta.registerNamespace(namespaceURI, suggestedPrefix)

### Description

Registers a namespace under a prefix. If suggestedPrefix is already being used, the function generates, registers, and returns another prefix.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| namespaceURI | Schema namespace string constants | Namespace URI value. |
| suggestedPrefix | String | Suggested namespace prefix string. |

### Returns

A String with the prefix that was actually registered. It matches suggestedPrefix unless another namespace already uses that prefix.
