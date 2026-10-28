# Deleting global properties

Removing a variable or property from the global object is a matter of applying the delete operator to strip out the property you defined. The JavaScript 1.5 documentation explains the reserved delete keyword.

For instance, this script clears away the global.radius property:

```javascript
delete global.radius
```
