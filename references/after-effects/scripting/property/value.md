# Property.value

app.project.item(index).layer(index).propertySpec.value

### Description

The property's value as it stands at the current time.

- With expressionEnabled true, the evaluated expression result comes back.
- With keyframes present, the keyframed value at the current time comes back.
- Failing both, the static value comes back.

Which value type you receive is governed by the property's value type. Consult the examples for the Property object.

### Type

A value appropriate for the type of the property (see Property.propertyValueType); read-only.
