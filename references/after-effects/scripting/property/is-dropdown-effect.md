# Property.isDropdownEffect

app.project.item(index).layer(index).propertySpec.isDropdownEffect

Note

This functionality was added in After Effects 17.0.1 (2020)

### Description

A true value identifies the property as the Menu property belonging to a Dropdown Menu Control effect — one whose entries can be refreshed via setPropertyParameters.

### Examples

```javascript
appliedEffect.property("Menu").isDropdownEffect;    // true
appliedEffect.property("Color").isDropdownEffect;   // false
appliedEffect.property("Feather").isDropdownEffect; // false
```

### Type

Boolean; read-only.
