# .value is no longer required when linking to other properties from Source Text

Pull a value from another property inside a Source Text property and the Legacy ExtendScript engine insists you append .value to the end of that property. By contrast, the JavaScript engine returns the property's value on its own, unless you reach for some other attribute such as .propertyIndex or .name.

For example:

```javascript
thisComp.layer("Solid 1").transform.position

// In the Legacy engine, this evaluates to "[object Property]" when applied to a Source Text property.
// In the JavaScript engine, this evaluates to the value of the Position property of layer "Solid 1" when applied to a Source Text property.
```
