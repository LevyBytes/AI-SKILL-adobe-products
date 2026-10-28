# No support for ...reflect.properties, ...reflect.methods, and toSource()

Because reflect.properties and reflect.methods belong to ExtendScript and have nothing matching them in plain JavaScript, the JavaScript engine leaves them out.

As for toSource(), JavaScript dropped it long ago and no standards body tracks it.

Should you want the same property-and-method listing those methods once gave for an After Effects property, apply the expression below on a Source Text property and tie it — via the pick whip swapped in for thisProperty on line 1 — to whichever property you have in mind:

```javascript
let obj = thisProperty;     // Replace "thisProperty" with a property-link to your desired property.
let props = [];

do {
    Object.getOwnPropertyNames(obj).forEach(prop => {
        if (props.indexOf(prop) === -1) {
            props.push(prop);
        }
    });
} while (obj = Object.getPrototypeOf(obj));

props.join("\n");           // Returns an array of strings listing the properties and methods available.
```

Don't expect this expression to run under the Legacy ExtendScript engine; it relies on syntax and methods that ECMAScript 3 never had.
