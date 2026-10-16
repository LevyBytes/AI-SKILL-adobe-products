# Object

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Root class for JavaScript objects.

```typescript
interface Object {
    /**
    - Constructor function that produced this object.
    - In the XML class, this property is handled as an XML element.
      */
      readonly constructor: Function
    /**

    - Prototype object used by this object.
    - In the XML class, this property is handled as an XML element.
      */
      readonly prototype: Object
    /**

    - Reflection object tied to this method or property.
    - In the XML class, this property is handled as an XML element.
      */
      readonly reflect: Reflection
    /**

    - Indicates whether a property exists on the instance or along the prototype chain.
    - @param name Property name to check.
      */
      hasOwnProperty(name: string): boolean
    /**

    - Tests whether this object has the supplied object in its prototype chain.
    - @param what Object to check.
      */
      isPrototypeOf(what: Object): boolean
    /**

    - Indicates whether a property participates in enumeration.
    - @param name Property name to check.
      */
      propertyIsEnumerable(name: string): boolean
    /**

    - Builds a locale-aware string for this object. See toString().
      */
      toLocaleString(): string
    /**

    - Produces a string representation that can serialize this object.
    - The serialized string can be passed back to eval() to rebuild the object. Only built-in classes support this.
      */
      toSource(): string
    /**

    - Builds a string form for this object.
    - Many objects, including Date, provide their own implementation instead. When no string value or user-defined toString() exists, the default returns [object type], where type is the object type or the constructor-function name.
      */
      toString(): string
    /**

    - Removes a property's watch function.
    - @param name Property name to stop watching.
      */
      unwatch(name: string): void
    /**

    - Retrieves this object's primitive value.
    - If no primitive value exists, the object itself is returned. Direct calls are rarely needed because the JavaScript interpreter invokes it automatically when a primitive is expected.
      */
      valueOf(): Object
    /**

    - Adds a watch function for a property, called whenever its value changes.
    - The function may accept, alter, or reject a value that the user, application, or script tried to store in the property.
    - @param name Property name to watch.
    - @param func Function invoked when this property's value changes. It must accept three arguments and return the value that will be stored: name: the property whose value changed. oldValue: the previous property value. newValue: the proposed replacement value.
      */
      watch(name: string, func: Function): void
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
