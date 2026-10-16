# createSetValueAction

25.0

_Action_

Creates an action that assigns a named value through scripting. Parameters use the form <name, value (number, boolean or string), persistence flag>. Failure is possible, for example, if the underlying properties object lacks action-based property-setting support.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| name | _string_ | property name |
| value | _boolean_ or _string_ or _number_ | Value written for that key |
| persistenceFlag | [_Constants.PropertyType_](../../constants/property-type.md) | Controls property persistence |
