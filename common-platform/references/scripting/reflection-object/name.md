# name

reflect.name

### Description

Class name associated with the reflected object.

### Type

String

### properties

reflect.properties

### Description

Array of ReflectionInfo objects for the reflected object's properties, whether those properties belong to the class or the individual instance. When properties are added dynamically at runtime, the list includes only dynamic entries the script has already accessed.

For an object that wraps an HTML tag, for example, the HTML attribute names are worked out during runtime.

### Type

Array of ReflectionInfo objects
