# Namespace object constructor

The Namespace constructor accepts several forms:

Namespace constructor forms: `new Namespace()`, `new Namespace(uri)`, `new Namespace(qname)`, `new Namespace(existingNamespace)`, and `new Namespace(prefix, uri)`. The URI and prefix arguments are strings; the other overloads accept QName and Namespace objects respectively.

With no argument, it creates a namespace whose prefix and URI are both empty.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| uri | String | Builds a Namespace object with no prefix and the supplied URI. |
| prefix | QName | Builds a namespace with no prefix; if the QName object has a URI, that URI is used. |
| ns | Namespace | Creates a copy of the supplied Namespace object. If Namespace() is called without new and the sole argument is a Namespace object, that same object is returned instead of a copy. |
| prefix, uri | String | Creates a Namespace object with the supplied prefix and URI. |
