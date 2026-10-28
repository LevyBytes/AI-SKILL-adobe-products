# get()

ESerror_t get (SoHObject hObject, SoCClientName* name, TaggedData* pValue);

### Description

Invoked when JavaScript code reads a property of this class:

```javascript
alert(xx.myproperty);
```

### Parameters

| Parameter | Description |
| --- | --- |
| hObject | Instance reference for this class in Support structures form. |
| name | Property name, as a pointer to an SoCClientName. |
| pValue | Buffer that receives the property value, as a TaggedData. |

### Returns

The value is an error code. kESErrOK is the OK result.
