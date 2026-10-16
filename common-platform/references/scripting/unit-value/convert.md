# UnitValue.convert()

unitValueObj.convert(unit)

### Description

Changes this object to the requested unit and updates its type and value to match.

The method returns true when conversion succeeds. If the unit is unknown or the object cannot be converted, a run-time error is generated and false is returned.

### Parameter

| Parameter | Type | Description |
| --- | --- | --- |
| unit | String | The unit type in abbreviated form; for example, "cm" or "in". |

### Returns

Boolean
