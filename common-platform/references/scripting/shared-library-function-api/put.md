# put()

ESerror_t put (SoHObject hObject, SoCClientName* name, TaggedData* pValue);

### Description

Invoked when JavaScript code sets a property of this class:

```javascript
xx.myproperty = "abc" ;
```

Supplying NULL for this function makes the JavaScript object read-only.

### Parameters

| Parameter | Description |
| --- | --- |
| hObject | Instance reference for this class in Support structures form. |
| name | Property name, as a pointer to an SoCClientName. |
| pValue | New value, as a pointer to a TaggedData. |

### Returns

The value is an error code. kESErrOK is the OK result.
