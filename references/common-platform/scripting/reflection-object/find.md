# find()

reflectionObj.find(name)

### Description

Provides the ReflectionInfo object for the reflected object's named property. If the property is absent, the result is null.

Call this method when you need details about dynamic properties that are known to exist but have not yet been accessed.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | The property for which to retrieve information. |

### Examples

The following code obtains an object's class name:

```javascript
obj = new String ("hi");
obj.reflect.name; // => String
```

The following code obtains the method list:

```javascript
obj = new String ("hi");
obj.reflect.methods; //=> indexOf,slice,...
obj.reflect.find ("indexOf"); // => the method info
```

The following code obtains the property list:

```javascript
Math.reflect.properties; //=> PI,LOG10,...
```

The following code obtains a property's data type:

```javascript
Math.reflect.find ("PI").type; // => number
```
