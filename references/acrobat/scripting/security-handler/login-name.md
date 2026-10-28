# loginName

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | No | Yes | All | String | R |

Carries the name of whichever signing digital ID is actively selected for the security handler. Picking a signing credential here may mean the login method has to run first. You get null back when no signing credential is selected, or when the security handler lacks support for this property.
