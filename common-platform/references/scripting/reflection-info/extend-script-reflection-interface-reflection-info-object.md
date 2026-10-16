# ExtendScript Reflection Interface — ReflectionInfo Object

A ReflectionInfo object carries metadata for a property, a method, or one argument of a method.

ReflectionInfo objects are reachable from a Reflection object's properties and methods arrays, using either names or indexes:

```javascript
obj = new String ("hi");
obj.reflect.methods[0];
obj.reflect.methods["indexOf"];
```

For a method, its argument metadata is stored in the arguments array on that method's ReflectionInfo object and is addressed with an index:

```javascript
obj.reflect.methods["indexOf"].arguments[0];
obj.reflect.methods.indexOf.arguments[0];
```
