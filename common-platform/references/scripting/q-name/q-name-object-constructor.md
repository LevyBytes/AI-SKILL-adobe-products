# QName object constructor

The constructor accepts several forms:

```javascript
new QName ()
new QName (name)
new QName (ns)
new QName (uri, name)
```

Calling it without arguments produces a QName object whose local name is empty and whose URI is absent.

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Creates a QName object using the supplied local name and the default namespace URI. The wildcard character "\*" is allowed. |
| name | QName | Duplicates an existing QName object. |
| ns | Namespace | Builds a QName object whose local name is empty and whose URI comes from the Namespace object. |
| uri, name | String | Creates a QName object with the supplied namespace URI and local name. If the local name is the wildcard character "\*", uri is ignored and the URI value comes from the default namespace. |
