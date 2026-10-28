# Action references

Action references identify the DOM objects that a command affects. The `_target` keyword specifies an action reference.
An action reference is a list of item references describing how to locate the DOM element, starting from the application DOM element.
Each list item can take one of these forms:

| Reference form | Syntax | Example | Notes |
| --- | --- | --- | --- |
| ID | `{_ref: className, _id: number}` | `{_ref: "document", _id: 123}` | Index `{_ref: className, _index: number}` `{_ref: "document", _index: 1}` Indices are 1 based |
| Name | `{_ref: className, _name: string}` | `{_ref: "document", _name: "Untitled-1"}` | Enumeration `{_ref: className, _enum: "ordinal", _value: enumerationSpecifier*}` `{_ref: "document", _enum: "ordinal", _value: "targetEnum"}` |
| Property | `{_property: propertyName}` | `{_property: "title"}` |

Use the ID form when possible, because a Photoshop object's ID stays stable for the session lifetime. An index can shift when elements are inserted or removed before the specified object. The enumerationSpecifier depends on the command, but `targetEnum` commonly refers to the selected or active object for the specified class. Other possible values include: "first", "last", and "front". When the enumeration form is used, `_value` defaults to `targetEnum`.
