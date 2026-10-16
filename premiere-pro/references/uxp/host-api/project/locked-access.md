# lockedAccess

25.0

_void_

Obtains read/upgrade locked access to `Project`; the callback runs while project state stays stable. `executeTransaction` remains callable inside the locked section.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| callback | _() => void_ | - |
