# ExtendScript Reflection Interface - ReflectionObject

On any object, the reflect property yields a Reflection Object that describes what the object contains. For instance, this code prints every property name together with its current value:

```javascript
var f = new File ("myfile");
var props = f.reflect.properties;
for (var i = 0; i < props.length; i++) {
    $.writeln('this property ' + props[i].name + ' is ' + f[props[i].name]);
}
```
